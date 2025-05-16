import React from 'react';
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Link from 'next/link';
import Image from 'next/image';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Infographic 92LOTTERY - Thống kê & Phân tích Trực quan',
  description: 'Thư viện infographic chính thức của 92LOTTERY với các biểu đồ, thống kê và phân tích trực quan về xổ số, tỷ lệ thắng và chiến thuật cá cược.',
  keywords: ['92lottery infographic', 'thống kê 92lottery', 'biểu đồ xổ số', 'phân tích win go', 'tỷ lệ thắng 92lottery', 'chiến thuật cá cược trực quan'],
  alternates: {
    canonical: 'https://92lottery.dev/infographic',
  },
};

// FAQ cho trang infographic
const infographicFaqs = [
  {
    question: "Infographic tại 92LOTTERY được cập nhật thường xuyên không?",
    answer: "Có, infographic tại 92LOTTERY được cập nhật hàng ngày đối với thống kê kết quả và xu hướng, hàng tuần đối với phân tích chiến thuật, và hàng tháng đối với báo cáo tổng hợp. Mỗi infographic đều có ghi rõ thời gian cập nhật để bạn có thể biết được độ mới của thông tin."
  },
  {
    question: "Làm thế nào để sử dụng infographic hiệu quả?",
    answer: "Để sử dụng infographic hiệu quả, bạn nên: 1) Xem kỹ các số liệu và thông tin được trình bày, 2) Kết hợp thông tin từ nhiều infographic khác nhau để có cái nhìn toàn diện, 3) Áp dụng thông tin vào chiến thuật cá cược của bạn, 4) Theo dõi infographic mới nhất để cập nhật xu hướng, 5) Tham khảo thêm các bài viết phân tích chi tiết đi kèm với infographic."
  },
  {
    question: "Tôi có thể tải và chia sẻ infographic của 92LOTTERY không?",
    answer: "Có, bạn có thể tải và chia sẻ infographic của 92LOTTERY cho mục đích cá nhân. Mỗi infographic đều có nút tải xuống ở góc dưới. Khi chia sẻ, vui lòng giữ nguyên logo và nguồn 92LOTTERY trên infographic. Tuy nhiên, không được sử dụng infographic cho mục đích thương mại mà không có sự cho phép từ 92LOTTERY."
  },
  {
    question: "Dữ liệu trong infographic được lấy từ đâu?",
    answer: "Dữ liệu trong infographic của 92LOTTERY được lấy từ nhiều nguồn đáng tin cậy, bao gồm: 1) Kết quả xổ số thực tế tại 92LOTTERY, 2) Phân tích thống kê từ đội ngũ chuyên gia, 3) Dữ liệu người chơi ẩn danh (không có thông tin cá nhân), 4) Nghiên cứu và khảo sát trong ngành cá cược. Tất cả dữ liệu đều được xử lý và kiểm chứng kỹ lưỡng trước khi đưa vào infographic."
  }
];

export default function InfographicPage() {
  // Generate schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Infographic", url: "https://92lottery.dev/infographic" }
  ]);
  
  const faqSchema = generateFAQSchema(infographicFaqs);
  
  // Dữ liệu infographic
  const featuredInfographics = [
    {
      id: 1,
      title: "Phân tích xu hướng Win Go tháng 11/2023",
      image: "/anh/infographic/wingo-trend-analysis.jpg",
      description: "Phân tích chi tiết xu hướng kết quả Win Go trong tháng 11/2023, bao gồm tần suất xuất hiện của các số và màu, chuỗi kết quả, và thời điểm xuất hiện.",
      category: "Win Go",
      date: "15/11/2023",
      downloads: 1245
    },
    {
      id: 2,
      title: "So sánh tỷ lệ thắng giữa các trò chơi tại 92LOTTERY",
      image: "/anh/infographic/win-rate-comparison.jpg",
      description: "So sánh trực quan tỷ lệ thắng giữa các trò chơi tại 92LOTTERY, giúp người chơi lựa chọn trò chơi phù hợp với chiến thuật và mục tiêu của mình.",
      category: "So sánh",
      date: "10/11/2023",
      downloads: 987
    }
  ];
  
  const statisticsInfographics = [
    {
      id: 3,
      title: "Thống kê kết quả Win Go 100 lượt gần nhất",
      image: "/anh/infographic/wingo-statistics.jpg",
      category: "Win Go",
      date: "15/11/2023"
    },
    {
      id: 4,
      title: "Thống kê kết quả K3 Lotre 100 lượt gần nhất",
      image: "/anh/infographic/k3-statistics.jpg",
      category: "K3 Lotre",
      date: "15/11/2023"
    },
    {
      id: 5,
      title: "Thống kê kết quả 5D Lotre 100 lượt gần nhất",
      image: "/anh/infographic/5d-statistics.jpg",
      category: "5D Lotre",
      date: "15/11/2023"
    },
    {
      id: 6,
      title: "Thống kê kết quả TRX Win 100 lượt gần nhất",
      image: "/anh/infographic/trx-statistics.jpg",
      category: "TRX Win",
      date: "15/11/2023"
    }
  ];
  
  const strategyInfographics = [
    {
      id: 7,
      title: "5 chiến thuật quản lý vốn hiệu quả",
      image: "/anh/infographic/bankroll-management.jpg",
      category: "Chiến thuật",
      date: "05/11/2023"
    },
    {
      id: 8,
      title: "Chiến thuật Martingale cho Win Go",
      image: "/anh/infographic/martingale-strategy.jpg",
      category: "Chiến thuật",
      date: "01/11/2023"
    },
    {
      id: 9,
      title: "Chiến thuật D'Alembert cho K3 Lotre",
      image: "/anh/infographic/dalembert-strategy.jpg",
      category: "Chiến thuật",
      date: "28/10/2023"
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
          <h1 className="text-2xl font-bold text-[#bc2022] mb-4">Infographic 92LOTTERY</h1>
          
          {/* Infographic Categories */}
          <div className="mb-6">
            <div className="flex overflow-x-auto space-x-2 py-2 mb-4">
              <button className="px-4 py-2 bg-[#bc2022] text-white rounded-full whitespace-nowrap">Tất cả</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">Win Go</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">K3 Lotre</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">5D Lotre</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">TRX Win</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">Chiến thuật</button>
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Tìm kiếm infographic..." 
                className="w-full p-3 border border-gray-300 rounded-lg pl-10"
              />
              <svg className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          
          {/* Featured Infographics */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Infographic Nổi bật</h2>
            
            <div className="space-y-4">
              {featuredInfographics.map(infographic => (
                <Link href={`/infographic/${infographic.id}`} key={infographic.id} className="block">
                  <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-48 w-full">
                      <Image 
                        src={infographic.image} 
                        alt={infographic.title}
                        fill
                        style={{objectFit: 'cover'}}
                      />
                      <span className="absolute top-2 left-2 bg-[#bc2022] text-white text-xs px-2 py-1 rounded">
                        {infographic.category}
                      </span>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-bold mb-2 line-clamp-2">{infographic.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{infographic.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{infographic.date}</span>
                        <span>{infographic.downloads} lượt tải</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Statistics Infographics */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Thống kê Kết quả</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {statisticsInfographics.map(infographic => (
                <Link href={`/infographic/${infographic.id}`} key={infographic.id} className="block">
                  <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-32 w-full">
                      <Image 
                        src={infographic.image} 
                        alt={infographic.title}
                        fill
                        style={{objectFit: 'cover'}}
                      />
                      <span className="absolute top-2 left-2 bg-[#bc2022] text-white text-xs px-1.5 py-0.5 rounded">
                        {infographic.category}
                      </span>
                    </div>
                    
                    <div className="p-3">
                      <h3 className="font-medium text-sm line-clamp-2">{infographic.title}</h3>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span>{infographic.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-4">
              <Link href="/infographic/thong-ke" className="text-[#bc2022] font-medium flex items-center">
                Xem tất cả thống kê
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Strategy Infographics */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Chiến thuật & Mẹo hay</h2>
            
            <div className="space-y-4">
              {strategyInfographics.map(infographic => (
                <Link href={`/infographic/${infographic.id}`} key={infographic.id} className="block">
                  <div className="flex border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-24 w-32 flex-shrink-0">
                      <Image 
                        src={infographic.image} 
                        alt={infographic.title}
                        fill
                        style={{objectFit: 'cover'}}
                      />
                    </div>
                    
                    <div className="p-3 flex-1">
                      <span className="text-xs text-[#bc2022] font-medium">{infographic.category}</span>
                      <h3 className="font-medium text-sm mt-1 line-clamp-2">{infographic.title}</h3>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span>{infographic.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-4">
              <Link href="/infographic/chien-thuat" className="text-[#bc2022] font-medium flex items-center">
                Xem tất cả chiến thuật
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Create Infographic */}
          <div className="mb-8 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-3">Tạo Infographic Tùy chỉnh</h2>
            <p className="text-sm text-gray-600 mb-4">
              Tạo infographic tùy chỉnh dựa trên dữ liệu và chiến thuật của riêng bạn. Chọn trò chơi, khoảng thời gian và các thông số bạn muốn phân tích.
            </p>
            <Link 
              href="/infographic/tao-moi" 
              className="block w-full bg-[#bc2022] text-white text-center py-2 rounded-lg font-medium"
            >
              Tạo Infographic
            </Link>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-6">Câu hỏi thường gặp</h2>
            
            <div className="space-y-4">
              {infographicFaqs.map((faq, index) => (
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
