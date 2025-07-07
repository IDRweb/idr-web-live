import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export type PostItems = {
  title: string;
  metaTitle: string;
  description: string;
  date: string;
  modified_date: string;
  pauthor: string;
  author_image: string;
  image: string;
  content: string;
  tags: string[];
  slug: string;
  [key: string]: string | string[];
};

export function getPostSlugs(locale: string = 'ca') {
  const localeDirectory = join(postsDirectory, locale);
  if (!fs.existsSync(localeDirectory)) {
    return [];
  }
  return fs.readdirSync(localeDirectory).filter(x => x.endsWith('.md'))
}

export function getPostBySlug(slug: string, fields: string[] = [], locale: string = 'ca'): PostItems {
  const realSlug = slug.replace(/\.md$/, '');
  const localeDirectory = join(postsDirectory, locale);
  const fullPath = join(localeDirectory, `${realSlug}.md`);
  
  // If the localized file doesn't exist, fall back to Catalan
  if (!fs.existsSync(fullPath) && locale !== 'ca') {
    const fallbackPath = join(postsDirectory, 'ca', `${realSlug}.md`);
    if (fs.existsSync(fallbackPath)) {
      return getPostBySlug(slug, fields, 'ca');
    }
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items: PostItems = {
    title: '',
    metaTitle: '',
    description: '',
    date: '',
    modified_date: '',
    pauthor: '',
    author_image: '',
    image: '',
    content: '',
    tags: [],
    slug: '',
  };

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = [], locale: string = 'ca') {
  const slugs = getPostSlugs(locale);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, locale))
    .sort((post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime());
  return posts;
}

export function getCategoryCollection(fields: string[] = [], locale: string = 'ca') {
  const posts = getAllPosts(fields, locale);
  const categoryCollection = new Map<string, PostItems[]>();

  posts.forEach((item) => {
    if (!item.tags) {
      return;
    }

    item.tags.forEach((tag) => {
      if (!categoryCollection.get(tag)) {
        categoryCollection.set(tag, []);
      }

      categoryCollection.get(tag)!.push(item);
    });
  });

  return [...categoryCollection.entries()].sort((a, b) => b[1].length - a[1].length);
}
