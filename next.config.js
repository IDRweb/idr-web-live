/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['idr.cat'],
    // pageExtensions: ['js', 'jsx', 'md', 'mdx'], 
  },
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;


