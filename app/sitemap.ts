import { MetadataRoute } from 'next';
import data from '../global.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codenify.app';

  // 1. Daftar Halaman Statis & Tools Utama
  const staticPages = [
    '',
    '/qr-generator',
    '/json-formatter',
    '/css-minifier',
    '/base64-converter',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Daftar 1000+ Halaman pSEO secara Dinamis
  const dynamicPages = data.map((item) => ({
    url: `${baseUrl}/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...dynamicPages];
}