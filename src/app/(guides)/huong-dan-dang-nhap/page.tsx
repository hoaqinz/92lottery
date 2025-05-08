import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Hướng dẫn đăng nhập 92Lottery đơn giản và nhanh chóng',
  description: 'Hướng dẫn chi tiết cách đăng nhập vào tài khoản 92Lottery. Khắc phục các lỗi đăng nhập phổ biến và mẹo bảo mật tài khoản hiệu quả.',
  keywords: ['đăng nhập 92lottery', 'hướng dẫn đăng nhập 92lottery', 'cách đăng nhập 92lottery', 'lỗi đăng nhập 92lottery', 'quên mật khẩu 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev',
    languages: {
      'vi': 'https://92lottery.dev',
      'x-default': 'https://92lottery.dev'
    }
  },
};

export default function LoginGuidePage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "Làm thế nào để đăng nhập vào 92Lottery?",
      answer: "Để đăng nhập vào 92Lottery, bạn cần truy cập trang chủ 92lottery.dev, nhấp vào nút 'Đăng nhập', nhập số điện thoại và mật khẩu của bạn, sau đó nhấp vào nút 'Đăng nhập' để truy cập vào tài khoản."
    },
    {
      question: "Tôi quên mật khẩu 92Lottery thì phải làm sao?",
      answer: "Nếu bạn quên mật khẩu 92Lottery, hãy nhấp vào liên kết 'Quên mật khẩu' trên trang đăng nhập. Nhập số điện thoại của bạn và làm theo hướng dẫn để đặt lại mật khẩu mới."
    },
    {
      question: "Tại sao tôi không thể đăng nhập vào 92Lottery?",
      answer: "Có nhiều lý do khiến bạn không thể đăng nhập vào 92Lottery, bao gồm: nhập sai thông tin đăng nhập, tài khoản bị khóa, vấn đề kết nối internet, hoặc trình duyệt có vấn đề. Hãy kiểm tra lại thông tin đăng nhập và kết nối internet của bạn."
    },
    {
      question: "Làm thế nào để bảo mật tài khoản 92Lottery của tôi?",
      answer: "Để bảo mật tài khoản 92Lottery, bạn nên sử dụng mật khẩu mạnh, không chia sẻ thông tin đăng nhập với người khác, đăng xuất khi sử dụng thiết bị công cộng, và thường xuyên thay đổi mật khẩu."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Hướng dẫn đăng nhập", url: "https://92lottery.dev/huong-dan-dang-nhap" }
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
            <li className="text-gray-700">Hướng dẫn đăng nhập</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">Hướng dẫn đăng nhập 92Lottery đơn giản và nhanh chóng</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Đăng nhập vào tài khoản 92Lottery là bước đầu tiên để bạn có thể tham gia các trò chơi hấp dẫn và cơ hội trúng thưởng lớn. 
            Bài viết này sẽ hướng dẫn bạn cách đăng nhập 92Lottery chi tiết, cũng như cách khắc phục các lỗi đăng nhập phổ biến.
          </p>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các bước đăng nhập 92Lottery</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Bước 1: Truy cập trang đăng nhập 92Lottery</h3>
            <p className="mb-4">
              Đầu tiên, bạn cần truy cập vào trang chủ của 92Lottery tại địa chỉ{' '}
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                92lottery.dev
              </Link>. 
              Sau đó, nhấp vào nút "Đăng nhập" ở góc phải trên cùng của trang hoặc truy cập trực tiếp vào trang đăng nhập tại{' '}
              <Link href="/login" className="text-blue-600 hover:text-blue-800">
                92lottery.dev/login
              </Link>.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Mẹo:</p>
              <p>Bạn có thể lưu trang đăng nhập vào bookmark của trình duyệt để truy cập nhanh hơn trong những lần sau.</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Bước 2: Nhập thông tin đăng nhập</h3>
            <p className="mb-4">
              Tại trang đăng nhập, bạn cần nhập các thông tin sau:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Số điện thoại:</strong> Nhập số điện thoại mà bạn đã dùng để đăng ký tài khoản.</li>
              <li className="mb-2"><strong>Mật khẩu:</strong> Nhập mật khẩu của bạn.</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold text-[#bc2022]">Lưu ý quan trọng:</p>
              <p>Đảm bảo rằng bạn nhập chính xác số điện thoại và mật khẩu. Nếu bạn chưa có tài khoản, hãy tham khảo{' '}
                <Link href="/huong-dan-dang-ky" className="text-blue-600 hover:text-blue-800">
                  hướng dẫn đăng ký 92Lottery
                </Link>.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Bước 3: Nhấp vào nút "Đăng nhập"</h3>
            <p className="mb-4">
              Sau khi nhập đầy đủ thông tin, nhấp vào nút "Đăng nhập" để truy cập vào tài khoản của bạn. 
              Nếu thông tin đăng nhập chính xác, bạn sẽ được chuyển hướng đến trang chủ hoặc trang cá nhân của 92Lottery.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Khắc phục các lỗi đăng nhập phổ biến</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. Quên mật khẩu</h3>
            <p className="mb-4">
              Nếu bạn quên mật khẩu, hãy nhấp vào liên kết "Quên mật khẩu" trên trang đăng nhập. Sau đó, làm theo các bước sau:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Nhập số điện thoại đã đăng ký.</li>
              <li className="mb-2">Nhấp vào nút "Gửi mã xác nhận".</li>
              <li className="mb-2">Nhập mã xác nhận được gửi đến số điện thoại của bạn.</li>
              <li className="mb-2">Tạo mật khẩu mới và xác nhận.</li>
              <li className="mb-2">Nhấp vào nút "Xác nhận" để hoàn tất quá trình đặt lại mật khẩu.</li>
            </ol>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">2. Tài khoản bị khóa</h3>
            <p className="mb-4">
              Nếu bạn nhập sai mật khẩu nhiều lần, tài khoản của bạn có thể bị khóa tạm thời vì lý do bảo mật. 
              Trong trường hợp này, hãy liên hệ với đội ngũ hỗ trợ khách hàng của 92Lottery qua live chat hoặc hotline để được hỗ trợ mở khóa tài khoản.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">3. Vấn đề kỹ thuật</h3>
            <p className="mb-4">
              Nếu bạn gặp vấn đề kỹ thuật khi đăng nhập, hãy thử các giải pháp sau:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Làm mới trang web (F5).</li>
              <li className="mb-2">Xóa cache và cookie của trình duyệt.</li>
              <li className="mb-2">Thử đăng nhập bằng trình duyệt khác.</li>
              <li className="mb-2">Kiểm tra kết nối internet của bạn.</li>
              <li className="mb-2">Đảm bảo rằng JavaScript được bật trong trình duyệt của bạn.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Mẹo bảo mật tài khoản 92Lottery</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              Để bảo vệ tài khoản 92Lottery của bạn, hãy tuân thủ các mẹo bảo mật sau:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Sử dụng mật khẩu mạnh và duy nhất cho tài khoản 92Lottery.</li>
              <li className="mb-2">Không chia sẻ thông tin đăng nhập với người khác.</li>
              <li className="mb-2">Đăng xuất khi sử dụng thiết bị công cộng.</li>
              <li className="mb-2">Thường xuyên thay đổi mật khẩu.</li>
              <li className="mb-2">Không nhấp vào các liên kết đáng ngờ hoặc cung cấp thông tin đăng nhập qua email hoặc tin nhắn.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#bc2022] mt-8 mb-4">Các câu hỏi thường gặp khi đăng nhập 92Lottery</h2>
          
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
            Đăng nhập vào 92Lottery là một quá trình đơn giản và nhanh chóng. Với hướng dẫn chi tiết này, 
            bạn có thể dễ dàng truy cập vào tài khoản của mình và tận hưởng các trò chơi hấp dẫn tại 92Lottery.
          </p>
          
          <p className="mb-4">
            Nếu bạn gặp bất kỳ khó khăn nào trong quá trình đăng nhập, đừng ngần ngại liên hệ với đội ngũ hỗ trợ khách hàng 
            của 92Lottery để được hỗ trợ kịp thời.
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
                <Link href="/gioi-thieu" className="text-blue-600 hover:text-blue-800">
                  Giới thiệu về 92Lottery - Nhà cái uy tín hàng đầu Việt Nam
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
