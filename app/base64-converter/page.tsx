"use client";
import { useState } from 'react';
import { Download, Copy, Check, Repeat } from 'lucide-react';

export default function Base64Converter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode");
  const [copied, setCopied] = useState(false);

  const handleProcess = () => {
    try {
      if (mode === "encode") {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
    } catch (e) { setOutput("Error: Invalid input data for Base64 " + mode + "."); }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadText = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `codenify-base64-${mode}.txt`;
    a.click();
  };

  return (
    <main className="pt-32 px-6 max-w-7xl mx-auto pb-20 font-sans">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* TOOL INTERFACE */}
        <section className="sticky top-32">
          <div className="bg-[#111] p-10 border border-[#333] rounded-[3rem] shadow-2xl border-b-[#D4AF37]">
            <h1 className="text-4xl font-black text-[#D4AF37] mb-6 uppercase tracking-tighter">Base64 Converter</h1>
            
            <div className="flex bg-black p-2 rounded-2xl mb-8 border border-[#333]">
              <button onClick={() => {setMode("encode"); setOutput("");}} className={`flex-1 py-4 rounded-xl font-bold transition ${mode === "encode" ? "bg-[#D4AF37] text-black" : "text-gray-500"}`}>ENCODE</button>
              <button onClick={() => {setMode("decode"); setOutput("");}} className={`flex-1 py-4 rounded-xl font-bold transition ${mode === "decode" ? "bg-[#D4AF37] text-black" : "text-gray-500"}`}>DECODE</button>
            </div>

            <textarea 
              value={input} onChange={(e) => setInput(e.target.value)}
              placeholder={`Enter text to ${mode}...`}
              className="w-full h-56 p-6 bg-black border border-[#444] rounded-2xl mb-6 text-white font-mono text-sm focus:border-[#D4AF37] outline-none transition-all"
            />

            <button onClick={handleProcess} className="w-full bg-[#D4AF37] text-black font-black py-5 rounded-2xl hover:opacity-90 transition flex justify-center items-center gap-2 uppercase tracking-widest shadow-lg">
              <Repeat size={20} /> EXECUTE {mode}
            </button>

            {output && (
              <div className="mt-10 animate-in fade-in zoom-in duration-500">
                <p className="text-[#D4AF37] font-bold mb-4 uppercase text-xs tracking-widest">Resulting Payload:</p>
                <textarea readOnly value={output} className="w-full h-48 p-6 bg-[#080808] border border-[#222] rounded-2xl font-mono text-[#D4AF37] text-sm mb-6 shadow-inner" />
                <div className="flex gap-4">
                  <button onClick={copyToClipboard} className="flex-1 bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition flex justify-center items-center gap-2">
                    {copied ? <Check size={18} /> : <Copy size={18} />} {copied ? "COPIED" : "COPY DATA"}
                  </button>
                  <button onClick={downloadText} className="flex-1 border border-[#333] text-gray-400 font-bold py-4 rounded-xl hover:border-[#D4AF37] hover:text-[#D4AF37] transition flex justify-center items-center gap-2">
                    <Download size={18} /> DOWNLOAD .TXT
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ADSENSE CONTENT (>500 WORDS) */}
        <article className="text-gray-400 leading-loose text-lg">
          <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-widest border-b border-[#333] pb-4">Understanding Binary-to-Text Encoding Protocols</h2>
          <p className="mb-6">Base64 encoding is an essential mechanism in the modern developer's toolkit, designed to represent binary data in an ASCII string format. This translation process ensures that sensitive or complex data remains stable during transmission across systems that are primarily designed to handle plain text. Codenify's Luxury Base64 Converter provides a secure, client-side environment for this operation, ensuring that your data is never transmitted over the network for processing.</p>
          
          <h3 className="text-xl font-bold text-[#D4AF37] mb-6">Security and Obfuscation vs Encryption</h3>
          <p className="mb-6">It is critical for professional developers to understand that Base64 is a form of encoding, not encryption. While it makes data unreadable to a casual observer, it is easily reversible and provides no cryptographic security. However, its utility in web development—such as creating Data URIs for images or encoding authentication headers in HTTP requests—is unmatched. By using Codenify, you ensure that even during simple encoding tasks, your local browser environment is the only place where the data transformation occurs.</p>

          <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Tutorial: Encoding and Decoding with Precision</h3>
          <p className="mb-6">To begin, select the desired operational mode: Encode for converting plain text into Base64, or Decode for returning a Base64 string to its original state. Enter your payload into the obsidian-style textarea. For developers working with assets, you can encode small image snippets to be used directly in CSS files. Once you click "Execute," the result is instantly generated and displayed in our signature gold-tinted output field. For large data sets, use the "Download .txt" feature to safely store the resulting string for later integration into your codebases or API requests.</p>
          
          <p className="mb-6 italic">Pro Tip: Always verify the padding characters (=) at the end of a Base64 string to ensure the data has been encoded with full byte integrity.</p>
        </article>
      </div>
    </main>
  );
}