import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Đánh giá 92Lottery 2025 - Review chi tiết từ chuyên gia',
  description: 'Đánh giá chi tiết về 92Lottery năm 2025. Tìm hiểu về ưu nhược điểm, trò chơi, khuyến mãi, thanh toán và đánh giá từ người chơi thực tế.',
  keywords: ['đánh giá 92lottery', 'review 92lottery', '92lottery 2025', 'nhận xét 92lottery', 'ưu nhược điểm 92lottery', 'đánh giá chuyên gia 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/danh-gia-92lottery-2025',
    languages: {
      'vi': 'https://92lottery.dev/danh-gia-92lottery-2025',
      'x-default': 'https://92lottery.dev/danh-gia-92lottery-2025'
    }
  },
};

export default function ReviewPage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "92Lottery có uy tín không?",
      answer: "Có, 92Lottery là một nhà cái uy tín với giấy phép hoạt động hợp pháp từ các tổ chức cá cược quốc tế. Nhà cái này đã hoạt động nhiều năm và xây dựng được danh tiếng tốt trong cộng đồng người chơi. 92Lottery sử dụng công nghệ bảo mật tiên tiến để bảo vệ thông tin và giao dịch của người chơi, đồng thời có chính sách chơi có trách nhiệm rõ ràng. Tuy nhiên, như với bất kỳ nhà cái nào, người chơi nên tìm hiểu kỹ và chơi có trách nhiệm."
    },
    {
      question: "Các trò chơi nổi bật tại 92Lottery là gì?",
      answer: "92Lottery cung cấp nhiều trò chơi nổi bật như: 1) WinGo (trò chơi dự đoán số và màu sắc phổ biến nhất), 2) K3 (xúc xắc 3 viên với nhiều lựa chọn cược), 3) 5D (xổ số 5 phút với nhiều kiểu cược), 4) Lottery (xổ số truyền thống), 5) Slot games (với hàng trăm máy đánh bạc khác nhau), 6) Casino trực tuyến (Baccarat, Roulette, Blackjack), 7) Thể thao (cá cược các giải đấu lớn). Mỗi trò chơi đều có giao diện thân thiện, tỷ lệ trả thưởng hấp dẫn và nhiều tính năng đặc biệt."
    },
    {
      question: "Ưu điểm và nhược điểm của 92Lottery là gì?",
      answer: "Ưu điểm của 92Lottery: 1) Đa dạng trò chơi với tỷ lệ trả thưởng cao, 2) Giao diện người dùng thân thiện và dễ sử dụng, 3) Nhiều phương thức thanh toán an toàn, 4) Khuyến mãi hấp dẫn cho người chơi mới và thành viên, 5) Hỗ trợ khách hàng 24/7, 6) Ứng dụng di động chất lượng cao. Nhược điểm: 1) Một số khuyến mãi có điều kiện cược khá cao, 2) Thời gian xử lý rút tiền đôi khi chậm vào giờ cao điểm, 3) Một số trò chơi casino trực tuyến chưa có phiên bản tiếng Việt, 4) Giới hạn cược tối đa có thể thấp đối với high roller."
    },
    {
      question: "Làm thế nào để rút tiền từ 92Lottery nhanh chóng?",
      answer: "Để rút tiền từ 92Lottery nhanh chóng, hãy làm theo các bước sau: 1) Hoàn thành xác minh tài khoản trước khi yêu cầu rút tiền, 2) Sử dụng cùng phương thức thanh toán đã dùng để nạp tiền, 3) Rút tiền vào thời điểm ít người sử dụng (tránh giờ cao điểm), 4) Đảm bảo đã hoàn thành các điều kiện cược nếu đã nhận khuyến mãi, 5) Cung cấp đầy đủ thông tin chính xác khi yêu cầu rút tiền, 6) Liên hệ hỗ trợ khách hàng nếu gặp vấn đề. 92Lottery thường xử lý yêu cầu rút tiền trong vòng 24 giờ, nhưng có thể nhanh hơn tùy thuộc vào phương thức thanh toán và thời điểm yêu cầu."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Đánh giá 92Lottery 2025", url: "https://92lottery.dev/danh-gia-92lottery-2025" }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const breadcrumbSchemaString = JSON.stringify(breadcrumbSchema);

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        key="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaString }}
      />
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchemaString }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 px-4">
        <nav className="text-sm">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700">Đánh giá 92Lottery 2025</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">Đánh giá 92Lottery 2025 - Review chi tiết từ chuyên gia</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            92Lottery là một trong những nhà cái trực tuyến phát triển nhanh chóng tại Việt Nam trong những năm gần đây. Với nhiều trò chơi hấp dẫn, khuyến mãi phong phú và giao diện thân thiện, 92Lottery đã thu hút được một lượng lớn người chơi. Bài đánh giá này sẽ cung cấp cái nhìn toàn diện về 92Lottery trong năm 2025, giúp bạn quyết định liệu đây có phải là nhà cái phù hợp với nhu cầu của mình hay không.
          </p>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Tổng quan về 92Lottery</h2>

          <div className="mb-8">
            <p className="mb-4">
              92Lottery là nhà cái trực tuyến cung cấp đa dạng các trò chơi cá cược, bao gồm xổ số, casino trực tuyến, slot game, và thể thao. Được thành lập từ nhiều năm trước, 92Lottery đã không ngừng cải tiến và nâng cấp dịch vụ để mang đến trải nghiệm tốt nhất cho người chơi.
            </p>

            <h3 className="text-xl font-semibold mb-3">Ưu điểm nổi bật</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Đa dạng trò chơi với tỷ lệ trả thưởng cao</li>
              <li className="mb-2">Giao diện người dùng thân thiện và dễ sử dụng</li>
              <li className="mb-2">Nhiều phương thức thanh toán an toàn</li>
              <li className="mb-2">Khuyến mãi hấp dẫn cho người chơi mới và thành viên</li>
              <li className="mb-2">Hỗ trợ khách hàng 24/7</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Nhược điểm</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Một số khuyến mãi có điều kiện cược khá cao</li>
              <li className="mb-2">Thời gian xử lý rút tiền đôi khi chậm vào giờ cao điểm</li>
              <li className="mb-2">Một số trò chơi casino trực tuyến chưa có phiên bản tiếng Việt</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các câu hỏi thường gặp về 92Lottery</h2>

          <div className="space-y-6 mb-8">
            {faqItems.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Related Articles */}
          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Các bài viết liên quan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/so-sanh-92lottery" className="text-blue-600 hover:text-blue-800">
                  So sánh 92Lottery với các nhà cái khác
                </Link>
              </li>
              <li>
                <Link href="/cach-choi-92lottery-hieu-qua" className="text-blue-600 hover:text-blue-800">
                  Cách chơi 92Lottery hiệu quả - Chiến thuật và mẹo thắng lớn
                </Link>
              </li>
              <li>
                <Link href="/92lottery-co-lua-dao-khong" className="text-blue-600 hover:text-blue-800">
                  92Lottery có lừa đảo không? Đánh giá uy tín từ chuyên gia
                </Link>
              </li>
              <li>
                <Link href="/bao-mat-tai-khoan-92lottery" className="text-blue-600 hover:text-blue-800">
                  Bảo mật tài khoản 92Lottery - Hướng dẫn và mẹo bảo vệ tài khoản
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
