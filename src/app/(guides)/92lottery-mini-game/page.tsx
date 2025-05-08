import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '92Lottery Mini Game - Hướng dẫn chơi và mẹo thắng lớn',
  description: 'Hướng dẫn chi tiết về các mini game tại 92Lottery như Win Go, K3, 5D, TRX. Tìm hiểu luật chơi, chiến thuật và mẹo thắng lớn khi tham gia mini game tại 92Lottery.',
  keywords: ['92lottery mini game', 'win go 92lottery', 'k3 92lottery', '5d 92lottery', 'trx 92lottery', 'mini game 92lottery', 'cách chơi mini game 92lottery', 'mẹo thắng mini game 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/92lottery-mini-game',
    languages: {
      'vi': 'https://92lottery.dev/92lottery-mini-game',
      'x-default': 'https://92lottery.dev/92lottery-mini-game'
    }
  },
};

export default function MiniGameGuidePage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "Win Go là gì và cách chơi như thế nào?",
      answer: "Win Go là mini game xổ số 1 phút tại 92Lottery, cho phép người chơi đoán kết quả số từ 0-9 hoặc màu sắc (Xanh/Đỏ/Tím). Cách chơi đơn giản: chọn số hoặc màu bạn dự đoán, đặt cược, và chờ kết quả sau 1 phút. Nếu dự đoán đúng, bạn sẽ nhận tiền thưởng theo tỷ lệ quy định."
    },
    {
      question: "K3 Lotre tại 92Lottery có những cách đặt cược nào?",
      answer: "K3 Lotre tại 92Lottery có nhiều cách đặt cược: Tổng 3 số (Lớn/Nhỏ, Lẻ/Chẵn), Đồng nhất (3 số giống nhau), Đôi (2 số giống nhau), Kép (3 số liên tiếp), và Đặt số cụ thể. Mỗi cách đặt cược có tỷ lệ trả thưởng khác nhau, với Đồng nhất có tỷ lệ cao nhất."
    },
    {
      question: "Làm thế nào để tăng cơ hội thắng khi chơi mini game tại 92Lottery?",
      answer: "Để tăng cơ hội thắng khi chơi mini game tại 92Lottery, bạn nên: Tìm hiểu kỹ luật chơi và tỷ lệ trả thưởng, theo dõi xu hướng kết quả gần đây, áp dụng chiến thuật quản lý vốn phù hợp, bắt đầu với số tiền cược nhỏ, và không cố gắng gỡ lại tiền thua bằng cách tăng mức cược đột ngột."
    },
    {
      question: "Mini game nào tại 92Lottery có tỷ lệ thắng cao nhất?",
      answer: "Trong các mini game tại 92Lottery, Win Go với lựa chọn cược Xanh/Đỏ có tỷ lệ thắng cao nhất (gần 50%) nhưng tỷ lệ trả thưởng thấp hơn (1.98:1). Nếu bạn mới bắt đầu, đây là lựa chọn phù hợp để làm quen với hệ thống mini game của 92Lottery."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "92Lottery Mini Game", url: "https://92lottery.dev/92lottery-mini-game" }
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
            <li className="text-gray-700">92Lottery Mini Game</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">92Lottery Mini Game - Hướng dẫn chơi và mẹo thắng lớn</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Mini game tại 92Lottery là những trò chơi xổ số nhanh, đơn giản và hấp dẫn với thời gian chờ kết quả ngắn. 
            Bài viết này sẽ hướng dẫn bạn chi tiết về các mini game phổ biến tại 92Lottery như Win Go, K3, 5D, TRX, 
            cùng với luật chơi, chiến thuật và mẹo thắng lớn.
          </p>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Win Go - Mini Game Xổ Số 1 Phút</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Giới thiệu về Win Go</h3>
            <p className="mb-4">
              Win Go là mini game xổ số phổ biến nhất tại 92Lottery với thời gian chờ kết quả chỉ 1 phút. 
              Trò chơi này dựa trên việc dự đoán kết quả số từ 0-9 hoặc màu sắc (Xanh/Đỏ/Tím).
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Luật chơi Win Go</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Thời gian:</strong> Mỗi phiên kéo dài 1 phút.</li>
              <li className="mb-2"><strong>Cách đặt cược:</strong> Người chơi có thể đặt cược vào số (0-9) hoặc màu sắc (Xanh/Đỏ/Tím).</li>
              <li className="mb-2"><strong>Quy tắc màu sắc:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Số Xanh: 1, 3, 5, 7, 9</li>
                  <li>Số Đỏ: 0, 2, 4, 6, 8</li>
                  <li>Số Tím: 0 và 5 (khi xuất hiện số 0 hoặc 5, người chơi đặt cược Tím sẽ thắng)</li>
                </ul>
              </li>
              <li className="mb-2"><strong>Tỷ lệ trả thưởng:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Đặt số chính xác: 9.8:1</li>
                  <li>Đặt Xanh/Đỏ: 1.98:1</li>
                  <li>Đặt Tím: 4.5:1</li>
                </ul>
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Chiến thuật chơi Win Go</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Chiến thuật Martingale:</strong> Tăng gấp đôi số tiền cược sau mỗi lần thua, và quay lại mức cược ban đầu sau khi thắng. Chiến thuật này phù hợp khi đặt cược Xanh/Đỏ.</li>
              <li className="mb-2"><strong>Chiến thuật D'Alembert:</strong> Tăng một đơn vị sau mỗi lần thua và giảm một đơn vị sau mỗi lần thắng. Đây là chiến thuật an toàn hơn Martingale.</li>
              <li className="mb-2"><strong>Theo dõi xu hướng:</strong> Phân tích kết quả gần đây để tìm ra xu hướng và đặt cược theo xu hướng đó.</li>
            </ul>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo chơi Win Go:</p>
              <p>Bắt đầu với cược Xanh/Đỏ vì có tỷ lệ thắng cao nhất (gần 50%). Khi đã quen với trò chơi, bạn có thể thử các cược có tỷ lệ trả thưởng cao hơn như đặt số cụ thể hoặc Tím.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">K3 Lotre - Xổ Số 3 Phút</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Giới thiệu về K3 Lotre</h3>
            <p className="mb-4">
              K3 Lotre là mini game xổ số dựa trên việc quay 3 viên xúc xắc, mỗi viên có 6 mặt từ 1-6. 
              Kết quả là tổng điểm của 3 viên xúc xắc và các kết hợp đặc biệt.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Luật chơi K3 Lotre</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Thời gian:</strong> Mỗi phiên kéo dài 3 phút.</li>
              <li className="mb-2"><strong>Cách đặt cược:</strong> Người chơi có thể đặt cược vào nhiều lựa chọn khác nhau.</li>
              <li className="mb-2"><strong>Các lựa chọn cược:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li><strong>Tổng 3 số:</strong> Lớn (11-18) / Nhỏ (3-10), Lẻ / Chẵn</li>
                  <li><strong>Đồng nhất:</strong> 3 số giống nhau (ví dụ: 1-1-1, 2-2-2)</li>
                  <li><strong>Đôi:</strong> 2 số giống nhau (ví dụ: 1-1-2, 3-3-5)</li>
                  <li><strong>Kép:</strong> 3 số liên tiếp (ví dụ: 1-2-3, 4-5-6)</li>
                  <li><strong>Đặt số cụ thể:</strong> Dự đoán chính xác 3 số xuất hiện</li>
                </ul>
              </li>
              <li className="mb-2"><strong>Tỷ lệ trả thưởng:</strong> Tùy thuộc vào loại cược, với Đồng nhất có tỷ lệ trả thưởng cao nhất.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Chiến thuật chơi K3 Lotre</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Cược Lớn/Nhỏ, Lẻ/Chẵn:</strong> Đây là lựa chọn an toàn nhất với tỷ lệ thắng gần 50%.</li>
              <li className="mb-2"><strong>Cược Đôi:</strong> Có tỷ lệ thắng khá cao và tỷ lệ trả thưởng tốt hơn Lớn/Nhỏ, Lẻ/Chẵn.</li>
              <li className="mb-2"><strong>Cược Đồng nhất:</strong> Tỷ lệ thắng thấp nhưng tỷ lệ trả thưởng rất cao, phù hợp cho người chơi muốn đánh lớn.</li>
            </ul>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo chơi K3 Lotre:</p>
              <p>Kết hợp các loại cược khác nhau trong một phiên để cân bằng giữa rủi ro và phần thưởng. Ví dụ, đặt phần lớn vào Lớn/Nhỏ và một phần nhỏ vào Đồng nhất.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">5D Lotre - Xổ Số 5 Phút</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Giới thiệu về 5D Lotre</h3>
            <p className="mb-4">
              5D Lotre là mini game xổ số dựa trên việc quay 5 số từ 0-9. Người chơi có thể đặt cược vào nhiều lựa chọn khác nhau 
              dựa trên 5 số này.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Luật chơi 5D Lotre</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Thời gian:</strong> Mỗi phiên kéo dài 5 phút.</li>
              <li className="mb-2"><strong>Cách đặt cược:</strong> Người chơi có thể đặt cược vào nhiều lựa chọn khác nhau.</li>
              <li className="mb-2"><strong>Các lựa chọn cược:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li><strong>Số đầu tiên:</strong> Dự đoán số đầu tiên (0-9)</li>
                  <li><strong>Số thứ hai:</strong> Dự đoán số thứ hai (0-9)</li>
                  <li><strong>Số thứ ba:</strong> Dự đoán số thứ ba (0-9)</li>
                  <li><strong>Số thứ tư:</strong> Dự đoán số thứ tư (0-9)</li>
                  <li><strong>Số thứ năm:</strong> Dự đoán số thứ năm (0-9)</li>
                  <li><strong>Tổng 5 số:</strong> Lớn/Nhỏ, Lẻ/Chẵn</li>
                  <li><strong>Đặt cược kết hợp:</strong> Dự đoán nhiều vị trí cùng lúc</li>
                </ul>
              </li>
              <li className="mb-2"><strong>Tỷ lệ trả thưởng:</strong> Tùy thuộc vào loại cược, với cược kết hợp có tỷ lệ trả thưởng cao nhất.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Chiến thuật chơi 5D Lotre</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Cược đơn vị trí:</strong> Tập trung vào một vị trí cụ thể và theo dõi xu hướng của vị trí đó.</li>
              <li className="mb-2"><strong>Cược Lớn/Nhỏ, Lẻ/Chẵn:</strong> Lựa chọn an toàn với tỷ lệ thắng cao.</li>
              <li className="mb-2"><strong>Cược kết hợp:</strong> Kết hợp nhiều vị trí để tăng tỷ lệ trả thưởng, nhưng cũng tăng rủi ro.</li>
            </ul>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo chơi 5D Lotre:</p>
              <p>Theo dõi kết quả gần đây để phát hiện các số "nóng" (xuất hiện thường xuyên) và số "lạnh" (ít xuất hiện). Tuy nhiên, hãy nhớ rằng mỗi lần quay đều độc lập với các lần quay trước.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">TRX Win - Xổ Số Blockchain</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Giới thiệu về TRX Win</h3>
            <p className="mb-4">
              TRX Win là mini game xổ số dựa trên blockchain, sử dụng hash của các giao dịch TRX để tạo ra kết quả. 
              Điều này đảm bảo tính minh bạch và công bằng của trò chơi.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Luật chơi TRX Win</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Thời gian:</strong> Mỗi phiên kéo dài khoảng 3 phút, tùy thuộc vào tốc độ xác nhận giao dịch trên blockchain.</li>
              <li className="mb-2"><strong>Cách đặt cược:</strong> Tương tự như Win Go, người chơi có thể đặt cược vào số (0-9) hoặc màu sắc (Xanh/Đỏ/Tím).</li>
              <li className="mb-2"><strong>Tính minh bạch:</strong> Kết quả được tạo ra từ hash của giao dịch blockchain, đảm bảo không thể can thiệp.</li>
              <li className="mb-2"><strong>Tỷ lệ trả thưởng:</strong> Tương tự như Win Go.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Chiến thuật chơi TRX Win</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Chiến thuật tương tự Win Go:</strong> Các chiến thuật áp dụng cho Win Go cũng có thể áp dụng cho TRX Win.</li>
              <li className="mb-2"><strong>Kiểm tra tính minh bạch:</strong> Bạn có thể kiểm tra hash của giao dịch trên blockchain để xác minh tính công bằng của kết quả.</li>
            </ul>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo chơi TRX Win:</p>
              <p>TRX Win có tính minh bạch cao nhất trong các mini game tại 92Lottery. Nếu bạn quan tâm đến tính công bằng, đây là lựa chọn tốt nhất.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Mẹo chung khi chơi Mini Game tại 92Lottery</h2>
          
          <div className="mb-8">
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Quản lý vốn:</strong> Đặt ra hạn mức thua lỗ và lợi nhuận trước khi bắt đầu chơi. Khi đạt đến hạn mức, hãy dừng lại.</li>
              <li className="mb-2"><strong>Bắt đầu nhỏ:</strong> Bắt đầu với số tiền cược nhỏ để làm quen với trò chơi trước khi tăng mức cược.</li>
              <li className="mb-2"><strong>Không cố gắng gỡ lại:</strong> Không cố gắng gỡ lại tiền thua bằng cách tăng mức cược đột ngột.</li>
              <li className="mb-2"><strong>Hiểu rõ luật chơi:</strong> Đảm bảo bạn hiểu rõ luật chơi và tỷ lệ trả thưởng trước khi bắt đầu.</li>
              <li className="mb-2"><strong>Chơi có chiến thuật:</strong> Áp dụng các chiến thuật quản lý vốn như Martingale, D'Alembert, hoặc Fibonacci.</li>
              <li className="mb-2"><strong>Theo dõi xu hướng:</strong> Phân tích kết quả gần đây để tìm ra xu hướng, nhưng đừng quá tin vào xu hướng này.</li>
              <li className="mb-2"><strong>Chơi có trách nhiệm:</strong> Xem mini game như một hình thức giải trí, không phải cách kiếm tiền.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các câu hỏi thường gặp về Mini Game 92Lottery</h2>
          
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
            Mini game tại 92Lottery mang đến trải nghiệm cá cược nhanh chóng, đơn giản và hấp dẫn với nhiều lựa chọn 
            phù hợp với sở thích và chiến thuật của từng người chơi. Từ Win Go với thời gian chờ chỉ 1 phút đến TRX Win 
            với tính minh bạch dựa trên blockchain, bạn có thể tìm thấy trò chơi phù hợp với mình.
          </p>
          
          <p className="mb-4">
            Hãy nhớ rằng, dù áp dụng chiến thuật nào, mini game vẫn là trò chơi may rủi. Vì vậy, hãy chơi có trách nhiệm, 
            đặt ra hạn mức, và xem đây là một hình thức giải trí thay vì cách kiếm tiền.
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
                <Link href="/huong-dan-nap-tien" className="text-blue-600 hover:text-blue-800">
                  Hướng dẫn nạp tiền 92Lottery nhanh chóng
                </Link>
              </li>
              <li>
                <Link href="/rut-tien-92lottery" className="text-blue-600 hover:text-blue-800">
                  Rút tiền 92Lottery - Hướng dẫn chi tiết và các lưu ý quan trọng
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
