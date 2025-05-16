import React from 'react';
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chính sách bảo mật | 92LOTTERY',
  description: 'Chính sách bảo mật của 92LOTTERY - Cam kết bảo vệ thông tin cá nhân và dữ liệu người dùng với các biện pháp bảo mật tiên tiến nhất.',
  keywords: ['chính sách bảo mật 92lottery', 'bảo mật thông tin 92lottery', 'bảo vệ dữ liệu 92lottery', 'quyền riêng tư 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/chinh-sach-bao-mat',
  },
};

export default function PrivacyPolicyPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Chính sách bảo mật", url: "https://92lottery.dev/chinh-sach-bao-mat" }
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
            <span className="text-gray-700">Chính sách bảo mật</span>
          </div>
          
          <h1 className="text-2xl font-bold text-[#bc2022] mb-6">Chính sách bảo mật</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Cập nhật lần cuối: 16/05/2025
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">1. Giới thiệu</h2>
            <p className="mb-4">
              92LOTTERY cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn. Chính sách bảo mật này mô tả cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin cá nhân của bạn khi sử dụng trang web và dịch vụ của chúng tôi.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">2. Thông tin chúng tôi thu thập</h2>
            <p className="mb-2">Chúng tôi có thể thu thập các loại thông tin sau:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Thông tin cá nhân: Họ tên, địa chỉ email, số điện thoại, ngày sinh</li>
              <li>Thông tin tài khoản: Tên đăng nhập, mật khẩu (được mã hóa)</li>
              <li>Thông tin giao dịch: Lịch sử nạp/rút tiền, lịch sử cược</li>
              <li>Thông tin thiết bị: Địa chỉ IP, loại thiết bị, hệ điều hành, trình duyệt</li>
              <li>Dữ liệu sử dụng: Thời gian truy cập, trang đã xem, hoạt động trên trang web</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-6 mb-3">3. Mục đích sử dụng thông tin</h2>
            <p className="mb-2">Chúng tôi sử dụng thông tin của bạn cho các mục đích sau:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Cung cấp và quản lý tài khoản của bạn</li>
              <li>Xử lý giao dịch nạp/rút tiền</li>
              <li>Cải thiện dịch vụ và trải nghiệm người dùng</li>
              <li>Gửi thông báo về khuyến mãi, cập nhật và thông tin quan trọng</li>
              <li>Phát hiện và ngăn chặn gian lận, lạm dụng và hoạt động bất hợp pháp</li>
              <li>Tuân thủ nghĩa vụ pháp lý và quy định</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-6 mb-3">4. Bảo mật thông tin</h2>
            <p className="mb-4">
              92LOTTERY áp dụng các biện pháp bảo mật tiên tiến để bảo vệ thông tin cá nhân của bạn, bao gồm:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Mã hóa SSL 256-bit cho tất cả dữ liệu truyền tải</li>
              <li>Mã hóa mật khẩu và thông tin nhạy cảm</li>
              <li>Hệ thống tường lửa và phát hiện xâm nhập</li>
              <li>Kiểm tra bảo mật định kỳ và cập nhật hệ thống</li>
              <li>Giới hạn quyền truy cập vào thông tin cá nhân</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-6 mb-3">5. Chia sẻ thông tin</h2>
            <p className="mb-4">
              Chúng tôi không bán, cho thuê hoặc trao đổi thông tin cá nhân của bạn với bên thứ ba. Tuy nhiên, chúng tôi có thể chia sẻ thông tin trong các trường hợp sau:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Với các đối tác cung cấp dịch vụ (xử lý thanh toán, phân tích dữ liệu, hỗ trợ khách hàng)</li>
              <li>Khi có yêu cầu từ cơ quan pháp luật hoặc cơ quan quản lý</li>
              <li>Để bảo vệ quyền, tài sản hoặc an toàn của 92LOTTERY, người dùng hoặc công chúng</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-6 mb-3">6. Quyền của bạn</h2>
            <p className="mb-2">Bạn có các quyền sau đối với thông tin cá nhân của mình:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Quyền truy cập và nhận bản sao thông tin cá nhân của bạn</li>
              <li>Quyền yêu cầu sửa đổi thông tin không chính xác</li>
              <li>Quyền yêu cầu xóa thông tin cá nhân</li>
              <li>Quyền hạn chế hoặc phản đối việc xử lý thông tin</li>
              <li>Quyền rút lại sự đồng ý</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-6 mb-3">7. Thay đổi chính sách bảo mật</h2>
            <p className="mb-4">
              Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian. Mọi thay đổi sẽ được đăng trên trang web này và, nếu quan trọng, chúng tôi sẽ thông báo cho bạn qua email hoặc thông báo trên trang web.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">8. Liên hệ</h2>
            <p className="mb-4">
              Nếu bạn có bất kỳ câu hỏi hoặc quan ngại nào về chính sách bảo mật của chúng tôi, vui lòng liên hệ với chúng tôi qua:
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
