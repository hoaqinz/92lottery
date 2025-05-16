import React from 'react';
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Link from 'next/link';
import Image from 'next/image';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trung tâm Dự đoán 92LOTTERY - Phân tích & Dự báo Kết quả Xổ số',
  description: 'Trung tâm dự đoán chính thức của 92LOTTERY cung cấp phân tích chuyên sâu, dự báo kết quả Win Go, K3 Lotre, 5D Lotre và TRX Win từ các chuyên gia hàng đầu.',
  keywords: ['92lottery dự đoán', 'dự đoán win go', 'dự đoán k3 lotre', 'dự đoán 5d lotre', 'dự đoán trx win', 'phân tích xổ số 92lottery', 'thống kê 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/du-doan',
  },
};

// FAQ cho trang dự đoán
const predictionFaqs = [
  {
    question: "Dự đoán tại 92LOTTERY có chính xác không?",
    answer: "Dự đoán tại 92LOTTERY được thực hiện bởi đội ngũ chuyên gia với nhiều năm kinh nghiệm, dựa trên phân tích dữ liệu và thuật toán tiên tiến. Tuy nhiên, không có dự đoán nào đảm bảo 100% chính xác. Tỷ lệ chính xác của các dự đoán dao động từ 65-80% tùy thuộc vào trò chơi và phương pháp phân tích."
  },
  {
    question: "Làm thế nào để áp dụng dự đoán vào chiến thuật cá cược?",
    answer: "Để áp dụng dự đoán vào chiến thuật cá cược, bạn nên: 1) Tham khảo nhiều dự đoán từ các chuyên gia khác nhau, 2) Kết hợp với phân tích riêng của bạn, 3) Áp dụng nguyên tắc quản lý vốn nghiêm ngặt, 4) Không đặt cược quá lớn dựa trên một dự đoán, 5) Theo dõi và đánh giá hiệu quả của các dự đoán trước khi tin tưởng hoàn toàn."
  },
  {
    question: "Trung tâm dự đoán 92LOTTERY cập nhật thường xuyên không?",
    answer: "Có, Trung tâm dự đoán 92LOTTERY cập nhật liên tục 24/7. Dự đoán cho Win Go được cập nhật mỗi 5 phút, K3 Lotre mỗi 15 phút, 5D Lotre mỗi 30 phút, và TRX Win mỗi giờ. Ngoài ra, chúng tôi còn cung cấp báo cáo phân tích chuyên sâu hàng ngày và hàng tuần."
  },
  {
    question: "Ai là người thực hiện các dự đoán tại 92LOTTERY?",
    answer: "Các dự đoán tại 92LOTTERY được thực hiện bởi đội ngũ chuyên gia gồm các nhà phân tích dữ liệu, chuyên gia thống kê, và người chơi chuyên nghiệp với nhiều năm kinh nghiệm. Mỗi chuyên gia có chuyên môn riêng về một hoặc nhiều trò chơi cụ thể, đảm bảo chất lượng và độ tin cậy của các dự đoán."
  }
];

export default function PredictionPage() {
  // Generate schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Dự đoán", url: "https://92lottery.dev/du-doan" }
  ]);
  
  const faqSchema = generateFAQSchema(predictionFaqs);
  
  // Dữ liệu dự đoán Win Go
  const winGoPredictions = [
    { time: "10:00", result: "7 (Đỏ)", accuracy: "78%" },
    { time: "10:01", result: "4 (Xanh)", accuracy: "72%" },
    { time: "10:02", result: "0 (Tím)", accuracy: "65%" },
    { time: "10:03", result: "9 (Đỏ)", accuracy: "81%" },
    { time: "10:04", result: "2 (Xanh)", accuracy: "75%" },
    { time: "10:05", result: "5 (Tím)", accuracy: "68%" },
  ];
  
  // Dữ liệu dự đoán K3 Lotre
  const k3Predictions = [
    { time: "10:00", result: "Lớn, Lẻ", accuracy: "76%" },
    { time: "10:03", result: "Nhỏ, Chẵn", accuracy: "73%" },
    { time: "10:06", result: "Lớn, Chẵn", accuracy: "69%" },
    { time: "10:09", result: "Nhỏ, Lẻ", accuracy: "77%" },
  ];
  
  // Dữ liệu dự đoán 5D Lotre
  const d5Predictions = [
    { time: "10:00", result: "3, 7, 9, 2, 5", accuracy: "65%" },
    { time: "10:05", result: "8, 1, 4, 0, 6", accuracy: "62%" },
    { time: "10:10", result: "2, 5, 7, 9, 1", accuracy: "68%" },
  ];
  
  // Dữ liệu dự đoán TRX Win
  const trxPredictions = [
    { time: "10:00", result: "Xanh", accuracy: "79%" },
    { time: "11:00", result: "Đỏ", accuracy: "74%" },
    { time: "12:00", result: "Tím", accuracy: "67%" },
  ];
  
  // Dữ liệu chuyên gia
  const experts = [
    {
      id: 1,
      name: "Nguyễn Văn Minh",
      avatar: "/anh/avata/no1.png",
      specialty: "Win Go",
      accuracy: "82%",
      predictions: 1245
    },
    {
      id: 2,
      name: "Trần Thị Hương",
      avatar: "/anh/avata/no2.png",
      specialty: "K3 Lotre",
      accuracy: "79%",
      predictions: 987
    },
    {
      id: 3,
      name: "Lê Quang Đạt",
      avatar: "/anh/avata/no3.png",
      specialty: "5D Lotre",
      accuracy: "76%",
      predictions: 1102
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
          <h1 className="text-2xl font-bold text-[#bc2022] mb-4">Trung tâm Dự đoán 92LOTTERY</h1>
          
          {/* Game Tabs */}
          <div className="mb-6">
            <div className="flex overflow-x-auto space-x-2 py-2 mb-4">
              <button className="px-4 py-2 bg-[#bc2022] text-white rounded-full whitespace-nowrap">Win Go</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">K3 Lotre</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">5D Lotre</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">TRX Win</button>
            </div>
          </div>
          
          {/* Win Go Predictions */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Dự đoán Win Go</h2>
              <span className="text-sm text-gray-500">Cập nhật: 10:00, 15/11/2023</span>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-200 p-3 font-medium">
                <div>Thời gian</div>
                <div>Dự đoán</div>
                <div>Độ chính xác</div>
              </div>
              
              {winGoPredictions.map((prediction, index) => (
                <div key={index} className={`grid grid-cols-3 p-3 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <div>{prediction.time}</div>
                  <div className="font-medium">{prediction.result}</div>
                  <div className="text-green-600">{prediction.accuracy}</div>
                </div>
              ))}
            </div>
            
            {/* Win Go Statistics */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-medium mb-2">Phân bố màu (100 lượt gần nhất)</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-1/3 h-4 bg-red-500 rounded"></div>
                  <div className="w-1/3 h-4 bg-blue-500 rounded"></div>
                  <div className="w-1/6 h-4 bg-purple-500 rounded"></div>
                </div>
                <div className="flex items-center space-x-2 mt-1 text-xs">
                  <span>Đỏ: 42%</span>
                  <span>Xanh: 38%</span>
                  <span>Tím: 20%</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-medium mb-2">Số xuất hiện nhiều nhất</h3>
                <div className="grid grid-cols-5 gap-1">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">7</div>
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">4</div>
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">9</div>
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">2</div>
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">5</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <Link href="/du-doan/win-go" className="text-[#bc2022] font-medium flex items-center">
                Xem phân tích chi tiết Win Go
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Expert Predictions */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Dự đoán từ Chuyên gia</h2>
            
            <div className="space-y-4">
              {experts.map(expert => (
                <div key={expert.id} className="border border-gray-200 rounded-lg p-4 flex items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={expert.avatar} 
                      alt={expert.name}
                      fill
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold">{expert.name}</h3>
                    <p className="text-sm text-gray-600">Chuyên gia {expert.specialty}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-green-600 mr-3">Độ chính xác: {expert.accuracy}</span>
                      <span className="text-sm text-gray-500">Dự đoán: {expert.predictions}</span>
                    </div>
                  </div>
                  
                  <Link href={`/du-doan/chuyen-gia/${expert.id}`} className="px-3 py-1 bg-[#bc2022] text-white rounded-lg text-sm">
                    Theo dõi
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Prediction Tools */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Công cụ Phân tích</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <Link href="/du-doan/thong-ke" className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="font-medium mb-1">Thống kê Kết quả</h3>
                <p className="text-sm text-gray-600">Phân tích tần suất và xu hướng kết quả</p>
              </Link>
              
              <Link href="/du-doan/may-tinh" className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="font-medium mb-1">Máy tính Xác suất</h3>
                <p className="text-sm text-gray-600">Tính toán xác suất thắng và ROI</p>
              </Link>
              
              <Link href="/du-doan/lich-su" className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-medium mb-1">Lịch sử Kết quả</h3>
                <p className="text-sm text-gray-600">Xem lại kết quả các phiên trước</p>
              </Link>
              
              <Link href="/du-doan/tu-van" className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </div>
                <h3 className="font-medium mb-1">Tư vấn Chiến thuật</h3>
                <p className="text-sm text-gray-600">Nhận tư vấn từ chuyên gia</p>
              </Link>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-6">Câu hỏi thường gặp</h2>
            
            <div className="space-y-4">
              {predictionFaqs.map((faq, index) => (
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
