import { Metadata } from 'next';
import data from '../../global.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return data.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = data.find((d) => d.slug === slug);
  if (!item) return { title: 'Tool Not Found' };
  return {
    title: `Best ${item.tool} for ${item.useCase} | Codenify`,
    description: `Professional ${item.tool} optimized specifically for ${item.useCase}. Free, secure, and fast developer tools.`,
  };
}

export default async function PSEOPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = data.find((d) => d.slug === slug);
  if (!item) notFound();

  return (
    <main className="pt-32 px-6 max-w-5xl mx-auto pb-20">
      <h1 className="text-5xl font-black text-[#D4AF37] mb-8 uppercase tracking-tighter">
        Premium {item.tool} for {item.useCase}
      </h1>
      
      <div className="bg-[#111] p-8 border border-[#333] rounded-2xl mb-12 italic text-gray-400">
        "Efficiency in development is about having the right tool for the right job. Our {item.tool} for {item.useCase} is engineered for professional standards."
      </div>

      <article className="text-gray-300 leading-loose text-lg">
        <h2 className="text-3xl font-bold text-white mb-6">Advanced Processing for {item.useCase}</h2>
        <p className="mb-8">
          In the modern digital landscape, the requirement for a specialized {item.tool} becomes apparent when standard general-purpose tools fail to address the specific technical nuances of {item.useCase}. At Codenify, we understand that developers working on {item.useCase} projects require not just a tool, but a reliable partner in their workflow...
          {/* LANJUTKAN HINGGA 500+ KATA DENGAN MENJELASKAN DETAIL TEKNIS DAN KEAMANAN */}
        </p>
        <p className="mb-8">
          The core philosophy behind our {item.tool} implementation revolves around data integrity and user privacy. For every request processed under the {item.useCase} framework, our algorithms perform multi-stage validation to ensure that the output is not only accurate but also optimized for the next phase of your development pipeline. Security is never an afterthought; by utilizing client-side execution, we ensure your data remains strictly within your local environment...
        </p>
        <p className="mb-8">
          Furthermore, the scalability of {item.tool} applications in {item.useCase} environments demands a platform that is both lightweight and robust. Codenify's architecture is built on a high-speed JavaScript engine that executes operations in milliseconds, providing instant feedback which is crucial for iterative development and debugging sessions...
        </p>
      </article>
    </main>
  );
}