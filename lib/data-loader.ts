import data from '../global.json';

// Definisi interface untuk memastikan konsistensi data
export interface ToolData {
  tool: string;
  toolSlug?: string;
  useCase: string;
  slug: string;
}

/**
 * MENGAMBIL SEMUA SLUG
 * Kita harus memberi tahu TypeScript bahwa 'data' adalah Array ToolData
 */
export function getAllToolSlugs() {
  const toolData = data as ToolData[]; // Casting secara eksplisit agar tidak merah
  return toolData.map((item) => ({
    slug: item.slug,
  }));
}

/**
 * MENCARI DATA BERDASARKAN SLUG
 */
export function getToolBySlug(slug: string): ToolData | undefined {
  return (data as ToolData[]).find((item) => item.slug === slug);
}

/**
 * MENGUBAH TEKS MENJADI SLUG URL
 */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

/**
 * MENGAMBIL ITEM BERDASARKAN NAMA TOOL
 */
export function getItemsByTool(toolName: string) {
  return (data as ToolData[]).filter(item => item.tool === toolName);
}

/**
 * MENDAPATKAN DAFTAR NAMA TOOL UNIK
 */
export function getUniqueTools() {
  const toolData = data as ToolData[]; // Casting secara eksplisit
  const tools = toolData.map(item => item.tool);
  return Array.from(new Set(tools));
}