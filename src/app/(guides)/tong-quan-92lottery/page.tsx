import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Tổng quan 92Lottery - Hướng dẫn đầy đủ về nhà cái xổ số trực tuyến | 92Lottery',
  description: 'Tổng quan toàn diện về 92Lottery: lịch sử, trò chơi, đăng ký, nạp rút tiền, ứng dụng, khuyến mãi, bảo mật và hỗ trợ. Mọi thông tin bạn cần biết về 92Lottery.',
  keywords: ['tổng quan 92lottery', 'hướng dẫn 92lottery', 'giới thiệu 92lottery', 'thông tin 92lottery', 'cách chơi 92lottery', 'trò chơi 92lottery', 'đăng ký 92lottery', 'nạp tiền 92lottery', 'rút tiền 92lottery', 'ứng dụng 92lottery', 'khuyến mãi 92lottery', 'bảo mật 92lottery', 'hỗ trợ 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/tong-quan-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/tong-quan-92lottery',
      'x-default': 'https://92lottery.dev/tong-quan-92lottery'
    }
  },
};

export default function ComprehensiveGuidePage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "92Lottery là gì?",
      answer: "92Lottery là trang xổ số độc quyền nổi bật với các trò chơi như WinGo, K3 Lotre, 5D Lotre, TRX Win trực tuyến đa dạng và uy tín, cùng nhiều sảnh game bài, bắn cá, nổ hũ và casino trực tuyến. Được thành lập từ năm 2020, 92Lottery đã nhanh chóng trở thành một trong những nhà cái xổ số trực tuyến hàng đầu Việt Nam với hàng triệu người chơi."
    },
    {
      question: "Làm thế nào để đăng ký tài khoản 92Lottery?",
      answer: "Để đăng ký tài khoản 92Lottery, bạn cần: 1) Truy cập trang chủ 92lottery.dev, 2) Nhấn vào nút 'Đăng ký', 3) Điền thông tin cá nhân (tên đăng nhập, mật khẩu, số điện thoại, email), 4) Nhập mã xác nhận được gửi đến số điện thoại hoặc email, 5) Hoàn tất đăng ký và nhận thưởng chào mừng 100K. Quá trình đăng ký chỉ mất khoảng 1-2 phút."
    },
    {
      question: "92Lottery có những trò chơi nào?",
      answer: "92Lottery cung cấp nhiều trò chơi đa dạng, bao gồm: 1) Xổ số độc quyền: WinGo (xổ số 1 phút), K3 Lotre (xổ số 3 phút), 5D Lotre (xổ số 5 phút), TRX Win (xổ số blockchain); 2) Game bài: Poker, Blackjack, Baccarat, Tiến lên miền Nam; 3) Slot và Nổ hũ với hàng trăm game khác nhau; 4) Bắn cá với đồ họa đẹp mắt; 5) Casino trực tuyến với dealer người thật."
    },
    {
      question: "Làm thế nào để nạp và rút tiền tại 92Lottery?",
      answer: "92Lottery hỗ trợ nhiều phương thức nạp và rút tiền: 1) Chuyển khoản ngân hàng: hỗ trợ tất cả ngân hàng Việt Nam với thời gian xử lý 1-5 phút; 2) Ví điện tử: MoMo, ZaloPay, VNPay với thời gian xử lý tức thì; 3) Thẻ cào điện thoại: Viettel, Mobifone, Vinaphone; 4) Tiền điện tử: USDT, BTC, ETH. Thời gian rút tiền từ 5-30 phút tùy phương thức, không mất phí."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Tổng quan 92Lottery", url: "https://92lottery.dev/tong-quan-92lottery" }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const breadcrumbSchemaString = JSON.stringify(breadcrumbSchema);

  // Mục lục
  const tableOfContents = [
    { id: "gioi-thieu", title: "Giới thiệu về 92Lottery", subItems: [] },
    { id: "dang-ky", title: "Đăng ký và đăng nhập", subItems: [] },
    { id: "tro-choi", title: "Các trò chơi tại 92Lottery",
      subItems: [
        { id: "wingo", title: "WinGo - Xổ số 1 phút" },
        { id: "k3", title: "K3 Lotre - Xổ số 3 phút" },
        { id: "5d", title: "5D Lotre - Xổ số 5 phút" },
        { id: "trx", title: "TRX Win - Xổ số blockchain" },
        { id: "other-games", title: "Các trò chơi khác" }
      ]
    },
    { id: "nap-rut", title: "Nạp và rút tiền", subItems: [] },
    { id: "ung-dung", title: "Ứng dụng di động", subItems: [] },
    { id: "khuyen-mai", title: "Khuyến mãi và ưu đãi", subItems: [] },
    { id: "bao-mat", title: "Bảo mật và an toàn", subItems: [] },
    { id: "ho-tro", title: "Hỗ trợ khách hàng", subItems: [] },
    { id: "faq", title: "Câu hỏi thường gặp", subItems: [] }
  ];

  return React.createElement(
    React.Fragment,
    null,
    // Schema.org JSON-LD
    React.createElement('script', {
      key: 'faq-schema',
      type: 'application/ld+json',
      dangerouslySetInnerHTML: { __html: faqSchemaString }
    }),
    React.createElement('script', {
      key: 'breadcrumb-schema',
      type: 'application/ld+json',
      dangerouslySetInnerHTML: { __html: breadcrumbSchemaString }
    }),

    // Breadcrumb
    React.createElement('div', { className: "bg-gray-100 py-2 px-4" },
      React.createElement('nav', { className: "text-sm" },
        React.createElement('ol', { className: "list-none p-0 inline-flex" },
          React.createElement('li', { className: "flex items-center" },
            React.createElement(Link, { href: "/", className: "text-blue-600 hover:text-blue-800" }, "Trang chủ"),
            React.createElement('span', { className: "mx-2" }, "/")
          ),
          React.createElement('li', { className: "text-gray-700" }, "Tổng quan 92Lottery")
        )
      )
    ),

    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "Tổng quan 92Lottery - Hướng dẫn đầy đủ về nhà cái xổ số trực tuyến"),

      React.createElement('div', { className: "prose max-w-none" },
        React.createElement('p', { className: "text-lg mb-6" },
          "Chào mừng bạn đến với hướng dẫn toàn diện về 92Lottery - nhà cái xổ số trực tuyến hàng đầu Việt Nam. Bài viết này cung cấp mọi thông tin bạn cần biết về 92Lottery, từ cách đăng ký, nạp rút tiền, các trò chơi, ứng dụng di động, khuyến mãi, bảo mật đến hỗ trợ khách hàng."
        ),

        // Mục lục
        React.createElement('div', { className: "bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8" },
          React.createElement('h2', { className: "text-xl font-semibold mb-4" }, "Mục lục"),
          React.createElement('ul', { className: "space-y-2" },
            tableOfContents.map((item, index) =>
              React.createElement('li', { key: index },
                React.createElement('a', {
                  href: `#${item.id}`,
                  className: "text-blue-600 hover:text-blue-800 font-medium"
                }, item.title),
                item.subItems.length > 0 &&
                  React.createElement('ul', { className: "pl-5 mt-2 space-y-1" },
                    item.subItems.map((subItem, subIndex) =>
                      React.createElement('li', { key: subIndex },
                        React.createElement('a', {
                          href: `#${subItem.id}`,
                          className: "text-blue-600 hover:text-blue-800"
                        }, subItem.title)
                      )
                    )
                  )
              )
            )
          )
        ),

        // Giới thiệu về 92Lottery
        React.createElement('section', { id: "gioi-thieu", className: "mb-10" },
          React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mb-4" }, "Giới thiệu về 92Lottery"),

          React.createElement('p', { className: "mb-4" },
            "92Lottery là trang xổ số độc quyền nổi bật với các trò chơi như WinGo, K3 Lotre, 5D Lotre, TRX Win trực tuyến đa dạng và uy tín, cùng nhiều sảnh game bài, bắn cá, nổ hũ và casino trực tuyến. Được thành lập từ năm 2020, 92Lottery đã nhanh chóng trở thành một trong những nhà cái xổ số trực tuyến hàng đầu Việt Nam."
          ),

          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200 mb-4" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Lịch sử phát triển"),
            React.createElement('p', null,
              "92Lottery được thành lập vào năm 2020 bởi một nhóm chuyên gia có hơn 15 năm kinh nghiệm trong ngành xổ số và cá cược trực tuyến. Với tầm nhìn mang đến trải nghiệm xổ số trực tuyến công bằng, minh bạch và hấp dẫn, 92Lottery đã không ngừng phát triển và cải tiến sản phẩm, dịch vụ của mình."
            )
          ),

          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200 mb-4" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Giấy phép hoạt động"),
            React.createElement('p', null,
              "92Lottery hoạt động dưới giấy phép cá cược trực tuyến số PAGCOR-OCGLA-2023/92L được cấp bởi Cơ quan Quản lý Trò chơi và Casino Philippines (PAGCOR) - một trong những cơ quan quản lý cá cược uy tín hàng đầu khu vực Châu Á. Giấy phép này đảm bảo 92Lottery hoạt động theo các tiêu chuẩn nghiêm ngặt về bảo mật, công bằng và minh bạch."
            )
          ),

          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Đội ngũ chuyên gia"),
            React.createElement('p', { className: "mb-2" },
              "92Lottery có đội ngũ chuyên gia giàu kinh nghiệm, bao gồm:"
            ),
            React.createElement('ul', { className: "list-disc pl-5 space-y-1" },
              React.createElement('li', null, "Ông Nguyễn Văn Minh - CEO với hơn 15 năm kinh nghiệm trong ngành"),
              React.createElement('li', null, "Bà Trần Thị Hương - CTO với chuyên môn về bảo mật và phát triển nền tảng"),
              React.createElement('li', null, "Ông Lê Quang Đạt - CPO chịu trách nhiệm phát triển các trò chơi độc quyền"),
              React.createElement('li', null, "Ông Phạm Thanh Tùng - Giám đốc Dịch vụ Khách hàng"),
              React.createElement('li', null, "Bà Ngô Thị Mai Anh - CFO quản lý hoạt động tài chính")
            ),
            React.createElement('p', { className: "mt-2" },
              React.createElement(Link, {
                href: "/doi-ngu-chuyen-gia-92lottery",
                className: "text-blue-600 hover:text-blue-800"
              }, "Tìm hiểu thêm về đội ngũ chuyên gia 92Lottery")
            )
          )
        ),

        // Đăng ký và đăng nhập
        React.createElement('section', { id: "dang-ky", className: "mb-10" },
          React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mb-4" }, "Đăng ký và đăng nhập"),

          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200 mb-4" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Cách đăng ký tài khoản 92Lottery"),
            React.createElement('p', { className: "mb-2" },
              "Đăng ký tài khoản 92Lottery rất đơn giản và nhanh chóng, chỉ mất khoảng 1-2 phút:"
            ),
            React.createElement('ol', { className: "list-decimal pl-5 space-y-1" },
              React.createElement('li', null, "Truy cập trang chủ 92lottery.dev"),
              React.createElement('li', null, "Nhấn vào nút 'Đăng ký' ở góc phải trên cùng"),
              React.createElement('li', null, "Điền thông tin cá nhân: tên đăng nhập, mật khẩu, số điện thoại, email"),
              React.createElement('li', null, "Nhập mã xác nhận được gửi đến số điện thoại hoặc email"),
              React.createElement('li', null, "Hoàn tất đăng ký và nhận thưởng chào mừng 100K")
            ),
            React.createElement('p', { className: "mt-2" },
              React.createElement(Link, {
                href: "/huong-dan-dang-ky",
                className: "text-blue-600 hover:text-blue-800"
              }, "Xem hướng dẫn đăng ký chi tiết")
            )
          ),

          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Cách đăng nhập 92Lottery"),
            React.createElement('p', { className: "mb-2" },
              "Đăng nhập vào tài khoản 92Lottery:"
            ),
            React.createElement('ol', { className: "list-decimal pl-5 space-y-1" },
              React.createElement('li', null, "Truy cập trang chủ 92lottery.dev"),
              React.createElement('li', null, "Nhấn vào nút 'Đăng nhập' ở góc phải trên cùng"),
              React.createElement('li', null, "Nhập tên đăng nhập và mật khẩu"),
              React.createElement('li', null, "Nhấn 'Đăng nhập' để vào tài khoản")
            ),
            React.createElement('p', { className: "mt-2" },
              "Nếu quên mật khẩu, bạn có thể sử dụng tính năng 'Quên mật khẩu' và làm theo hướng dẫn để khôi phục tài khoản."
            ),
            React.createElement('p', { className: "mt-2" },
              React.createElement(Link, {
                href: "/huong-dan-dang-nhap",
                className: "text-blue-600 hover:text-blue-800"
              }, "Xem hướng dẫn đăng nhập chi tiết")
            )
          )
        ),

        // Các trò chơi tại 92Lottery
        React.createElement('section', { id: "tro-choi", className: "mb-10" },
          React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mb-4" }, "Các trò chơi tại 92Lottery"),

          React.createElement('p', { className: "mb-4" },
            "92Lottery cung cấp nhiều trò chơi đa dạng, từ xổ số độc quyền đến game bài, slot, bắn cá và casino trực tuyến. Dưới đây là thông tin chi tiết về các trò chơi nổi bật tại 92Lottery."
          ),

          // WinGo
          React.createElement('div', { id: "wingo", className: "bg-white p-5 rounded-lg border border-gray-200 mb-4" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "WinGo - Xổ số 1 phút"),
            React.createElement('p', { className: "mb-2" },
              "WinGo là trò chơi xổ số 1 phút độc quyền tại 92Lottery, với tỷ lệ trả thưởng cao và công bằng. Mỗi phiên WinGo kéo dài 1 phút, người chơi có thể đặt cược vào nhiều lựa chọn khác nhau."
            ),
            React.createElement('div', { className: "mb-2" },
              React.createElement('span', { className: "font-semibold" }, "Cách chơi: "),
              "Đặt cược vào Lớn/Nhỏ, Chẵn/Lẻ, Xanh/Đỏ/Tím, hoặc Đoán số cụ thể từ 0-9."
            ),
            React.createElement('div', { className: "mb-2" },
              React.createElement('span', { className: "font-semibold" }, "Tỷ lệ trả thưởng: "),
              "Lớn/Nhỏ, Chẵn/Lẻ: 1.96; Xanh/Đỏ: 2.00; Tím: 4.50; Đoán số (0-9): 9.80."
            ),
            React.createElement('p', { className: "mt-2" },
              React.createElement(Link, {
                href: "/wingo-92lottery",
                className: "text-blue-600 hover:text-blue-800"
              }, "Tìm hiểu thêm về WinGo")
            )
          ),

          // K3 Lotre
          React.createElement('div', { id: "k3", className: "bg-white p-5 rounded-lg border border-gray-200 mb-4" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "K3 Lotre - Xổ số 3 phút"),
            React.createElement('p', { className: "mb-2" },
              "K3 Lotre là trò chơi xổ số 3 phút với nhiều kiểu cược đa dạng. Mỗi phiên K3 Lotre sẽ quay 3 viên xúc xắc, người chơi đặt cược vào kết quả của 3 viên xúc xắc này."
            ),
            React.createElement('div', { className: "mb-2" },
              React.createElement('span', { className: "font-semibold" }, "Cách chơi: "),
              "Đặt cược vào Lớn/Nhỏ, Chẵn/Lẻ, Tổng số điểm, Đặt cược vào số cụ thể, v.v."
            ),
            React.createElement('div', { className: "mb-2" },
              React.createElement('span', { className: "font-semibold" }, "Tỷ lệ trả thưởng: "),
              "Tùy thuộc vào kiểu cược, từ 1.96 đến 180.00."
            ),
            React.createElement('p', { className: "mt-2" },
              React.createElement(Link, {
                href: "/92lottery-mini-game",
                className: "text-blue-600 hover:text-blue-800"
              }, "Tìm hiểu thêm về K3 Lotre")
            )
          ),

          // 5D Lotre
          React.createElement('div', { id: "5d", className: "bg-white p-5 rounded-lg border border-gray-200 mb-4" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "5D Lotre - Xổ số 5 phút"),
            React.createElement('p', { className: "mb-2" },
              "5D Lotre là trò chơi xổ số 5 phút với 5 số từ 0-9 được quay ngẫu nhiên. Người chơi có thể đặt cược vào nhiều lựa chọn khác nhau dựa trên 5 số này."
            ),
            React.createElement('div', { className: "mb-2" },
              React.createElement('span', { className: "font-semibold" }, "Cách chơi: "),
              "Đặt cược vào số cụ thể, Lớn/Nhỏ, Chẵn/Lẻ, Tổng số, v.v. cho từng vị trí hoặc tổng 5 số."
            ),
            React.createElement('div', { className: "mb-2" },
              React.createElement('span', { className: "font-semibold" }, "Tỷ lệ trả thưởng: "),
              "Tùy thuộc vào kiểu cược, từ 1.96 đến 90.00."
            ),
            React.createElement('p', { className: "mt-2" },
              React.createElement(Link, {
                href: "/92lottery-mini-game",
                className: "text-blue-600 hover:text-blue-800"
              }, "Tìm hiểu thêm về 5D Lotre")
            )
          ),

          // TRX Win
          React.createElement('div', { id: "trx", className: "bg-white p-5 rounded-lg border border-gray-200 mb-4" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "TRX Win - Xổ số blockchain"),
            React.createElement('p', { className: "mb-2" },
              "TRX Win là trò chơi xổ số dựa trên công nghệ blockchain, đảm bảo tính minh bạch tuyệt đối. Kết quả được xác định dựa trên các giao dịch blockchain thực tế, không thể can thiệp."
            ),
            React.createElement('div', { className: "mb-2" },
              React.createElement('span', { className: "font-semibold" }, "Cách chơi: "),
              "Đặt cược vào Lớn/Nhỏ, Chẵn/Lẻ, Đoán số cuối của mã hash giao dịch."
            ),
            React.createElement('div', { className: "mb-2" },
              React.createElement('span', { className: "font-semibold" }, "Tỷ lệ trả thưởng: "),
              "Lớn/Nhỏ, Chẵn/Lẻ: 1.96; Đoán số cụ thể: 9.80."
            ),
            React.createElement('p', { className: "mt-2" },
              React.createElement(Link, {
                href: "/92lottery-mini-game",
                className: "text-blue-600 hover:text-blue-800"
              }, "Tìm hiểu thêm về TRX Win")
            )
          ),

          // Các trò chơi khác
          React.createElement('div', { id: "other-games", className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Các trò chơi khác"),
            React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
              React.createElement('div', null,
                React.createElement('h4', { className: "font-semibold mb-1" }, "Game bài"),
                React.createElement('p', { className: "mb-2" },
                  "92Lottery cung cấp nhiều game bài phổ biến như Poker, Blackjack, Baccarat, Tiến lên miền Nam, Phỏm, Mậu Binh, v.v."
                )
              ),
              React.createElement('div', null,
                React.createElement('h4', { className: "font-semibold mb-1" }, "Slot và Nổ hũ"),
                React.createElement('p', { className: "mb-2" },
                  "Hàng trăm game slot và nổ hũ với đồ họa đẹp mắt, nhiều chủ đề hấp dẫn và jackpot lớn."
                )
              ),
              React.createElement('div', null,
                React.createElement('h4', { className: "font-semibold mb-1" }, "Bắn cá"),
                React.createElement('p', { className: "mb-2" },
                  "Trò chơi bắn cá với đồ họa 3D sống động, nhiều loại cá và vũ khí khác nhau."
                )
              ),
              React.createElement('div', null,
                React.createElement('h4', { className: "font-semibold mb-1" }, "Casino trực tuyến"),
                React.createElement('p', { className: "mb-2" },
                  "Casino trực tuyến với dealer người thật, truyền hình trực tiếp từ các sòng bài thực tế."
                )
              )
            ),
            React.createElement('p', { className: "mt-2" },
              React.createElement(Link, {
                href: "/92lottery-mini-game",
                className: "text-blue-600 hover:text-blue-800"
              }, "Khám phá tất cả trò chơi tại 92Lottery")
            )
          )
        ),

        // Nạp và rút tiền
        React.createElement('section', { id: "nap-rut", className: "mb-10" },
          React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mb-4" }, "Nạp và rút tiền"),

          React.createElement('p', { className: "mb-4" },
            "92Lottery cung cấp nhiều phương thức nạp và rút tiền đa dạng, an toàn và nhanh chóng. Dưới đây là thông tin chi tiết về các phương thức thanh toán tại 92Lottery."
          ),

          // Nạp tiền
          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200 mb-4" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Cách nạp tiền"),
            React.createElement('p', { className: "mb-2" },
              "92Lottery hỗ trợ nhiều phương thức nạp tiền phổ biến tại Việt Nam:"
            ),
            React.createElement('ul', { className: "list-disc pl-5 space-y-1 mb-2" },
              React.createElement('li', null,
                React.createElement('span', { className: "font-semibold" }, "Chuyển khoản ngân hàng: "),
                "Hỗ trợ tất cả ngân hàng Việt Nam (Vietcombank, Techcombank, BIDV, Agribank, VPBank, v.v.). Thời gian xử lý: 1-5 phút."
              ),
              React.createElement('li', null,
                React.createElement('span', { className: "font-semibold" }, "Ví điện tử: "),
                "MoMo, ZaloPay, VNPay. Thời gian xử lý: Tức thì."
              ),
              React.createElement('li', null,
                React.createElement('span', { className: "font-semibold" }, "Thẻ cào điện thoại: "),
                "Viettel, Mobifone, Vinaphone. Thời gian xử lý: Tức thì."
              ),
              React.createElement('li', null,
                React.createElement('span', { className: "font-semibold" }, "Tiền điện tử: "),
                "USDT, BTC, ETH. Thời gian xử lý: 10-30 phút tùy mạng lưới."
              )
            ),
            React.createElement('p', { className: "mb-2" },
              "Các bước nạp tiền:"
            ),
            React.createElement('ol', { className: "list-decimal pl-5 space-y-1" },
              React.createElement('li', null, "Đăng nhập vào tài khoản 92Lottery"),
              React.createElement('li', null, "Nhấn vào nút 'Nạp tiền'"),
              React.createElement('li', null, "Chọn phương thức nạp tiền"),
              React.createElement('li', null, "Nhập số tiền muốn nạp"),
              React.createElement('li', null, "Làm theo hướng dẫn để hoàn tất giao dịch")
            ),
            React.createElement('p', { className: "mt-2" },
              React.createElement(Link, {
                href: "/huong-dan-nap-tien",
                className: "text-blue-600 hover:text-blue-800"
              }, "Xem hướng dẫn nạp tiền chi tiết")
            )
          ),

          // Rút tiền
          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Cách rút tiền"),
            React.createElement('p', { className: "mb-2" },
              "92Lottery hỗ trợ rút tiền qua các phương thức sau:"
            ),
            React.createElement('ul', { className: "list-disc pl-5 space-y-1 mb-2" },
              React.createElement('li', null,
                React.createElement('span', { className: "font-semibold" }, "Chuyển khoản ngân hàng: "),
                "Hỗ trợ tất cả ngân hàng Việt Nam. Thời gian xử lý: 5-30 phút."
              ),
              React.createElement('li', null,
                React.createElement('span', { className: "font-semibold" }, "Ví điện tử: "),
                "MoMo, ZaloPay, VNPay. Thời gian xử lý: 5-15 phút."
              ),
              React.createElement('li', null,
                React.createElement('span', { className: "font-semibold" }, "Tiền điện tử: "),
                "USDT, BTC, ETH. Thời gian xử lý: 10-30 phút."
              )
            ),
            React.createElement('p', { className: "mb-2" },
              "Các bước rút tiền:"
            ),
            React.createElement('ol', { className: "list-decimal pl-5 space-y-1" },
              React.createElement('li', null, "Đăng nhập vào tài khoản 92Lottery"),
              React.createElement('li', null, "Nhấn vào nút 'Rút tiền'"),
              React.createElement('li', null, "Chọn phương thức rút tiền"),
              React.createElement('li', null, "Nhập số tiền muốn rút"),
              React.createElement('li', null, "Nhập thông tin tài khoản nhận tiền"),
              React.createElement('li', null, "Xác nhận rút tiền")
            ),
            React.createElement('div', { className: "mt-2 p-3 bg-yellow-50 rounded-md" },
              React.createElement('p', { className: "text-sm" },
                React.createElement('span', { className: "font-semibold" }, "Lưu ý: "),
                "Số tiền rút tối thiểu là 100,000 VND. Không mất phí rút tiền. Để đảm bảo an toàn, bạn cần hoàn thành các yêu cầu cược trước khi rút tiền khuyến mãi."
              )
            ),
            React.createElement('p', { className: "mt-2" },
              React.createElement(Link, {
                href: "/rut-tien-92lottery",
                className: "text-blue-600 hover:text-blue-800"
              }, "Xem hướng dẫn rút tiền chi tiết")
            )
          )
        ),

        // Ứng dụng di động
        React.createElement('section', { id: "ung-dung", className: "mb-10" },
          React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mb-4" }, "Ứng dụng di động"),

          React.createElement('p', { className: "mb-4" },
            "92Lottery cung cấp ứng dụng di động cho cả Android và iOS, mang đến trải nghiệm cá cược mượt mà và tiện lợi hơn trên điện thoại di động."
          ),

          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200 mb-4" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Tính năng nổi bật của ứng dụng 92Lottery"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-1" },
              React.createElement('li', null, "Giao diện thân thiện, dễ sử dụng, được tối ưu hóa cho điện thoại di động"),
              React.createElement('li', null, "Tốc độ nhanh hơn và ít tốn dữ liệu hơn so với truy cập qua trình duyệt"),
              React.createElement('li', null, "Thông báo kết quả và khuyến mãi trực tiếp"),
              React.createElement('li', null, "Bảo mật tốt hơn với tính năng đăng nhập bằng vân tay/Face ID"),
              React.createElement('li', null, "Trải nghiệm mượt mà hơn không bị gián đoạn bởi quảng cáo"),
              React.createElement('li', null, "Các tính năng độc quyền chỉ có trên ứng dụng"),
              React.createElement('li', null, "Hỗ trợ chế độ nền tối (Dark Mode)"),
              React.createElement('li', null, "Tự động lưu thông tin đăng nhập an toàn")
            )
          ),

          React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" },
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Ứng dụng Android"),
              React.createElement('p', { className: "mb-2" },
                "Cách tải ứng dụng 92Lottery cho Android:"
              ),
              React.createElement('ol', { className: "list-decimal pl-5 space-y-1" },
                React.createElement('li', null, "Truy cập trang chủ 92lottery.dev trên điện thoại"),
                React.createElement('li', null, "Nhấn vào nút 'Tải ứng dụng' hoặc 'Tải App'"),
                React.createElement('li', null, "Chọn phiên bản Android"),
                React.createElement('li', null, "Tải file APK về máy"),
                React.createElement('li', null, "Mở file APK và cài đặt ứng dụng"),
                React.createElement('li', null, "Cho phép cài đặt từ nguồn không xác định nếu được yêu cầu")
              ),
              React.createElement('p', { className: "mt-2" },
                "Yêu cầu hệ thống: Android 5.0 trở lên"
              )
            ),
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Ứng dụng iOS"),
              React.createElement('p', { className: "mb-2" },
                "Cách tải ứng dụng 92Lottery cho iOS:"
              ),
              React.createElement('ol', { className: "list-decimal pl-5 space-y-1" },
                React.createElement('li', null, "Truy cập trang chủ 92lottery.dev trên iPhone/iPad"),
                React.createElement('li', null, "Nhấn vào nút 'Tải ứng dụng' hoặc 'Tải App'"),
                React.createElement('li', null, "Chọn phiên bản iOS"),
                React.createElement('li', null, "Làm theo hướng dẫn để cài đặt ứng dụng"),
                React.createElement('li', null, "Tin cậy chứng chỉ nhà phát triển trong Cài đặt > Quản lý thiết bị")
              ),
              React.createElement('p', { className: "mt-2" },
                "Yêu cầu hệ thống: iOS 11.0 trở lên"
              )
            )
          ),

          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Thêm 92Lottery vào màn hình chính"),
            React.createElement('p', { className: "mb-2" },
              "Nếu bạn không muốn tải ứng dụng, bạn có thể thêm 92Lottery vào màn hình chính để truy cập nhanh chóng:"
            ),
            React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
              React.createElement('div', null,
                React.createElement('h4', { className: "font-semibold mb-1" }, "Android:"),
                React.createElement('ol', { className: "list-decimal pl-5 space-y-1" },
                  React.createElement('li', null, "Mở Chrome và truy cập 92lottery.dev"),
                  React.createElement('li', null, "Nhấn vào menu (3 chấm) ở góc phải trên cùng"),
                  React.createElement('li', null, "Chọn 'Thêm vào màn hình chính'"),
                  React.createElement('li', null, "Đặt tên và nhấn 'Thêm'")
                )
              ),
              React.createElement('div', null,
                React.createElement('h4', { className: "font-semibold mb-1" }, "iOS:"),
                React.createElement('ol', { className: "list-decimal pl-5 space-y-1" },
                  React.createElement('li', null, "Mở Safari và truy cập 92lottery.dev"),
                  React.createElement('li', null, "Nhấn vào biểu tượng Chia sẻ (hình vuông với mũi tên hướng lên)"),
                  React.createElement('li', null, "Chọn 'Thêm vào màn hình chính'"),
                  React.createElement('li', null, "Đặt tên và nhấn 'Thêm'")
                )
              )
            ),
            React.createElement('p', { className: "mt-2" },
              React.createElement(Link, {
                href: "/app-92lottery",
                className: "text-blue-600 hover:text-blue-800"
              }, "Tìm hiểu thêm về ứng dụng 92Lottery")
            )
          )
        ),

        // Khuyến mãi và ưu đãi
        React.createElement('section', { id: "khuyen-mai", className: "mb-10" },
          React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mb-4" }, "Khuyến mãi và ưu đãi"),

          React.createElement('p', { className: "mb-4" },
            "92Lottery cung cấp nhiều khuyến mãi và ưu đãi hấp dẫn cho cả thành viên mới và thành viên hiện tại. Dưới đây là thông tin chi tiết về các khuyến mãi tại 92Lottery."
          ),

          React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" },
            // Thưởng chào mừng
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3 text-[#bc2022]" }, "Thưởng chào mừng 100K"),
              React.createElement('p', { className: "mb-2" },
                "Nhận ngay 100,000 VND vào tài khoản khi đăng ký thành công tại 92Lottery. Không cần nạp tiền, không cần xác minh."
              ),
              React.createElement('div', { className: "mt-2 p-3 bg-gray-50 rounded-md" },
                React.createElement('p', { className: "text-sm" },
                  React.createElement('span', { className: "font-semibold" }, "Điều kiện: "),
                  "Chỉ áp dụng cho tài khoản mới. Yêu cầu cược 3 lần số tiền thưởng trước khi rút."
                )
              )
            ),

            // Thưởng nạp lần đầu
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3 text-[#bc2022]" }, "Thưởng nạp lần đầu 100%"),
              React.createElement('p', { className: "mb-2" },
                "Nhận thưởng 100% giá trị nạp cho lần nạp đầu tiên, lên đến 5,000,000 VND. Ví dụ: nạp 1,000,000 VND, nhận thêm 1,000,000 VND."
              ),
              React.createElement('div', { className: "mt-2 p-3 bg-gray-50 rounded-md" },
                React.createElement('p', { className: "text-sm" },
                  React.createElement('span', { className: "font-semibold" }, "Điều kiện: "),
                  "Chỉ áp dụng cho lần nạp đầu tiên. Yêu cầu cược 10 lần tổng số tiền (nạp + thưởng) trước khi rút."
                )
              )
            )
          ),

          React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" },
            // Hoàn trả không giới hạn
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3 text-[#bc2022]" }, "Hoàn trả không giới hạn"),
              React.createElement('p', { className: "mb-2" },
                "Nhận hoàn trả lên đến 1.2% cho mọi cược thua, không giới hạn số tiền. Hoàn trả được tính tự động và cộng vào tài khoản hàng ngày."
              ),
              React.createElement('div', { className: "mt-2 p-3 bg-gray-50 rounded-md" },
                React.createElement('p', { className: "text-sm" },
                  React.createElement('span', { className: "font-semibold" }, "Điều kiện: "),
                  "Áp dụng cho tất cả thành viên. Không yêu cầu cược lại, có thể rút ngay."
                )
              )
            ),

            // Thưởng nạp hàng ngày
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3 text-[#bc2022]" }, "Thưởng nạp hàng ngày"),
              React.createElement('p', { className: "mb-2" },
                "Nhận thưởng 10% cho mỗi lần nạp tiền hàng ngày, lên đến 1,000,000 VND mỗi ngày. Áp dụng cho tất cả các phương thức nạp tiền."
              ),
              React.createElement('div', { className: "mt-2 p-3 bg-gray-50 rounded-md" },
                React.createElement('p', { className: "text-sm" },
                  React.createElement('span', { className: "font-semibold" }, "Điều kiện: "),
                  "Áp dụng cho tất cả thành viên. Yêu cầu cược 5 lần số tiền thưởng trước khi rút."
                )
              )
            )
          ),

          React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" },
            // Thưởng giới thiệu bạn bè
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3 text-[#bc2022]" }, "Thưởng giới thiệu bạn bè"),
              React.createElement('p', { className: "mb-2" },
                "Nhận thưởng 50,000 VND cho mỗi bạn bè được giới thiệu đăng ký thành công và 5% hoa hồng từ tiền nạp của bạn bè suốt đời."
              ),
              React.createElement('div', { className: "mt-2 p-3 bg-gray-50 rounded-md" },
                React.createElement('p', { className: "text-sm" },
                  React.createElement('span', { className: "font-semibold" }, "Điều kiện: "),
                  "Bạn bè phải đăng ký thông qua link giới thiệu của bạn và nạp tối thiểu 200,000 VND."
                )
              )
            ),

            // Chương trình VIP
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3 text-[#bc2022]" }, "Chương trình VIP"),
              React.createElement('p', { className: "mb-2" },
                "Tham gia chương trình VIP của 92Lottery để nhận nhiều đặc quyền: tỷ lệ hoàn trả cao hơn, quà sinh nhật, hỗ trợ ưu tiên, rút tiền nhanh, v.v."
              ),
              React.createElement('div', { className: "mt-2 p-3 bg-gray-50 rounded-md" },
                React.createElement('p', { className: "text-sm" },
                  React.createElement('span', { className: "font-semibold" }, "Cấp độ VIP: "),
                  "VIP 1 đến VIP 10, dựa trên tổng số tiền cược. Càng chơi nhiều, cấp độ VIP càng cao."
                )
              )
            )
          ),

          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Các khuyến mãi khác"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-1" },
              React.createElement('li', null, "Khuyến mãi sự kiện đặc biệt: Tết, Noel, Quốc Khánh, v.v."),
              React.createElement('li', null, "Thưởng sinh nhật: Nhận quà đặc biệt vào ngày sinh nhật của bạn"),
              React.createElement('li', null, "Nhiệm vụ hàng ngày: Hoàn thành nhiệm vụ để nhận thưởng"),
              React.createElement('li', null, "Giải đấu và sự kiện: Tham gia các giải đấu để nhận giải thưởng lớn"),
              React.createElement('li', null, "Quay số may mắn: Cơ hội nhận thưởng ngẫu nhiên hàng ngày")
            ),
            React.createElement('p', { className: "mt-2" },
              React.createElement(Link, {
                href: "/92lotterykhuyenmai",
                className: "text-blue-600 hover:text-blue-800"
              }, "Xem tất cả khuyến mãi tại 92Lottery")
            )
          )
        ),

        // Bảo mật và an toàn
        React.createElement('section', { id: "bao-mat", className: "mb-10" },
          React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mb-4" }, "Bảo mật và an toàn"),

          React.createElement('p', { className: "mb-4" },
            "92Lottery luôn đặt sự an toàn và bảo mật của người chơi lên hàng đầu. Dưới đây là các biện pháp bảo mật được áp dụng tại 92Lottery."
          ),

          React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" },
            // Mã hóa SSL 256-bit
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Mã hóa SSL 256-bit"),
              React.createElement('p', null,
                "92Lottery sử dụng công nghệ mã hóa SSL 256-bit để bảo vệ thông tin cá nhân và giao dịch của người chơi. Mọi dữ liệu được truyền qua kết nối an toàn, không thể bị đánh cắp hoặc nghe lén."
              )
            ),

            // Xác thực hai yếu tố (2FA)
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Xác thực hai yếu tố (2FA)"),
              React.createElement('p', null,
                "92Lottery cung cấp tính năng xác thực hai yếu tố (2FA) để tăng cường bảo mật tài khoản. Khi bật 2FA, bạn sẽ cần nhập mã xác nhận từ ứng dụng hoặc SMS mỗi khi đăng nhập hoặc thực hiện giao dịch quan trọng."
              )
            )
          ),

          React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" },
            // Bảo vệ thông tin cá nhân
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Bảo vệ thông tin cá nhân"),
              React.createElement('p', null,
                "92Lottery cam kết bảo vệ thông tin cá nhân của người chơi theo các tiêu chuẩn bảo mật cao nhất. Chúng tôi không bao giờ chia sẻ thông tin của bạn với bên thứ ba mà không có sự đồng ý của bạn."
              )
            ),

            // Bảo mật tài chính
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Bảo mật tài chính"),
              React.createElement('p', null,
                "92Lottery sử dụng các hệ thống thanh toán an toàn và đáng tin cậy. Tiền của người chơi được lưu trữ trong tài khoản riêng biệt với tài khoản hoạt động của công ty, đảm bảo an toàn tuyệt đối."
              )
            )
          ),

          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Cá cược có trách nhiệm"),
            React.createElement('p', { className: "mb-2" },
              "92Lottery khuyến khích cá cược có trách nhiệm và cung cấp các công cụ để giúp người chơi kiểm soát hoạt động cá cược của mình:"
            ),
            React.createElement('ul', { className: "list-disc pl-5 space-y-1" },
              React.createElement('li', null, "Giới hạn nạp tiền: Đặt giới hạn cho số tiền bạn có thể nạp trong một ngày, tuần hoặc tháng"),
              React.createElement('li', null, "Giới hạn cược: Đặt giới hạn cho số tiền bạn có thể cược trong một khoảng thời gian nhất định"),
              React.createElement('li', null, "Giới hạn thua: Đặt giới hạn cho số tiền thua tối đa"),
              React.createElement('li', null, "Tự loại trừ: Tạm thời hoặc vĩnh viễn khóa tài khoản của bạn"),
              React.createElement('li', null, "Kiểm tra thực tế: Nhắc nhở về thời gian và tiền bạn đã dành cho cá cược")
            ),
            React.createElement('p', { className: "mt-2" },
              React.createElement(Link, {
                href: "/giay-phep-va-quy-dinh-92lottery",
                className: "text-blue-600 hover:text-blue-800"
              }, "Tìm hiểu thêm về bảo mật và quy định tại 92Lottery")
            )
          )
        ),

        // Hỗ trợ khách hàng
        React.createElement('section', { id: "ho-tro", className: "mb-10" },
          React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mb-4" }, "Hỗ trợ khách hàng"),

          React.createElement('p', { className: "mb-4" },
            "92Lottery cung cấp dịch vụ hỗ trợ khách hàng 24/7 bằng tiếng Việt qua nhiều kênh khác nhau. Đội ngũ hỗ trợ viên chuyên nghiệp và nhiệt tình sẽ giải đáp mọi thắc mắc và hỗ trợ bạn trong quá trình chơi."
          ),

          React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" },
            // Live Chat
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Live Chat"),
              React.createElement('p', { className: "mb-2" },
                "Kênh hỗ trợ nhanh nhất và tiện lợi nhất. Live Chat hoạt động 24/7, giúp bạn kết nối với hỗ trợ viên trong vài giây."
              ),
              React.createElement('div', { className: "mt-2" },
                React.createElement('span', { className: "font-semibold" }, "Cách sử dụng: "),
                "Nhấn vào biểu tượng chat ở góc phải dưới cùng của trang web hoặc ứng dụng."
              )
            ),

            // Hotline
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Hotline"),
              React.createElement('p', { className: "mb-2" },
                "Gọi trực tiếp đến đường dây nóng của 92Lottery để được hỗ trợ qua điện thoại."
              ),
              React.createElement('div', { className: "mt-2" },
                React.createElement('span', { className: "font-semibold" }, "Số điện thoại: "),
                "0988 587 888 (Miễn phí cuộc gọi, hoạt động 24/7)"
              )
            )
          ),

          React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" },
            // Email
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Email"),
              React.createElement('p', { className: "mb-2" },
                "Gửi email để được hỗ trợ chi tiết về các vấn đề phức tạp hơn. Thời gian phản hồi thường trong vòng 24 giờ."
              ),
              React.createElement('div', { className: "mt-2" },
                React.createElement('span', { className: "font-semibold" }, "Địa chỉ email: "),
                "support@92lottery.dev"
              )
            ),

            // Telegram
            React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
              React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Telegram"),
              React.createElement('p', { className: "mb-2" },
                "Kết nối với 92Lottery qua Telegram để nhận hỗ trợ nhanh chóng và cập nhật thông tin mới nhất."
              ),
              React.createElement('div', { className: "mt-2" },
                React.createElement('span', { className: "font-semibold" }, "Kênh Telegram: "),
                "@92lottery_official"
              )
            )
          ),

          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-3" }, "Trung tâm trợ giúp"),
            React.createElement('p', { className: "mb-2" },
              "92Lottery cung cấp trung tâm trợ giúp toàn diện với các hướng dẫn chi tiết, câu hỏi thường gặp và video hướng dẫn để giúp bạn tự giải quyết các vấn đề thông thường."
            ),
            React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-4" },
              React.createElement(Link, {
                href: "/huong-dan-dang-ky",
                className: "bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition-colors text-center"
              }, "Hướng dẫn đăng ký"),
              React.createElement(Link, {
                href: "/huong-dan-nap-tien",
                className: "bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition-colors text-center"
              }, "Hướng dẫn nạp tiền"),
              React.createElement(Link, {
                href: "/rut-tien-92lottery",
                className: "bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition-colors text-center"
              }, "Hướng dẫn rút tiền")
            )
          )
        ),

        // Câu hỏi thường gặp
        React.createElement('section', { id: "faq", className: "mb-10" },
          React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mb-4" }, "Câu hỏi thường gặp"),

          React.createElement('div', { className: "space-y-4" },
            faqItems.map((faq, index) =>
              React.createElement('div', { key: index, className: "bg-white p-5 rounded-lg border border-gray-200" },
                React.createElement('h3', { className: "text-lg font-semibold mb-2" }, faq.question),
                React.createElement('p', null, faq.answer)
              )
            ),
            React.createElement('div', { className: "mt-4 text-center" },
              React.createElement(Link, {
                href: "/faq-92lottery",
                className: "inline-block bg-[#bc2022] text-white px-6 py-3 rounded-md hover:bg-[#a51b1b] transition-colors"
              }, "Xem tất cả câu hỏi thường gặp")
            )
          )
        ),

        // Kết luận
        React.createElement('div', { className: "bg-gray-100 p-6 rounded-lg mt-8" },
          React.createElement('h2', { className: "text-2xl font-semibold mb-4" }, "Trải nghiệm 92Lottery ngay hôm nay"),
          React.createElement('p', { className: "mb-4" },
            "92Lottery là nhà cái xổ số trực tuyến uy tín hàng đầu Việt Nam với nhiều trò chơi đa dạng, khuyến mãi hấp dẫn, bảo mật an toàn và hỗ trợ khách hàng 24/7. Đăng ký tài khoản ngay hôm nay để nhận thưởng chào mừng 100K và trải nghiệm dịch vụ tuyệt vời tại 92Lottery."
          ),
          React.createElement('div', { className: "flex justify-center" },
            React.createElement(Link, {
              href: "/register",
              className: "bg-[#bc2022] text-white px-8 py-4 rounded-md hover:bg-[#a51b1b] transition-colors font-bold text-lg"
            }, "Đăng ký 92Lottery ngay")
          )
        )
      )
    )
  );
}
