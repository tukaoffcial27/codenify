import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codenify | Ultimate Developer Tools Suite",
  description: "Free online developer tools including QR Generator, JSON Formatter, and more. Fast, secure, and professional.",
  icons: { icon: [] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050505] text-white antialiased`}>
        {/* TOP NAVIGATION */}
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#333]">
          <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <Link href="/" className="text-2xl font-black text-[#D4AF37] tracking-tighter">CODENIFY</Link>
            <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
              <Link href="/qr-generator" className="hover:text-[#D4AF37] transition">QR Generator</Link>
              <Link href="/json-formatter" className="hover:text-[#D4AF37] transition">JSON Formatter</Link>
              <Link href="/css-minifier" className="hover:text-[#D4AF37] transition">CSS Minifier</Link>
              <Link href="/base64-converter" className="hover:text-[#D4AF37] transition">Base64</Link>
            </div>
          </div>
        </nav>

        {children}

        {/* FOOTER */}
        <footer className="bg-[#0a0a0a] border-t border-[#222] py-16 px-6 mt-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-[#D4AF37] font-bold text-xl mb-4">CODENIFY</h3>
              <p className="text-gray-500 text-sm">Empowering developers with fast, secure, and accessible browser-based tools since 2026.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                <Link href="/qr-generator" className="hover:text-white transition">QR Generator</Link>
                <Link href="/json-formatter" className="hover:text-white transition">JSON Formatter</Link>
                <Link href="/css-minifier" className="hover:text-white transition">CSS Minifier</Link>
                <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
                <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#222] text-center text-xs text-gray-600">
            &copy; 2026 Codenify App. All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}