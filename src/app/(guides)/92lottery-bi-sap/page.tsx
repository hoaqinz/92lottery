import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Khắc phục khi 92Lottery bị sập, lỗi truy cập và giải pháp',
  description: 'Hướng dẫn khắc phục khi 92Lottery bị sập, lỗi truy cập và các giải pháp hiệu quả. Tìm hiểu nguyên nhân và cách truy cập 92Lottery khi website gặp sự cố.',
  keywords: ['92lottery bị sập', 'lỗi truy cập 92lottery', '92lottery không vào được', 'khắc phục 92lottery', 'link dự phòng 92lottery', 'domain 92lottery', 'dns 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/92lottery-bi-sap',
    languages: {
      'vi': 'https://92lottery.dev/92lottery-bi-sap',
      'x-default': 'https://92lottery.dev/92lottery-bi-sap'
    }
  },
};

export default function AccessTroubleshootingPage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "Tại sao 92Lottery bị sập hoặc không truy cập được?",
      answer: "92Lottery có thể không truy cập được do nhiều nguyên nhân: bảo trì hệ thống, thay đổi địa chỉ domain, chặn DNS từ nhà mạng, tấn công DDoS, lỗi kết nối internet của người dùng, hoặc lỗi cache trình duyệt. Trong hầu hết các trường hợp, đây chỉ là vấn đề tạm thời và có thể khắc phục được."
    },
    {
      question: "Làm thế nào để truy cập 92Lottery khi bị chặn DNS?",
      answer: "Để truy cập 92Lottery khi bị chặn DNS, bạn có thể: sử dụng link dự phòng chính thức, thay đổi DNS sang Google DNS (8.8.8.8, 8.8.4.4) hoặc Cloudflare DNS (1.1.1.1, 1.0.0.1), sử dụng VPN đáng tin cậy, hoặc sử dụng ứng dụng di động 92Lottery thay vì truy cập qua trình duyệt web."
    },
    {
      question: "92Lottery có thông báo trước khi bảo trì hệ thống không?",
      answer: "Có, 92Lottery thường thông báo trước khi bảo trì hệ thống qua nhiều kênh như: thông báo trên website, email, tin nhắn SMS, nhóm Telegram chính thức, và các kênh mạng xã hội. Thời gian bảo trì thường được lên lịch vào thời điểm ít người truy cập và kéo dài không quá 2 giờ."
    },
    {
      question: "Tôi có mất tiền trong tài khoản khi 92Lottery bị sập không?",
      answer: "Không, bạn sẽ không mất tiền trong tài khoản khi 92Lottery bị sập tạm thời. 92Lottery lưu trữ dữ liệu tài khoản và giao dịch trên hệ thống máy chủ an toàn với cơ chế sao lưu thường xuyên. Khi hệ thống hoạt động trở lại, tất cả dữ liệu tài khoản và giao dịch của bạn vẫn được bảo toàn nguyên vẹn."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "92Lottery bị sập", url: "https://92lottery.dev/92lottery-bi-sap" }
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
            <li className="text-gray-700">92Lottery bị sập</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">Khắc phục khi 92Lottery bị sập, lỗi truy cập và giải pháp</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Đôi khi, người chơi có thể gặp tình trạng 92Lottery bị sập hoặc không thể truy cập được. 
            Bài viết này sẽ giúp bạn hiểu rõ nguyên nhân và cung cấp các giải pháp hiệu quả để khắc phục 
            vấn đề, giúp bạn có thể truy cập 92Lottery mọi lúc mọi nơi.
          </p>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Nguyên nhân 92Lottery bị sập hoặc không truy cập được</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. Bảo trì hệ thống</h3>
            <p className="mb-4">
              92Lottery thường xuyên thực hiện bảo trì hệ thống để nâng cấp, cải thiện trải nghiệm người dùng và đảm bảo an toàn. 
              Trong thời gian bảo trì, website có thể tạm thời không truy cập được.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý:</p>
              <p>92Lottery thường thông báo lịch bảo trì trước đó trên website, qua email hoặc tin nhắn SMS. Thời gian bảo trì thường được lên lịch vào thời điểm ít người truy cập và kéo dài không quá 2 giờ.</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">2. Thay đổi địa chỉ domain</h3>
            <p className="mb-4">
              Để đảm bảo người chơi có thể truy cập liên tục, 92Lottery thường xuyên cập nhật và thay đổi địa chỉ domain. 
              Nếu bạn đang truy cập vào domain cũ, bạn có thể gặp tình trạng không vào được website.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">3. Chặn DNS từ nhà mạng</h3>
            <p className="mb-4">
              Một số nhà mạng tại Việt Nam có thể chặn DNS đến các website cá cược trực tuyến, bao gồm 92Lottery. 
              Đây là nguyên nhân phổ biến nhất khiến người chơi không thể truy cập vào 92Lottery.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">4. Tấn công DDoS</h3>
            <p className="mb-4">
              Đôi khi, 92Lottery có thể là mục tiêu của các cuộc tấn công DDoS (Distributed Denial of Service), 
              khiến hệ thống tạm thời quá tải và không thể phục vụ người dùng.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">5. Lỗi kết nối internet</h3>
            <p className="mb-4">
              Vấn đề có thể đến từ phía người dùng, như kết nối internet không ổn định, 
              mạng yếu, hoặc các vấn đề kỹ thuật khác từ nhà cung cấp dịch vụ internet.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">6. Lỗi cache trình duyệt</h3>
            <p className="mb-4">
              Cache và cookie tích tụ trong trình duyệt có thể gây ra các vấn đề khi truy cập 92Lottery, 
              đặc biệt là sau khi website có sự thay đổi hoặc nâng cấp.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các giải pháp khắc phục khi 92Lottery bị sập</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. Sử dụng link dự phòng chính thức</h3>
            <p className="mb-4">
              92Lottery luôn có các link dự phòng chính thức để đảm bảo người chơi có thể truy cập liên tục. 
              Các link dự phòng hiện tại của 92Lottery bao gồm:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">92lottery.dev (Link chính)</li>
              <li className="mb-2">92lottery.club</li>
              <li className="mb-2">92lottery.live</li>
              <li className="mb-2">92lottery.vip</li>
              <li className="mb-2">92lottery.app</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo:</p>
              <p>Lưu tất cả các link dự phòng vào bookmark của trình duyệt để có thể truy cập nhanh chóng khi cần.</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">2. Thay đổi DNS</h3>
            <p className="mb-4">
              Thay đổi DNS là một trong những cách hiệu quả nhất để truy cập 92Lottery khi bị chặn bởi nhà mạng.
            </p>
            <h4 className="text-lg font-semibold mb-2">Cách thay đổi DNS trên Windows:</h4>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Mở Control Panel > Network and Internet > Network and Sharing Center.</li>
              <li className="mb-2">Nhấp vào kết nối mạng của bạn (Wi-Fi hoặc Ethernet).</li>
              <li className="mb-2">Nhấp vào "Properties".</li>
              <li className="mb-2">Chọn "Internet Protocol Version 4 (TCP/IPv4)" và nhấp vào "Properties".</li>
              <li className="mb-2">Chọn "Use the following DNS server addresses".</li>
              <li className="mb-2">Nhập DNS của Google (8.8.8.8 và 8.8.4.4) hoặc Cloudflare (1.1.1.1 và 1.0.0.1).</li>
              <li className="mb-2">Nhấp vào "OK" để lưu thay đổi.</li>
            </ol>
            
            <h4 className="text-lg font-semibold mb-2">Cách thay đổi DNS trên Android:</h4>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Mở "Cài đặt" > "Kết nối" > "Wi-Fi".</li>
              <li className="mb-2">Nhấn giữ vào mạng Wi-Fi đang kết nối và chọn "Sửa đổi mạng".</li>
              <li className="mb-2">Chọn "Nâng cao".</li>
              <li className="mb-2">Thay đổi "DHCP" thành "Tĩnh".</li>
              <li className="mb-2">Cuộn xuống và nhập DNS của Google hoặc Cloudflare.</li>
              <li className="mb-2">Nhấp vào "Lưu" để áp dụng thay đổi.</li>
            </ol>
            
            <h4 className="text-lg font-semibold mb-2">Cách thay đổi DNS trên iOS:</h4>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Mở "Cài đặt" > "Wi-Fi".</li>
              <li className="mb-2">Nhấp vào biểu tượng "i" bên cạnh mạng Wi-Fi đang kết nối.</li>
              <li className="mb-2">Cuộn xuống và chọn "Cấu hình DNS".</li>
              <li className="mb-2">Chọn "Thủ công" và thêm DNS của Google hoặc Cloudflare.</li>
              <li className="mb-2">Nhấp vào "Lưu" để áp dụng thay đổi.</li>
            </ol>
            
            <h3 className="text-xl font-semibold mb-3">3. Sử dụng VPN</h3>
            <p className="mb-4">
              VPN (Virtual Private Network) là một công cụ hiệu quả để vượt qua các hạn chế địa lý và chặn DNS. 
              Một số VPN đáng tin cậy bao gồm:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">NordVPN</li>
              <li className="mb-2">ExpressVPN</li>
              <li className="mb-2">Surfshark</li>
              <li className="mb-2">CyberGhost</li>
              <li className="mb-2">ProtonVPN</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý:</p>
              <p>Chỉ sử dụng các dịch vụ VPN uy tín và có chính sách bảo mật rõ ràng để đảm bảo an toàn thông tin cá nhân.</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">4. Xóa cache và cookie trình duyệt</h3>
            <p className="mb-4">
              Xóa cache và cookie có thể giúp khắc phục nhiều vấn đề khi truy cập website, bao gồm cả 92Lottery.
            </p>
            <h4 className="text-lg font-semibold mb-2">Cách xóa cache và cookie trên Chrome:</h4>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Nhấp vào biểu tượng ba chấm ở góc trên bên phải.</li>
              <li className="mb-2">Chọn "More tools" > "Clear browsing data".</li>
              <li className="mb-2">Chọn khoảng thời gian "All time".</li>
              <li className="mb-2">Đánh dấu "Cookies and other site data" và "Cached images and files".</li>
              <li className="mb-2">Nhấp vào "Clear data".</li>
            </ol>
            
            <h3 className="text-xl font-semibold mb-3">5. Sử dụng ứng dụng di động 92Lottery</h3>
            <p className="mb-4">
              Ứng dụng di động 92Lottery thường ít bị ảnh hưởng bởi các vấn đề truy cập hơn so với phiên bản web. 
              Bạn có thể tải ứng dụng từ trang chủ 92Lottery hoặc tham khảo{' '}
              <Link href="/app-92lottery" className="text-blue-600 hover:text-blue-800">
                hướng dẫn tải và cài đặt App 92Lottery
              </Link>.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">6. Kiểm tra kết nối internet</h3>
            <p className="mb-4">
              Đảm bảo kết nối internet của bạn ổn định và hoạt động bình thường. Bạn có thể:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Khởi động lại router.</li>
              <li className="mb-2">Chuyển từ Wi-Fi sang dữ liệu di động hoặc ngược lại.</li>
              <li className="mb-2">Kiểm tra xem các website khác có hoạt động bình thường không.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">7. Liên hệ hỗ trợ khách hàng</h3>
            <p className="mb-4">
              Nếu bạn đã thử tất cả các giải pháp trên nhưng vẫn không thể truy cập 92Lottery, 
              hãy liên hệ với đội ngũ hỗ trợ khách hàng qua:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Telegram: <a href="https://t.me/92lottery_official" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">@92lottery_official</a></li>
              <li className="mb-2">Email: support@92lottery.dev</li>
              <li className="mb-2">Hotline: +84 xxx xxx xxx</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các câu hỏi thường gặp về vấn đề truy cập 92Lottery</h2>
          
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
            Tình trạng 92Lottery bị sập hoặc không truy cập được có thể xảy ra do nhiều nguyên nhân khác nhau, 
            từ bảo trì hệ thống đến chặn DNS từ nhà mạng. Tuy nhiên, với các giải pháp được đề cập trong bài viết này, 
            bạn có thể dễ dàng khắc phục vấn đề và truy cập 92Lottery mọi lúc mọi nơi.
          </p>
          
          <p className="mb-4">
            Hãy nhớ lưu các link dự phòng chính thức, biết cách thay đổi DNS, và cân nhắc sử dụng ứng dụng di động 
            để có trải nghiệm truy cập ổn định nhất. Nếu gặp khó khăn, đừng ngần ngại liên hệ với đội ngũ hỗ trợ khách hàng 
            của 92Lottery để được giúp đỡ kịp thời.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Các bài viết liên quan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/app-92lottery" className="text-blue-600 hover:text-blue-800">
                  Cách tải và cài đặt App 92Lottery trên điện thoại Android và iOS
                </Link>
              </li>
              <li>
                <Link href="/92lottery-telegram" className="text-blue-600 hover:text-blue-800">
                  92Lottery Telegram - Cách tham gia nhóm và nhận thông báo mới nhất
                </Link>
              </li>
              <li>
                <Link href="/92lottery-co-lua-dao-khong" className="text-blue-600 hover:text-blue-800">
                  92Lottery có lừa đảo không? Đánh giá uy tín từ chuyên gia
                </Link>
              </li>
              <li>
                <Link href="/huong-dan-dang-nhap" className="text-blue-600 hover:text-blue-800">
                  Hướng dẫn đăng nhập 92Lottery đơn giản và nhanh chóng
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
