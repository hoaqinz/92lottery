import React from 'react';
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Link from 'next/link';
import Image from 'next/image';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog 92LOTTERY - Tin tức, Phân tích & Hướng dẫn Cá cược',
  description: 'Blog chính thức của 92LOTTERY cung cấp tin tức, phân tích chuyên sâu, chiến thuật cá cược và hướng dẫn chi tiết về xổ số, casino và các trò chơi tại 92LOTTERY.',
  keywords: ['92lottery blog', 'blog 92lottery', 'tin tức 92lottery', 'phân tích cá cược', 'chiến thuật xổ số', 'hướng dẫn 92lottery', 'kinh nghiệm cá cược'],
  alternates: {
    canonical: 'https://92lottery.dev/blog',
  },
};

// Dữ liệu bài viết mẫu
const blogPosts = [
  {
    id: 1,
    title: 'Chiến thuật Win Go hiệu quả nhất tại 92LOTTERY',
    slug: 'chien-thuat-win-go-hieu-qua-nhat',
    excerpt: 'Khám phá những chiến thuật Win Go hiệu quả nhất giúp tăng tỷ lệ thắng tại 92LOTTERY. Phân tích dữ liệu, nhận diện mẫu và áp dụng quản lý vốn thông minh.',
    image: '/anh/blog/win-go-strategy.jpg',
    category: 'Chiến thuật',
    date: '2025-05-10',
    author: 'Chuyên gia 92LOTTERY',
    readTime: '8 phút đọc'
  },
  {
    id: 2,
    title: 'Hướng dẫn chi tiết cách chơi K3 Lotre cho người mới',
    slug: 'huong-dan-chi-tiet-cach-choi-k3-lotre',
    excerpt: 'Bài viết hướng dẫn chi tiết cách chơi K3 Lotre từ A-Z dành cho người mới. Tìm hiểu luật chơi, các kiểu cược và chiến thuật cơ bản để bắt đầu.',
    image: '/anh/blog/k3-lotre-guide.jpg',
    category: 'Hướng dẫn',
    date: '2025-05-05',
    author: 'Chuyên gia 92LOTTERY',
    readTime: '10 phút đọc'
  },
  {
    id: 3,
    title: 'Phân tích xu hướng xổ số 5D Lotre trong tháng 4/2025',
    slug: 'phan-tich-xu-huong-xo-so-5d-lotre',
    excerpt: 'Phân tích chuyên sâu về xu hướng kết quả 5D Lotre trong tháng 4/2025. Thống kê số ra nhiều, ít và các mẫu xuất hiện thường xuyên.',
    image: '/anh/blog/5d-lotre-analysis.jpg',
    category: 'Phân tích',
    date: '2025-04-28',
    author: 'Chuyên gia 92LOTTERY',
    readTime: '12 phút đọc'
  },
  {
    id: 4,
    title: 'Cách quản lý vốn hiệu quả khi chơi xổ số tại 92LOTTERY',
    slug: 'cach-quan-ly-von-hieu-qua',
    excerpt: 'Bài viết chia sẻ các phương pháp quản lý vốn hiệu quả khi chơi xổ số tại 92LOTTERY. Áp dụng ngay để tối ưu hóa lợi nhuận và giảm thiểu rủi ro.',
    image: '/anh/blog/bankroll-management.jpg',
    category: 'Chiến thuật',
    date: '2023-10-28',
    author: 'Chuyên gia 92LOTTERY',
    readTime: '9 phút đọc'
  },
  {
    id: 5,
    title: 'Top 10 người chơi thắng lớn nhất tại 92LOTTERY tháng 10/2023',
    slug: 'top-10-nguoi-choi-thang-lon-nhat',
    excerpt: 'Điểm danh top 10 người chơi thắng lớn nhất tại 92LOTTERY trong tháng 10/2023. Tìm hiểu chiến thuật và bí quyết thành công của họ.',
    image: '/anh/blog/top-winners.jpg',
    category: 'Tin tức',
    date: '2023-10-20',
    author: 'Chuyên gia 92LOTTERY',
    readTime: '7 phút đọc'
  },
  {
    id: 6,
    title: 'So sánh chi tiết giữa Win Go và 5D Lotre - Nên chọn trò nào?',
    slug: 'so-sanh-chi-tiet-win-go-va-5d-lotre',
    excerpt: 'Phân tích so sánh chi tiết giữa Win Go và 5D Lotre về luật chơi, tỷ lệ trả thưởng và chiến thuật. Giúp bạn lựa chọn trò chơi phù hợp nhất.',
    image: '/anh/blog/wingo-vs-5d.jpg',
    category: 'Phân tích',
    date: '2023-10-15',
    author: 'Chuyên gia 92LOTTERY',
    readTime: '11 phút đọc'
  }
];

// FAQ cho trang blog
const blogFaqs = [
  {
    question: "92LOTTERY Blog cung cấp những nội dung gì?",
    answer: "92LOTTERY Blog cung cấp đa dạng nội dung chất lượng cao bao gồm: phân tích chuyên sâu về các trò chơi, chiến thuật cá cược hiệu quả, hướng dẫn chi tiết cho người mới, tin tức mới nhất về 92LOTTERY, câu chuyện thành công của người chơi, và các bài viết về quản lý vốn."
  },
  {
    question: "Làm thế nào để áp dụng chiến thuật từ 92LOTTERY Blog?",
    answer: "Để áp dụng chiến thuật từ 92LOTTERY Blog, bạn nên đọc kỹ bài viết, hiểu rõ nguyên tắc, thực hành với số tiền nhỏ trước, theo dõi và ghi chép kết quả, điều chỉnh chiến thuật phù hợp với phong cách chơi của bạn, và luôn tuân thủ nguyên tắc quản lý vốn."
  },
  {
    question: "92LOTTERY Blog cập nhật nội dung thường xuyên không?",
    answer: "Có, 92LOTTERY Blog cập nhật nội dung mới 3-5 lần mỗi tuần. Chúng tôi đăng tải các bài viết phân tích, chiến thuật mới, tin tức cập nhật, và hướng dẫn chi tiết về các trò chơi tại 92LOTTERY. Bạn có thể đăng ký nhận thông báo để không bỏ lỡ bài viết mới."
  },
  {
    question: "Ai là người viết bài cho 92LOTTERY Blog?",
    answer: "Các bài viết trên 92LOTTERY Blog được viết bởi đội ngũ chuyên gia với nhiều năm kinh nghiệm trong lĩnh vực cá cược và xổ số. Họ là những người chơi chuyên nghiệp, nhà phân tích dữ liệu, và chuyên gia trong ngành, đảm bảo mang đến nội dung chất lượng và đáng tin cậy."
  }
];

export default function BlogPage() {
  // Generate schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Blog", url: "https://92lottery.dev/blog" }
  ]);

  const faqSchema = generateFAQSchema(blogFaqs);

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
          <h1 className="text-2xl font-bold text-[#bc2022] mb-4">Blog 92LOTTERY</h1>

          <div className="mb-6">
            <div className="flex overflow-x-auto space-x-2 py-2 mb-4">
              <button className="px-4 py-2 bg-[#bc2022] text-white rounded-full whitespace-nowrap">Tất cả</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">Chiến thuật</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">Hướng dẫn</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">Phân tích</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">Tin tức</button>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                className="w-full p-3 border border-gray-300 rounded-lg pl-10"
              />
              <svg className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          <div className="space-y-6">
            {blogPosts.map(post => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="block">
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{objectFit: 'cover'}}
                      className="transition-transform hover:scale-105 duration-300"
                    />
                    <span className="absolute top-2 left-2 bg-[#bc2022] text-white text-xs px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-3">{post.excerpt}</p>

                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{post.author}</span>
                      <span className="text-[#bc2022] text-sm font-medium">Đọc tiếp →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 bg-[#bc2022] text-white rounded-lg font-medium">
              Xem thêm bài viết
            </button>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 border-t pt-8">
            <h2 className="text-xl font-bold mb-6">Câu hỏi thường gặp</h2>

            <div className="space-y-4">
              {blogFaqs.map((faq, index) => (
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
