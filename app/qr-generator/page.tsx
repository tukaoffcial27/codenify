"use client";
import { useState } from 'react';

export default function QRPage() {
  const [text, setText] = useState("");

  return (
    <main className="pt-32 px-6 max-w-5xl mx-auto pb-20">
      {/* TOOL HERO */}
      <section className="text-center mb-20">
        <h1 className="text-6xl font-black text-[#D4AF37] mb-6 uppercase tracking-tighter">QR Code Generator</h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">Generate high-quality QR codes for URLs, text, or business data instantly.</p>
      </section>

      {/* TOOL FUNCTIONALITY */}
      <div className="bg-[#111] p-10 border border-[#333] rounded-[3rem] shadow-2xl mb-24">
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter URL or Text here..." 
          className="w-full p-6 bg-black border border-[#444] rounded-2xl mb-10 text-xl text-center focus:border-[#D4AF37] outline-none"
        />
        {text && (
          <div className="bg-white p-6 rounded-3xl inline-block mx-auto flex justify-center shadow-2xl">
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(text)}`} alt="QR Result" />
          </div>
        )}
      </div>

      {/* TUTORIAL & CONTENT (>500 Words) */}
      <article className="prose prose-invert max-w-none border-t border-[#222] pt-20">
        <h2 className="text-4xl font-bold text-[#D4AF37] mb-10">How to Use the Codenify QR Generator</h2>
        <div className="grid md:grid-cols-2 gap-12 text-gray-300 leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Step 1: Input Your Content</h3>
            <p>Simply type or paste the URL, text, or data you wish to transform into a QR code into the input field above. Our system supports various data types including standard URLs, email addresses, and plain text...</p>
            {/* LANJUTKAN TEKS TUTORIAL DI SINI */}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Step 2: Instant Generation</h3>
            <p>As you type, the QR code updates in real-time. This dynamic generation allows you to verify the structure and complexity of the code before you download or scan it. We use the highest error correction standards...</p>
          </div>
        </div>
        <p className="mt-10 text-gray-300">
          QR codes have become an essential bridge between the physical and digital worlds. In the modern era of touchless interactions, businesses use QR codes for digital menus, contactless payments, and direct social media engagement. Our tool is optimized to provide maximum scannability even on low-resolution devices...
        </p>
      </article>
    </main>
  );
}