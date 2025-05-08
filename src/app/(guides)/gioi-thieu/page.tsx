import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Giới thiệu 92Lottery - Nhà cái xổ số & Casino trực tuyến uy tín hàng đầu',
  description: 'Giới thiệu về 92Lottery - Nhà cái xổ số, lottery, thể thao và casino trực tuyến uy tín hàng đầu Việt Nam. Tìm hiểu về lịch sử, sứ mệnh, tầm nhìn và các dịch vụ của 92Lottery.',
  keywords: ['giới thiệu 92lottery', 'về 92lottery', 'nhà cái 92lottery', 'lịch sử 92lottery', 'dịch vụ 92lottery', 'uy tín 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/gioi-thieu',
    languages: {
      'vi': 'https://92lottery.dev/gioi-thieu',
      'x-default': 'https://92lottery.dev/gioi-thieu'
    }
  },
};

export default function AboutPage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "92Lottery là gì?",
      answer: "92Lottery là nền tảng cá cược xổ số, lottery, thể thao và casino trực tuyến uy tín hàng đầu Việt Nam, cung cấp đa dạng các trò chơi với tỷ lệ trả thưởng cao nhất thị trường, giao diện thân thiện và bảo mật tuyệt đối."
    },
    {
      question: "92Lottery có những trò chơi nào?",
      answer: "92Lottery cung cấp đa dạng các trò chơi bao gồm: xổ số (Win Go, K3, 5D, TRX), casino trực tuyến (Baccarat, Roulette, Blackjack), thể thao (cá cược bóng đá, bóng rổ, tennis), slot game, bắn cá, và nhiều trò chơi hấp dẫn khác."
    },
    {
      question: "92Lottery có uy tín không?",
      answer: "Có, 92Lottery là nhà cái uy tín hàng đầu Việt Nam với giấy phép hoạt động hợp pháp, hệ thống bảo mật tiên tiến, và chính sách thanh toán minh bạch. 92Lottery cam kết mang đến trải nghiệm cá cược công bằng, an toàn và đáng tin cậy cho người chơi."
    },
    {
      question: "Làm thế nào để liên hệ với 92Lottery?",
      answer: "Bạn có thể liên hệ với 92Lottery qua nhiều kênh khác nhau: live chat trực tiếp trên website, hotline hỗ trợ 24/7, email, hoặc các trang mạng xã hội chính thức của 92Lottery như Facebook, Telegram, Zalo."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Giới thiệu", url: "https://92lottery.dev/gioi-thieu" }
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
            <li className="text-gray-700">Giới thiệu</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">Giới thiệu 92Lottery - Nhà cái xổ số & Casino trực tuyến uy tín hàng đầu</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            92Lottery là nền tảng cá cược xổ số, lottery, thể thao và casino trực tuyến uy tín hàng đầu Việt Nam. 
            Với sứ mệnh mang đến trải nghiệm giải trí trực tuyến đẳng cấp, an toàn và công bằng, 92Lottery đã và đang 
            trở thành lựa chọn hàng đầu của hàng triệu người chơi tại Việt Nam và khu vực Đông Nam Á.
          </p>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Lịch sử hình thành và phát triển</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              92Lottery được thành lập vào năm 2018 bởi một nhóm các chuyên gia trong ngành công nghiệp cá cược trực tuyến 
              với hơn 15 năm kinh nghiệm. Với tầm nhìn trở thành nền tảng cá cược trực tuyến hàng đầu tại Việt Nam, 
              92Lottery đã không ngừng đổi mới và phát triển để mang đến cho người chơi những trải nghiệm tốt nhất.
            </p>
            <p className="mb-4">
              Trong những năm qua, 92Lottery đã đạt được nhiều cột mốc quan trọng:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>2018:</strong> Thành lập và ra mắt nền tảng cá cược trực tuyến đầu tiên.</li>
              <li className="mb-2"><strong>2019:</strong> Mở rộng danh mục trò chơi với các sản phẩm xổ số và casino trực tuyến.</li>
              <li className="mb-2"><strong>2020:</strong> Đạt mốc 1 triệu người dùng đăng ký và ra mắt ứng dụng di động.</li>
              <li className="mb-2"><strong>2021:</strong> Nâng cấp hệ thống bảo mật và thanh toán, đồng thời mở rộng thị trường sang các nước Đông Nam Á.</li>
              <li className="mb-2"><strong>2022:</strong> Đạt chứng nhận uy tín từ các tổ chức đánh giá cá cược quốc tế.</li>
              <li className="mb-2"><strong>2023:</strong> Ra mắt phiên bản nền tảng mới với nhiều tính năng hiện đại và trải nghiệm người dùng được cải thiện.</li>
              <li className="mb-2"><strong>2024:</strong> Tiếp tục mở rộng và phát triển, với mục tiêu trở thành nhà cái hàng đầu trong khu vực.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Sứ mệnh và tầm nhìn</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Sứ mệnh</h3>
            <p className="mb-4">
              Sứ mệnh của 92Lottery là mang đến cho người chơi trải nghiệm cá cược trực tuyến an toàn, công bằng và giải trí. 
              Chúng tôi cam kết cung cấp các sản phẩm và dịch vụ chất lượng cao, đồng thời thúc đẩy cá cược có trách nhiệm 
              và bảo vệ quyền lợi của người chơi.
            </p>

            <h3 className="text-xl font-semibold mb-3">Tầm nhìn</h3>
            <p className="mb-4">
              Tầm nhìn của 92Lottery là trở thành nền tảng cá cược trực tuyến hàng đầu tại Việt Nam và khu vực Đông Nam Á, 
              được biết đến với sự uy tín, đa dạng sản phẩm, và trải nghiệm người dùng xuất sắc.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các sản phẩm và dịch vụ</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              92Lottery cung cấp đa dạng các sản phẩm và dịch vụ cá cược trực tuyến, bao gồm:
            </p>

            <h3 className="text-xl font-semibold mb-3">1. Xổ số và Lottery</h3>
            <p className="mb-4">
              92Lottery cung cấp nhiều trò chơi xổ số và lottery hấp dẫn với tỷ lệ trả thưởng cao:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Win Go:</strong> Xổ số 1 phút với cơ hội đoán số Xanh/Đỏ/Tím.</li>
              <li className="mb-2"><strong>K3 Lotre:</strong> Xổ số 3 phút với nhiều lựa chọn cược như Lớn/Nhỏ, Lẻ/Chẵn.</li>
              <li className="mb-2"><strong>5D Lotre:</strong> Xổ số 5 phút với nhiều cách chơi đa dạng.</li>
              <li className="mb-2"><strong>TRX Win:</strong> Xổ số dựa trên blockchain với tính minh bạch cao.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2. Casino trực tuyến</h3>
            <p className="mb-4">
              Trải nghiệm không khí sòng bài thực tế với các trò chơi casino trực tuyến được phát trực tiếp:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Baccarat:</strong> Trò chơi bài phổ biến với luật chơi đơn giản.</li>
              <li className="mb-2"><strong>Roulette:</strong> Trò chơi quay số may mắn với nhiều lựa chọn cược.</li>
              <li className="mb-2"><strong>Blackjack:</strong> Trò chơi đòi hỏi chiến thuật và kỹ năng.</li>
              <li className="mb-2"><strong>Sicbo:</strong> Trò chơi xúc xắc truyền thống của Á Đông.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3. Thể thao</h3>
            <p className="mb-4">
              Đặt cược vào các sự kiện thể thao lớn trên toàn thế giới:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Bóng đá:</strong> Cá cược vào các giải đấu lớn như Premier League, La Liga, Champions League, World Cup, v.v.</li>
              <li className="mb-2"><strong>Bóng rổ:</strong> NBA, FIBA, và các giải đấu bóng rổ quốc tế khác.</li>
              <li className="mb-2"><strong>Tennis:</strong> Grand Slam, ATP, WTA, và các giải đấu tennis lớn.</li>
              <li className="mb-2"><strong>Esports:</strong> Cá cược vào các giải đấu game điện tử như DOTA 2, LOL, CS:GO, v.v.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4. Slot game và Bắn cá</h3>
            <p className="mb-4">
              Giải trí với hàng trăm slot game hấp dẫn và trò chơi bắn cá sôi động:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Slot game:</strong> Đa dạng chủ đề và jackpot lớn.</li>
              <li className="mb-2"><strong>Bắn cá:</strong> Trò chơi bắn cá sôi động với đồ họa đẹp mắt.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Uy tín và bảo mật</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              92Lottery luôn đặt uy tín và bảo mật lên hàng đầu. Chúng tôi cam kết:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Giấy phép hoạt động hợp pháp:</strong> 92Lottery hoạt động dưới giấy phép cá cược trực tuyến hợp pháp, đảm bảo tuân thủ các quy định và tiêu chuẩn quốc tế.</li>
              <li className="mb-2"><strong>Bảo mật thông tin:</strong> Hệ thống bảo mật tiên tiến với mã hóa SSL 256-bit, bảo vệ thông tin cá nhân và tài chính của người chơi.</li>
              <li className="mb-2"><strong>Công bằng và minh bạch:</strong> Các trò chơi tại 92Lottery đều sử dụng bộ sinh số ngẫu nhiên (RNG) được chứng nhận, đảm bảo tính công bằng và minh bạch.</li>
              <li className="mb-2"><strong>Thanh toán nhanh chóng:</strong> Hệ thống thanh toán an toàn và nhanh chóng, với nhiều phương thức nạp/rút tiền đa dạng.</li>
              <li className="mb-2"><strong>Hỗ trợ 24/7:</strong> Đội ngũ hỗ trợ khách hàng chuyên nghiệp, sẵn sàng giải đáp mọi thắc mắc 24/7.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Trách nhiệm xã hội</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              92Lottery cam kết thúc đẩy cá cược có trách nhiệm và bảo vệ người chơi:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Cá cược có trách nhiệm:</strong> Chúng tôi cung cấp các công cụ giúp người chơi kiểm soát hoạt động cá cược của mình, bao gồm giới hạn đặt cược, giới hạn thời gian, và tự loại trừ.</li>
              <li className="mb-2"><strong>Bảo vệ người chơi:</strong> Chúng tôi nghiêm cấm người dưới 18 tuổi tham gia cá cược và có các biện pháp xác minh tuổi nghiêm ngặt.</li>
              <li className="mb-2"><strong>Hỗ trợ cộng đồng:</strong> 92Lottery tích cực tham gia các hoạt động từ thiện và hỗ trợ cộng đồng.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các câu hỏi thường gặp về 92Lottery</h2>
          
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
            92Lottery tự hào là nhà cái xổ số và casino trực tuyến uy tín hàng đầu Việt Nam, mang đến cho người chơi 
            trải nghiệm cá cược an toàn, công bằng và giải trí. Với đa dạng sản phẩm, hệ thống bảo mật tiên tiến, 
            và dịch vụ khách hàng chuyên nghiệp, 92Lottery cam kết đồng hành cùng người chơi trên hành trình chinh phục 
            những giải thưởng lớn.
          </p>
          
          <p className="mb-4">
            Hãy tham gia 92Lottery ngay hôm nay để trải nghiệm những điều tuyệt vời nhất mà chúng tôi mang lại!
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
