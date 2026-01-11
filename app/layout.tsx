import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codenify | Professional Developer Tools Suite",
  description: "Secure, high-fidelity developer tools. 100% client-side processing for global engineering teams.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050505] text-white antialiased flex flex-col min-h-screen`}>
        {/* LUXURY NAVIGATION WITH WORKING MOBILE MENU */}
        <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/20">
          <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex justify-between items-center relative">
            <Link href="/" className="text-2xl md:text-3xl font-black text-[#D4AF37] tracking-tighter hover:opacity-80 transition z-50">
              CODENIFY
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
              <Link href="/directory" className="hover:text-[#D4AF37] transition">Directory</Link>
              <Link href="/methodology" className="hover:text-[#D4AF37] transition">Methodology</Link>
              <Link href="/about" className="hover:text-[#D4AF37] transition">About</Link>
              <Link href="/contact" className="hover:text-[#D4AF37] transition">Contact</Link>
            </div>

            {/* MOBILE MENU LOGIC (CSS ONLY) */}
            <div className="md:hidden z-50">
              <label htmlFor="mobile-menu-toggle" className="flex flex-col gap-1.5 cursor-pointer">
                <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />
                <div className="w-6 h-0.5 bg-[#D4AF37]"></div>
                <div className="w-4 h-0.5 bg-[#D4AF37] self-end"></div>
                
                {/* MOBILE MENU LIST - Muncul saat diklik */}
                <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-all duration-300 -z-10 h-screen w-screen left-0 top-0">
                  <Link href="/directory" className="text-[#D4AF37] font-black text-xl uppercase tracking-widest">Directory</Link>
                  <Link href="/methodology" className="text-[#D4AF37] font-black text-xl uppercase tracking-widest">Methodology</Link>
                  <Link href="/about" className="text-[#D4AF37] font-black text-xl uppercase tracking-widest">About</Link>
                  <Link href="/contact" className="text-[#D4AF37] font-black text-xl uppercase tracking-widest">Contact</Link>
                </div>
              </label>
            </div>
          </div>
        </nav>

        <div className="flex-grow">{children}</div>

        {/* ELEGANT FOOTER - SITEMAP TETAP DIHAPUS */}
        <footer className="bg-[#080808] border-t border-[#D4AF37]/10 py-20 px-6 mt-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-6">
              <h3 className="text-[#D4AF37] font-black text-2xl tracking-tighter">CODENIFY</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-loose max-w-sm mx-auto md:mx-0">
                The gold standard in developer utilities. Engineered for the elite, delivering technical precision with a privacy-first architecture.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-black text-white text-[10px] uppercase tracking-[0.4em]">Corporate</h4>
              <nav className="flex flex-col gap-4 text-xs font-medium text-gray-500">
                <Link href="/about" className="hover:text-[#D4AF37] transition">About Us</Link>
                <Link href="/methodology" className="hover:text-[#D4AF37] transition">Our Methodology</Link>
                <Link href="/contact" className="hover:text-[#D4AF37] transition">Contact Support</Link>
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="font-black text-white text-[10px] uppercase tracking-[0.4em]">Legal</h4>
              <nav className="flex flex-col gap-4 text-xs font-medium text-gray-500">
                <Link href="/privacy" className="hover:text-[#D4AF37] transition">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-[#D4AF37] transition">Terms of Service</Link>
              </nav>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#D4AF37]/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] text-gray-600 uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} Codenify Global Operations.
            </p>
            <div className="hidden md:flex gap-8 opacity-20 text-[9px] font-black tracking-widest">
               <span>AES-256 ENCRYPTED</span>
               <span>ZERO-LOG POLICY</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}