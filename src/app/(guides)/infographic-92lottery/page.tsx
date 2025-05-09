import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Infographic 92Lottery - Thông tin trực quan về nhà cái | 92Lottery',
  description: 'Tổng hợp các infographic về 92Lottery: trò chơi, khuyến mãi, hướng dẫn đăng ký, nạp rút tiền. Tải và chia sẻ infographic chất lượng cao.',
  keywords: ['infographic 92lottery', 'hình ảnh 92lottery', 'thông tin trực quan 92lottery', 'biểu đồ 92lottery', 'chia sẻ 92lottery', 'tải infographic 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/infographic-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/infographic-92lottery',
      'x-default': 'https://92lottery.dev/infographic-92lottery'
    }
  },
};

export default function InfographicPage() {
  // Danh sách infographic
  const infographics = [
    {
      title: "Tổng quan về 92Lottery",
      description: "Infographic tổng quan về 92Lottery: lịch sử, trò chơi nổi bật, ưu điểm và con số ấn tượng.",
      image: "/anh/infographic/92lottery-overview.jpg",
      downloadLink: "/anh/infographic/92lottery-overview.jpg",
      shareLink: "https://92lottery.dev/infographic-92lottery"
    },
    {
      title: "Hướng dẫn đăng ký 92Lottery",
      description: "Các bước đăng ký tài khoản 92Lottery đơn giản và nhanh chóng, từ truy cập trang chủ đến xác minh tài khoản.",
      image: "/anh/infographic/92lottery-registration.jpg",
      downloadLink: "/anh/infographic/92lottery-registration.jpg",
      shareLink: "https://92lottery.dev/huong-dan-dang-ky"
    },
    {
      title: "Các trò chơi nổi bật tại 92Lottery",
      description: "Tổng hợp các trò chơi nổi bật tại 92Lottery: WinGo, K3 Lotre, 5D Lotre, TRX Win với tỷ lệ trả thưởng hấp dẫn.",
      image: "/anh/infographic/92lottery-games.jpg",
      downloadLink: "/anh/infographic/92lottery-games.jpg",
      shareLink: "https://92lottery.dev/92lottery-mini-game"
    },
    {
      title: "Khuyến mãi tại 92Lottery",
      description: "Tổng hợp các khuyến mãi hấp dẫn tại 92Lottery: thưởng chào mừng, khuyến mãi nạp tiền, hoàn trả, và các ưu đãi đặc biệt.",
      image: "/anh/infographic/92lottery-promotions.jpg",
      downloadLink: "/anh/infographic/92lottery-promotions.jpg",
      shareLink: "https://92lottery.dev/"
    },
    {
      title: "Hướng dẫn nạp và rút tiền 92Lottery",
      description: "Các phương thức nạp và rút tiền tại 92Lottery: ngân hàng, ví điện tử, thẻ cào, và tiền điện tử với thời gian xử lý nhanh chóng.",
      image: "/anh/infographic/92lottery-payment.jpg",
      downloadLink: "/anh/infographic/92lottery-payment.jpg",
      shareLink: "https://92lottery.dev/huong-dan-nap-tien"
    },
    {
      title: "Ứng dụng di động 92Lottery",
      description: "Tính năng nổi bật của ứng dụng di động 92Lottery: giao diện thân thiện, tốc độ nhanh, và các tính năng độc đáo.",
      image: "/anh/infographic/92lottery-app.jpg",
      downloadLink: "/anh/infographic/92lottery-app.jpg",
      shareLink: "https://92lottery.dev/app-92lottery"
    }
  ];

  // FAQ Schema
  const faqItems = [
    {
      question: "Tôi có thể sử dụng infographic 92Lottery vào mục đích gì?",
      answer: "Bạn có thể sử dụng infographic 92Lottery để chia sẻ trên mạng xã hội, blog cá nhân, diễn đàn, hoặc các nền tảng khác để giới thiệu về 92Lottery. Đây là cách hiệu quả để truyền tải thông tin về 92Lottery một cách trực quan và hấp dẫn, đồng thời tăng cường hiệu quả tiếp thị liên kết nếu bạn là đối tác của 92Lottery."
    },
    {
      question: "Làm thế nào để tải infographic 92Lottery?",
      answer: "Để tải infographic 92Lottery, bạn chỉ cần nhấp vào nút 'Tải xuống' bên dưới mỗi infographic. Các infographic được cung cấp ở định dạng JPG với độ phân giải cao, phù hợp để chia sẻ trên mọi nền tảng."
    },
    {
      question: "Tôi có thể chỉnh sửa infographic 92Lottery không?",
      answer: "Bạn có thể sử dụng infographic 92Lottery nguyên bản mà không cần chỉnh sửa. Tuy nhiên, nếu bạn là đối tác của 92Lottery và muốn thêm mã giới thiệu (ref) của mình, vui lòng liên hệ với đội ngũ hỗ trợ để được cung cấp phiên bản có thể chỉnh sửa."
    },
    {
      question: "Infographic 92Lottery được cập nhật thường xuyên không?",
      answer: "Có, 92Lottery thường xuyên cập nhật infographic với thông tin mới nhất về trò chơi, khuyến mãi, và các tính năng mới. Chúng tôi khuyến khích bạn truy cập trang này thường xuyên để có được phiên bản mới nhất của các infographic."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Infographic 92Lottery", url: "https://92lottery.dev/infographic-92lottery" }
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
          React.createElement('li', { className: "text-gray-700" }, "Infographic 92Lottery")
        )
      )
    ),
    
    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "Infographic 92Lottery - Thông tin trực quan về nhà cái"),
      
      React.createElement('div', { className: "prose max-w-none" },
        React.createElement('p', { className: "text-lg mb-6" }, 
          "Tổng hợp các infographic chất lượng cao về 92Lottery, giúp bạn dễ dàng nắm bắt thông tin về nhà cái một cách trực quan và hấp dẫn. Tải xuống và chia sẻ các infographic này để giới thiệu về 92Lottery trên mạng xã hội, blog cá nhân hoặc diễn đàn."
        ),
        
        // Lưu ý: Trong môi trường thực tế, các hình ảnh infographic sẽ được tạo và lưu trữ trong thư mục public/anh/infographic/
        // Hiện tại, chúng ta chỉ tạo trang để chuẩn bị cho việc thêm infographic sau này
        
        // Danh sách infographic
        React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-8" },
          infographics.map((infographic, index) => 
            React.createElement('div', { key: index, className: "bg-gray-50 p-5 rounded-lg border border-gray-200" },
              React.createElement('h2', { className: "text-xl font-semibold text-[#bc2022] mb-3" }, infographic.title),
              React.createElement('p', { className: "text-gray-700 mb-4" }, infographic.description),
              React.createElement('div', { className: "relative w-full h-64 mb-4 bg-gray-200 rounded-lg flex items-center justify-center" },
                React.createElement('div', { className: "text-center p-4" },
                  React.createElement('p', { className: "text-gray-500 mb-2" }, "Infographic sẽ được hiển thị tại đây"),
                  React.createElement('p', { className: "text-sm text-gray-400" }, "Hình ảnh đang được chuẩn bị")
                )
                // Trong môi trường thực tế, sẽ sử dụng component Image của Next.js:
                // React.createElement(Image, {
                //   src: infographic.image,
                //   alt: infographic.title,
                //   fill: true,
                //   style: { objectFit: 'contain' }
                // })
              ),
              React.createElement('div', { className: "flex flex-wrap gap-2" },
                React.createElement('a', { 
                  href: infographic.downloadLink,
                  className: "bg-[#bc2022] text-white px-4 py-2 rounded-md hover:bg-[#a51b1b] transition-colors text-sm flex items-center",
                  download: true
                }, 
                  React.createElement('span', { className: "mr-1" }, "↓"),
                  "Tải xuống"
                ),
                React.createElement('a', { 
                  href: infographic.shareLink,
                  className: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm flex items-center",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, 
                  React.createElement('span', { className: "mr-1" }, "↗"),
                  "Chia sẻ"
                )
              )
            )
          )
        ),
        
        // Hướng dẫn sử dụng infographic
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-10 mb-4" }, "Hướng dẫn sử dụng infographic 92Lottery"),
        
        React.createElement('div', { className: "bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8" },
          React.createElement('p', { className: "mb-4" }, 
            "Infographic 92Lottery là công cụ tuyệt vời để chia sẻ thông tin về nhà cái một cách trực quan và hấp dẫn. Dưới đây là một số cách bạn có thể sử dụng infographic:"
          ),
          React.createElement('ul', { className: "list-disc pl-5 space-y-2" },
            React.createElement('li', null, 
              React.createElement('span', { className: "font-semibold" }, "Chia sẻ trên mạng xã hội: "),
              "Đăng infographic lên Facebook, Twitter, Instagram, Pinterest để giới thiệu về 92Lottery với bạn bè và người theo dõi."
            ),
            React.createElement('li', null, 
              React.createElement('span', { className: "font-semibold" }, "Sử dụng trong bài viết: "),
              "Thêm infographic vào bài viết trên blog cá nhân hoặc diễn đàn để minh họa thông tin về 92Lottery."
            ),
            React.createElement('li', null, 
              React.createElement('span', { className: "font-semibold" }, "Tiếp thị liên kết: "),
              "Nếu bạn là đối tác của 92Lottery, sử dụng infographic kèm theo liên kết giới thiệu của bạn để tăng hiệu quả tiếp thị."
            ),
            React.createElement('li', null, 
              React.createElement('span', { className: "font-semibold" }, "Tạo nội dung video: "),
              "Sử dụng infographic làm tài liệu tham khảo khi tạo video giới thiệu về 92Lottery trên YouTube hoặc TikTok."
            )
          )
        ),
        
        // FAQ Section
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Câu hỏi thường gặp về infographic 92Lottery"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          faqItems.map((faq, index) => 
            React.createElement('div', { key: index, className: "border-b border-gray-200 pb-4" },
              React.createElement('h3', { className: "text-xl font-semibold mb-2" }, faq.question),
              React.createElement('p', null, faq.answer)
            )
          )
        ),
        
        // Yêu cầu infographic tùy chỉnh
        React.createElement('div', { className: "bg-gray-100 p-6 rounded-lg mt-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-4" }, "Yêu cầu infographic tùy chỉnh"),
          React.createElement('p', { className: "mb-4" }, 
            "Nếu bạn là đối tác của 92Lottery và muốn có infographic tùy chỉnh với mã giới thiệu của riêng bạn, vui lòng liên hệ với đội ngũ hỗ trợ của chúng tôi. Chúng tôi sẽ cung cấp cho bạn phiên bản infographic có thể chỉnh sửa hoặc tạo infographic mới theo yêu cầu của bạn."
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
