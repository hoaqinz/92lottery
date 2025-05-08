import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Bảo mật tài khoản 92Lottery - Hướng dẫn và mẹo bảo vệ tài khoản',
  description: 'Hướng dẫn chi tiết cách bảo mật tài khoản 92Lottery. Tìm hiểu các biện pháp bảo vệ tài khoản, cách thiết lập xác thực hai yếu tố và mẹo phòng tránh lừa đảo.',
  keywords: ['bảo mật tài khoản 92lottery', 'bảo vệ tài khoản 92lottery', 'xác thực hai yếu tố 92lottery', 'mật khẩu mạnh 92lottery', 'phòng tránh lừa đảo 92lottery', 'an toàn tài khoản 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev',
    languages: {
      'vi': 'https://92lottery.dev',
      'x-default': 'https://92lottery.dev'
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
            <li className="text-gray-700">Bảo mật tài khoản 92Lottery</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">Bảo mật tài khoản 92Lottery - Hướng dẫn và mẹo bảo vệ tài khoản</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Bảo mật tài khoản là yếu tố vô cùng quan trọng khi tham gia cá cược trực tuyến tại 92Lottery.
            Với số tiền thật trong tài khoản, việc đảm bảo an toàn thông tin cá nhân và tài sản của bạn
            là ưu tiên hàng đầu. Bài viết này sẽ hướng dẫn chi tiết các biện pháp bảo mật tài khoản 92Lottery,
            giúp bạn tránh khỏi các rủi ro bị xâm nhập và đánh cắp thông tin.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Tại sao bảo mật tài khoản 92Lottery lại quan trọng?</h3>
            <ul className="list-disc pl-5 mb-0">
              <li>Bảo vệ tiền thật trong tài khoản</li>
              <li>Ngăn chặn việc đánh cắp thông tin cá nhân</li>
              <li>Tránh bị lợi dụng tài khoản cho mục đích xấu</li>
              <li>Đảm bảo trải nghiệm cá cược an toàn và yên tâm</li>
              <li>Tuân thủ các quy định về bảo mật của 92Lottery</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các biện pháp bảo mật cơ bản</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. Tạo mật khẩu mạnh</h3>
            <p className="mb-4">
              Mật khẩu là lớp bảo vệ đầu tiên và quan trọng nhất cho tài khoản của bạn. Một mật khẩu mạnh sẽ giúp
              ngăn chặn các nỗ lực đoán mật khẩu hoặc tấn công brute-force.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Tiêu chuẩn mật khẩu mạnh:</p>
              <ul className="list-disc pl-6 mb-0">
                <li>Độ dài ít nhất 8 ký tự (khuyến nghị 12-16 ký tự)</li>
                <li>Kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt (@, #, $, %, v.v.)</li>
                <li>Không sử dụng thông tin cá nhân dễ đoán (ngày sinh, tên, số điện thoại)</li>
                <li>Không sử dụng từ điển hoặc cụm từ phổ biến</li>
                <li>Không sử dụng mật khẩu đã dùng cho các tài khoản khác</li>
              </ul>
            </div>
            <p className="mb-4">
              <strong>Ví dụ về mật khẩu yếu:</strong> 123456, password, tên + năm sinh
            </p>
            <p className="mb-4">
              <strong>Ví dụ về mật khẩu mạnh:</strong> P@s$w0rd92L*tT3ry, Tr0ng!M@nh92#2025
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo:</p>
              <p>Sử dụng công cụ quản lý mật khẩu như LastPass, Dashlane hoặc 1Password để tạo và lưu trữ mật khẩu mạnh một cách an toàn.</p>
            </div>

            <h3 className="text-xl font-semibold mb-3">2. Thay đổi mật khẩu định kỳ</h3>
            <p className="mb-4">
              Việc thay đổi mật khẩu định kỳ là biện pháp bảo mật quan trọng, giúp giảm thiểu rủi ro nếu mật khẩu
              của bạn đã bị lộ mà bạn không biết.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Thay đổi mật khẩu 92Lottery ít nhất 3-6 tháng một lần</li>
              <li className="mb-2">Không sử dụng lại mật khẩu cũ hoặc mật khẩu tương tự</li>
              <li className="mb-2">Thay đổi mật khẩu ngay lập tức nếu nghi ngờ tài khoản bị xâm nhập</li>
              <li className="mb-2">Thay đổi mật khẩu sau khi sử dụng thiết bị công cộng hoặc mạng Wi-Fi công cộng</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3. Bảo mật email liên kết</h3>
            <p className="mb-4">
              Email liên kết với tài khoản 92Lottery của bạn là phương tiện quan trọng để khôi phục tài khoản và
              nhận thông báo. Việc bảo mật email cũng quan trọng không kém việc bảo mật tài khoản 92Lottery.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Sử dụng email riêng cho tài khoản 92Lottery, không dùng chung với các dịch vụ khác</li>
              <li className="mb-2">Đặt mật khẩu mạnh cho email và bật xác thực hai yếu tố</li>
              <li className="mb-2">Kiểm tra thường xuyên các hoạt động đáng ngờ trong email</li>
              <li className="mb-2">Không chia sẻ quyền truy cập email với người khác</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4. Cập nhật thông tin liên hệ</h3>
            <p className="mb-4">
              Đảm bảo thông tin liên hệ của bạn luôn được cập nhật để nhận các thông báo bảo mật và khôi phục
              tài khoản khi cần thiết.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Cập nhật số điện thoại chính xác để nhận mã xác thực</li>
              <li className="mb-2">Đảm bảo email liên kết vẫn hoạt động và bạn có quyền truy cập</li>
              <li className="mb-2">Thông báo cho 92Lottery khi thay đổi thông tin liên hệ</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Xác thực hai yếu tố (2FA)</h2>

          <div className="mb-8">
            <p className="mb-4">
              Xác thực hai yếu tố (2FA) là một trong những biện pháp bảo mật hiệu quả nhất để bảo vệ tài khoản 92Lottery.
              Với 2FA, ngay cả khi mật khẩu bị lộ, kẻ tấn công vẫn không thể truy cập vào tài khoản của bạn nếu không có
              yếu tố xác thực thứ hai.
            </p>

            <h3 className="text-xl font-semibold mb-3">1. Cách thức hoạt động của 2FA</h3>
            <p className="mb-4">
              Xác thực hai yếu tố yêu cầu hai hình thức xác thực khác nhau:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Yếu tố đầu tiên:</strong> Thứ bạn biết (mật khẩu)</li>
              <li className="mb-2"><strong>Yếu tố thứ hai:</strong> Thứ bạn có (điện thoại để nhận mã SMS hoặc ứng dụng xác thực)</li>
            </ul>
            <p className="mb-4">
              Khi đăng nhập, sau khi nhập mật khẩu, bạn sẽ được yêu cầu nhập mã xác thực từ SMS hoặc ứng dụng xác thực.
            </p>

            <h3 className="text-xl font-semibold mb-3">2. Các phương thức 2FA tại 92Lottery</h3>
            <p className="mb-4">
              92Lottery hỗ trợ nhiều phương thức xác thực hai yếu tố:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>SMS OTP:</strong> Mã xác thực gửi qua tin nhắn SMS</li>
              <li className="mb-2"><strong>Email OTP:</strong> Mã xác thực gửi qua email</li>
              <li className="mb-2"><strong>Ứng dụng xác thực:</strong> Google Authenticator, Microsoft Authenticator, Authy</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý:</p>
              <p>Ứng dụng xác thực thường an toàn hơn SMS hoặc email OTP, vì SMS và email có thể bị chặn hoặc đánh cắp.</p>
            </div>
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
    </>
  );
}
