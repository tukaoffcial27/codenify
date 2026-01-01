import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Opsional: jika Anda punya folder rahasia
    },
    sitemap: 'https://codenify.app/sitemap.xml', // Mengarahkan Google langsung ke sitemap
  };
}