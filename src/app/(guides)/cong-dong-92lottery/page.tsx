import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Cộng đồng 92Lottery - Tham gia và kết nối với người chơi khác',
  description: 'Tìm hiểu về cộng đồng 92Lottery và cách tham gia. Kết nối với người chơi khác, chia sẻ kinh nghiệm, nhận thông tin mới nhất và tham gia các sự kiện độc quyền.',
  keywords: ['cộng đồng 92lottery', 'diễn đàn 92lottery', 'nhóm 92lottery', 'telegram 92lottery', 'facebook 92lottery', 'sự kiện 92lottery', 'chia sẻ kinh nghiệm 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev',
    languages: {
      'vi': 'https://92lottery.dev',
      'x-default': 'https://92lottery.dev'
    }
  },
};

export default function CommunityPage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "Làm thế nào để tham gia cộng đồng 92Lottery?",
      answer: "Để tham gia cộng đồng 92Lottery, bạn có thể: 1) Tham gia nhóm Telegram chính thức @92lottery_official, 2) Theo dõi trang Facebook 92Lottery, 3) Tham gia diễn đàn 92Lottery trên website chính thức, 4) Tham gia các sự kiện trực tuyến và ngoại tuyến do 92Lottery tổ chức, 5) Tham gia các giải đấu và cuộc thi cộng đồng, 6) Kết nối với các đại sứ thương hiệu 92Lottery."
    },
    {
      question: "Cộng đồng 92Lottery mang lại những lợi ích gì?",
      answer: "Cộng đồng 92Lottery mang lại nhiều lợi ích: 1) Cập nhật thông tin mới nhất về khuyến mãi, sự kiện và tính năng mới, 2) Chia sẻ và học hỏi kinh nghiệm, chiến thuật từ người chơi khác, 3) Nhận link dự phòng khi website chính bị chặn, 4) Tham gia các sự kiện và cuộc thi độc quyền với giải thưởng hấp dẫn, 5) Nhận hỗ trợ nhanh chóng từ đội ngũ 92Lottery và người chơi khác, 6) Cơ hội kết nối và giao lưu với cộng đồng người chơi có cùng sở thích."
    },
    {
      question: "Nhóm Telegram chính thức của 92Lottery là gì?",
      answer: "Nhóm Telegram chính thức của 92Lottery là @92lottery_official. Đây là kênh thông tin chính thức được quản lý bởi đội ngũ 92Lottery, nơi bạn có thể nhận thông báo về khuyến mãi, sự kiện, link dự phòng, và hỗ trợ trực tiếp. Để tham gia, bạn cần cài đặt ứng dụng Telegram, tìm kiếm @92lottery_official hoặc nhấp vào link mời từ website chính thức 92lottery.dev."
    },
    {
      question: "92Lottery có tổ chức sự kiện offline không?",
      answer: "Có, 92Lottery thường xuyên tổ chức các sự kiện offline tại các thành phố lớn như Hà Nội, TP.HCM, Đà Nẵng và các tỉnh thành khác. Các sự kiện này bao gồm: 1) Gặp gỡ cộng đồng (Community Meetup), 2) Giải đấu thể thao điện tử, 3) Tiệc kỷ niệm và sự kiện đặc biệt, 4) Hội thảo và đào tạo về chiến thuật chơi game, 5) Hoạt động từ thiện và trách nhiệm xã hội. Thông tin về các sự kiện offline được thông báo trên website chính thức và các kênh truyền thông xã hội của 92Lottery."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Cộng đồng 92Lottery", url: "https://92lottery.dev/cong-dong-92lottery" }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const breadcrumbSchemaString = JSON.stringify(breadcrumbSchema);

  return React.createElement(
    React.Fragment,
    null,
    // Schema.org JSON-LD
    React.createElement('script', {
      key: 'faq-schema',
      type: 'application/ld+json',
      dangerouslySetInnerHTML: { __html: faqSchemaString }
    }),
    React.createElement('script', {
      key: 'breadcrumb-schema',
      type: 'application/ld+json',
      dangerouslySetInnerHTML: { __html: breadcrumbSchemaString }
    }),
    
    // Breadcrumb
    React.createElement('div', { className: "bg-gray-100 py-2 px-4" },
      React.createElement('nav', { className: "text-sm" },
        React.createElement('ol', { className: "list-none p-0 inline-flex" },
          React.createElement('li', { className: "flex items-center" },
            React.createElement(Link, { href: "/", className: "text-blue-600 hover:text-blue-800" }, "Trang chủ"),
            React.createElement('span', { className: "mx-2" }, "/")
          ),
          React.createElement('li', { className: "text-gray-700" }, "Cộng đồng 92Lottery")
        )
      )
    ),
    
    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "Cộng đồng 92Lottery - Tham gia và kết nối với người chơi khác"),
      
      React.createElement('div', { className: "prose max-w-none" },
        React.createElement('p', { className: "text-lg mb-6" }, 
          "92Lottery không chỉ là một nền tảng cá cược trực tuyến mà còn là một cộng đồng sôi động của những người chơi đam mê. Tham gia cộng đồng 92Lottery, bạn có cơ hội kết nối với những người chơi khác, chia sẻ kinh nghiệm, nhận thông tin mới nhất và tham gia các sự kiện độc quyền. Bài viết này sẽ giới thiệu chi tiết về cộng đồng 92Lottery và cách bạn có thể tham gia."
        ),
        
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Các kênh cộng đồng chính thức của 92Lottery"),
        
        React.createElement('div', { className: "mb-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "1. Nhóm Telegram chính thức"),
          React.createElement('p', { className: "mb-4" }, 
            "Telegram là kênh thông tin chính thức và quan trọng nhất của cộng đồng 92Lottery. Đây là nơi bạn có thể nhận thông báo mới nhất, tương tác với đội ngũ hỗ trợ và kết nối với người chơi khác."
          ),
          
          React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "2. Trang Facebook chính thức"),
          React.createElement('p', { className: "mb-4" }, 
            "Trang Facebook chính thức của 92Lottery là nơi cập nhật thông tin, chia sẻ nội dung hữu ích và tương tác với cộng đồng người chơi."
          ),
          
          React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "3. Diễn đàn 92Lottery"),
          React.createElement('p', { className: "mb-4" }, 
            "Diễn đàn 92Lottery trên website chính thức là nơi người chơi có thể thảo luận chuyên sâu, chia sẻ kinh nghiệm và chiến thuật chơi game."
          )
        ),
        
        // FAQ Section
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Các câu hỏi thường gặp về cộng đồng 92Lottery"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          faqItems.map((faq, index) => 
            React.createElement('div', { key: index, className: "border-b border-gray-200 pb-4" },
              React.createElement('h3', { className: "text-xl font-semibold mb-2" }, faq.question),
              React.createElement('p', null, faq.answer)
            )
          )
        ),
        
        // Related Articles
        React.createElement('div', { className: "bg-gray-100 p-6 rounded-lg mt-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-4" }, "Các bài viết liên quan"),
          React.createElement('ul', { className: "space-y-2" },
            React.createElement('li', null,
              React.createElement(Link, { href: "/92lottery-telegram", className: "text-blue-600 hover:text-blue-800" }, 
                "92Lottery Telegram - Cách tham gia nhóm và nhận thông báo mới nhất"
              )
            ),
            React.createElement('li', null,
              React.createElement(Link, { href: "/cach-choi-92lottery-hieu-qua", className: "text-blue-600 hover:text-blue-800" }, 
                "Cách chơi 92Lottery hiệu quả - Chiến thuật và mẹo thắng lớn"
              )
            ),
            React.createElement('li', null,
              React.createElement(Link, { href: "/92lottery-co-lua-dao-khong", className: "text-blue-600 hover:text-blue-800" }, 
                "92Lottery có lừa đảo không? Đánh giá uy tín từ chuyên gia"
              )
            ),
            React.createElement('li', null,
              React.createElement(Link, { href: "/lich-su-phat-trien-92lottery", className: "text-blue-600 hover:text-blue-800" }, 
                "Lịch sử phát triển 92Lottery - Từ khi thành lập đến nay"
              )
            )
          )
        )
      )
    )
  );
}
