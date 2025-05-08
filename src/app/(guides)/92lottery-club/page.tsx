import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '92Lottery Club - Đặc quyền thành viên VIP và cách tham gia',
  description: 'Tìm hiểu về 92Lottery Club, chương trình thành viên VIP với nhiều đặc quyền hấp dẫn. Khám phá các cấp độ VIP, lợi ích độc quyền và cách tham gia 92Lottery Club.',
  keywords: ['92lottery club', 'vip 92lottery', 'thành viên vip 92lottery', 'đặc quyền 92lottery', 'cấp độ vip 92lottery', 'hoàn trả 92lottery', 'khuyến mãi vip 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev',
    languages: {
      'vi': 'https://92lottery.dev',
      'x-default': 'https://92lottery.dev'
    }
  },
};

export default function ClubVIPPage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "92Lottery Club là gì?",
      answer: "92Lottery Club là chương trình thành viên VIP của 92Lottery, mang đến nhiều đặc quyền và ưu đãi độc quyền cho người chơi trung thành. Chương trình gồm 6 cấp độ VIP, từ Bronze đến Diamond, với lợi ích tăng dần theo cấp độ như tỷ lệ hoàn trả cao hơn, rút tiền ưu tiên, quà tặng sinh nhật, và hỗ trợ khách hàng VIP."
    },
    {
      question: "Làm thế nào để tham gia 92Lottery Club?",
      answer: "Để tham gia 92Lottery Club, bạn cần đăng ký tài khoản tại 92Lottery và bắt đầu chơi các trò chơi. Mỗi khi bạn đặt cược, bạn sẽ tích lũy điểm VIP. Khi đạt đủ số điểm yêu cầu, bạn sẽ tự động được nâng cấp lên cấp độ VIP tương ứng. Cấp độ VIP của bạn được đánh giá lại vào cuối mỗi tháng dựa trên số điểm VIP tích lũy trong tháng đó."
    },
    {
      question: "Các cấp độ VIP trong 92Lottery Club là gì?",
      answer: "92Lottery Club có 6 cấp độ VIP: Bronze (Đồng), Silver (Bạc), Gold (Vàng), Platinum (Bạch Kim), Ruby (Hồng Ngọc), và Diamond (Kim Cương). Mỗi cấp độ yêu cầu một số điểm VIP nhất định và mang lại những đặc quyền khác nhau. Cấp độ càng cao, lợi ích càng lớn, bao gồm tỷ lệ hoàn trả cao hơn, hạn mức rút tiền lớn hơn, và quà tặng giá trị hơn."
    },
    {
      question: "Tôi có thể bị giảm cấp VIP không?",
      answer: "Có, cấp độ VIP của bạn được đánh giá lại vào cuối mỗi tháng dựa trên số điểm VIP tích lũy trong tháng đó. Nếu số điểm VIP của bạn không đủ để duy trì cấp độ hiện tại, bạn có thể bị giảm xuống cấp độ thấp hơn. Tuy nhiên, 92Lottery có chính sách bảo vệ cấp độ, cho phép bạn duy trì cấp độ hiện tại nếu bạn chỉ thiếu một lượng điểm nhỏ."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "92Lottery Club", url: "https://92lottery.dev/92lottery-club" }
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
            <li className="text-gray-700">92Lottery Club</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">92Lottery Club - Đặc quyền thành viên VIP và cách tham gia</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            92Lottery Club là chương trình thành viên VIP độc quyền dành cho những người chơi trung thành tại 92Lottery. 
            Với nhiều đặc quyền hấp dẫn và ưu đãi độc quyền, 92Lottery Club mang đến trải nghiệm cá cược đẳng cấp và 
            khác biệt. Bài viết này sẽ giới thiệu chi tiết về 92Lottery Club, các cấp độ VIP, lợi ích độc quyền và 
            cách tham gia.
          </p>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Giới thiệu về 92Lottery Club</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              92Lottery Club là chương trình thành viên VIP của 92Lottery, được thiết kế để tưởng thưởng cho những người chơi 
              trung thành và tích cực. Chương trình này mang đến nhiều đặc quyền và ưu đãi độc quyền, giúp nâng cao trải nghiệm 
              cá cược của bạn tại 92Lottery.
            </p>
            <p className="mb-4">
              Với 6 cấp độ VIP từ Bronze đến Diamond, 92Lottery Club cung cấp một hệ thống phần thưởng toàn diện, 
              trong đó lợi ích tăng dần theo cấp độ. Càng chơi nhiều, bạn càng nhận được nhiều ưu đãi hấp dẫn.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các cấp độ VIP trong 92Lottery Club</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              92Lottery Club có 6 cấp độ VIP, mỗi cấp độ yêu cầu một số điểm VIP nhất định và mang lại những đặc quyền khác nhau:
            </p>
            
            <h3 className="text-xl font-semibold mb-3">1. Bronze (Đồng)</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Yêu cầu:</strong> 0-999 điểm VIP</li>
              <li className="mb-2"><strong>Hoàn trả xổ số:</strong> 0.3%</li>
              <li className="mb-2"><strong>Hoàn trả casino:</strong> 0.5%</li>
              <li className="mb-2"><strong>Hoàn trả thể thao:</strong> 0.3%</li>
              <li className="mb-2"><strong>Hạn mức rút tiền:</strong> 100,000,000 VND/ngày</li>
              <li className="mb-2"><strong>Quà tặng:</strong> Không có</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">2. Silver (Bạc)</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Yêu cầu:</strong> 1,000-4,999 điểm VIP</li>
              <li className="mb-2"><strong>Hoàn trả xổ số:</strong> 0.5%</li>
              <li className="mb-2"><strong>Hoàn trả casino:</strong> 0.8%</li>
              <li className="mb-2"><strong>Hoàn trả thể thao:</strong> 0.5%</li>
              <li className="mb-2"><strong>Hạn mức rút tiền:</strong> 200,000,000 VND/ngày</li>
              <li className="mb-2"><strong>Quà tặng:</strong> Thưởng sinh nhật 100,000 VND</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">3. Gold (Vàng)</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Yêu cầu:</strong> 5,000-19,999 điểm VIP</li>
              <li className="mb-2"><strong>Hoàn trả xổ số:</strong> 0.8%</li>
              <li className="mb-2"><strong>Hoàn trả casino:</strong> 1.2%</li>
              <li className="mb-2"><strong>Hoàn trả thể thao:</strong> 0.8%</li>
              <li className="mb-2"><strong>Hạn mức rút tiền:</strong> 500,000,000 VND/ngày</li>
              <li className="mb-2"><strong>Quà tặng:</strong> Thưởng sinh nhật 300,000 VND, quà tặng hàng tháng</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">4. Platinum (Bạch Kim)</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Yêu cầu:</strong> 20,000-49,999 điểm VIP</li>
              <li className="mb-2"><strong>Hoàn trả xổ số:</strong> 1.2%</li>
              <li className="mb-2"><strong>Hoàn trả casino:</strong> 1.5%</li>
              <li className="mb-2"><strong>Hoàn trả thể thao:</strong> 1.2%</li>
              <li className="mb-2"><strong>Hạn mức rút tiền:</strong> 1,000,000,000 VND/ngày</li>
              <li className="mb-2"><strong>Quà tặng:</strong> Thưởng sinh nhật 500,000 VND, quà tặng hàng tháng, quản lý tài khoản VIP</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">5. Ruby (Hồng Ngọc)</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Yêu cầu:</strong> 50,000-99,999 điểm VIP</li>
              <li className="mb-2"><strong>Hoàn trả xổ số:</strong> 1.5%</li>
              <li className="mb-2"><strong>Hoàn trả casino:</strong> 2.0%</li>
              <li className="mb-2"><strong>Hoàn trả thể thao:</strong> 1.5%</li>
              <li className="mb-2"><strong>Hạn mức rút tiền:</strong> 2,000,000,000 VND/ngày</li>
              <li className="mb-2"><strong>Quà tặng:</strong> Thưởng sinh nhật 1,000,000 VND, quà tặng hàng tháng, quản lý tài khoản VIP, khuyến mãi độc quyền</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">6. Diamond (Kim Cương)</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Yêu cầu:</strong> 100,000+ điểm VIP</li>
              <li className="mb-2"><strong>Hoàn trả xổ số:</strong> 2.0%</li>
              <li className="mb-2"><strong>Hoàn trả casino:</strong> 2.5%</li>
              <li className="mb-2"><strong>Hoàn trả thể thao:</strong> 2.0%</li>
              <li className="mb-2"><strong>Hạn mức rút tiền:</strong> 5,000,000,000 VND/ngày</li>
              <li className="mb-2"><strong>Quà tặng:</strong> Thưởng sinh nhật 2,000,000 VND, quà tặng hàng tháng, quản lý tài khoản VIP cá nhân, khuyến mãi độc quyền, sự kiện VIP</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Lợi ích của thành viên 92Lottery Club</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. Tỷ lệ hoàn trả cao hơn</h3>
            <p className="mb-4">
              Thành viên VIP được hưởng tỷ lệ hoàn trả cao hơn cho tất cả các loại cược, bao gồm xổ số, casino và thể thao. 
              Tỷ lệ hoàn trả tăng dần theo cấp độ VIP, lên đến 2.5% cho thành viên Diamond.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">2. Hạn mức rút tiền cao hơn</h3>
            <p className="mb-4">
              Thành viên VIP được hưởng hạn mức rút tiền cao hơn, giúp bạn rút tiền thắng cược một cách thuận tiện. 
              Hạn mức rút tiền tăng từ 100 triệu VND/ngày (Bronze) lên đến 5 tỷ VND/ngày (Diamond).
            </p>
            
            <h3 className="text-xl font-semibold mb-3">3. Ưu tiên xử lý rút tiền</h3>
            <p className="mb-4">
              Yêu cầu rút tiền của thành viên VIP được ưu tiên xử lý, giúp bạn nhận tiền nhanh chóng hơn. 
              Thành viên cấp cao như Ruby và Diamond còn được hưởng dịch vụ rút tiền siêu tốc.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">4. Quà tặng sinh nhật</h3>
            <p className="mb-4">
              Thành viên VIP từ Silver trở lên sẽ nhận được quà tặng sinh nhật hấp dẫn, với giá trị tăng dần theo cấp độ VIP, 
              từ 100,000 VND (Silver) đến 2,000,000 VND (Diamond).
            </p>
            
            <h3 className="text-xl font-semibold mb-3">5. Quà tặng hàng tháng</h3>
            <p className="mb-4">
              Thành viên VIP từ Gold trở lên sẽ nhận được quà tặng hàng tháng, bao gồm tiền thưởng, vòng quay miễn phí, 
              và các ưu đãi độc quyền khác.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">6. Quản lý tài khoản VIP</h3>
            <p className="mb-4">
              Thành viên VIP từ Platinum trở lên sẽ được hỗ trợ bởi đội ngũ quản lý tài khoản VIP chuyên nghiệp, 
              sẵn sàng giải đáp mọi thắc mắc và hỗ trợ bạn 24/7.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">7. Sự kiện VIP độc quyền</h3>
            <p className="mb-4">
              Thành viên Diamond sẽ được mời tham gia các sự kiện VIP độc quyền, bao gồm giải đấu poker, 
              tiệc VIP, và các sự kiện thể thao lớn.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Cách tham gia 92Lottery Club</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. Đăng ký tài khoản 92Lottery</h3>
            <p className="mb-4">
              Bước đầu tiên để tham gia 92Lottery Club là đăng ký tài khoản tại 92Lottery. 
              Nếu bạn chưa có tài khoản, hãy tham khảo{' '}
              <Link href="/huong-dan-dang-ky" className="text-blue-600 hover:text-blue-800">
                hướng dẫn đăng ký 92Lottery
              </Link>.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">2. Tích lũy điểm VIP</h3>
            <p className="mb-4">
              Mỗi khi bạn đặt cược tại 92Lottery, bạn sẽ tích lũy điểm VIP. Số điểm VIP bạn nhận được phụ thuộc vào số tiền cược:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Xổ số:</strong> 1 điểm VIP cho mỗi 10,000 VND cược</li>
              <li className="mb-2"><strong>Casino:</strong> 1 điểm VIP cho mỗi 10,000 VND cược</li>
              <li className="mb-2"><strong>Thể thao:</strong> 1 điểm VIP cho mỗi 10,000 VND cược</li>
              <li className="mb-2"><strong>Slot game:</strong> 1 điểm VIP cho mỗi 10,000 VND cược</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">3. Nâng cấp cấp độ VIP</h3>
            <p className="mb-4">
              Khi bạn tích lũy đủ số điểm VIP yêu cầu, bạn sẽ tự động được nâng cấp lên cấp độ VIP tương ứng. 
              Cấp độ VIP của bạn được đánh giá lại vào cuối mỗi tháng dựa trên số điểm VIP tích lũy trong tháng đó.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">4. Duy trì cấp độ VIP</h3>
            <p className="mb-4">
              Để duy trì cấp độ VIP hiện tại, bạn cần tích lũy đủ số điểm VIP yêu cầu trong mỗi tháng. 
              Nếu không đủ điểm, bạn có thể bị giảm xuống cấp độ thấp hơn.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý:</p>
              <p>92Lottery có chính sách bảo vệ cấp độ, cho phép bạn duy trì cấp độ hiện tại nếu bạn chỉ thiếu một lượng điểm nhỏ (thường là 10-20% số điểm yêu cầu).</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Mẹo tối đa hóa lợi ích từ 92Lottery Club</h2>
          
          <div className="mb-8">
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Tập trung vào một loại cược:</strong> Để tích lũy điểm VIP nhanh hơn, hãy tập trung vào một loại cược mà bạn thành thạo.</li>
              <li className="mb-2"><strong>Tận dụng khuyến mãi:</strong> Tham gia các khuyến mãi để tăng số tiền cược và tích lũy điểm VIP nhanh hơn.</li>
              <li className="mb-2"><strong>Chơi đều đặn:</strong> Thay vì chơi với số tiền lớn trong một thời gian ngắn, hãy chơi đều đặn với số tiền vừa phải để duy trì cấp độ VIP.</li>
              <li className="mb-2"><strong>Theo dõi điểm VIP:</strong> Thường xuyên kiểm tra số điểm VIP của bạn để biết còn bao nhiêu điểm nữa để đạt cấp độ tiếp theo.</li>
              <li className="mb-2"><strong>Tận dụng hoàn trả:</strong> Sử dụng tiền hoàn trả để tiếp tục chơi và tích lũy thêm điểm VIP.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các câu hỏi thường gặp về 92Lottery Club</h2>
          
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
            92Lottery Club là chương trình thành viên VIP hấp dẫn, mang đến nhiều đặc quyền và ưu đãi độc quyền cho người chơi trung thành. 
            Với 6 cấp độ VIP từ Bronze đến Diamond, chương trình cung cấp một hệ thống phần thưởng toàn diện, 
            trong đó lợi ích tăng dần theo cấp độ.
          </p>
          
          <p className="mb-4">
            Bằng cách tích cực tham gia các trò chơi tại 92Lottery và tích lũy điểm VIP, bạn có thể nâng cao trải nghiệm cá cược 
            của mình với tỷ lệ hoàn trả cao hơn, hạn mức rút tiền lớn hơn, và nhiều ưu đãi độc quyền khác.
          </p>
          
          <p className="mb-4">
            Hãy đăng ký tài khoản 92Lottery ngay hôm nay và bắt đầu hành trình trở thành thành viên VIP của 92Lottery Club!
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
