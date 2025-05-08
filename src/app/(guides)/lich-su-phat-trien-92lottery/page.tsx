import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Lịch sử phát triển 92Lottery - Từ khi thành lập đến nay',
  description: 'Tìm hiểu lịch sử phát triển của 92Lottery từ khi thành lập đến nay. Các cột mốc quan trọng, sự phát triển và thành tựu của 92Lottery qua các năm.',
  keywords: ['lịch sử 92lottery', 'phát triển 92lottery', 'thành lập 92lottery', 'cột mốc 92lottery', 'tiến trình phát triển 92lottery', 'thành tựu 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/lich-su-phat-trien-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/lich-su-phat-trien-92lottery',
      'x-default': 'https://92lottery.dev/lich-su-phat-trien-92lottery'
    }
  },
};

export default function HistoryPage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "92Lottery được thành lập khi nào?",
      answer: "92Lottery được thành lập vào năm 2018 bởi một nhóm các chuyên gia trong ngành cá cược trực tuyến. Ban đầu, 92Lottery chỉ cung cấp một số trò chơi xổ số cơ bản, nhưng đã nhanh chóng mở rộng danh mục trò chơi và dịch vụ trong những năm tiếp theo."
    },
    {
      question: "92Lottery đã đạt được những thành tựu gì trong quá trình phát triển?",
      answer: "Trong quá trình phát triển, 92Lottery đã đạt được nhiều thành tựu đáng kể: 1) Đạt mốc 1 triệu người dùng vào năm 2020, 2) Nhận giải thưởng 'Nhà cái xổ số tốt nhất' năm 2021 và 2023, 3) Mở rộng thị trường sang nhiều quốc gia Đông Nam Á, 4) Phát triển ứng dụng di động với hơn 500,000 lượt tải, 5) Xây dựng hệ thống thanh toán nhanh chóng với thời gian xử lý rút tiền trung bình chỉ 10 phút."
    },
    {
      question: "92Lottery đã trải qua những thay đổi lớn nào?",
      answer: "92Lottery đã trải qua nhiều thay đổi lớn: 1) Năm 2019: Nâng cấp nền tảng kỹ thuật và bổ sung nhiều trò chơi casino, 2) Năm 2020: Ra mắt ứng dụng di động và mở rộng sang thị trường Đông Nam Á, 3) Năm 2021: Cải tiến hệ thống thanh toán và triển khai chương trình VIP, 4) Năm 2022: Tích hợp công nghệ blockchain và ra mắt TRX Win, 5) Năm 2023: Nâng cấp giao diện người dùng và mở rộng danh mục trò chơi thể thao, 6) Năm 2024: Triển khai hệ thống bảo mật mới và cải thiện dịch vụ khách hàng."
    },
    {
      question: "Tầm nhìn tương lai của 92Lottery là gì?",
      answer: "Tầm nhìn tương lai của 92Lottery bao gồm: 1) Mở rộng thị trường sang các khu vực mới như Châu Âu và Mỹ Latinh, 2) Phát triển các trò chơi độc quyền với công nghệ tiên tiến, 3) Tích hợp sâu hơn với công nghệ blockchain và tiền điện tử, 4) Cải thiện trải nghiệm người dùng thông qua AI và học máy, 5) Đạt mốc 5 triệu người dùng vào năm 2026, 6) Trở thành nhà cái xổ số và casino trực tuyến hàng đầu toàn cầu."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Lịch sử phát triển 92Lottery", url: "https://92lottery.dev/lich-su-phat-trien-92lottery" }
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
          React.createElement('li', { className: "text-gray-700" }, "Lịch sử phát triển 92Lottery")
        )
      )
    ),

    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "Lịch sử phát triển 92Lottery - Từ khi thành lập đến nay"),

      React.createElement('div', { className: "prose max-w-none" },
        React.createElement('p', { className: "text-lg mb-6" },
          "92Lottery đã trải qua một hành trình phát triển ấn tượng từ khi thành lập đến nay, trở thành một trong những nhà cái xổ số và casino trực tuyến hàng đầu tại Việt Nam và khu vực Đông Nam Á. Bài viết này sẽ giúp bạn hiểu rõ hơn về lịch sử phát triển, các cột mốc quan trọng và thành tựu của 92Lottery qua các năm."
        ),

        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Sự ra đời của 92Lottery (2018)"),

        React.createElement('div', { className: "mb-8" },
          React.createElement('p', { className: "mb-4" },
            "92Lottery được thành lập vào năm 2018 bởi một nhóm các chuyên gia có nhiều năm kinh nghiệm trong ngành cá cược trực tuyến. Với tầm nhìn tạo ra một nền tảng cá cược xổ số và casino trực tuyến uy tín, an toàn và thân thiện với người dùng Việt Nam, 92Lottery đã chính thức ra mắt vào tháng 6/2018."
          ),

          React.createElement('p', { className: "mb-4" },
            "Trong giai đoạn đầu, 92Lottery chỉ cung cấp một số trò chơi xổ số cơ bản và một vài trò chơi casino. Tuy nhiên, với chiến lược phát triển rõ ràng và đầu tư mạnh mẽ vào công nghệ, 92Lottery đã nhanh chóng thu hút được sự chú ý của cộng đồng người chơi."
          )
        ),

        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Giai đoạn mở rộng và phát triển (2019-2020)"),

        React.createElement('div', { className: "mb-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "Năm 2019: Nâng cấp nền tảng và mở rộng danh mục trò chơi"),
          React.createElement('p', { className: "mb-4" },
            "Năm 2019 đánh dấu giai đoạn phát triển mạnh mẽ của 92Lottery với việc nâng cấp toàn diện nền tảng kỹ thuật và bổ sung nhiều trò chơi mới. Đây cũng là năm 92Lottery nhận thêm giấy phép hoạt động từ Cơ quan Quản lý Trò chơi Philippines (PAGCOR), củng cố vị thế pháp lý và uy tín của mình."
          ),

          React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "Năm 2020: Ra mắt ứng dụng di động và mở rộng thị trường"),
          React.createElement('p', { className: "mb-4" },
            "Năm 2020, mặc dù đối mặt với nhiều thách thức do đại dịch COVID-19, 92Lottery vẫn tiếp tục phát triển mạnh mẽ với việc ra mắt ứng dụng di động cho cả Android và iOS. Đây cũng là năm 92Lottery bắt đầu mở rộng thị trường sang các quốc gia khác trong khu vực Đông Nam Á."
          )
        ),

        // FAQ Section
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Các câu hỏi thường gặp về lịch sử 92Lottery"),

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
              React.createElement(Link, { href: "/danh-gia-92lottery-2025", className: "text-blue-600 hover:text-blue-800" },
                "Đánh giá 92Lottery 2025 - Review chi tiết từ chuyên gia"
              )
            ),
            React.createElement('li', null,
              React.createElement(Link, { href: "/92lottery-co-lua-dao-khong", className: "text-blue-600 hover:text-blue-800" },
                "92Lottery có lừa đảo không? Đánh giá uy tín từ chuyên gia"
              )
            ),
            React.createElement('li', null,
              React.createElement(Link, { href: "/cach-choi-92lottery-hieu-qua", className: "text-blue-600 hover:text-blue-800" },
                "Cách chơi 92Lottery hiệu quả - Chiến thuật và mẹo thắng lớn"
              )
            ),
            React.createElement('li', null,
              React.createElement(Link, { href: "/app-92lottery", className: "text-blue-600 hover:text-blue-800" },
                "Cách tải và cài đặt App 92Lottery trên điện thoại Android và iOS"
              )
            )
          )
        )
      )
    )
  );
}
