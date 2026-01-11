export default function MethodologyPage() {
  return (
    <main className="pt-48 pb-32 px-6 max-w-5xl mx-auto">
      <header className="mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
          Our <span className="text-[#D4AF37]">Methodology</span>
        </h1>
        <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
          At Codenify, we believe technical power should never come at the cost of privacy. Our architectural framework is built on three unbreakable pillars.
        </p>
      </header>

      <section className="space-y-32">
        {/* PILLAR 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-[#0a0a0a] p-12 border border-[#D4AF37]/10 rounded-3xl">
            <span className="text-[#D4AF37] font-black text-5xl opacity-20">01</span>
            <h2 className="text-2xl font-black text-white uppercase mt-4 mb-6 tracking-tight">Pure Client-Side Execution</h2>
            <p className="text-gray-400 leading-loose">
              Unlike traditional tools that transmit your data to remote servers, Codenify utilizes modern <strong>WebAssembly</strong> and <strong>JavaScript engines</strong> to process data directly within your browser. This means your sensitive API keys, transaction logs, and internal code never leave your machine.
            </p>
          </div>
          <div className="pt-8">
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Technical Advantage</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              By eliminating the server trip, we reduce latency to near-zero. This infrastructure allows us to scale to 20,000+ unique use cases without compromising on speed or individual data safety.
            </p>
          </div>
        </div>

        {/* PILLAR 2 */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
           <div className="md:order-2 bg-[#0a0a0a] p-12 border border-[#D4AF37]/10 rounded-3xl">
            <span className="text-[#D4AF37] font-black text-5xl opacity-20">02</span>
            <h2 className="text-2xl font-black text-white uppercase mt-4 mb-6 tracking-tight">Zero-Log Architecture</h2>
            <p className="text-gray-400 leading-loose">
              Security is not an afterthought; it is our foundation. Our system is designed with a strictly "stateless" approach. We do not maintain databases of user inputs. Once a session is closed, the temporary memory used for processing is purged instantly by the browser's garbage collection.
            </p>
          </div>
          <div className="md:order-1 pt-8 text-right">
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Compliance Standard</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              This methodology aligns perfectly with <strong>GDPR, HIPAA, and SOC2</strong> requirements, making Codenify the trusted choice for enterprise-level developers in high-stakes industries.
            </p>
          </div>
        </div>

        {/* PILLAR 3 */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white uppercase mb-8 tracking-tighter">Dynamic pSEO Integration</h2>
          <p className="text-gray-400 leading-loose mb-12">
            Our content strategy utilizes a <strong>4-Layer Matrix</strong> that generates over 20,000 specialized landing pages. This isn't just for search engines; it's to provide specific, context-aware solutions for every technical niche—from AWS Lambda debugging to FinTech security audits.
          </p>
          <div className="inline-block px-8 py-4 border border-[#D4AF37] text-[#D4AF37] font-black text-xs uppercase tracking-[0.4em]">
            Elite Standard Verified
          </div>
        </div>
      </section>
    </main>
  );
}