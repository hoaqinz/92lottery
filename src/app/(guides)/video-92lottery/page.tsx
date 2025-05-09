import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Video 92Lottery - Hướng dẫn trực quan bằng video | 92Lottery',
  description: 'Tổng hợp video hướng dẫn 92Lottery: đăng ký, đăng nhập, nạp rút tiền, cách chơi các trò chơi. Xem video để hiểu rõ hơn về 92Lottery.',
  keywords: ['video 92lottery', 'hướng dẫn video 92lottery', 'youtube 92lottery', 'tutorial 92lottery', 'video đăng ký 92lottery', 'video nạp tiền 92lottery', 'video rút tiền 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/video-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/video-92lottery',
      'x-default': 'https://92lottery.dev/video-92lottery'
    }
  },
};

export default function VideoGuidePage() {
  // Danh sách video
  const videos = [
    {
      title: "Hướng dẫn đăng ký tài khoản 92Lottery",
      description: "Video hướng dẫn chi tiết cách đăng ký tài khoản 92Lottery từ A-Z, từ truy cập trang chủ đến xác minh tài khoản.",
      thumbnail: "/anh/video/dang-ky-thumbnail.jpg",
      youtubeId: "example1",
      duration: "5:23",
      category: "Hướng dẫn cơ bản",
      views: "15.2K"
    },
    {
      title: "Hướng dẫn đăng nhập 92Lottery",
      description: "Video hướng dẫn cách đăng nhập 92Lottery, khắc phục các vấn đề đăng nhập và cài đặt bảo mật tài khoản.",
      thumbnail: "/anh/video/dang-nhap-thumbnail.jpg",
      youtubeId: "example2",
      duration: "3:45",
      category: "Hướng dẫn cơ bản",
      views: "12.8K"
    },
    {
      title: "Hướng dẫn nạp tiền 92Lottery",
      description: "Video hướng dẫn chi tiết các phương thức nạp tiền tại 92Lottery: ngân hàng, ví điện tử, thẻ cào và tiền điện tử.",
      thumbnail: "/anh/video/nap-tien-thumbnail.jpg",
      youtubeId: "example3",
      duration: "7:12",
      category: "Nạp và rút tiền",
      views: "25.6K"
    },
    {
      title: "Hướng dẫn rút tiền 92Lottery",
      description: "Video hướng dẫn cách rút tiền tại 92Lottery, các lưu ý quan trọng và cách khắc phục các vấn đề thường gặp.",
      thumbnail: "/anh/video/rut-tien-thumbnail.jpg",
      youtubeId: "example4",
      duration: "6:38",
      category: "Nạp và rút tiền",
      views: "22.3K"
    },
    {
      title: "Hướng dẫn chơi WinGo tại 92Lottery",
      description: "Video hướng dẫn chi tiết cách chơi WinGo tại 92Lottery, luật chơi, chiến thuật và mẹo để tăng cơ hội thắng.",
      thumbnail: "/anh/video/wingo-thumbnail.jpg",
      youtubeId: "example5",
      duration: "8:54",
      category: "Hướng dẫn trò chơi",
      views: "31.7K"
    },
    {
      title: "Hướng dẫn chơi K3 Lotre tại 92Lottery",
      description: "Video hướng dẫn chi tiết cách chơi K3 Lotre tại 92Lottery, luật chơi, các kiểu cược và chiến thuật hiệu quả.",
      thumbnail: "/anh/video/k3-thumbnail.jpg",
      youtubeId: "example6",
      duration: "9:21",
      category: "Hướng dẫn trò chơi",
      views: "28.4K"
    },
    {
      title: "Hướng dẫn chơi 5D Lotre tại 92Lottery",
      description: "Video hướng dẫn chi tiết cách chơi 5D Lotre tại 92Lottery, luật chơi, các kiểu cược và chiến thuật hiệu quả.",
      thumbnail: "/anh/video/5d-thumbnail.jpg",
      youtubeId: "example7",
      duration: "10:05",
      category: "Hướng dẫn trò chơi",
      views: "26.9K"
    },
    {
      title: "Hướng dẫn chơi TRX Win tại 92Lottery",
      description: "Video hướng dẫn chi tiết cách chơi TRX Win tại 92Lottery, luật chơi, các kiểu cược và chiến thuật hiệu quả.",
      thumbnail: "/anh/video/trx-thumbnail.jpg",
      youtubeId: "example8",
      duration: "9:47",
      category: "Hướng dẫn trò chơi",
      views: "24.5K"
    },
    {
      title: "Hướng dẫn tải và cài đặt ứng dụng 92Lottery",
      description: "Video hướng dẫn chi tiết cách tải và cài đặt ứng dụng 92Lottery trên Android và iOS, cùng các tính năng nổi bật.",
      thumbnail: "/anh/video/app-thumbnail.jpg",
      youtubeId: "example9",
      duration: "6:19",
      category: "Ứng dụng",
      views: "18.3K"
    },
    {
      title: "Hướng dẫn nhận và sử dụng khuyến mãi tại 92Lottery",
      description: "Video hướng dẫn cách nhận và sử dụng các khuyến mãi tại 92Lottery: thưởng chào mừng, khuyến mãi nạp tiền, hoàn trả, v.v.",
      thumbnail: "/anh/video/khuyen-mai-thumbnail.jpg",
      youtubeId: "example10",
      duration: "7:36",
      category: "Khuyến mãi",
      views: "20.1K"
    }
  ];

  // Phân loại video theo danh mục
  const categories = videos.reduce((acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }
    acc[video.category].push(video);
    return acc;
  }, {} as Record<string, typeof videos>);

  // FAQ Schema
  const faqItems = [
    {
      question: "Làm thế nào để xem video hướng dẫn 92Lottery?",
      answer: "Để xem video hướng dẫn 92Lottery, bạn có thể truy cập trang Video 92Lottery trên website chính thức hoặc kênh YouTube chính thức của 92Lottery. Các video được phân loại theo danh mục như: Hướng dẫn cơ bản, Nạp và rút tiền, Hướng dẫn trò chơi, Ứng dụng, và Khuyến mãi, giúp bạn dễ dàng tìm kiếm video phù hợp với nhu cầu."
    },
    {
      question: "Có video hướng dẫn nạp và rút tiền tại 92Lottery không?",
      answer: "Có, 92Lottery cung cấp các video hướng dẫn chi tiết về nạp và rút tiền. Video 'Hướng dẫn nạp tiền 92Lottery' giới thiệu các phương thức nạp tiền như ngân hàng, ví điện tử, thẻ cào và tiền điện tử. Video 'Hướng dẫn rút tiền 92Lottery' hướng dẫn cách rút tiền, các lưu ý quan trọng và cách khắc phục các vấn đề thường gặp."
    },
    {
      question: "Có video hướng dẫn chơi các trò chơi tại 92Lottery không?",
      answer: "Có, 92Lottery cung cấp video hướng dẫn chi tiết cho tất cả các trò chơi nổi bật như WinGo, K3 Lotre, 5D Lotre và TRX Win. Mỗi video giới thiệu luật chơi, các kiểu cược, chiến thuật và mẹo để tăng cơ hội thắng. Các video này rất hữu ích cho cả người mới bắt đầu và người chơi có kinh nghiệm."
    },
    {
      question: "Làm thế nào để tải ứng dụng 92Lottery qua video hướng dẫn?",
      answer: "Video 'Hướng dẫn tải và cài đặt ứng dụng 92Lottery' cung cấp hướng dẫn chi tiết cách tải và cài đặt ứng dụng 92Lottery trên cả Android và iOS. Video này cũng giới thiệu các tính năng nổi bật của ứng dụng và cách sử dụng hiệu quả. Bạn có thể xem video này trên trang Video 92Lottery hoặc kênh YouTube chính thức của 92Lottery."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Video 92Lottery", url: "https://92lottery.dev/video-92lottery" }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const breadcrumbSchemaString = JSON.stringify(breadcrumbSchema);

  // VideoObject Schema
  const videoObjects = videos.map(video => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "thumbnailUrl": `https://92lottery.dev${video.thumbnail}`,
    "uploadDate": "2025-01-01T08:00:00+08:00",
    "duration": `PT${video.duration.replace(':', 'M')}S`,
    "contentUrl": `https://www.youtube.com/watch?v=${video.youtubeId}`,
    "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`,
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": { "@type": "WatchAction" },
      "userInteractionCount": parseInt(video.views.replace('K', '000'))
    }
  }));
  const videoObjectsString = JSON.stringify(videoObjects);

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
      key: 'video-objects',
      type: 'application/ld+json',
      dangerouslySetInnerHTML: { __html: videoObjectsString }
    }),
    
    // Breadcrumb
    React.createElement('div', { className: "bg-gray-100 py-2 px-4" },
      React.createElement('nav', { className: "text-sm" },
        React.createElement('ol', { className: "list-none p-0 inline-flex" },
          React.createElement('li', { className: "flex items-center" },
            React.createElement(Link, { href: "/", className: "text-blue-600 hover:text-blue-800" }, "Trang chủ"),
            React.createElement('span', { className: "mx-2" }, "/")
          ),
          React.createElement('li', { className: "text-gray-700" }, "Video 92Lottery")
        )
      )
    ),
    
    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "Video 92Lottery - Hướng dẫn trực quan bằng video"),
      
      React.createElement('div', { className: "prose max-w-none" },
        React.createElement('p', { className: "text-lg mb-6" }, 
          "Tổng hợp các video hướng dẫn chi tiết về 92Lottery, giúp bạn dễ dàng nắm bắt thông tin về cách đăng ký, đăng nhập, nạp rút tiền và cách chơi các trò chơi. Xem video để hiểu rõ hơn về 92Lottery và tối ưu hóa trải nghiệm của bạn."
        ),
        
        // Lưu ý: Trong môi trường thực tế, các video sẽ được nhúng từ YouTube
        // Hiện tại, chúng ta chỉ tạo trang để chuẩn bị cho việc thêm video sau này
        
        // Kênh YouTube chính thức
        React.createElement('div', { className: "bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8 flex flex-col md:flex-row items-center gap-6" },
          React.createElement('div', { className: "md:w-1/4 flex justify-center" },
            React.createElement('div', { className: "relative w-32 h-32 bg-red-600 rounded-full flex items-center justify-center" },
              React.createElement('div', { className: "absolute w-16 h-12 bg-white rounded-lg transform rotate-45" }),
              React.createElement('div', { className: "absolute w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-red-600 border-b-8 border-b-transparent" })
            )
          ),
          React.createElement('div', { className: "md:w-3/4 text-center md:text-left" },
            React.createElement('h2', { className: "text-2xl font-bold text-[#bc2022] mb-2" }, "Kênh YouTube chính thức 92Lottery"),
            React.createElement('p', { className: "mb-4" }, 
              "Đăng ký kênh YouTube chính thức của 92Lottery để cập nhật các video hướng dẫn mới nhất, thông tin về khuyến mãi, sự kiện và nhiều nội dung hấp dẫn khác."
            ),
            React.createElement('a', { 
              href: "https://www.youtube.com/channel/92lottery",
              className: "inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors",
              target: "_blank",
              rel: "noopener noreferrer"
            }, "Đăng ký kênh")
          )
        ),
        
        // Danh sách video theo danh mục
        Object.entries(categories).map(([category, categoryVideos], categoryIndex) => 
          React.createElement(React.Fragment, { key: categoryIndex },
            React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, category),
            
            React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" },
              categoryVideos.map((video, videoIndex) => 
                React.createElement('div', { key: videoIndex, className: "bg-white rounded-lg border border-gray-200 overflow-hidden" },
                  React.createElement('div', { className: "relative w-full h-48 bg-gray-200" },
                    React.createElement('div', { className: "absolute inset-0 flex items-center justify-center" },
                      React.createElement('div', { className: "w-16 h-16 bg-[#bc2022] rounded-full flex items-center justify-center" },
                        React.createElement('div', { className: "w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1" })
                      )
                    ),
                    React.createElement('div', { className: "absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded" }, 
                      video.duration
                    )
                  ),
                  React.createElement('div', { className: "p-4" },
                    React.createElement('h3', { className: "text-lg font-semibold mb-2" }, video.title),
                    React.createElement('p', { className: "text-gray-600 text-sm mb-3" }, video.description),
                    React.createElement('div', { className: "flex justify-between items-center" },
                      React.createElement('span', { className: "text-xs text-gray-500" }, 
                        React.createElement('span', { className: "mr-2" }, "👁️"),
                        video.views, " lượt xem"
                      ),
                      React.createElement('a', { 
                        href: `https://www.youtube.com/watch?v=${video.youtubeId}`,
                        className: "text-[#bc2022] hover:text-[#a51b1b] text-sm font-semibold",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }, "Xem video")
                    )
                  )
                )
              )
            )
          )
        ),
        
        // FAQ Section
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Câu hỏi thường gặp về video 92Lottery"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          faqItems.map((faq, index) => 
            React.createElement('div', { key: index, className: "border-b border-gray-200 pb-4" },
              React.createElement('h3', { className: "text-xl font-semibold mb-2" }, faq.question),
              React.createElement('p', null, faq.answer)
            )
          )
        ),
        
        // Đăng ký và tải ứng dụng
        React.createElement('div', { className: "bg-gray-100 p-6 rounded-lg mt-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-4" }, "Đăng ký 92Lottery và tải ứng dụng ngay"),
          React.createElement('p', { className: "mb-4" }, 
            "Sau khi xem các video hướng dẫn, bạn đã sẵn sàng trải nghiệm 92Lottery. Đăng ký tài khoản ngay để nhận thưởng chào mừng 100K và tải ứng dụng để có trải nghiệm tốt nhất."
          ),
          React.createElement('div', { className: "flex flex-col sm:flex-row gap-4 justify-center" },
            React.createElement(Link, { 
              href: "/register", 
              className: "bg-[#bc2022] text-white px-6 py-3 rounded-md hover:bg-[#a51b1b] transition-colors font-bold text-center"
            }, "Đăng ký ngay"),
            React.createElement(Link, { 
              href: "/app-92lottery", 
              className: "bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors font-bold text-center"
            }, "Tải ứng dụng")
          )
        )
      )
    )
  );
}
