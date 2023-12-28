import { Routes } from 'components/SidebarRoutes';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export type BookData = {
  filePath: string;
  meta: BlogMetaData;
  bookName: string;
  pageTitle: string;
  content: string;
  slug: string[];
};

export type BookDataList = BookData[];

const BOOKS_PATH = path.join(process.cwd(), 'src', 'books');

const booksGroup = (fs.readdirSync(BOOKS_PATH, { recursive: true }) as string[])
  .filter((path) => typeof path === 'string')
  .filter((path: string) => /\.mdx?$/.test(path))
  .map((path) => path.split('/'))
  .reduce((result: Map<string, string[]>, [bookName, fileName]: string[]) => {
    result.has(bookName) ? result.get(bookName).push(fileName) : result.set(bookName, [fileName]);
    return result;
  }, new Map<string, string[]>());

const booksFilePaths = Array.from(booksGroup)
  .map(([bookName, pages]) => {
    return [...pages]
      .sort((a, b) => {
        const getPageNumber = (path: string) => Number(path.replace(/\D/g, ''));

        return getPageNumber(a) - getPageNumber(b);
      })
      .map((path) => `${bookName}/${path}`);
  })
  .flat();

export const getBooks = async () => {
  const list: BookDataList = [];

  for await (const filePath of booksFilePaths) {
    const source = fs.readFileSync(path.join(BOOKS_PATH, filePath));
    const { data, content } = matter(source);
    const slug = filePath.replace(/\.mdx?$/, '').split('/');

    list.push({
      filePath,
      meta: data as BlogMetaData,
      bookName: data.id,
      pageTitle: data.title,
      content,
      slug,
    });
  }

  return list;
};

export const getSidebarRoutesWith = (books: BookDataList, currentBook?: BookData) => {
  return books.reduce((result, { bookName, pageTitle, slug }) => {
    const item = result.find(({ title }) => bookName === title);
    const href = ['', 'books', ...slug].join('/');
    const route = { href, pathname: href, title: pageTitle, selected: false };

    if (!item) {
      result.push({
        title: bookName,
        routes: [route],
      });
    } else {
      item.routes.push(route);
    }

    return result;
  }, [] as Routes);
};
