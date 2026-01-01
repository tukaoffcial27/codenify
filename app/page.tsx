import Link from 'next/link';
import data from '../global.json';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-[#D4AF37] mb-4">Codenify Suite</h1>
        <p className="text-gray-400 mb-12">Select a specialized tool for your specific needs:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.slice(0, 15).map((item) => (
            <Link 
              key={item.slug} 
              href={`/${item.slug}`}
              className="p-6 bg-[#111] border border-[#333] rounded-xl hover:border-[#D4AF37] transition-all text-left group"
            >
              <h2 className="text-[#D4AF37] font-bold text-xl mb-2 group-hover:underline">{item.tool}</h2>
              <p className="text-gray-500 text-sm">Optimized for: <span className="text-gray-300">{item.useCase}</span></p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}