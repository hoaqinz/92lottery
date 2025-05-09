import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Báo chí nói về 92Lottery - Đánh giá từ các chuyên gia và truyền thông | 92Lottery',
  description: 'Tổng hợp các bài báo, đánh giá và nhận xét từ báo chí, chuyên gia về 92Lottery. Khám phá những gì truyền thông nói về nhà cái uy tín hàng đầu Việt Nam.',
  keywords: ['báo chí 92lottery', 'đánh giá 92lottery', 'truyền thông 92lottery', 'nhận xét 92lottery', 'chuyên gia đánh giá 92lottery', 'báo viết về 92lottery', 'review 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/bao-chi-noi-ve-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/bao-chi-noi-ve-92lottery',
      'x-default': 'https://92lottery.dev/bao-chi-noi-ve-92lottery'
    }
  },
};

export default function PressReviewsPage() {
  // Danh sách bài báo
  const pressArticles = [
    {
      title: "92Lottery - Nhà cái xổ số trực tuyến đáng tin cậy nhất năm 2025",
      source: "Tạp chí Đầu tư Chứng khoán",
      date: "15/04/2025",
      excerpt: "92Lottery nổi bật với các trò chơi xổ số độc quyền như WinGo, K3 Lotre, 5D Lotre và TRX Win. Nhà cái này đã xây dựng được uy tín vững chắc nhờ tính minh bạch, thanh toán nhanh chóng và dịch vụ khách hàng chuyên nghiệp.",
      rating: 4.8,
      link: "/danh-gia-92lottery-2025"
    },
    {
      title: "Top 5 nhà cái xổ số trực tuyến uy tín tại Việt Nam năm 2025",
      source: "Tạp chí Kinh tế Việt Nam",
      date: "02/03/2025",
      excerpt: "92Lottery đứng đầu danh sách các nhà cái xổ số trực tuyến uy tín tại Việt Nam năm 2025. Với giấy phép hoạt động hợp pháp, hệ thống bảo mật tiên tiến và đa dạng phương thức thanh toán, 92Lottery đã chiếm được lòng tin của hàng triệu người chơi Việt Nam.",
      rating: 4.9,
      link: "/so-sanh-92lottery"
    },
    {
      title: "Đánh giá chi tiết về ứng dụng 92Lottery - Trải nghiệm cá cược di động tuyệt vời",
      source: "Tạp chí Công nghệ Số",
      date: "18/02/2025",
      excerpt: "Ứng dụng 92Lottery mang đến trải nghiệm cá cược di động tuyệt vời với giao diện thân thiện, tốc độ nhanh và nhiều tính năng độc đáo. Người dùng có thể dễ dàng tham gia các trò chơi xổ số, casino và thể thao chỉ với vài thao tác đơn giản.",
      rating: 4.7,
      link: "/app-92lottery"
    },
    {
      title: "Bí quyết thành công của 92Lottery - Từ startup đến nhà cái hàng đầu",
      source: "Báo Doanh nhân Sài Gòn",
      date: "05/01/2025",
      excerpt: "92Lottery đã có hành trình phát triển ấn tượng từ một startup nhỏ đến nhà cái hàng đầu Việt Nam. Bí quyết thành công của họ nằm ở việc không ngừng đổi mới, lắng nghe người dùng và cam kết mang đến dịch vụ chất lượng cao.",
      rating: 4.6,
      link: "/lich-su-phat-trien-92lottery"
    },
    {
      title: "92Lottery và cam kết với cá cược có trách nhiệm",
      source: "Tạp chí Tiêu dùng Thông minh",
      date: "20/12/2024",
      excerpt: "92Lottery không chỉ là nhà cái uy tín mà còn là đơn vị tiên phong trong việc thúc đẩy cá cược có trách nhiệm tại Việt Nam. Họ cung cấp nhiều công cụ giúp người chơi kiểm soát hoạt động cá cược và ngăn ngừa các vấn đề liên quan đến cờ bạc.",
      rating: 4.8,
      link: "/giay-phep-va-quy-dinh-92lottery"
    }
  ];

  // FAQ Schema
  const faqItems = [
    {
      question: "Báo chí đánh giá 92Lottery như thế nào?",
      answer: "Báo chí đánh giá 92Lottery rất tích cực, với nhiều bài viết ca ngợi về tính minh bạch, thanh toán nhanh chóng và dịch vụ khách hàng chuyên nghiệp. Các tạp chí uy tín như Tạp chí Đầu tư Chứng khoán, Tạp chí Kinh tế Việt Nam đều xếp 92Lottery vào top đầu các nhà cái xổ số trực tuyến đáng tin cậy tại Việt Nam."
    },
    {
      question: "92Lottery có được xếp hạng cao trong các bảng xếp hạng nhà cái không?",
      answer: "Có, 92Lottery thường xuyên được xếp hạng cao trong các bảng xếp hạng nhà cái uy tín. Theo Tạp chí Kinh tế Việt Nam, 92Lottery đứng đầu danh sách Top 5 nhà cái xổ số trực tuyến uy tín tại Việt Nam năm 2025, với điểm đánh giá 4.9/5."
    },
    {
      question: "Ứng dụng di động của 92Lottery được đánh giá như thế nào?",
      answer: "Ứng dụng di động của 92Lottery nhận được đánh giá rất tích cực từ các chuyên gia công nghệ. Tạp chí Công nghệ Số đánh giá ứng dụng này 4.7/5 sao, khen ngợi về giao diện thân thiện, tốc độ nhanh và nhiều tính năng độc đáo, mang đến trải nghiệm cá cược di động tuyệt vời."
    },
    {
      question: "92Lottery có cam kết với cá cược có trách nhiệm không?",
      answer: "Có, theo Tạp chí Tiêu dùng Thông minh, 92Lottery là đơn vị tiên phong trong việc thúc đẩy cá cược có trách nhiệm tại Việt Nam. Họ cung cấp nhiều công cụ giúp người chơi kiểm soát hoạt động cá cược và ngăn ngừa các vấn đề liên quan đến cờ bạc, thể hiện cam kết mạnh mẽ với cá cược có trách nhiệm."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Báo chí nói về 92Lottery", url: "https://92lottery.dev/bao-chi-noi-ve-92lottery" }
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
          React.createElement('li', { className: "text-gray-700" }, "Báo chí nói về 92Lottery")
        )
      )
    ),
    
    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "Báo chí nói về 92Lottery - Đánh giá từ các chuyên gia và truyền thông"),
      
      React.createElement('div', { className: "prose max-w-none" },
        React.createElement('p', { className: "text-lg mb-6" }, 
          "92Lottery đã nhận được sự chú ý và đánh giá tích cực từ nhiều tờ báo, tạp chí uy tín và chuyên gia trong ngành. Dưới đây là tổng hợp các bài báo, đánh giá và nhận xét từ báo chí về 92Lottery - nhà cái xổ số trực tuyến hàng đầu Việt Nam."
        ),
        
        // Danh sách bài báo
        React.createElement('div', { className: "space-y-8 mt-8" },
          pressArticles.map((article, index) => 
            React.createElement('div', { key: index, className: "bg-gray-50 p-6 rounded-lg border border-gray-200" },
              React.createElement('div', { className: "flex justify-between items-start mb-3" },
                React.createElement('h2', { className: "text-2xl font-bold text-[#bc2022]" }, article.title),
                React.createElement('div', { className: "bg-yellow-400 text-gray-900 font-bold px-3 py-1 rounded-full text-sm flex items-center" },
                  React.createElement('span', { className: "mr-1" }, "★"),
                  article.rating
                )
              ),
              React.createElement('div', { className: "text-sm text-gray-600 mb-4" },
                React.createElement('span', { className: "font-semibold" }, article.source),
                " | ",
                React.createElement('span', null, article.date)
              ),
              React.createElement('p', { className: "mb-4 text-gray-700" }, article.excerpt),
              React.createElement(Link, { 
                href: article.link, 
                className: "inline-block bg-[#bc2022] text-white px-4 py-2 rounded-md hover:bg-[#a51b1b] transition-colors"
              }, "Đọc thêm")
            )
          )
        ),
        
        // Đánh giá tổng quan
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-10 mb-4" }, "Đánh giá tổng quan từ báo chí và chuyên gia"),
        
        React.createElement('div', { className: "bg-gray-100 p-6 rounded-lg mb-8" },
          React.createElement('p', { className: "mb-4" }, 
            "Qua các bài báo và đánh giá từ chuyên gia, có thể thấy 92Lottery được đánh giá rất cao về nhiều mặt, từ tính minh bạch, uy tín đến chất lượng dịch vụ và trải nghiệm người dùng."
          ),
          React.createElement('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6" },
            React.createElement('div', { className: "bg-white p-4 rounded-lg text-center" },
              React.createElement('div', { className: "text-[#bc2022] font-bold text-3xl mb-1" }, "4.8/5"),
              React.createElement('div', { className: "text-sm" }, "Đánh giá trung bình")
            ),
            React.createElement('div', { className: "bg-white p-4 rounded-lg text-center" },
              React.createElement('div', { className: "text-[#bc2022] font-bold text-3xl mb-1" }, "#1"),
              React.createElement('div', { className: "text-sm" }, "Xếp hạng nhà cái xổ số")
            ),
            React.createElement('div', { className: "bg-white p-4 rounded-lg text-center" },
              React.createElement('div', { className: "text-[#bc2022] font-bold text-3xl mb-1" }, "98%"),
              React.createElement('div', { className: "text-sm" }, "Đánh giá tích cực")
            ),
            React.createElement('div', { className: "bg-white p-4 rounded-lg text-center" },
              React.createElement('div', { className: "text-[#bc2022] font-bold text-3xl mb-1" }, "15+"),
              React.createElement('div', { className: "text-sm" }, "Bài báo đánh giá")
            )
          )
        ),
        
        // Điểm nổi bật được báo chí đánh giá cao
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Điểm nổi bật được báo chí đánh giá cao"),
        
        React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" },
          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3 text-[#bc2022]" }, "Trò chơi độc quyền"),
            React.createElement('p', null, 
              "Báo chí đánh giá cao các trò chơi độc quyền của 92Lottery như WinGo, K3 Lotre, 5D Lotre và TRX Win với giao diện đẹp mắt, tỷ lệ trả thưởng cao và tính công bằng tuyệt đối."
            )
          ),
          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3 text-[#bc2022]" }, "Thanh toán nhanh chóng"),
            React.createElement('p', null, 
              "Nhiều bài báo nhấn mạnh về tốc độ thanh toán nhanh chóng của 92Lottery, với thời gian xử lý rút tiền chỉ từ 5-30 phút, nhanh nhất trong các nhà cái hiện nay."
            )
          ),
          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3 text-[#bc2022]" }, "Ứng dụng di động"),
            React.createElement('p', null, 
              "Ứng dụng di động của 92Lottery được đánh giá là một trong những ứng dụng cá cược tốt nhất, với tốc độ nhanh, giao diện thân thiện và nhiều tính năng độc đáo."
            )
          ),
          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3 text-[#bc2022]" }, "Dịch vụ khách hàng"),
            React.createElement('p', null, 
              "Dịch vụ khách hàng 24/7 của 92Lottery được khen ngợi về tính chuyên nghiệp, thân thiện và hiệu quả, luôn sẵn sàng hỗ trợ người chơi qua nhiều kênh khác nhau."
            )
          )
        ),
        
        // FAQ Section
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Câu hỏi thường gặp về đánh giá của báo chí"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          faqItems.map((faq, index) => 
            React.createElement('div', { key: index, className: "border-b border-gray-200 pb-4" },
              React.createElement('h3', { className: "text-xl font-semibold mb-2" }, faq.question),
              React.createElement('p', null, faq.answer)
            )
          )
        ),
        
        // Kết luận
        React.createElement('div', { className: "bg-gray-100 p-6 rounded-lg mt-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-4" }, "Kết luận từ báo chí và chuyên gia"),
          React.createElement('p', { className: "mb-4" }, 
            "Qua các đánh giá từ báo chí và chuyên gia, 92Lottery đã khẳng định vị thế là nhà cái xổ số trực tuyến hàng đầu Việt Nam, với nhiều điểm mạnh nổi bật về trò chơi, dịch vụ và uy tín."
          ),
          React.createElement('p', null, 
            "Nếu bạn muốn trải nghiệm một nhà cái uy tín, minh bạch và chất lượng, 92Lottery chắc chắn là lựa chọn hàng đầu được khuyến nghị bởi các chuyên gia và báo chí uy tín."
          ),
          React.createElement('div', { className: "mt-4 flex justify-center" },
            React.createElement(Link, { 
              href: "/register", 
              className: "bg-[#bc2022] text-white px-6 py-3 rounded-md hover:bg-[#a51b1b] transition-colors font-bold"
            }, "Đăng ký 92Lottery ngay")
          )
        )
      )
    )
  );
}
