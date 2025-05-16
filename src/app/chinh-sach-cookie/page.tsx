import React from 'react';
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chính sách Cookie | 92LOTTERY',
  description: 'Chính sách Cookie của 92LOTTERY - Tìm hiểu cách chúng tôi sử dụng cookie và các công nghệ tương tự để cải thiện trải nghiệm của bạn trên trang web của chúng tôi.',
  keywords: ['chính sách cookie 92lottery', 'cookie 92lottery', 'theo dõi 92lottery', 'quyền riêng tư 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/chinh-sach-cookie',
  },
};

export default function CookiePolicyPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Chính sách Cookie", url: "https://92lottery.dev/chinh-sach-cookie" }
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
            <span className="text-gray-700">Chính sách Cookie</span>
          </div>
          
          <h1 className="text-2xl font-bold text-[#bc2022] mb-6">Chính sách Cookie</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Cập nhật lần cuối: 16/05/2025
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">1. Cookie là gì?</h2>
            <p className="mb-4">
              Cookie là các tệp văn bản nhỏ được lưu trữ trên thiết bị của bạn (máy tính, điện thoại di động, máy tính bảng) khi bạn truy cập trang web. Cookie được sử dụng rộng rãi để làm cho trang web hoạt động hiệu quả hơn và cung cấp thông tin cho chủ sở hữu trang web.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">2. Cách chúng tôi sử dụng cookie</h2>
            <p className="mb-2">92LOTTERY sử dụng cookie cho các mục đích sau:</p>
            <ul className="list-disc pl-5 mb-4">
              <li><strong>Cookie cần thiết:</strong> Giúp trang web hoạt động và cho phép bạn sử dụng các dịch vụ cơ bản như đăng nhập và lưu trữ phiên.</li>
              <li><strong>Cookie phân tích:</strong> Giúp chúng tôi hiểu cách bạn tương tác với trang web, từ đó cải thiện hiệu suất và trải nghiệm người dùng.</li>
              <li><strong>Cookie chức năng:</strong> Ghi nhớ các lựa chọn của bạn (như ngôn ngữ, khu vực) để cung cấp trải nghiệm cá nhân hóa.</li>
              <li><strong>Cookie quảng cáo:</strong> Được sử dụng để cung cấp quảng cáo phù hợp với sở thích của bạn và đo lường hiệu quả của chiến dịch quảng cáo.</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-6 mb-3">3. Các loại cookie chúng tôi sử dụng</h2>
            
            <h3 className="text-lg font-semibold mt-4 mb-2">3.1. Cookie cần thiết</h3>
            <table className="w-full border-collapse mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Tên</th>
                  <th className="border p-2 text-left">Mục đích</th>
                  <th className="border p-2 text-left">Thời hạn</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">session_id</td>
                  <td className="border p-2">Quản lý phiên đăng nhập</td>
                  <td className="border p-2">Phiên</td>
                </tr>
                <tr>
                  <td className="border p-2">auth_token</td>
                  <td className="border p-2">Xác thực người dùng</td>
                  <td className="border p-2">30 ngày</td>
                </tr>
                <tr>
                  <td className="border p-2">csrf_token</td>
                  <td className="border p-2">Bảo vệ chống tấn công CSRF</td>
                  <td className="border p-2">Phiên</td>
                </tr>
              </tbody>
            </table>
            
            <h3 className="text-lg font-semibold mt-4 mb-2">3.2. Cookie phân tích</h3>
            <table className="w-full border-collapse mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Tên</th>
                  <th className="border p-2 text-left">Mục đích</th>
                  <th className="border p-2 text-left">Thời hạn</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">_ga</td>
                  <td className="border p-2">Google Analytics - Phân biệt người dùng</td>
                  <td className="border p-2">2 năm</td>
                </tr>
                <tr>
                  <td className="border p-2">_gid</td>
                  <td className="border p-2">Google Analytics - Phân biệt người dùng</td>
                  <td className="border p-2">24 giờ</td>
                </tr>
                <tr>
                  <td className="border p-2">_gat</td>
                  <td className="border p-2">Google Analytics - Giới hạn tỷ lệ yêu cầu</td>
                  <td className="border p-2">1 phút</td>
                </tr>
              </tbody>
            </table>
            
            <h2 className="text-xl font-bold mt-6 mb-3">4. Quản lý cookie</h2>
            <p className="mb-4">
              Bạn có thể kiểm soát và quản lý cookie theo nhiều cách. Hầu hết các trình duyệt cho phép bạn xem, quản lý, xóa và chặn cookie. Lưu ý rằng nếu bạn chọn chặn hoặc xóa cookie, điều này có thể ảnh hưởng đến trải nghiệm của bạn trên trang web của chúng tôi và một số tính năng có thể không hoạt động như mong đợi.
            </p>
            
            <h3 className="text-lg font-semibold mt-4 mb-2">Hướng dẫn quản lý cookie trên các trình duyệt phổ biến:</h3>
            <ul className="list-disc pl-5 mb-4">
              <li><strong>Google Chrome:</strong> Menu > Cài đặt > Hiển thị cài đặt nâng cao > Quyền riêng tư > Cài đặt nội dung > Cookie</li>
              <li><strong>Mozilla Firefox:</strong> Menu > Tùy chọn > Quyền riêng tư > Lịch sử > Cài đặt tùy chỉnh cho lịch sử</li>
              <li><strong>Safari:</strong> Tùy chọn > Quyền riêng tư > Cookie và dữ liệu trang web</li>
              <li><strong>Microsoft Edge:</strong> Menu > Cài đặt > Quyền riêng tư và dịch vụ > Cookie</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-6 mb-3">5. Cookie của bên thứ ba</h2>
            <p className="mb-4">
              Trang web của chúng tôi cũng sử dụng cookie từ các bên thứ ba như Google Analytics, Facebook, và các đối tác quảng cáo khác. Các cookie này được sử dụng để phân tích lưu lượng truy cập, cá nhân hóa quảng cáo và đo lường hiệu quả của chiến dịch marketing.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">6. Thay đổi chính sách cookie</h2>
            <p className="mb-4">
              Chúng tôi có thể cập nhật chính sách cookie này theo thời gian để phản ánh những thay đổi trong cách chúng tôi sử dụng cookie hoặc vì lý do pháp lý, hoạt động hoặc kỹ thuật. Mọi thay đổi sẽ được đăng trên trang web này.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">7. Liên hệ</h2>
            <p className="mb-4">
              Nếu bạn có bất kỳ câu hỏi hoặc quan ngại nào về chính sách cookie của chúng tôi, vui lòng liên hệ với chúng tôi qua:
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
