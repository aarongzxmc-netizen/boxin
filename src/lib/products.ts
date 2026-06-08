import fs from 'fs';
import path from 'path';

const productsDirectory = path.join(process.cwd(), 'src/content/products');

export interface ProductData {
  slug: string;
  title: string;
  model: string;
  category: string;
  material: string;
  capacity: string;
  size: string;
  surface: string;
  packing: string;
  featured_image: string;
  tags: string[];
  content: string;
  [key: string]: any;
}

export function getAllProducts(): ProductData[] {
  const fileNames = fs.readdirSync(productsDirectory);
  const allProductsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(productsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Simple Frontmatter Parser
      const match = fileContents.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
      if (!match) {
        return null;
      }

      const frontmatter = match[1];
      const content = match[2];
      const data: any = { slug, content };

      frontmatter.split('\n').forEach((line) => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
          const value = valueParts.join(':').trim().replace(/^"(.*)"$/, '$1');
          if (key.trim() === 'tags') {
            data[key.trim()] = value
              .replace(/[\[\]]/g, '')
              .split(',')
              .map((s) => s.trim().replace(/^'(.*)'$/, '$1').replace(/^"(.*)"$/, '$1'));
          } else {
            data[key.trim()] = value;
          }
        }
      });

      return data as ProductData;
    })
    .filter((p) => p !== null) as ProductData[];

  return allProductsData;
}

export function getProductBySlug(slug: string): ProductData | null {
  const fullPath = path.join(productsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const match = fileContents.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return null;

  const frontmatter = match[1];
  const content = match[2];
  const data: any = { slug, content };

  frontmatter.split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim().replace(/^"(.*)"$/, '$1');
      if (key.trim() === 'tags') {
        data[key.trim()] = value
          .replace(/[\[\]]/g, '')
          .split(',')
          .map((s) => s.trim().replace(/^'(.*)'$/, '$1').replace(/^"(.*)"$/, '$1'));
      } else {
        data[key.trim()] = value;
      }
    }
  });

  return data as ProductData;
}
