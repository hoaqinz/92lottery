import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '92Lottery Việt Nam - Nhà cái xổ số trực tuyến hàng đầu dành cho người Việt | 92Lottery',
  description: '92Lottery Việt Nam - Nhà cái xổ số trực tuyến uy tín hàng đầu với giao diện tiếng Việt, hỗ trợ 24/7 bằng tiếng Việt và phương thức thanh toán địa phương.',
  keywords: ['92lottery việt nam', '92lottery tiếng việt', 'nhà cái việt nam', 'xổ số việt nam', 'cá cược việt nam', '92lottery vn', 'nhà cái uy tín việt nam', 'cá cược trực tuyến việt nam'],
  alternates: {
    canonical: 'https://92lottery.dev/92lottery-viet-nam',
    languages: {
      'vi': 'https://92lottery.dev/92lottery-viet-nam',
      'x-default': 'https://92lottery.dev/92lottery-viet-nam'
    }
  },
};

export default function Lottery92VietnamPage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "92Lottery có phải là nhà cái hợp pháp tại Việt Nam không?",
      answer: "92Lottery hoạt động dưới giấy phép cá cược trực tuyến quốc tế và tuân thủ các quy định pháp lý nghiêm ngặt. Tại Việt Nam, 92Lottery cung cấp dịch vụ với đầy đủ tiếng Việt, hỗ trợ khách hàng 24/7 bằng tiếng Việt và các phương thức thanh toán phổ biến tại Việt Nam."
    },
    {
      question: "92Lottery có những phương thức thanh toán nào cho người chơi Việt Nam?",
      answer: "92Lottery hỗ trợ đầy đủ các phương thức thanh toán phổ biến tại Việt Nam, bao gồm: chuyển khoản ngân hàng nội địa (Vietcombank, Techcombank, BIDV, Agribank, VPBank...), ví điện tử (MoMo, ZaloPay, VNPay), thẻ cào điện thoại, và tiền điện tử (USDT, BTC)."
    },
    {
      question: "Người chơi Việt Nam có được hỗ trợ bằng tiếng Việt không?",
      answer: "Có, 92Lottery cung cấp hỗ trợ khách hàng 24/7 hoàn toàn bằng tiếng Việt qua nhiều kênh như live chat, email, điện thoại và Telegram. Đội ngũ hỗ trợ viên người Việt Nam sẽ giải đáp mọi thắc mắc và hỗ trợ bạn trong quá trình chơi."
    },
    {
      question: "92Lottery có khuyến mãi đặc biệt nào dành riêng cho người chơi Việt Nam không?",
      answer: "Có, 92Lottery có nhiều khuyến mãi đặc biệt dành riêng cho người chơi Việt Nam, bao gồm: thưởng chào mừng 100K cho tân thủ, khuyến mãi nạp tiền lần đầu 100%, hoàn trả không giới hạn, và các sự kiện đặc biệt trong các dịp lễ tết Việt Nam như Tết Nguyên Đán, Quốc Khánh 2/9, v.v."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "92Lottery Việt Nam", url: "https://92lottery.dev/92lottery-viet-nam" }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const breadcrumbSchemaString = JSON.stringify(breadcrumbSchema);

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "92Lottery Việt Nam",
    "image": "https://92lottery.dev/anh/favicon.png",
    "url": "https://92lottery.dev",
    "telephone": "+84988587888",
    "email": "support@92lottery.dev",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "228 Trần Duy Hưng",
      "addressLocality": "Hà Nội",
      "addressRegion": "Hà Nội",
      "postalCode": "100000",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.0065,
      "longitude": 105.8306
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/92lottery",
      "https://twitter.com/92lottery",
      "https://t.me/92lottery_official"
    ],
    "priceRange": "$$"
  };
  const localBusinessSchemaString = JSON.stringify(localBusinessSchema);

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
      key: 'local-business-schema',
      type: 'application/ld+json',
      dangerouslySetInnerHTML: { __html: localBusinessSchemaString }
    }),
    
    // Breadcrumb
    React.createElement('div', { className: "bg-gray-100 py-2 px-4" },
      React.createElement('nav', { className: "text-sm" },
        React.createElement('ol', { className: "list-none p-0 inline-flex" },
          React.createElement('li', { className: "flex items-center" },
            React.createElement(Link, { href: "/", className: "text-blue-600 hover:text-blue-800" }, "Trang chủ"),
            React.createElement('span', { className: "mx-2" }, "/")
          ),
          React.createElement('li', { className: "text-gray-700" }, "92Lottery Việt Nam")
        )
      )
    ),
    
    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "92Lottery Việt Nam - Nhà cái xổ số trực tuyến hàng đầu dành cho người Việt"),
      
      React.createElement('div', { className: "prose max-w-none" },
        React.createElement('p', { className: "text-lg mb-6" }, 
          "92Lottery Việt Nam tự hào là nhà cái xổ số trực tuyến hàng đầu dành riêng cho người chơi Việt Nam. Với giao diện tiếng Việt thân thiện, đội ngũ hỗ trợ người Việt 24/7, và các phương thức thanh toán địa phương, 92Lottery mang đến trải nghiệm cá cược tuyệt vời nhất cho người Việt."
        ),
        
        // Giới thiệu về 92Lottery Việt Nam
        React.createElement('div', { className: "bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8" },
          React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mb-4" }, "92Lottery tại Việt Nam"),
          React.createElement('p', { className: "mb-4" }, 
            "92Lottery đã có mặt tại Việt Nam từ năm 2020 và nhanh chóng trở thành lựa chọn hàng đầu của người chơi Việt nhờ vào sự uy tín, minh bạch và dịch vụ chất lượng cao. Chúng tôi hiểu rõ thị trường Việt Nam và liên tục cải tiến để đáp ứng nhu cầu của người chơi Việt."
          ),
          React.createElement('p', { className: "mb-4" }, 
            "Với hàng triệu người chơi Việt Nam, 92Lottery cam kết mang đến môi trường cá cược an toàn, công bằng và thú vị. Chúng tôi tuân thủ nghiêm ngặt các quy định về cá cược có trách nhiệm và bảo vệ người chơi."
          ),
          React.createElement('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6" },
            React.createElement('div', { className: "bg-white p-4 rounded-lg text-center" },
              React.createElement('div', { className: "text-[#bc2022] font-bold text-3xl mb-1" }, "2020"),
              React.createElement('div', { className: "text-sm" }, "Có mặt tại Việt Nam")
            ),
            React.createElement('div', { className: "bg-white p-4 rounded-lg text-center" },
              React.createElement('div', { className: "text-[#bc2022] font-bold text-3xl mb-1" }, "1M+"),
              React.createElement('div', { className: "text-sm" }, "Người chơi Việt Nam")
            ),
            React.createElement('div', { className: "bg-white p-4 rounded-lg text-center" },
              React.createElement('div', { className: "text-[#bc2022] font-bold text-3xl mb-1" }, "24/7"),
              React.createElement('div', { className: "text-sm" }, "Hỗ trợ tiếng Việt")
            ),
            React.createElement('div', { className: "bg-white p-4 rounded-lg text-center" },
              React.createElement('div', { className: "text-[#bc2022] font-bold text-3xl mb-1" }, "10+"),
              React.createElement('div', { className: "text-sm" }, "Phương thức thanh toán")
            )
          )
        ),
        
        // Dịch vụ dành cho người Việt
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Dịch vụ đặc biệt dành cho người Việt"),
        
        React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" },
          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3 text-[#bc2022]" }, "Giao diện tiếng Việt"),
            React.createElement('p', null, 
              "92Lottery cung cấp giao diện hoàn toàn bằng tiếng Việt, giúp người chơi Việt Nam dễ dàng sử dụng và tham gia các trò chơi. Mọi hướng dẫn, quy tắc và thông tin đều được hiển thị bằng tiếng Việt rõ ràng, dễ hiểu."
            )
          ),
          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3 text-[#bc2022]" }, "Hỗ trợ khách hàng tiếng Việt 24/7"),
            React.createElement('p', null, 
              "Đội ngũ hỗ trợ viên người Việt Nam sẵn sàng phục vụ bạn 24/7 qua nhiều kênh như live chat, email, điện thoại và Telegram. Bạn sẽ luôn nhận được sự hỗ trợ nhanh chóng và hiệu quả bằng tiếng Việt."
            )
          ),
          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3 text-[#bc2022]" }, "Phương thức thanh toán địa phương"),
            React.createElement('p', null, 
              "92Lottery hỗ trợ đầy đủ các phương thức thanh toán phổ biến tại Việt Nam, bao gồm: chuyển khoản ngân hàng nội địa (Vietcombank, Techcombank, BIDV, Agribank, VPBank...), ví điện tử (MoMo, ZaloPay, VNPay), thẻ cào điện thoại, và tiền điện tử."
            )
          ),
          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3 text-[#bc2022]" }, "Khuyến mãi đặc biệt cho người Việt"),
            React.createElement('p', null, 
              "92Lottery cung cấp nhiều khuyến mãi đặc biệt dành riêng cho người chơi Việt Nam, bao gồm: thưởng chào mừng 100K cho tân thủ, khuyến mãi nạp tiền lần đầu 100%, hoàn trả không giới hạn, và các sự kiện đặc biệt trong các dịp lễ tết Việt Nam."
            )
          )
        ),
        
        // Trò chơi phổ biến tại Việt Nam
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Trò chơi phổ biến tại Việt Nam"),
        
        React.createElement('div', { className: "bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8" },
          React.createElement('p', { className: "mb-4" }, 
            "92Lottery cung cấp nhiều trò chơi phổ biến và được yêu thích tại Việt Nam. Dưới đây là những trò chơi được người Việt chơi nhiều nhất:"
          ),
          React.createElement('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6" },
            React.createElement('div', { className: "bg-white p-4 rounded-lg text-center" },
              React.createElement('div', { className: "font-bold text-lg mb-2 text-[#bc2022]" }, "WinGo"),
              React.createElement('div', { className: "text-sm" }, "Xổ số 1 phút")
            ),
            React.createElement('div', { className: "bg-white p-4 rounded-lg text-center" },
              React.createElement('div', { className: "font-bold text-lg mb-2 text-[#bc2022]" }, "K3 Lotre"),
              React.createElement('div', { className: "text-sm" }, "Xổ số 3 phút")
            ),
            React.createElement('div', { className: "bg-white p-4 rounded-lg text-center" },
              React.createElement('div', { className: "font-bold text-lg mb-2 text-[#bc2022]" }, "5D Lotre"),
              React.createElement('div', { className: "text-sm" }, "Xổ số 5 phút")
            ),
            React.createElement('div', { className: "bg-white p-4 rounded-lg text-center" },
              React.createElement('div', { className: "font-bold text-lg mb-2 text-[#bc2022]" }, "TRX Win"),
              React.createElement('div', { className: "text-sm" }, "Xổ số blockchain")
            )
          ),
          React.createElement('p', { className: "mt-4" }, 
            "Ngoài ra, 92Lottery còn cung cấp nhiều trò chơi khác như: game bài đổi thưởng, bắn cá, nổ hũ, và casino trực tuyến với dealer người Việt."
          )
        ),
        
        // FAQ Section
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Câu hỏi thường gặp về 92Lottery Việt Nam"),
        
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
          React.createElement('h3', { className: "text-xl font-semibold mb-4" }, "Liên hệ 92Lottery Việt Nam"),
          React.createElement('ul', { className: "space-y-2" },
            React.createElement('li', null, "Thương hiệu: 92Lottery Việt Nam"),
            React.createElement('li', null, "Website: ", 
              React.createElement(Link, { href: "/", className: "text-blue-600 hover:text-blue-800" }, "https://92lottery.dev")
            ),
            React.createElement('li', null, "Email: support@92lottery.dev"),
            React.createElement('li', null, "Số điện thoại: 0988 587 888"),
            React.createElement('li', null, "Địa chỉ: 228 Trần Duy Hưng, Hà Nội, Việt Nam"),
            React.createElement('li', null, "Zipcode: 100000"),
            React.createElement('li', null, "Giờ làm việc: 24/7")
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
