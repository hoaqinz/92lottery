import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Rút tiền 92Lottery - Hướng dẫn chi tiết và các lưu ý quan trọng',
  description: 'Hướng dẫn chi tiết cách rút tiền từ 92Lottery nhanh chóng và an toàn. Tìm hiểu các phương thức rút tiền, thời gian xử lý, hạn mức và các lưu ý quan trọng.',
  keywords: ['rút tiền 92lottery', 'cách rút tiền 92lottery', 'hướng dẫn rút tiền 92lottery', 'thời gian rút tiền 92lottery', 'hạn mức rút tiền 92lottery', 'phí rút tiền 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/rut-tien-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/rut-tien-92lottery',
      'x-default': 'https://92lottery.dev/rut-tien-92lottery'
    }
  },
};

export default function WithdrawalGuidePage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "92Lottery có những phương thức rút tiền nào?",
      answer: "92Lottery hỗ trợ nhiều phương thức rút tiền bao gồm: chuyển khoản ngân hàng (hầu hết các ngân hàng tại Việt Nam), ví điện tử (Momo, ZaloPay, VNPay), và tiền điện tử (USDT, BTC). Mỗi phương thức có thời gian xử lý và hạn mức khác nhau, với chuyển khoản ngân hàng là phương thức phổ biến nhất."
    },
    {
      question: "Thời gian rút tiền từ 92Lottery mất bao lâu?",
      answer: "Thời gian rút tiền từ 92Lottery phụ thuộc vào phương thức rút tiền bạn chọn. Chuyển khoản ngân hàng và ví điện tử thường được xử lý trong vòng 5-30 phút. Rút tiền qua tiền điện tử có thể mất từ 30 phút đến 2 giờ tùy thuộc vào tốc độ xác nhận của mạng lưới blockchain. Thành viên VIP được ưu tiên xử lý rút tiền nhanh hơn."
    },
    {
      question: "Hạn mức rút tiền tại 92Lottery là bao nhiêu?",
      answer: "Hạn mức rút tiền tại 92Lottery phụ thuộc vào cấp độ VIP của bạn. Người chơi thông thường có thể rút tối thiểu 100,000 VND và tối đa 100,000,000 VND/ngày. Thành viên VIP có hạn mức cao hơn, lên đến 5,000,000,000 VND/ngày cho cấp Diamond. Mỗi phương thức rút tiền cũng có hạn mức riêng."
    },
    {
      question: "Rút tiền từ 92Lottery có mất phí không?",
      answer: "92Lottery không thu phí rút tiền cho hầu hết các phương thức thanh toán. Tuy nhiên, một số phương thức như rút tiền qua tiền điện tử có thể phát sinh phí giao dịch từ mạng lưới blockchain. Ngoài ra, ngân hàng hoặc ví điện tử của bạn có thể thu phí nhận tiền tùy theo chính sách của họ."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Rút tiền 92Lottery", url: "https://92lottery.dev/rut-tien-92lottery" }
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
            <li className="text-gray-700">Rút tiền 92Lottery</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">Rút tiền 92Lottery - Hướng dẫn chi tiết và các lưu ý quan trọng</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Rút tiền là một trong những quy trình quan trọng khi tham gia cá cược tại 92Lottery. 
            Bài viết này sẽ hướng dẫn bạn chi tiết cách rút tiền từ 92Lottery nhanh chóng và an toàn, 
            cùng với các thông tin về phương thức rút tiền, thời gian xử lý, hạn mức và các lưu ý quan trọng.
          </p>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các phương thức rút tiền tại 92Lottery</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              92Lottery hỗ trợ nhiều phương thức rút tiền khác nhau, giúp người chơi có thể lựa chọn phương thức phù hợp nhất với nhu cầu của mình:
            </p>
            
            <h3 className="text-xl font-semibold mb-3">1. Chuyển khoản ngân hàng</h3>
            <p className="mb-4">
              Đây là phương thức rút tiền phổ biến nhất tại 92Lottery, hỗ trợ hầu hết các ngân hàng tại Việt Nam.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Thời gian xử lý:</strong> 5-30 phút</li>
              <li className="mb-2"><strong>Hạn mức tối thiểu:</strong> 100,000 VND</li>
              <li className="mb-2"><strong>Hạn mức tối đa:</strong> Tùy theo cấp độ VIP (100,000,000 VND/ngày cho người chơi thông thường)</li>
              <li className="mb-2"><strong>Phí rút tiền:</strong> Miễn phí</li>
              <li className="mb-2"><strong>Ngân hàng hỗ trợ:</strong> Vietcombank, Techcombank, BIDV, Agribank, VPBank, ACB, MB Bank, TPBank, và nhiều ngân hàng khác</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">2. Ví điện tử</h3>
            <p className="mb-4">
              92Lottery hỗ trợ rút tiền qua các ví điện tử phổ biến tại Việt Nam.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Thời gian xử lý:</strong> 5-15 phút</li>
              <li className="mb-2"><strong>Hạn mức tối thiểu:</strong> 100,000 VND</li>
              <li className="mb-2"><strong>Hạn mức tối đa:</strong> 20,000,000 VND/lần, 50,000,000 VND/ngày</li>
              <li className="mb-2"><strong>Phí rút tiền:</strong> Miễn phí</li>
              <li className="mb-2"><strong>Ví điện tử hỗ trợ:</strong> Momo, ZaloPay, VNPay</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">3. Tiền điện tử (Cryptocurrency)</h3>
            <p className="mb-4">
              Rút tiền qua tiền điện tử là lựa chọn tốt cho những người chơi muốn bảo mật cao và giao dịch quốc tế.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Thời gian xử lý:</strong> 30 phút - 2 giờ</li>
              <li className="mb-2"><strong>Hạn mức tối thiểu:</strong> Tương đương 500,000 VND</li>
              <li className="mb-2"><strong>Hạn mức tối đa:</strong> Tương đương 1,000,000,000 VND/ngày</li>
              <li className="mb-2"><strong>Phí rút tiền:</strong> Phí mạng lưới (network fee) tùy theo loại tiền điện tử</li>
              <li className="mb-2"><strong>Tiền điện tử hỗ trợ:</strong> USDT (TRC20, ERC20), BTC, ETH</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Hướng dẫn rút tiền từ 92Lottery</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Bước 1: Đăng nhập vào tài khoản 92Lottery</h3>
            <p className="mb-4">
              Đầu tiên, bạn cần đăng nhập vào tài khoản 92Lottery của mình. Nếu chưa biết cách đăng nhập, bạn có thể tham khảo{' '}
              <Link href="/huong-dan-dang-nhap" className="text-blue-600 hover:text-blue-800">
                hướng dẫn đăng nhập 92Lottery
              </Link>.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Bước 2: Truy cập trang Rút tiền</h3>
            <p className="mb-4">
              Sau khi đăng nhập thành công, bạn có thể truy cập trang Rút tiền bằng một trong các cách sau:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Nhấp vào biểu tượng "Ví" hoặc "Tài khoản" trên menu chính.</li>
              <li className="mb-2">Chọn mục "Rút tiền" hoặc "Withdrawal" từ menu thả xuống.</li>
              <li className="mb-2">Hoặc truy cập trực tiếp vào đường dẫn: 92lottery.dev/withdrawal (sau khi đăng nhập).</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Bước 3: Chọn phương thức rút tiền</h3>
            <p className="mb-4">
              Tại trang Rút tiền, bạn sẽ thấy danh sách các phương thức rút tiền được hỗ trợ. Chọn phương thức phù hợp với nhu cầu của bạn.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Bước 4: Nhập thông tin rút tiền</h3>
            <p className="mb-4">
              Tùy thuộc vào phương thức rút tiền bạn chọn, bạn cần nhập các thông tin khác nhau:
            </p>
            
            <h4 className="text-lg font-semibold mb-2">Đối với chuyển khoản ngân hàng:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Chọn ngân hàng từ danh sách.</li>
              <li className="mb-2">Nhập tên chủ tài khoản (phải trùng khớp với tên đăng ký tại 92Lottery).</li>
              <li className="mb-2">Nhập số tài khoản ngân hàng.</li>
              <li className="mb-2">Nhập chi nhánh ngân hàng (tùy chọn).</li>
              <li className="mb-2">Nhập số tiền muốn rút.</li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-2">Đối với ví điện tử:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Chọn loại ví điện tử (Momo, ZaloPay, VNPay).</li>
              <li className="mb-2">Nhập số điện thoại đăng ký ví điện tử.</li>
              <li className="mb-2">Nhập tên chủ ví (phải trùng khớp với tên đăng ký tại 92Lottery).</li>
              <li className="mb-2">Nhập số tiền muốn rút.</li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-2">Đối với tiền điện tử:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Chọn loại tiền điện tử (USDT, BTC, ETH).</li>
              <li className="mb-2">Đối với USDT, chọn mạng lưới (TRC20, ERC20).</li>
              <li className="mb-2">Nhập địa chỉ ví tiền điện tử của bạn.</li>
              <li className="mb-2">Nhập số tiền muốn rút (tính bằng VND, hệ thống sẽ tự động quy đổi).</li>
            </ul>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý quan trọng:</p>
              <p>Đảm bảo rằng tất cả thông tin bạn nhập đều chính xác. Sai sót trong thông tin rút tiền có thể dẫn đến việc giao dịch bị trì hoãn hoặc thất bại.</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Bước 5: Xác nhận rút tiền</h3>
            <p className="mb-4">
              Sau khi nhập đầy đủ thông tin, hãy kiểm tra lại cẩn thận và nhấp vào nút "Rút tiền" hoặc "Xác nhận".
            </p>
            <p className="mb-4">
              Tùy thuộc vào cài đặt bảo mật của bạn, hệ thống có thể yêu cầu xác thực bổ sung như:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Nhập mã xác nhận được gửi qua SMS.</li>
              <li className="mb-2">Xác thực qua email.</li>
              <li className="mb-2">Xác thực hai yếu tố (2FA) nếu bạn đã bật tính năng này.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Bước 6: Theo dõi trạng thái rút tiền</h3>
            <p className="mb-4">
              Sau khi yêu cầu rút tiền được gửi đi, bạn có thể theo dõi trạng thái giao dịch trong mục "Lịch sử giao dịch" hoặc "Lịch sử rút tiền" trong tài khoản của bạn.
            </p>
            <p className="mb-4">
              Các trạng thái rút tiền thường bao gồm:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Đang xử lý:</strong> Yêu cầu rút tiền đã được gửi và đang chờ xử lý.</li>
              <li className="mb-2"><strong>Đã xác nhận:</strong> Yêu cầu rút tiền đã được xác nhận và đang được chuyển.</li>
              <li className="mb-2"><strong>Hoàn thành:</strong> Tiền đã được chuyển thành công đến tài khoản của bạn.</li>
              <li className="mb-2"><strong>Từ chối:</strong> Yêu cầu rút tiền bị từ chối vì một số lý do (thông tin không chính xác, vi phạm điều khoản, v.v.).</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các lưu ý quan trọng khi rút tiền từ 92Lottery</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. Xác minh tài khoản</h3>
            <p className="mb-4">
              Trước khi có thể rút tiền, bạn cần hoàn thành quá trình xác minh tài khoản (KYC). Điều này thường bao gồm:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Xác minh số điện thoại.</li>
              <li className="mb-2">Xác minh email.</li>
              <li className="mb-2">Cung cấp giấy tờ tùy thân (CMND/CCCD/Hộ chiếu) nếu rút số tiền lớn.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">2. Điều kiện cược</h3>
            <p className="mb-4">
              Nếu bạn đã nhận khuyến mãi hoặc tiền thưởng, bạn cần đáp ứng điều kiện cược (wagering requirements) trước khi có thể rút tiền. Điều kiện cược thường được tính như sau:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Tiền thưởng x hệ số cược (thường từ 5x đến 30x tùy theo loại khuyến mãi).</li>
              <li className="mb-2">Ví dụ: Nếu bạn nhận 100,000 VND tiền thưởng với hệ số cược 10x, bạn cần đặt cược tổng cộng 1,000,000 VND trước khi có thể rút tiền.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">3. Thông tin tài khoản nhận tiền</h3>
            <p className="mb-4">
              Thông tin tài khoản nhận tiền (ngân hàng, ví điện tử, ví tiền điện tử) phải thuộc sở hữu của chính bạn và trùng khớp với thông tin đăng ký tại 92Lottery. 92Lottery không cho phép rút tiền vào tài khoản của người khác.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">4. Hạn mức rút tiền</h3>
            <p className="mb-4">
              Hạn mức rút tiền phụ thuộc vào cấp độ VIP của bạn:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Bronze (Đồng):</strong> Tối đa 100,000,000 VND/ngày</li>
              <li className="mb-2"><strong>Silver (Bạc):</strong> Tối đa 200,000,000 VND/ngày</li>
              <li className="mb-2"><strong>Gold (Vàng):</strong> Tối đa 500,000,000 VND/ngày</li>
              <li className="mb-2"><strong>Platinum (Bạch Kim):</strong> Tối đa 1,000,000,000 VND/ngày</li>
              <li className="mb-2"><strong>Ruby (Hồng Ngọc):</strong> Tối đa 2,000,000,000 VND/ngày</li>
              <li className="mb-2"><strong>Diamond (Kim Cương):</strong> Tối đa 5,000,000,000 VND/ngày</li>
            </ul>
            <p className="mb-4">
              Để biết thêm về cấp độ VIP và cách nâng cấp, bạn có thể tham khảo{' '}
              <Link href="/92lottery-club" className="text-blue-600 hover:text-blue-800">
                92Lottery Club - Đặc quyền thành viên VIP
              </Link>.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">5. Thời gian xử lý</h3>
            <p className="mb-4">
              Thời gian xử lý rút tiền có thể bị ảnh hưởng bởi nhiều yếu tố:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Thời gian cao điểm (có nhiều yêu cầu rút tiền cùng lúc).</li>
              <li className="mb-2">Bảo trì hệ thống ngân hàng hoặc ví điện tử.</li>
              <li className="mb-2">Vấn đề kỹ thuật từ phía nhà cung cấp dịch vụ thanh toán.</li>
              <li className="mb-2">Yêu cầu xác minh bổ sung từ đội ngũ bảo mật.</li>
            </ul>
            <p className="mb-4">
              Thành viên VIP được ưu tiên xử lý rút tiền nhanh hơn so với người chơi thông thường.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các câu hỏi thường gặp về rút tiền 92Lottery</h2>
          
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
            Rút tiền từ 92Lottery là một quá trình đơn giản và an toàn nếu bạn tuân thủ các hướng dẫn và lưu ý trong bài viết này. 
            Với nhiều phương thức rút tiền khác nhau, bạn có thể lựa chọn phương thức phù hợp nhất với nhu cầu của mình.
          </p>
          
          <p className="mb-4">
            Hãy nhớ rằng, để đảm bảo quá trình rút tiền diễn ra suôn sẻ, bạn cần cung cấp thông tin chính xác, 
            hoàn thành xác minh tài khoản, và đáp ứng các điều kiện cược nếu có. Nếu gặp bất kỳ vấn đề nào trong quá trình rút tiền, 
            đừng ngần ngại liên hệ với đội ngũ hỗ trợ khách hàng của 92Lottery để được giúp đỡ kịp thời.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Các bài viết liên quan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/huong-dan-nap-tien" className="text-blue-600 hover:text-blue-800">
                  Hướng dẫn nạp tiền 92Lottery nhanh chóng và an toàn
                </Link>
              </li>
              <li>
                <Link href="/92lottery-club" className="text-blue-600 hover:text-blue-800">
                  92Lottery Club - Đặc quyền thành viên VIP và cách tham gia
                </Link>
              </li>
              <li>
                <Link href="/92lottery-co-lua-dao-khong" className="text-blue-600 hover:text-blue-800">
                  92Lottery có lừa đảo không? Đánh giá uy tín từ chuyên gia
                </Link>
              </li>
              <li>
                <Link href="/khuyen-mai-92lottery" className="text-blue-600 hover:text-blue-800">
                  Khuyến mãi 92Lottery - Tổng hợp ưu đãi hấp dẫn nhất 2025
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
