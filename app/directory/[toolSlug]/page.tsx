'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import data from '@/global.json';
import { ToolData, slugify } from '@/lib/data-loader';
import { notFound } from 'next/navigation';

export default function SubDirectoryPage({ params }: { params: Promise<{ toolSlug: string }> }) {
  const { toolSlug } = use(params);
  const [searchTerm, setSearchTerm] = useState('');
  const toolData = data as ToolData[];

  // Mencari nama asli tool dari slug URL
  const originalTool = Array.from(new Set(toolData.map(d => d.tool)))
    .find(t => slugify(t) === toolSlug);

  if (!originalTool) notFound();

  // Filter hanya untuk tool ini saja + fitur pencarian (GAMBAR 3)
  const categoryItems = toolData.filter(item => 
    item.tool === originalTool && 
    item.useCase.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="pt-40 pb-32 px-6 bg-[#050505] min-h-screen">
      {/* SUB-DIRECTORY HERO */}
      <header className="max-w-6xl mx-auto mb-16 border-b border-[#222] pb-12 text-center md:text-left">
        <nav className="text-[10px] text-gray-500 uppercase tracking-[0.4em] mb-6 flex gap-2">
          <Link href="/directory" className="hover:text-[#D4AF37]">Registry</Link> <span>/</span> <span className="text-white">{originalTool}</span>
        </nav>
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
          {originalTool} <br /> <span className="text-[#D4AF37]">Specialized Index</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed font-light">
          Detailed repository for <strong>{categoryItems.length}</strong> unique implementations of {originalTool}. 
          Each profile is engineered for specific environment requirements and technical compliance.
        </p>
      </header>

      {/* SEARCH INDEX KHUSUS SUB-TOPIC (GAMBAR 3) */}
      <section className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row items-center gap-6 bg-[#0a0a0a] p-4 rounded-2xl border border-[#222]">
          <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest pl-4">Filter Index:</span>
          <input 
            type="text" 
            placeholder={`Search within ${originalTool} use cases...`} 
            className="flex-grow bg-transparent text-white px-4 py-2 outline-none border-l border-[#222]"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* LINK GRID AESTHETIC */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryItems.slice(0, 100).map((item) => (
          <Link key={item.slug} href={`/${item.slug}`} className="p-6 bg-[#080808] border border-[#111] hover:border-[#D4AF37]/50 rounded-xl transition-all group">
            <h4 className="text-gray-400 text-sm font-bold group-hover:text-white transition-colors">{item.useCase}</h4>
            <div className="mt-4 flex justify-between items-center">
               <span className="text-[8px] text-gray-600 uppercase tracking-widest">Protocol Secured</span>
               <span className="text-[10px] text-[#D4AF37] font-black opacity-0 group-hover:opacity-100 transition-opacity">Deploy →</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}