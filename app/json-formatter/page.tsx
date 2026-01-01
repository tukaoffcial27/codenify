"use client";
import { useState } from 'react';

export default function JSONPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const format = () => {
    try {
      setOutput(JSON.stringify(JSON.parse(input), null, 2));
    } catch (e) { setOutput("Error: Invalid JSON format."); }
  };

  return (
    <main className="pt-32 px-6 max-w-5xl mx-auto pb-20">
      <h1 className="text-6xl font-black text-[#D4AF37] mb-6 uppercase text-center">JSON Formatter</h1>
      
      {/* TOOL UI */}
      <div className="bg-[#111] p-10 border border-[#333] rounded-[3rem] mb-20 shadow-2xl">
        <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste your raw JSON here..." className="w-full h-64 p-6 bg-black border border-[#444] rounded-2xl mb-6 text-white font-mono text-sm focus:border-[#D4AF37] outline-none" />
        <button onClick={format} className="w-full bg-[#D4AF37] text-black font-black py-5 rounded-2xl hover:opacity-90 transition text-xl uppercase tracking-widest">Format JSON Now</button>
        {output && <textarea readOnly value={output} className="w-full h-64 p-6 bg-[#0a0a0a] border border-green-900/30 rounded-2xl mt-8 font-mono text-green-500 text-sm shadow-inner" />}
      </div>

      {/* TUTORIAL (>500 WORDS) */}
      <article className="text-gray-300 leading-loose text-lg border-t border-[#222] pt-20">
        <h2 className="text-4xl font-bold text-[#D4AF37] mb-10">The Ultimate Guide to JSON Formatting and Validation</h2>
        <p className="mb-6">
          JSON, or JavaScript Object Notation, has become the de facto standard for data exchange on the modern web. Its simplicity and readability make it ideal for APIs, configuration files, and data storage. However, as JSON structures grow in complexity, they often become difficult to read and debug in their raw, minified state...
          {/* LANJUTKAN TUTORIAL HINGGA 500 KATA */}
        </p>
        <h3 className="text-2xl font-bold text-white mb-6">How to Use the Codenify JSON Tool Effectively</h3>
        <p className="mb-6">
          Using our tool is straightforward. First, locate your raw JSON data—this might be a response from a REST API or a configuration file from a Node.js project. Paste the code into the input area. Once you click "Format," our engine validates the syntax and applies standardized indentation. If there is a syntax error, such as a missing comma or a mismatched bracket, our system will notify you instantly...
        </p>
      </article>
    </main>
  );
}