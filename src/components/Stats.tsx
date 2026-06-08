import React from 'react';

const stats = [
  { figure: "15+", label: "Years of Manufacturing" },
  { figure: "15,000 m²", label: "Own Production Facility" },
  { figure: "80+", label: "Skilled Craftsmen" },
  { figure: "30+", label: "Export Countries" },
  { figure: "500+", label: "B2B Clients Served" },
  { figure: "15–25 Days", label: "Standard Lead Time" },
];

export default function Stats() {
  return (
    <section className="bg-[#0A1628] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              <span className="text-3xl font-bold text-white md:text-4xl">{stat.figure}</span>
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
