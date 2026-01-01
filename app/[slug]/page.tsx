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
          {/* Tombol kembali ke home karena tool utama biasanya ada di halaman depan */}
          <Link href="/" className="bg-[#D4AF37] text-black px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition inline-all">
            Open {item.tool} Tool Now
          </Link>
        </div>

        {/* CONTENT FOR ADSENSE & SEO */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-[#333] pt-16">
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Why use {item.tool} for {item.useCase}?</h2>
              <p className="text-gray-300 leading-relaxed">
                Using a dedicated <strong>{item.tool}</strong> for <strong>{item.useCase}</strong> ensures that your output meets the exact standards required by current industry protocols.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Key Benefits</h2>
              <ul className="list-disc pl-6 text-gray-400 space-y-2">
                <li><strong>Zero Data Leakage:</strong> 100% client-side processing.</li>
                <li><strong>Format Compliance:</strong> Specifically for {item.useCase}.</li>
                <li><strong>Instant Results:</strong> No server round-trips.</li>
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-[#141414] p-6 rounded-xl border border-[#333]">
              <h4 className="text-[#D4AF37] font-bold mb-4">Developer Note</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Integrating {item.tool} into your {item.useCase} workflow can reduce debugging time significantly.
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* Footer sudah dihapus dari sini karena sudah ada di layout.tsx */}
    </div>
  );
}