import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Cách tải và cài đặt App 92Lottery trên điện thoại Android và iOS',
  description: 'Hướng dẫn chi tiết cách tải và cài đặt App 92Lottery trên điện thoại Android và iOS. Trải nghiệm cá cược xổ số, casino và thể thao mọi lúc mọi nơi với ứng dụng di động 92Lottery.',
  keywords: ['app 92lottery', 'tải app 92lottery', 'cài đặt 92lottery', 'ứng dụng 92lottery', '92lottery mobile', 'app cá cược 92lottery', 'download 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev',
    languages: {
      'vi': 'https://92lottery.dev',
      'x-default': 'https://92lottery.dev'
    }
  },
};

export default function AppGuidePage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "Làm thế nào để tải App 92Lottery trên điện thoại Android?",
      answer: "Để tải App 92Lottery trên Android, bạn cần truy cập trang chủ 92lottery.dev, nhấp vào nút 'Tải ứng dụng', chọn phiên bản Android, và làm theo hướng dẫn cài đặt. Bạn cần cho phép cài đặt ứng dụng từ nguồn không xác định trong cài đặt bảo mật của điện thoại."
    },
    {
      question: "Làm thế nào để tải App 92Lottery trên iPhone (iOS)?",
      answer: "Để tải App 92Lottery trên iOS, bạn cần truy cập trang chủ 92lottery.dev, nhấp vào nút 'Tải ứng dụng', chọn phiên bản iOS, và làm theo hướng dẫn cài đặt. Sau khi cài đặt, bạn cần vào Cài đặt > Quản lý thiết bị > Tin cậy ứng dụng 92Lottery."
    },
    {
      question: "App 92Lottery có an toàn không?",
      answer: "Có, App 92Lottery hoàn toàn an toàn với hệ thống bảo mật tiên tiến, mã hóa SSL 256-bit, và không chứa mã độc. Ứng dụng được kiểm tra và cập nhật thường xuyên để đảm bảo an toàn tối đa cho người dùng."
    },
    {
      question: "Tôi có thể làm gì nếu không tải được App 92Lottery?",
      answer: "Nếu bạn không tải được App 92Lottery, hãy kiểm tra kết nối internet, đảm bảo điện thoại có đủ bộ nhớ, và cho phép cài đặt ứng dụng từ nguồn không xác định (Android) hoặc tin cậy nhà phát triển (iOS). Nếu vẫn gặp vấn đề, bạn có thể sử dụng phiên bản web hoặc liên hệ với bộ phận hỗ trợ của 92Lottery."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "App 92Lottery", url: "https://92lottery.dev/app-92lottery" }
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
            <li className="text-gray-700">App 92Lottery</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">Cách tải và cài đặt App 92Lottery trên điện thoại Android và iOS</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Ứng dụng di động 92Lottery mang đến trải nghiệm cá cược xổ số, casino và thể thao mọi lúc mọi nơi. 
            Bài viết này sẽ hướng dẫn bạn chi tiết cách tải và cài đặt App 92Lottery trên điện thoại Android và iOS, 
            cùng với các tính năng nổi bật và lợi ích khi sử dụng ứng dụng.
          </p>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Lợi ích khi sử dụng App 92Lottery</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              Trước khi đi vào hướng dẫn cài đặt, hãy tìm hiểu những lợi ích khi sử dụng App 92Lottery so với phiên bản web:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Truy cập nhanh chóng</strong> - Mở ứng dụng và đăng nhập chỉ với một chạm, không cần nhập URL.</li>
              <li className="mb-2"><strong>Thông báo trực tiếp</strong> - Nhận thông báo về khuyến mãi, kết quả xổ số, và các sự kiện đặc biệt.</li>
              <li className="mb-2"><strong>Tối ưu hóa cho di động</strong> - Giao diện được thiết kế riêng cho điện thoại, mang lại trải nghiệm mượt mà hơn.</li>
              <li className="mb-2"><strong>Tiết kiệm dữ liệu</strong> - Tiêu thụ ít dữ liệu internet hơn so với phiên bản web.</li>
              <li className="mb-2"><strong>Bảo mật cao hơn</strong> - Thêm lớp bảo mật với xác thực sinh trắc học (vân tay, Face ID).</li>
              <li className="mb-2"><strong>Trải nghiệm mượt mà</strong> - Không bị gián đoạn bởi quảng cáo hoặc thông báo từ trình duyệt.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Cách tải và cài đặt App 92Lottery trên Android</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Bước 1: Cho phép cài đặt ứng dụng từ nguồn không xác định</h3>
            <p className="mb-4">
              Trước khi tải ứng dụng, bạn cần cho phép điện thoại cài đặt ứng dụng từ nguồn không xác định:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Mở "Cài đặt" trên điện thoại Android của bạn.</li>
              <li className="mb-2">Tìm và nhấp vào "Bảo mật" hoặc "Riêng tư".</li>
              <li className="mb-2">Bật tùy chọn "Cho phép cài đặt ứng dụng từ nguồn không xác định" hoặc "Cài đặt ứng dụng không rõ nguồn gốc".</li>
            </ol>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý:</p>
              <p>Trên một số thiết bị Android mới, bạn sẽ được nhắc cho phép cài đặt khi bắt đầu quá trình cài đặt ứng dụng.</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Bước 2: Tải file APK của 92Lottery</h3>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Truy cập trang chủ 92Lottery tại <Link href="/" className="text-blue-600 hover:text-blue-800">92lottery.dev</Link>.</li>
              <li className="mb-2">Nhấp vào biểu tượng "Tải xuống" hoặc "Tải ứng dụng" trên menu chính.</li>
              <li className="mb-2">Chọn phiên bản Android (APK).</li>
              <li className="mb-2">Chờ quá trình tải xuống hoàn tất.</li>
            </ol>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Bước 3: Cài đặt ứng dụng</h3>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Mở file APK vừa tải xuống từ thông báo tải xuống hoặc từ thư mục "Tải xuống".</li>
              <li className="mb-2">Nhấp vào "Cài đặt" khi được nhắc.</li>
              <li className="mb-2">Chờ quá trình cài đặt hoàn tất.</li>
              <li className="mb-2">Nhấp vào "Mở" để khởi động ứng dụng hoặc tìm biểu tượng 92Lottery trên màn hình chính hoặc trong danh sách ứng dụng.</li>
            </ol>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Cách tải và cài đặt App 92Lottery trên iOS (iPhone/iPad)</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Bước 1: Tải ứng dụng</h3>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Truy cập trang chủ 92Lottery tại <Link href="/" className="text-blue-600 hover:text-blue-800">92lottery.dev</Link>.</li>
              <li className="mb-2">Nhấp vào biểu tượng "Tải xuống" hoặc "Tải ứng dụng" trên menu chính.</li>
              <li className="mb-2">Chọn phiên bản iOS.</li>
              <li className="mb-2">Làm theo hướng dẫn để cài đặt cấu hình.</li>
            </ol>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Bước 2: Tin cậy nhà phát triển</h3>
            <p className="mb-4">
              Sau khi cài đặt, bạn cần tin cậy nhà phát triển 92Lottery:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Mở "Cài đặt" trên iPhone hoặc iPad của bạn.</li>
              <li className="mb-2">Tìm và nhấp vào "Cài đặt chung".</li>
              <li className="mb-2">Cuộn xuống và nhấp vào "Quản lý thiết bị" hoặc "Quản lý cấu hình & thiết bị".</li>
              <li className="mb-2">Tìm và nhấp vào tên nhà phát triển 92Lottery.</li>
              <li className="mb-2">Nhấp vào "Tin cậy [tên nhà phát triển]".</li>
            </ol>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý:</p>
              <p>Trên iOS, bạn cần thực hiện bước này vì ứng dụng không được phân phối qua App Store chính thức.</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Bước 3: Mở và sử dụng ứng dụng</h3>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Tìm biểu tượng 92Lottery trên màn hình chính.</li>
              <li className="mb-2">Nhấp vào biểu tượng để mở ứng dụng.</li>
              <li className="mb-2">Đăng nhập bằng tài khoản 92Lottery của bạn hoặc đăng ký nếu bạn chưa có tài khoản.</li>
            </ol>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Thêm App 92Lottery vào màn hình chính (PWA)</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              Nếu bạn không muốn tải ứng dụng, bạn có thể thêm 92Lottery vào màn hình chính như một Progressive Web App (PWA):
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Trên Android (Chrome):</h3>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Truy cập <Link href="/" className="text-blue-600 hover:text-blue-800">92lottery.dev</Link> trên Chrome.</li>
              <li className="mb-2">Nhấp vào biểu tượng ba chấm (⋮) ở góc trên bên phải.</li>
              <li className="mb-2">Chọn "Thêm vào màn hình chính" hoặc "Cài đặt ứng dụng".</li>
              <li className="mb-2">Xác nhận bằng cách nhấp vào "Thêm" hoặc "Cài đặt".</li>
            </ol>
            
            <h3 className="text-xl font-semibold mb-3">Trên iOS (Safari):</h3>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Truy cập <Link href="/" className="text-blue-600 hover:text-blue-800">92lottery.dev</Link> trên Safari.</li>
              <li className="mb-2">Nhấp vào biểu tượng chia sẻ (hình hộp với mũi tên hướng lên) ở dưới cùng.</li>
              <li className="mb-2">Cuộn xuống và chọn "Thêm vào màn hình chính".</li>
              <li className="mb-2">Nhấp vào "Thêm" ở góc trên bên phải.</li>
            </ol>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các tính năng nổi bật của App 92Lottery</h2>
          
          <div className="mb-8">
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Đăng nhập nhanh</strong> - Đăng nhập bằng vân tay hoặc Face ID.</li>
              <li className="mb-2"><strong>Giao diện thân thiện</strong> - Thiết kế tối ưu cho điện thoại di động.</li>
              <li className="mb-2"><strong>Thông báo kết quả</strong> - Nhận thông báo ngay khi có kết quả xổ số.</li>
              <li className="mb-2"><strong>Cá cược trực tiếp</strong> - Đặt cược các sự kiện thể thao đang diễn ra.</li>
              <li className="mb-2"><strong>Thanh toán nhanh chóng</strong> - Nạp và rút tiền dễ dàng.</li>
              <li className="mb-2"><strong>Khuyến mãi độc quyền</strong> - Nhận các ưu đãi đặc biệt chỉ dành cho người dùng ứng dụng.</li>
              <li className="mb-2"><strong>Hỗ trợ trực tuyến</strong> - Liên hệ với bộ phận hỗ trợ ngay trong ứng dụng.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các câu hỏi thường gặp về App 92Lottery</h2>
          
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
            App 92Lottery mang đến trải nghiệm cá cược xổ số, casino và thể thao tối ưu trên thiết bị di động. 
            Với giao diện thân thiện, tính năng phong phú, và bảo mật cao, ứng dụng giúp bạn tận hưởng các trò chơi 
            yêu thích mọi lúc mọi nơi.
          </p>
          
          <p className="mb-4">
            Hãy tải và cài đặt App 92Lottery ngay hôm nay để không bỏ lỡ các khuyến mãi độc quyền và trải nghiệm 
            cá cược tuyệt vời trên điện thoại di động của bạn!
          </p>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Các bài viết liên quan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/huong-dan-dang-ky" className="text-blue-600 hover:text-blue-800">
                  Hướng dẫn đăng ký 92Lottery chi tiết
                </Link>
              </li>
              <li>
                <Link href="/huong-dan-dang-nhap" className="text-blue-600 hover:text-blue-800">
                  Hướng dẫn đăng nhập 92Lottery đơn giản
                </Link>
              </li>
              <li>
                <Link href="/huong-dan-nap-tien" className="text-blue-600 hover:text-blue-800">
                  Hướng dẫn nạp tiền 92Lottery nhanh chóng
                </Link>
              </li>
              <li>
                <Link href="/92lottery-co-lua-dao-khong" className="text-blue-600 hover:text-blue-800">
                  92Lottery có lừa đảo không? Đánh giá uy tín từ chuyên gia
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
