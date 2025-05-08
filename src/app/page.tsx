// Import components
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Notification from "@/components/Notification";
import MenuGrid from "@/components/MenuGrid";
import GameSection from "@/components/GameSection";
import WinnerInfo from "@/components/WinnerInfo";
import IncomeRanking from "@/components/IncomeRanking";
import TabBar from "@/components/TabBar";

// Import schema generator
import { generateHomePageSchema } from "@/lib/schema";

export default function HomePage() {
  // Generate schema for the homepage
  const homePageSchema = generateHomePageSchema();
  const schemaString = JSON.stringify(homePageSchema);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaString }}
      />

      {/* Main content */}
      <Header />
      <Banner />
      <Notification />

      <main>
        {/* SEO Heading - Ẩn khỏi người dùng nhưng hiển thị cho search engines */}
        <div className="sr-only">
          <h1>92Lottery - Cá cược xổ số & Casino trực tuyến hàng đầu Việt Nam</h1>
          <p>
            Chào mừng bạn đến với 92Lottery - nền tảng cá cược xổ số, lottery, thể thao và casino trực tuyến uy tín hàng đầu Việt Nam.
            Chúng tôi cung cấp đa dạng các trò chơi với tỷ lệ trả thưởng cao nhất thị trường, giao diện thân thiện và bảo mật tuyệt đối.
          </p>
          <h2>Trải nghiệm cá cược tuyệt vời tại 92Lottery</h2>
          <p>
            Tại 92Lottery, chúng tôi cam kết mang đến cho người chơi những trải nghiệm cá cược tuyệt vời nhất với:
            Đa dạng các trò chơi xổ số và casino trực tuyến,
            Tỷ lệ trả thưởng cao nhất thị trường,
            Giao dịch nạp/rút tiền nhanh chóng, an toàn,
            Hỗ trợ khách hàng 24/7,
            Khuyến mãi hấp dẫn cho người chơi mới và thành viên thân thiết.
          </p>
          <h2>Các trò chơi nổi bật tại 92Lottery</h2>
          <p>
            92Lottery tự hào cung cấp các trò chơi đa dạng và hấp dẫn, bao gồm:
            Win Go - Đoán số Xanh/Đỏ/Tím với tỷ lệ thắng cao,
            K3 Lotre - Đoán số Lớn/Nhỏ/Lẻ/Chẵn với nhiều cơ hội trúng thưởng,
            5D Lotre - Trò chơi xổ số hiện đại với nhiều lựa chọn cược,
            Trx Win - Đoán số Xanh/Đỏ/Tím với giao diện trực quan.
          </p>
          <h2>Tại sao chọn 92Lottery?</h2>
          <p>
            Với hơn 5 năm kinh nghiệm trong ngành cá cược trực tuyến, 92Lottery đã trở thành lựa chọn hàng đầu của người chơi Việt Nam nhờ:
            Được cấp phép hoạt động hợp pháp,
            Bảo mật thông tin cá nhân tuyệt đối,
            Giao dịch tài chính an toàn, minh bạch,
            Tỷ lệ trả thưởng cao nhất thị trường,
            Giao diện thân thiện, dễ sử dụng trên mọi thiết bị.
          </p>
          <h2>Câu hỏi thường gặp</h2>
          <h3>92Lottery là gì?</h3>
          <p>
            92Lottery là nền tảng cá cược xổ số, lottery, thể thao và casino trực tuyến uy tín hàng đầu Việt Nam,
            cung cấp đa dạng các trò chơi với tỷ lệ trả thưởng cao nhất thị trường.
          </p>
          <h3>Làm thế nào để đăng ký tài khoản tại 92Lottery?</h3>
          <p>
            Để đăng ký tài khoản tại 92Lottery, bạn chỉ cần nhấp vào nút 'Đăng ký' trên trang chủ,
            điền thông tin cá nhân và làm theo hướng dẫn. Sau khi đăng ký thành công, bạn sẽ nhận được khuyến mãi 100K.
          </p>
          <h3>92Lottery có những trò chơi nào?</h3>
          <p>
            92Lottery cung cấp nhiều trò chơi hấp dẫn như Win Go, K3 Lotre, 5D Lotre, Trx Win,
            cùng nhiều trò chơi casino và thể thao trực tuyến khác.
          </p>
          <h3>Làm thế nào để nạp và rút tiền tại 92Lottery?</h3>
          <p>
            92Lottery hỗ trợ nhiều phương thức thanh toán như chuyển khoản ngân hàng, ví điện tử, và tiền điện tử.
            Quá trình nạp và rút tiền đều được xử lý nhanh chóng và an toàn.
          </p>
        </div>

        <MenuGrid />
        <GameSection />
        <WinnerInfo />
        <IncomeRanking />
      </main>

      {/* Tab Bar */}
      <TabBar />
    </div>
  );
}
