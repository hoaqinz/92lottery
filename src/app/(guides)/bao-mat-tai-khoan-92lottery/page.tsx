import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Bảo mật tài khoản 92Lottery - Hướng dẫn chi tiết và toàn diện',
  description: 'Hướng dẫn chi tiết về cách bảo mật tài khoản 92Lottery. Tìm hiểu cách tạo mật khẩu mạnh, thiết lập xác thực hai yếu tố và phòng tránh lừa đảo.',
  keywords: ['bảo mật tài khoản 92lottery', 'bảo vệ tài khoản 92lottery', 'mật khẩu mạnh 92lottery', 'xác thực hai yếu tố 92lottery', '2FA 92lottery', 'chống lừa đảo 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev',
    languages: {
      'vi': 'https://92lottery.dev',
      'x-default': 'https://92lottery.dev'
    }
  },
};

export default function SecurityGuidePage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "Làm thế nào để tạo mật khẩu mạnh cho tài khoản 92Lottery?",
      answer: "Để tạo mật khẩu mạnh cho tài khoản 92Lottery, bạn nên: 1) Sử dụng ít nhất 8 ký tự, 2) Kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt, 3) Tránh sử dụng thông tin cá nhân dễ đoán như ngày sinh, 4) Không sử dụng từ điển hoặc cụm từ phổ biến, 5) Sử dụng mật khẩu khác nhau cho các tài khoản khác nhau."
    },
    {
      question: "Xác thực hai yếu tố (2FA) là gì và làm thế nào để bật nó trên 92Lottery?",
      answer: "Xác thực hai yếu tố (2FA) là biện pháp bảo mật bổ sung yêu cầu hai hình thức xác thực khác nhau khi đăng nhập. Để bật 2FA trên 92Lottery: 1) Đăng nhập vào tài khoản, 2) Truy cập phần Cài đặt hoặc Bảo mật, 3) Tìm mục Xác thực hai yếu tố, 4) Chọn phương thức xác thực (SMS, Email, hoặc Ứng dụng xác thực), 5) Làm theo hướng dẫn trên màn hình để hoàn tất thiết lập."
    },
    {
      question: "Làm thế nào để nhận biết và tránh các nỗ lực lừa đảo nhắm vào người dùng 92Lottery?",
      answer: "Để nhận biết và tránh lừa đảo: 1) Kiểm tra URL trước khi đăng nhập (URL chính thức là 92lottery.dev), 2) Cảnh giác với email/tin nhắn yêu cầu thông tin đăng nhập hoặc mã OTP, 3) 92Lottery không bao giờ yêu cầu mật khẩu qua email/điện thoại, 4) Không nhấp vào liên kết đáng ngờ, 5) Sử dụng bookmark để truy cập trực tiếp trang web, 6) Cập nhật thường xuyên thiết bị và phần mềm bảo mật."
    },
    {
      question: "Tôi nên làm gì nếu nghi ngờ tài khoản 92Lottery bị xâm nhập?",
      answer: "Nếu nghi ngờ tài khoản bị xâm nhập: 1) Đổi mật khẩu ngay lập tức nếu vẫn đăng nhập được, 2) Liên hệ hỗ trợ khách hàng 92Lottery qua live chat hoặc hotline 24/7, 3) Kiểm tra lịch sử giao dịch và báo cáo các giao dịch đáng ngờ, 4) Tạm khóa tài khoản (nếu cần) thông qua bộ phận hỗ trợ, 5) Bật xác thực hai yếu tố nếu chưa bật, 6) Kiểm tra thiết bị của bạn với phần mềm diệt virus, 7) Thay đổi mật khẩu email liên kết với tài khoản 92Lottery."
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

  return [
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
            <li className="text-gray-700">Bảo mật tài khoản 92Lottery</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">Bảo mật tài khoản 92Lottery - Hướng dẫn chi tiết và toàn diện</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Bảo mật tài khoản là yếu tố quan trọng hàng đầu khi tham gia cá cược trực tuyến tại 92Lottery.
            Bài viết này sẽ hướng dẫn bạn các biện pháp bảo mật hiệu quả để bảo vệ tài khoản và tài sản
            của mình một cách toàn diện.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Tại sao bảo mật tài khoản 92Lottery lại quan trọng?</h3>
            <ul className="list-disc pl-5 mb-0">
              <li>Bảo vệ thông tin cá nhân khỏi bị đánh cắp</li>
              <li>Ngăn chặn truy cập trái phép vào tài khoản</li>
              <li>Bảo vệ số dư và tiền thắng cược</li>
              <li>Đảm bảo trải nghiệm cá cược an toàn và yên tâm</li>
              <li>Tránh các rủi ro từ lừa đảo trực tuyến</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Tạo và quản lý mật khẩu mạnh</h2>

          <div className="mb-8">
            <p className="mb-4">
              Mật khẩu là lớp bảo vệ đầu tiên và quan trọng nhất cho tài khoản 92Lottery của bạn.
              Một mật khẩu mạnh sẽ giúp ngăn chặn các nỗ lực truy cập trái phép vào tài khoản.
            </p>

            <h3 className="text-xl font-semibold mb-3">1. Tiêu chuẩn của một mật khẩu mạnh</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Độ dài:</strong> Ít nhất 8 ký tự, tốt nhất là 12 ký tự trở lên</li>
              <li className="mb-2"><strong>Tính phức tạp:</strong> Kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt (@, #, $, %, v.v.)</li>
              <li className="mb-2"><strong>Tính độc đáo:</strong> Không sử dụng thông tin cá nhân dễ đoán như tên, ngày sinh, số điện thoại</li>
              <li className="mb-2"><strong>Tính ngẫu nhiên:</strong> Tránh các từ điển hoặc cụm từ phổ biến</li>
              <li className="mb-2"><strong>Tính độc lập:</strong> Sử dụng mật khẩu khác với các tài khoản khác</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2. Ví dụ về mật khẩu mạnh và yếu</h3>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Mật khẩu yếu</th>
                    <th className="py-2 px-4 border-b">Mật khẩu mạnh</th>
                    <th className="py-2 px-4 border-b">Lý do</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">password123</td>
                    <td className="py-2 px-4 border-b">P@s$w0rd!2025</td>
                    <td className="py-2 px-4 border-b">Kết hợp các loại ký tự khác nhau</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">92lottery</td>
                    <td className="py-2 px-4 border-b">9L#t3rY*k!Ng</td>
                    <td className="py-2 px-4 border-b">Không sử dụng tên dịch vụ làm mật khẩu</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">01011990</td>
                    <td className="py-2 px-4 border-b">Bk7@Tm9#pQ2!</td>
                    <td className="py-2 px-4 border-b">Tránh sử dụng ngày tháng dễ đoán</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mb-3">3. Công cụ quản lý mật khẩu</h3>
            <p className="mb-4">
              Sử dụng công cụ quản lý mật khẩu là cách hiệu quả để tạo và lưu trữ các mật khẩu mạnh mà không cần phải nhớ tất cả.
              Một số công cụ quản lý mật khẩu phổ biến bao gồm:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">LastPass</li>
              <li className="mb-2">Bitwarden</li>
              <li className="mb-2">1Password</li>
              <li className="mb-2">Dashlane</li>
              <li className="mb-2">KeePass</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo quan trọng:</p>
              <p>Thay đổi mật khẩu 92Lottery của bạn định kỳ (ít nhất 3 tháng một lần) và ngay lập tức nếu bạn nghi ngờ có vấn đề về bảo mật.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Xác thực hai yếu tố (2FA)</h2>

          <div className="mb-8">
            <p className="mb-4">
              Xác thực hai yếu tố (2FA) là biện pháp bảo mật bổ sung, yêu cầu hai hình thức xác thực khác nhau
              khi đăng nhập. Ngay cả khi mật khẩu bị lộ, kẻ tấn công vẫn không thể truy cập vào tài khoản
              nếu không có yếu tố xác thực thứ hai.
            </p>

            <h3 className="text-xl font-semibold mb-3">1. Lợi ích của xác thực hai yếu tố</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Tăng cường bảo mật cho tài khoản</li>
              <li className="mb-2">Ngăn chặn truy cập trái phép ngay cả khi mật khẩu bị lộ</li>
              <li className="mb-2">Cảnh báo khi có người đang cố gắng đăng nhập vào tài khoản của bạn</li>
              <li className="mb-2">Bảo vệ thông tin cá nhân và tài chính</li>
              <li className="mb-2">Giảm thiểu rủi ro từ các cuộc tấn công lừa đảo</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2. Các phương thức xác thực hai yếu tố</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>SMS:</strong> Nhận mã xác thực qua tin nhắn điện thoại</li>
              <li className="mb-2"><strong>Email:</strong> Nhận mã xác thực qua email</li>
              <li className="mb-2"><strong>Ứng dụng xác thực:</strong> Sử dụng ứng dụng như Google Authenticator, Microsoft Authenticator, Authy</li>
              <li className="mb-2"><strong>Khóa bảo mật vật lý:</strong> Sử dụng thiết bị phần cứng như YubiKey</li>
            </ul>
          </div>

            <h3 className="text-xl font-semibold mb-3">3. Hướng dẫn bật 2FA trên 92Lottery</h3>
            <p className="mb-4">
              Dưới đây là hướng dẫn chi tiết cách bật xác thực hai yếu tố trên tài khoản 92Lottery:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Đăng nhập vào tài khoản 92Lottery của bạn</li>
              <li className="mb-2">Truy cập vào phần "Cài đặt tài khoản" hoặc "Bảo mật"</li>
              <li className="mb-2">Tìm mục "Xác thực hai yếu tố" hoặc "2FA"</li>
              <li className="mb-2">Chọn phương thức xác thực bạn muốn sử dụng (SMS, Email, hoặc Ứng dụng xác thực)</li>
              <li className="mb-2">Làm theo hướng dẫn trên màn hình để hoàn tất thiết lập</li>
            </ol>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo quan trọng:</p>
              <p>Khi thiết lập 2FA, bạn sẽ nhận được các mã dự phòng. Hãy lưu trữ các mã này ở nơi an toàn. Nếu bạn mất thiết bị nhận mã xác thực, các mã dự phòng này sẽ giúp bạn truy cập lại tài khoản.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Phòng tránh lừa đảo và tấn công mạng</h2>

          <div className="mb-8">
            <p className="mb-4">
              Ngoài việc bảo vệ tài khoản bằng mật khẩu mạnh và 2FA, bạn cũng cần cảnh giác với các hình thức lừa đảo
              và tấn công mạng nhắm vào người dùng 92Lottery.
            </p>

            <h3 className="text-xl font-semibold mb-3">1. Nhận biết và tránh Phishing</h3>
            <p className="mb-4">
              Phishing là hình thức lừa đảo phổ biến nhất, trong đó kẻ tấn công giả mạo 92Lottery để lừa bạn cung cấp
              thông tin đăng nhập hoặc thông tin cá nhân.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Dấu hiệu nhận biết email/tin nhắn phishing:</p>
              <ul className="list-disc pl-6 mb-0">
                <li>Địa chỉ email người gửi khác thường (không phải @92lottery.dev hoặc domain chính thức)</li>
                <li>Chứa lỗi chính tả hoặc ngữ pháp</li>
                <li>Tạo cảm giác khẩn cấp hoặc đe dọa (ví dụ: "Tài khoản của bạn sẽ bị khóa nếu không xác minh ngay")</li>
                <li>Yêu cầu thông tin cá nhân, mật khẩu hoặc mã OTP</li>
                <li>Chứa liên kết đáng ngờ (kiểm tra URL trước khi nhấp vào)</li>
              </ul>
            </div>
            <p className="mb-4">
              <strong>Lưu ý quan trọng:</strong> 92Lottery không bao giờ yêu cầu mật khẩu, mã OTP hoặc thông tin đăng nhập
              của bạn qua email, tin nhắn hoặc cuộc gọi điện thoại.
            </p>

            <h3 className="text-xl font-semibold mb-3">2. Kiểm tra URL trước khi đăng nhập</h3>
            <p className="mb-4">
              Một trong những hình thức phishing phổ biến là tạo trang web giả mạo giống hệt trang web chính thức của 92Lottery.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Luôn kiểm tra URL trong thanh địa chỉ trước khi đăng nhập</li>
              <li className="mb-2">URL chính thức của 92Lottery là: <strong>92lottery.dev</strong></li>
              <li className="mb-2">Cảnh giác với các URL tương tự nhưng không chính xác, ví dụ: 92-lottery.com, 92lottery.net, v.v.</li>
              <li className="mb-2">Đảm bảo kết nối được mã hóa (https://) với biểu tượng khóa trong thanh địa chỉ</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo:</p>
              <p>Lưu trang web chính thức của 92Lottery vào bookmark/favorites để truy cập an toàn mỗi lần.</p>
            </div>

            <h3 className="text-xl font-semibold mb-3">3. Bảo mật thiết bị</h3>
            <p className="mb-4">
              Thiết bị bạn sử dụng để truy cập 92Lottery cũng cần được bảo vệ để ngăn chặn phần mềm độc hại và
              keylogger (phần mềm ghi lại phím bấm).
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Cài đặt và cập nhật phần mềm diệt virus/anti-malware</li>
              <li className="mb-2">Cập nhật hệ điều hành và trình duyệt thường xuyên</li>
              <li className="mb-2">Không cài đặt ứng dụng từ nguồn không đáng tin cậy</li>
              <li className="mb-2">Không sử dụng thiết bị đã jailbreak/root để truy cập 92Lottery</li>
              <li className="mb-2">Sử dụng tính năng duyệt web riêng tư khi truy cập từ thiết bị công cộng</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4. Cẩn trọng với Wi-Fi công cộng</h3>
            <p className="mb-4">
              Wi-Fi công cộng có thể không an toàn và dễ bị tấn công "man-in-the-middle", trong đó kẻ tấn công
              có thể chặn thông tin bạn gửi và nhận.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Tránh đăng nhập vào 92Lottery khi sử dụng Wi-Fi công cộng</li>
              <li className="mb-2">Nếu cần thiết, sử dụng VPN đáng tin cậy để mã hóa kết nối</li>
              <li className="mb-2">Đăng xuất khỏi tài khoản sau khi sử dụng</li>
              <li className="mb-2">Xóa lịch sử duyệt web và cookie sau khi sử dụng thiết bị công cộng</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Xử lý khi tài khoản bị xâm nhập</h2>

          <div className="mb-8">
            <p className="mb-4">
              Nếu bạn nghi ngờ tài khoản 92Lottery của mình đã bị xâm nhập, hãy hành động nhanh chóng để
              giảm thiểu thiệt hại và lấy lại quyền kiểm soát.
            </p>

            <h3 className="text-xl font-semibold mb-3">1. Dấu hiệu tài khoản bị xâm nhập</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Thay đổi thông tin cá nhân mà bạn không thực hiện</li>
              <li className="mb-2">Giao dịch lạ trong lịch sử tài khoản</li>
              <li className="mb-2">Số dư tài khoản thay đổi bất thường</li>
              <li className="mb-2">Thông báo đăng nhập từ thiết bị hoặc địa điểm lạ</li>
              <li className="mb-2">Không thể đăng nhập mặc dù mật khẩu chính xác</li>
              <li className="mb-2">Nhận email xác nhận cho các hành động bạn không thực hiện</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2. Các bước xử lý khi tài khoản bị xâm nhập</h3>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2"><strong>Đổi mật khẩu ngay lập tức</strong> nếu vẫn đăng nhập được</li>
              <li className="mb-2"><strong>Liên hệ hỗ trợ khách hàng 92Lottery</strong> qua live chat hoặc hotline 24/7</li>
              <li className="mb-2"><strong>Kiểm tra lịch sử giao dịch</strong> và báo cáo các giao dịch đáng ngờ</li>
              <li className="mb-2"><strong>Tạm khóa tài khoản</strong> (nếu cần) thông qua bộ phận hỗ trợ</li>
              <li className="mb-2"><strong>Bật xác thực hai yếu tố</strong> nếu chưa bật</li>
              <li className="mb-2"><strong>Kiểm tra thiết bị</strong> của bạn với phần mềm diệt virus</li>
              <li className="mb-2"><strong>Thay đổi mật khẩu email</strong> liên kết với tài khoản 92Lottery</li>
            </ol>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Thông tin liên hệ hỗ trợ 92Lottery:</p>
              <ul className="list-none pl-0 mb-0">
                <li><strong>Live Chat:</strong> Có sẵn 24/7 trên website 92lottery.dev</li>
                <li><strong>Email:</strong> support@92lottery.dev</li>
                <li><strong>Hotline:</strong> [Số hotline 92Lottery]</li>
                <li><strong>Telegram:</strong> @92lottery_official</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các câu hỏi thường gặp về bảo mật tài khoản 92Lottery</h2>

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
              Bảo mật tài khoản 92Lottery là trách nhiệm chung của cả người dùng và nhà cái. 92Lottery đã triển khai
              nhiều biện pháp bảo mật tiên tiến, nhưng sự cảnh giác và thực hành bảo mật tốt từ phía người dùng
              vẫn là yếu tố quan trọng nhất.
            </p>
            <p className="mb-4">
              Bằng cách áp dụng các biện pháp bảo mật được đề cập trong bài viết này - từ việc tạo mật khẩu mạnh,
              bật xác thực hai yếu tố, đến việc cảnh giác với các nỗ lực lừa đảo - bạn có thể đảm bảo trải nghiệm
              cá cược an toàn và yên tâm tại 92Lottery.
            </p>
            <p className="mb-4">
              Hãy nhớ rằng, đầu tư thời gian vào việc bảo mật tài khoản là cách tốt nhất để bảo vệ tiền của bạn
              và tận hưởng trọn vẹn trải nghiệm tại 92Lottery.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Các bài viết liên quan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/huong-dan-dang-ky" className="text-blue-600 hover:text-blue-800">
                  Hướng dẫn đăng ký 92Lottery chi tiết
                </Link>
              </li>
              <li>
                <Link href="/huong-dan-dang-nhap" className="text-blue-600 hover:text-blue-800">
                  Hướng dẫn đăng nhập 92Lottery
                </Link>
              </li>
              <li>
                <Link href="/92lottery-co-lua-dao-khong" className="text-blue-600 hover:text-blue-800">
                  92Lottery có lừa đảo không? Đánh giá uy tín từ chuyên gia
                </Link>
              </li>
              <li>
                <Link href="/app-92lottery" className="text-blue-600 hover:text-blue-800">
                  Cách tải và cài đặt App 92Lottery trên điện thoại Android và iOS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  ];
}
