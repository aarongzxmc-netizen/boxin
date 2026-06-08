import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
            Certified 304 Stainless Steel · Factory-Direct Since 2010
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl max-w-4xl">
            Built to Last. <span className="text-blue-500">Designed to Impress.</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-400">
            From five-star lobbies to municipal streets, Boxin manufactures the stainless steel bins, ashtrays and hospitality hardware that the world&apos;s most demanding properties specify by name.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-base font-semibold text-white shadow transition-all hover:bg-blue-500 hover:scale-105"
            >
              Get a Free Quote in 24h
            </a>
            <a
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-md border border-slate-700 bg-slate-800/50 px-8 text-base font-semibold text-white shadow backdrop-blur transition-all hover:bg-slate-800"
            >
              Request a Sample
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
            <span>Own 15,000 m² Factory</span>
            <span>CE · ISO 9001 · SGS</span>
            <span>MOQ from 50 pcs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
