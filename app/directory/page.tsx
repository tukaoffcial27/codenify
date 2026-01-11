'use client';

import { useState } from 'react';
import Link from 'next/link';
import data from '@/global.json';
import { ToolData, slugify } from '@/lib/data-loader';

export default function DirectoryHubPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const toolData = data as ToolData[];
  
  // 4 Tools Utama sebagai nyawa website
  const coreCategories = ["QR Code Generator", "JSON Formatter", "CSS Minifier", "Base64 Converter"];

  // Filter pencarian global untuk memudahkan user
  const filteredItems = toolData.filter(item => 
    item.useCase.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 20);

  return (
    <main className="pt-40 pb-32 px-6 bg-[#050505] min-h-screen">
      {/* 1. HERO SECTION: Menjelaskan Fungsi Website secara Jelas */}
      <header className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
          Tools <span className="text-[#D4AF37]">Registry</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
          The ultimate search index for professional developers. Access our specialized sub-directories for core utilities or search the global database of 20,000+ localized use cases.
        </p>
      </header>

      {/* 2. CORE HUB: 4 Kotak Navigasi Utama (Entry Points) */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
        {coreCategories.map((cat) => (
          <Link 
            key={cat} 
            href={`/directory/${slugify(cat)}`} 
            className="group p-10 bg-[#0a0a0a] border border-[#222] hover:border-[#D4AF37] transition-all rounded-3xl text-center shadow-2xl"
          >
            <h3 className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.4em] mb-4 opacity-60 italic">Sub-Directory</h3>
            <span className="text-white font-black text-xl uppercase tracking-tighter group-hover:text-[#D4AF37] transition-colors">
              {cat}
            </span>
          </Link>
        ))}
      </section>

      {/* 3. SEARCH INDEX: Pencarian Cepat dengan Indikator Transparan */}
      <section className="max-w-4xl mx-auto mb-20 text-center">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Global Search: Type any platform or industry..." 
            className="w-full bg-[#0a0a0a] border border-[#222] text-white px-8 py-6 rounded-2xl focus:border-[#D4AF37] outline-none text-lg transition-all placeholder:text-gray-700 font-medium"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* PERBAIKAN: Menambahkan indikator jumlah data untuk transparansi */}
        <p className="mt-6 text-[10px] text-gray-600 uppercase tracking-[0.5em] font-black">
          Displaying {filteredItems.length} of 20,000+ localized use cases
        </p>
      </section>

      {/* 4. AESTHETIC RESULTS: Link yang Rapi */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {filteredItems.map((item) => (
          <Link 
            key={item.slug} 
            href={`/${item.slug}`} 
            className="p-6 bg-[#080808] border border-[#111] hover:border-[#D4AF37]/40 rounded-xl transition-all h-36 flex flex-col justify-between group"
          >
            <div>
              <span className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-[0.2em] block mb-2 opacity-50">{item.tool}</span>
              <h4 className="text-gray-400 text-sm font-bold group-hover:text-white transition-colors leading-snug">
                {item.useCase}
              </h4>
            </div>
            <span className="text-[10px] text-gray-700 font-black uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">
              Launch Tool →
            </span>
          </Link>
        ))}
      </section>

      {/* 5. DETAILED FOOTER ARTICLE: Untuk AdSense */}
      <article className="max-w-4xl mx-auto border-t border-[#D4AF37]/10 pt-24">
        <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-10 italic underline decoration-[#D4AF37]">
          Professional Utility Management
        </h2>
        <div className="text-gray-400 text-lg leading-loose space-y-8 text-justify font-light">
          <p>
            The <strong>Codenify Registry</strong> is an elite-tier database architected for global developers. We provide localized context for thousands of technical scenarios, ensuring that every utility is optimized for its specific industrial environment.
          </p>
          <p>
            By utilizing our <strong>4-Layer Matrix methodology</strong>, we eliminate the need for generic tools that often compromise data integrity. Every entry in this registry is verified for browser-side execution, maintaining our strict zero-log privacy standard across all 20,000 use cases.
          </p>
        </div>
      </article>
    </main>
  );
}