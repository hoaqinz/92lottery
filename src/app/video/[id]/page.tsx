import React from 'react';
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Link from 'next/link';
import Image from 'next/image';
import { generateBreadcrumbSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const runtime = 'edge';

// Dữ liệu video mẫu
const videoData = {
  1: {
    id: 1,
    title: "Hướng dẫn đăng ký tài khoản 92LOTTERY chi tiết A-Z",
    description: "Video hướng dẫn chi tiết cách đăng ký tài khoản 92LOTTERY từ A-Z. Trong video này, bạn sẽ được hướng dẫn từng bước cách tạo tài khoản mới, xác minh thông tin, và nhận khuyến mãi 100K dành cho thành viên mới.",
    thumbnail: "/anh/video/dang-ky-thumbnail.jpg",
    duration: "5:24",
    views: "12.5K",
    date: "15/11/2023",
    category: "Hướng dẫn cơ bản",
    youtubeId: "abc123xyz",
    tags: ["đăng ký", "tài khoản", "hướng dẫn", "khuyến mãi", "92lottery"],
    transcript: "Xin chào các bạn, hôm nay mình sẽ hướng dẫn các bạn cách đăng ký tài khoản 92LOTTERY chi tiết từ A-Z. Đầu tiên, các bạn truy cập vào trang web 92lottery.dev. Sau đó, nhấp vào nút Đăng ký ở góc trên bên phải màn hình. Tiếp theo, các bạn điền đầy đủ thông tin cá nhân bao gồm số điện thoại, mật khẩu, và mã xác nhận. Lưu ý rằng số điện thoại phải là số thật và đang hoạt động vì 92LOTTERY sẽ gửi mã xác nhận qua SMS. Sau khi điền xong thông tin, nhấp vào nút Đăng ký. Hệ thống sẽ gửi mã xác nhận đến số điện thoại của bạn. Nhập mã xác nhận và nhấp vào nút Xác nhận. Vậy là bạn đã đăng ký tài khoản 92LOTTERY thành công! Để nhận khuyến mãi 100K dành cho thành viên mới, bạn cần thực hiện nạp tiền lần đầu với số tiền tối thiểu là 100K. Khuyến mãi sẽ được cộng vào tài khoản của bạn trong vòng 24 giờ. Cảm ơn các bạn đã xem video. Nếu có thắc mắc, hãy để lại bình luận bên dưới. Đừng quên đăng ký kênh để nhận thông báo về các video hướng dẫn mới nhất từ 92LOTTERY."
  },
  3: {
    id: 3,
    title: "Hướng dẫn chơi Win Go cho người mới bắt đầu",
    description: "Video hướng dẫn chi tiết cách chơi Win Go tại 92LOTTERY dành cho người mới bắt đầu. Tìm hiểu luật chơi, các kiểu cược, tỷ lệ trả thưởng và chiến thuật cơ bản để bắt đầu chơi Win Go hiệu quả.",
    thumbnail: "/anh/video/wingo-thumbnail.jpg",
    duration: "8:45",
    views: "15.3K",
    date: "05/11/2023",
    category: "Win Go",
    youtubeId: "ghi789xyz",
    tags: ["win go", "hướng dẫn", "người mới", "luật chơi", "92lottery"],
    transcript: "Xin chào các bạn, hôm nay mình sẽ hướng dẫn các bạn cách chơi Win Go tại 92LOTTERY dành cho người mới bắt đầu. Win Go là trò chơi xổ số 1 phút phổ biến nhất tại 92LOTTERY. Trong trò chơi này, bạn có thể đặt cược vào kết quả số từ 0-9 hoặc màu sắc (Xanh/Đỏ/Tím). Mỗi số sẽ tương ứng với một màu: Số 1, 3, 7, 9 là màu Đỏ; Số 2, 4, 6, 8 là màu Xanh; Số 0, 5 là màu Tím. Tỷ lệ trả thưởng cho mỗi lựa chọn như sau: Đặt số chính xác (0-9) có tỷ lệ 1:9; Đặt màu Đỏ hoặc Xanh có tỷ lệ 1:2; Đặt màu Tím có tỷ lệ 1:4.5. Để bắt đầu chơi, bạn truy cập vào mục Win Go trên trang chủ 92LOTTERY. Sau đó, chọn số tiền cược và lựa chọn đặt cược của bạn (số hoặc màu). Nhấp vào nút Đặt cược để xác nhận. Kết quả sẽ được công bố sau mỗi 1 phút. Nếu dự đoán chính xác, tiền thưởng sẽ được cộng vào tài khoản của bạn ngay lập tức. Một số chiến thuật cơ bản cho người mới: Bắt đầu với số tiền cược nhỏ để làm quen; Theo dõi kết quả trước đó để nhận diện xu hướng; Quản lý vốn cẩn thận, không đặt cược quá 5% tổng vốn cho mỗi lượt. Cảm ơn các bạn đã xem video. Nếu có thắc mắc, hãy để lại bình luận bên dưới. Đừng quên đăng ký kênh để nhận thông báo về các video hướng dẫn mới nhất từ 92LOTTERY."
  }
};

// Dữ liệu video liên quan
const relatedVideos = [
  {
    id: 2,
    title: "Cách nạp tiền và rút tiền nhanh chóng tại 92LOTTERY",
    thumbnail: "/anh/video/nap-rut-thumbnail.jpg",
    duration: "7:12",
    category: "Hướng dẫn cơ bản"
  },
  {
    id: 4,
    title: "Chiến thuật Win Go hiệu quả nhất - Thắng 80%",
    thumbnail: "/anh/video/wingo-strategy-thumbnail.jpg",
    duration: "12:18",
    category: "Win Go"
  },
  {
    id: 7,
    title: "5 chiến thuật quản lý vốn hiệu quả khi chơi xổ số",
    thumbnail: "/anh/video/bankroll-thumbnail.jpg",
    duration: "15:20",
    category: "Chiến thuật"
  }
];

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const videoId = parseInt(params.id);
  const video = videoData[videoId as keyof typeof videoData];

  if (!video) {
    return {
      title: 'Video không tồn tại - 92LOTTERY',
      description: 'Video bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.',
    };
  }

  return {
    title: `${video.title} - Video 92LOTTERY`,
    description: video.description,
    keywords: video.tags,
    alternates: {
      canonical: `https://92lottery.dev/video/${video.id}`,
    },
  };
}

export default function VideoDetailPage({ params }: { params: { id: string } }) {
  const videoId = parseInt(params.id);
  const video = videoData[videoId as keyof typeof videoData];

  if (!video) {
    return (
      <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
        <Header />

        <main className="flex-1 max-w-[420px] mx-auto w-full bg-white pb-16 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-2xl font-bold text-[#bc2022] mb-4">Video không tồn tại</h1>
            <p className="text-gray-600 mb-6">Video bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <Link href="/video" className="px-6 py-3 bg-[#bc2022] text-white rounded-lg font-medium">
              Quay lại trang Video
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
    { name: "Video", url: "https://92lottery.dev/video" },
    { name: video.title, url: `https://92lottery.dev/video/${video.id}` }
  ]);

  // Generate video schema
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "thumbnailUrl": `https://92lottery.dev${video.thumbnail}`,
    "uploadDate": video.date,
    "duration": `PT${video.duration.replace(':', 'M')}S`,
    "contentUrl": `https://92lottery.dev/video/${video.id}`,
    "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`,
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": { "@type": "WatchAction" },
      "userInteractionCount": video.views.replace('K', '000')
    },
    "publisher": {
      "@type": "Organization",
      "name": "92LOTTERY",
      "logo": {
        "@type": "ImageObject",
        "url": "https://92lottery.dev/anh/favicon.png",
        "width": "112",
        "height": "112"
      }
    }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <Header />

      <main className="flex-1 max-w-[420px] mx-auto w-full bg-white pb-16">
        <div className="p-4">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#bc2022]">Trang chủ</Link>
            <span className="mx-2">/</span>
            <Link href="/video" className="hover:text-[#bc2022]">Video</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 truncate">{video.title}</span>
          </div>

          {/* Video Player */}
          <div className="mb-6">
            <div className="relative w-full pt-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video Info */}
          <div className="mb-6">
            <h1 className="text-xl font-bold mb-2">{video.title}</h1>

            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>{video.views} lượt xem</span>
              <span className="mx-2">•</span>
              <span>{video.date}</span>
              <span className="mx-2">•</span>
              <span className="text-[#bc2022]">{video.category}</span>
            </div>

            <div className="flex space-x-3 mb-4">
              <button className="flex items-center space-x-1 text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
                <span>Thích</span>
              </button>

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

            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="font-bold mb-2">Mô tả:</h2>
              <p className="text-gray-700 text-sm">{video.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {video.tags.map((tag, index) => (
                  <Link
                    href={`/video/tag/${tag}`}
                    key={index}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs hover:bg-gray-300"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Channel Info */}
          <div className="mb-6 flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden relative mr-3">
              <Image
                src="/anh/favicon.png"
                alt="92LOTTERY Channel"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">92LOTTERY Official</h3>
              <p className="text-sm text-gray-600">50K+ người đăng ký</p>
            </div>
            <a
              href="https://www.youtube.com/channel/92lottery"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 bg-red-600 text-white rounded-lg text-sm font-medium"
            >
              Đăng ký
            </a>
          </div>

          {/* Transcript */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-3">Phụ đề video</h2>
            <div className="bg-gray-50 p-4 rounded-lg max-h-60 overflow-y-auto">
              <p className="text-gray-700 text-sm whitespace-pre-line">{video.transcript}</p>
            </div>
          </div>

          {/* Related Videos */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Video liên quan</h2>

            <div className="space-y-4">
              {relatedVideos.map(video => (
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
                      <span className="text-xs text-[#bc2022] mt-1 block">{video.category}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-4">
              <Link href="/video" className="text-[#bc2022] font-medium flex items-center">
                Xem tất cả video
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Comments */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Bình luận (24)</h2>

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
                  <p className="text-sm text-gray-700 mb-2">Video rất hữu ích, cảm ơn admin đã chia sẻ!</p>
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
                  <p className="text-sm text-gray-700 mb-2">Mình đã áp dụng và thắng lớn. Cảm ơn 92LOTTERY!</p>
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
