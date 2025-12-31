import { Metadata } from 'next';
import data from '../../global.json'; 
import Link from "next/link";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return data.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = data.find((d) => d.slug === slug);
  if (!item) return { title: 'Tool Not Found' };
  return {
    title: `Best Free ${item.tool} for ${item.useCase} — Codenify`,
    description: `Optimize your workflow with our free ${item.tool}. Specifically designed for ${item.useCase} requirements. Fast, secure, and browser-based.`,
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = data.find((d) => d.slug === slug);
  if (!item) notFound();

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <main className="max-w-5xl mx-auto pt-32 pb-20 px-6">
        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-[#D4AF37] text-[#D4AF37] rounded-md text-xs font-bold mb-6 uppercase tracking-widest">
            Professional Developer Suite
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#D4AF37]">
            {item.tool} <br/> <span className="text-white text-3xl md:text-4xl">Optimized for {item.useCase}</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
            The most reliable and secure <strong>{item.tool}</strong> tailor-made for <strong>{item.useCase}</strong>. Process your data instantly without leaving your browser.
          </p>
          <Link href={`/${item.toolSlug}`} className="bg-[#D4AF37] text-black px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition inline-block">
            Open {item.tool} Tool Now
          </Link>
        </div>

        {/* EDUCATIONAL CONTENT FOR ADSENSE */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-[#333] pt-16">
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Why use {item.tool} for {item.useCase}?</h2>
              <p className="text-gray-300 leading-relaxed">
                In the world of modern development, efficiency is everything. Using a dedicated <strong>{item.tool}</strong> for <strong>{item.useCase}</strong> ensures that your output meets the exact standards required by current industry protocols. Our tool is built to handle complex data structures while maintaining maximum performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Key Benefits for {item.useCase}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                When working on <strong>{item.useCase}</strong> projects, security and privacy are paramount. Unlike other tools that process data on their servers, Codenify works 100% client-side.
              </p>
              <ul className="list-disc pl-6 text-gray-400 space-y-2">
                <li><strong>Zero Data Leakage:</strong> Your source code or personal data never leaves your machine.</li>
                <li><strong>Format Compliance:</strong> Output is specifically formatted for {item.useCase} integration.</li>
                <li><strong>Lightning Fast:</strong> No server round-trips mean instant results even on slow connections.</li>
              </ul>
            </section>
          </div>

          {/* SIDEBAR / ADS PLACEHOLDER */}
          <div className="space-y-8">
            <div className="bg-[#141414] p-6 rounded-xl border border-[#333]">
              <h4 className="text-[#D4AF37] font-bold mb-4">Developer Note</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Integrating {item.tool} into your {item.useCase} workflow can reduce debugging time by up to 40%. Always ensure your data is minified before production.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-12 border-t border-[#333] text-gray-600">
          &copy; 2026 Codenify App — Optimized for {item.useCase}
      </footer>
    </div>
  );
}