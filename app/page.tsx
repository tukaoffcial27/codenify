"use client"; // Wajib untuk fungsionalitas interaktif
import { useState } from 'react';
import Link from 'next/link';
import data from '../global.json';

export default function HomePage() {
  const [text, setText] = useState("");
  const qrBaseUrl = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=";

  return (
    <main className="min-h-screen bg-[#050505] pt-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* GENERATOR UTAMA (Restorasi Fungsi index.html) */}
        <section className="mb-24 text-center">
          <h1 className="text-5xl font-bold text-[#D4AF37] mb-6">Codenify QR Generator</h1>
          <p className="text-gray-400 mb-10 text-xl max-w-2xl mx-auto">
            Generate secure, high-quality QR codes instantly for free.
          </p>
          
          <div className="bg-[#111] p-8 border border-[#333] rounded-3xl max-w-2xl mx-auto shadow-2xl">
            <input 
              type="text" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your URL or text here..." 
              className="w-full p-5 bg-black border border-[#444] rounded-xl mb-6 text-white focus:border-[#D4AF37] outline-none transition-all"
            />
            
            {text && (
              <div className="mb-6 flex justify-center bg-white p-4 rounded-xl inline-block mx-auto">
                <img src={`${qrBaseUrl}${encodeURIComponent(text)}`} alt="QR Code" />
              </div>
            )}

            <button 
              className="w-full bg-[#D4AF37] text-black font-bold py-5 rounded-xl hover:scale-[1.02] transition-transform active:scale-95"
              onClick={() => text && window.open(`${qrBaseUrl}${encodeURIComponent(text)}`, '_blank')}
            >
              Download QR Code
            </button>
          </div>
        </section>

        {/* DAFTAR TOOL PSEO (Grid Emas) */}
        <div className="border-t border-[#222] pt-16 pb-20">
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-8 text-center uppercase tracking-widest">Specialized Developer Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.slice(0, 15).map((item) => (
              <Link 
                key={item.slug} 
                href={`/${item.slug}`}
                className="p-6 bg-[#111] border border-[#333] rounded-2xl hover:border-[#D4AF37] transition-all group hover:bg-[#151515]"
              >
                <h3 className="text-[#D4AF37] font-bold text-lg mb-2 group-hover:underline">{item.tool}</h3>
                <p className="text-gray-500 text-xs tracking-wide">Optimization for: <span className="text-gray-300">{item.useCase}</span></p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}