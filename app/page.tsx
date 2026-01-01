"use client";
import { useState } from 'react';
import Link from 'next/link';
import data from '../global.json';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("qr");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleProcess = () => {
    try {
      if (activeTab === "json") setOutput(JSON.stringify(JSON.parse(input), null, 2));
      if (activeTab === "css") setOutput(input.replace(/\s+/g, ' ').replace(/\/\*.*?\*\//g, '').replace(/ ?([\{\}\:\;\,]) ?/g, '$1').trim());
      if (activeTab === "base64") setOutput(btoa(input));
    } catch (e) { setOutput("Error: Format input tidak valid."); }
  };

  return (
    <main className="min-h-screen bg-[#050505] pt-24 pb-20 px-6 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-[#D4AF37] text-center mb-4">Codenify Suite</h1>
        <p className="text-gray-400 text-center mb-12 italic">Professional toolset for developers</p>
        
        {/* Navigasi 4 Tool Utama */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: "qr", label: "QR Generator" },
            { id: "json", label: "JSON Formatter" },
            { id: "css", label: "CSS Minifier" },
            { id: "base64", label: "Base64 Converter" }
          ].map((tab) => (
            <button key={tab.id} onClick={() => {setActiveTab(tab.id); setOutput(""); setInput("");}} 
              className={`px-8 py-3 rounded-xl border-2 transition-all font-bold ${activeTab === tab.id ? "bg-[#D4AF37] text-black border-[#D4AF37] scale-105" : "border-[#333] text-gray-500 hover:border-[#D4AF37]"}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panel Kerja Alat */}
        <div className="bg-[#111] p-10 border border-[#333] rounded-[2rem] shadow-2xl mb-24 max-w-4xl mx-auto">
          {activeTab === "qr" ? (
            <div className="space-y-6 text-center">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Masukkan link atau teks untuk QR Code..." className="w-full p-5 bg-black border border-[#444] rounded-2xl outline-none focus:border-[#D4AF37] text-lg" />
              {input && (
                <div className="bg-white p-4 rounded-2xl inline-block shadow-lg animate-fade-in">
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(input)}`} alt="QR Result" />
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Masukkan ${activeTab.toUpperCase()} mentah di sini...`} className="w-full h-48 p-5 bg-black border border-[#444] rounded-2xl outline-none focus:border-[#D4AF37] font-mono text-sm" />
              <button onClick={handleProcess} className="w-full bg-[#D4AF37] text-black font-extrabold py-4 rounded-xl hover:opacity-90 transition shadow-lg uppercase">Proses {activeTab}</button>
              {output && <textarea readOnly value={output} className="w-full h-48 p-5 bg-[#0a0a0a] border border-green-900/30 rounded-2xl font-mono text-green-500 text-sm" />}
            </div>
          )}
        </div>

        {/* Grid pSEO (SEO Nyawa Website) */}
        <div className="border-t border-[#222] pt-16">
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-10 text-center uppercase tracking-[0.3em]">Specialized Tool Directory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.slice(0, 15).map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="p-7 bg-[#111] border border-[#333] rounded-[1.5rem] hover:border-[#D4AF37] transition-all group hover:bg-[#161616]">
                <h3 className="text-[#D4AF37] font-bold text-xl mb-2 group-hover:underline">{item.tool}</h3>
                <p className="text-gray-500 text-sm">For: <span className="text-gray-300">{item.useCase}</span></p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}