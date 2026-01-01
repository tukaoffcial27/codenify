"use client";
import { useState } from 'react';
import Link from 'next/link';
import data from '../global.json';

export default function HomePage() {
  const [activeTool, setActiveTool] = useState("qr");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  // FUNGSI UTAMA UNTUK MENJALANKAN TOOLS
  const handleProcess = () => {
    try {
      if (activeTool === "json") {
        setOutput(JSON.stringify(JSON.parse(input), null, 2));
      } else if (activeTool === "css") {
        setOutput(input.replace(/\s+/g, ' ').replace(/\/\*.*?\*\//g, '').replace(/ ?([\{\}\:\;\,]) ?/g, '$1').trim());
      } else if (activeTool === "base64") {
        setOutput(btoa(input));
      }
    } catch (e) {
      setOutput("Error: Format input tidak valid. Silakan periksa kembali kodingan Anda.");
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] pt-24 pb-20 px-6 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-[#D4AF37] text-center mb-4">Codenify Master Suite</h1>
        <p className="text-gray-400 text-center mb-12 italic">Solusi praktis untuk kebutuhan developer setiap hari.</p>
        
        {/* NAVIGASI TAB UNTUK MEMILIH TOOL */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: "qr", label: "QR Generator" },
            { id: "json", label: "JSON Formatter" },
            { id: "css", label: "CSS Minifier" },
            { id: "base64", label: "Base64 Converter" }
          ].map((item) => (
            <button key={item.id} onClick={() => {setActiveTool(item.id); setOutput(""); setInput("");}} 
              className={`px-8 py-3 rounded-xl border-2 font-bold transition-all duration-300 ${activeTool === item.id ? "bg-[#D4AF37] text-black border-[#D4AF37] scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)]" : "border-[#333] text-gray-500 hover:border-[#D4AF37] hover:text-[#D4AF37]"}`}>
              {item.label}
            </button>
          ))}
        </div>

        {/* AREA KERJA (Tempat Orang Memasukkan Data & Melihat Hasil) */}
        <div className="bg-[#111] p-10 border border-[#333] rounded-[2.5rem] shadow-2xl mb-24 max-w-4xl mx-auto border-t-[#D4AF37]">
          {activeTool === "qr" ? (
            <div className="space-y-8 text-center">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ketik URL atau teks untuk jadi QR Code..." className="w-full p-5 bg-black border border-[#444] rounded-2xl outline-none focus:border-[#D4AF37] text-lg text-center" />
              {input && (
                <div className="bg-white p-6 rounded-2xl inline-block shadow-[0_0_30px_rgba(255,255,255,0.1)] animate-in fade-in zoom-in duration-500">
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(input)}`} alt="Hasil QR Code" />
                  <p className="text-black text-xs font-bold mt-4 uppercase">Scan untuk melihat hasil</p>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Tempel ${activeTool.toUpperCase()} mentah Anda di sini...`} className="w-full h-56 p-6 bg-black border border-[#444] rounded-2xl outline-none focus:border-[#D4AF37] font-mono text-sm leading-relaxed" />
              <button onClick={handleProcess} className="w-full bg-[#D4AF37] text-black font-black py-5 rounded-2xl hover:opacity-90 transition-all shadow-lg text-lg uppercase tracking-widest">PROSES {activeTool}</button>
              {output && (
                <div className="space-y-2 animate-in slide-in-from-bottom-4 duration-500">
                  <p className="text-xs text-[#D4AF37] font-bold uppercase ml-2">Hasil Output:</p>
                  <textarea readOnly value={output} className="w-full h-56 p-6 bg-[#0a0a0a] border border-green-900/40 rounded-2xl font-mono text-green-400 text-sm shadow-inner" />
                </div>
              )}
            </div>
          )}
        </div>

        {/* DIREKTORI SEO (Daftar Kotak Emas yang Sudah Ada) */}
        <div className="border-t border-[#222] pt-16">
          <h2 className="text-2xl font-black text-[#D4AF37] mb-12 text-center uppercase tracking-[0.4em]">Specialized Directories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.slice(0, 18).map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="p-8 bg-[#111] border border-[#333] rounded-[2rem] hover:border-[#D4AF37] transition-all group hover:bg-[#161616] hover:-translate-y-2 duration-300">
                <h3 className="text-[#D4AF37] font-bold text-xl mb-3 group-hover:underline leading-tight">{item.tool}</h3>
                <p className="text-gray-500 text-sm">Optimasi khusus untuk: <span className="text-gray-300 font-medium">{item.useCase}</span></p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}