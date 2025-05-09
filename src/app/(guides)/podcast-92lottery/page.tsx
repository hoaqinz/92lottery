import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Podcast 92Lottery - Thông tin và chiến thuật qua âm thanh | 92Lottery',
  description: 'Tổng hợp các tập podcast 92Lottery: phân tích thị trường, chiến thuật chơi, chia sẻ kinh nghiệm từ chuyên gia và người chơi thành công.',
  keywords: ['podcast 92lottery', 'âm thanh 92lottery', 'radio 92lottery', 'chiến thuật 92lottery', 'phân tích 92lottery', 'kinh nghiệm 92lottery', 'chuyên gia 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/podcast-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/podcast-92lottery',
      'x-default': 'https://92lottery.dev/podcast-92lottery'
    }
  },
};

export default function PodcastPage() {
  // Danh sách podcast
  const podcasts = [
    {
      title: "Giới thiệu về 92Lottery và các trò chơi nổi bật",
      description: "Tập podcast đầu tiên giới thiệu về 92Lottery, lịch sử phát triển và các trò chơi nổi bật như WinGo, K3 Lotre, 5D Lotre và TRX Win.",
      audioUrl: "/audio/podcast/gioi-thieu-92lottery.mp3",
      duration: "25:18",
      date: "15/01/2025",
      host: "Nguyễn Văn Minh",
      guests: ["Trần Thị Hương"],
      episode: 1,
      season: 1
    },
    {
      title: "Chiến thuật chơi WinGo hiệu quả",
      description: "Phân tích chi tiết và chia sẻ các chiến thuật chơi WinGo hiệu quả từ chuyên gia và người chơi thành công.",
      audioUrl: "/audio/podcast/chien-thuat-wingo.mp3",
      duration: "32:45",
      date: "22/01/2025",
      host: "Nguyễn Văn Minh",
      guests: ["Lê Quang Đạt", "Nguyễn Thành Công"],
      episode: 2,
      season: 1
    },
    {
      title: "Chiến thuật chơi K3 Lotre hiệu quả",
      description: "Phân tích chi tiết và chia sẻ các chiến thuật chơi K3 Lotre hiệu quả từ chuyên gia và người chơi thành công.",
      audioUrl: "/audio/podcast/chien-thuat-k3.mp3",
      duration: "28:36",
      date: "29/01/2025",
      host: "Nguyễn Văn Minh",
      guests: ["Lê Quang Đạt", "Trần Văn Hùng"],
      episode: 3,
      season: 1
    },
    {
      title: "Chiến thuật chơi 5D Lotre hiệu quả",
      description: "Phân tích chi tiết và chia sẻ các chiến thuật chơi 5D Lotre hiệu quả từ chuyên gia và người chơi thành công.",
      audioUrl: "/audio/podcast/chien-thuat-5d.mp3",
      duration: "30:12",
      date: "05/02/2025",
      host: "Nguyễn Văn Minh",
      guests: ["Lê Quang Đạt", "Phạm Thị Lan"],
      episode: 4,
      season: 1
    },
    {
      title: "Chiến thuật chơi TRX Win hiệu quả",
      description: "Phân tích chi tiết và chia sẻ các chiến thuật chơi TRX Win hiệu quả từ chuyên gia và người chơi thành công.",
      audioUrl: "/audio/podcast/chien-thuat-trx.mp3",
      duration: "27:54",
      date: "12/02/2025",
      host: "Nguyễn Văn Minh",
      guests: ["Lê Quang Đạt", "Ngô Văn Dũng"],
      episode: 5,
      season: 1
    },
    {
      title: "Quản lý vốn hiệu quả khi chơi xổ số trực tuyến",
      description: "Chia sẻ các nguyên tắc và phương pháp quản lý vốn hiệu quả khi chơi xổ số trực tuyến tại 92Lottery.",
      audioUrl: "/audio/podcast/quan-ly-von.mp3",
      duration: "35:27",
      date: "19/02/2025",
      host: "Nguyễn Văn Minh",
      guests: ["Ngô Thị Mai Anh", "Trần Văn Tú"],
      episode: 6,
      season: 1
    },
    {
      title: "Tâm lý học trong cá cược trực tuyến",
      description: "Phân tích các yếu tố tâm lý ảnh hưởng đến quyết định cá cược và cách kiểm soát cảm xúc khi chơi tại 92Lottery.",
      audioUrl: "/audio/podcast/tam-ly-ca-cuoc.mp3",
      duration: "40:15",
      date: "26/02/2025",
      host: "Nguyễn Văn Minh",
      guests: ["TS. Lê Minh Tâm", "Phạm Thanh Tùng"],
      episode: 7,
      season: 1
    },
    {
      title: "Phỏng vấn người chơi thành công tại 92Lottery",
      description: "Phỏng vấn các người chơi thành công tại 92Lottery, chia sẻ kinh nghiệm, chiến thuật và bí quyết thành công.",
      audioUrl: "/audio/podcast/phong-van-nguoi-choi.mp3",
      duration: "45:32",
      date: "05/03/2025",
      host: "Nguyễn Văn Minh",
      guests: ["Nguyễn Thành Công", "Trần Thị Hoa", "Lê Văn Đức"],
      episode: 8,
      season: 1
    },
    {
      title: "Xu hướng thị trường xổ số trực tuyến 2025",
      description: "Phân tích xu hướng thị trường xổ số trực tuyến năm 2025, các công nghệ mới và dự đoán sự phát triển trong tương lai.",
      audioUrl: "/audio/podcast/xu-huong-thi-truong.mp3",
      duration: "38:49",
      date: "12/03/2025",
      host: "Nguyễn Văn Minh",
      guests: ["Trần Thị Hương", "Ngô Thị Mai Anh"],
      episode: 9,
      season: 1
    },
    {
      title: "Cá cược có trách nhiệm tại 92Lottery",
      description: "Thảo luận về tầm quan trọng của cá cược có trách nhiệm và các công cụ, chính sách của 92Lottery để hỗ trợ người chơi.",
      audioUrl: "/audio/podcast/ca-cuoc-co-trach-nhiem.mp3",
      duration: "33:21",
      date: "19/03/2025",
      host: "Nguyễn Văn Minh",
      guests: ["Phạm Thanh Tùng", "TS. Lê Minh Tâm"],
      episode: 10,
      season: 1
    }
  ];

  // FAQ Schema
  const faqItems = [
    {
      question: "Làm thế nào để nghe podcast 92Lottery?",
      answer: "Bạn có thể nghe podcast 92Lottery trên trang web chính thức của 92Lottery hoặc các nền tảng podcast phổ biến như Spotify, Apple Podcasts, Google Podcasts, và SoundCloud. Chỉ cần tìm kiếm '92Lottery Podcast' trên các nền tảng này và đăng ký để nhận thông báo khi có tập mới."
    },
    {
      question: "Podcast 92Lottery có nội dung gì?",
      answer: "Podcast 92Lottery cung cấp nhiều nội dung hữu ích như: giới thiệu về 92Lottery và các trò chơi, chiến thuật chơi hiệu quả cho từng trò chơi (WinGo, K3 Lotre, 5D Lotre, TRX Win), phương pháp quản lý vốn, phân tích tâm lý cá cược, phỏng vấn người chơi thành công, xu hướng thị trường, và cá cược có trách nhiệm."
    },
    {
      question: "Ai là người dẫn chương trình podcast 92Lottery?",
      answer: "Podcast 92Lottery được dẫn dắt bởi ông Nguyễn Văn Minh - CEO của 92Lottery, cùng với sự tham gia của các chuyên gia trong ngành như Trần Thị Hương (CTO), Lê Quang Đạt (CPO), Ngô Thị Mai Anh (CFO), Phạm Thanh Tùng (Giám đốc Dịch vụ Khách hàng) và nhiều khách mời là người chơi thành công và chuyên gia tâm lý."
    },
    {
      question: "Podcast 92Lottery có thường xuyên ra tập mới không?",
      answer: "Podcast 92Lottery phát hành tập mới hàng tuần, thường vào thứ Tư. Mỗi mùa podcast có 10 tập, và hiện tại đã có Mùa 1 hoàn chỉnh. Bạn có thể đăng ký kênh podcast để nhận thông báo khi có tập mới và không bỏ lỡ bất kỳ nội dung hữu ích nào."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Podcast 92Lottery", url: "https://92lottery.dev/podcast-92lottery" }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const breadcrumbSchemaString = JSON.stringify(breadcrumbSchema);

  // AudioObject Schema
  const audioObjects = podcasts.map(podcast => ({
    "@context": "https://schema.org",
    "@type": "AudioObject",
    "name": podcast.title,
    "description": podcast.description,
    "contentUrl": `https://92lottery.dev${podcast.audioUrl}`,
    "duration": `PT${podcast.duration.split(':')[0]}M${podcast.duration.split(':')[1]}S`,
    "encodingFormat": "audio/mpeg",
    "uploadDate": podcast.date.split('/').reverse().join('-')
  }));
  const audioObjectsString = JSON.stringify(audioObjects);

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
      key: 'audio-objects',
      type: 'application/ld+json',
      dangerouslySetInnerHTML: { __html: audioObjectsString }
    }),
    
    // Breadcrumb
    React.createElement('div', { className: "bg-gray-100 py-2 px-4" },
      React.createElement('nav', { className: "text-sm" },
        React.createElement('ol', { className: "list-none p-0 inline-flex" },
          React.createElement('li', { className: "flex items-center" },
            React.createElement(Link, { href: "/", className: "text-blue-600 hover:text-blue-800" }, "Trang chủ"),
            React.createElement('span', { className: "mx-2" }, "/")
          ),
          React.createElement('li', { className: "text-gray-700" }, "Podcast 92Lottery")
        )
      )
    ),
    
    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "Podcast 92Lottery - Thông tin và chiến thuật qua âm thanh"),
      
      React.createElement('div', { className: "prose max-w-none" },
        React.createElement('p', { className: "text-lg mb-6" }, 
          "Tổng hợp các tập podcast 92Lottery với nội dung phong phú: phân tích thị trường, chiến thuật chơi hiệu quả, chia sẻ kinh nghiệm từ chuyên gia và người chơi thành công. Nghe podcast để cập nhật thông tin mới nhất và nâng cao kỹ năng chơi tại 92Lottery."
        ),
        
        // Lưu ý: Trong môi trường thực tế, các file audio sẽ được lưu trữ và phát từ server
        // Hiện tại, chúng ta chỉ tạo trang để chuẩn bị cho việc thêm podcast sau này
        
        // Đăng ký podcast
        React.createElement('div', { className: "bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8 flex flex-col md:flex-row items-center gap-6" },
          React.createElement('div', { className: "md:w-1/4 flex justify-center" },
            React.createElement('div', { className: "relative w-32 h-32 bg-[#bc2022] rounded-lg flex items-center justify-center" },
              React.createElement('div', { className: "absolute w-16 h-16 bg-white rounded-full flex items-center justify-center" },
                React.createElement('div', { className: "w-8 h-8 bg-[#bc2022] rounded-full" })
              )
            )
          ),
          React.createElement('div', { className: "md:w-3/4 text-center md:text-left" },
            React.createElement('h2', { className: "text-2xl font-bold text-[#bc2022] mb-2" }, "Đăng ký podcast 92Lottery"),
            React.createElement('p', { className: "mb-4" }, 
              "Đăng ký podcast 92Lottery trên các nền tảng phổ biến để không bỏ lỡ tập nào. Chúng tôi phát hành tập mới hàng tuần với nội dung hữu ích và thú vị."
            ),
            React.createElement('div', { className: "flex flex-wrap gap-2 justify-center md:justify-start" },
              React.createElement('a', { 
                href: "https://spotify.com/92lottery-podcast",
                className: "inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm",
                target: "_blank",
                rel: "noopener noreferrer"
              }, "Spotify"),
              React.createElement('a', { 
                href: "https://podcasts.apple.com/92lottery-podcast",
                className: "inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors text-sm",
                target: "_blank",
                rel: "noopener noreferrer"
              }, "Apple Podcasts"),
              React.createElement('a', { 
                href: "https://podcasts.google.com/92lottery-podcast",
                className: "inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm",
                target: "_blank",
                rel: "noopener noreferrer"
              }, "Google Podcasts"),
              React.createElement('a', { 
                href: "https://soundcloud.com/92lottery-podcast",
                className: "inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors text-sm",
                target: "_blank",
                rel: "noopener noreferrer"
              }, "SoundCloud")
            )
          )
        ),
        
        // Danh sách podcast
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Tất cả các tập podcast"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          podcasts.map((podcast, index) => 
            React.createElement('div', { key: index, className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('div', { className: "flex justify-between items-start mb-3" },
                React.createElement('h3', { className: "text-xl font-semibold" }, podcast.title),
                React.createElement('div', { className: "bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm" },
                  "Tập ", podcast.episode, " | Mùa ", podcast.season
                )
              ),
              React.createElement('p', { className: "text-gray-700 mb-4" }, podcast.description),
              React.createElement('div', { className: "flex flex-wrap gap-4 text-sm text-gray-600 mb-4" },
                React.createElement('div', null, 
                  React.createElement('span', { className: "font-semibold" }, "Thời lượng: "),
                  podcast.duration
                ),
                React.createElement('div', null, 
                  React.createElement('span', { className: "font-semibold" }, "Ngày phát hành: "),
                  podcast.date
                ),
                React.createElement('div', null, 
                  React.createElement('span', { className: "font-semibold" }, "Người dẫn: "),
                  podcast.host
                )
              ),
              React.createElement('div', { className: "mb-4" },
                React.createElement('span', { className: "font-semibold text-sm text-gray-600" }, "Khách mời: "),
                React.createElement('div', { className: "flex flex-wrap gap-2 mt-1" },
                  podcast.guests.map((guest, guestIndex) => 
                    React.createElement('span', { 
                      key: guestIndex,
                      className: "bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    }, guest)
                  )
                )
              ),
              React.createElement('div', { className: "w-full h-12 bg-gray-200 rounded-md flex items-center px-4" },
                React.createElement('button', { 
                  className: "w-8 h-8 bg-[#bc2022] rounded-full flex items-center justify-center mr-4"
                }, 
                  React.createElement('div', { className: "w-0 h-0 border-t-6 border-t-transparent border-l-12 border-l-white border-b-6 border-b-transparent ml-1" })
                ),
                React.createElement('div', { className: "flex-1 h-2 bg-gray-300 rounded-full overflow-hidden" },
                  React.createElement('div', { className: "w-0 h-full bg-[#bc2022] rounded-full" })
                ),
                React.createElement('span', { className: "ml-4 text-sm" }, "0:00 / ", podcast.duration)
              )
            )
          )
        ),
        
        // FAQ Section
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Câu hỏi thường gặp về podcast 92Lottery"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          faqItems.map((faq, index) => 
            React.createElement('div', { key: index, className: "border-b border-gray-200 pb-4" },
              React.createElement('h3', { className: "text-xl font-semibold mb-2" }, faq.question),
              React.createElement('p', null, faq.answer)
            )
          )
        ),
        
        // Đề xuất chủ đề
        React.createElement('div', { className: "bg-gray-100 p-6 rounded-lg mt-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-4" }, "Đề xuất chủ đề podcast"),
          React.createElement('p', { className: "mb-4" }, 
            "Bạn muốn chúng tôi thảo luận về chủ đề nào trong các tập podcast tiếp theo? Hãy gửi đề xuất của bạn qua email hoặc mạng xã hội của 92Lottery."
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
