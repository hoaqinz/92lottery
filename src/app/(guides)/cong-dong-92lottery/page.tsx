import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Cộng đồng 92Lottery - Tham gia và kết nối với người chơi khác',
  description: 'Tìm hiểu về cộng đồng 92Lottery và cách tham gia. Kết nối với người chơi khác, chia sẻ kinh nghiệm, nhận thông tin mới nhất và tham gia các sự kiện độc quyền.',
  keywords: ['cộng đồng 92lottery', 'diễn đàn 92lottery', 'nhóm 92lottery', 'telegram 92lottery', 'facebook 92lottery', 'sự kiện 92lottery', 'chia sẻ kinh nghiệm 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev',
    languages: {
      'vi': 'https://92lottery.dev',
      'x-default': 'https://92lottery.dev'
    }
  },
};

export default function CommunityPage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "Làm thế nào để tham gia cộng đồng 92Lottery?",
      answer: "Để tham gia cộng đồng 92Lottery, bạn có thể: 1) Tham gia nhóm Telegram chính thức @92lottery_official, 2) Theo dõi trang Facebook 92Lottery, 3) Tham gia diễn đàn 92Lottery trên website chính thức, 4) Tham gia các sự kiện trực tuyến và ngoại tuyến do 92Lottery tổ chức, 5) Tham gia các giải đấu và cuộc thi cộng đồng, 6) Kết nối với các đại sứ thương hiệu 92Lottery."
    },
    {
      question: "Cộng đồng 92Lottery mang lại những lợi ích gì?",
      answer: "Cộng đồng 92Lottery mang lại nhiều lợi ích: 1) Cập nhật thông tin mới nhất về khuyến mãi, sự kiện và tính năng mới, 2) Chia sẻ và học hỏi kinh nghiệm, chiến thuật từ người chơi khác, 3) Nhận link dự phòng khi website chính bị chặn, 4) Tham gia các sự kiện và cuộc thi độc quyền với giải thưởng hấp dẫn, 5) Nhận hỗ trợ nhanh chóng từ đội ngũ 92Lottery và người chơi khác, 6) Cơ hội kết nối và giao lưu với cộng đồng người chơi có cùng sở thích."
    },
    {
      question: "Nhóm Telegram chính thức của 92Lottery là gì?",
      answer: "Nhóm Telegram chính thức của 92Lottery là @92lottery_official. Đây là kênh thông tin chính thức được quản lý bởi đội ngũ 92Lottery, nơi bạn có thể nhận thông báo về khuyến mãi, sự kiện, link dự phòng, và hỗ trợ trực tiếp. Để tham gia, bạn cần cài đặt ứng dụng Telegram, tìm kiếm @92lottery_official hoặc nhấp vào link mời từ website chính thức 92lottery.dev."
    },
    {
      question: "92Lottery có tổ chức sự kiện offline không?",
      answer: "Có, 92Lottery thường xuyên tổ chức các sự kiện offline tại các thành phố lớn như Hà Nội, TP.HCM, Đà Nẵng và các tỉnh thành khác. Các sự kiện này bao gồm: 1) Gặp gỡ cộng đồng (Community Meetup), 2) Giải đấu thể thao điện tử, 3) Tiệc kỷ niệm và sự kiện đặc biệt, 4) Hội thảo và đào tạo về chiến thuật chơi game, 5) Hoạt động từ thiện và trách nhiệm xã hội. Thông tin về các sự kiện offline được thông báo trên website chính thức và các kênh truyền thông xã hội của 92Lottery."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Cộng đồng 92Lottery", url: "https://92lottery.dev/cong-dong-92lottery" }
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
            <li className="text-gray-700">Cộng đồng 92Lottery</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">Cộng đồng 92Lottery - Tham gia và kết nối với người chơi khác</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            92Lottery không chỉ là một nền tảng cá cược trực tuyến mà còn là một cộng đồng sôi động của những
            người chơi đam mê. Tham gia cộng đồng 92Lottery, bạn có cơ hội kết nối với những người chơi khác,
            chia sẻ kinh nghiệm, nhận thông tin mới nhất và tham gia các sự kiện độc quyền. Bài viết này sẽ
            giới thiệu chi tiết về cộng đồng 92Lottery và cách bạn có thể tham gia.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Lợi ích khi tham gia cộng đồng 92Lottery</h3>
            <ul className="list-disc pl-5 mb-0">
              <li>Cập nhật thông tin mới nhất về khuyến mãi và sự kiện</li>
              <li>Chia sẻ và học hỏi kinh nghiệm từ người chơi khác</li>
              <li>Nhận link dự phòng khi website chính bị chặn</li>
              <li>Tham gia các sự kiện và cuộc thi độc quyền</li>
              <li>Nhận hỗ trợ nhanh chóng từ đội ngũ 92Lottery</li>
              <li>Kết nối và giao lưu với cộng đồng người chơi</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các kênh cộng đồng chính thức của 92Lottery</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. Nhóm Telegram chính thức</h3>
            <p className="mb-4">
              Telegram là kênh thông tin chính thức và quan trọng nhất của cộng đồng 92Lottery. Đây là nơi bạn
              có thể nhận thông báo mới nhất, tương tác với đội ngũ hỗ trợ và kết nối với người chơi khác.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Thông tin nhóm Telegram:</p>
              <ul className="list-none pl-0 mb-0">
                <li><strong>Tên nhóm:</strong> @92lottery_official</li>
                <li><strong>Link tham gia:</strong> <a href="https://t.me/92lottery_official" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">t.me/92lottery_official</a></li>
                <li><strong>Số lượng thành viên:</strong> 50,000+</li>
                <li><strong>Ngôn ngữ chính:</strong> Tiếng Việt</li>
              </ul>
            </div>
            <p className="mb-4">
              Để biết thêm chi tiết về cách tham gia nhóm Telegram 92Lottery, bạn có thể tham khảo bài viết{' '}
              <Link href="/92lottery-telegram" className="text-blue-600 hover:text-blue-800">
                92Lottery Telegram - Cách tham gia nhóm và nhận thông báo mới nhất
              </Link>.
            </p>

            <h3 className="text-xl font-semibold mb-3">2. Trang Facebook chính thức</h3>
            <p className="mb-4">
              Trang Facebook chính thức của 92Lottery là nơi cập nhật thông tin, chia sẻ nội dung hữu ích và
              tương tác với cộng đồng người chơi.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Thông tin trang Facebook:</p>
              <ul className="list-none pl-0 mb-0">
                <li><strong>Tên trang:</strong> 92Lottery Official</li>
                <li><strong>Link:</strong> <a href="https://www.facebook.com/92lotteryofficial" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">facebook.com/92lotteryofficial</a></li>
                <li><strong>Lượt thích:</strong> 100,000+</li>
                <li><strong>Nội dung:</strong> Thông báo khuyến mãi, hướng dẫn, tin tức, sự kiện</li>
              </ul>
            </div>
            <p className="mb-4">
              <strong>Lưu ý:</strong> Để đảm bảo bạn theo dõi trang Facebook chính thức, hãy kiểm tra dấu tích xanh
              (verified) và chỉ truy cập từ link trên website chính thức 92lottery.dev.
            </p>

            <h3 className="text-xl font-semibold mb-3">3. Diễn đàn 92Lottery</h3>
            <p className="mb-4">
              Diễn đàn 92Lottery trên website chính thức là nơi người chơi có thể thảo luận chuyên sâu, chia sẻ
              kinh nghiệm và chiến thuật chơi game.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Các chuyên mục chính trên diễn đàn:</p>
              <ul className="list-disc pl-6 mb-0">
                <li>Thông báo chính thức từ 92Lottery</li>
                <li>Hướng dẫn cho người mới</li>
                <li>Chiến thuật và mẹo chơi game</li>
                <li>Chia sẻ kinh nghiệm</li>
                <li>Báo cáo kết quả và thành tích</li>
                <li>Hỏi đáp và hỗ trợ</li>
                <li>Góp ý và phản hồi</li>
              </ul>
            </div>
            <p className="mb-4">
              Để tham gia diễn đàn, bạn cần đăng nhập vào tài khoản 92Lottery và truy cập vào mục "Diễn đàn"
              hoặc "Forum" trên website chính thức.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các hoạt động cộng đồng tại 92Lottery</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. Giải đấu và cuộc thi</h3>
            <p className="mb-4">
              92Lottery thường xuyên tổ chức các giải đấu và cuộc thi với giải thưởng hấp dẫn cho cộng đồng người chơi.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Giải đấu xổ số:</strong> Thi đấu dựa trên kết quả thắng thua trong các trò chơi xổ số như Win Go, K3, 5D.</li>
              <li className="mb-2"><strong>Giải đấu casino:</strong> Thi đấu dựa trên lợi nhuận từ các trò chơi casino như Baccarat, Roulette, Blackjack.</li>
              <li className="mb-2"><strong>Cuộc thi dự đoán:</strong> Dự đoán kết quả các sự kiện thể thao, xổ số, hoặc các sự kiện đặc biệt.</li>
              <li className="mb-2"><strong>Thử thách cộng đồng:</strong> Các thử thách đặc biệt với nhiều phần thưởng hấp dẫn.</li>
            </ul>
            <p className="mb-4">
              Thông tin về các giải đấu và cuộc thi được thông báo trên website chính thức, Telegram, Facebook
              và các kênh truyền thông khác của 92Lottery.
            </p>

            <h3 className="text-xl font-semibold mb-3">2. Sự kiện trực tuyến</h3>
            <p className="mb-4">
              92Lottery tổ chức nhiều sự kiện trực tuyến để kết nối cộng đồng người chơi và mang đến những
              trải nghiệm thú vị.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Livestream:</strong> Phát trực tiếp các sự kiện đặc biệt, giới thiệu tính năng mới, hoặc tương tác với người chơi.</li>
              <li className="mb-2"><strong>Webinar:</strong> Hội thảo trực tuyến về chiến thuật chơi game, quản lý vốn, và các chủ đề liên quan.</li>
              <li className="mb-2"><strong>Q&A session:</strong> Phiên hỏi đáp trực tiếp với đội ngũ 92Lottery hoặc các chuyên gia.</li>
              <li className="mb-2"><strong>Lucky draw:</strong> Quay số may mắn với nhiều phần thưởng hấp dẫn.</li>
            </ul>
          </div>

            <h3 className="text-xl font-semibold mb-3">3. Sự kiện offline</h3>
            <p className="mb-4">
              Ngoài các hoạt động trực tuyến, 92Lottery còn tổ chức nhiều sự kiện offline tại các thành phố lớn
              để tạo cơ hội gặp gỡ trực tiếp cho cộng đồng người chơi.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Gặp gỡ cộng đồng (Community Meetup):</strong> Sự kiện gặp gỡ, giao lưu giữa người chơi và đội ngũ 92Lottery.</li>
              <li className="mb-2"><strong>Giải đấu thể thao điện tử:</strong> Tổ chức các giải đấu Esports với sự tham gia của cộng đồng.</li>
              <li className="mb-2"><strong>Tiệc kỷ niệm:</strong> Sự kiện đặc biệt nhân dịp kỷ niệm thành lập hoặc các cột mốc quan trọng.</li>
              <li className="mb-2"><strong>Hội thảo và đào tạo:</strong> Chia sẻ kiến thức và kỹ năng chơi game từ các chuyên gia.</li>
              <li className="mb-2"><strong>Hoạt động từ thiện:</strong> Các hoạt động xã hội và từ thiện với sự tham gia của cộng đồng.</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý:</p>
              <p>Thông tin về các sự kiện offline được thông báo trước ít nhất 2 tuần trên tất cả các kênh truyền thông chính thức của 92Lottery. Để tham gia, bạn thường cần đăng ký trước và có thể có một số điều kiện nhất định.</p>
            </div>

            <h3 className="text-xl font-semibold mb-3">4. Chương trình đại sứ thương hiệu</h3>
            <p className="mb-4">
              92Lottery có chương trình đại sứ thương hiệu (Brand Ambassador) dành cho những người chơi nhiệt tình
              và có ảnh hưởng trong cộng đồng.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Vai trò của đại sứ:</strong> Đại diện cho 92Lottery, chia sẻ thông tin, hỗ trợ người chơi mới, và tham gia các sự kiện.</li>
              <li className="mb-2"><strong>Quyền lợi:</strong> Nhận các đặc quyền độc quyền, quà tặng, và phần thưởng hấp dẫn.</li>
              <li className="mb-2"><strong>Điều kiện tham gia:</strong> Là thành viên tích cực của cộng đồng, có kiến thức tốt về 92Lottery, và có khả năng giao tiếp tốt.</li>
            </ul>
            <p className="mb-4">
              Nếu bạn quan tâm đến chương trình đại sứ thương hiệu, bạn có thể liên hệ với đội ngũ hỗ trợ 92Lottery
              để biết thêm chi tiết và cách đăng ký.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Quy tắc ứng xử trong cộng đồng 92Lottery</h2>

          <div className="mb-8">
            <p className="mb-4">
              Để duy trì một môi trường cộng đồng lành mạnh và thân thiện, 92Lottery đã thiết lập một số quy tắc
              ứng xử mà tất cả thành viên cần tuân thủ.
            </p>

            <h3 className="text-xl font-semibold mb-3">1. Quy tắc chung</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Tôn trọng tất cả thành viên trong cộng đồng</li>
              <li className="mb-2">Không sử dụng ngôn ngữ xúc phạm, phân biệt đối xử, hoặc quấy rối</li>
              <li className="mb-2">Không chia sẻ thông tin cá nhân của người khác mà không được phép</li>
              <li className="mb-2">Không spam hoặc đăng nội dung không liên quan</li>
              <li className="mb-2">Không quảng cáo các sản phẩm hoặc dịch vụ không liên quan</li>
              <li className="mb-2">Tuân thủ luật pháp và quy định của 92Lottery</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2. Quy tắc thảo luận</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Giữ thảo luận liên quan đến chủ đề</li>
              <li className="mb-2">Chia sẻ kinh nghiệm và kiến thức một cách xây dựng</li>
              <li className="mb-2">Tôn trọng ý kiến khác biệt</li>
              <li className="mb-2">Không lan truyền thông tin sai lệch hoặc chưa được xác minh</li>
              <li className="mb-2">Sử dụng các kênh phù hợp cho từng loại thảo luận</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3. Hậu quả của việc vi phạm quy tắc</h3>
            <p className="mb-4">
              Tùy thuộc vào mức độ nghiêm trọng của vi phạm, các hình thức xử lý có thể bao gồm:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Cảnh cáo</li>
              <li className="mb-2">Xóa nội dung vi phạm</li>
              <li className="mb-2">Hạn chế quyền tham gia thảo luận</li>
              <li className="mb-2">Tạm thời cấm tham gia cộng đồng</li>
              <li className="mb-2">Vĩnh viễn loại khỏi cộng đồng</li>
              <li className="mb-2">Trong trường hợp nghiêm trọng, có thể ảnh hưởng đến tài khoản 92Lottery</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý:</p>
              <p>Các quy tắc này được áp dụng trên tất cả các kênh cộng đồng chính thức của 92Lottery, bao gồm Telegram, Facebook, diễn đàn, và các sự kiện offline.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Cách tận dụng tối đa cộng đồng 92Lottery</h2>

          <div className="mb-8">
            <p className="mb-4">
              Để có được trải nghiệm tốt nhất và tận dụng tối đa lợi ích từ cộng đồng 92Lottery,
              dưới đây là một số mẹo hữu ích:
            </p>

            <h3 className="text-xl font-semibold mb-3">1. Tham gia tích cực</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Thường xuyên tham gia thảo luận và chia sẻ kinh nghiệm</li>
              <li className="mb-2">Đặt câu hỏi khi bạn cần giúp đỡ</li>
              <li className="mb-2">Giúp đỡ những người chơi khác khi có thể</li>
              <li className="mb-2">Tham gia các sự kiện và cuộc thi</li>
              <li className="mb-2">Đóng góp ý kiến xây dựng để cải thiện cộng đồng</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2. Học hỏi từ người khác</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Theo dõi các thảo luận về chiến thuật và mẹo chơi game</li>
              <li className="mb-2">Tìm hiểu kinh nghiệm từ những người chơi thành công</li>
              <li className="mb-2">Tham gia các webinar và hội thảo đào tạo</li>
              <li className="mb-2">Đọc các bài viết hướng dẫn và chia sẻ kinh nghiệm</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3. Xây dựng mạng lưới</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Kết nối với những người chơi có cùng sở thích</li>
              <li className="mb-2">Tham gia các nhóm nhỏ hoặc câu lạc bộ trong cộng đồng</li>
              <li className="mb-2">Tham dự các sự kiện offline để gặp gỡ trực tiếp</li>
              <li className="mb-2">Kết nối với các đại sứ thương hiệu và người có ảnh hưởng</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4. Cập nhật thông tin</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Bật thông báo cho các kênh cộng đồng chính thức</li>
              <li className="mb-2">Thường xuyên kiểm tra các thông báo mới</li>
              <li className="mb-2">Theo dõi các tin tức và cập nhật từ 92Lottery</li>
              <li className="mb-2">Tham gia các phiên Q&A và livestream</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các câu hỏi thường gặp về cộng đồng 92Lottery</h2>

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
              Cộng đồng 92Lottery là một phần quan trọng của trải nghiệm tổng thể tại 92Lottery.
              Thông qua việc tham gia cộng đồng, bạn không chỉ nhận được thông tin mới nhất và hỗ trợ kịp thời,
              mà còn có cơ hội kết nối với những người chơi khác, chia sẻ kinh nghiệm, và tham gia các sự kiện
              độc quyền với nhiều phần thưởng hấp dẫn.
            </p>
            <p className="mb-4">
              Dù bạn là người mới bắt đầu hay đã là người chơi lâu năm, cộng đồng 92Lottery luôn chào đón bạn
              với vòng tay rộng mở. Hãy tham gia ngay hôm nay để trở thành một phần của gia đình 92Lottery
              và tận hưởng trọn vẹn trải nghiệm cá cược trực tuyến.
            </p>
            <p className="mb-4">
              Nhớ rằng, sức mạnh của cộng đồng nằm ở sự đóng góp của mỗi thành viên. Hãy tham gia tích cực,
              chia sẻ kinh nghiệm, và cùng nhau xây dựng một cộng đồng 92Lottery ngày càng lớn mạnh và thân thiện.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Các bài viết liên quan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/92lottery-telegram" className="text-blue-600 hover:text-blue-800">
                  92Lottery Telegram - Cách tham gia nhóm và nhận thông báo mới nhất
                </Link>
              </li>
              <li>
                <Link href="/cach-choi-92lottery-hieu-qua" className="text-blue-600 hover:text-blue-800">
                  Cách chơi 92Lottery hiệu quả - Chiến thuật và mẹo thắng lớn
                </Link>
              </li>
              <li>
                <Link href="/92lottery-co-lua-dao-khong" className="text-blue-600 hover:text-blue-800">
                  92Lottery có lừa đảo không? Đánh giá uy tín từ chuyên gia
                </Link>
              </li>
              <li>
                <Link href="/lich-su-phat-trien-92lottery" className="text-blue-600 hover:text-blue-800">
                  Lịch sử phát triển 92Lottery - Từ khi thành lập đến nay
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
