/**
 * Schema.org markup cho trang web cá cược
 * Giúp tối ưu SEO và hiển thị rich snippets trên Google
 */

export const generateGamblingWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "92LOTTERY",
    "url": "https://92lottery.dev",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://92lottery.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "description": "92LOTTERY là nhà cái xổ số trực tuyến uy tín hàng đầu Việt Nam, cung cấp WinGo, K3 Lotre, 5D Lotre, TRX Win và nhiều trò chơi hấp dẫn khác. Đăng ký 92LOTTERY ngay để nhận khuyến mãi 100K và trải nghiệm dịch vụ chất lượng cao.",
    "publisher": {
      "@type": "Organization",
      "name": "92LOTTERY",
      "logo": {
        "@type": "ImageObject",
        "url": "https://92lottery.dev/anh/favicon.png"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "228 Trần Duy Hưng",
        "addressLocality": "Hà Nội",
        "addressRegion": "Hà Nội",
        "postalCode": "100000",
        "addressCountry": "VN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+84988587888",
        "contactType": "customer service",
        "email": "support@92lottery.dev",
        "availableLanguage": ["Vietnamese", "English"]
      },
      "sameAs": [
        "https://www.facebook.com/92lottery",
        "https://twitter.com/92lottery",
        "https://t.me/92lottery_official"
      ]
    },
    "inLanguage": "vi-VN",
    "keywords": "92LOTTERY, 92lottery.dev, nhà cái 92lottery, xổ số 92lottery, casino 92lottery, cá cược 92lottery, win go 92lottery, k3 lotre 92lottery, 5d lotre 92lottery, trx win 92lottery, đăng ký 92lottery, đăng nhập 92lottery, app 92lottery, tải 92lottery"
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

  // Tổng hợp tất cả các FAQ từ các trang con
  const faqs = [
    // Trang chủ
    {
      question: "92Lottery là gì?",
      answer: "92Lottery là nền tảng cá cược xổ số, lottery, thể thao và casino trực tuyến uy tín hàng đầu Việt Nam, cung cấp đa dạng các trò chơi với tỷ lệ trả thưởng cao nhất thị trường."
    },
    // Đăng ký
    {
      question: "Làm thế nào để đăng ký tài khoản tại 92Lottery?",
      answer: "Để đăng ký tài khoản tại 92Lottery, bạn chỉ cần nhấp vào nút 'Đăng ký' trên trang chủ, điền thông tin cá nhân và làm theo hướng dẫn. Sau khi đăng ký thành công, bạn sẽ nhận được khuyến mãi 100K."
    },
    // Đăng nhập
    {
      question: "Làm thế nào để đăng nhập vào 92Lottery?",
      answer: "Để đăng nhập vào 92Lottery, bạn cần truy cập trang chủ 92lottery.dev, nhấp vào nút 'Đăng nhập', nhập số điện thoại và mật khẩu của bạn, sau đó nhấp vào nút 'Đăng nhập' để truy cập vào tài khoản."
    },
    // Nạp tiền
    {
      question: "92Lottery có những phương thức nạp tiền nào?",
      answer: "92Lottery hỗ trợ nhiều phương thức nạp tiền khác nhau, bao gồm: chuyển khoản ngân hàng, ví điện tử (Momo, ZaloPay, VNPay), thẻ cào điện thoại, và tiền điện tử (USDT, BTC)."
    },
    // Rút tiền
    {
      question: "Thời gian rút tiền từ 92Lottery mất bao lâu?",
      answer: "Thời gian rút tiền từ 92Lottery phụ thuộc vào phương thức rút tiền bạn chọn. Chuyển khoản ngân hàng và ví điện tử thường được xử lý trong vòng 5-30 phút. Rút tiền qua tiền điện tử có thể mất từ 30 phút đến 2 giờ."
    },
    // App
    {
      question: "Làm thế nào để tải App 92Lottery?",
      answer: "Để tải App 92Lottery, bạn cần truy cập trang chủ 92lottery.dev, nhấp vào nút 'Tải ứng dụng', chọn phiên bản phù hợp với thiết bị của bạn (Android/iOS), và làm theo hướng dẫn cài đặt."
    },
    // Mini game
    {
      question: "Win Go là gì và cách chơi như thế nào?",
      answer: "Win Go là mini game xổ số 1 phút tại 92Lottery, cho phép người chơi đoán kết quả số từ 0-9 hoặc màu sắc (Xanh/Đỏ/Tím). Cách chơi đơn giản: chọn số hoặc màu bạn dự đoán, đặt cược, và chờ kết quả sau 1 phút."
    },
    // Club VIP
    {
      question: "92Lottery Club là gì?",
      answer: "92Lottery Club là chương trình thành viên VIP của 92Lottery, mang đến nhiều đặc quyền và ưu đãi độc quyền cho người chơi trung thành. Chương trình gồm 6 cấp độ VIP, từ Bronze đến Diamond, với lợi ích tăng dần theo cấp độ."
    },
    // Bị sập
    {
      question: "Tại sao 92Lottery bị sập hoặc không truy cập được?",
      answer: "92Lottery có thể không truy cập được do nhiều nguyên nhân: bảo trì hệ thống, thay đổi địa chỉ domain, chặn DNS từ nhà mạng, tấn công DDoS, lỗi kết nối internet của người dùng, hoặc lỗi cache trình duyệt."
    },
    // Telegram
    {
      question: "Nhóm Telegram chính thức của 92Lottery là gì?",
      answer: "Nhóm Telegram chính thức của 92Lottery là @92lottery_official, được quản lý bởi đội ngũ 92Lottery. Đây là kênh thông tin chính thức để nhận thông báo về khuyến mãi, sự kiện, link dự phòng, và hỗ trợ trực tiếp."
    },
    // Lừa đảo
    {
      question: "92Lottery có lừa đảo không?",
      answer: "Không, 92Lottery không lừa đảo. 92Lottery là nhà cái uy tín với giấy phép hoạt động hợp pháp, hệ thống bảo mật tiên tiến, chính sách thanh toán minh bạch và đội ngũ hỗ trợ khách hàng chuyên nghiệp."
    }
  ];

  // Tạo schema cho trang chủ
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "92LOTTERY - Xổ Số 1 Phút, Casino Trực Tuyến Uy Tín #1 Việt Nam",
    "url": "https://92lottery.dev",
    "description": "92LOTTERY là nhà cái xổ số trực tuyến uy tín hàng đầu Việt Nam, cung cấp WinGo, K3 Lotre, 5D Lotre, TRX Win và nhiều trò chơi hấp dẫn khác. Đăng ký 92LOTTERY ngay để nhận khuyến mãi 100K và trải nghiệm dịch vụ chất lượng cao.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://92lottery.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "vi-VN"
  };

  // Tạo schema cho tổ chức
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "92LOTTERY",
    "url": "https://92lottery.dev",
    "logo": {
      "@type": "ImageObject",
      "url": "https://92lottery.dev/logo.png",
      "width": "180",
      "height": "60"
    },
    "description": "92LOTTERY là nhà cái xổ số trực tuyến uy tín hàng đầu Việt Nam, cung cấp WinGo, K3 Lotre, 5D Lotre, TRX Win và nhiều trò chơi hấp dẫn khác. Đăng ký 92LOTTERY ngay để nhận khuyến mãi 100K và trải nghiệm dịch vụ chất lượng cao.",
    "sameAs": [
      "https://www.facebook.com/92lottery",
      "https://twitter.com/92lottery",
      "https://t.me/92lottery_official",
      "https://www.youtube.com/channel/92lottery",
      "https://www.instagram.com/92lottery"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84-xxx-xxx-xxx",
      "contactType": "customer service",
      "availableLanguage": ["Vietnamese", "English"],
      "contactOption": "TollFree",
      "areaServed": "VN"
    }
  };

  // Tạo schema cho điều hướng trang web
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": [
      "Trang chủ",
      "Đăng nhập",
      "Đăng ký",
      "Hướng dẫn đăng ký",
      "Hướng dẫn đăng nhập",
      "Hướng dẫn nạp tiền",
      "Rút tiền",
      "Giới thiệu"
    ],
    "url": [
      "https://92lottery.dev/",
      "https://92lottery.dev/login",
      "https://92lottery.dev/register",
      "https://92lottery.dev/huong-dan-dang-ky",
      "https://92lottery.dev/huong-dan-dang-nhap",
      "https://92lottery.dev/huong-dan-nap-tien",
      "https://92lottery.dev/rut-tien-92lottery",
      "https://92lottery.dev/gioi-thieu"
    ]
  };

  // Tạo schema cho FAQ
  const faqSchema = {
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

  // Tạo schema cho danh sách trò chơi
  const gameListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Trò chơi nổi bật tại 92LOTTERY",
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
          "name": "92LOTTERY"
        }
      }
    }))
  };

  // Trả về mảng các schema riêng biệt thay vì ItemList lồng nhau
  return [websiteSchema, faqSchema, gameListSchema];
};
