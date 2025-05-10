'use client';

import React from 'react';
import Head from 'next/head';

interface OrganizationSchemaProps {
  url?: string;
  logo?: string;
  name?: string;
  description?: string;
  sameAs?: string[];
}

interface WebsiteSchemaProps {
  url?: string;
  name?: string;
  description?: string;
  inLanguage?: string;
}

interface FAQSchemaProps {
  questions: {
    question: string;
    answer: string;
  }[];
}

interface BreadcrumbSchemaProps {
  items: {
    name: string;
    item: string;
  }[];
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    name: string;
    url?: string;
  };
}

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  url = 'https://92lottery.dev',
  logo = 'https://92lottery.dev/anh/logo.png',
  name = '92Lottery',
  description = '92Lottery - Nhà cái xổ số trực tuyến uy tín hàng đầu Việt Nam với các trò chơi WinGo, K3, 5D, TRX và nhiều trò chơi hấp dẫn khác.',
  sameAs = [
    'https://facebook.com/92lottery',
    'https://twitter.com/92lottery',
    'https://t.me/92lottery_official',
    'https://youtube.com/92lottery'
  ]
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url,
    logo,
    name,
    description,
    sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84988587888',
      contactType: 'customer service',
      email: 'support@92lottery.dev',
      areaServed: 'VN',
      availableLanguage: ['Vietnamese', 'English']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '228 Trần Duy Hưng',
      addressLocality: 'Hà Nội',
      addressRegion: 'Hà Nội',
      postalCode: '100000',
      addressCountry: 'VN'
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

export const WebsiteSchema: React.FC<WebsiteSchemaProps> = ({
  url = 'https://92lottery.dev',
  name = '92Lottery',
  description = '92Lottery - Nhà cái xổ số trực tuyến uy tín hàng đầu Việt Nam với các trò chơi WinGo, K3, 5D, TRX và nhiều trò chơi hấp dẫn khác.',
  inLanguage = 'vi-VN'
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url,
    name,
    description,
    inLanguage,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

export const FAQSchema: React.FC<FAQSchemaProps> = ({ questions }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url
    },
    publisher: {
      '@type': 'Organization',
      name: '92Lottery',
      logo: {
        '@type': 'ImageObject',
        url: 'https://92lottery.dev/anh/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://92lottery.dev'
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};
