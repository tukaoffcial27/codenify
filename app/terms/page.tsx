export default function ContactPage() {
  return (
    <main className="pt-40 px-6 max-w-4xl mx-auto pb-20 text-gray-300">
      <header className="mb-16 border-b border-[#222] pb-10">
        <h1 className="text-4xl font-black text-[#D4AF37] uppercase tracking-widest mb-4">Contact Support</h1>
        <p className="text-xl">Have questions about our developer tools or security protocols? Our team is here to help.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-16">
        <section className="space-y-8">
          <div>
            <h2 className="text-white font-bold uppercase mb-2">Technical Support</h2>
            <p className="text-sm">For bugs, feature requests, or API integration issues:</p>
            <p className="text-[#D4AF37] font-bold mt-2">support@codenify.app</p>
          </div>
          <div>
            <h2 className="text-white font-bold uppercase mb-2">Security & Privacy</h2>
            <p className="text-sm">For GDPR inquiries or security vulnerability reports:</p>
            <p className="text-[#D4AF37] font-bold mt-2">security@codenify.app</p>
          </div>
        </section>

        <section className="bg-[#0a0a0a] p-8 border border-[#222] rounded-2xl">
          <h2 className="text-white font-bold uppercase mb-6">Response Time</h2>
          <p className="text-sm leading-relaxed">
            We strive to respond to all technical inquiries within <strong>24-48 business hours</strong>. 
            Priority is given to security-related reports and enterprise integration questions.
          </p>
          <div className="mt-8 pt-6 border-t border-[#222] italic text-xs text-gray-500">
            Note: Codenify does not store your data. For support requests involving specific data issues, please provide samples only.
          </div>
        </section>
      </div>
    </main>
  );
}