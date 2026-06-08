import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foshan Boxin | Premium 304 Stainless Steel Trash Bins & Hotel Hardware",
  description: "Foshan Boxin — Your trusted manufacturer of premium 304 stainless steel trash bins, hotel hardware & commercial cleaning equipment since 2010. Factory-direct, OEM/ODM welcome.",
};

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight text-[#0A1628]">BOXIN STEEL</span>
        </a>
        <nav className="hidden space-x-8 md:flex">
          <a href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</a>
          <a href="/products" className="text-sm font-medium hover:text-blue-600 transition-colors">Products</a>
          <a href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">About Us</a>
          <a href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#0A1628] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#1a2b45]"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#0A1628]">BOXIN STEEL</h3>
            <p className="text-sm text-slate-500">
              Premium 304 stainless steel trash bins, ashtrays & hotel hardware — manufactured in our own 15,000 m² Foshan factory since 2010.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0A1628]">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="/products" className="hover:text-[#0A1628]">Product Catalog</a></li>
              <li><a href="/about" className="hover:text-[#0A1628]">Factory Strength</a></li>
              <li><a href="/contact" className="hover:text-[#0A1628]">Request a Sample</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0A1628]">Contact Us</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>Email: Eliane@fsbox.com</li>
              <li>WhatsApp: +86 199 8201 2846</li>
              <li>Address: No. 32, Ganjiao Industrial Zone, Lishui Town, Nanhai District, Foshan, Guangdong, China</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0A1628]">Certifications</h4>
            <div className="flex space-x-4 text-xs font-bold text-slate-400">
              <span>CE</span>
              <span>ISO 9001</span>
              <span>SGS</span>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Foshan Boxin Environmental Protection Equipment Co., Ltd. All rights reserved.</p>
        </div>
      </div>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/8619982012846"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
