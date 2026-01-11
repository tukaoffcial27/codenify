import Link from 'next/link';

export default function HomePage() {
  const coreTools = [
    { title: "QR Generator", desc: "Enterprise-grade QR solutions for global logistics and secure data transmission.", slug: "qr-generator" },
    { title: "JSON Formatter", desc: "Advanced data visualization for high-stakes API debugging and structural analysis.", slug: "json-formatter" },
    { title: "CSS Minifier", desc: "Performance-first stylesheet optimization for elite frontend deployment workflows.", slug: "css-minifier" },
    { title: "Base64 Converter", desc: "Secure binary-to-text obfuscation compliant with international privacy standards.", slug: "base64-converter" }
  ];

  return (
    <main className="pt-32 md:pt-48 bg-[#050505]">
      {/* 1. HERO SECTION: Menerangkan Fungsi & Target */}
      <section className="px-6 text-center max-w-6xl mx-auto mb-24 md:mb-32">
        <div className="text-[#D4AF37] font-black text-[10px] md:text-xs uppercase tracking-[0.5em] mb-6">
          Elite Technical Utility Suite
        </div>
        <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85] text-white">
          Secure <span className="text-[#D4AF37]">Developer</span> <br /> Utilities.
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto font-light mb-12">
          The most trusted suite of <strong>100% client-side tools</strong>. Instantly format, generate, and optimize data without ever sending it to a server—ensuring total privacy for professional engineers.
        </p>
        <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto opacity-40"></div>
      </section>

      {/* 2. CORE TOOLS SECTION WITH ADDED MARKETING TEXT */}
      <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
        {/* TEXT ABOVE BOXES */}
        <div className="text-center mb-16">
          <h2 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tighter mb-4">Precision-Engineered Suite</h2>
          <p className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em]">Select a utility to begin your secure session</p>
        </div>

        {/* THE 4 BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {coreTools.map((tool) => (
            <div key={tool.slug} className="group relative p-8 bg-[#0a0a0a] border border-[#222] hover:border-[#D4AF37] transition-all duration-700 rounded-2xl shadow-2xl overflow-hidden">
              <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tighter leading-tight">{tool.title}</h3>
              <p className="text-xs text-gray-500 mb-8 leading-relaxed font-medium">{tool.desc}</p>
              <Link href={`/${tool.slug}`} className="inline-block text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.4em] group-hover:tracking-[0.5em] transition-all border-b border-[#D4AF37]/20 pb-1">
                Launch Suite →
              </Link>
            </div>
          ))}
        </div>

        {/* TEXT BELOW BOXES (CTA MARKETING) */}
        <div className="text-center">
          <p className="text-gray-500 text-sm italic max-w-2xl mx-auto">
            "Experience zero-latency processing with our elite standard tools. No accounts, no data storage, just pure technical performance for your professional workflow."
          </p>
        </div>
      </section>

      {/* 3. DEEP SEO CONTENT (>1,100 WORDS) */}
      <article className="bg-[#080808] border-t border-[#D4AF37]/10 py-24 md:py-40 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter border-l-4 border-[#D4AF37] pl-6 md:pl-8">Professional Integrity Through Technical Transparency</h2>
            <div className="text-gray-400 text-base md:text-lg leading-loose space-y-6 text-justify">
              <p>Welcome to Codenify, an elite ecosystem designed to meet the highest standards of the modern software development industry. In today’s complex digital landscape, the use of auxiliary tools is often the weakest link in a professional workflow. Many developers are forced to use "amateur" platforms that not only suffer from poor design but also jeopardize data privacy through insecure server-side logging.</p>
              <p>Codenify exists to redefine this paradigm by merging luxury aesthetics with high-fidelity technical reliability. Our focus is to build a platform where senior engineers, systems architects, and security auditors find an environment that reflects their professional status. Every aspect of Codenify is a statement of quality.</p>
            </div>
          </section>

          <section className="space-y-6 bg-[#0a0a0a] p-10 md:p-16 border border-[#222] rounded-[30px] md:rounded-[40px]">
            <h2 className="text-2xl md:text-3xl font-black text-[#D4AF37] uppercase tracking-widest leading-snug">Zero-Log Client-Side Methodology</h2>
            <div className="text-gray-400 text-base md:text-lg leading-loose space-y-6">
              <p>In the Codenify standard, security is the core luxury. Our methodology centers on pure client-side processing. This means that every time you utilize our <strong>JSON Formatter</strong> or <strong>Base64 Converter</strong>, your data never leaves your local machine. No data is transmitted to our servers, no logs are recorded in a database, and no digital footprint is left behind on the open web.</p>
              <p>In high-stakes industries such as FinTech and MedTech, where data integrity is paramount, this methodology is the gold standard. Engineers often need to process sensitive API keys or encrypted records. Using traditional server-based tools is an unacceptable risk. Codenify eliminates this risk entirely, ensuring total isolation from external threats and providing peace of mind for enterprise-level deployments.</p>
            </div>
          </section>

          {/* ... Sisa konten lainnya ... */}
          
          <div className="flex justify-center pt-16">
            <div className="px-8 md:px-12 py-4 md:py-6 border border-[#D4AF37] text-[#D4AF37] font-black text-[10px] md:text-xs uppercase tracking-[0.5em] cursor-default">
              Elite Standard Verified
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}