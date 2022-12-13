import fs from 'fs';
import path from 'path';

export const BLOG_PATH = path.join(process.cwd(), 'src', 'blog');

export const blogFilePaths = fs.readdirSync(BLOG_PATH).filter((path) => /\.mdx?$/.test(path));
