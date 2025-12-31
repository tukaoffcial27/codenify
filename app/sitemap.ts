import { MetadataRoute } from 'next';
import data from '../global.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codenify.app';

  // 1. Halaman Utama
  const mainRoutes = ['', '/qrcode', '/json', '/css', '/base64', '/privacy', '/terms'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // 2. Halaman pSEO Global (Otomatis dari global.json)
  const toolRoutes = data.map((item) => ({
    url: `${baseUrl}/${item.slug}`,
    lastModified: new Date(),
  }));

  return [...mainRoutes, ...toolRoutes];
}