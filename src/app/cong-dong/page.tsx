import React from 'react';
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Link from 'next/link';
import Image from 'next/image';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cộng đồng 92LOTTERY - Diễn đàn, Chia sẻ & Thảo luận',
  description: 'Tham gia cộng đồng 92LOTTERY để thảo luận chiến thuật, chia sẻ kinh nghiệm, theo dõi người chơi giỏi và tham gia các sự kiện cộng đồng hấp dẫn.',
  keywords: ['92lottery cộng đồng', 'diễn đàn 92lottery', 'chia sẻ kinh nghiệm cá cược', 'thảo luận chiến thuật', 'theo dõi người chơi', 'sự kiện 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/cong-dong',
  },
};

// FAQ cho trang cộng đồng
const communityFaqs = [
  {
    question: "Làm thế nào để tham gia cộng đồng 92LOTTERY?",
    answer: "Để tham gia cộng đồng 92LOTTERY, bạn cần có tài khoản 92LOTTERY. Sau khi đăng nhập, bạn có thể truy cập vào mục Cộng đồng trên trang web hoặc ứng dụng. Tại đây, bạn có thể tham gia diễn đàn, theo dõi người chơi khác, chia sẻ kinh nghiệm và tham gia các sự kiện cộng đồng."
  },
  {
    question: "Tôi có thể chia sẻ phiếu cược của mình như thế nào?",
    answer: "Để chia sẻ phiếu cược, bạn có thể: 1) Vào lịch sử cược và chọn phiếu cược muốn chia sẻ, 2) Nhấp vào nút 'Chia sẻ' bên dưới phiếu cược, 3) Chọn nơi bạn muốn chia sẻ (cộng đồng 92LOTTERY, mạng xã hội, hoặc tạo link), 4) Tùy chọn thêm bình luận hoặc mô tả, 5) Xác nhận chia sẻ. Bạn có thể chọn ẩn/hiện thông tin cá nhân và số tiền cược."
  },
  {
    question: "Làm thế nào để theo dõi người chơi giỏi?",
    answer: "Để theo dõi người chơi giỏi, bạn có thể: 1) Truy cập trang Bảng xếp hạng để xem danh sách người chơi hàng đầu, 2) Vào trang cá nhân của người chơi bạn muốn theo dõi, 3) Nhấp vào nút 'Theo dõi', 4) Bạn sẽ nhận được thông báo khi họ chia sẻ phiếu cược mới hoặc có hoạt động đáng chú ý. Bạn cũng có thể tìm kiếm người chơi theo tên hoặc ID."
  },
  {
    question: "92LOTTERY có tổ chức sự kiện cộng đồng không?",
    answer: "Có, 92LOTTERY thường xuyên tổ chức các sự kiện cộng đồng như: 1) Giải đấu hàng tuần với giải thưởng lớn, 2) Thách đấu giữa các người chơi hàng đầu, 3) Buổi gặp mặt trực tiếp tại các thành phố lớn, 4) Webinar về chiến thuật cá cược, 5) Sự kiện Q&A với chuyên gia. Thông tin về các sự kiện sẽ được thông báo trên trang Cộng đồng và qua email."
  }
];

export default function CommunityPage() {
  // Generate schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Cộng đồng", url: "https://92lottery.dev/cong-dong" }
  ]);
  
  const faqSchema = generateFAQSchema(communityFaqs);
  
  // Dữ liệu người chơi hàng đầu
  const topPlayers = [
    {
      id: 1,
      name: "Win_Master",
      avatar: "/anh/avata/no1.png",
      winRate: "78%",
      followers: 1245,
      specialty: "Win Go"
    },
    {
      id: 2,
      name: "Lucky_K3",
      avatar: "/anh/avata/no2.png",
      winRate: "72%",
      followers: 987,
      specialty: "K3 Lotre"
    },
    {
      id: 3,
      name: "5D_King",
      avatar: "/anh/avata/no3.png",
      winRate: "75%",
      followers: 1102,
      specialty: "5D Lotre"
    }
  ];
  
  // Dữ liệu phiếu cược chia sẻ
  const sharedTickets = [
    {
      id: 1,
      user: {
        name: "Win_Master",
        avatar: "/anh/avata/no1.png"
      },
      game: "Win Go",
      bet: "Đỏ",
      amount: "500K",
      result: "Thắng",
      profit: "+500K",
      time: "15 phút trước",
      likes: 24,
      comments: 5
    },
    {
      id: 2,
      user: {
        name: "Lucky_K3",
        avatar: "/anh/avata/no2.png"
      },
      game: "K3 Lotre",
      bet: "Lớn",
      amount: "1000K",
      result: "Thắng",
      profit: "+1000K",
      time: "30 phút trước",
      likes: 42,
      comments: 8
    },
    {
      id: 3,
      user: {
        name: "5D_King",
        avatar: "/anh/avata/no3.png"
      },
      game: "5D Lotre",
      bet: "1, 5, 7, 9, 0",
      amount: "200K",
      result: "Thua",
      profit: "-200K",
      time: "1 giờ trước",
      likes: 12,
      comments: 3
    }
  ];
  
  // Dữ liệu bài viết diễn đàn
  const forumPosts = [
    {
      id: 1,
      title: "Chiến thuật Win Go hiệu quả nhất tháng 11/2023",
      user: {
        name: "Win_Master",
        avatar: "/anh/avata/no1.png"
      },
      category: "Chiến thuật",
      time: "2 giờ trước",
      views: 324,
      replies: 18
    },
    {
      id: 2,
      title: "Cách quản lý vốn khi chơi K3 Lotre",
      user: {
        name: "Lucky_K3",
        avatar: "/anh/avata/no2.png"
      },
      category: "Kinh nghiệm",
      time: "5 giờ trước",
      views: 256,
      replies: 12
    },
    {
      id: 3,
      title: "Chia sẻ kinh nghiệm thắng lớn tại 5D Lotre",
      user: {
        name: "5D_King",
        avatar: "/anh/avata/no3.png"
      },
      category: "Chia sẻ",
      time: "1 ngày trước",
      views: 512,
      replies: 24
    }
  ];
  
  // Dữ liệu sự kiện cộng đồng
  const communityEvents = [
    {
      id: 1,
      title: "Giải đấu Win Go tuần 46",
      image: "/anh/events/wingo-tournament.jpg",
      date: "20/11/2023",
      time: "20:00",
      prize: "50,000,000 VND",
      participants: 128,
      status: "Sắp diễn ra"
    },
    {
      id: 2,
      title: "Webinar: Chiến thuật cá cược hiệu quả",
      image: "/anh/events/webinar.jpg",
      date: "25/11/2023",
      time: "19:30",
      participants: 256,
      status: "Đăng ký"
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
          <h1 className="text-2xl font-bold text-[#bc2022] mb-4">Cộng đồng 92LOTTERY</h1>
          
          {/* Community Tabs */}
          <div className="mb-6">
            <div className="flex overflow-x-auto space-x-2 py-2 mb-4">
              <button className="px-4 py-2 bg-[#bc2022] text-white rounded-full whitespace-nowrap">Tất cả</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">Diễn đàn</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">Phiếu cược</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">Người chơi</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">Sự kiện</button>
            </div>
          </div>
          
          {/* Top Players */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Người chơi hàng đầu</h2>
              <Link href="/cong-dong/nguoi-choi" className="text-sm text-[#bc2022]">Xem tất cả</Link>
            </div>
            
            <div className="space-y-4">
              {topPlayers.map(player => (
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
                      <h3 className="font-bold">{player.name}</h3>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span className="text-green-600 mr-3">Tỷ lệ thắng: {player.winRate}</span>
                        <span>Chuyên: {player.specialty}</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm font-medium">{player.followers}</div>
                      <div className="text-xs text-gray-500">Người theo dõi</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Shared Tickets */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Phiếu cược chia sẻ</h2>
              <Link href="/cong-dong/phieu-cuoc" className="text-sm text-[#bc2022]">Xem tất cả</Link>
            </div>
            
            <div className="space-y-4">
              {sharedTickets.map(ticket => (
                <div key={ticket.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <Image 
                          src={ticket.user.avatar} 
                          alt={ticket.user.name}
                          fill
                          style={{objectFit: 'cover'}}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">{ticket.user.name}</h3>
                        <p className="text-xs text-gray-500">{ticket.time}</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg mb-3">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{ticket.game}</span>
                        <span className={`text-sm font-medium ${ticket.result === 'Thắng' ? 'text-green-600' : 'text-red-600'}`}>
                          {ticket.result}
                        </span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Cược: {ticket.bet}</span>
                        <span className="text-sm">Tiền cược: {ticket.amount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Lợi nhuận:</span>
                        <span className={`text-sm font-medium ${ticket.profit.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {ticket.profit}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                        </svg>
                        {ticket.likes}
                      </button>
                      <button className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                        {ticket.comments}
                      </button>
                      <button className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                        </svg>
                        Chia sẻ
                      </button>
                      <button className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                        </svg>
                        Lưu
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <button className="w-full py-2.5 bg-[#bc2022] text-white rounded-lg font-medium flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Chia sẻ phiếu cược của bạn
              </button>
            </div>
          </div>
          
          {/* Forum Posts */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Diễn đàn</h2>
              <Link href="/cong-dong/dien-dan" className="text-sm text-[#bc2022]">Xem tất cả</Link>
            </div>
            
            <div className="space-y-4">
              {forumPosts.map(post => (
                <Link href={`/cong-dong/dien-dan/${post.id}`} key={post.id} className="block">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                        <Image 
                          src={post.user.avatar} 
                          alt={post.user.name}
                          fill
                          style={{objectFit: 'cover'}}
                        />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-gray-500">{post.user.name} • {post.time}</span>
                      </div>
                      <span className="text-xs px-2 py-1 bg-gray-200 rounded-full">{post.category}</span>
                    </div>
                    
                    <h3 className="font-bold mb-2">{post.title}</h3>
                    
                    <div className="flex text-xs text-gray-500">
                      <span className="flex items-center mr-4">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        {post.views} lượt xem
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                        {post.replies} phản hồi
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-4">
              <Link 
                href="/cong-dong/dien-dan/tao-bai-viet" 
                className="w-full py-2.5 bg-[#bc2022] text-white rounded-lg font-medium flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Tạo bài viết mới
              </Link>
            </div>
          </div>
          
          {/* Community Events */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Sự kiện cộng đồng</h2>
              <Link href="/cong-dong/su-kien" className="text-sm text-[#bc2022]">Xem tất cả</Link>
            </div>
            
            <div className="space-y-4">
              {communityEvents.map(event => (
                <Link href={`/cong-dong/su-kien/${event.id}`} key={event.id} className="block">
                  <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-40 w-full">
                      <Image 
                        src={event.image} 
                        alt={event.title}
                        fill
                        style={{objectFit: 'cover'}}
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                        <div className="flex items-center text-sm">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          {event.date} • {event.time}
                        </div>
                      </div>
                      <span className="absolute top-2 right-2 bg-[#bc2022] text-white text-xs px-2 py-1 rounded">
                        {event.status}
                      </span>
                    </div>
                    
                    <div className="p-3 flex justify-between items-center">
                      {event.prize && (
                        <div>
                          <span className="text-xs text-gray-500">Giải thưởng:</span>
                          <span className="text-sm font-bold ml-1">{event.prize}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-xs text-gray-500">Người tham gia:</span>
                        <span className="text-sm ml-1">{event.participants}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-6">Câu hỏi thường gặp</h2>
            
            <div className="space-y-4">
              {communityFaqs.map((faq, index) => (
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
