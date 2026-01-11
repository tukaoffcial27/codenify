import { MetadataRoute } from 'next';
import { getAllToolSlugs, getUniqueTools, slugify } from '@/lib/data-loader';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codenify.app';

  // 1. HALAMAN UTAMA & DIREKTORI (Priority Tinggi)
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/directory`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];

  // 2. HALAMAN KATEGORI (Level 2.5 dalam Pohon Link)
  const toolCategories = getUniqueTools().map((tool) => ({
    url: `${baseUrl}/directory/${slugify(tool)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 3. HALAMAN pSEO (20.000 HALAMAN)
  const pSEOPages = getAllToolSlugs().map((item) => ({
    url: `${baseUrl}/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // MENGGABUNGKAN SEMUA LINK MENJADI SATU SITEMAP BESAR
  return [...staticPages, ...toolCategories, ...pSEOPages];
}