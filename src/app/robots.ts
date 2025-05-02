import { MetadataRoute } from 'next';
import { SEO } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SEO.url || 'https://92lottery.com';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
