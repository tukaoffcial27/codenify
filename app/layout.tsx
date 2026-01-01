import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Codenify | Free Developer Tools Suite",
    template: "%s | Codenify"
  },
  description: "Free online developer tools: QR Code Generator, JSON Formatter, CSS Minifier, and Base64 Converter. Fast, secure, and mobile-friendly.",
  // Penambahan baris di bawah ini untuk menghilangkan error favicon
  icons: {
    icon: [],
  },
  verification: {
    google: '-z9DAPzX-Yzd8hPw-wDCrYLW13maGYRSDCWd1o9ifd8',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Script Google AdSense Anda */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6834526241041119" 
          crossOrigin="anonymous">
        </script>
      </head>
      <body className={`${inter.className} bg-[#050505] text-white antialiased`}>
        {children}
        
        <footer className="text-center py-10 border-t border-[#333] text-gray-500 text-sm">
          &copy; 2026 Codenify App. All Rights Reserved.
          <div className="mt-2 flex justify-center gap-4">
            <a href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms</a>
            <a href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>
        </footer>
      </body>
    </html>
  );
}