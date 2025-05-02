/**
 * Schema.org markup cho trang web cá cược
 * Giúp tối ưu SEO và hiển thị rich snippets trên Google
 */

export const generateGamblingWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "92Lottery",
    "url": "https://92lottery.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://92lottery.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "description": "92Lottery - Trang web cá cược xổ số, lottery, thể thao và casino trực tuyến hàng đầu Việt Nam.",
    "publisher": {
      "@type": "Organization",
      "name": "92Lottery",
      "logo": {
        "@type": "ImageObject",
        "url": "https://92lottery.com/logo.png"
      }
    }
  };
};

export const generateLotteryGameSchema = (game: {
  name: string;
  description: string;
  image: string;
  url: string;
  provider: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": game.name,
    "description": game.description,
    "image": game.image,
    "url": game.url,
    "provider": {
      "@type": "Organization",
      "name": game.provider
    },
    "genre": "Lottery",
    "gamePlatform": "Web Browser"
  };
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};
