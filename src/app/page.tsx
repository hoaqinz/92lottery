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
          <h1>92LOTTERY - Trang chủ chính thức | Đăng ký, đăng nhập, tải app, nạp rút tiền</h1>
          <p>
            92LOTTERY là nhà cái xổ số trực tuyến uy tín hàng đầu Việt Nam, cung cấp WinGo, K3 Lotre, 5D Lotre, TRX Win và nhiều trò chơi hấp dẫn khác. Đăng ký 92LOTTERY ngay để nhận khuyến mãi 100K và trải nghiệm dịch vụ chất lượng cao.
            Giao diện độc quyền cho Mobile và các hệ điều hành máy tính với tốc độ load tải cực nhanh không có độ trễ. Những khuyến mãi độc quyền chỉ 92LOTTERY đem lại cho tân thủ tốt nhất.
          </p>

          <h2>Đăng ký và đăng nhập 92LOTTERY</h2>
          <p>
            Đăng ký tài khoản 92LOTTERY chỉ mất vài phút với quy trình đơn giản. Nhấp vào nút "Đăng ký" trên trang chủ 92LOTTERY, điền thông tin cá nhân và làm theo hướng dẫn.
            Sau khi đăng ký thành công, bạn sẽ nhận được khuyến mãi 100K từ 92LOTTERY. Để đăng nhập 92LOTTERY, chỉ cần nhấp vào nút "Đăng nhập", nhập số điện thoại và mật khẩu của bạn.
          </p>

          <h2>Tải App 92LOTTERY trên điện thoại Android và iOS</h2>
          <p>
            App 92LOTTERY mang đến trải nghiệm cá cược mượt mà và tiện lợi trên điện thoại di động. Để tải app 92LOTTERY, nhấp vào nút "Tải ứng dụng" trên trang chủ,
            chọn phiên bản phù hợp với thiết bị của bạn (Android/iOS), và làm theo hướng dẫn cài đặt. App 92LOTTERY có nhiều tính năng độc đáo như đăng nhập bằng vân tay,
            thông báo kết quả, và khuyến mãi độc quyền chỉ dành cho người dùng 92LOTTERY mobile.
          </p>

          <h2>Nạp tiền và rút tiền 92LOTTERY</h2>
          <p>
            92LOTTERY hỗ trợ nhiều phương thức nạp tiền như chuyển khoản ngân hàng, ví điện tử (Momo, ZaloPay, VNPay), thẻ cào điện thoại, và tiền điện tử (USDT, BTC).
            Quy trình nạp tiền tại 92LOTTERY đơn giản và được xử lý trong vòng 1-5 phút. Rút tiền từ 92LOTTERY cũng nhanh chóng và an toàn với thời gian xử lý từ 5-30 phút tùy theo phương thức rút tiền bạn chọn.
          </p>

          <h2>92LOTTERY Mini Game - Win Go, K3, 5D, TRX</h2>
          <p>
            92LOTTERY cung cấp nhiều mini game hấp dẫn như Win Go (xổ số 1 phút), K3 Lotre (xổ số 3 phút), 5D Lotre (xổ số 5 phút), và TRX Win (xổ số blockchain).
            Mỗi trò chơi tại 92LOTTERY có luật chơi đơn giản và tỷ lệ trả thưởng cao nhất thị trường. Win Go 92LOTTERY cho phép đoán số Xanh/Đỏ/Tím, K3 Lotre 92LOTTERY có nhiều lựa chọn cược như Lớn/Nhỏ, Lẻ/Chẵn,
            5D Lotre 92LOTTERY với nhiều cách chơi đa dạng, và TRX Win 92LOTTERY với tính minh bạch cao dựa trên blockchain.
          </p>

          <h2>92LOTTERY Club - Đặc quyền thành viên VIP</h2>
          <p>
            92LOTTERY Club là chương trình thành viên VIP độc quyền của 92LOTTERY với 6 cấp độ từ Bronze đến Diamond. Thành viên VIP 92LOTTERY được hưởng nhiều đặc quyền như tỷ lệ hoàn trả cao hơn,
            hạn mức rút tiền lớn hơn, ưu tiên xử lý rút tiền, quà tặng sinh nhật, và nhiều ưu đãi độc quyền khác. Để tham gia, bạn chỉ cần tích lũy điểm VIP
            thông qua các hoạt động cá cược tại 92LOTTERY.
          </p>

          <h2>Khắc phục khi 92LOTTERY bị sập hoặc không truy cập được</h2>
          <p>
            Nếu 92LOTTERY bị sập hoặc không truy cập được, bạn có thể sử dụng các giải pháp như: truy cập qua link dự phòng chính thức của 92LOTTERY, thay đổi DNS sang Google DNS (8.8.8.8, 8.8.4.4)
            hoặc Cloudflare DNS (1.1.1.1, 1.0.0.1), sử dụng VPN đáng tin cậy, hoặc sử dụng ứng dụng di động 92LOTTERY. Bạn cũng có thể tham gia nhóm Telegram chính thức
            @92lottery_official để nhận link dự phòng 92LOTTERY và hỗ trợ kịp thời.
          </p>

          <h2>92LOTTERY có lừa đảo không?</h2>
          <p>
            Không, 92LOTTERY không lừa đảo. 92LOTTERY là nhà cái uy tín với giấy phép hoạt động hợp pháp được cấp bởi Cơ quan Quản lý Trò chơi Philippines (PAGCOR)
            và Cơ quan Cá cược Curacao. 92LOTTERY có hệ thống bảo mật tiên tiến với mã hóa SSL 256-bit, chính sách thanh toán minh bạch, và đội ngũ hỗ trợ khách hàng 92LOTTERY chuyên nghiệp.
            92LOTTERY đã hoạt động nhiều năm và có lượng người chơi lớn nhất tại Việt Nam.
          </p>

          <h2>Câu hỏi thường gặp về 92LOTTERY</h2>

          <h3>92LOTTERY là gì?</h3>
          <p>
            92LOTTERY là nền tảng cá cược xổ số, lottery, thể thao và casino trực tuyến uy tín hàng đầu Việt Nam, cung cấp đa dạng các trò chơi 92LOTTERY với tỷ lệ trả thưởng cao nhất thị trường.
          </p>

          <h3>Làm thế nào để đăng ký tài khoản tại 92LOTTERY?</h3>
          <p>
            Để đăng ký tài khoản tại 92LOTTERY, bạn chỉ cần nhấp vào nút 'Đăng ký' trên trang chủ 92LOTTERY, điền thông tin cá nhân và làm theo hướng dẫn.
            Sau khi đăng ký thành công, bạn sẽ nhận được khuyến mãi 100K từ 92LOTTERY.
          </p>

          <h3>Làm thế nào để đăng nhập vào 92LOTTERY?</h3>
          <p>
            Để đăng nhập vào 92LOTTERY, bạn cần truy cập trang chủ 92lottery.dev, nhấp vào nút 'Đăng nhập 92LOTTERY', nhập số điện thoại và mật khẩu của bạn,
            sau đó nhấp vào nút 'Đăng nhập' để truy cập vào tài khoản 92LOTTERY.
          </p>

          <h3>92LOTTERY có những phương thức nạp tiền nào?</h3>
          <p>
            92LOTTERY hỗ trợ nhiều phương thức nạp tiền khác nhau, bao gồm: chuyển khoản ngân hàng, ví điện tử (Momo, ZaloPay, VNPay), thẻ cào điện thoại, và tiền điện tử (USDT, BTC) với tốc độ xử lý nhanh nhất.
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

          <h3>Hướng dẫn và thông tin hữu ích về 92Lottery</h3>
          <ul>
            <li><a href="/huong-dan-dang-ky">Hướng dẫn đăng ký 92Lottery</a></li>
            <li><a href="/huong-dan-dang-nhap">Hướng dẫn đăng nhập 92Lottery</a></li>
            <li><a href="/huong-dan-nap-tien">Hướng dẫn nạp tiền 92Lottery</a></li>
            <li><a href="/rut-tien-92lottery">Hướng dẫn rút tiền 92Lottery</a></li>
            <li><a href="/92lottery-co-lua-dao-khong">92Lottery có lừa đảo không?</a></li>
            <li><a href="/92lottery-bi-sap">92Lottery bị sập - Thông tin chính xác</a></li>
            <li><a href="/92lottery-telegram">92Lottery Telegram - Kênh thông tin chính thức</a></li>
            <li><a href="/92lottery-club">92Lottery Club - Cộng đồng người chơi</a></li>
            <li><a href="/92lottery-mini-game">92Lottery Mini Game - Trò chơi phổ biến</a></li>
            <li><a href="/app-92lottery">App 92Lottery - Tải và cài đặt</a></li>
            <li><a href="/hanh-trinh-nguoi-dung-92lottery">Hành trình người dùng 92Lottery</a></li>
            <li><a href="/tong-quan-92lottery">Tổng quan về 92Lottery</a></li>
            <li><a href="/wingo-92lottery">WinGo 92Lottery - Xổ số 1 phút</a></li>
          </ul>
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
