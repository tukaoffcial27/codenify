import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',           // Mengizinkan akses beranda
          '/directory/', // Memprioritaskan jalur pohon link
        ],
        disallow: [
          '/admin/',     // Melarang akses area sensitif
          '/private/',
          '/*?*',        // Menghemat crawl budget dengan melarang query params
        ],
      },
    ],
    sitemap: 'https://codenify.app/sitemap.xml', // Sesuaikan dengan domain Anda
  };
}