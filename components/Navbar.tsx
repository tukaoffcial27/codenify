import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-[#D4AF37] tracking-tighter">
          CODENIFY
        </Link>
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/directory" className="hover:text-[#D4AF37] transition">Directory</Link>
        </div>
      </div>
    </nav>
  );
}