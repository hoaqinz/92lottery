import React from 'react';
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Link from 'next/link';
import Image from 'next/image';
import { generateBreadcrumbSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const runtime = 'edge';

// Dữ liệu infographic mẫu
const infographicData = {
  1: {
    id: 1,
    title: "Phân tích xu hướng Win Go tháng 5/2025",
    image: "/anh/infographic/wingo-trend-analysis.jpg",
    description: "Phân tích chi tiết xu hướng kết quả Win Go trong tháng 5/2025, bao gồm tần suất xuất hiện của các số và màu, chuỗi kết quả, và thời điểm xuất hiện.",
    content: "Infographic này phân tích chi tiết xu hướng kết quả Win Go trong tháng 5/2025 dựa trên dữ liệu từ hơn 43,200 lượt quay (30 ngày x 24 giờ x 60 phút). Các phát hiện chính bao gồm:\n\n1. Phân bố màu: Đỏ (41.2%), Xanh (39.8%), Tím (19.0%)\n\n2. Số xuất hiện nhiều nhất: 7 (Đỏ) - 11.3%, 4 (Xanh) - 10.8%, 9 (Đỏ) - 10.5%\n\n3. Số xuất hiện ít nhất: 0 (Tím) - 9.2%, 5 (Tím) - 9.8%, 2 (Xanh) - 9.9%\n\n4. Chuỗi màu dài nhất: Đỏ - 8 lần liên tiếp, Xanh - 7 lần liên tiếp, Tím - 3 lần liên tiếp\n\n5. Thời điểm xuất hiện màu Tím nhiều nhất: 20:00 - 22:00\n\n6. Tỷ lệ chẵn/lẻ: Chẵn (49.7%), Lẻ (50.3%)\n\n7. Tỷ lệ lớn/nhỏ: Lớn (50.5%), Nhỏ (49.5%)\n\nDựa trên phân tích này, chúng tôi đề xuất một số chiến thuật cá cược:\n\n- Đặt cược vào màu Đỏ trong khung giờ 8:00 - 12:00\n- Đặt cược vào màu Xanh trong khung giờ 14:00 - 18:00\n- Đặt cược vào màu Tím trong khung giờ 20:00 - 22:00\n- Sử dụng chiến thuật Martingale với giới hạn 3 lần gấp đôi\n- Theo dõi chuỗi 3 lần Đỏ hoặc Xanh liên tiếp và đặt cược ngược lại\n\nLưu ý: Đây là phân tích dựa trên dữ liệu lịch sử và không đảm bảo kết quả trong tương lai. Luôn chơi có trách nhiệm và quản lý vốn cẩn thận.",
    category: "Win Go",
    date: "12/05/2025",
    author: "Chuyên gia 92LOTTERY",
    downloads: 1245,
    tags: ["win go", "phân tích", "xu hướng", "thống kê", "chiến thuật"]
  },
  2: {
    id: 2,
    title: "So sánh tỷ lệ thắng giữa các trò chơi tại 92LOTTERY",
    image: "/anh/infographic/win-rate-comparison.jpg",
    description: "So sánh trực quan tỷ lệ thắng giữa các trò chơi tại 92LOTTERY, giúp người chơi lựa chọn trò chơi phù hợp với chiến thuật và mục tiêu của mình.",
    content: "Infographic này so sánh chi tiết tỷ lệ thắng giữa các trò chơi tại 92LOTTERY dựa trên dữ liệu từ hơn 1 triệu lượt chơi trong tháng 10/2023. Các phát hiện chính bao gồm:\n\n1. Tỷ lệ thắng theo trò chơi:\n   - Win Go: 48.2%\n   - K3 Lotre: 47.5%\n   - 5D Lotre: 46.8%\n   - TRX Win: 49.1%\n\n2. Tỷ lệ thắng theo kiểu cược (Win Go):\n   - Đặt màu Đỏ/Xanh: 48.5%\n   - Đặt màu Tím: 19.2%\n   - Đặt số chính xác: 9.8%\n\n3. Tỷ lệ thắng theo kiểu cược (K3 Lotre):\n   - Đặt Lớn/Nhỏ: 49.2%\n   - Đặt Lẻ/Chẵn: 49.5%\n   - Đặt tổng 3 số: 33.3%\n\n4. Tỷ lệ thắng theo chiến thuật:\n   - Martingale (3 lần gấp đôi): 87.5%\n   - D'Alembert: 62.3%\n   - Fibonacci: 58.7%\n   - Đặt cược đơn: 48.2%\n\n5. ROI (Return on Investment) trung bình:\n   - Win Go: 96.4%\n   - K3 Lotre: 95.8%\n   - 5D Lotre: 94.2%\n   - TRX Win: 97.3%\n\nDựa trên phân tích này, chúng tôi đề xuất:\n\n- Người mới nên bắt đầu với Win Go hoặc TRX Win do có tỷ lệ thắng cao nhất\n- Sử dụng chiến thuật Martingale với giới hạn 3 lần gấp đôi để tăng tỷ lệ thắng\n- Đặt cược vào Lớn/Nhỏ hoặc Lẻ/Chẵn trong K3 Lotre để có tỷ lệ thắng cao nhất\n- Tránh đặt cược vào số chính xác trong Win Go nếu bạn mới bắt đầu\n\nLưu ý: Đây là phân tích dựa trên dữ liệu lịch sử và không đảm bảo kết quả trong tương lai. Luôn chơi có trách nhiệm và quản lý vốn cẩn thận.",
    category: "So sánh",
    date: "10/11/2023",
    author: "Chuyên gia 92LOTTERY",
    downloads: 987,
    tags: ["so sánh", "tỷ lệ thắng", "ROI", "chiến thuật", "phân tích"]
  }
};

// Dữ liệu infographic liên quan
const relatedInfographics = [
  {
    id: 3,
    title: "Thống kê kết quả Win Go 100 lượt gần nhất",
    image: "/anh/infographic/wingo-statistics.jpg",
    category: "Win Go"
  },
  {
    id: 7,
    title: "5 chiến thuật quản lý vốn hiệu quả",
    image: "/anh/infographic/bankroll-management.jpg",
    category: "Chiến thuật"
  },
  {
    id: 8,
    title: "Chiến thuật Martingale cho Win Go",
    image: "/anh/infographic/martingale-strategy.jpg",
    category: "Chiến thuật"
  }
];

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const infographicId = parseInt(params.id);
  const infographic = infographicData[infographicId as keyof typeof infographicData];

  if (!infographic) {
    return {
      title: 'Infographic không tồn tại - 92LOTTERY',
      description: 'Infographic bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.',
    };
  }

  return {
    title: `${infographic.title} - Infographic 92LOTTERY`,
    description: infographic.description,
    keywords: infographic.tags,
    alternates: {
      canonical: `https://92lottery.dev/infographic/${infographic.id}`,
    },
  };
}

export default function InfographicDetailPage({ params }: { params: { id: string } }) {
  const infographicId = parseInt(params.id);
  const infographic = infographicData[infographicId as keyof typeof infographicData];

  if (!infographic) {
    return (
      <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
        <Header />

        <main className="flex-1 max-w-[420px] mx-auto w-full bg-white pb-16 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-2xl font-bold text-[#bc2022] mb-4">Infographic không tồn tại</h1>
            <p className="text-gray-600 mb-6">Infographic bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <Link href="/infographic" className="px-6 py-3 bg-[#bc2022] text-white rounded-lg font-medium">
              Quay lại trang Infographic
            </Link>
          </div>
        </main>

        <TabBar />
      </div>
    );
  }

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Infographic", url: "https://92lottery.dev/infographic" },
    { name: infographic.title, url: `https://92lottery.dev/infographic/${infographic.id}` }
  ]);

  // Generate image schema
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": `https://92lottery.dev${infographic.image}`,
    "name": infographic.title,
    "description": infographic.description,
    "datePublished": infographic.date,
    "creator": {
      "@type": "Organization",
      "name": "92LOTTERY"
    },
    "copyrightNotice": "© 92LOTTERY",
    "license": "https://92lottery.dev/terms"
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />

      <Header />

      <main className="flex-1 max-w-[420px] mx-auto w-full bg-white pb-16">
        <div className="p-4">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#bc2022]">Trang chủ</Link>
            <span className="mx-2">/</span>
            <Link href="/infographic" className="hover:text-[#bc2022]">Infographic</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 truncate">{infographic.title}</span>
          </div>

          {/* Infographic Header */}
          <h1 className="text-2xl font-bold text-[#bc2022] mb-4">{infographic.title}</h1>

          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{infographic.date}</span>
            <span className="mx-2">•</span>
            <span>{infographic.author}</span>
            <span className="mx-2">•</span>
            <span className="text-[#bc2022]">{infographic.category}</span>
          </div>

          {/* Infographic Image */}
          <div className="mb-6">
            <div className="relative w-full pt-[100%] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={infographic.image}
                alt={infographic.title}
                fill
                style={{objectFit: 'contain'}}
                priority
              />
            </div>

            <div className="flex justify-between mt-4">
              <button className="flex items-center space-x-1 text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                <span>Tải xuống</span>
              </button>

              <div className="flex space-x-3">
                <button className="flex items-center space-x-1 text-gray-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                  <span>Chia sẻ</span>
                </button>

                <button className="flex items-center space-x-1 text-gray-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                  </svg>
                  <span>Lưu</span>
                </button>
              </div>
            </div>
          </div>

          {/* Infographic Info */}
          <div className="mb-6">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h2 className="font-bold mb-2">Mô tả:</h2>
              <p className="text-gray-700 text-sm">{infographic.description}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="font-bold mb-2">Nội dung chi tiết:</h2>
              <div className="text-gray-700 text-sm whitespace-pre-line">
                {infographic.content}
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h2 className="font-bold mb-2">Tags:</h2>
            <div className="flex flex-wrap gap-2">
              {infographic.tags.map((tag, index) => (
                <Link
                  href={`/infographic/tag/${tag}`}
                  key={index}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs hover:bg-gray-300"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Download Stats */}
          <div className="mb-8 bg-gray-50 p-4 rounded-lg flex items-center justify-between">
            <div>
              <h3 className="font-bold">Lượt tải:</h3>
              <p className="text-gray-700">{infographic.downloads}</p>
            </div>
            <button className="px-4 py-2 bg-[#bc2022] text-white rounded-lg text-sm font-medium flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Tải xuống
            </button>
          </div>

          {/* Related Infographics */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Infographic liên quan</h2>

            <div className="grid grid-cols-1 gap-4">
              {relatedInfographics.map(infographic => (
                <Link href={`/infographic/${infographic.id}`} key={infographic.id} className="block">
                  <div className="flex border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-24 w-24 flex-shrink-0">
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
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-4">
              <Link href="/infographic" className="text-[#bc2022] font-medium flex items-center">
                Xem tất cả infographic
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Comments */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Bình luận (8)</h2>

            <div className="mb-4 flex">
              <div className="w-10 h-10 rounded-full overflow-hidden relative mr-3 flex-shrink-0">
                <Image
                  src="/anh/avata/no1.png"
                  alt="User Avatar"
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Viết bình luận..."
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-4">
              {/* Comment 1 */}
              <div className="flex">
                <div className="w-10 h-10 rounded-full overflow-hidden relative mr-3 flex-shrink-0">
                  <Image
                    src="/anh/avata/no2.png"
                    alt="User Avatar"
                    fill
                    style={{objectFit: 'cover'}}
                  />
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <h4 className="font-bold text-sm">Nguyễn Văn A</h4>
                    <span className="text-xs text-gray-500 ml-2">2 ngày trước</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Infographic rất hữu ích, cảm ơn admin đã chia sẻ!</p>
                  <div className="flex items-center text-xs text-gray-500 space-x-4">
                    <button className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                      </svg>
                      12
                    </button>
                    <button>Phản hồi</button>
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="flex">
                <div className="w-10 h-10 rounded-full overflow-hidden relative mr-3 flex-shrink-0">
                  <Image
                    src="/anh/avata/no3.png"
                    alt="User Avatar"
                    fill
                    style={{objectFit: 'cover'}}
                  />
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <h4 className="font-bold text-sm">Trần Thị B</h4>
                    <span className="text-xs text-gray-500 ml-2">1 tuần trước</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Mình đã áp dụng chiến thuật này và thắng lớn. Cảm ơn 92LOTTERY!</p>
                  <div className="flex items-center text-xs text-gray-500 space-x-4">
                    <button className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                      </svg>
                      8
                    </button>
                    <button>Phản hồi</button>
                  </div>
                </div>
              </div>
            </div>

            <button className="mt-4 w-full py-2 border border-gray-300 rounded-lg text-gray-700 font-medium">
              Xem thêm bình luận
            </button>
          </div>
        </div>
      </main>

      <TabBar />
    </div>
  );
}
