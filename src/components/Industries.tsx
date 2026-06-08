import React from 'react';

const industries = [
  "Hotels & Resorts",
  "Shopping Malls",
  "Airports",
  "Office Towers",
  "Municipal & Public Spaces",
  "Hospitals & Labs",
  "Convention Centers",
];

export default function Industries() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl">
              Specified Across Every High-Traffic Environment
            </h2>
            <p className="text-lg text-slate-500">
              Boxin products are engineered to meet the specific compliance and aesthetic demands of global commercial sectors.
            </p>
            <ul className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              {industries.map((item, index) => (
                <li key={index} className="flex items-center space-x-3 text-sm font-medium text-slate-700">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-200 shadow-2xl">
            {/* Placeholder for Industry Image */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
              [ Industry Showcase Image Placeholder ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
