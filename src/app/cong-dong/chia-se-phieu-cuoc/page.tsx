import React from 'react';
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Link from 'next/link';
import Image from 'next/image';
import { generateBreadcrumbSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chia sẻ phiếu cược - 92LOTTERY',
  description: 'Chia sẻ phiếu cược của bạn với cộng đồng 92LOTTERY. Khoe chiến thắng, chia sẻ chiến thuật và kết nối với người chơi khác.',
  keywords: ['92lottery chia sẻ phiếu cược', 'chia sẻ cược', 'phiếu cược 92lottery', 'khoe chiến thắng', 'chiến thuật cá cược'],
  alternates: {
    canonical: 'https://92lottery.dev/cong-dong/chia-se-phieu-cuoc',
  },
};

export default function ShareTicketPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Cộng đồng", url: "https://92lottery.dev/cong-dong" },
    { name: "Chia sẻ phiếu cược", url: "https://92lottery.dev/cong-dong/chia-se-phieu-cuoc" }
  ]);
  
  // Dữ liệu phiếu cược gần đây
  const recentTickets = [
    {
      id: 1,
      game: "Win Go",
      bet: "Đỏ",
      amount: "500K",
      result: "Thắng",
      profit: "+500K",
      time: "15 phút trước"
    },
    {
      id: 2,
      game: "K3 Lotre",
      bet: "Lớn",
      amount: "1000K",
      result: "Thắng",
      profit: "+1000K",
      time: "30 phút trước"
    },
    {
      id: 3,
      game: "5D Lotre",
      bet: "1, 5, 7, 9, 0",
      amount: "200K",
      result: "Thua",
      profit: "-200K",
      time: "1 giờ trước"
    },
    {
      id: 4,
      game: "TRX Win",
      bet: "Xanh",
      amount: "300K",
      result: "Thắng",
      profit: "+300K",
      time: "2 giờ trước"
    },
    {
      id: 5,
      game: "Win Go",
      bet: "7",
      amount: "100K",
      result: "Thua",
      profit: "-100K",
      time: "3 giờ trước"
    }
  ];
  
  // Dữ liệu phiếu cược đã chia sẻ
  const sharedTickets = [
    {
      id: 101,
      game: "Win Go",
      bet: "Đỏ",
      amount: "500K",
      result: "Thắng",
      profit: "+500K",
      time: "2 ngày trước",
      likes: 24,
      comments: 5,
      shares: 3
    },
    {
      id: 102,
      game: "K3 Lotre",
      bet: "Lớn",
      amount: "1000K",
      result: "Thắng",
      profit: "+1000K",
      time: "3 ngày trước",
      likes: 42,
      comments: 8,
      shares: 7
    }
  ];
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <Header />
      
      <main className="flex-1 max-w-[420px] mx-auto w-full bg-white pb-16">
        <div className="p-4">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#bc2022]">Trang chủ</Link>
            <span className="mx-2">/</span>
            <Link href="/cong-dong" className="hover:text-[#bc2022]">Cộng đồng</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Chia sẻ phiếu cược</span>
          </div>
          
          <h1 className="text-2xl font-bold text-[#bc2022] mb-6">Chia sẻ phiếu cược</h1>
          
          {/* Recent Tickets */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Phiếu cược gần đây</h2>
            
            <div className="space-y-4">
              {recentTickets.map(ticket => (
                <div key={ticket.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between mb-3">
                      <span className="text-sm font-medium">{ticket.game}</span>
                      <span className="text-xs text-gray-500">{ticket.time}</span>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg mb-3">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Cược: {ticket.bet}</span>
                        <span className={`text-sm font-medium ${ticket.result === 'Thắng' ? 'text-green-600' : 'text-red-600'}`}>
                          {ticket.result}
                        </span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Tiền cược: {ticket.amount}</span>
                        <span className={`text-sm font-medium ${ticket.profit.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {ticket.profit}
                        </span>
                      </div>
                    </div>
                    
                    <button className="w-full py-2 bg-[#bc2022] text-white rounded-lg font-medium">
                      Chia sẻ phiếu cược này
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <Link href="/lich-su-cuoc" className="text-[#bc2022] font-medium flex items-center justify-center">
                Xem tất cả phiếu cược
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Share Options */}
          <div className="mb-8 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Tùy chọn chia sẻ</h2>
            
            <div className="space-y-4">
              <div>
                <label className="flex items-center mb-2">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-[#bc2022]" />
                  <span className="ml-2 text-sm">Hiển thị tên người chơi</span>
                </label>
                <p className="text-xs text-gray-500 ml-7">Người khác sẽ thấy tên người chơi của bạn khi xem phiếu cược</p>
              </div>
              
              <div>
                <label className="flex items-center mb-2">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-[#bc2022]" />
                  <span className="ml-2 text-sm">Hiển thị số tiền cược</span>
                </label>
                <p className="text-xs text-gray-500 ml-7">Người khác sẽ thấy số tiền cược và lợi nhuận của bạn</p>
              </div>
              
              <div>
                <label className="flex items-center mb-2">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-[#bc2022]" checked />
                  <span className="ml-2 text-sm">Cho phép bình luận</span>
                </label>
                <p className="text-xs text-gray-500 ml-7">Người khác có thể bình luận về phiếu cược của bạn</p>
              </div>
              
              <div>
                <label className="flex items-center mb-2">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-[#bc2022]" checked />
                  <span className="ml-2 text-sm">Cho phép chia sẻ lại</span>
                </label>
                <p className="text-xs text-gray-500 ml-7">Người khác có thể chia sẻ lại phiếu cược của bạn</p>
              </div>
            </div>
          </div>
          
          {/* Share Platforms */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Chia sẻ đến</h2>
            
            <div className="grid grid-cols-4 gap-4">
              <button className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#bc2022] rounded-full flex items-center justify-center mb-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                  </svg>
                </div>
                <span className="text-xs">Cộng đồng</span>
              </button>
              
              <button className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </div>
                <span className="text-xs">Facebook</span>
              </button>
              
              <button className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mb-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </div>
                <span className="text-xs">Twitter</span>
              </button>
              
              <button className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.077.622.01.902c.162.522.611 1.29.911 1.978l.122.283c.311.675.638 1.325.88 1.825.242.5.484.911.484.911.25.46.458.853.693.998.068.04.161.058.242.076.345.108.7-.038.951-.238l2.463-1.955.018-.015 1.54-1.25c.202.13.427.272.657.408.505.296 1.039.569 1.543.798.973.447 1.924.7 2.607.456l.074-.03c.271-.11.502-.35.602-.635.1-.285.113-.612.034-.897-.156-.57-.704-1.03-1.614-1.536l-1.174-.656c-.69-.386-1.487-.827-2.185-1.308-.31-.212-.582-.416-.79-.58l1.9-.77c.663-.27 1.34-.544 1.959-.8 1.328-.552 2.413-1.006 2.784-1.166.478-.208.595-.554.605-.83.009-.276-.09-.564-.365-.78-.276-.216-.68-.322-1.08-.339zM7.684 18.32a2.63 2.63 0 0 1-.7.059l-.031-.01c-.11-.03-.21-.09-.29-.189-.09-.11-.15-.26-.181-.43-.064-.33-.01-.75.08-1.214.54-2.777 1.595-6.69 1.655-6.94l.01-.04c.003-.01.008-.022.012-.033.227-.62.057-1.019-.172-1.156-.234-.137-.615-.077-1.125.123l-1.946.746c.035-.171.06-.343.085-.517.058-.327.116-.67.195-1.038.16-.728.34-1.518.55-2.318.403-1.531.876-3.102 1.384-4.39L13.345 4.3c.264.221.506.453.728.701 1.527 1.696 2.625 3.903 3.263 5.86l-5.793 7.059a4.113 4.113 0 0 1-.939.799c-.534.337-1.716 1.02-2.92-.398z"></path>
                  </svg>
                </div>
                <span className="text-xs">Telegram</span>
              </button>
            </div>
            
            <div className="mt-6">
              <div className="relative">
                <input 
                  type="text" 
                  value="https://92lottery.dev/share/ticket/12345"
                  readOnly
                  className="w-full p-3 pr-20 border border-gray-300 rounded-lg"
                />
                <button className="absolute right-2 top-2 px-4 py-1 bg-[#bc2022] text-white rounded text-sm">
                  Sao chép
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Sao chép liên kết để chia sẻ phiếu cược này</p>
            </div>
          </div>
          
          {/* Previously Shared Tickets */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Phiếu cược đã chia sẻ</h2>
            
            <div className="space-y-4">
              {sharedTickets.map(ticket => (
                <div key={ticket.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between mb-3">
                      <span className="text-sm font-medium">{ticket.game}</span>
                      <span className="text-xs text-gray-500">{ticket.time}</span>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg mb-3">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Cược: {ticket.bet}</span>
                        <span className={`text-sm font-medium ${ticket.result === 'Thắng' ? 'text-green-600' : 'text-red-600'}`}>
                          {ticket.result}
                        </span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Tiền cược: {ticket.amount}</span>
                        <span className={`text-sm font-medium ${ticket.profit.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {ticket.profit}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                        </svg>
                        {ticket.likes} lượt thích
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                        {ticket.comments} bình luận
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                        </svg>
                        {ticket.shares} chia sẻ
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tips for Sharing */}
          <div className="mb-8 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-3">Mẹo chia sẻ hiệu quả</h2>
            
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#bc2022] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Chia sẻ cả phiếu thắng và thua để tăng độ tin cậy</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#bc2022] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Thêm bình luận về chiến thuật bạn đã sử dụng</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#bc2022] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Tương tác với bình luận để xây dựng cộng đồng</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#bc2022] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Chia sẻ đều đặn để xây dựng người theo dõi</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#bc2022] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Theo dõi người chơi khác để học hỏi chiến thuật mới</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <TabBar />
    </div>
  );
}
