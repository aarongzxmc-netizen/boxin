import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChoose from "@/components/WhyChoose";
import Industries from "@/components/Industries";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <WhyChoose />
      <Industries />
      
      {/* Featured Products Preview */}
      <section className="py-24 bg-white border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl">
                Core Collections
              </h2>
              <p className="max-w-2xl text-slate-500">
                Explore our best-selling stainless steel solutions for global hospitality and commercial projects.
              </p>
            </div>
            <a href="/products" className="text-blue-600 font-semibold hover:underline flex items-center">
              View All Products
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Decorative Lobby Bin", model: "BX-LB04", tag: "Luxury Lobby" },
              { name: "3-Compartment Station", model: "BX-RC02", tag: "Municipal" },
              { name: "Luxury Bellman Cart", model: "BX-LC02", tag: "Hotel Supply" },
            ].map((product, i) => (
              <div key={i} className="group relative flex flex-col overflow-hidden rounded-lg border bg-white transition-all hover:shadow-xl">
                <div className="aspect-square bg-slate-100 flex items-center justify-center text-slate-400">
                  [ {product.model} Image ]
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">{product.tag}</div>
                  <h3 className="text-xl font-bold text-[#0A1628] mb-1">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">Model: {product.model}</p>
                  <a href={`/products`} className="text-sm font-bold text-[#0A1628] group-hover:text-blue-600">
                    Learn More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            From Concept to Delivery — We Make It Happen.
          </h2>
          <p className="max-w-2xl mx-auto text-blue-100 mb-10 text-lg">
            Tell us your project, your brand and your timeline. Get a factory-direct quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-base font-semibold text-blue-600 shadow transition-all hover:bg-blue-50"
            >
              Get a Free Quote
            </a>
            <a
              href="https://wa.me/8619982012846"
              className="inline-flex h-12 items-center justify-center rounded-md border border-blue-400 bg-blue-500/50 px-8 text-base font-semibold text-white shadow backdrop-blur transition-all hover:bg-blue-500"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
