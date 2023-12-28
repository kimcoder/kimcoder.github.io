type BlogMetaData = {
  id: string;
  title: string;
  description: string;
  preview: string;
  keywords: string;
  slug: string;
  createdAt: string;
  published: published;
};

type BookMetaData = {
  id: string;
  title: string;
  description: string;
  keywords: string;
  createdAt: string;
};

type PropsOf<T> = Parameters<T>[0];

type PropOf<T, key> = PropsOf<T>[key];
