import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Tối ưu Mobile 92Lottery - Trải nghiệm mượt mà trên điện thoại | 92Lottery',
  description: 'Hướng dẫn tối ưu 92Lottery trên điện thoại di động. Cách cài đặt, tăng tốc và khắc phục các vấn đề trên Android và iOS.',
  keywords: ['mobile 92lottery', 'điện thoại 92lottery', 'tối ưu 92lottery', 'android 92lottery', 'ios 92lottery', 'app 92lottery', 'cài đặt 92lottery', 'tăng tốc 92lottery mobile'],
  alternates: {
    canonical: 'https://92lottery.dev/toi-uu-mobile-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/toi-uu-mobile-92lottery',
      'x-default': 'https://92lottery.dev/toi-uu-mobile-92lottery'
    }
  },
};

export default function MobileOptimizationPage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "Làm thế nào để tối ưu 92Lottery trên điện thoại Android?",
      answer: "Để tối ưu 92Lottery trên điện thoại Android, bạn nên: 1) Tải ứng dụng 92Lottery từ trang chủ chính thức, 2) Cập nhật ứng dụng lên phiên bản mới nhất, 3) Xóa cache ứng dụng thường xuyên, 4) Đóng các ứng dụng không cần thiết đang chạy nền, 5) Kích hoạt chế độ tiết kiệm pin cho các ứng dụng khác nhưng không áp dụng cho 92Lottery, 6) Sử dụng kết nối WiFi ổn định hoặc 4G/5G."
    },
    {
      question: "Làm thế nào để tối ưu 92Lottery trên iPhone (iOS)?",
      answer: "Để tối ưu 92Lottery trên iPhone (iOS), bạn nên: 1) Tải ứng dụng 92Lottery từ trang chủ chính thức, 2) Cập nhật iOS lên phiên bản mới nhất, 3) Đóng các ứng dụng không cần thiết đang chạy nền, 4) Tắt các tính năng không cần thiết như Cập nhật ứng dụng tự động, 5) Sử dụng kết nối WiFi ổn định hoặc 4G/5G, 6) Thêm 92Lottery vào màn hình chính để truy cập nhanh chóng."
    },
    {
      question: "Làm thế nào để thêm 92Lottery vào màn hình chính trên điện thoại?",
      answer: "Để thêm 92Lottery vào màn hình chính: Trên Android, mở trình duyệt, truy cập 92lottery.dev, nhấn vào menu (3 chấm), chọn 'Thêm vào màn hình chính'. Trên iOS, mở Safari, truy cập 92lottery.dev, nhấn vào biểu tượng Chia sẻ (hình vuông với mũi tên hướng lên), chọn 'Thêm vào màn hình chính'. Hoặc đơn giản hơn, bạn có thể tải ứng dụng 92Lottery từ trang chủ chính thức."
    },
    {
      question: "Tại sao nên sử dụng ứng dụng 92Lottery thay vì truy cập qua trình duyệt?",
      answer: "Sử dụng ứng dụng 92Lottery có nhiều ưu điểm hơn so với truy cập qua trình duyệt: 1) Tốc độ nhanh hơn và ít tốn dữ liệu hơn, 2) Giao diện được tối ưu hóa cho điện thoại, 3) Thông báo kết quả và khuyến mãi trực tiếp, 4) Bảo mật tốt hơn với tính năng đăng nhập bằng vân tay/Face ID, 5) Trải nghiệm mượt mà hơn không bị gián đoạn bởi quảng cáo, 6) Các tính năng độc quyền chỉ có trên ứng dụng."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Tối ưu Mobile 92Lottery", url: "https://92lottery.dev/toi-uu-mobile-92lottery" }
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
          React.createElement('li', { className: "text-gray-700" }, "Tối ưu Mobile 92Lottery")
        )
      )
    ),
    
    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "Tối ưu Mobile 92Lottery - Trải nghiệm mượt mà trên điện thoại"),
      
      React.createElement('div', { className: "prose max-w-none" },
        React.createElement('p', { className: "text-lg mb-6" }, 
          "92Lottery mang đến trải nghiệm tuyệt vời trên điện thoại di động với giao diện được tối ưu hóa và ứng dụng chuyên dụng. Bài viết này sẽ hướng dẫn bạn cách tối ưu 92Lottery trên điện thoại để có trải nghiệm mượt mà và nhanh chóng nhất."
        ),
        
        // Tối ưu trên Android
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Tối ưu 92Lottery trên Android"),
        
        React.createElement('div', { className: "space-y-4 mb-8" },
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "1. Tải ứng dụng 92Lottery"),
            React.createElement('p', null, 
              "Ứng dụng 92Lottery cho Android được tối ưu hóa đặc biệt, mang lại trải nghiệm mượt mà hơn so với truy cập qua trình duyệt. ",
              React.createElement(Link, { href: "/app-92lottery", className: "text-blue-600 hover:text-blue-800" }, "Tải ứng dụng 92Lottery cho Android tại đây.")
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "2. Xóa cache ứng dụng"),
            React.createElement('p', { className: "mb-2" }, 
              "Xóa cache ứng dụng thường xuyên để cải thiện hiệu suất:"
            ),
            React.createElement('ol', { className: "list-decimal pl-5 mt-2 space-y-1" },
              React.createElement('li', null, "Mở Cài đặt > Ứng dụng > 92Lottery"),
              React.createElement('li', null, "Chọn Bộ nhớ > Xóa cache"),
              React.createElement('li', null, "Không chọn 'Xóa dữ liệu' vì sẽ xóa tài khoản của bạn")
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "3. Cập nhật ứng dụng"),
            React.createElement('p', null, 
              "Luôn cập nhật ứng dụng 92Lottery lên phiên bản mới nhất để có hiệu suất tốt nhất và các tính năng mới. Kiểm tra cập nhật trong ứng dụng hoặc truy cập trang chủ 92lottery.dev để tải phiên bản mới nhất."
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "4. Tối ưu hóa pin và bộ nhớ"),
            React.createElement('p', { className: "mb-2" }, 
              "Tối ưu hóa pin và bộ nhớ cho 92Lottery:"
            ),
            React.createElement('ul', { className: "list-disc pl-5 mt-2 space-y-1" },
              React.createElement('li', null, "Mở Cài đặt > Pin > Tối ưu hóa pin"),
              React.createElement('li', null, "Tìm 92Lottery và đặt là 'Không tối ưu hóa' để ứng dụng hoạt động tốt nhất"),
              React.createElement('li', null, "Đóng các ứng dụng không cần thiết đang chạy nền")
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "5. Thêm vào màn hình chính"),
            React.createElement('p', { className: "mb-2" }, 
              "Thêm 92Lottery vào màn hình chính để truy cập nhanh chóng:"
            ),
            React.createElement('ol', { className: "list-decimal pl-5 mt-2 space-y-1" },
              React.createElement('li', null, "Mở trình duyệt và truy cập 92lottery.dev"),
              React.createElement('li', null, "Nhấn vào menu (3 chấm) ở góc phải trên cùng"),
              React.createElement('li', null, "Chọn 'Thêm vào màn hình chính'"),
              React.createElement('li', null, "Đặt tên và nhấn 'Thêm'")
            )
          )
        ),
        
        // Tối ưu trên iOS
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Tối ưu 92Lottery trên iOS (iPhone, iPad)"),
        
        React.createElement('div', { className: "space-y-4 mb-8" },
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "1. Tải ứng dụng 92Lottery"),
            React.createElement('p', null, 
              "Ứng dụng 92Lottery cho iOS được tối ưu hóa đặc biệt, mang lại trải nghiệm mượt mà hơn so với truy cập qua trình duyệt. ",
              React.createElement(Link, { href: "/app-92lottery", className: "text-blue-600 hover:text-blue-800" }, "Tải ứng dụng 92Lottery cho iOS tại đây.")
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "2. Xóa cache Safari"),
            React.createElement('p', { className: "mb-2" }, 
              "Nếu bạn truy cập 92Lottery qua Safari, hãy xóa cache thường xuyên:"
            ),
            React.createElement('ol', { className: "list-decimal pl-5 mt-2 space-y-1" },
              React.createElement('li', null, "Mở Cài đặt > Safari"),
              React.createElement('li', null, "Cuộn xuống và chọn 'Xóa lịch sử và dữ liệu trang web'"),
              React.createElement('li', null, "Xác nhận bằng cách nhấn 'Xóa lịch sử và dữ liệu'")
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "3. Cập nhật iOS"),
            React.createElement('p', null, 
              "Luôn cập nhật iOS lên phiên bản mới nhất để có hiệu suất tốt nhất. Mở Cài đặt > Cài đặt chung > Cập nhật phần mềm và cài đặt bản cập nhật mới nhất nếu có."
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "4. Tối ưu hóa bộ nhớ"),
            React.createElement('p', { className: "mb-2" }, 
              "Tối ưu hóa bộ nhớ cho 92Lottery:"
            ),
            React.createElement('ul', { className: "list-disc pl-5 mt-2 space-y-1" },
              React.createElement('li', null, "Đóng các ứng dụng không cần thiết bằng cách vuốt lên từ dưới cùng (iPhone X trở lên) hoặc nhấn đúp vào nút Home (iPhone 8 trở xuống)"),
              React.createElement('li', null, "Khởi động lại iPhone thường xuyên để giải phóng bộ nhớ")
            )
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "5. Thêm vào màn hình chính"),
            React.createElement('p', { className: "mb-2" }, 
              "Thêm 92Lottery vào màn hình chính để truy cập nhanh chóng:"
            ),
            React.createElement('ol', { className: "list-decimal pl-5 mt-2 space-y-1" },
              React.createElement('li', null, "Mở Safari và truy cập 92lottery.dev"),
              React.createElement('li', null, "Nhấn vào biểu tượng Chia sẻ (hình vuông với mũi tên hướng lên) ở dưới cùng"),
              React.createElement('li', null, "Chọn 'Thêm vào màn hình chính'"),
              React.createElement('li', null, "Đặt tên và nhấn 'Thêm'")
            )
          )
        ),
        
        // Phiên bản AMP
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Sử dụng phiên bản AMP của 92Lottery"),
        
        React.createElement('div', { className: "bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8" },
          React.createElement('p', { className: "mb-4" }, 
            "92Lottery cung cấp phiên bản AMP (Accelerated Mobile Pages) để tăng tốc độ tải trang trên thiết bị di động. Phiên bản AMP có những ưu điểm sau:"
          ),
          React.createElement('ul', { className: "list-disc pl-5 space-y-2" },
            React.createElement('li', null, "Tốc độ tải trang nhanh hơn gấp 4 lần so với phiên bản thông thường"),
            React.createElement('li', null, "Tiết kiệm dữ liệu di động"),
            React.createElement('li', null, "Trải nghiệm mượt mà ngay cả khi kết nối internet chậm"),
            React.createElement('li', null, "Giao diện đơn giản, dễ sử dụng")
          ),
          React.createElement('p', { className: "mt-4" }, 
            "Để truy cập phiên bản AMP của 92Lottery, hãy truy cập: ",
            React.createElement('a', { 
              href: "/amp/", 
              className: "text-blue-600 hover:text-blue-800 font-semibold"
            }, "92lottery.dev/amp/")
          )
        ),
        
        // So sánh ứng dụng và trình duyệt
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "So sánh: Ứng dụng vs Trình duyệt vs AMP"),
        
        React.createElement('div', { className: "overflow-x-auto mb-8" },
          React.createElement('table', { className: "w-full border-collapse" },
            React.createElement('thead', null,
              React.createElement('tr', { className: "bg-gray-100" },
                React.createElement('th', { className: "border border-gray-300 p-2 text-left" }, "Tính năng"),
                React.createElement('th', { className: "border border-gray-300 p-2 text-center" }, "Ứng dụng"),
                React.createElement('th', { className: "border border-gray-300 p-2 text-center" }, "Trình duyệt"),
                React.createElement('th', { className: "border border-gray-300 p-2 text-center" }, "AMP")
              )
            ),
            React.createElement('tbody', null,
              React.createElement('tr', null,
                React.createElement('td', { className: "border border-gray-300 p-2" }, "Tốc độ tải"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐⭐⭐⭐"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐⭐"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐⭐⭐")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border border-gray-300 p-2" }, "Tiết kiệm dữ liệu"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐⭐⭐"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐⭐⭐⭐")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border border-gray-300 p-2" }, "Trải nghiệm người dùng"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐⭐⭐⭐"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐⭐"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐⭐")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border border-gray-300 p-2" }, "Tính năng đầy đủ"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐⭐⭐⭐"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐⭐⭐"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border border-gray-300 p-2" }, "Thông báo"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐⭐⭐⭐"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "❌")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border border-gray-300 p-2" }, "Bảo mật"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐⭐⭐⭐"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐⭐"),
                React.createElement('td', { className: "border border-gray-300 p-2 text-center" }, "⭐⭐⭐")
              )
            )
          )
        ),
        
        // FAQ Section
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Câu hỏi thường gặp về tối ưu mobile 92Lottery"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          faqItems.map((faq, index) => 
            React.createElement('div', { key: index, className: "border-b border-gray-200 pb-4" },
              React.createElement('h3', { className: "text-xl font-semibold mb-2" }, faq.question),
              React.createElement('p', null, faq.answer)
            )
          )
        ),
        
        // Tải ứng dụng
        React.createElement('div', { className: "bg-gray-100 p-6 rounded-lg mt-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-4" }, "Tải ứng dụng 92Lottery ngay"),
          React.createElement('p', { className: "mb-4" }, 
            "Để có trải nghiệm tốt nhất trên điện thoại di động, hãy tải ứng dụng 92Lottery ngay hôm nay. Ứng dụng được tối ưu hóa đặc biệt cho điện thoại di động, mang lại trải nghiệm mượt mà và nhanh chóng."
          ),
          React.createElement('div', { className: "mt-4 flex justify-center" },
            React.createElement(Link, { 
              href: "/app-92lottery", 
              className: "bg-[#bc2022] text-white px-6 py-3 rounded-md hover:bg-[#a51b1b] transition-colors font-bold"
            }, "Tải ứng dụng 92Lottery")
          )
        )
      )
    )
  );
}
