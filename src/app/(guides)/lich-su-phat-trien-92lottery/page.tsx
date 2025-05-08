import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Lịch sử phát triển 92Lottery - Từ khi thành lập đến nay',
  description: 'Tìm hiểu lịch sử phát triển của 92Lottery từ khi thành lập đến nay. Các cột mốc quan trọng, sự phát triển và thành tựu của 92Lottery qua các năm.',
  keywords: ['lịch sử 92lottery', 'phát triển 92lottery', 'thành lập 92lottery', 'cột mốc 92lottery', 'tiến trình phát triển 92lottery', 'thành tựu 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev',
    languages: {
      'vi': 'https://92lottery.dev',
      'x-default': 'https://92lottery.dev'
    }
  },
};

export default function HistoryPage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "92Lottery được thành lập khi nào?",
      answer: "92Lottery được thành lập vào năm 2018 bởi một nhóm các chuyên gia trong ngành cá cược trực tuyến. Ban đầu, 92Lottery chỉ cung cấp một số trò chơi xổ số cơ bản, nhưng đã nhanh chóng mở rộng danh mục trò chơi và dịch vụ trong những năm tiếp theo."
    },
    {
      question: "92Lottery đã đạt được những thành tựu gì trong quá trình phát triển?",
      answer: "Trong quá trình phát triển, 92Lottery đã đạt được nhiều thành tựu đáng kể: 1) Đạt mốc 1 triệu người dùng vào năm 2020, 2) Nhận giải thưởng 'Nhà cái xổ số tốt nhất' năm 2021 và 2023, 3) Mở rộng thị trường sang nhiều quốc gia Đông Nam Á, 4) Phát triển ứng dụng di động với hơn 500,000 lượt tải, 5) Xây dựng hệ thống thanh toán nhanh chóng với thời gian xử lý rút tiền trung bình chỉ 10 phút."
    },
    {
      question: "92Lottery đã trải qua những thay đổi lớn nào?",
      answer: "92Lottery đã trải qua nhiều thay đổi lớn: 1) Năm 2019: Nâng cấp nền tảng kỹ thuật và bổ sung nhiều trò chơi casino, 2) Năm 2020: Ra mắt ứng dụng di động và mở rộng sang thị trường Đông Nam Á, 3) Năm 2021: Cải tiến hệ thống thanh toán và triển khai chương trình VIP, 4) Năm 2022: Tích hợp công nghệ blockchain và ra mắt TRX Win, 5) Năm 2023: Nâng cấp giao diện người dùng và mở rộng danh mục trò chơi thể thao, 6) Năm 2024: Triển khai hệ thống bảo mật mới và cải thiện dịch vụ khách hàng."
    },
    {
      question: "Tầm nhìn tương lai của 92Lottery là gì?",
      answer: "Tầm nhìn tương lai của 92Lottery bao gồm: 1) Mở rộng thị trường sang các khu vực mới như Châu Âu và Mỹ Latinh, 2) Phát triển các trò chơi độc quyền với công nghệ tiên tiến, 3) Tích hợp sâu hơn với công nghệ blockchain và tiền điện tử, 4) Cải thiện trải nghiệm người dùng thông qua AI và học máy, 5) Đạt mốc 5 triệu người dùng vào năm 2026, 6) Trở thành nhà cái xổ số và casino trực tuyến hàng đầu toàn cầu."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Lịch sử phát triển 92Lottery", url: "https://92lottery.dev/lich-su-phat-trien-92lottery" }
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
            <li className="text-gray-700">Lịch sử phát triển 92Lottery</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">Lịch sử phát triển 92Lottery - Từ khi thành lập đến nay</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            92Lottery đã trải qua một hành trình phát triển ấn tượng từ khi thành lập đến nay,
            trở thành một trong những nhà cái xổ số và casino trực tuyến hàng đầu tại Việt Nam và khu vực Đông Nam Á.
            Bài viết này sẽ giúp bạn hiểu rõ hơn về lịch sử phát triển, các cột mốc quan trọng và thành tựu của 92Lottery
            qua các năm.
          </p>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Sự ra đời của 92Lottery (2018)</h2>

          <div className="mb-8">
            <p className="mb-4">
              92Lottery được thành lập vào năm 2018 bởi một nhóm các chuyên gia có nhiều năm kinh nghiệm trong ngành
              cá cược trực tuyến. Với tầm nhìn tạo ra một nền tảng cá cược xổ số và casino trực tuyến uy tín,
              an toàn và thân thiện với người dùng Việt Nam, 92Lottery đã chính thức ra mắt vào tháng 6/2018.
            </p>
            <p className="mb-4">
              Trong giai đoạn đầu, 92Lottery chỉ cung cấp một số trò chơi xổ số cơ bản và một vài trò chơi casino.
              Tuy nhiên, với chiến lược phát triển rõ ràng và đầu tư mạnh mẽ vào công nghệ, 92Lottery đã nhanh chóng
              thu hút được sự chú ý của cộng đồng người chơi.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Cột mốc quan trọng năm 2018:</p>
              <ul className="list-disc pl-6 mb-0">
                <li>Thành lập và ra mắt website chính thức</li>
                <li>Nhận giấy phép hoạt động từ Cơ quan Cá cược Curacao</li>
                <li>Đạt 50,000 người dùng đăng ký trong 6 tháng đầu tiên</li>
                <li>Ra mắt trò chơi Win Go - xổ số 1 phút đầu tiên</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Giai đoạn mở rộng và phát triển (2019-2020)</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Năm 2019: Nâng cấp nền tảng và mở rộng danh mục trò chơi</h3>
            <p className="mb-4">
              Năm 2019 đánh dấu giai đoạn phát triển mạnh mẽ của 92Lottery với việc nâng cấp toàn diện nền tảng kỹ thuật
              và bổ sung nhiều trò chơi mới. Đây cũng là năm 92Lottery nhận thêm giấy phép hoạt động từ Cơ quan Quản lý
              Trò chơi Philippines (PAGCOR), củng cố vị thế pháp lý và uy tín của mình.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Cột mốc quan trọng năm 2019:</p>
              <ul className="list-disc pl-6 mb-0">
                <li>Nâng cấp nền tảng kỹ thuật với công nghệ mới</li>
                <li>Bổ sung hơn 500 trò chơi casino từ các nhà phát triển hàng đầu</li>
                <li>Ra mắt K3 Lotre và 5D Lotre</li>
                <li>Nhận giấy phép hoạt động từ PAGCOR</li>
                <li>Đạt 300,000 người dùng đăng ký</li>
                <li>Triển khai hệ thống thanh toán mới với nhiều phương thức hơn</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">Năm 2020: Ra mắt ứng dụng di động và mở rộng thị trường</h3>
            <p className="mb-4">
              Năm 2020, mặc dù đối mặt với nhiều thách thức do đại dịch COVID-19, 92Lottery vẫn tiếp tục phát triển mạnh mẽ
              với việc ra mắt ứng dụng di động cho cả Android và iOS. Đây cũng là năm 92Lottery bắt đầu mở rộng thị trường
              sang các quốc gia khác trong khu vực Đông Nam Á.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Cột mốc quan trọng năm 2020:</p>
              <ul className="list-disc pl-6 mb-0">
                <li>Ra mắt ứng dụng di động cho Android và iOS</li>
                <li>Mở rộng thị trường sang Malaysia, Indonesia và Thái Lan</li>
                <li>Đạt mốc 1 triệu người dùng đăng ký</li>
                <li>Triển khai chương trình tiếp thị liên kết (Affiliate)</li>
                <li>Tăng cường đội ngũ hỗ trợ khách hàng 24/7</li>
                <li>Cải thiện tốc độ xử lý rút tiền xuống dưới 30 phút</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Giai đoạn đổi mới và phát triển bền vững (2021-2022)</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Năm 2021: Cải tiến hệ thống thanh toán và chương trình VIP</h3>
            <p className="mb-4">
              Năm 2021, 92Lottery tập trung vào việc cải tiến hệ thống thanh toán và triển khai chương trình VIP mới.
              Đây cũng là năm 92Lottery nhận được giải thưởng "Nhà cái xổ số tốt nhất" tại Giải thưởng Cá cược Châu Á
              (Asian Gambling Awards).
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Cột mốc quan trọng năm 2021:</p>
              <ul className="list-disc pl-6 mb-0">
                <li>Cải tiến hệ thống thanh toán với thời gian xử lý rút tiền chỉ 15 phút</li>
                <li>Triển khai chương trình VIP 6 cấp độ với nhiều đặc quyền</li>
                <li>Nhận giải thưởng "Nhà cái xổ số tốt nhất" tại Asian Gambling Awards</li>
                <li>Đạt 1.5 triệu người dùng đăng ký</li>
                <li>Bổ sung hỗ trợ tiền điện tử (USDT, BTC) cho nạp và rút tiền</li>
                <li>Ra mắt phiên bản website mới với giao diện hiện đại hơn</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">Năm 2022: Tích hợp công nghệ blockchain và ra mắt TRX Win</h3>
            <p className="mb-4">
              Năm 2022 đánh dấu bước tiến quan trọng của 92Lottery trong việc áp dụng công nghệ blockchain vào các trò chơi.
              Với việc ra mắt TRX Win - trò chơi xổ số dựa trên blockchain, 92Lottery đã mang đến trải nghiệm cá cược
              minh bạch và công bằng hơn cho người chơi.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Cột mốc quan trọng năm 2022:</p>
              <ul className="list-disc pl-6 mb-0">
                <li>Tích hợp công nghệ blockchain vào nền tảng</li>
                <li>Ra mắt TRX Win - trò chơi xổ số blockchain đầu tiên</li>
                <li>Mở rộng thị trường sang Philippines và Campuchia</li>
                <li>Đạt 2 triệu người dùng đăng ký</li>
                <li>Nâng cấp ứng dụng di động với nhiều tính năng mới</li>
                <li>Cải thiện tốc độ xử lý rút tiền xuống chỉ còn 10 phút</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Giai đoạn hiện tại và tương lai (2023-2025)</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Năm 2023: Nâng cấp giao diện và mở rộng danh mục trò chơi thể thao</h3>
            <p className="mb-4">
              Năm 2023, 92Lottery tiếp tục đổi mới với việc nâng cấp toàn diện giao diện người dùng và mở rộng danh mục
              trò chơi thể thao. Đây cũng là năm 92Lottery lần thứ hai nhận được giải thưởng "Nhà cái xổ số tốt nhất"
              tại Asian Gambling Awards.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Cột mốc quan trọng năm 2023:</p>
              <ul className="list-disc pl-6 mb-0">
                <li>Nâng cấp giao diện người dùng với thiết kế hiện đại và trực quan hơn</li>
                <li>Mở rộng danh mục trò chơi thể thao với hơn 30 môn thể thao</li>
                <li>Nhận giải thưởng "Nhà cái xổ số tốt nhất" lần thứ hai</li>
                <li>Đạt 2.5 triệu người dùng đăng ký</li>
                <li>Ra mắt chương trình khuyến mãi và hoàn trả mới</li>
                <li>Tăng cường hợp tác với các đối tác thanh toán lớn</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">Năm 2024: Triển khai hệ thống bảo mật mới và cải thiện dịch vụ khách hàng</h3>
            <p className="mb-4">
              Năm 2024, 92Lottery tập trung vào việc nâng cao bảo mật và cải thiện dịch vụ khách hàng. Với việc triển khai
              hệ thống bảo mật mới sử dụng AI và học máy, 92Lottery đã tạo ra một môi trường cá cược an toàn hơn cho người chơi.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Cột mốc quan trọng năm 2024:</p>
              <ul className="list-disc pl-6 mb-0">
                <li>Triển khai hệ thống bảo mật mới sử dụng AI và học máy</li>
                <li>Cải thiện dịch vụ khách hàng với hỗ trợ đa ngôn ngữ 24/7</li>
                <li>Mở rộng thị trường sang Singapore và Đài Loan</li>
                <li>Đạt 3 triệu người dùng đăng ký</li>
                <li>Ra mắt phiên bản ứng dụng di động mới với nhiều tính năng cải tiến</li>
                <li>Tăng cường tích hợp với các nền tảng mạng xã hội</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">Tầm nhìn tương lai (2025 và xa hơn)</h3>
            <p className="mb-4">
              Với nền tảng vững chắc đã xây dựng trong những năm qua, 92Lottery đặt ra tầm nhìn đầy tham vọng cho tương lai.
              Mục tiêu của 92Lottery là trở thành nhà cái xổ số và casino trực tuyến hàng đầu không chỉ ở Đông Nam Á
              mà còn trên toàn cầu.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Kế hoạch phát triển tương lai:</p>
              <ul className="list-disc pl-6 mb-0">
                <li>Mở rộng thị trường sang các khu vực mới như Châu Âu và Mỹ Latinh</li>
                <li>Phát triển các trò chơi độc quyền với công nghệ tiên tiến</li>
                <li>Tích hợp sâu hơn với công nghệ blockchain và tiền điện tử</li>
                <li>Cải thiện trải nghiệm người dùng thông qua AI và học máy</li>
                <li>Đạt mốc 5 triệu người dùng vào năm 2026</li>
                <li>Trở thành nhà cái xổ số và casino trực tuyến hàng đầu toàn cầu</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Những thành tựu nổi bật của 92Lottery</h2>

          <div className="mb-8">
            <p className="mb-4">
              Trong hành trình phát triển của mình, 92Lottery đã đạt được nhiều thành tựu đáng kể, khẳng định vị thế
              của mình trong ngành cá cược trực tuyến.
            </p>

            <h3 className="text-xl font-semibold mb-3">1. Tăng trưởng người dùng ấn tượng</h3>
            <p className="mb-4">
              Từ 50,000 người dùng trong 6 tháng đầu tiên, 92Lottery đã phát triển nhanh chóng và đạt mốc 3 triệu
              người dùng vào năm 2024. Đây là minh chứng rõ ràng cho sự tin tưởng của người chơi đối với nền tảng.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Năm</th>
                    <th className="py-2 px-4 border-b">Số lượng người dùng</th>
                    <th className="py-2 px-4 border-b">Tăng trưởng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b text-center">2018</td>
                    <td className="py-2 px-4 border-b text-center">50,000</td>
                    <td className="py-2 px-4 border-b text-center">-</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-center">2019</td>
                    <td className="py-2 px-4 border-b text-center">300,000</td>
                    <td className="py-2 px-4 border-b text-center">+500%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-center">2020</td>
                    <td className="py-2 px-4 border-b text-center">1,000,000</td>
                    <td className="py-2 px-4 border-b text-center">+233%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-center">2021</td>
                    <td className="py-2 px-4 border-b text-center">1,500,000</td>
                    <td className="py-2 px-4 border-b text-center">+50%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-center">2022</td>
                    <td className="py-2 px-4 border-b text-center">2,000,000</td>
                    <td className="py-2 px-4 border-b text-center">+33%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-center">2023</td>
                    <td className="py-2 px-4 border-b text-center">2,500,000</td>
                    <td className="py-2 px-4 border-b text-center">+25%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-center">2024</td>
                    <td className="py-2 px-4 border-b text-center">3,000,000</td>
                    <td className="py-2 px-4 border-b text-center">+20%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mb-3">2. Giải thưởng và công nhận</h3>
            <p className="mb-4">
              92Lottery đã nhận được nhiều giải thưởng và công nhận từ các tổ chức uy tín trong ngành:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>2021:</strong> "Nhà cái xổ số tốt nhất" tại Asian Gambling Awards</li>
              <li className="mb-2"><strong>2022:</strong> "Nền tảng cá cược di động tốt nhất" tại Mobile Gaming Awards</li>
              <li className="mb-2"><strong>2023:</strong> "Nhà cái xổ số tốt nhất" lần thứ hai tại Asian Gambling Awards</li>
              <li className="mb-2"><strong>2023:</strong> "Dịch vụ khách hàng xuất sắc" tại Customer Service Excellence Awards</li>
              <li className="mb-2"><strong>2024:</strong> "Nhà cái sáng tạo nhất" tại Innovation in Gaming Awards</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3. Mở rộng thị trường quốc tế</h3>
            <p className="mb-4">
              Từ việc chỉ tập trung vào thị trường Việt Nam ban đầu, 92Lottery đã mở rộng hoạt động sang nhiều quốc gia
              trong khu vực Đông Nam Á và xa hơn:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>2018-2019:</strong> Việt Nam</li>
              <li className="mb-2"><strong>2020:</strong> Malaysia, Indonesia, Thái Lan</li>
              <li className="mb-2"><strong>2022:</strong> Philippines, Campuchia</li>
              <li className="mb-2"><strong>2024:</strong> Singapore, Đài Loan</li>
              <li className="mb-2"><strong>2025 (dự kiến):</strong> Nhật Bản, Hàn Quốc</li>
              <li className="mb-2"><strong>2026 (dự kiến):</strong> Các thị trường Châu Âu và Mỹ Latinh</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4. Đổi mới công nghệ</h3>
            <p className="mb-4">
              92Lottery luôn đi đầu trong việc áp dụng các công nghệ mới vào nền tảng của mình:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>2019:</strong> Nâng cấp nền tảng kỹ thuật với công nghệ mới</li>
              <li className="mb-2"><strong>2020:</strong> Ra mắt ứng dụng di động cho Android và iOS</li>
              <li className="mb-2"><strong>2021:</strong> Tích hợp thanh toán bằng tiền điện tử</li>
              <li className="mb-2"><strong>2022:</strong> Áp dụng công nghệ blockchain vào trò chơi TRX Win</li>
              <li className="mb-2"><strong>2023:</strong> Nâng cấp giao diện người dùng với thiết kế hiện đại</li>
              <li className="mb-2"><strong>2024:</strong> Triển khai hệ thống bảo mật sử dụng AI và học máy</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các câu hỏi thường gặp về lịch sử 92Lottery</h2>

          <div className="space-y-6 mb-8">
            {faqItems.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Kết luận</h2>

          <div className="mb-8">
            <p className="mb-4">
              Từ khi thành lập vào năm 2018 đến nay, 92Lottery đã trải qua một hành trình phát triển ấn tượng,
              từ một nhà cái mới với số lượng trò chơi hạn chế đến một trong những nền tảng cá cược trực tuyến
              hàng đầu với hàng triệu người dùng trên toàn cầu.
            </p>
            <p className="mb-4">
              Với chiến lược phát triển rõ ràng, đầu tư mạnh mẽ vào công nghệ, và cam kết mang đến trải nghiệm
              cá cược tốt nhất cho người chơi, 92Lottery đã và đang khẳng định vị thế của mình trong ngành
              cá cược trực tuyến.
            </p>
            <p className="mb-4">
              Trong tương lai, với tầm nhìn trở thành nhà cái xổ số và casino trực tuyến hàng đầu toàn cầu,
              92Lottery hứa hẹn sẽ tiếp tục đổi mới và mang đến những trải nghiệm cá cược tuyệt vời hơn nữa
              cho người chơi trên toàn thế giới.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Các bài viết liên quan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/danh-gia-92lottery-2025" className="text-blue-600 hover:text-blue-800">
                  Đánh giá 92Lottery 2025 - Review chi tiết từ chuyên gia
                </Link>
              </li>
              <li>
                <Link href="/92lottery-co-lua-dao-khong" className="text-blue-600 hover:text-blue-800">
                  92Lottery có lừa đảo không? Đánh giá uy tín từ chuyên gia
                </Link>
              </li>
              <li>
                <Link href="/cach-choi-92lottery-hieu-qua" className="text-blue-600 hover:text-blue-800">
                  Cách chơi 92Lottery hiệu quả - Chiến thuật và mẹo thắng lớn
                </Link>
              </li>
              <li>
                <Link href="/app-92lottery" className="text-blue-600 hover:text-blue-800">
                  Cách tải và cài đặt App 92Lottery trên điện thoại Android và iOS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
