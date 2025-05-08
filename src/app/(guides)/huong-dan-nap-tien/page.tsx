import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Hướng dẫn nạp tiền 92Lottery nhanh chóng và an toàn',
  description: 'Hướng dẫn chi tiết các phương thức nạp tiền vào tài khoản 92Lottery. Nạp tiền nhanh chóng, an toàn và nhận thêm khuyến mãi hấp dẫn.',
  keywords: ['nạp tiền 92lottery', 'hướng dẫn nạp tiền 92lottery', 'cách nạp tiền 92lottery', 'phương thức thanh toán 92lottery', 'khuyến mãi nạp tiền 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/huong-dan-nap-tien',
    languages: {
      'vi': 'https://92lottery.dev/huong-dan-nap-tien',
      'x-default': 'https://92lottery.dev/huong-dan-nap-tien'
    }
  },
};

export default function DepositGuidePage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "92Lottery có những phương thức nạp tiền nào?",
      answer: "92Lottery hỗ trợ nhiều phương thức nạp tiền khác nhau, bao gồm: chuyển khoản ngân hàng, ví điện tử (Momo, ZaloPay, VNPay), thẻ cào điện thoại, và tiền điện tử (USDT, BTC)."
    },
    {
      question: "Nạp tiền vào 92Lottery có mất phí không?",
      answer: "Không, 92Lottery không thu phí nạp tiền. Tuy nhiên, tùy thuộc vào phương thức thanh toán bạn chọn, nhà cung cấp dịch vụ thanh toán có thể thu một khoản phí nhỏ."
    },
    {
      question: "Tôi nạp tiền vào 92Lottery bao lâu thì được cộng tiền?",
      answer: "Thời gian xử lý nạp tiền tùy thuộc vào phương thức thanh toán. Chuyển khoản ngân hàng và ví điện tử thường được xử lý trong vòng 1-5 phút. Thẻ cào điện thoại có thể mất 5-15 phút. Tiền điện tử có thể mất từ 10-30 phút tùy thuộc vào tốc độ xác nhận của mạng lưới."
    },
    {
      question: "Tôi có được khuyến mãi khi nạp tiền vào 92Lottery không?",
      answer: "Có, 92Lottery thường xuyên có các chương trình khuyến mãi nạp tiền hấp dẫn. Tùy vào từng thời điểm, bạn có thể nhận được khuyến mãi từ 10% đến 100% giá trị nạp. Hãy theo dõi trang khuyến mãi của 92Lottery để biết thêm chi tiết."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Hướng dẫn nạp tiền", url: "https://92lottery.dev/huong-dan-nap-tien" }
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
            <li className="text-gray-700">Hướng dẫn nạp tiền</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">Hướng dẫn nạp tiền 92Lottery nhanh chóng và an toàn</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Nạp tiền vào tài khoản 92Lottery là bước quan trọng để bạn có thể tham gia các trò chơi hấp dẫn và có cơ hội trúng thưởng lớn. 
            Bài viết này sẽ hướng dẫn bạn chi tiết các phương thức nạp tiền vào 92Lottery, giúp bạn nạp tiền nhanh chóng, an toàn và nhận thêm nhiều khuyến mãi hấp dẫn.
          </p>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các phương thức nạp tiền 92Lottery</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. Chuyển khoản ngân hàng</h3>
            <p className="mb-4">
              Chuyển khoản ngân hàng là phương thức nạp tiền phổ biến và an toàn nhất tại 92Lottery. 
              Bạn có thể chuyển khoản từ bất kỳ ngân hàng nào tại Việt Nam.
            </p>
            <h4 className="text-lg font-semibold mb-2">Các bước nạp tiền qua chuyển khoản ngân hàng:</h4>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Đăng nhập vào tài khoản 92Lottery của bạn.</li>
              <li className="mb-2">Nhấp vào nút "Nạp tiền" hoặc "Ví" trên menu chính.</li>
              <li className="mb-2">Chọn phương thức "Chuyển khoản ngân hàng".</li>
              <li className="mb-2">Chọn ngân hàng bạn muốn chuyển khoản.</li>
              <li className="mb-2">Hệ thống sẽ hiển thị thông tin tài khoản ngân hàng của 92Lottery, bao gồm: tên chủ tài khoản, số tài khoản, chi nhánh ngân hàng.</li>
              <li className="mb-2">Thực hiện chuyển khoản từ tài khoản ngân hàng của bạn đến tài khoản của 92Lottery với nội dung chuyển khoản là mã giao dịch được cung cấp.</li>
              <li className="mb-2">Sau khi chuyển khoản thành công, quay lại trang nạp tiền và nhấp vào nút "Tôi đã chuyển khoản".</li>
              <li className="mb-2">Hệ thống sẽ xác nhận giao dịch và cộng tiền vào tài khoản của bạn trong vòng 1-5 phút.</li>
            </ol>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý quan trọng:</p>
              <p>Đảm bảo rằng bạn nhập đúng nội dung chuyển khoản để hệ thống có thể xác nhận giao dịch của bạn. Nếu không, quá trình xử lý có thể bị chậm trễ.</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">2. Ví điện tử</h3>
            <p className="mb-4">
              92Lottery hỗ trợ nạp tiền qua các ví điện tử phổ biến tại Việt Nam như Momo, ZaloPay, và VNPay.
            </p>
            <h4 className="text-lg font-semibold mb-2">Các bước nạp tiền qua ví điện tử:</h4>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Đăng nhập vào tài khoản 92Lottery của bạn.</li>
              <li className="mb-2">Nhấp vào nút "Nạp tiền" hoặc "Ví" trên menu chính.</li>
              <li className="mb-2">Chọn phương thức "Ví điện tử" và chọn ví điện tử bạn muốn sử dụng (Momo, ZaloPay, VNPay).</li>
              <li className="mb-2">Nhập số tiền bạn muốn nạp.</li>
              <li className="mb-2">Hệ thống sẽ hiển thị thông tin thanh toán, bao gồm: số điện thoại/tài khoản nhận tiền, tên chủ tài khoản, và nội dung chuyển tiền.</li>
              <li className="mb-2">Mở ứng dụng ví điện tử trên điện thoại của bạn và thực hiện chuyển tiền theo thông tin được cung cấp.</li>
              <li className="mb-2">Sau khi chuyển tiền thành công, quay lại trang nạp tiền và nhấp vào nút "Tôi đã thanh toán".</li>
              <li className="mb-2">Hệ thống sẽ xác nhận giao dịch và cộng tiền vào tài khoản của bạn trong vòng 1-5 phút.</li>
            </ol>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">3. Thẻ cào điện thoại</h3>
            <p className="mb-4">
              Nếu bạn không có tài khoản ngân hàng hoặc ví điện tử, bạn có thể nạp tiền vào 92Lottery bằng thẻ cào điện thoại.
            </p>
            <h4 className="text-lg font-semibold mb-2">Các bước nạp tiền qua thẻ cào điện thoại:</h4>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Đăng nhập vào tài khoản 92Lottery của bạn.</li>
              <li className="mb-2">Nhấp vào nút "Nạp tiền" hoặc "Ví" trên menu chính.</li>
              <li className="mb-2">Chọn phương thức "Thẻ cào điện thoại".</li>
              <li className="mb-2">Chọn nhà mạng của thẻ cào (Viettel, Mobifone, Vinaphone).</li>
              <li className="mb-2">Nhập mã thẻ cào và số seri của thẻ.</li>
              <li className="mb-2">Nhấp vào nút "Nạp tiền".</li>
              <li className="mb-2">Hệ thống sẽ xác nhận giao dịch và cộng tiền vào tài khoản của bạn trong vòng 5-15 phút.</li>
            </ol>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý:</p>
              <p>Khi nạp tiền bằng thẻ cào điện thoại, bạn sẽ bị trừ một khoản phí nhỏ (thường là 10-20% giá trị thẻ) do chính sách của nhà mạng.</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">4. Tiền điện tử (Cryptocurrency)</h3>
            <p className="mb-4">
              92Lottery cũng hỗ trợ nạp tiền bằng tiền điện tử như USDT, BTC, ETH, và nhiều loại tiền điện tử khác.
            </p>
            <h4 className="text-lg font-semibold mb-2">Các bước nạp tiền qua tiền điện tử:</h4>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Đăng nhập vào tài khoản 92Lottery của bạn.</li>
              <li className="mb-2">Nhấp vào nút "Nạp tiền" hoặc "Ví" trên menu chính.</li>
              <li className="mb-2">Chọn phương thức "Tiền điện tử" và chọn loại tiền điện tử bạn muốn sử dụng (USDT, BTC, ETH, v.v.).</li>
              <li className="mb-2">Hệ thống sẽ hiển thị địa chỉ ví tiền điện tử và mã QR để bạn có thể chuyển tiền.</li>
              <li className="mb-2">Mở ví tiền điện tử của bạn và thực hiện chuyển tiền đến địa chỉ được cung cấp.</li>
              <li className="mb-2">Sau khi chuyển tiền thành công, quay lại trang nạp tiền và nhấp vào nút "Tôi đã thanh toán".</li>
              <li className="mb-2">Hệ thống sẽ xác nhận giao dịch và cộng tiền vào tài khoản của bạn sau khi giao dịch được xác nhận trên mạng lưới blockchain (thường mất 10-30 phút).</li>
            </ol>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Khuyến mãi nạp tiền 92Lottery</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              92Lottery thường xuyên có các chương trình khuyến mãi nạp tiền hấp dẫn dành cho người chơi. Dưới đây là một số khuyến mãi phổ biến:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Khuyến mãi nạp lần đầu:</strong> Nhận thêm 100% giá trị nạp khi nạp tiền lần đầu.</li>
              <li className="mb-2"><strong>Khuyến mãi nạp hàng ngày:</strong> Nhận thêm 10-20% giá trị nạp khi nạp tiền hàng ngày.</li>
              <li className="mb-2"><strong>Khuyến mãi nạp cuối tuần:</strong> Nhận thêm 30-50% giá trị nạp khi nạp tiền vào cuối tuần.</li>
              <li className="mb-2"><strong>Khuyến mãi nạp sự kiện đặc biệt:</strong> Nhận thêm các khuyến mãi đặc biệt trong các sự kiện như Tết, Giáng sinh, v.v.</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo:</p>
              <p>Để tận dụng tối đa các khuyến mãi nạp tiền, hãy theo dõi trang khuyến mãi của 92Lottery hoặc đăng ký nhận thông báo qua email/SMS.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các câu hỏi thường gặp khi nạp tiền 92Lottery</h2>
          
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
            Nạp tiền vào 92Lottery là một quá trình đơn giản và nhanh chóng. Với nhiều phương thức nạp tiền khác nhau, 
            bạn có thể dễ dàng chọn phương thức phù hợp nhất với mình. Hãy nhớ tận dụng các chương trình khuyến mãi nạp tiền 
            để tối đa hóa giá trị nạp của bạn.
          </p>
          
          <p className="mb-4">
            Nếu bạn gặp bất kỳ khó khăn nào trong quá trình nạp tiền, đừng ngần ngại liên hệ với đội ngũ hỗ trợ khách hàng 
            của 92Lottery qua live chat hoặc hotline để được hỗ trợ kịp thời.
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
