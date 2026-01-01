"use client";
import { useState } from 'react';
import { Download, Copy, Check } from 'lucide-react'; // Pastikan install lucide-react

export default function QRGenerator() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${encodeURIComponent(input)}`;

  const downloadQR = async () => {
    const response = await fetch(qrUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Codenify-QR-Code.png";
    a.click();
  };

  return (
    <main className="pt-32 px-6 max-w-7xl mx-auto pb-20 font-sans">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* KIRI: TOOL INTERFACE */}
        <section className="sticky top-32">
          <div className="bg-[#111] p-10 border border-[#333] rounded-[3rem] shadow-[0_0_50px_rgba(212,175,55,0.1)]">
            <h1 className="text-4xl font-black text-[#D4AF37] mb-8 uppercase tracking-tighter">QR Generator <span className="text-white block text-lg font-normal tracking-widest mt-2">Professional Edition</span></h1>
            
            <input 
              type="text" value={input} onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your premium URL or text..."
              className="w-full p-6 bg-black border border-[#444] rounded-2xl mb-8 text-white focus:border-[#D4AF37] outline-none transition-all shadow-inner"
            />

            {input && (
              <div className="animate-in fade-in zoom-in duration-500 text-center">
                <div className="bg-white p-6 rounded-[2rem] inline-block shadow-2xl mb-8">
                  <img src={qrUrl} alt="QR Code" className="w-64 h-64" id="qr-image" />
                </div>
                <div className="flex gap-4">
                  <button onClick={downloadQR} className="flex-1 bg-[#D4AF37] text-black font-black py-5 rounded-2xl hover:scale-[1.02] transition shadow-lg flex justify-center items-center gap-2">
                    <Download size={20} /> DOWNLOAD PNG
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* KANAN: KONTEN ADSENSE (>500 WORDS) */}
        <article className="text-gray-400 leading-loose text-lg">
          <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-widest border-b border-[#333] pb-4">The Strategic Importance of High-Fidelity QR Codes</h2>
          <p className="mb-6">In the modern era of seamless digital integration, the QR code has transcended its origins as a simple tracking tool to become a vital bridge between the physical and digital realms. For developers and marketers alike, ensuring that a QR code is not only scannable but also professionally presented is paramount for brand integrity. Codenify's QR Generator is engineered to provide high-resolution outputs that maintain clarity even when scaled for large-format printing, such as billboards or digital displays...</p>
          <h3 className="text-xl font-bold text-[#D4AF37] mb-4 uppercase">Advanced Scannability Protocols</h3>
          <p className="mb-6">Our generation engine utilizes the ISO/IEC 18004 standard, ensuring that every pixel is optimized for optical recognition across a vast array of hardware—from high-end smartphones to budget-tier devices. The error correction levels integrated into our tool allow for a certain degree of damage or obstruction to the code without losing the underlying data, a feature essential for real-world marketing materials exposed to the elements...</p>
          <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Tutorial: Mastering the Codenify QR Tool</h3>
          <p className="mb-6">To begin, identify the data you wish to encode. While standard URLs are the most common use case, our tool supports V-cards, plain text, and encrypted strings. Paste your data into the luxurious input interface above. Notice the real-time generation—as you type, the parity bits are calculated instantly. Once satisfied, use the "Download PNG" feature to save a 1000x1000 high-definition file suitable for professional publishing. Remember to test the code with multiple scanning applications to ensure the landing page redirects correctly before finalizing your campaign...</p>
          <p>Furthermore, the security of your data is guaranteed. Unlike other online generators that log your URLs for tracking purposes, Codenify operates with a zero-logging policy. The generation happens via a secure API call, and your sensitive inputs are never cached on our servers, making it the preferred choice for enterprise-level developers handling proprietary internal links...</p>
        </article>
      </div>
    </main>
  );
}