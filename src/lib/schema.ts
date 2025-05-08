/**
 * Schema.org markup cho trang web cá cược
 * Giúp tối ưu SEO và hiển thị rich snippets trên Google
 */

export const generateGamblingWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "92Lottery",
    "url": "https://92lottery.dev",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://92lottery.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "description": "92Lottery - Trang web cá cược xổ số, lottery, thể thao và casino trực tuyến hàng đầu Việt Nam.",
    "publisher": {
      "@type": "Organization",
      "name": "92Lottery",
      "logo": {
        "@type": "ImageObject",
        "url": "https://92lottery.dev/logo.png"
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

export const generateHomePageSchema = () => {
  const featuredGames = [
    {
      name: "Win Go",
      description: "Đoán số Xanh/Đỏ/Tím với tỷ lệ thắng cao",
      url: "https://92lottery.dev/lottery/win-go",
      image: "https://92lottery.dev/icon-wingo.png"
    },
    {
      name: "K3 Lotre",
      description: "Đoán số Lớn/Nhỏ/Lẻ/Chẵn với nhiều cơ hội trúng thưởng",
      url: "https://92lottery.dev/lottery/k3",
      image: "https://92lottery.dev/icon-k3.png"
    },
    {
      name: "5D Lotre",
      description: "Trò chơi xổ số hiện đại với nhiều lựa chọn cược",
      url: "https://92lottery.dev/lottery/5d",
      image: "https://92lottery.dev/icon-5d.png"
    },
    {
      name: "Trx Win",
      description: "Đoán số Xanh/Đỏ/Tím với giao diện trực quan",
      url: "https://92lottery.dev/lottery/trx-win",
      image: "https://92lottery.dev/icon-trx-win.png"
    }
  ];

  const faqs = [
    {
      question: "92Lottery là gì?",
      answer: "92Lottery là nền tảng cá cược xổ số, lottery, thể thao và casino trực tuyến uy tín hàng đầu Việt Nam, cung cấp đa dạng các trò chơi với tỷ lệ trả thưởng cao nhất thị trường."
    },
    {
      question: "Làm thế nào để đăng ký tài khoản tại 92Lottery?",
      answer: "Để đăng ký tài khoản tại 92Lottery, bạn chỉ cần nhấp vào nút 'Đăng ký' trên trang chủ, điền thông tin cá nhân và làm theo hướng dẫn. Sau khi đăng ký thành công, bạn sẽ nhận được khuyến mãi 100K."
    },
    {
      question: "92Lottery có những trò chơi nào?",
      answer: "92Lottery cung cấp nhiều trò chơi hấp dẫn như Win Go, K3 Lotre, 5D Lotre, Trx Win, cùng nhiều trò chơi casino và thể thao trực tuyến khác."
    },
    {
      question: "Làm thế nào để nạp và rút tiền tại 92Lottery?",
      answer: "92Lottery hỗ trợ nhiều phương thức thanh toán như chuyển khoản ngân hàng, ví điện tử, và tiền điện tử. Quá trình nạp và rút tiền đều được xử lý nhanh chóng và an toàn."
    }
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "WebSite",
          "name": "92Lottery - Cá cược xổ số & Casino trực tuyến",
          "url": "https://92lottery.dev",
          "description": "92Lottery - Trang web cá cược xổ số, lottery, thể thao và casino trực tuyến hàng đầu Việt Nam với tỷ lệ trả thưởng cao nhất thị trường.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://92lottery.dev/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "ItemList",
          "name": "Trò chơi nổi bật tại 92Lottery",
          "itemListElement": featuredGames.map((game, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Game",
              "name": game.name,
              "description": game.description,
              "url": game.url,
              "image": game.image,
              "genre": "Lottery",
              "gamePlatform": "Web Browser",
              "provider": {
                "@type": "Organization",
                "name": "92Lottery"
              }
            }
          }))
        }
      }
    ]
  };
};
