import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://92lottery.dev';

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/image*'],
        disallow: ['/api/', '/admin/', '/private/', '/_next/static/', '/_next/data/'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/_next/image*'],
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
