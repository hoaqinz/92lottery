import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'WinGo 92Lottery - Xổ số 1 phút với tỷ lệ trả thưởng cao | 92Lottery',
  description: 'WinGo 92Lottery - Xổ số 1 phút với tỷ lệ trả thưởng cao và công bằng. Hướng dẫn chơi WinGo, chiến thuật, mẹo và kinh nghiệm từ chuyên gia.',
  keywords: ['wingo 92lottery', 'xổ số 1 phút', 'xổ số wingo', 'cách chơi wingo', 'chiến thuật wingo', 'tỷ lệ wingo', 'wingo 92lottery việt nam', 'wingo trực tuyến'],
  alternates: {
    canonical: 'https://92lottery.dev/wingo-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/wingo-92lottery',
      'x-default': 'https://92lottery.dev/wingo-92lottery'
    }
  },
};

export default function WinGoPage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "WinGo 92Lottery là gì?",
      answer: "WinGo 92Lottery là trò chơi xổ số 1 phút độc quyền tại 92Lottery, với tỷ lệ trả thưởng cao và công bằng. Mỗi phiên WinGo kéo dài 1 phút, người chơi có thể đặt cược vào nhiều lựa chọn khác nhau như: Lớn/Nhỏ, Chẵn/Lẻ, Xanh/Đỏ/Tím, và Đoán số cụ thể từ 0-9."
    },
    {
      question: "Cách chơi WinGo 92Lottery như thế nào?",
      answer: "Để chơi WinGo 92Lottery, bạn cần: 1) Đăng nhập vào tài khoản 92Lottery, 2) Chọn trò chơi WinGo, 3) Chọn kiểu cược (Lớn/Nhỏ, Chẵn/Lẻ, Xanh/Đỏ/Tím, hoặc Đoán số), 4) Nhập số tiền cược, 5) Xác nhận đặt cược, 6) Chờ kết quả sau 1 phút. Nếu dự đoán đúng, bạn sẽ nhận được tiền thưởng theo tỷ lệ quy định."
    },
    {
      question: "Tỷ lệ trả thưởng của WinGo 92Lottery là bao nhiêu?",
      answer: "Tỷ lệ trả thưởng của WinGo 92Lottery như sau: Lớn/Nhỏ, Chẵn/Lẻ: 1.96 lần tiền cược; Xanh/Đỏ: 2 lần tiền cược; Tím: 4.5 lần tiền cược; Đoán số cụ thể (0-9): 9.8 lần tiền cược. Tỷ lệ này có thể thay đổi trong các sự kiện khuyến mãi đặc biệt."
    },
    {
      question: "Có chiến thuật nào hiệu quả khi chơi WinGo 92Lottery không?",
      answer: "Có một số chiến thuật hiệu quả khi chơi WinGo 92Lottery: 1) Chiến thuật Martingale: Tăng gấp đôi tiền cược sau mỗi lần thua, 2) Chiến thuật D'Alembert: Tăng/giảm tiền cược từ từ, 3) Chiến thuật theo dõi xu hướng: Đặt cược theo xu hướng gần đây, 4) Chiến thuật quản lý vốn: Chỉ cược 1-5% tổng vốn mỗi lần. Tuy nhiên, không có chiến thuật nào đảm bảo 100% thắng lợi, vì vậy hãy chơi có trách nhiệm."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Trò chơi", url: "https://92lottery.dev/92lottery-mini-game" },
    { name: "WinGo 92Lottery", url: "https://92lottery.dev/wingo-92lottery" }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const breadcrumbSchemaString = JSON.stringify(breadcrumbSchema);

  // Game Schema
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "Game",
    "@id": "https://92lottery.dev/wingo-92lottery/#game",
    "name": "WinGo 92Lottery",
    "description": "WinGo 92Lottery là trò chơi xổ số 1 phút độc quyền tại 92Lottery, với tỷ lệ trả thưởng cao và công bằng.",
    "url": "https://92lottery.dev/wingo-92lottery",
    "gamePlatform": ["Mobile", "Desktop", "Web"],
    "applicationCategory": "Game",
    "genre": "Xổ số trực tuyến",
    "provider": {
      "@type": "Organization",
      "@id": "https://92lottery.dev/#organization",
      "name": "92Lottery",
      "url": "https://92lottery.dev"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "VND"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1245",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://92lottery.dev/92lottery-mini-game"
    ]
  };
  const gameSchemaString = JSON.stringify(gameSchema);

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
    React.createElement('script', {
      key: 'game-schema',
      type: 'application/ld+json',
      dangerouslySetInnerHTML: { __html: gameSchemaString }
    }),

    // Breadcrumb
    React.createElement('div', { className: "bg-gray-100 py-2 px-4" },
      React.createElement('nav', { className: "text-sm" },
        React.createElement('ol', { className: "list-none p-0 inline-flex" },
          React.createElement('li', { className: "flex items-center" },
            React.createElement(Link, { href: "/", className: "text-blue-600 hover:text-blue-800" }, "Trang chủ"),
            React.createElement('span', { className: "mx-2" }, "/")
          ),
          React.createElement('li', { className: "flex items-center" },
            React.createElement(Link, { href: "/92lottery-mini-game", className: "text-blue-600 hover:text-blue-800" }, "Trò chơi"),
            React.createElement('span', { className: "mx-2" }, "/")
          ),
          React.createElement('li', { className: "text-gray-700" }, "WinGo 92Lottery")
        )
      )
    ),

    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "WinGo 92Lottery - Xổ số 1 phút với tỷ lệ trả thưởng cao"),

      React.createElement('div', { className: "prose max-w-none" },
        // Giới thiệu WinGo
        React.createElement('div', { className: "bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8" },
          React.createElement('div', { className: "flex flex-col md:flex-row gap-6 items-center" },
            React.createElement('div', { className: "md:w-1/3 flex justify-center" },
              React.createElement('div', { className: "relative w-48 h-48 rounded-lg overflow-hidden" },
                React.createElement('div', { className: "absolute inset-0 bg-gray-200 flex items-center justify-center" },
                  React.createElement('div', { className: "text-center" },
                    React.createElement('div', { className: "text-[#bc2022] font-bold text-2xl" }, "WinGo"),
                    React.createElement('div', { className: "text-gray-600" }, "Xổ số 1 phút")
                  )
                )
              )
            ),
            React.createElement('div', { className: "md:w-2/3" },
              React.createElement('p', { className: "mb-4" },
                "WinGo 92Lottery là trò chơi xổ số 1 phút độc quyền tại 92Lottery, với tỷ lệ trả thưởng cao và công bằng. Mỗi phiên WinGo kéo dài 1 phút, người chơi có thể đặt cược vào nhiều lựa chọn khác nhau như: Lớn/Nhỏ, Chẵn/Lẻ, Xanh/Đỏ/Tím, và Đoán số cụ thể từ 0-9."
              ),
              React.createElement('p', { className: "mb-4" },
                "WinGo sử dụng Bộ sinh số ngẫu nhiên (RNG) được chứng nhận bởi iTech Labs, đảm bảo tính công bằng tuyệt đối của mỗi kết quả. Với giao diện đẹp mắt, dễ sử dụng và tốc độ nhanh chóng, WinGo là lựa chọn hàng đầu của người chơi xổ số trực tuyến tại Việt Nam."
              ),
              React.createElement('div', { className: "flex gap-4" },
                React.createElement(Link, {
                  href: "/register",
                  className: "bg-[#bc2022] text-white px-4 py-2 rounded-md hover:bg-[#a51b1b] transition-colors text-sm"
                }, "Chơi ngay"),
                React.createElement(Link, {
                  href: "/video-92lottery",
                  className: "bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors text-sm"
                }, "Xem video hướng dẫn")
              )
            )
          )
        ),

        // Cách chơi WinGo
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Cách chơi WinGo 92Lottery"),

        React.createElement('div', { className: "space-y-4 mb-8" },
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "Bước 1: Đăng nhập và chọn trò chơi"),
            React.createElement('p', null,
              "Đăng nhập vào tài khoản 92Lottery của bạn và chọn trò chơi WinGo từ menu chính hoặc mục Mini Game."
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "Bước 2: Chọn kiểu cược"),
            React.createElement('p', { className: "mb-2" },
              "WinGo cung cấp nhiều kiểu cược khác nhau:"
            ),
            React.createElement('ul', { className: "list-disc pl-5 space-y-1" },
              React.createElement('li', null, "Lớn (5-9) / Nhỏ (0-4)"),
              React.createElement('li', null, "Chẵn (0,2,4,6,8) / Lẻ (1,3,5,7,9)"),
              React.createElement('li', null, "Xanh (1,3,5,7,9) / Đỏ (0,2,4,6,8) / Tím (0,5)"),
              React.createElement('li', null, "Đoán số cụ thể (0-9)")
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "Bước 3: Nhập số tiền cược"),
            React.createElement('p', null,
              "Nhập số tiền bạn muốn đặt cược. Số tiền tối thiểu là 1,000 VND và tối đa là 10,000,000 VND cho mỗi lượt cược."
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "Bước 4: Xác nhận đặt cược"),
            React.createElement('p', null,
              "Kiểm tra lại thông tin cược của bạn và nhấn nút 'Đặt cược' để xác nhận. Sau khi xác nhận, bạn không thể hủy hoặc thay đổi cược."
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "Bước 5: Chờ kết quả"),
            React.createElement('p', null,
              "Mỗi phiên WinGo kéo dài 1 phút. Sau khi thời gian đặt cược kết thúc, kết quả sẽ được công bố. Nếu dự đoán đúng, tiền thưởng sẽ được cộng vào tài khoản của bạn ngay lập tức."
            )
          )
        ),

        // Tỷ lệ trả thưởng
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Tỷ lệ trả thưởng WinGo 92Lottery"),

        React.createElement('div', { className: "overflow-x-auto mb-8" },
          React.createElement('table', { className: "w-full border-collapse" },
            React.createElement('thead', null,
              React.createElement('tr', { className: "bg-gray-100" },
                React.createElement('th', { className: "border border-gray-300 p-2 text-left" }, "Kiểu cược"),
                React.createElement('th', { className: "border border-gray-300 p-2 text-center" }, "Tỷ lệ trả thưởng"),
                React.createElement('th', { className: "border border-gray-300 p-2 text-center" }, "Xác suất thắng")
              )
            ),
            React.createElement('tbody', null,
              React.createElement('tr', null,
                React.createElement('td', { className: "border border-gray-300 p-2" }, "Lớn/Nhỏ"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "1.96"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "50%")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border border-gray-300 p-2" }, "Chẵn/Lẻ"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "1.96"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "50%")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border border-gray-300 p-2" }, "Xanh/Đỏ"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "2.00"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "40%")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border border-gray-300 p-2" }, "Tím"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "4.50"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "20%")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border border-gray-300 p-2" }, "Đoán số (0-9)"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "9.80"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "10%")
              )
            )
          )
        ),

        // Chiến thuật chơi WinGo
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Chiến thuật chơi WinGo hiệu quả"),

        React.createElement('div', { className: "space-y-4 mb-8" },
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "1. Chiến thuật Martingale"),
            React.createElement('p', null,
              "Chiến thuật này yêu cầu bạn tăng gấp đôi tiền cược sau mỗi lần thua, và quay lại mức cược ban đầu sau khi thắng. Chiến thuật này hiệu quả với các cược có tỷ lệ thắng 50% như Lớn/Nhỏ, Chẵn/Lẻ."
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "2. Chiến thuật D'Alembert"),
            React.createElement('p', null,
              "Chiến thuật này ít rủi ro hơn Martingale. Bạn tăng tiền cược một đơn vị sau mỗi lần thua và giảm một đơn vị sau mỗi lần thắng. Chiến thuật này phù hợp cho người chơi muốn quản lý rủi ro tốt hơn."
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "3. Chiến thuật theo dõi xu hướng"),
            React.createElement('p', null,
              "Theo dõi kết quả gần đây và đặt cược theo xu hướng. Ví dụ, nếu có nhiều kết quả Lớn liên tiếp, bạn có thể đặt cược vào Lớn. Tuy nhiên, cần nhớ rằng mỗi kết quả đều độc lập và không bị ảnh hưởng bởi kết quả trước đó."
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "4. Chiến thuật quản lý vốn"),
            React.createElement('p', null,
              "Đây là chiến thuật quan trọng nhất. Chỉ cược 1-5% tổng vốn của bạn cho mỗi lượt cược. Đặt ra giới hạn thắng và thua, và tuân thủ nghiêm ngặt. Ví dụ, dừng chơi khi thắng 30% hoặc thua 20% tổng vốn ban đầu."
            )
          )
        ),

        // Lưu ý quan trọng
        React.createElement('div', { className: "bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-4 text-yellow-800" }, "Lưu ý quan trọng"),
          React.createElement('ul', { className: "list-disc pl-5 space-y-2 text-yellow-800" },
            React.createElement('li', null, "WinGo là trò chơi giải trí, hãy chơi có trách nhiệm và không xem đây là cách kiếm tiền."),
            React.createElement('li', null, "Không có chiến thuật nào đảm bảo 100% thắng lợi."),
            React.createElement('li', null, "Đặt ra giới hạn thời gian và tiền bạc trước khi chơi."),
            React.createElement('li', null, "Không cố gắng gỡ lại tiền đã thua bằng cách tăng mức cược quá cao."),
            React.createElement('li', null, "Nếu bạn cảm thấy không kiểm soát được việc chơi, hãy tìm kiếm sự hỗ trợ.")
          )
        ),

        // FAQ Section
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Câu hỏi thường gặp về WinGo 92Lottery"),

        React.createElement('div', { className: "space-y-6 mb-8" },
          faqItems.map((faq, index) =>
            React.createElement('div', { key: index, className: "border-b border-gray-200 pb-4" },
              React.createElement('h3', { className: "text-xl font-semibold mb-2" }, faq.question),
              React.createElement('p', null, faq.answer)
            )
          )
        ),

        // CTA
        React.createElement('div', { className: "bg-gray-100 p-6 rounded-lg mt-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-4" }, "Trải nghiệm WinGo 92Lottery ngay hôm nay"),
          React.createElement('p', { className: "mb-4" },
            "WinGo 92Lottery mang đến trải nghiệm xổ số trực tuyến hấp dẫn với tỷ lệ trả thưởng cao và công bằng. Đăng ký tài khoản 92Lottery ngay hôm nay để nhận thưởng chào mừng 100K và trải nghiệm WinGo cùng hàng ngàn người chơi khác."
          ),
          React.createElement('div', { className: "flex justify-center" },
            React.createElement(Link, {
              href: "/register",
              className: "bg-[#bc2022] text-white px-6 py-3 rounded-md hover:bg-[#a51b1b] transition-colors font-bold"
            }, "Đăng ký và chơi WinGo ngay")
          )
        )
      )
    )
  );
}
