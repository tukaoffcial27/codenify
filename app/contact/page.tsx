export default function ContactPage() {
  return (
    <main className="pt-40 px-6 max-w-4xl mx-auto pb-20 text-center">
      <h1 className="text-5xl font-black text-[#D4AF37] mb-6 uppercase tracking-widest italic">Contact Codenify</h1>
      <p className="text-gray-400 text-xl mb-12">We are here to assist with your professional developer tool inquiries.</p>
      
      <div className="bg-[#111] p-12 border border-[#333] rounded-[3rem] shadow-2xl border-t-[#D4AF37]">
        <p className="text-white text-2xl font-bold mb-4">Email Support</p>
        <p className="text-[#D4AF37] text-3xl font-black mb-8 underline">support@codenify.app</p>
        <div className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
          Our average response time for technical inquiries is 24-48 hours. Please include your project details for faster assistance.
        </div>
      </div>
    </main>
  );
}