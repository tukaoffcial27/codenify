export default function AboutPage() {
  return (
    <main className="pt-40 px-6 max-w-5xl mx-auto pb-24 font-sans text-gray-300">
      {/* HEADER SECTION */}
      <section className="text-center mb-20">
        <h1 className="text-6xl font-black text-[#D4AF37] mb-6 uppercase tracking-tighter italic">
          About Codenify
        </h1>
        <p className="text-2xl text-white font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
          Pioneering the next generation of privacy-focused, high-performance developer utilities.
        </p>
      </section>

      {/* DETAILED CONTENT (>500 WORDS) */}
      <article className="space-y-12 leading-loose text-lg">
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-widest border-l-4 border-[#D4AF37] pl-6">
            Our Mission & Vision
          </h2>
          <p>
            At Codenify, we believe that the complexity of modern software development should be met with tools that are both powerful and elegantly simple. Founded in 2026, our platform was established as a direct response to the increasing fragmentation of online developer utilities. In an era where data privacy is often sacrificed for convenience, Codenify stands as a beacon of professional integrity, providing a centralized suite of tools that operate with absolute transparency and technical excellence.
          </p>
          <p className="mt-6">
            Our vision is to empower digital architects, engineers, and creators with a seamless workflow environment. We understand that in high-stakes development environments, every millisecond of latency and every byte of data integrity matters. Therefore, Codenify is not just a collection of scripts; it is a meticulously engineered ecosystem designed to support the rigorous demands of the global developer community.
          </p>
        </section>

        <section className="bg-[#111] p-12 rounded-[3rem] border border-[#333] shadow-2xl">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-6 uppercase tracking-widest">
            Privacy-First Philosophy
          </h2>
          <p className="text-white">
            Security is the cornerstone of the Codenify experience. Unlike traditional web-based formatters and generators that transmit sensitive data to remote servers for processing, Codenify utilizes an advanced client-side architecture. This means that when you utilize our JSON Formatter, CSS Minifier, or Base64 Converter, your data never leaves your local machine. 
          </p>
          <p className="mt-6 text-white">
            By leveraging the latest capabilities of modern web browsers and the Next.js framework, we perform all computations within your local memory. This "Zero-Data-Transfer" policy ensures that proprietary code, sensitive API keys, and private configuration files remain strictly confidential. This commitment to security makes Codenify the preferred choice for enterprise-level engineers and security-conscious professionals worldwide.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-widest border-r-4 border-[#D4AF37] pr-6 text-right">
            Technical Excellence & Innovation
          </h2>
          <p>
            The technical foundation of Codenify is built upon the most robust frameworks available today. By utilizing Next.js 15 and Tailwind CSS, we ensure that our platform is not only aesthetically pleasing in its luxury black-and-gold aesthetic but also functionally superior in its execution speed. Our tools are optimized for a wide array of use cases, from optimizing high-traffic e-commerce platforms to securing international banking data transmissions.
          </p>
          <p className="mt-6">
            We take pride in our specialized pSEO infrastructure, which features over 1,000 unique utility pages. Each page is tailor-made to address specific industry requirements, ensuring that whether you are a mobile app developer or a blockchain engineer, you have access to tools that understand the nuances of your specific domain. This depth of specialization is what differentiates Codenify from generic toolsets and establishes us as an authoritative source in the developer utility space.
          </p>
        </section>

        <section className="border-t border-[#222] pt-12">
          <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-widest">
            Commitment to the Community
          </h2>
          <p>
            Codenify is more than just a service; it is a commitment to the open-web and the developers who build it. We are dedicated to providing these professional-grade tools for free, supported by high-quality, relevant advertising that respects our users' professional context. We adhere to the highest standards of digital publishing, ensuring that our content is educational, accurate, and beneficial to our audience.
          </p>
          <p className="mt-6">
            As we continue to expand our suite of tools and our specialized directories, our focus remains on the individual developer. We invite you to explore our platform, utilize our high-fidelity generators, and integrate our minifiers into your daily deployment pipeline. Thank you for choosing Codenify as your trusted partner in digital creation. Together, we are building a more efficient, secure, and beautiful web.
          </p>
        </section>
      </article>
    </main>
  );
}