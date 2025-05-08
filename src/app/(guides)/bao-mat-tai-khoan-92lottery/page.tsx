import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Bảo mật tài khoản 92Lottery - Hướng dẫn và mẹo bảo vệ tài khoản',
  description: 'Hướng dẫn chi tiết cách bảo mật tài khoản 92Lottery. Tìm hiểu các biện pháp bảo vệ tài khoản, cách thiết lập xác thực hai yếu tố và mẹo phòng tránh lừa đảo.',
  keywords: ['bảo mật tài khoản 92lottery', 'bảo vệ tài khoản 92lottery', 'xác thực hai yếu tố 92lottery', 'mật khẩu mạnh 92lottery', 'phòng tránh lừa đảo 92lottery', 'an toàn tài khoản 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/bao-mat-tai-khoan-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/bao-mat-tai-khoan-92lottery',
      'x-default': 'https://92lottery.dev/bao-mat-tai-khoan-92lottery'
    }
  },
};

export default function AccountSecurityPage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "Làm thế nào để tạo mật khẩu mạnh cho tài khoản 92Lottery?",
      answer: "Để tạo mật khẩu mạnh cho tài khoản 92Lottery, bạn nên: 1) Sử dụng ít nhất 8 ký tự, 2) Kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt, 3) Tránh sử dụng thông tin cá nhân dễ đoán như ngày sinh, tên, số điện thoại, 4) Không sử dụng từ điển hoặc cụm từ phổ biến, 5) Sử dụng mật khẩu khác với các tài khoản khác, 6) Thay đổi mật khẩu định kỳ 3-6 tháng một lần."
    },
    {
      question: "Xác thực hai yếu tố (2FA) trên 92Lottery hoạt động như thế nào?",
      answer: "Xác thực hai yếu tố (2FA) trên 92Lottery hoạt động bằng cách yêu cầu hai hình thức xác thực khác nhau khi đăng nhập: 1) Mật khẩu của bạn (yếu tố đầu tiên), 2) Mã xác thực gửi qua SMS hoặc email, hoặc mã từ ứng dụng xác thực như Google Authenticator (yếu tố thứ hai). Khi bật 2FA, ngay cả khi ai đó biết mật khẩu của bạn, họ vẫn không thể đăng nhập nếu không có quyền truy cập vào thiết bị nhận mã xác thực, giúp bảo vệ tài khoản khỏi các cuộc tấn công trái phép."
    },
    {
      question: "Làm thế nào để nhận biết và tránh các nỗ lực lừa đảo nhắm vào người dùng 92Lottery?",
      answer: "Để nhận biết và tránh lừa đảo nhắm vào người dùng 92Lottery, hãy chú ý: 1) 92Lottery chính thức không bao giờ yêu cầu mật khẩu, mã OTP hoặc thông tin đăng nhập qua tin nhắn, email hoặc cuộc gọi, 2) Kiểm tra kỹ URL trước khi đăng nhập (phải là 92lottery.dev hoặc link chính thức), 3) Không nhấp vào liên kết từ nguồn không xác định, 4) Cảnh giác với các ưu đãi quá hấp dẫn hoặc yêu cầu chuyển tiền gấp, 5) Không tải ứng dụng từ nguồn không chính thức, 6) Báo cáo ngay cho 92Lottery nếu nghi ngờ bị lừa đảo."
    },
    {
      question: "Tôi nên làm gì nếu nghi ngờ tài khoản 92Lottery bị xâm nhập?",
      answer: "Nếu nghi ngờ tài khoản 92Lottery bị xâm nhập, hãy thực hiện ngay các bước sau: 1) Đổi mật khẩu ngay lập tức nếu vẫn đăng nhập được, 2) Liên hệ hỗ trợ khách hàng 92Lottery qua live chat hoặc hotline 24/7, 3) Kiểm tra lịch sử giao dịch và báo cáo các giao dịch đáng ngờ, 4) Tạm khóa tài khoản (nếu cần) thông qua bộ phận hỗ trợ, 5) Bật xác thực hai yếu tố nếu chưa bật, 6) Kiểm tra thiết bị của bạn với phần mềm diệt virus, 7) Thay đổi mật khẩu email liên kết với tài khoản 92Lottery."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Bảo mật tài khoản 92Lottery", url: "https://92lottery.dev/bao-mat-tai-khoan-92lottery" }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const breadcrumbSchemaString = JSON.stringify(breadcrumbSchema);

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
          React.createElement('li', { className: "text-gray-700" }, "Bảo mật tài khoản 92Lottery")
        )
      )
    ),

    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "Bảo mật tài khoản 92Lottery - Hướng dẫn và mẹo bảo vệ tài khoản"),

      React.createElement('div', { className: "prose max-w-none" },
        React.createElement('p', { className: "text-lg mb-6" },
          "Bảo mật tài khoản là yếu tố vô cùng quan trọng khi tham gia cá cược trực tuyến tại 92Lottery. Với số tiền thật trong tài khoản, việc đảm bảo an toàn thông tin cá nhân và tài sản của bạn là ưu tiên hàng đầu. Bài viết này sẽ hướng dẫn chi tiết các biện pháp bảo mật tài khoản 92Lottery, giúp bạn tránh khỏi các rủi ro bị xâm nhập và đánh cắp thông tin."
        ),

        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Các biện pháp bảo mật cơ bản"),

        React.createElement('div', { className: "mb-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "1. Tạo mật khẩu mạnh"),
          React.createElement('p', { className: "mb-4" },
            "Mật khẩu là lớp bảo vệ đầu tiên và quan trọng nhất cho tài khoản của bạn. Một mật khẩu mạnh sẽ giúp ngăn chặn các nỗ lực đoán mật khẩu hoặc tấn công brute-force."
          ),

          React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "2. Bật xác thực hai yếu tố (2FA)"),
          React.createElement('p', { className: "mb-4" },
            "Xác thực hai yếu tố là biện pháp bảo mật hiệu quả, yêu cầu hai hình thức xác thực khác nhau khi đăng nhập: mật khẩu và một mã xác thực từ thiết bị của bạn."
          ),

          React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "3. Cảnh giác với lừa đảo"),
          React.createElement('p', { className: "mb-4" },
            "Phishing là hình thức lừa đảo phổ biến nhất. Luôn kiểm tra URL trước khi đăng nhập và không cung cấp thông tin đăng nhập qua email hoặc tin nhắn."
          )
        ),

        // FAQ Section
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Các câu hỏi thường gặp về bảo mật tài khoản 92Lottery"),

        React.createElement('div', { className: "space-y-6 mb-8" },
          faqItems.map((faq, index) =>
            React.createElement('div', { key: index, className: "border-b border-gray-200 pb-4" },
              React.createElement('h3', { className: "text-xl font-semibold mb-2" }, faq.question),
              React.createElement('p', null, faq.answer)
            )
          )
        ),

        // Related Articles
        React.createElement('div', { className: "bg-gray-100 p-6 rounded-lg mt-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-4" }, "Các bài viết liên quan"),
          React.createElement('ul', { className: "space-y-2" },
            React.createElement('li', null,
              React.createElement(Link, { href: "/huong-dan-dang-ky", className: "text-blue-600 hover:text-blue-800" },
                "Hướng dẫn đăng ký 92Lottery chi tiết"
              )
            ),
            React.createElement('li', null,
              React.createElement(Link, { href: "/huong-dan-dang-nhap", className: "text-blue-600 hover:text-blue-800" },
                "Hướng dẫn đăng nhập 92Lottery"
              )
            ),
            React.createElement('li', null,
              React.createElement(Link, { href: "/92lottery-co-lua-dao-khong", className: "text-blue-600 hover:text-blue-800" },
                "92Lottery có lừa đảo không? Đánh giá uy tín từ chuyên gia"
              )
            ),
            React.createElement('li', null,
              React.createElement(Link, { href: "/app-92lottery", className: "text-blue-600 hover:text-blue-800" },
                "Cách tải và cài đặt App 92Lottery trên điện thoại Android và iOS"
              )
            )
          )
        )
      )
    )
  );
}
