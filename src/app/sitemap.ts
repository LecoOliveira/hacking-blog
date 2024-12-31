import { fetchPages } from '@/lib/notion';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchPages();

  const postUrls = posts.map((post) => ({
    url: `https://hackingblog.online/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: `https://hackingblog.online/`,
      lastModified: new Date(),
    },
    {
      url: `https://hackingblog.online/about`,
      lastModified: new Date(),
    },
    {
      url: `https://hackingblog.online/blog`,
      lastModified: new Date(),
    },
    {
      url: `https://hackingblog.online/writeups`,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
