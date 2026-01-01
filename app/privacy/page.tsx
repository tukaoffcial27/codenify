import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto text-white">
      <Link href="/" className="inline-block mb-6 text-[#D4AF37] hover:underline">
        &larr; Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-6 text-[#D4AF37]">Privacy Policy</h1>
      <div className="space-y-4 text-gray-300">
        <p>At Codenify, we prioritize the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Codenify.</p>
        <h2 className="text-xl font-semibold text-white mt-6">Log Files</h2>
        <p>Codenify follows a standard procedure of using log files. These files log visitors when they visit websites.</p>
        <h2 className="text-xl font-semibold text-white mt-6">Third Party Privacy Policies</h2>
        <p>Codenify's Privacy Policy does not apply to other advertisers or websites.</p>
      </div>
    </main>
  );
}