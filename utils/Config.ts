
function stripUrl(url: string) {
  if (url.includes('//')) {
    const splitUrl = url.split('//');
    return splitUrl[1];
  }
  return url;
}

export const Config = {
  url: process.env.SITE_URL,
  stripped_url: process.env.SITE_URL ? stripUrl(process.env.SITE_URL) : '',
  site_name: 'IDR',
  title: 'IDR',
  description: 'IDR│ Igualadina de Depuració i Restauració.',
  locale: 'cat',
  author: 'IDR',
  author_image: 'https://idr.cat/posts/thumb.png',
  blog_pagination_size: 3,
  post_fields: [
    'title',
    'metaTitle',
    'description',
    'date',
    'modified_date',
    'pauthor', 
    'author_image',
    'image',
    'tags',
    'slug',
  ],  metaImg: 'https://idr.cat/posts/thumb.png',
};

export const BlogArchiveConfig = {
  title: 'Projectes',
  description: "Projectes I+D",
  blog_pagination_size: 6,
  featured_image: 'https://idr.cat/posts/thumb.jpg',
};

export const SitemapConfig = {
  blog_pagination_size: 9999,
};
