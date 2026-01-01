import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto text-white">
      {/* Tombol Kembali ke Beranda */}
      <Link href="/" className="inline-block mb-5 p-2 border border-[#333] hover:text-[#D4AF37] transition-colors">
        &larr; Back to Generator
      </Link>

      <h1 className="text-3xl font-bold mb-4">About Codenify</h1>
      <div className="space-y-4 text-gray-300">
        <p>Welcome to Codenify, your number one source for premium QR Code solutions.</p>
        <p>Founded in 2024, Codenify has come a long way from its beginnings. When we first started out, our passion for developer tools drove us to start our own business.</p>
        <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions, please don't hesitate to contact us.</p>
      </div>
    </main>
  );
}