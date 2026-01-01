import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto text-white">
      <Link href="/" className="inline-block mb-6 text-[#D4AF37] hover:underline">
        &larr; Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-6 text-[#D4AF37]">Contact Us</h1>
      <div className="bg-[#111] p-6 border border-[#333] rounded-lg">
        <p className="mb-4 text-gray-300">Have questions or feedback? We'd love to hear from you.</p>
        <p className="text-white">Email: <span className="text-[#D4AF37]">support@codenify.app</span></p>
      </div>
    </main>
  );
}