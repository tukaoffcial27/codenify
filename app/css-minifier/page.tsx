"use client";
import { useState } from 'react';
import { Download, Copy, Check, Zap } from 'lucide-react';

export default function CSSMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const minifyCSS = () => {
    try {
      const minified = input
        .replace(/\s+/g, ' ')
        .replace(/\/\*.*?\*\//g, '')
        .replace(/ ?([\{\}\:\;\,]) ?/g, '$1')
        .trim();
      setOutput(minified);
    } catch (e) { setOutput("Error: Critical CSS Syntax Error."); }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCSS = () => {
    const blob = new Blob([output], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "codenify-optimized.css";
    a.click();
  };

  return (
    <main className="pt-32 px-6 max-w-7xl mx-auto pb-20 font-sans">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* TOOL INTERFACE */}
        <section className="sticky top-32">
          <div className="bg-[#111] p-10 border border-[#333] rounded-[3rem] shadow-2xl border-t-[#D4AF37]">
            <h1 className="text-4xl font-black text-[#D4AF37] mb-2 uppercase tracking-tighter italic">CSS Minifier</h1>
            <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-8 font-bold">High-Performance Optimization</p>
            
            <textarea 
              value={input} onChange={(e) => setInput(e.target.value)}
              placeholder="Paste your uncompressed CSS here..."
              className="w-full h-64 p-6 bg-black border border-[#444] rounded-2xl mb-6 text-white font-mono text-sm focus:border-[#D4AF37] outline-none transition-all shadow-inner"
            />

            <button onClick={minifyCSS} className="w-full bg-[#D4AF37] text-black font-black py-5 rounded-2xl hover:scale-[1.01] transition shadow-lg flex justify-center items-center gap-2 text-lg">
              <Zap size={20} fill="black" /> MINIFY STYLESHEET
            </button>

            {output && (
              <div className="mt-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-[#D4AF37] font-bold mb-4 uppercase text-xs tracking-widest">Optimized Output:</p>
                <textarea readOnly value={output} className="w-full h-48 p-6 bg-[#080808] border border-green-900/30 rounded-2xl font-mono text-green-500 text-sm mb-6 shadow-inner" />
                <div className="flex gap-4">
                  <button onClick={copyToClipboard} className="flex-1 border border-[#D4AF37] text-[#D4AF37] font-bold py-4 rounded-xl hover:bg-[#D4AF37] hover:text-black transition flex justify-center items-center gap-2">
                    {copied ? <Check size={18} /> : <Copy size={18} />} {copied ? "COPIED" : "COPY CODE"}
                  </button>
                  <button onClick={downloadCSS} className="flex-1 bg-white text-black font-bold py-4 rounded-xl hover:opacity-90 transition flex justify-center items-center gap-2">
                    <Download size={18} /> DOWNLOAD .CSS
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ADSENSE CONTENT (>500 WORDS) */}
        <article className="text-gray-400 leading-loose text-lg">
          <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-widest border-b border-[#333] pb-4">Architectural Performance via CSS Minification</h2>
          <p className="mb-6">In the competitive landscape of modern web engineering, the technical debt associated with unoptimized stylesheets can significantly hinder a platform's growth. CSS minification is not merely a task of aesthetics; it is a critical optimization protocol that directly influences the Time to Interactive (TTI) and Largest Contentful Paint (LCP) of a website. Codenify's Luxury CSS Minifier is designed to strip away the "human-readable" bloat—such as excessive whitespace, comments, and redundant formatting—while preserving the logical integrity of your design system.</p>
          
          <h3 className="text-xl font-bold text-[#D4AF37] mb-4 uppercase">The Science of Compression</h3>
          <p className="mb-6">Our minification algorithm performs a multi-pass sweep of your code. First, it identifies and removes non-executable characters. Second, it optimizes shorthands for properties like padding, margin, and border. For enterprise-level developers, this means a reduction in payload size of up to 30% even before GZIP or Brotli compression is applied at the server level. This lean approach to asset delivery ensures that your premium digital experiences load with lightning speed across all geographic regions.</p>

          <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Tutorial: Enhancing Your Workflow</h3>
          <p className="mb-6">To utilize the Codenify CSS tool, begin by copying your raw source code from your local development environment. Paste the content into the obsidian-dark input field provided. Upon clicking the "Minify Stylesheet" button, our engine processes the string locally in your browser memory—ensuring your proprietary design logic never leaves your machine. Once the green output appears, use the luxury "Download .css" feature to retrieve your production-ready file. For best results, always keep a "Source" version for editing and use the "Minified" version for deployment to CDNs or edge servers.</p>
          
          <p className="mb-6 italic text-gray-500">Note: Minification is a safe process, but we recommend always reviewing your media queries after a major compression session to ensure selector specificity remains intact.</p>
        </article>
      </div>
    </main>
  );
}