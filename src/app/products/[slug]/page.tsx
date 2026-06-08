import { getProductBySlug, getAllProducts } from "@/lib/products";
import { notFound } from "next/navigation";

// Basic Markdown to HTML helper
function parseMarkdown(md: string) {
  return md
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold my-4">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold my-4 border-b pb-2">$2</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold my-3">$1</h3>')
    .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
    .replace(/^\- (.*$)/gm, '<li class="ml-4 list-disc">$1</li>')
    .replace(/\n\n/g, '</p><p class="my-4">')
    .replace(/\|(.*)\|/g, (match) => {
       // Very basic table row handling
       const cells = match.split('|').filter(c => c.trim().length > 0);
       return `<div class="grid grid-cols-2 gap-4 border-b py-2"><span class="font-bold text-slate-700">${cells[0]?.trim()}</span><span class="text-slate-500">${cells[1]?.trim()}</span></div>`;
    });
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const htmlContent = parseMarkdown(product.content);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-slate-100 border shadow-sm">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium text-lg">
                [ {product.model} Primary Image ]
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-lg bg-slate-50 border flex items-center justify-center text-[10px] text-slate-300">
                  Detail {i}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <nav className="flex mb-4 text-xs font-medium text-slate-400 uppercase tracking-widest">
              <a href="/products" className="hover:text-blue-600">Products</a>
              <span className="mx-2">/</span>
              <span>{product.category}</span>
            </nav>
            <h1 className="text-4xl font-extrabold text-[#0A1628] mb-2">{product.title}</h1>
            <p className="text-xl text-blue-600 font-bold mb-6">Model: {product.model}</p>
            
            <div className="space-y-6">
              <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-800 mb-4">Quick Specs</h3>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <dt className="text-xs text-slate-500 uppercase">Material</dt>
                  <dd className="text-sm font-semibold text-slate-800">{product.material}</dd>
                  <dt className="text-xs text-slate-500 uppercase">Capacity</dt>
                  <dd className="text-sm font-semibold text-slate-800">{product.capacity}</dd>
                  <dt className="text-xs text-slate-500 uppercase">Surface</dt>
                  <dd className="text-sm font-semibold text-slate-800">{product.surface}</dd>
                  <dt className="text-xs text-slate-500 uppercase">Size</dt>
                  <dd className="text-sm font-semibold text-slate-800">{product.size}</dd>
                </dl>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#0A1628] px-8 text-base font-semibold text-white shadow hover:bg-[#1a2b45] transition-colors"
                >
                  Request a Quote
                </a>
                <a
                  href={`https://wa.me/8619982012846?text=Interested%20in%20Model%20${product.model}`}
                  className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-base font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  WhatsApp Inquiry
                </a>
              </div>

              <div className="pt-8 border-t">
                <div 
                  className="prose prose-slate max-w-none text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: htmlContent }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related/Value Block */}
      <section className="bg-slate-50 py-16 border-y">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-bold text-[#0A1628]">Genuine 304 Guarantee</h4>
              <p className="text-sm text-slate-500">We never substitute for cheaper grades. Material certs available for every batch.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#0A1628]">OEM/ODM Welcome</h4>
              <p className="text-sm text-slate-500">Custom colors, logos, and dimensions. Low MOQ for customized orders.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#0A1628]">Global Shipping</h4>
              <p className="text-sm text-slate-500">Reinforced export packaging. Reliable delivery to 30+ countries.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
