import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Cách chơi 92Lottery hiệu quả - Chiến thuật và mẹo thắng lớn',
  description: 'Hướng dẫn chi tiết cách chơi 92Lottery hiệu quả. Tìm hiểu các chiến thuật, mẹo quản lý vốn và cách tối ưu hóa cơ hội thắng cược tại 92Lottery.',
  keywords: ['cách chơi 92lottery', 'chiến thuật 92lottery', 'mẹo chơi 92lottery', 'thắng cược 92lottery', 'quản lý vốn 92lottery', 'kinh nghiệm chơi 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev',
    languages: {
      'vi': 'https://92lottery.dev',
      'x-default': 'https://92lottery.dev'
    }
  },
};

export default function PlayingGuidePage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "Làm thế nào để chơi 92Lottery hiệu quả?",
      answer: "Để chơi 92Lottery hiệu quả, bạn nên: 1) Tìm hiểu kỹ luật chơi của từng trò chơi, 2) Áp dụng chiến thuật quản lý vốn phù hợp như Martingale, D'Alembert hoặc Fibonacci, 3) Bắt đầu với số tiền cược nhỏ, 4) Đặt ra hạn mức thắng/thua, 5) Theo dõi xu hướng nhưng không quá phụ thuộc, 6) Tận dụng khuyến mãi và hoàn trả, 7) Chơi có kỷ luật và kiên nhẫn."
    },
    {
      question: "Chiến thuật quản lý vốn nào hiệu quả nhất khi chơi 92Lottery?",
      answer: "Không có chiến thuật quản lý vốn nào là hiệu quả nhất cho tất cả mọi người khi chơi 92Lottery. Tuy nhiên, chiến thuật 1-3-2-6 thường được khuyến nghị cho người mới bắt đầu vì đơn giản và hạn chế rủi ro. Chiến thuật Martingale có thể mang lại lợi nhuận ngắn hạn nhưng rủi ro cao. Chiến thuật D'Alembert cân bằng hơn và phù hợp với người chơi trung bình. Quan trọng nhất là chọn chiến thuật phù hợp với phong cách và khả năng tài chính của bạn."
    },
    {
      question: "Nên chơi trò gì tại 92Lottery để dễ thắng nhất?",
      answer: "Tại 92Lottery, các trò chơi có tỷ lệ thắng cao nhất thường là: 1) Win Go với lựa chọn cược Xanh/Đỏ (tỷ lệ thắng gần 50%), 2) K3 Lotre với cược Lớn/Nhỏ hoặc Lẻ/Chẵn (tỷ lệ thắng gần 50%), 3) 5D Lotre với cược Tổng Lớn/Nhỏ (tỷ lệ thắng gần 50%). Tuy nhiên, các lựa chọn này thường có tỷ lệ trả thưởng thấp hơn (khoảng 1.98:1)."
    },
    {
      question: "Làm thế nào để tránh thua lỗ khi chơi 92Lottery?",
      answer: "Để tránh thua lỗ khi chơi 92Lottery, bạn nên: 1) Đặt ra hạn mức thua lỗ và tuân thủ nghiêm ngặt, 2) Không cố gắng gỡ lại tiền thua bằng cách tăng mức cược đột ngột, 3) Chỉ chơi với số tiền bạn có thể chấp nhận mất, 4) Áp dụng chiến thuật quản lý vốn phù hợp, 5) Tránh chơi khi đang mệt mỏi hoặc cảm xúc không ổn định, 6) Tận dụng các chương trình hoàn trả để giảm thiểu thua lỗ, 7) Biết khi nào nên dừng lại."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Cách chơi 92Lottery hiệu quả", url: "https://92lottery.dev/cach-choi-92lottery-hieu-qua" }
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
            <li className="text-gray-700">Cách chơi 92Lottery hiệu quả</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">Cách chơi 92Lottery hiệu quả - Chiến thuật và mẹo thắng lớn</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            92Lottery cung cấp nhiều trò chơi hấp dẫn với cơ hội thắng lớn. Tuy nhiên, để chơi hiệu quả và tối đa hóa
            cơ hội thắng cược, bạn cần có chiến thuật phù hợp và kỹ năng quản lý vốn tốt. Bài viết này sẽ hướng dẫn
            bạn cách chơi 92Lottery hiệu quả với các chiến thuật, mẹo và kỹ năng cần thiết.
          </p>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Nguyên tắc cơ bản khi chơi 92Lottery</h2>

          <div className="mb-8">
            <p className="mb-4">
              Trước khi đi vào các chiến thuật cụ thể, hãy hiểu rõ những nguyên tắc cơ bản khi chơi 92Lottery:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Hiểu rõ luật chơi:</strong> Tìm hiểu kỹ luật chơi của từng trò chơi trước khi tham gia.</li>
              <li className="mb-2"><strong>Quản lý vốn:</strong> Chỉ chơi với số tiền bạn có thể chấp nhận mất.</li>
              <li className="mb-2"><strong>Đặt ra hạn mức:</strong> Xác định rõ hạn mức thắng và thua trước khi bắt đầu.</li>
              <li className="mb-2"><strong>Kiên nhẫn và kỷ luật:</strong> Không để cảm xúc chi phối quyết định của bạn.</li>
              <li className="mb-2"><strong>Tận dụng khuyến mãi:</strong> Sử dụng các chương trình khuyến mãi và hoàn trả để tối đa hóa giá trị.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Chiến thuật quản lý vốn hiệu quả</h2>

          <div className="mb-8">
            <p className="mb-4">
              Quản lý vốn là yếu tố quan trọng nhất để chơi 92Lottery hiệu quả và bền vững. Dưới đây là một số chiến thuật quản lý vốn phổ biến:
            </p>

            <h3 className="text-xl font-semibold mb-3">1. Chiến thuật Martingale</h3>
            <p className="mb-4">
              Đây là chiến thuật phổ biến nhất, đặc biệt khi chơi các trò có tỷ lệ thắng gần 50% như Win Go (Xanh/Đỏ) hoặc K3 (Lớn/Nhỏ).
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Nguyên tắc:</strong> Tăng gấp đôi số tiền cược sau mỗi lần thua, và quay lại mức cược ban đầu sau khi thắng.</li>
              <li className="mb-2"><strong>Ví dụ:</strong> Bạn bắt đầu với 10,000 VND. Nếu thua, cược tiếp 20,000 VND. Nếu thua tiếp, cược 40,000 VND, và cứ thế.</li>
              <li className="mb-2"><strong>Ưu điểm:</strong> Có thể mang lại lợi nhuận ngắn hạn và bù đắp các khoản thua trước đó.</li>
              <li className="mb-2"><strong>Nhược điểm:</strong> Yêu cầu vốn lớn và có thể dẫn đến thua lỗ nặng nếu gặp chuỗi thua dài.</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý:</p>
              <p>Chỉ áp dụng chiến thuật Martingale với số vốn đủ lớn và đặt ra hạn mức tối đa cho mỗi chuỗi cược.</p>
            </div>

            <h3 className="text-xl font-semibold mb-3">2. Chiến thuật D'Alembert</h3>
            <p className="mb-4">
              Đây là phiên bản an toàn hơn của Martingale, phù hợp với người chơi muốn hạn chế rủi ro.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Nguyên tắc:</strong> Tăng một đơn vị sau mỗi lần thua và giảm một đơn vị sau mỗi lần thắng.</li>
              <li className="mb-2"><strong>Ví dụ:</strong> Bạn bắt đầu với 10,000 VND. Nếu thua, cược tiếp 20,000 VND. Nếu thắng, cược tiếp 10,000 VND.</li>
              <li className="mb-2"><strong>Ưu điểm:</strong> Ít rủi ro hơn Martingale, phù hợp với người chơi có vốn vừa phải.</li>
              <li className="mb-2"><strong>Nhược điểm:</strong> Khả năng bù đắp thua lỗ chậm hơn Martingale.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3. Chiến thuật Fibonacci</h3>
            <p className="mb-4">
              Chiến thuật này dựa trên dãy số Fibonacci, trong đó mỗi số là tổng của hai số trước đó (1, 1, 2, 3, 5, 8, 13, 21, ...).
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Nguyên tắc:</strong> Tăng mức cược theo dãy Fibonacci sau mỗi lần thua, và lùi lại hai bước trong dãy sau mỗi lần thắng.</li>
              <li className="mb-2"><strong>Ví dụ:</strong> Bạn bắt đầu với 10,000 VND. Nếu thua, cược tiếp 10,000 VND. Nếu thua tiếp, cược 20,000 VND, rồi 30,000 VND, 50,000 VND, v.v.</li>
              <li className="mb-2"><strong>Ưu điểm:</strong> Cân bằng giữa rủi ro và phần thưởng, tăng mức cược chậm hơn Martingale.</li>
              <li className="mb-2"><strong>Nhược điểm:</strong> Phức tạp hơn các chiến thuật khác, đòi hỏi theo dõi chặt chẽ vị trí trong dãy.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4. Chiến thuật 1-3-2-6</h3>
            <p className="mb-4">
              Đây là chiến thuật đơn giản và hiệu quả, đặc biệt phù hợp với người mới bắt đầu.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Nguyên tắc:</strong> Cược 1 đơn vị, nếu thắng cược 3 đơn vị, nếu thắng tiếp cược 2 đơn vị, nếu thắng tiếp cược 6 đơn vị. Sau đó quay lại từ đầu.</li>
              <li className="mb-2"><strong>Ví dụ:</strong> Bạn bắt đầu với 10,000 VND. Nếu thắng, cược tiếp 30,000 VND. Nếu thắng tiếp, cược 20,000 VND. Nếu thắng tiếp, cược 60,000 VND.</li>
              <li className="mb-2"><strong>Ưu điểm:</strong> Đơn giản, dễ áp dụng, và có thể mang lại lợi nhuận đáng kể nếu gặp chuỗi thắng.</li>
              <li className="mb-2"><strong>Nhược điểm:</strong> Không hiệu quả khi gặp nhiều lần thua liên tiếp.</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo:</p>
              <p>Chiến thuật 1-3-2-6 phù hợp nhất với các trò chơi có tỷ lệ thắng gần 50% như Win Go (Xanh/Đỏ) hoặc K3 (Lớn/Nhỏ).</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Chiến thuật chơi hiệu quả cho từng trò chơi</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. Chiến thuật chơi Win Go</h3>
            <p className="mb-4">
              Win Go là trò chơi xổ số 1 phút phổ biến tại 92Lottery, cho phép người chơi đoán kết quả số từ 0-9 hoặc màu sắc (Xanh/Đỏ/Tím).
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Cược Xanh/Đỏ:</strong> Đây là lựa chọn an toàn nhất với tỷ lệ thắng gần 50%. Áp dụng chiến thuật Martingale hoặc D'Alembert.</li>
              <li className="mb-2"><strong>Cược Tím:</strong> Tỷ lệ thắng thấp hơn nhưng tỷ lệ trả thưởng cao (4.5:1). Phù hợp với chiến thuật Fibonacci hoặc cược cố định.</li>
              <li className="mb-2"><strong>Cược số cụ thể:</strong> Tỷ lệ thắng thấp nhưng tỷ lệ trả thưởng cao nhất (9.8:1). Chỉ nên đặt cược nhỏ.</li>
              <li className="mb-2"><strong>Theo dõi xu hướng:</strong> Phân tích kết quả gần đây để tìm ra xu hướng và đặt cược theo xu hướng đó.</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo chơi Win Go:</p>
              <p>Kết hợp cược Xanh/Đỏ (an toàn) với một số cược Tím hoặc số cụ thể (rủi ro cao) để cân bằng giữa an toàn và cơ hội thắng lớn.</p>
            </div>

            <h3 className="text-xl font-semibold mb-3">2. Chiến thuật chơi K3 Lotre</h3>
            <p className="mb-4">
              K3 Lotre là trò chơi xổ số 3 phút dựa trên việc quay 3 viên xúc xắc, mỗi viên có 6 mặt từ 1-6.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Cược Lớn/Nhỏ, Lẻ/Chẵn:</strong> Tỷ lệ thắng gần 50%, phù hợp với chiến thuật Martingale hoặc 1-3-2-6.</li>
              <li className="mb-2"><strong>Cược Đôi:</strong> Tỷ lệ thắng khá cao và tỷ lệ trả thưởng tốt hơn Lớn/Nhỏ. Phù hợp với chiến thuật D'Alembert.</li>
              <li className="mb-2"><strong>Cược Đồng nhất:</strong> Tỷ lệ thắng thấp nhưng tỷ lệ trả thưởng rất cao. Chỉ nên đặt cược nhỏ và không thường xuyên.</li>
              <li className="mb-2"><strong>Phân tích tần suất:</strong> Theo dõi tần suất xuất hiện của các kết quả để tìm ra mẫu và xu hướng.</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo chơi K3 Lotre:</p>
              <p>Sử dụng chiến thuật "bảo hiểm" bằng cách đặt phần lớn vào Lớn/Nhỏ và một phần nhỏ vào Đồng nhất hoặc Đôi.</p>
            </div>

            <h3 className="text-xl font-semibold mb-3">3. Chiến thuật chơi 5D Lotre</h3>
            <p className="mb-4">
              5D Lotre là trò chơi xổ số 5 phút dựa trên việc quay 5 số từ 0-9.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Cược Tổng Lớn/Nhỏ, Lẻ/Chẵn:</strong> Tỷ lệ thắng gần 50%, phù hợp với chiến thuật Martingale hoặc D'Alembert.</li>
              <li className="mb-2"><strong>Cược đơn vị trí:</strong> Tập trung vào một vị trí cụ thể và theo dõi xu hướng của vị trí đó.</li>
              <li className="mb-2"><strong>Cược kết hợp:</strong> Kết hợp nhiều vị trí để tăng tỷ lệ trả thưởng, nhưng cũng tăng rủi ro.</li>
              <li className="mb-2"><strong>Phân tích số "nóng" và "lạnh":</strong> Theo dõi các số xuất hiện thường xuyên (nóng) và ít xuất hiện (lạnh).</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo chơi 5D Lotre:</p>
              <p>Sử dụng chiến thuật "phân tán rủi ro" bằng cách đặt cược vào nhiều lựa chọn khác nhau với số tiền khác nhau.</p>
            </div>

            <h3 className="text-xl font-semibold mb-3">4. Chiến thuật chơi TRX Win</h3>
            <p className="mb-4">
              TRX Win là trò chơi xổ số dựa trên blockchain, sử dụng hash của các giao dịch TRX để tạo ra kết quả.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Chiến thuật tương tự Win Go:</strong> Các chiến thuật áp dụng cho Win Go cũng có thể áp dụng cho TRX Win.</li>
              <li className="mb-2"><strong>Kiểm tra tính minh bạch:</strong> Tận dụng tính minh bạch của blockchain để xác minh tính công bằng của kết quả.</li>
              <li className="mb-2"><strong>Theo dõi xu hướng blockchain:</strong> Phân tích các giao dịch TRX gần đây để dự đoán xu hướng.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Mẹo nâng cao để chơi 92Lottery hiệu quả</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. Tận dụng tối đa khuyến mãi và hoàn trả</h3>
            <p className="mb-4">
              92Lottery cung cấp nhiều chương trình khuyến mãi và hoàn trả hấp dẫn. Tận dụng tối đa các ưu đãi này để tăng vốn và giảm thiểu rủi ro:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Khuyến mãi nạp tiền:</strong> Nạp tiền trong thời gian có khuyến mãi để nhận thêm tiền thưởng.</li>
              <li className="mb-2"><strong>Hoàn trả hàng ngày:</strong> Tận dụng chương trình hoàn trả để bù đắp một phần thua lỗ.</li>
              <li className="mb-2"><strong>Nâng cấp VIP:</strong> Cố gắng đạt cấp độ VIP cao hơn để được hưởng tỷ lệ hoàn trả tốt hơn.</li>
              <li className="mb-2"><strong>Nhiệm vụ hàng ngày:</strong> Hoàn thành các nhiệm vụ hàng ngày để nhận thưởng.</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý:</p>
              <p>Đọc kỹ điều khoản và điều kiện của các chương trình khuyến mãi, đặc biệt là yêu cầu cược (wagering requirements).</p>
            </div>

            <h3 className="text-xl font-semibold mb-3">2. Quản lý thời gian chơi</h3>
            <p className="mb-4">
              Thời gian chơi cũng ảnh hưởng đến hiệu quả khi chơi 92Lottery:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Đặt ra thời gian chơi cụ thể:</strong> Chỉ chơi trong một khoảng thời gian nhất định mỗi ngày.</li>
              <li className="mb-2"><strong>Tránh chơi khi mệt mỏi:</strong> Không chơi khi bạn đang mệt mỏi hoặc không tỉnh táo.</li>
              <li className="mb-2"><strong>Nghỉ ngơi định kỳ:</strong> Nghỉ ngơi sau mỗi 30-60 phút chơi để giữ đầu óc tỉnh táo.</li>
              <li className="mb-2"><strong>Chọn thời điểm chơi phù hợp:</strong> Một số người chơi tin rằng có những thời điểm "may mắn" trong ngày.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3. Ghi chép và phân tích</h3>
            <p className="mb-4">
              Ghi chép và phân tích kết quả chơi giúp bạn cải thiện chiến thuật:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Ghi lại kết quả:</strong> Ghi lại tất cả các lần cược, kết quả, và số tiền thắng/thua.</li>
              <li className="mb-2"><strong>Phân tích xu hướng:</strong> Tìm ra các mẫu và xu hướng từ dữ liệu đã ghi lại.</li>
              <li className="mb-2"><strong>Đánh giá chiến thuật:</strong> Xác định chiến thuật nào hiệu quả nhất với phong cách chơi của bạn.</li>
              <li className="mb-2"><strong>Điều chỉnh liên tục:</strong> Liên tục điều chỉnh chiến thuật dựa trên kết quả phân tích.</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo:</p>
              <p>Sử dụng ứng dụng ghi chép hoặc bảng tính để theo dõi kết quả chơi một cách có hệ thống.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các câu hỏi thường gặp về cách chơi 92Lottery hiệu quả</h2>

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
            Chơi 92Lottery hiệu quả đòi hỏi sự kết hợp giữa hiểu biết về luật chơi, chiến thuật quản lý vốn phù hợp,
            và kỷ luật cá nhân. Không có chiến thuật nào đảm bảo thắng 100%, nhưng với những mẹo và chiến thuật được
            chia sẻ trong bài viết này, bạn có thể tối đa hóa cơ hội thắng cược và giảm thiểu rủi ro thua lỗ.
          </p>

          <p className="mb-4">
            Hãy nhớ rằng, cá cược nên được xem là một hình thức giải trí, không phải cách kiếm tiền. Chơi có trách nhiệm,
            đặt ra hạn mức, và biết khi nào nên dừng lại là chìa khóa để có trải nghiệm cá cược lành mạnh và bền vững tại 92Lottery.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Các bài viết liên quan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/92lottery-mini-game" className="text-blue-600 hover:text-blue-800">
                  92Lottery Mini Game - Hướng dẫn chơi và mẹo thắng lớn
                </Link>
              </li>
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
