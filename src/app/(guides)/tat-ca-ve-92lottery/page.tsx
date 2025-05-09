import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Tất cả về 92Lottery - Thông tin đầy đủ và chi tiết nhất | 92Lottery',
  description: 'Tổng hợp đầy đủ thông tin về 92Lottery: đăng ký, đăng nhập, nạp rút tiền, mini game, ứng dụng, khuyến mãi và đánh giá. Hướng dẫn chi tiết dành cho người mới.',
  keywords: ['92lottery', 'trangchu92lottery', 'dangky92lottery', 'dangnhap92lottery', '92lotterykhuyenmai', 'thông tin 92lottery', 'hướng dẫn 92lottery', 'tất cả về 92lottery', 'tổng quan 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/tat-ca-ve-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/tat-ca-ve-92lottery',
      'x-default': 'https://92lottery.dev/tat-ca-ve-92lottery'
    }
  },
};

export default function AllAbout92LotteryPage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "92Lottery là gì?",
      answer: "92Lottery là trang xổ số độc quyền nổi bật với các trò chơi như WinGo, K3 Lotre, 5D Lotre, TRX Win trực tuyến đa dạng và uy tín, cùng nhiều sảnh game bài, bắn cá, nổ hũ và casino trực tuyến. Giao diện độc quyền cho Mobile và các hệ điều hành máy tính với tốc độ load tải cực nhanh không có độ trễ."
    },
    {
      question: "Làm thế nào để đăng ký tài khoản 92Lottery?",
      answer: "Để đăng ký tài khoản 92Lottery, bạn chỉ cần truy cập trang chủ 92lottery.dev, nhấp vào nút 'Đăng ký', điền thông tin cá nhân và làm theo hướng dẫn. Sau khi đăng ký thành công, bạn sẽ nhận được khuyến mãi 100K dành cho tân thủ."
    },
    {
      question: "92Lottery có những trò chơi nào nổi bật?",
      answer: "92Lottery nổi bật với các trò chơi xổ số độc quyền như WinGo (xổ số 1 phút), K3 Lotre (xổ số 3 phút), 5D Lotre (xổ số 5 phút), TRX Win (xổ số blockchain). Ngoài ra còn có nhiều sảnh game bài, bắn cá, nổ hũ và casino trực tuyến đa dạng."
    },
    {
      question: "Làm thế nào để nạp và rút tiền tại 92Lottery?",
      answer: "92Lottery hỗ trợ nhiều phương thức nạp tiền như chuyển khoản ngân hàng, ví điện tử (Momo, ZaloPay, VNPay), thẻ cào điện thoại, và tiền điện tử (USDT, BTC). Rút tiền cũng nhanh chóng và an toàn với thời gian xử lý từ 5-30 phút tùy theo phương thức rút tiền bạn chọn."
    },
    {
      question: "92Lottery có ứng dụng di động không?",
      answer: "Có, 92Lottery có ứng dụng di động cho cả hệ điều hành Android và iOS. Ứng dụng mang đến trải nghiệm cá cược mượt mà và tiện lợi với nhiều tính năng độc đáo như đăng nhập bằng vân tay, thông báo kết quả, và khuyến mãi độc quyền."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Tất cả về 92Lottery", url: "https://92lottery.dev/tat-ca-ve-92lottery" }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const breadcrumbSchemaString = JSON.stringify(breadcrumbSchema);

  // Danh sách các trang hướng dẫn
  const guidePages = [
    {
      title: "Đăng ký và Đăng nhập",
      links: [
        { text: "Hướng dẫn đăng ký 92Lottery chi tiết", url: "/huong-dan-dang-ky" },
        { text: "Hướng dẫn đăng nhập 92Lottery đơn giản", url: "/huong-dan-dang-nhap" }
      ]
    },
    {
      title: "Nạp và Rút tiền",
      links: [
        { text: "Hướng dẫn nạp tiền 92Lottery nhanh chóng", url: "/huong-dan-nap-tien" },
        { text: "Rút tiền 92Lottery an toàn và hiệu quả", url: "/rut-tien-92lottery" }
      ]
    },
    {
      title: "Trò chơi và Hướng dẫn",
      links: [
        { text: "92Lottery Mini Game - WinGo, K3, 5D, TRX", url: "/92lottery-mini-game" },
        { text: "Cách chơi 92Lottery hiệu quả", url: "/cach-choi-92lottery-hieu-qua" }
      ]
    },
    {
      title: "Thông tin và Đánh giá",
      links: [
        { text: "Giới thiệu về 92Lottery", url: "/gioi-thieu" },
        { text: "Đánh giá 92Lottery 2025", url: "/danh-gia-92lottery-2025" },
        { text: "So sánh 92Lottery với các nhà cái khác", url: "/so-sanh-92lottery" },
        { text: "92Lottery có lừa đảo không?", url: "/92lottery-co-lua-dao-khong" }
      ]
    },
    {
      title: "Ứng dụng và Tiện ích",
      links: [
        { text: "App 92Lottery - Tải và cài đặt", url: "/app-92lottery" },
        { text: "Bảo mật tài khoản 92Lottery", url: "/bao-mat-tai-khoan-92lottery" }
      ]
    },
    {
      title: "Cộng đồng và Hỗ trợ",
      links: [
        { text: "Cộng đồng 92Lottery", url: "/cong-dong-92lottery" },
        { text: "92Lottery Telegram - Kênh thông tin chính thức", url: "/92lottery-telegram" },
        { text: "92Lottery Club - Đặc quyền VIP", url: "/92lottery-club" }
      ]
    },
    {
      title: "Khắc phục sự cố",
      links: [
        { text: "92Lottery bị sập - Cách khắc phục", url: "/92lottery-bi-sap" },
        { text: "Lịch sử phát triển 92Lottery", url: "/lich-su-phat-trien-92lottery" }
      ]
    }
  ];

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
          React.createElement('li', { className: "text-gray-700" }, "Tất cả về 92Lottery")
        )
      )
    ),
    
    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "Tất cả về 92Lottery - Thông tin đầy đủ và chi tiết nhất"),
      
      React.createElement('div', { className: "prose max-w-none" },
        React.createElement('p', { className: "text-lg mb-6" }, 
          "92Lottery là trang xổ số độc quyền nổi bật với các trò chơi như WinGo, K3 Lotre, 5D Lotre, TRX Win trực tuyến đa dạng và uy tín, cùng nhiều sảnh game bài, bắn cá, nổ hũ và casino trực tuyến. Trang hướng dẫn này tổng hợp tất cả thông tin bạn cần biết về 92Lottery, từ cách đăng ký, đăng nhập, nạp rút tiền đến các trò chơi và khuyến mãi hấp dẫn."
        ),
        
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Tổng quan về 92Lottery"),
        
        React.createElement('div', { className: "mb-8" },
          React.createElement('p', { className: "mb-4" }, 
            "92Lottery là nhà cái cá cược trực tuyến uy tín hàng đầu Việt Nam, cung cấp đa dạng các trò chơi với giao diện độc quyền cho Mobile và các hệ điều hành máy tính. Với tốc độ load tải cực nhanh không có độ trễ, 92Lottery mang đến trải nghiệm cá cược mượt mà và tiện lợi cho người chơi."
          ),
          
          React.createElement('p', { className: "mb-4" }, 
            "Những khuyến mãi độc quyền chỉ 92Lottery đem lại cho tân thủ tốt nhất, cùng với hệ thống bảo mật tiên tiến và đội ngũ hỗ trợ khách hàng chuyên nghiệp 24/7, đã giúp 92Lottery trở thành lựa chọn hàng đầu của người chơi Việt Nam."
          )
        ),
        
        // Danh sách các trang hướng dẫn
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Hướng dẫn đầy đủ về 92Lottery"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          guidePages.map((section, sectionIndex) => 
            React.createElement('div', { key: sectionIndex, className: "bg-gray-50 p-4 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-xl font-semibold mb-3 text-[#bc2022]" }, section.title),
              React.createElement('ul', { className: "space-y-2" },
                section.links.map((link, linkIndex) => 
                  React.createElement('li', { key: linkIndex },
                    React.createElement(Link, { 
                      href: link.url, 
                      className: "text-blue-600 hover:text-blue-800 flex items-center"
                    }, 
                      React.createElement('span', { className: "mr-2" }, "→"),
                      link.text
                    )
                  )
                )
              )
            )
          )
        ),
        
        // FAQ Section
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Câu hỏi thường gặp về 92Lottery"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          faqItems.map((faq, index) => 
            React.createElement('div', { key: index, className: "border-b border-gray-200 pb-4" },
              React.createElement('h3', { className: "text-xl font-semibold mb-2" }, faq.question),
              React.createElement('p', null, faq.answer)
            )
          )
        ),
        
        // Thông tin liên hệ
        React.createElement('div', { className: "bg-gray-100 p-6 rounded-lg mt-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-4" }, "Thông tin liên hệ 92Lottery"),
          React.createElement('ul', { className: "space-y-2" },
            React.createElement('li', null, "Thương hiệu: 92Lottery"),
            React.createElement('li', null, "Website: ", 
              React.createElement(Link, { href: "/", className: "text-blue-600 hover:text-blue-800" }, "https://92lottery.dev")
            ),
            React.createElement('li', null, "Email: support@92lottery.dev"),
            React.createElement('li', null, "Số điện thoại: 0988 587 888"),
            React.createElement('li', null, "Địa chỉ: 228 Trần Duy Hưng, Hà Nội, Việt Nam"),
            React.createElement('li', null, "Zipcode: 100000")
          )
        )
      )
    )
  );
}
