import React from 'react';
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Link from 'next/link';
import Image from 'next/image';
import { generateBreadcrumbSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Người chơi 92LOTTERY - Theo dõi & Học hỏi từ Cao thủ',
  description: 'Khám phá và theo dõi những người chơi giỏi nhất tại 92LOTTERY. Học hỏi chiến thuật, xem phiếu cược và tương tác với cộng đồng người chơi.',
  keywords: ['92lottery người chơi', 'cao thủ 92lottery', 'theo dõi người chơi', 'bảng xếp hạng 92lottery', 'chiến thuật cá cược', 'học hỏi từ cao thủ'],
  alternates: {
    canonical: 'https://92lottery.dev/cong-dong/nguoi-choi',
  },
};

export default function PlayersPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Cộng đồng", url: "https://92lottery.dev/cong-dong" },
    { name: "Người chơi", url: "https://92lottery.dev/cong-dong/nguoi-choi" }
  ]);
  
  // Dữ liệu người chơi hàng đầu
  const topPlayers = [
    {
      id: 1,
      name: "Win_Master",
      avatar: "/anh/avata/no1.png",
      winRate: "78%",
      followers: 1245,
      specialty: "Win Go",
      level: "VIP 10",
      winStreak: 12,
      totalProfit: "+500M"
    },
    {
      id: 2,
      name: "Lucky_K3",
      avatar: "/anh/avata/no2.png",
      winRate: "72%",
      followers: 987,
      specialty: "K3 Lotre",
      level: "VIP 8",
      winStreak: 8,
      totalProfit: "+350M"
    },
    {
      id: 3,
      name: "5D_King",
      avatar: "/anh/avata/no3.png",
      winRate: "75%",
      followers: 1102,
      specialty: "5D Lotre",
      level: "VIP 9",
      winStreak: 10,
      totalProfit: "+420M"
    }
  ];
  
  // Dữ liệu người chơi đang theo dõi
  const followingPlayers = [
    {
      id: 4,
      name: "TRX_Expert",
      avatar: "/anh/avata/no4.png",
      winRate: "71%",
      followers: 856,
      specialty: "TRX Win",
      level: "VIP 7",
      lastActive: "5 phút trước"
    },
    {
      id: 5,
      name: "Casino_Queen",
      avatar: "/anh/avata/no5.png",
      winRate: "69%",
      followers: 723,
      specialty: "Casino",
      level: "VIP 6",
      lastActive: "30 phút trước"
    }
  ];
  
  // Dữ liệu người chơi đề xuất
  const suggestedPlayers = [
    {
      id: 6,
      name: "Lottery_Pro",
      avatar: "/anh/avata/no6.png",
      winRate: "73%",
      followers: 912,
      specialty: "Win Go",
      level: "VIP 8"
    },
    {
      id: 7,
      name: "K3_Master",
      avatar: "/anh/avata/no7.png",
      winRate: "70%",
      followers: 845,
      specialty: "K3 Lotre",
      level: "VIP 7"
    },
    {
      id: 8,
      name: "5D_Expert",
      avatar: "/anh/avata/no8.png",
      winRate: "68%",
      followers: 756,
      specialty: "5D Lotre",
      level: "VIP 6"
    },
    {
      id: 9,
      name: "TRX_King",
      avatar: "/anh/avata/no9.png",
      winRate: "67%",
      followers: 689,
      specialty: "TRX Win",
      level: "VIP 6"
    }
  ];
  
  // Dữ liệu bảng xếp hạng
  const rankingCategories = [
    "Tỷ lệ thắng",
    "Lợi nhuận",
    "Chuỗi thắng",
    "Người theo dõi"
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
            <span className="text-gray-700">Người chơi</span>
          </div>
          
          <h1 className="text-2xl font-bold text-[#bc2022] mb-6">Người chơi 92LOTTERY</h1>
          
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Tìm kiếm người chơi..." 
                className="w-full p-3 border border-gray-300 rounded-lg pl-10"
              />
              <svg className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          
          {/* Top Players */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Top 3 Người chơi</h2>
              <Link href="/cong-dong/bang-xep-hang" className="text-sm text-[#bc2022]">Xem bảng xếp hạng</Link>
            </div>
            
            <div className="flex justify-between space-x-2 mb-6">
              {topPlayers.slice(0, 3).map((player, index) => (
                <Link href={`/cong-dong/nguoi-choi/${player.id}`} key={player.id} className="block flex-1">
                  <div className={`border border-gray-200 rounded-lg p-3 text-center ${index === 0 ? 'bg-gradient-to-b from-yellow-50 to-yellow-100 border-yellow-200' : ''}`}>
                    <div className="relative w-16 h-16 mx-auto mb-2">
                      <Image 
                        src={player.avatar} 
                        alt={player.name}
                        fill
                        style={{objectFit: 'cover'}}
                        className="rounded-full"
                      />
                      <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-amber-600'}`}>
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-sm mb-1 truncate">{player.name}</h3>
                    <div className="text-xs text-gray-500 mb-1">{player.level}</div>
                    <div className="text-xs text-green-600 font-medium">{player.winRate}</div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold">Chi tiết Top 1</h3>
                <Link href={`/cong-dong/nguoi-choi/${topPlayers[0].id}`} className="text-xs text-[#bc2022]">Xem hồ sơ</Link>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-gray-500">Tỷ lệ thắng</div>
                  <div className="font-bold">{topPlayers[0].winRate}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Chuyên môn</div>
                  <div className="font-bold">{topPlayers[0].specialty}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Chuỗi thắng</div>
                  <div className="font-bold">{topPlayers[0].winStreak} trận</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Tổng lợi nhuận</div>
                  <div className="font-bold text-green-600">{topPlayers[0].totalProfit}</div>
                </div>
              </div>
              
              <button className="w-full mt-3 py-2 bg-[#bc2022] text-white rounded-lg text-sm font-medium">
                Theo dõi
              </button>
            </div>
          </div>
          
          {/* Following Players */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Đang theo dõi</h2>
            
            {followingPlayers.length > 0 ? (
              <div className="space-y-4">
                {followingPlayers.map(player => (
                  <Link href={`/cong-dong/nguoi-choi/${player.id}`} key={player.id} className="block">
                    <div className="border border-gray-200 rounded-lg p-4 flex items-center hover:shadow-md transition-shadow">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image 
                          src={player.avatar} 
                          alt={player.name}
                          fill
                          style={{objectFit: 'cover'}}
                        />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h3 className="font-bold">{player.name}</h3>
                          <span className="ml-2 text-xs px-2 py-0.5 bg-gray-200 rounded-full">{player.level}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <span className="text-green-600 mr-3">Tỷ lệ thắng: {player.winRate}</span>
                          <span>Chuyên: {player.specialty}</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-xs text-gray-500">{player.lastActive}</div>
                        <button className="mt-1 px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs">
                          Đang theo dõi
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <p className="text-gray-500 mb-3">Bạn chưa theo dõi ai</p>
                <p className="text-sm text-gray-500 mb-4">Theo dõi người chơi giỏi để học hỏi chiến thuật và nhận thông báo khi họ chia sẻ phiếu cược mới</p>
                <Link href="/cong-dong/bang-xep-hang" className="px-4 py-2 bg-[#bc2022] text-white rounded-lg text-sm font-medium">
                  Khám phá người chơi
                </Link>
              </div>
            )}
          </div>
          
          {/* Suggested Players */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Đề xuất cho bạn</h2>
            
            <div className="space-y-4">
              {suggestedPlayers.map(player => (
                <Link href={`/cong-dong/nguoi-choi/${player.id}`} key={player.id} className="block">
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center hover:shadow-md transition-shadow">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image 
                        src={player.avatar} 
                        alt={player.name}
                        fill
                        style={{objectFit: 'cover'}}
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="font-bold">{player.name}</h3>
                        <span className="ml-2 text-xs px-2 py-0.5 bg-gray-200 rounded-full">{player.level}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span className="text-green-600 mr-3">Tỷ lệ thắng: {player.winRate}</span>
                        <span>Chuyên: {player.specialty}</span>
                      </div>
                    </div>
                    
                    <button className="px-3 py-1 bg-[#bc2022] text-white rounded text-xs">
                      Theo dõi
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Ranking Categories */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Bảng xếp hạng</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {rankingCategories.map((category, index) => (
                <Link href={`/cong-dong/bang-xep-hang?category=${category.toLowerCase().replace(' ', '-')}`} key={index} className="block">
                  <div className="border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 mx-auto mb-2 bg-[#bc2022] bg-opacity-10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#bc2022]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {index === 0 ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        ) : index === 1 ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        ) : index === 2 ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        )}
                      </svg>
                    </div>
                    <h3 className="font-medium text-sm">{category}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Benefits of Following */}
          <div className="mb-8 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-3">Lợi ích khi theo dõi</h2>
            
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#bc2022] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Nhận thông báo khi họ chia sẻ phiếu cược mới</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#bc2022] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Học hỏi chiến thuật từ những người chơi giỏi nhất</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#bc2022] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Xem lịch sử cược và phân tích xu hướng</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#bc2022] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Tương tác và trao đổi kinh nghiệm</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#bc2022] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Tăng cơ hội thắng cược với chiến thuật đã được chứng minh</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <TabBar />
    </div>
  );
}
