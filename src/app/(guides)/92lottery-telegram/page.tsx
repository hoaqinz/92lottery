import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '92Lottery Telegram - Cách tham gia nhóm và nhận thông báo mới nhất',
  description: 'Hướng dẫn tham gia nhóm Telegram chính thức của 92Lottery. Nhận thông báo mới nhất về khuyến mãi, sự kiện, link dự phòng và hỗ trợ trực tiếp từ đội ngũ 92Lottery.',
  keywords: ['92lottery telegram', 'nhóm telegram 92lottery', 'kênh telegram 92lottery', 'thông báo 92lottery', 'link dự phòng 92lottery', 'hỗ trợ 92lottery telegram', 'cộng đồng 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev',
    languages: {
      'vi': 'https://92lottery.dev',
      'x-default': 'https://92lottery.dev'
    }
  },
};

export default function TelegramGuidePage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "Nhóm Telegram chính thức của 92Lottery là gì?",
      answer: "Nhóm Telegram chính thức của 92Lottery là @92lottery_official, được quản lý bởi đội ngũ 92Lottery. Đây là kênh thông tin chính thức để nhận thông báo về khuyến mãi, sự kiện, link dự phòng, và hỗ trợ trực tiếp từ đội ngũ 92Lottery."
    },
    {
      question: "Làm thế nào để tham gia nhóm Telegram của 92Lottery?",
      answer: "Để tham gia nhóm Telegram của 92Lottery, bạn cần: 1) Cài đặt ứng dụng Telegram trên điện thoại hoặc máy tính, 2) Tạo tài khoản Telegram nếu chưa có, 3) Tìm kiếm @92lottery_official hoặc nhấp vào link mời từ website chính thức, 4) Nhấp vào 'Join' hoặc 'Tham gia' để vào nhóm."
    },
    {
      question: "Tôi có thể nhận được những thông tin gì từ nhóm Telegram 92Lottery?",
      answer: "Từ nhóm Telegram 92Lottery, bạn có thể nhận được: thông báo về khuyến mãi mới nhất, thông tin về sự kiện đặc biệt, link dự phòng khi website chính bị sập, thông báo bảo trì hệ thống, cập nhật tính năng mới, hỗ trợ trực tiếp từ đội ngũ 92Lottery, và chia sẻ kinh nghiệm từ cộng đồng người chơi."
    },
    {
      question: "Làm thế nào để phân biệt nhóm Telegram chính thức và giả mạo của 92Lottery?",
      answer: "Để phân biệt nhóm Telegram chính thức và giả mạo của 92Lottery, hãy kiểm tra: 1) Tên nhóm chính xác là @92lottery_official, 2) Nhóm có dấu tích xanh (verified), 3) Số lượng thành viên lớn (thường trên 10,000), 4) Link tham gia được chia sẻ từ website chính thức 92lottery.dev, 5) Quản trị viên không bao giờ yêu cầu thông tin đăng nhập hoặc chuyển tiền riêng."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "92Lottery Telegram", url: "https://92lottery.dev/92lottery-telegram" }
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
            <li className="text-gray-700">92Lottery Telegram</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">92Lottery Telegram - Cách tham gia nhóm và nhận thông báo mới nhất</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Telegram là một trong những kênh thông tin chính thức và quan trọng của 92Lottery. 
            Thông qua nhóm Telegram, người chơi có thể nhận được thông báo mới nhất về khuyến mãi, sự kiện, 
            link dự phòng và hỗ trợ trực tiếp từ đội ngũ 92Lottery. Bài viết này sẽ hướng dẫn bạn cách tham gia 
            nhóm Telegram chính thức của 92Lottery và tận dụng tối đa lợi ích từ kênh thông tin này.
          </p>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Lợi ích khi tham gia nhóm Telegram 92Lottery</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              Trước khi tìm hiểu cách tham gia, hãy xem xét những lợi ích mà nhóm Telegram 92Lottery mang lại:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Thông báo khuyến mãi mới nhất:</strong> Nhận thông tin về các chương trình khuyến mãi, ưu đãi đặc biệt và mã thưởng độc quyền.</li>
              <li className="mb-2"><strong>Link dự phòng:</strong> Khi website chính bị sập hoặc không truy cập được, bạn sẽ nhận được link dự phòng ngay lập tức.</li>
              <li className="mb-2"><strong>Thông báo bảo trì:</strong> Biết trước khi nào hệ thống sẽ bảo trì để lên kế hoạch chơi game phù hợp.</li>
              <li className="mb-2"><strong>Hỗ trợ trực tiếp:</strong> Nhận hỗ trợ trực tiếp từ đội ngũ 92Lottery khi gặp vấn đề.</li>
              <li className="mb-2"><strong>Cộng đồng người chơi:</strong> Kết nối với cộng đồng người chơi 92Lottery, chia sẻ kinh nghiệm và chiến thuật.</li>
              <li className="mb-2"><strong>Thông báo kết quả:</strong> Cập nhật kết quả các sự kiện lớn và giải đấu.</li>
              <li className="mb-2"><strong>Tính năng mới:</strong> Được thông báo sớm nhất về các tính năng và trò chơi mới.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Cách tham gia nhóm Telegram 92Lottery</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Bước 1: Cài đặt Telegram</h3>
            <p className="mb-4">
              Nếu bạn chưa có Telegram, bạn cần cài đặt ứng dụng này trước:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Cho Android:</strong> Tải Telegram từ Google Play Store.</li>
              <li className="mb-2"><strong>Cho iOS:</strong> Tải Telegram từ App Store.</li>
              <li className="mb-2"><strong>Cho PC/Mac:</strong> Tải Telegram Desktop từ <a href="https://desktop.telegram.org/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">desktop.telegram.org</a> hoặc sử dụng phiên bản web tại <a href="https://web.telegram.org/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">web.telegram.org</a>.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Bước 2: Tạo tài khoản Telegram</h3>
            <p className="mb-4">
              Nếu bạn chưa có tài khoản Telegram, hãy tạo một tài khoản mới:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Mở ứng dụng Telegram.</li>
              <li className="mb-2">Nhập số điện thoại của bạn và nhấp vào "Next" hoặc "Tiếp theo".</li>
              <li className="mb-2">Nhập mã xác nhận được gửi đến số điện thoại của bạn.</li>
              <li className="mb-2">Nhập tên và họ của bạn (có thể sử dụng biệt danh).</li>
              <li className="mb-2">Tùy chọn: Thêm ảnh đại diện.</li>
            </ol>
            
            <h3 className="text-xl font-semibold mb-3">Bước 3: Tham gia nhóm Telegram 92Lottery</h3>
            <p className="mb-4">
              Có nhiều cách để tham gia nhóm Telegram chính thức của 92Lottery:
            </p>
            
            <h4 className="text-lg font-semibold mb-2">Cách 1: Thông qua link trực tiếp</h4>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Nhấp vào link: <a href="https://t.me/92lottery_official" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">t.me/92lottery_official</a></li>
              <li className="mb-2">Telegram sẽ tự động mở và hiển thị nhóm 92Lottery.</li>
              <li className="mb-2">Nhấp vào "Join" hoặc "Tham gia" để vào nhóm.</li>
            </ol>
            
            <h4 className="text-lg font-semibold mb-2">Cách 2: Tìm kiếm trong Telegram</h4>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Mở ứng dụng Telegram.</li>
              <li className="mb-2">Nhấp vào biểu tượng tìm kiếm (hình kính lúp).</li>
              <li className="mb-2">Nhập "@92lottery_official" vào ô tìm kiếm.</li>
              <li className="mb-2">Chọn nhóm chính thức từ kết quả tìm kiếm.</li>
              <li className="mb-2">Nhấp vào "Join" hoặc "Tham gia" để vào nhóm.</li>
            </ol>
            
            <h4 className="text-lg font-semibold mb-2">Cách 3: Quét mã QR</h4>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Truy cập website chính thức của 92Lottery.</li>
              <li className="mb-2">Tìm mã QR Telegram (thường ở cuối trang hoặc phần liên hệ).</li>
              <li className="mb-2">Sử dụng ứng dụng Telegram để quét mã QR.</li>
              <li className="mb-2">Nhấp vào "Join" hoặc "Tham gia" để vào nhóm.</li>
            </ol>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý quan trọng:</p>
              <p>Để đảm bảo bạn tham gia nhóm Telegram chính thức của 92Lottery, hãy chỉ sử dụng link từ website chính thức 92lottery.dev hoặc từ các kênh truyền thông chính thức khác của 92Lottery.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Cách phân biệt nhóm Telegram chính thức và giả mạo</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              Để tránh bị lừa đảo, hãy đảm bảo bạn tham gia nhóm Telegram chính thức của 92Lottery bằng cách kiểm tra các yếu tố sau:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Tên nhóm chính xác:</strong> Nhóm chính thức có tên @92lottery_official.</li>
              <li className="mb-2"><strong>Dấu tích xanh:</strong> Nhóm chính thức thường có dấu tích xanh (verified) bên cạnh tên.</li>
              <li className="mb-2"><strong>Số lượng thành viên:</strong> Nhóm chính thức có số lượng thành viên lớn (thường trên 10,000).</li>
              <li className="mb-2"><strong>Nguồn link:</strong> Bạn nhận được link từ website chính thức 92lottery.dev.</li>
              <li className="mb-2"><strong>Nội dung chuyên nghiệp:</strong> Nhóm chính thức có nội dung chuyên nghiệp, không có spam hay quảng cáo không liên quan.</li>
              <li className="mb-2"><strong>Không yêu cầu thông tin cá nhân:</strong> Quản trị viên chính thức không bao giờ yêu cầu thông tin đăng nhập hoặc yêu cầu bạn chuyển tiền riêng.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Cách tận dụng tối đa nhóm Telegram 92Lottery</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. Bật thông báo</h3>
            <p className="mb-4">
              Để không bỏ lỡ thông tin quan trọng, hãy bật thông báo cho nhóm Telegram 92Lottery:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Mở nhóm Telegram 92Lottery.</li>
              <li className="mb-2">Nhấp vào tên nhóm ở trên cùng để mở thông tin nhóm.</li>
              <li className="mb-2">Tìm phần "Notifications" hoặc "Thông báo".</li>
              <li className="mb-2">Chọn "All messages" hoặc "Tất cả tin nhắn" để nhận thông báo về mọi tin nhắn mới.</li>
            </ol>
            
            <h3 className="text-xl font-semibold mb-3">2. Ghim tin nhắn quan trọng</h3>
            <p className="mb-4">
              Các thông báo quan trọng thường được ghim (pinned) trong nhóm. Để xem các tin nhắn đã ghim:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Mở nhóm Telegram 92Lottery.</li>
              <li className="mb-2">Nhấp vào biểu tượng ghim (hình đinh ghim) ở góc trên bên phải hoặc tìm trong menu ba chấm.</li>
              <li className="mb-2">Xem danh sách các tin nhắn đã ghim, thường bao gồm link dự phòng, thông báo quan trọng, và hướng dẫn.</li>
            </ol>
            
            <h3 className="text-xl font-semibold mb-3">3. Sử dụng bot hỗ trợ</h3>
            <p className="mb-4">
              Nhóm Telegram 92Lottery có thể có bot hỗ trợ để trả lời các câu hỏi thường gặp và cung cấp thông tin nhanh chóng:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Tìm bot hỗ trợ trong nhóm (thường có tên như @92lottery_support_bot).</li>
              <li className="mb-2">Nhắn tin cho bot với câu hỏi của bạn hoặc sử dụng các lệnh có sẵn (thường bắt đầu bằng "/").</li>
              <li className="mb-2">Làm theo hướng dẫn từ bot để nhận thông tin hoặc hỗ trợ.</li>
            </ol>
            
            <h3 className="text-xl font-semibold mb-3">4. Tham gia thảo luận</h3>
            <p className="mb-4">
              Nhóm Telegram 92Lottery không chỉ là nơi nhận thông báo mà còn là cộng đồng để chia sẻ và học hỏi:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Tham gia thảo luận về chiến thuật chơi game.</li>
              <li className="mb-2">Chia sẻ kinh nghiệm và mẹo hay.</li>
              <li className="mb-2">Đặt câu hỏi khi gặp vấn đề.</li>
              <li className="mb-2">Tham gia các sự kiện và cuộc thi trong nhóm.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các kênh Telegram khác của 92Lottery</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              Ngoài nhóm chính, 92Lottery có thể có các kênh Telegram chuyên biệt khác:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Kênh thông báo (@92lottery_news):</strong> Chỉ đăng thông báo chính thức, không có thảo luận.</li>
              <li className="mb-2"><strong>Kênh hỗ trợ (@92lottery_support):</strong> Chuyên hỗ trợ giải đáp thắc mắc và xử lý vấn đề.</li>
              <li className="mb-2"><strong>Kênh khuyến mãi (@92lottery_promo):</strong> Tập trung vào các chương trình khuyến mãi và mã thưởng.</li>
              <li className="mb-2"><strong>Kênh kết quả (@92lottery_results):</strong> Cập nhật kết quả các trò chơi và sự kiện.</li>
            </ul>
            <p className="mb-4">
              Bạn có thể tham gia các kênh này để nhận thông tin chuyên biệt theo nhu cầu của mình.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các câu hỏi thường gặp về Telegram 92Lottery</h2>
          
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
            Tham gia nhóm Telegram chính thức của 92Lottery là cách tốt nhất để luôn cập nhật thông tin mới nhất, 
            nhận link dự phòng khi cần thiết, và kết nối với cộng đồng người chơi. Với hướng dẫn chi tiết trong bài viết này, 
            bạn có thể dễ dàng tham gia nhóm và tận dụng tối đa lợi ích mà kênh thông tin này mang lại.
          </p>
          
          <p className="mb-4">
            Hãy nhớ chỉ tham gia nhóm Telegram chính thức từ các nguồn đáng tin cậy để đảm bảo an toàn thông tin 
            và tránh các nhóm giả mạo. Nếu có bất kỳ thắc mắc nào, đừng ngần ngại đặt câu hỏi trong nhóm để nhận 
            hỗ trợ từ đội ngũ 92Lottery và cộng đồng người chơi.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Các bài viết liên quan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/92lottery-bi-sap" className="text-blue-600 hover:text-blue-800">
                  Khắc phục khi 92Lottery bị sập, lỗi truy cập và giải pháp
                </Link>
              </li>
              <li>
                <Link href="/app-92lottery" className="text-blue-600 hover:text-blue-800">
                  Cách tải và cài đặt App 92Lottery trên điện thoại Android và iOS
                </Link>
              </li>
              <li>
                <Link href="/khuyen-mai-92lottery" className="text-blue-600 hover:text-blue-800">
                  Khuyến mãi 92Lottery - Tổng hợp ưu đãi hấp dẫn nhất 2025
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
