import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="pt-32">
      {/* HERO SECTION */}
      <section className="px-6 text-center max-w-5xl mx-auto mb-20">
        <h1 className="text-7xl md:text-8xl font-black mb-8 tracking-tighter uppercase">
          Dev Tools <span className="text-[#D4AF37]">Redefined.</span>
        </h1>
        <p className="text-2xl text-gray-400 leading-relaxed mb-12">
          Codenify is the premier destination for developers seeking speed, precision, and privacy. 
          Access our suite of professional tools directly in your browser.
        </p>
      </section>

      {/* MARKETING BOXES */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "QR Generator", desc: "Create high-fidelity QR codes for menus, business, or marketing.", link: "/qr-generator" },
          { title: "JSON Formatter", desc: "Instantly prettify and validate complex JSON data structures.", link: "/json-formatter" },
          { title: "CSS Minifier", desc: "Optimize your stylesheets for lightning-fast website loading.", link: "/css-minifier" },
          { title: "Base64 Converter", desc: "Securely encode or decode your data with local processing.", link: "/base64-converter" }
        ].map((item) => (
          <div key={item.title} className="bg-[#111] p-8 border border-[#333] rounded-[2rem] hover:border-[#D4AF37] transition group">
            <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">{item.title}</h3>
            <p className="text-gray-500 mb-6 text-sm">{item.desc}</p>
            <Link href={item.link} className="text-white font-bold text-xs uppercase tracking-widest group-hover:underline">Open Tool &rarr;</Link>
          </div>
        ))}
      </section>

      {/* MARKETING SEO CONTENT (>500 WORDS) */}
      <article className="max-w-4xl mx-auto px-6 py-24 border-t border-[#222] text-gray-300 leading-loose text-lg">
        <h2 className="text-4xl font-bold text-white mb-10">Why Thousands of Developers Choose Codenify Every Day</h2>
        <p className="mb-8">
          Digital transformation is not just a buzzword; it is the reality of the 21st-century developer. As we build more complex systems, the need for simple, reliable, and secure tools becomes paramount. Codenify was conceived as a central hub where engineers can find the essential utilities they need without the bloat of traditional software...
          {/* TAMBAHKAN KONTEN PEMASARAN HINGGA 500 KATA UNTUK ADSENSE */}
        </p>
        <p className="mb-8">
          The primary challenge in the online tool space is the balance between convenience and security. Many web-based formatters and generators send your data to their servers for processing. At Codenify, we took a different path. Every line of code you minify, every JSON object you format, and every QR code you generate is handled locally within your browser. This privacy-first approach is why leading tech firms trust our platform for their internal developer workflows...
        </p>
      </article>
    </main>
  );
}