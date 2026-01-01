import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto text-white">
      <Link href="/" className="inline-block mb-6 text-[#D4AF37] hover:underline">
        &larr; Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-6 text-[#D4AF37]">Terms of Service</h1>
      <div className="space-y-4 text-gray-300">
        <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use.</p>
        <h2 className="text-xl font-semibold text-white mt-6">Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials on Codenify's website for personal, non-commercial transitory viewing only.</p>
        <h2 className="text-xl font-semibold text-white mt-6">Disclaimer</h2>
        <p>The materials on Codenify's website are provided on an 'as is' basis.</p>
      </div>
    </main>
  );
}