import React from 'react';
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Link from 'next/link';
import Image from 'next/image';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Hướng dẫn 92LOTTERY - Cách chơi, Chiến thuật & Mẹo hay',
  description: 'Thư viện video hướng dẫn chính thức của 92LOTTERY với các video chi tiết về cách chơi, chiến thuật, mẹo hay và hướng dẫn nạp/rút tiền.',
  keywords: ['92lottery video', 'video hướng dẫn 92lottery', 'cách chơi win go', 'hướng dẫn k3 lotre', 'chiến thuật 5d lotre', 'video nạp tiền 92lottery', 'video rút tiền 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/video',
  },
};

// FAQ cho trang video
const videoFaqs = [
  {
    question: "Làm thế nào để xem video hướng dẫn 92LOTTERY?",
    answer: "Để xem video hướng dẫn 92LOTTERY, bạn chỉ cần truy cập trang Video Hướng dẫn, chọn danh mục và video bạn muốn xem, nhấp vào video để phát. Các video có thể xem trực tiếp trên trang web hoặc bạn có thể truy cập kênh YouTube chính thức của 92LOTTERY để xem với chất lượng cao hơn."
  },
  {
    question: "Có thể tải video hướng dẫn 92LOTTERY về máy không?",
    answer: "Hiện tại, 92LOTTERY không hỗ trợ tải video trực tiếp từ trang web. Tuy nhiên, bạn có thể xem offline bằng cách sử dụng các tiện ích mở rộng của trình duyệt hoặc công cụ bên thứ ba để lưu video từ kênh YouTube chính thức của 92LOTTERY. Lưu ý rằng việc này chỉ nên thực hiện cho mục đích cá nhân."
  },
  {
    question: "92LOTTERY có cập nhật video hướng dẫn mới thường xuyên không?",
    answer: "Có, 92LOTTERY cập nhật video hướng dẫn mới hàng tuần. Chúng tôi thường xuyên bổ sung video về chiến thuật mới, cập nhật tính năng, và hướng dẫn cho các trò chơi mới ra mắt. Bạn có thể đăng ký kênh YouTube của 92LOTTERY hoặc bật thông báo trên trang web để không bỏ lỡ video mới."
  },
  {
    question: "Tôi có thể đề xuất chủ đề cho video hướng dẫn không?",
    answer: "Tất nhiên! 92LOTTERY luôn hoan nghênh đề xuất từ người chơi. Bạn có thể gửi đề xuất chủ đề video qua mục Liên hệ trên trang web, bình luận dưới video trên YouTube, hoặc gửi tin nhắn đến Telegram chính thức @92lottery_official. Chúng tôi sẽ xem xét và có thể sản xuất video dựa trên đề xuất của bạn."
  }
];

export default function VideoPage() {
  // Generate schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Video", url: "https://92lottery.dev/video" }
  ]);
  
  const faqSchema = generateFAQSchema(videoFaqs);
  
  // Dữ liệu video
  const featuredVideos = [
    {
      id: 1,
      title: "Hướng dẫn đăng ký tài khoản 92LOTTERY chi tiết A-Z",
      thumbnail: "/anh/video/dang-ky-thumbnail.jpg",
      duration: "5:24",
      views: "12.5K",
      date: "15/11/2023",
      category: "Hướng dẫn cơ bản",
      youtubeId: "abc123xyz"
    },
    {
      id: 2,
      title: "Cách nạp tiền và rút tiền nhanh chóng tại 92LOTTERY",
      thumbnail: "/anh/video/nap-rut-thumbnail.jpg",
      duration: "7:12",
      views: "9.8K",
      date: "10/11/2023",
      category: "Hướng dẫn cơ bản",
      youtubeId: "def456uvw"
    }
  ];
  
  const gameVideos = [
    {
      id: 3,
      title: "Hướng dẫn chơi Win Go cho người mới bắt đầu",
      thumbnail: "/anh/video/wingo-thumbnail.jpg",
      duration: "8:45",
      views: "15.3K",
      date: "05/11/2023",
      category: "Win Go",
      youtubeId: "ghi789xyz"
    },
    {
      id: 4,
      title: "Chiến thuật Win Go hiệu quả nhất - Thắng 80%",
      thumbnail: "/anh/video/wingo-strategy-thumbnail.jpg",
      duration: "12:18",
      views: "22.7K",
      date: "01/11/2023",
      category: "Win Go",
      youtubeId: "jkl012abc"
    },
    {
      id: 5,
      title: "Hướng dẫn chơi K3 Lotre từ A-Z",
      thumbnail: "/anh/video/k3-thumbnail.jpg",
      duration: "9:32",
      views: "11.2K",
      date: "28/10/2023",
      category: "K3 Lotre",
      youtubeId: "mno345def"
    },
    {
      id: 6,
      title: "Mẹo chơi 5D Lotre - Tăng tỷ lệ thắng lên 70%",
      thumbnail: "/anh/video/5d-thumbnail.jpg",
      duration: "10:45",
      views: "18.9K",
      date: "25/10/2023",
      category: "5D Lotre",
      youtubeId: "pqr678stu"
    }
  ];
  
  const strategyVideos = [
    {
      id: 7,
      title: "5 chiến thuật quản lý vốn hiệu quả khi chơi xổ số",
      thumbnail: "/anh/video/bankroll-thumbnail.jpg",
      duration: "15:20",
      views: "25.4K",
      date: "20/10/2023",
      category: "Chiến thuật",
      youtubeId: "vwx901yz"
    },
    {
      id: 8,
      title: "Phân tích xu hướng và nhận diện mẫu trong Win Go",
      thumbnail: "/anh/video/pattern-thumbnail.jpg",
      duration: "14:08",
      views: "19.7K",
      date: "15/10/2023",
      category: "Chiến thuật",
      youtubeId: "abc234def"
    }
  ];
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Header />
      
      <main className="flex-1 max-w-[420px] mx-auto w-full bg-white pb-16">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-[#bc2022] mb-4">Video Hướng dẫn 92LOTTERY</h1>
          
          {/* Video Categories */}
          <div className="mb-6">
            <div className="flex overflow-x-auto space-x-2 py-2 mb-4">
              <button className="px-4 py-2 bg-[#bc2022] text-white rounded-full whitespace-nowrap">Tất cả</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">Hướng dẫn cơ bản</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">Win Go</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">K3 Lotre</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">5D Lotre</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">Chiến thuật</button>
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Tìm kiếm video..." 
                className="w-full p-3 border border-gray-300 rounded-lg pl-10"
              />
              <svg className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          
          {/* Featured Videos */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Video Nổi bật</h2>
            
            <div className="space-y-4">
              {featuredVideos.map(video => (
                <Link href={`/video/${video.id}`} key={video.id} className="block">
                  <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-48 w-full">
                      <Image 
                        src={video.thumbnail} 
                        alt={video.title}
                        fill
                        style={{objectFit: 'cover'}}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5v14l11-7z"></path>
                          </svg>
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </span>
                      <span className="absolute top-2 left-2 bg-[#bc2022] text-white text-xs px-2 py-1 rounded">
                        {video.category}
                      </span>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-bold mb-2 line-clamp-2">{video.title}</h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{video.date}</span>
                        <span className="mx-2">•</span>
                        <span>{video.views} lượt xem</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Game Tutorial Videos */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Hướng dẫn Trò chơi</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {gameVideos.map(video => (
                <Link href={`/video/${video.id}`} key={video.id} className="block">
                  <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-32 w-full">
                      <Image 
                        src={video.thumbnail} 
                        alt={video.title}
                        fill
                        style={{objectFit: 'cover'}}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5v14l11-7z"></path>
                          </svg>
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1.5 py-0.5 rounded">
                        {video.duration}
                      </span>
                    </div>
                    
                    <div className="p-3">
                      <span className="text-xs text-[#bc2022] font-medium">{video.category}</span>
                      <h3 className="font-medium text-sm mt-1 line-clamp-2">{video.title}</h3>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span>{video.views} lượt xem</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-4">
              <Link href="/video/tro-choi" className="text-[#bc2022] font-medium flex items-center">
                Xem tất cả video hướng dẫn trò chơi
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Strategy Videos */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Chiến thuật & Mẹo hay</h2>
            
            <div className="space-y-4">
              {strategyVideos.map(video => (
                <Link href={`/video/${video.id}`} key={video.id} className="block">
                  <div className="flex border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-24 w-32 flex-shrink-0">
                      <Image 
                        src={video.thumbnail} 
                        alt={video.title}
                        fill
                        style={{objectFit: 'cover'}}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5v14l11-7z"></path>
                          </svg>
                        </div>
                      </div>
                      <span className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded text-[10px]">
                        {video.duration}
                      </span>
                    </div>
                    
                    <div className="p-3 flex-1">
                      <h3 className="font-medium text-sm line-clamp-2">{video.title}</h3>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span>{video.views} lượt xem</span>
                        <span className="mx-1">•</span>
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-4">
              <Link href="/video/chien-thuat" className="text-[#bc2022] font-medium flex items-center">
                Xem tất cả video chiến thuật
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* YouTube Channel */}
          <div className="mb-8 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative mr-3">
                <Image 
                  src="/anh/favicon.png" 
                  alt="92LOTTERY YouTube Channel"
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div>
                <h3 className="font-bold">Kênh YouTube 92LOTTERY</h3>
                <p className="text-sm text-gray-600">50K+ người đăng ký • 200+ video</p>
              </div>
            </div>
            
            <a 
              href="https://www.youtube.com/channel/92lottery" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-red-600 text-white text-center py-2 rounded-lg font-medium"
            >
              Đăng ký kênh
            </a>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-6">Câu hỏi thường gặp</h2>
            
            <div className="space-y-4">
              {videoFaqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <TabBar />
    </div>
  );
}
