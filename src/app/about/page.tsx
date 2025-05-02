import { Metadata } from 'next';
import { SEO } from '@/lib/constants';
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

export const metadata: Metadata = {
  title: 'Giới thiệu về 92Lottery | Xổ số, Lottery trực tuyến hàng đầu',
  description: 'Tìm hiểu về 92Lottery - Trang web cá cược xổ số, lottery, thể thao và casino trực tuyến hàng đầu Việt Nam. Uy tín, an toàn và nhiều ưu đãi hấp dẫn.',
  keywords: ['92lottery', 'giới thiệu', 'về chúng tôi', 'xổ số', 'lottery', 'cá cược trực tuyến'],
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
      <Header />
      
      <main className="flex-1 px-4 py-6 bg-white">
        <h1 className="text-2xl font-bold text-[#bc2022] mb-6">Giới thiệu về 92Lottery</h1>
        
        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold text-[#bc2022] mb-3">Về chúng tôi</h2>
            <p className="text-gray-700 mb-3">
              92Lottery là trang web cá cược xổ số, lottery, thể thao và casino trực tuyến hàng đầu Việt Nam, 
              cung cấp trải nghiệm giải trí trực tuyến đẳng cấp với nhiều trò chơi hấp dẫn và cơ hội trúng thưởng lớn.
            </p>
            <p className="text-gray-700">
              Được thành lập với mục tiêu mang đến cho người chơi Việt Nam một nền tảng cá cược trực tuyến 
              an toàn, công bằng và minh bạch, 92Lottery đã nhanh chóng trở thành lựa chọn hàng đầu của 
              hàng triệu người chơi trên khắp cả nước.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-[#bc2022] mb-3">Sứ mệnh của chúng tôi</h2>
            <p className="text-gray-700">
              Sứ mệnh của 92Lottery là cung cấp một nền tảng cá cược trực tuyến đẳng cấp thế giới, 
              nơi người chơi có thể tận hưởng trải nghiệm giải trí tuyệt vời trong một môi trường an toàn và đáng tin cậy. 
              Chúng tôi cam kết mang đến cho người chơi những trò chơi chất lượng cao, dịch vụ khách hàng xuất sắc 
              và các chương trình khuyến mãi hấp dẫn.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-[#bc2022] mb-3">Tại sao chọn 92Lottery?</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>An toàn và Bảo mật:</strong> Chúng tôi sử dụng công nghệ mã hóa SSL tiên tiến để bảo vệ thông tin cá nhân và giao dịch của người chơi.</li>
              <li><strong>Đa dạng trò chơi:</strong> 92Lottery cung cấp hàng trăm trò chơi xổ số, lottery, thể thao và casino từ các nhà phát triển hàng đầu.</li>
              <li><strong>Thanh toán nhanh chóng:</strong> Chúng tôi đảm bảo quy trình nạp và rút tiền nhanh chóng, thuận tiện với nhiều phương thức thanh toán.</li>
              <li><strong>Khuyến mãi hấp dẫn:</strong> 92Lottery thường xuyên cung cấp các chương trình khuyến mãi và ưu đãi đặc biệt cho người chơi.</li>
              <li><strong>Hỗ trợ 24/7:</strong> Đội ngũ hỗ trợ khách hàng chuyên nghiệp sẵn sàng giúp đỡ bạn 24/7.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-[#bc2022] mb-3">Giấy phép và Quy định</h2>
            <p className="text-gray-700">
              92Lottery hoạt động dưới sự giám sát của các cơ quan quản lý uy tín và tuân thủ nghiêm ngặt các quy định 
              về cá cược trực tuyến. Chúng tôi cam kết thúc đẩy cá cược có trách nhiệm và bảo vệ người chơi khỏi các 
              rủi ro tiềm ẩn của cá cược.
            </p>
          </section>
        </div>
      </main>
      
      <TabBar />
    </div>
  );
}
