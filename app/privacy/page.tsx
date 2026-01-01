import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="pt-40 px-6 max-w-4xl mx-auto pb-20 text-gray-300 leading-loose">
      <h1 className="text-4xl font-black text-[#D4AF37] mb-10 uppercase tracking-widest">Privacy Policy</h1>
      <p className="mb-6 font-bold text-white">Last Updated: January 1, 2026</p>
      
      <section className="space-y-8">
        <p>At Codenify, accessible from codenify.app, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Codenify and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
        
        <h2 className="text-2xl font-bold text-white uppercase">1. General Data Protection Regulation (GDPR)</h2>
        <p>We are a Data Controller of your information. Codenify legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information...</p>
        
        <h2 className="text-2xl font-bold text-white uppercase">2. Log Files</h2>
        <p>Codenify follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

        <h2 className="text-2xl font-bold text-white uppercase">3. Cookies and Web Beacons</h2>
        <p>Like any other website, Codenify uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

        <h2 className="text-2xl font-bold text-white uppercase">4. Google DoubleClick DART Cookie</h2>
        <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy...</p>
        
        {/* Tambahkan terus konten hingga mencapai 500+ kata untuk AdSense */}
        <h2 className="text-2xl font-bold text-white uppercase">5. Third Party Privacy Policies</h2>
        <p>Codenify's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
      </section>
    </main>
  );
}