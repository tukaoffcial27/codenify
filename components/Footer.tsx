import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#111] py-20 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-[#D4AF37] font-black text-xl mb-4">CODENIFY</h3>
          <p className="text-gray-500 text-sm">Professional-grade developer tools. Secure, fast, and 100% client-side.</p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-gray-400">
          <h4 className="text-white font-bold mb-2 uppercase">Resources</h4>
          <Link href="/directory" className="hover:text-[#D4AF37]">Tools Directory</Link>
          <Link href="/sitemap.xml" className="hover:text-[#D4AF37]">Sitemap</Link>
        </div>
        <div className="flex flex-col gap-3 text-sm text-gray-400">
          <h4 className="text-white font-bold mb-2 uppercase">Legal</h4>
          <Link href="/privacy" className="hover:text-[#D4AF37]">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#D4AF37]">Terms of Service</Link>
          <Link href="/contact" className="hover:text-[#D4AF37]">Contact Us</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#111] text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Codenify. Built for professional developers.
      </div>
    </footer>
  );
}