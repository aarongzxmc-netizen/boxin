import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
              We don&apos;t just make bins. We make the first impression.
            </h1>
            <p className="text-xl text-slate-400">
              Founded in 2010, Foshan Boxin is a source manufacturer of premium stainless steel products and hardware for the hospitality and commercial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0A1628]">Durable Luxury</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Located in Foshan, Guangdong — the heart of China&apos;s manufacturing industry — we operate a state-of-the-art 15,000 m² production facility. Our philosophy combines heavy-gauge 304 stainless steel with modern aesthetics and maintenance-free mechanical innovation.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 italic text-blue-900">
                &quot;To provide world-class stainless steel solutions that combine durability, elegance, and sustainability.&quot;
              </div>
            </div>
            <div className="aspect-video relative overflow-hidden rounded-2xl bg-slate-100 shadow-xl border">
               <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                 [ Factory & Showroom Image ]
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Stats */}
      <section className="py-24 bg-[#0A1628] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="text-3xl font-bold">A Factory You Can Audit</h2>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "15,000 m²", desc: "Own plant with full process control under one roof." },
              { title: "CNC + Laser", desc: "Precision welds and flawless mirror or brushed finish." },
              { title: "80+ Skilled Craftsmen", desc: "Consistency that survives large-scale hotel rollouts." },
              { title: "RMB 10M", desc: "Monthly output to absorb container orders reliably." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">{item.title}</div>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QC Process */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-[#0A1628]">Every Bin is Documented</h2>
            <p className="text-slate-500">Our 5-Stage QC Process ensures zero-defect delivery.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {[
              "Raw Material Inspection",
              "In-Process Quality Check",
              "Surface Treatment QC",
              "100% Final Inspection",
              "Pre-Shipment AQL Sampling"
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg border">
                <div className="text-2xl font-bold text-blue-600 mb-2">{i+1}</div>
                <div className="text-xs font-bold text-[#0A1628] uppercase">{step}</div>
                {i < 4 && (
                   <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                     &rarr;
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
