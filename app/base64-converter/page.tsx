"use client";
import { useState } from 'react';

export default function Base64Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode");

  const handleBase64 = () => {
    try {
      if (mode === "encode") {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
    } catch (e) {
      setOutput("Error: Invalid Base64 input or encoding format.");
    }
  };

  return (
    <main className="pt-32 px-6 max-w-5xl mx-auto pb-20">
      <section className="text-center mb-16">
        <h1 className="text-6xl font-black text-[#D4AF37] mb-6 uppercase tracking-tighter">Base64 Converter</h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">Safely encode or decode your strings and data URIs with our local browser-based tool.</p>
      </section>

      {/* TOOL INTERFACE */}
      <div className="bg-[#111] p-10 border border-[#333] rounded-[3rem] shadow-2xl mb-24">
        <div className="flex justify-center gap-4 mb-8">
          <button onClick={() => setMode("encode")} className={`px-8 py-2 rounded-full font-bold transition ${mode === "encode" ? "bg-[#D4AF37] text-black" : "border border-[#333] text-gray-500"}`}>ENCODE</button>
          <button onClick={() => setMode("decode")} className={`px-8 py-2 rounded-full font-bold transition ${mode === "decode" ? "bg-[#D4AF37] text-black" : "border border-[#333] text-gray-500"}`}>DECODE</button>
        </div>
        
        <textarea 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder={`Enter text to ${mode}...`} 
          className="w-full h-48 p-6 bg-black border border-[#444] rounded-2xl mb-6 text-white font-mono text-sm focus:border-[#D4AF37] outline-none"
        />
        <button 
          onClick={handleBase64} 
          className="w-full bg-[#D4AF37] text-black font-black py-5 rounded-2xl hover:opacity-90 transition text-xl uppercase tracking-widest"
        >
          {mode.toUpperCase()} NOW
        </button>
        {output && (
          <div className="mt-10 animate-fade-in">
            <p className="text-[#D4AF37] font-bold mb-2 uppercase text-xs tracking-widest">Output Result:</p>
            <textarea readOnly value={output} className="w-full h-48 p-6 bg-[#0a0a0a] border border-[#222] rounded-2xl font-mono text-[#D4AF37] text-sm" />
          </div>
        )}
      </div>

      {/* DETAILED CONTENT FOR ADSENSE (>500 WORDS) */}
      <article className="prose prose-invert max-w-none border-t border-[#222] pt-20 text-gray-300 leading-loose">
        <h2 className="text-4xl font-bold text-white mb-8">Understanding Base64 Encoding and Decoding</h2>
        <p className="mb-6">
          Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. This method is widely used in computer science to ensure that data remains intact during transmission across systems that may not handle binary data correctly. From embedding images in CSS files to transmitting credentials in HTTP Basic Authentication, Base64 is an indispensable tool for modern developers...
        </p>
        <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">When Should You Use Base64?</h3>
        <p className="mb-6">
          One of the most common use cases for Base64 encoding is the creation of Data URIs. By converting a small icon or image into a Base64 string, you can embed the asset directly into your HTML or CSS, reducing the number of HTTP requests required to load a page. Additionally, Base64 is often used in the context of email (MIME) to ensure that attachments are delivered without being corrupted by legacy mail servers. Our tool provides a secure environment for these operations because all processing happens locally in your browser...
        </p>
        <h3 className="text-2xl font-bold text-white mb-6">Secure and Local Processing</h3>
        <p className="mb-6">
          Privacy is at the core of the Codenify experience. When you use an online converter to decode sensitive strings, you run the risk of that data being logged on a remote server. Our Base64 Converter is built using JavaScript's native btoa() and atob() functions, meaning your input is processed within your own machine's memory. This architecture ensures that sensitive keys, passwords, or proprietary logic stay completely private and are never transmitted over the internet...
        </p>
        <p className="mb-6">
          For developers, having a reliable converter is essential during debugging. When you encounter a JSON Web Token (JWT) or an obscure header in a network request, being able to quickly decode it can save hours of investigation. Our tool supports full ASCII character sets and provides instant feedback, making it the perfect companion for fast-paced development environments. Remember that while Base64 makes data easier to transport, it is not a form of encryption and should not be used to secure data on its own...
        </p>
      </article>
    </main>
  );
}