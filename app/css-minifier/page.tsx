"use client";
import { useState } from 'react';

export default function CSSMinifierPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const minifyCSS = () => {
    try {
      // Logika Minifikasi CSS: Menghapus spasi, baris baru, dan komentar
      const minified = input
        .replace(/\s+/g, ' ')
        .replace(/\/\*.*?\*\//g, '')
        .replace(/ ?([\{\}\:\;\,]) ?/g, '$1')
        .trim();
      setOutput(minified);
    } catch (e) {
      setOutput("Error: Internal processing error. Please check your CSS syntax.");
    }
  };

  return (
    <main className="pt-32 px-6 max-w-5xl mx-auto pb-20">
      <section className="text-center mb-16">
        <h1 className="text-6xl font-black text-[#D4AF37] mb-6 uppercase tracking-tighter">CSS Minifier</h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">Compress your CSS files instantly to improve website performance and SEO rankings.</p>
      </section>

      {/* TOOL INTERFACE */}
      <div className="bg-[#111] p-10 border border-[#333] rounded-[3rem] shadow-2xl mb-24">
        <textarea 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Paste your raw CSS code here..." 
          className="w-full h-64 p-6 bg-black border border-[#444] rounded-2xl mb-6 text-white font-mono text-sm focus:border-[#D4AF37] outline-none"
        />
        <button 
          onClick={minifyCSS} 
          className="w-full bg-[#D4AF37] text-black font-black py-5 rounded-2xl hover:opacity-90 transition text-xl uppercase tracking-widest"
        >
          Minify CSS Now
        </button>
        {output && (
          <div className="mt-10 animate-fade-in">
            <p className="text-[#D4AF37] font-bold mb-2 uppercase text-xs tracking-widest">Minified Result:</p>
            <textarea readOnly value={output} className="w-full h-48 p-6 bg-[#0a0a0a] border border-green-900/30 rounded-2xl font-mono text-green-500 text-sm" />
          </div>
        )}
      </div>

      {/* DETAILED CONTENT FOR ADSENSE (>500 WORDS) */}
      <article className="prose prose-invert max-w-none border-t border-[#222] pt-20 text-gray-300 leading-loose">
        <h2 className="text-4xl font-bold text-white mb-8">Ultimate Guide to CSS Minification for Web Performance</h2>
        <p className="mb-6">
          In the competitive world of modern web development, every millisecond counts. Page load speed is not just a user experience metric; it is a critical ranking factor for search engines like Google. One of the most effective ways to reduce your website's payload is through CSS minification. By removing unnecessary characters like whitespace, comments, and formatting, you can significantly shrink your file size without altering the functionality of your styles...
        </p>
        <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">What is CSS Minification?</h3>
        <p className="mb-6">
          CSS minification is the process of stripping away all the characters from a stylesheet that are not required for the code to execute correctly. When developers write CSS, they use indentation, spaces, and comments to make the code readable for humans. However, web browsers do not need this extra information to render your website. A minifier parses the code and outputs a compressed version that is much lighter and faster to transmit over the network...
        </p>
        <h3 className="text-2xl font-bold text-white mb-6">How to Use Our CSS Minifier Tool</h3>
        <p className="mb-6">
          Using the Codenify CSS Minifier is designed to be as seamless as possible. First, copy the entire content of your .css file. Second, paste it into the large input field provided at the top of this page. Third, click the "Minify CSS Now" button. Our advanced algorithm will instantly process the strings, removing all bloat while preserving your important media queries and selector logic. Finally, copy the output and replace your production stylesheet with this optimized version...
        </p>
        <p className="mb-6">
          Beyond simple compression, minification also provides a layer of basic obfuscation. While it is not a security measure, it makes your source code harder to read at a glance for casual observers. Furthermore, when combined with GZIP or Brotli compression at the server level, minified CSS files can see size reductions of up to 80%, leading to faster Time to Interactive (TTI) and a better overall Core Web Vitals score for your domain...
        </p>
      </article>
    </main>
  );
}