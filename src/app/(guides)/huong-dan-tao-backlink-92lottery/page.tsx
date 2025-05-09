import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Hướng dẫn tạo backlink 92Lottery - Tối ưu SEO cho đối tác | 92Lottery',
  description: 'Hướng dẫn chi tiết cách tạo backlink chất lượng cao cho 92Lottery. Tối ưu SEO và tăng hiệu quả tiếp thị liên kết cho đối tác và cộng tác viên.',
  keywords: ['backlink 92lottery', 'tạo backlink 92lottery', 'seo 92lottery', 'tiếp thị liên kết 92lottery', 'đối tác 92lottery', 'cộng tác viên 92lottery', 'liên kết 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/huong-dan-tao-backlink-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/huong-dan-tao-backlink-92lottery',
      'x-default': 'https://92lottery.dev/huong-dan-tao-backlink-92lottery'
    }
  },
};

export default function BacklinkGuidePage() {
  // Mẫu backlink HTML
  const htmlBacklinkTemplate = `<a href="https://92lottery.dev/?ref=your_id" title="92Lottery - Nhà cái xổ số trực tuyến uy tín">92Lottery</a>`;
  
  // Mẫu backlink Markdown
  const markdownBacklinkTemplate = `[92Lottery - Nhà cái xổ số trực tuyến uy tín](https://92lottery.dev/?ref=your_id)`;
  
  // Mẫu backlink BBCode
  const bbcodeBacklinkTemplate = `[url=https://92lottery.dev/?ref=your_id]92Lottery - Nhà cái xổ số trực tuyến uy tín[/url]`;
  
  // Mẫu backlink Text
  const textBacklinkTemplate = `92Lottery - Nhà cái xổ số trực tuyến uy tín: https://92lottery.dev/?ref=your_id`;
  
  // Mẫu mô tả ngắn
  const shortDescriptionTemplate = `92Lottery là trang xổ số độc quyền nổi bật như WinGo, K3 Lotre, 5D Lotre, TRX Win trực tuyến đa dạng và uy tín, nhiều sảnh game bài, bắn cá, nổ hũ và casino trực tuyến.`;
  
  // Mẫu mô tả dài
  const longDescriptionTemplate = `92Lottery là trang xổ số độc quyền nổi bật như WinGo, K3 Lotre, 5D Lotre, TRX Win trực tuyến đa dạng và uy tín, nhiều sảnh game bài, bắn cá, nổ hũ và casino trực tuyến. Giao diện độc quyền cho Mobile và các hệ điều hành máy tính với tốc độ load tải cực nhanh không có độ trễ. Những khuyến mãi độc quyền chỉ 92Lottery đem lại cho tân thủ tốt nhất.`;
  
  // Mẫu thông tin liên hệ
  const contactInfoTemplate = `Thông tin liên hệ:

Thương hiệu: 92Lottery
Website: https://92lottery.dev/
Email: support@92lottery.dev
Số điện thoại: 0988 587 888
Địa chỉ: 228 Trần Duy Hưng, Hà Nội, Việt Nam
Zipcode: 100000

Hashtag:
#92lottery #trangchu92lottery #dangky92lottery #dangnhap92lottery #92lotterykhuyenmai`;

  // FAQ Schema
  const faqItems = [
    {
      question: "Làm thế nào để tạo backlink chất lượng cao cho 92Lottery?",
      answer: "Để tạo backlink chất lượng cao cho 92Lottery, bạn nên: 1) Sử dụng các trang web có DA/PA cao và liên quan đến lĩnh vực cá cược, 2) Đặt backlink trong nội dung tự nhiên, không spam, 3) Sử dụng anchor text đa dạng, 4) Thêm mã ref của bạn vào URL để theo dõi hiệu quả, 5) Kết hợp với nội dung chất lượng cao về 92Lottery."
    },
    {
      question: "Tôi nên đặt backlink 92Lottery ở đâu để hiệu quả nhất?",
      answer: "Những nơi hiệu quả nhất để đặt backlink 92Lottery bao gồm: diễn đàn về cá cược và xổ số, blog cá nhân về tài chính và giải trí, nền tảng chia sẻ video (YouTube, TikTok), mạng xã hội (Facebook, Twitter, Instagram), trang đánh giá nhà cái, và các nền tảng hỏi đáp như Quora, Reddit."
    },
    {
      question: "Làm thế nào để tối ưu hóa anchor text cho backlink 92Lottery?",
      answer: "Để tối ưu hóa anchor text, bạn nên sử dụng đa dạng các loại: 1) Anchor text chính xác (92Lottery), 2) Anchor text có thương hiệu (Nhà cái 92Lottery), 3) Anchor text ngữ cảnh (Đăng ký 92Lottery nhận 100K), 4) Anchor text LSI (xổ số trực tuyến uy tín), 5) Anchor text URL (92lottery.dev). Tránh sử dụng quá nhiều anchor text giống nhau để tránh bị Google phạt."
    },
    {
      question: "Tôi có thể kiếm tiền từ việc tạo backlink cho 92Lottery không?",
      answer: "Có, bạn có thể kiếm tiền thông qua chương trình tiếp thị liên kết (Affiliate) của 92Lottery. Khi tạo backlink, hãy thêm mã giới thiệu (ref) của bạn vào URL. Mỗi khi có người dùng đăng ký và nạp tiền thông qua liên kết của bạn, bạn sẽ nhận được hoa hồng. Tỷ lệ hoa hồng của 92Lottery lên đến 40% doanh thu và được trả hàng tuần."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Hướng dẫn tạo backlink 92Lottery", url: "https://92lottery.dev/huong-dan-tao-backlink-92lottery" }
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
          React.createElement('li', { className: "text-gray-700" }, "Hướng dẫn tạo backlink 92Lottery")
        )
      )
    ),
    
    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "Hướng dẫn tạo backlink 92Lottery - Tối ưu SEO cho đối tác"),
      
      React.createElement('div', { className: "prose max-w-none" },
        React.createElement('p', { className: "text-lg mb-6" }, 
          "Hướng dẫn chi tiết cách tạo backlink chất lượng cao cho 92Lottery, giúp tối ưu SEO và tăng hiệu quả tiếp thị liên kết cho đối tác và cộng tác viên. Bài viết này cung cấp các mẫu backlink, chiến lược tối ưu và các nền tảng hiệu quả để đặt backlink."
        ),
        
        // Mẫu backlink
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Mẫu backlink 92Lottery"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          React.createElement('div', { className: "bg-gray-50 p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "Mẫu HTML"),
            React.createElement('div', { className: "bg-gray-100 p-3 rounded-md font-mono text-sm overflow-x-auto" }, htmlBacklinkTemplate),
            React.createElement('p', { className: "mt-2 text-sm text-gray-600" }, "Sử dụng cho website, blog và các nền tảng hỗ trợ HTML.")
          ),
          React.createElement('div', { className: "bg-gray-50 p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "Mẫu Markdown"),
            React.createElement('div', { className: "bg-gray-100 p-3 rounded-md font-mono text-sm overflow-x-auto" }, markdownBacklinkTemplate),
            React.createElement('p', { className: "mt-2 text-sm text-gray-600" }, "Sử dụng cho GitHub, Reddit, và các nền tảng hỗ trợ Markdown.")
          ),
          React.createElement('div', { className: "bg-gray-50 p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "Mẫu BBCode"),
            React.createElement('div', { className: "bg-gray-100 p-3 rounded-md font-mono text-sm overflow-x-auto" }, bbcodeBacklinkTemplate),
            React.createElement('p', { className: "mt-2 text-sm text-gray-600" }, "Sử dụng cho diễn đàn và các nền tảng hỗ trợ BBCode.")
          ),
          React.createElement('div', { className: "bg-gray-50 p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "Mẫu Text"),
            React.createElement('div', { className: "bg-gray-100 p-3 rounded-md font-mono text-sm overflow-x-auto" }, textBacklinkTemplate),
            React.createElement('p', { className: "mt-2 text-sm text-gray-600" }, "Sử dụng cho email, tin nhắn và các nền tảng không hỗ trợ định dạng.")
          )
        ),
        
        // Mẫu mô tả
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Mẫu mô tả 92Lottery"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          React.createElement('div', { className: "bg-gray-50 p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "Mô tả ngắn"),
            React.createElement('div', { className: "bg-gray-100 p-3 rounded-md text-sm overflow-x-auto" }, shortDescriptionTemplate),
            React.createElement('p', { className: "mt-2 text-sm text-gray-600" }, "Sử dụng cho tiêu đề, meta description, và mô tả ngắn gọn.")
          ),
          React.createElement('div', { className: "bg-gray-50 p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "Mô tả dài"),
            React.createElement('div', { className: "bg-gray-100 p-3 rounded-md text-sm overflow-x-auto" }, longDescriptionTemplate),
            React.createElement('p', { className: "mt-2 text-sm text-gray-600" }, "Sử dụng cho nội dung bài viết, đánh giá, và mô tả chi tiết.")
          ),
          React.createElement('div', { className: "bg-gray-50 p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "Thông tin liên hệ"),
            React.createElement('div', { className: "bg-gray-100 p-3 rounded-md text-sm overflow-x-auto whitespace-pre-line" }, contactInfoTemplate),
            React.createElement('p', { className: "mt-2 text-sm text-gray-600" }, "Sử dụng cho phần thông tin liên hệ và chân trang.")
          )
        ),
        
        // Chiến lược tối ưu backlink
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Chiến lược tối ưu backlink 92Lottery"),
        
        React.createElement('div', { className: "space-y-4 mb-8" },
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "1. Đa dạng hóa anchor text"),
            React.createElement('p', null, 
              "Sử dụng nhiều loại anchor text khác nhau để tránh bị Google phạt. Ví dụ: '92Lottery', 'nhà cái 92Lottery', 'đăng ký 92Lottery', 'xổ số trực tuyến uy tín', 'WinGo 92Lottery', v.v."
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "2. Chọn nền tảng chất lượng cao"),
            React.createElement('p', null, 
              "Đặt backlink trên các trang web có DA/PA cao và liên quan đến lĩnh vực cá cược, tài chính, giải trí. Tránh các trang web spam hoặc có nội dung kém chất lượng."
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "3. Tạo nội dung giá trị"),
            React.createElement('p', null, 
              "Đặt backlink trong nội dung có giá trị, cung cấp thông tin hữu ích cho người đọc. Tránh spam backlink hoặc đặt backlink không liên quan đến nội dung."
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "4. Sử dụng mã ref"),
            React.createElement('p', null, 
              "Thêm mã ref của bạn vào URL để theo dõi hiệu quả và nhận hoa hồng từ chương trình tiếp thị liên kết của 92Lottery. Ví dụ: https://92lottery.dev/?ref=your_id"
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "5. Xây dựng backlink tự nhiên"),
            React.createElement('p', null, 
              "Xây dựng backlink một cách tự nhiên và từ từ. Tránh tạo quá nhiều backlink trong thời gian ngắn, điều này có thể bị Google coi là spam."
            )
          )
        ),
        
        // Nền tảng đặt backlink
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Nền tảng hiệu quả để đặt backlink 92Lottery"),
        
        React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" },
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2 text-[#bc2022]" }, "Diễn đàn"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-1" },
              React.createElement('li', null, "Voz.vn"),
              React.createElement('li', null, "Tinhte.vn"),
              React.createElement('li', null, "Webtretho.com"),
              React.createElement('li', null, "Diễn đàn cá cược"),
              React.createElement('li', null, "Diễn đàn tài chính")
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2 text-[#bc2022]" }, "Mạng xã hội"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-1" },
              React.createElement('li', null, "Facebook"),
              React.createElement('li', null, "Twitter/X"),
              React.createElement('li', null, "Instagram"),
              React.createElement('li', null, "LinkedIn"),
              React.createElement('li', null, "Pinterest")
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2 text-[#bc2022]" }, "Nền tảng video"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-1" },
              React.createElement('li', null, "YouTube"),
              React.createElement('li', null, "TikTok"),
              React.createElement('li', null, "Facebook Watch"),
              React.createElement('li', null, "Instagram Reels"),
              React.createElement('li', null, "Twitch")
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2 text-[#bc2022]" }, "Nền tảng hỏi đáp"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-1" },
              React.createElement('li', null, "Quora"),
              React.createElement('li', null, "Reddit"),
              React.createElement('li', null, "Yahoo Answers"),
              React.createElement('li', null, "Các trang hỏi đáp Việt Nam"),
              React.createElement('li', null, "Các nhóm Facebook")
            )
          )
        ),
        
        // FAQ Section
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Câu hỏi thường gặp về tạo backlink 92Lottery"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          faqItems.map((faq, index) => 
            React.createElement('div', { key: index, className: "border-b border-gray-200 pb-4" },
              React.createElement('h3', { className: "text-xl font-semibold mb-2" }, faq.question),
              React.createElement('p', null, faq.answer)
            )
          )
        ),
        
        // Chương trình tiếp thị liên kết
        React.createElement('div', { className: "bg-gray-100 p-6 rounded-lg mt-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-4" }, "Tham gia chương trình tiếp thị liên kết 92Lottery"),
          React.createElement('p', { className: "mb-4" }, 
            "Tạo backlink không chỉ giúp tối ưu SEO mà còn là cách kiếm tiền hiệu quả thông qua chương trình tiếp thị liên kết của 92Lottery. Với tỷ lệ hoa hồng lên đến 40% doanh thu, bạn có thể kiếm được thu nhập đáng kể từ việc giới thiệu người chơi mới."
          ),
          React.createElement('div', { className: "mt-4 flex justify-center" },
            React.createElement(Link, { 
              href: "/register", 
              className: "bg-[#bc2022] text-white px-6 py-3 rounded-md hover:bg-[#a51b1b] transition-colors font-bold"
            }, "Đăng ký làm đối tác 92Lottery")
          )
        )
      )
    )
  );
}
