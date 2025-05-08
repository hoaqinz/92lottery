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
  const homePageSchemas = generateHomePageSchema();

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
      {/* Schema.org JSON-LD */}
      {homePageSchemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Main content */}
      <Header />
      <Banner />
      <Notification />

      <main>
        {/* SEO Heading - Ẩn khỏi người dùng nhưng hiển thị cho search engines */}
        <div className="sr-only">
          <h1>92Lottery - Trang chủ chính thức | Đăng ký, đăng nhập, tải app, nạp rút tiền</h1>
          <p>
            Chào mừng bạn đến với trang chủ chính thức 92Lottery - nền tảng cá cược xổ số, lottery, thể thao và casino trực tuyến uy tín hàng đầu Việt Nam.
            Tại đây, bạn có thể đăng ký, đăng nhập, tải app, nạp tiền, rút tiền, tham gia mini game và nhiều dịch vụ khác với giao diện thân thiện và bảo mật tuyệt đối.
          </p>

          <h2>Đăng ký và đăng nhập 92Lottery</h2>
          <p>
            Đăng ký tài khoản 92Lottery chỉ mất vài phút với quy trình đơn giản. Nhấp vào nút "Đăng ký" trên trang chủ, điền thông tin cá nhân và làm theo hướng dẫn.
            Sau khi đăng ký thành công, bạn sẽ nhận được khuyến mãi 100K. Để đăng nhập, chỉ cần nhấp vào nút "Đăng nhập", nhập số điện thoại và mật khẩu của bạn.
          </p>

          <h2>Tải App 92Lottery trên điện thoại Android và iOS</h2>
          <p>
            App 92Lottery mang đến trải nghiệm cá cược mượt mà và tiện lợi trên điện thoại di động. Để tải app, nhấp vào nút "Tải ứng dụng" trên trang chủ,
            chọn phiên bản phù hợp với thiết bị của bạn (Android/iOS), và làm theo hướng dẫn cài đặt. App 92Lottery có nhiều tính năng độc đáo như đăng nhập bằng vân tay,
            thông báo kết quả, và khuyến mãi độc quyền.
          </p>

          <h2>Nạp tiền và rút tiền 92Lottery</h2>
          <p>
            92Lottery hỗ trợ nhiều phương thức nạp tiền như chuyển khoản ngân hàng, ví điện tử (Momo, ZaloPay, VNPay), thẻ cào điện thoại, và tiền điện tử (USDT, BTC).
            Quy trình nạp tiền đơn giản và được xử lý trong vòng 1-5 phút. Rút tiền cũng nhanh chóng và an toàn với thời gian xử lý từ 5-30 phút tùy theo phương thức rút tiền bạn chọn.
          </p>

          <h2>92Lottery Mini Game - Win Go, K3, 5D, TRX</h2>
          <p>
            92Lottery cung cấp nhiều mini game hấp dẫn như Win Go (xổ số 1 phút), K3 Lotre (xổ số 3 phút), 5D Lotre (xổ số 5 phút), và TRX Win (xổ số blockchain).
            Mỗi trò chơi có luật chơi đơn giản và tỷ lệ trả thưởng hấp dẫn. Win Go cho phép đoán số Xanh/Đỏ/Tím, K3 Lotre có nhiều lựa chọn cược như Lớn/Nhỏ, Lẻ/Chẵn,
            5D Lotre với nhiều cách chơi đa dạng, và TRX Win với tính minh bạch cao dựa trên blockchain.
          </p>

          <h2>92Lottery Club - Đặc quyền thành viên VIP</h2>
          <p>
            92Lottery Club là chương trình thành viên VIP với 6 cấp độ từ Bronze đến Diamond. Thành viên VIP được hưởng nhiều đặc quyền như tỷ lệ hoàn trả cao hơn,
            hạn mức rút tiền lớn hơn, ưu tiên xử lý rút tiền, quà tặng sinh nhật, và nhiều ưu đãi độc quyền khác. Để tham gia, bạn chỉ cần tích lũy điểm VIP
            thông qua các hoạt động cá cược tại 92Lottery.
          </p>

          <h2>Khắc phục khi 92Lottery bị sập hoặc không truy cập được</h2>
          <p>
            Nếu 92Lottery bị sập hoặc không truy cập được, bạn có thể sử dụng các giải pháp như: truy cập qua link dự phòng chính thức, thay đổi DNS sang Google DNS (8.8.8.8, 8.8.4.4)
            hoặc Cloudflare DNS (1.1.1.1, 1.0.0.1), sử dụng VPN đáng tin cậy, hoặc sử dụng ứng dụng di động 92Lottery. Bạn cũng có thể tham gia nhóm Telegram chính thức
            @92lottery_official để nhận link dự phòng và hỗ trợ kịp thời.
          </p>

          <h2>92Lottery có lừa đảo không?</h2>
          <p>
            Không, 92Lottery không lừa đảo. 92Lottery là nhà cái uy tín với giấy phép hoạt động hợp pháp được cấp bởi Cơ quan Quản lý Trò chơi Philippines (PAGCOR)
            và Cơ quan Cá cược Curacao. 92Lottery có hệ thống bảo mật tiên tiến với mã hóa SSL 256-bit, chính sách thanh toán minh bạch, và đội ngũ hỗ trợ khách hàng chuyên nghiệp.
            Nhà cái này đã hoạt động nhiều năm và có lượng người chơi lớn tại Việt Nam.
          </p>

          <h2>Câu hỏi thường gặp về 92Lottery</h2>

          <h3>92Lottery là gì?</h3>
          <p>
            92Lottery là nền tảng cá cược xổ số, lottery, thể thao và casino trực tuyến uy tín hàng đầu Việt Nam, cung cấp đa dạng các trò chơi với tỷ lệ trả thưởng cao nhất thị trường.
          </p>

          <h3>Làm thế nào để đăng ký tài khoản tại 92Lottery?</h3>
          <p>
            Để đăng ký tài khoản tại 92Lottery, bạn chỉ cần nhấp vào nút 'Đăng ký' trên trang chủ, điền thông tin cá nhân và làm theo hướng dẫn.
            Sau khi đăng ký thành công, bạn sẽ nhận được khuyến mãi 100K.
          </p>

          <h3>Làm thế nào để đăng nhập vào 92Lottery?</h3>
          <p>
            Để đăng nhập vào 92Lottery, bạn cần truy cập trang chủ 92lottery.dev, nhấp vào nút 'Đăng nhập', nhập số điện thoại và mật khẩu của bạn,
            sau đó nhấp vào nút 'Đăng nhập' để truy cập vào tài khoản.
          </p>

          <h3>92Lottery có những phương thức nạp tiền nào?</h3>
          <p>
            92Lottery hỗ trợ nhiều phương thức nạp tiền khác nhau, bao gồm: chuyển khoản ngân hàng, ví điện tử (Momo, ZaloPay, VNPay), thẻ cào điện thoại, và tiền điện tử (USDT, BTC).
          </p>

          <h3>Thời gian rút tiền từ 92Lottery mất bao lâu?</h3>
          <p>
            Thời gian rút tiền từ 92Lottery phụ thuộc vào phương thức rút tiền bạn chọn. Chuyển khoản ngân hàng và ví điện tử thường được xử lý trong vòng 5-30 phút.
            Rút tiền qua tiền điện tử có thể mất từ 30 phút đến 2 giờ.
          </p>

          <h3>Làm thế nào để tải App 92Lottery?</h3>
          <p>
            Để tải App 92Lottery, bạn cần truy cập trang chủ 92lottery.dev, nhấp vào nút 'Tải ứng dụng', chọn phiên bản phù hợp với thiết bị của bạn (Android/iOS),
            và làm theo hướng dẫn cài đặt.
          </p>

          <h3>Win Go là gì và cách chơi như thế nào?</h3>
          <p>
            Win Go là mini game xổ số 1 phút tại 92Lottery, cho phép người chơi đoán kết quả số từ 0-9 hoặc màu sắc (Xanh/Đỏ/Tím).
            Cách chơi đơn giản: chọn số hoặc màu bạn dự đoán, đặt cược, và chờ kết quả sau 1 phút.
          </p>

          <h3>92Lottery Club là gì?</h3>
          <p>
            92Lottery Club là chương trình thành viên VIP của 92Lottery, mang đến nhiều đặc quyền và ưu đãi độc quyền cho người chơi trung thành.
            Chương trình gồm 6 cấp độ VIP, từ Bronze đến Diamond, với lợi ích tăng dần theo cấp độ.
          </p>

          <h3>Tại sao 92Lottery bị sập hoặc không truy cập được?</h3>
          <p>
            92Lottery có thể không truy cập được do nhiều nguyên nhân: bảo trì hệ thống, thay đổi địa chỉ domain, chặn DNS từ nhà mạng, tấn công DDoS,
            lỗi kết nối internet của người dùng, hoặc lỗi cache trình duyệt.
          </p>

          <h3>Nhóm Telegram chính thức của 92Lottery là gì?</h3>
          <p>
            Nhóm Telegram chính thức của 92Lottery là @92lottery_official, được quản lý bởi đội ngũ 92Lottery.
            Đây là kênh thông tin chính thức để nhận thông báo về khuyến mãi, sự kiện, link dự phòng, và hỗ trợ trực tiếp.
          </p>

          <h3>92Lottery có lừa đảo không?</h3>
          <p>
            Không, 92Lottery không lừa đảo. 92Lottery là nhà cái uy tín với giấy phép hoạt động hợp pháp, hệ thống bảo mật tiên tiến,
            chính sách thanh toán minh bạch và đội ngũ hỗ trợ khách hàng chuyên nghiệp.
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
