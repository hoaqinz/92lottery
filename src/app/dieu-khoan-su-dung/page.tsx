import React from 'react';
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Điều khoản sử dụng | 92LOTTERY',
  description: 'Điều khoản sử dụng của 92LOTTERY - Các quy định và điều kiện khi sử dụng dịch vụ của chúng tôi. Vui lòng đọc kỹ trước khi đăng ký và sử dụng.',
  keywords: ['điều khoản sử dụng 92lottery', 'quy định 92lottery', 'điều kiện 92lottery', 'thỏa thuận người dùng 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/dieu-khoan-su-dung',
  },
};

export default function TermsOfServicePage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Điều khoản sử dụng", url: "https://92lottery.dev/dieu-khoan-su-dung" }
  ]);
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <Header />
      
      <main className="flex-1 max-w-[420px] mx-auto w-full bg-white pb-16">
        <div className="p-4">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#bc2022]">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Điều khoản sử dụng</span>
          </div>
          
          <h1 className="text-2xl font-bold text-[#bc2022] mb-6">Điều khoản sử dụng</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Cập nhật lần cuối: 16/05/2025
            </p>
            
            <p className="mb-4">
              Vui lòng đọc kỹ các điều khoản sử dụng này trước khi sử dụng trang web 92LOTTERY. Bằng cách truy cập hoặc sử dụng trang web của chúng tôi, bạn đồng ý bị ràng buộc bởi các điều khoản và điều kiện này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, vui lòng không sử dụng trang web của chúng tôi.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">1. Điều kiện sử dụng</h2>
            <p className="mb-4">
              Bằng cách sử dụng trang web này, bạn xác nhận rằng bạn ít nhất 18 tuổi hoặc đủ tuổi hợp pháp để tham gia vào các hoạt động cá cược tại quốc gia hoặc khu vực pháp lý của bạn, tùy thuộc vào độ tuổi nào cao hơn.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">2. Tài khoản người dùng</h2>
            <p className="mb-2">Khi tạo tài khoản với chúng tôi, bạn phải cung cấp thông tin chính xác, đầy đủ và cập nhật. Bạn chịu trách nhiệm:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Bảo mật thông tin tài khoản của bạn, bao gồm mật khẩu</li>
              <li>Tất cả hoạt động diễn ra dưới tài khoản của bạn</li>
              <li>Thông báo ngay cho chúng tôi về bất kỳ vi phạm bảo mật nào</li>
            </ul>
            <p className="mb-4">
              Chúng tôi có quyền đình chỉ hoặc chấm dứt tài khoản của bạn nếu vi phạm bất kỳ điều khoản nào trong thỏa thuận này.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">3. Nạp tiền và rút tiền</h2>
            <p className="mb-2">Khi sử dụng dịch vụ nạp tiền và rút tiền của chúng tôi:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Bạn phải sử dụng thông tin cá nhân và tài khoản ngân hàng của chính mình</li>
              <li>Số tiền nạp tối thiểu và tối đa được quy định trong phần "Nạp tiền"</li>
              <li>Thời gian xử lý rút tiền thông thường là từ 5-30 phút, nhưng có thể kéo dài hơn trong một số trường hợp</li>
              <li>Chúng tôi có quyền yêu cầu xác minh danh tính trước khi xử lý các yêu cầu rút tiền</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-6 mb-3">4. Cá cược và trò chơi</h2>
            <p className="mb-2">Khi tham gia các trò chơi và hoạt động cá cược trên trang web của chúng tôi:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Bạn chấp nhận rằng cá cược có yếu tố rủi ro và có thể dẫn đến mất tiền</li>
              <li>Tất cả các kết quả trò chơi đều dựa trên hệ thống tạo số ngẫu nhiên (RNG) được chứng nhận</li>
              <li>Chúng tôi có quyền hủy bỏ hoặc điều chỉnh bất kỳ giao dịch nào nếu phát hiện lỗi kỹ thuật, lỗi con người hoặc hoạt động gian lận</li>
              <li>Bạn không được sử dụng bất kỳ phần mềm, robot, script hoặc hệ thống tự động nào để tham gia vào các trò chơi</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-6 mb-3">5. Hành vi bị cấm</h2>
            <p className="mb-2">Bạn đồng ý không:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Sử dụng trang web cho bất kỳ mục đích bất hợp pháp nào</li>
              <li>Vi phạm bất kỳ luật hoặc quy định hiện hành nào</li>
              <li>Gian lận hoặc thao túng kết quả trò chơi</li>
              <li>Sử dụng nhiều tài khoản</li>
              <li>Chia sẻ tài khoản với người khác</li>
              <li>Sử dụng VPN hoặc proxy để che giấu vị trí thực của bạn</li>
              <li>Quấy rối, đe dọa hoặc lạm dụng người dùng khác hoặc nhân viên của chúng tôi</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-6 mb-3">6. Sở hữu trí tuệ</h2>
            <p className="mb-4">
              Trang web và tất cả nội dung, tính năng và chức năng của nó (bao gồm nhưng không giới hạn ở tất cả thông tin, phần mềm, văn bản, hình ảnh, video và âm thanh) là tài sản của 92LOTTERY hoặc các nhà cấp phép của chúng tôi. Các tài liệu này được bảo vệ bởi luật bản quyền, thương hiệu và các luật sở hữu trí tuệ khác.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">7. Giới hạn trách nhiệm</h2>
            <p className="mb-4">
              92LOTTERY và các đối tác, giám đốc, nhân viên và đại lý của chúng tôi sẽ không chịu trách nhiệm về bất kỳ tổn thất hoặc thiệt hại nào phát sinh từ việc sử dụng hoặc không thể sử dụng trang web hoặc dịch vụ của chúng tôi.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">8. Bồi thường</h2>
            <p className="mb-4">
              Bạn đồng ý bảo vệ, bồi thường và giữ cho 92LOTTERY và các đối tác, giám đốc, nhân viên và đại lý của chúng tôi không bị tổn hại từ bất kỳ khiếu nại, trách nhiệm, thiệt hại, tổn thất và chi phí nào phát sinh từ việc bạn vi phạm các điều khoản này.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">9. Thay đổi điều khoản</h2>
            <p className="mb-4">
              Chúng tôi có thể sửa đổi các điều khoản này theo thời gian. Mọi thay đổi sẽ có hiệu lực ngay khi được đăng trên trang web. Việc bạn tiếp tục sử dụng trang web sau khi đăng các thay đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">10. Luật áp dụng</h2>
            <p className="mb-4">
              Các điều khoản này sẽ được điều chỉnh và giải thích theo luật pháp của Curaçao, không tính đến các nguyên tắc xung đột pháp luật.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">11. Liên hệ</h2>
            <p className="mb-4">
              Nếu bạn có bất kỳ câu hỏi nào về các điều khoản sử dụng này, vui lòng liên hệ với chúng tôi qua:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Email: support@92lottery.dev</li>
              <li>Điện thoại: 0988 587 888</li>
              <li>Địa chỉ: 228 Trần Duy Hưng, Hà Nội, Việt Nam</li>
            </ul>
          </div>
        </div>
      </main>
      
      <TabBar />
    </div>
  );
}
