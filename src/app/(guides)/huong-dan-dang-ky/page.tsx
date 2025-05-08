import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Hướng dẫn đăng ký tài khoản 92Lottery chi tiết nhất 2025',
  description: 'Hướng dẫn đăng ký tài khoản 92Lottery chi tiết từng bước. Đăng ký nhanh chóng, nhận ngay 100K và nhiều ưu đãi hấp dẫn khác tại 92Lottery.',
  keywords: ['đăng ký 92lottery', 'hướng dẫn đăng ký 92lottery', 'tạo tài khoản 92lottery', 'đăng ký nhận 100k', '92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/huong-dan-dang-ky',
    languages: {
      'vi': 'https://92lottery.dev/huong-dan-dang-ky',
      'x-default': 'https://92lottery.dev/huong-dan-dang-ky'
    }
  },
};

export default function RegisterGuidePage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "Làm thế nào để đăng ký tài khoản 92Lottery?",
      answer: "Để đăng ký tài khoản 92Lottery, bạn chỉ cần truy cập trang chủ 92lottery.dev, nhấp vào nút 'Đăng ký', điền thông tin cá nhân và làm theo hướng dẫn. Sau khi đăng ký thành công, bạn sẽ nhận được khuyến mãi 100K."
    },
    {
      question: "Tôi có thể đăng ký 92Lottery trên điện thoại không?",
      answer: "Có, bạn có thể đăng ký 92Lottery trên điện thoại di động. Giao diện đăng ký của 92Lottery được tối ưu hóa cho cả máy tính và điện thoại di động, giúp bạn dễ dàng đăng ký từ bất kỳ thiết bị nào."
    },
    {
      question: "Tôi cần cung cấp những thông tin gì khi đăng ký 92Lottery?",
      answer: "Khi đăng ký 92Lottery, bạn cần cung cấp số điện thoại, mật khẩu, và mã giới thiệu (nếu có). Đảm bảo rằng bạn cung cấp thông tin chính xác để tránh các vấn đề về sau."
    },
    {
      question: "Tôi có nhận được khuyến mãi khi đăng ký 92Lottery không?",
      answer: "Có, khi đăng ký tài khoản 92Lottery, bạn sẽ nhận được khuyến mãi 100K. Ngoài ra, 92Lottery còn có nhiều chương trình khuyến mãi hấp dẫn khác dành cho người chơi mới và thành viên thân thiết."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Hướng dẫn đăng ký", url: "https://92lottery.dev/huong-dan-dang-ky" }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const breadcrumbSchemaString = JSON.stringify(breadcrumbSchema);

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaString }}
      />
      <script
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
            <li className="text-gray-700">Hướng dẫn đăng ký</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">Hướng dẫn đăng ký tài khoản 92Lottery chi tiết nhất 2025</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            92Lottery là nền tảng cá cược xổ số, lottery, thể thao và casino trực tuyến uy tín hàng đầu Việt Nam.
            Bài viết này sẽ hướng dẫn bạn cách đăng ký tài khoản 92Lottery chi tiết từng bước để nhận ngay 100K và
            tham gia các trò chơi hấp dẫn.
          </p>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các bước đăng ký tài khoản 92Lottery</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Bước 1: Truy cập trang đăng ký 92Lottery</h3>
            <p className="mb-4">
              Đầu tiên, bạn cần truy cập vào trang chủ của 92Lottery tại địa chỉ{' '}
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                92lottery.dev
              </Link>.
              Sau đó, nhấp vào nút "ĐĂNG KÝ" ở góc phải trên cùng của trang hoặc truy cập trực tiếp vào trang đăng ký tại{' '}
              <Link href="/register" className="text-blue-600 hover:text-blue-800">
                92lottery.dev/register
              </Link>.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo:</p>
              <p>Bạn cũng có thể đăng ký thông qua ứng dụng di động của 92Lottery để trải nghiệm tốt hơn.</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Bước 2: Điền thông tin đăng ký</h3>
            <p className="mb-4">
              Tại trang đăng ký, bạn cần điền các thông tin sau:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Số điện thoại:</strong> Nhập số điện thoại của bạn. Đảm bảo rằng đây là số điện thoại đang hoạt động vì bạn sẽ nhận mã xác nhận qua số này.</li>
              <li className="mb-2"><strong>Mật khẩu:</strong> Tạo mật khẩu mạnh với ít nhất 8 ký tự, bao gồm chữ cái, số và ký tự đặc biệt.</li>
              <li className="mb-2"><strong>Xác nhận mật khẩu:</strong> Nhập lại mật khẩu để xác nhận.</li>
              <li className="mb-2"><strong>Mã giới thiệu (không bắt buộc):</strong> Nếu bạn được giới thiệu bởi người chơi khác, hãy nhập mã giới thiệu của họ để nhận thêm ưu đãi.</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý quan trọng:</p>
              <p>Đảm bảo rằng bạn cung cấp thông tin chính xác để tránh các vấn đề về sau, đặc biệt là khi rút tiền thắng cược.</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Bước 3: Xác nhận đăng ký</h3>
            <p className="mb-4">
              Sau khi điền đầy đủ thông tin, nhấp vào nút "ĐĂNG KÝ" để hoàn tất quá trình. Hệ thống sẽ gửi mã xác nhận đến số điện thoại của bạn.
              Nhập mã xác nhận để kích hoạt tài khoản.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Bước 4: Đăng nhập và nhận thưởng</h3>
            <p className="mb-4">
              Sau khi đăng ký thành công, bạn có thể đăng nhập vào tài khoản của mình bằng số điện thoại và mật khẩu đã đăng ký.
              Khuyến mãi 100K sẽ được cộng vào tài khoản của bạn ngay sau khi đăng ký thành công.
            </p>
            <p className="mb-4">
              Để biết cách đăng nhập chi tiết, bạn có thể tham khảo{' '}
              <Link href="/huong-dan-dang-nhap" className="text-blue-600 hover:text-blue-800">
                hướng dẫn đăng nhập 92Lottery
              </Link>.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các câu hỏi thường gặp khi đăng ký 92Lottery</h2>

          <div className="space-y-6 mb-8">
            {faqItems.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Kết luận</h2>

          <p className="mb-4">
            Đăng ký tài khoản 92Lottery là một quá trình đơn giản và nhanh chóng. Chỉ với vài bước đơn giản,
            bạn đã có thể tham gia vào thế giới giải trí và cơ hội trúng thưởng hấp dẫn tại 92Lottery.
          </p>

          <p className="mb-4">
            Nếu bạn gặp bất kỳ khó khăn nào trong quá trình đăng ký, đừng ngần ngại liên hệ với đội ngũ hỗ trợ khách hàng
            của 92Lottery qua live chat hoặc hotline để được hỗ trợ kịp thời.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Các bài viết liên quan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/huong-dan-dang-nhap" className="text-blue-600 hover:text-blue-800">
                  Hướng dẫn đăng nhập 92Lottery chi tiết
                </Link>
              </li>
              <li>
                <Link href="/huong-dan-nap-tien" className="text-blue-600 hover:text-blue-800">
                  Hướng dẫn nạp tiền 92Lottery nhanh chóng
                </Link>
              </li>
              <li>
                <Link href="/gioi-thieu" className="text-blue-600 hover:text-blue-800">
                  Giới thiệu về 92Lottery - Nhà cái uy tín hàng đầu Việt Nam
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
