import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Từ khóa phổ biến về 92Lottery - Tìm kiếm thông tin nhanh chóng | 92Lottery',
  description: 'Tổng hợp các từ khóa phổ biến về 92Lottery giúp bạn tìm kiếm thông tin nhanh chóng và chính xác. Khám phá các chủ đề hot nhất về 92Lottery.',
  keywords: ['92lottery', 'từ khóa 92lottery', 'tìm kiếm 92lottery', 'thông tin 92lottery', 'chủ đề 92lottery', 'trangchu92lottery', 'dangky92lottery', 'dangnhap92lottery', '92lotterykhuyenmai'],
  alternates: {
    canonical: 'https://92lottery.dev/tu-khoa-pho-bien-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/tu-khoa-pho-bien-92lottery',
      'x-default': 'https://92lottery.dev/tu-khoa-pho-bien-92lottery'
    }
  },
};

export default function PopularKeywordsPage() {
  // Danh sách từ khóa phổ biến
  const keywordCategories = [
    {
      category: "Đăng ký và Đăng nhập",
      keywords: [
        { keyword: "92lottery đăng ký", url: "/huong-dan-dang-ky" },
        { keyword: "92lottery đăng nhập", url: "/huong-dan-dang-nhap" },
        { keyword: "dangky92lottery", url: "/huong-dan-dang-ky" },
        { keyword: "dangnhap92lottery", url: "/huong-dan-dang-nhap" },
        { keyword: "tạo tài khoản 92lottery", url: "/huong-dan-dang-ky" },
        { keyword: "quên mật khẩu 92lottery", url: "/huong-dan-dang-nhap" }
      ]
    },
    {
      category: "Nạp và Rút tiền",
      keywords: [
        { keyword: "nạp tiền 92lottery", url: "/huong-dan-nap-tien" },
        { keyword: "rút tiền 92lottery", url: "/rut-tien-92lottery" },
        { keyword: "chuyển khoản 92lottery", url: "/huong-dan-nap-tien" },
        { keyword: "ví điện tử 92lottery", url: "/huong-dan-nap-tien" },
        { keyword: "thẻ cào 92lottery", url: "/huong-dan-nap-tien" },
        { keyword: "USDT 92lottery", url: "/huong-dan-nap-tien" }
      ]
    },
    {
      category: "Trò chơi",
      keywords: [
        { keyword: "92lottery WinGo", url: "/92lottery-mini-game" },
        { keyword: "92lottery K3 Lotre", url: "/92lottery-mini-game" },
        { keyword: "92lottery 5D Lotre", url: "/92lottery-mini-game" },
        { keyword: "92lottery TRX Win", url: "/92lottery-mini-game" },
        { keyword: "92lottery mini game", url: "/92lottery-mini-game" },
        { keyword: "cách chơi 92lottery", url: "/cach-choi-92lottery-hieu-qua" }
      ]
    },
    {
      category: "Ứng dụng và Tiện ích",
      keywords: [
        { keyword: "app 92lottery", url: "/app-92lottery" },
        { keyword: "tải 92lottery", url: "/app-92lottery" },
        { keyword: "92lottery android", url: "/app-92lottery" },
        { keyword: "92lottery ios", url: "/app-92lottery" },
        { keyword: "92lottery mobile", url: "/app-92lottery" },
        { keyword: "92lottery pc", url: "/app-92lottery" }
      ]
    },
    {
      category: "Đánh giá và Thông tin",
      keywords: [
        { keyword: "92lottery có lừa đảo không", url: "/92lottery-co-lua-dao-khong" },
        { keyword: "92lottery uy tín", url: "/92lottery-co-lua-dao-khong" },
        { keyword: "đánh giá 92lottery", url: "/danh-gia-92lottery-2025" },
        { keyword: "review 92lottery", url: "/danh-gia-92lottery-2025" },
        { keyword: "so sánh 92lottery", url: "/so-sanh-92lottery" },
        { keyword: "92lottery việt nam", url: "/gioi-thieu" }
      ]
    },
    {
      category: "Khuyến mãi và VIP",
      keywords: [
        { keyword: "92lotterykhuyenmai", url: "/" },
        { keyword: "khuyến mãi 92lottery", url: "/" },
        { keyword: "92lottery 100k", url: "/" },
        { keyword: "92lottery club", url: "/92lottery-club" },
        { keyword: "92lottery vip", url: "/92lottery-club" },
        { keyword: "hoàn trả 92lottery", url: "/" }
      ]
    },
    {
      category: "Hỗ trợ và Cộng đồng",
      keywords: [
        { keyword: "92lottery telegram", url: "/92lottery-telegram" },
        { keyword: "cộng đồng 92lottery", url: "/cong-dong-92lottery" },
        { keyword: "hỗ trợ 92lottery", url: "/cong-dong-92lottery" },
        { keyword: "92lottery bị sập", url: "/92lottery-bi-sap" },
        { keyword: "92lottery không vào được", url: "/92lottery-bi-sap" },
        { keyword: "link dự phòng 92lottery", url: "/92lottery-bi-sap" }
      ]
    }
  ];

  // FAQ Schema
  const faqItems = [
    {
      question: "92Lottery là gì?",
      answer: "92Lottery là trang xổ số độc quyền nổi bật với các trò chơi như WinGo, K3 Lotre, 5D Lotre, TRX Win trực tuyến đa dạng và uy tín, cùng nhiều sảnh game bài, bắn cá, nổ hũ và casino trực tuyến."
    },
    {
      question: "Làm thế nào để tìm kiếm thông tin về 92Lottery nhanh nhất?",
      answer: "Để tìm kiếm thông tin về 92Lottery nhanh nhất, bạn có thể sử dụng các từ khóa phổ biến như '92lottery đăng ký', '92lottery đăng nhập', 'nạp tiền 92lottery', 'app 92lottery', hoặc truy cập trực tiếp trang chủ 92lottery.dev."
    },
    {
      question: "Các từ khóa phổ biến nhất về 92Lottery là gì?",
      answer: "Các từ khóa phổ biến nhất về 92Lottery bao gồm: 92lottery đăng ký, 92lottery đăng nhập, nạp tiền 92lottery, rút tiền 92lottery, 92lottery WinGo, 92lottery K3 Lotre, 92lottery 5D Lotre, 92lottery TRX Win, app 92lottery, 92lottery có lừa đảo không, 92lottery telegram, 92lottery club."
    },
    {
      question: "Tại sao cần biết các từ khóa phổ biến về 92Lottery?",
      answer: "Biết các từ khóa phổ biến về 92Lottery giúp bạn tìm kiếm thông tin nhanh chóng và chính xác hơn, tiết kiệm thời gian và dễ dàng tiếp cận các hướng dẫn, đánh giá, và thông tin mới nhất về 92Lottery."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Từ khóa phổ biến 92Lottery", url: "https://92lottery.dev/tu-khoa-pho-bien-92lottery" }
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
          React.createElement('li', { className: "text-gray-700" }, "Từ khóa phổ biến 92Lottery")
        )
      )
    ),
    
    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "Từ khóa phổ biến về 92Lottery - Tìm kiếm thông tin nhanh chóng"),
      
      React.createElement('div', { className: "prose max-w-none" },
        React.createElement('p', { className: "text-lg mb-6" }, 
          "Dưới đây là tổng hợp các từ khóa phổ biến về 92Lottery giúp bạn tìm kiếm thông tin nhanh chóng và chính xác. Mỗi từ khóa đều được liên kết đến trang thông tin chi tiết tương ứng."
        ),
        
        // Danh sách từ khóa theo danh mục
        React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" },
          keywordCategories.map((category, categoryIndex) => 
            React.createElement('div', { key: categoryIndex, className: "bg-gray-50 p-4 rounded-lg border border-gray-200" },
              React.createElement('h2', { className: "text-xl font-semibold mb-3 text-[#bc2022]" }, category.category),
              React.createElement('ul', { className: "grid grid-cols-2 gap-2" },
                category.keywords.map((item, itemIndex) => 
                  React.createElement('li', { key: itemIndex },
                    React.createElement(Link, { 
                      href: item.url, 
                      className: "text-blue-600 hover:text-blue-800 flex items-center text-sm"
                    }, 
                      React.createElement('span', { className: "mr-1 text-[#bc2022]" }, "•"),
                      item.keyword
                    )
                  )
                )
              )
            )
          )
        ),
        
        // FAQ Section
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Câu hỏi thường gặp về từ khóa 92Lottery"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          faqItems.map((faq, index) => 
            React.createElement('div', { key: index, className: "border-b border-gray-200 pb-4" },
              React.createElement('h3', { className: "text-xl font-semibold mb-2" }, faq.question),
              React.createElement('p', null, faq.answer)
            )
          )
        ),
        
        // Liên kết đến trang chính
        React.createElement('div', { className: "bg-gray-100 p-6 rounded-lg mt-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-4" }, "Tìm hiểu thêm về 92Lottery"),
          React.createElement('p', { className: "mb-4" }, "Để biết thêm thông tin đầy đủ về 92Lottery, vui lòng truy cập trang:"),
          React.createElement('div', { className: "flex justify-center" },
            React.createElement(Link, { 
              href: "/tat-ca-ve-92lottery", 
              className: "bg-[#bc2022] text-white px-6 py-2 rounded-md hover:bg-[#a51b1b] transition-colors"
            }, "Tất cả về 92Lottery")
          )
        )
      )
    )
  );
}
