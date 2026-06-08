import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b py-24">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-[#0A1628]">Contact Us</h1>
          <p className="max-w-xl mx-auto text-lg text-slate-500">
            Ready to elevate your property? Get in touch for a factory-direct quote or request a sample for your next project.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0A1628]">Request a Quote</h2>
              <p className="text-slate-500">We respond to all professional inquiries within 24 hours.</p>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-500">First Name</label>
                  <input className="w-full border rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-500">Last Name</label>
                  <input className="w-full border rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Work Email</label>
                <input className="w-full border rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Company Name</label>
                <input className="w-full border rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Hotel / Procurement Firm" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Message / Inquiry Details</label>
                <textarea className="w-full border rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Please specify models, quantities and customization requirements..."></textarea>
              </div>
              <button className="w-full bg-[#0A1628] text-white font-bold py-3 rounded-md hover:bg-[#1a2b45] transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-12 lg:pl-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#0A1628]">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                   <div className="h-10 w-10 flex items-center justify-center bg-blue-50 rounded-full text-blue-600">
                     <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Email (Contact Person: Eliane)</div>
                      <div className="text-blue-600 font-medium">Eliane@fsbox.com</div>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                   <div className="h-10 w-10 flex items-center justify-center bg-green-50 rounded-full text-green-600">
                     <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                   </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Phone / WhatsApp</div>
                      <div className="text-green-600 font-medium">+86 199 8201 2846</div>
                    </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#0A1628]">Office & Factory</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No. 32, Ganjiao Industrial Zone, Lishui Town, Nanhai District, Foshan, Guangdong, China
              </p>
              <div className="aspect-video relative overflow-hidden rounded-xl bg-slate-100 border">
                 <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                   [ Map Placeholder ]
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
