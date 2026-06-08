import { getAllProducts } from "@/lib/products";

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-[#0A1628] py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Product Catalog
            </h1>
            <p className="mt-4 text-lg text-slate-400">
              Discover our comprehensive range of premium stainless steel solutions engineered for the world&apos;s most demanding environments.
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col space-y-4"
            >
              <div className="aspect-square relative overflow-hidden rounded-xl bg-slate-100 transition-shadow group-hover:shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                  [ {product.model} Image ]
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0A1628] group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-slate-500">
                  Model: {product.model}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Trust Banner */}
      <section className="bg-slate-50 py-16 border-t">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-4">Can&apos;t find what you are looking for?</h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto">
            We provide full OEM/ODM services for custom dimensions, materials, and finishes. Let our engineering team bring your concept to life.
          </p>
          <a
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#0A1628] px-6 text-sm font-medium text-white shadow hover:bg-[#1a2b45]"
          >
            Request Custom Solution
          </a>
        </div>
      </section>
    </div>
  );
}
