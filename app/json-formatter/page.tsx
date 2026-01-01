"use client";
import { useState } from 'react';
import { FileDown, Copy, Check } from 'lucide-react';

export default function JSONFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatJSON = () => {
    try {
      const formatted = JSON.stringify(JSON.parse(input), null, 2);
      setOutput(formatted);
    } catch (e) { setOutput("Error: Invalid JSON Syntax."); }
  };

  const downloadFile = () => {
    const blob = new Blob([output], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "codenify-formatted.json";
    a.click();
  };

  return (
    <main className="pt-32 px-6 max-w-7xl mx-auto pb-20">
      <h1 className="text-5xl font-black text-[#D4AF37] mb-12 uppercase tracking-tighter text-center italic">Luxury JSON Formatter</h1>
      
      <div className="grid lg:grid-cols-2 gap-8 mb-20">
        <div className="space-y-4">
          <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest ml-4">Input Raw Data</p>
          <textarea value={input} onChange={(e) => setInput(e.target.value)} className="w-full h-[400px] p-8 bg-[#111] border border-[#333] rounded-[2.5rem] text-white font-mono text-sm focus:border-[#D4AF37] outline-none transition" placeholder="Paste your messy JSON here..." />
        </div>
        <div className="space-y-4">
          <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest ml-4">Output Prettified</p>
          <textarea readOnly value={output} className="w-full h-[400px] p-8 bg-[#080808] border border-[#222] rounded-[2.5rem] text-green-500 font-mono text-sm shadow-inner" placeholder="Formatted output will appear here..." />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mb-24">
        <button onClick={formatJSON} className="px-12 py-5 bg-[#D4AF37] text-black font-black rounded-2xl hover:opacity-90 transition uppercase tracking-widest">Prettify Data</button>
        {output && <button onClick={downloadFile} className="px-12 py-5 border border-[#D4AF37] text-[#D4AF37] font-black rounded-2xl hover:bg-[#D4AF37] hover:text-black transition flex items-center gap-2"> <FileDown size={20}/> DOWNLOAD .JSON </button>}
      </div>

      <article className="max-w-4xl mx-auto text-gray-400 leading-loose border-t border-[#222] pt-20">
        <h2 className="text-3xl font-bold text-white mb-8">The Professional Approach to Data Serialization</h2>
        <p className="mb-6">In the world of API development and microservices, JSON is the undisputed king of data interchange. However, raw JSON data is often delivered in a minified, single-line format that is nearly impossible for human developers to audit or debug. The Codenify JSON Formatter provides a high-end, browser-based environment for transforming chaotic data into elegant, human-readable structures...</p>
        <h3 className="text-xl font-bold text-[#D4AF37] mb-6">Why Syntax Validation Matters</h3>
        <p className="mb-6">Beyond mere aesthetics, our tool performs a rigorous syntax check. A single missing comma or an unquoted key can bring an entire production system to a halt. By using our formatter, you are not just making code pretty; you are validating the structural integrity of your data. This is an essential step in the CI/CD pipeline and local development workflows...</p>
        {/* LANJUTKAN HINGGA 500 KATA */}
      </article>
    </main>
  );
}