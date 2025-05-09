import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Giấy phép và Quy định 92Lottery - Hoạt động hợp pháp và minh bạch | 92Lottery',
  description: 'Thông tin chi tiết về giấy phép hoạt động, quy định pháp lý và cam kết tuân thủ của 92Lottery. Tìm hiểu về tính hợp pháp và minh bạch của nhà cái.',
  keywords: ['giấy phép 92lottery', 'quy định 92lottery', 'pháp lý 92lottery', 'hợp pháp 92lottery', 'minh bạch 92lottery', 'tuân thủ 92lottery', 'giấy phép cá cược', 'quy định cá cược'],
  alternates: {
    canonical: 'https://92lottery.dev/giay-phep-va-quy-dinh-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/giay-phep-va-quy-dinh-92lottery',
      'x-default': 'https://92lottery.dev/giay-phep-va-quy-dinh-92lottery'
    }
  },
};

export default function LicenseAndRegulationsPage() {
  // FAQ Schema
  const faqItems = [
    {
      question: "92Lottery có giấy phép hoạt động hợp pháp không?",
      answer: "Có, 92Lottery hoạt động dưới giấy phép cá cược trực tuyến số PAGCOR-OCGLA-2023/92L được cấp bởi Cơ quan Quản lý Trò chơi và Casino Philippines (PAGCOR). Giấy phép này cho phép 92Lottery cung cấp dịch vụ cá cược trực tuyến hợp pháp, bao gồm xổ số, casino và các trò chơi khác."
    },
    {
      question: "92Lottery tuân thủ những quy định pháp lý nào?",
      answer: "92Lottery tuân thủ nghiêm ngặt các quy định về cá cược trực tuyến quốc tế, bao gồm quy định về phòng chống rửa tiền (AML), bảo vệ người chơi, cá cược có trách nhiệm, và bảo mật thông tin cá nhân. Chúng tôi cũng tuân thủ các tiêu chuẩn bảo mật dữ liệu như PCI DSS và ISO 27001."
    },
    {
      question: "Làm thế nào 92Lottery đảm bảo tính công bằng của trò chơi?",
      answer: "92Lottery sử dụng Bộ sinh số ngẫu nhiên (RNG) được chứng nhận bởi iTech Labs - đơn vị kiểm định độc lập hàng đầu thế giới. Hệ thống này được kiểm tra định kỳ để đảm bảo tính ngẫu nhiên và công bằng tuyệt đối của mọi kết quả trò chơi. Ngoài ra, chúng tôi còn công khai tỷ lệ trả thưởng (RTP) của tất cả các trò chơi."
    },
    {
      question: "92Lottery có chính sách bảo vệ người chơi như thế nào?",
      answer: "92Lottery áp dụng nhiều biện pháp bảo vệ người chơi, bao gồm: công cụ tự giới hạn cược, tính năng tự loại trừ tạm thời hoặc vĩnh viễn, hệ thống phát hiện hành vi cá cược có vấn đề, và đội ngũ hỗ trợ được đào tạo về cá cược có trách nhiệm. Chúng tôi cũng có quỹ bảo vệ người chơi để đảm bảo thanh toán đầy đủ các khoản thắng cược."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Giấy phép và Quy định 92Lottery", url: "https://92lottery.dev/giay-phep-va-quy-dinh-92lottery" }
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
          React.createElement('li', { className: "text-gray-700" }, "Giấy phép và Quy định 92Lottery")
        )
      )
    ),
    
    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "Giấy phép và Quy định 92Lottery - Hoạt động hợp pháp và minh bạch"),
      
      React.createElement('div', { className: "prose max-w-none" },
        React.createElement('p', { className: "text-lg mb-6" }, 
          "92Lottery tự hào là nhà cái hoạt động hợp pháp với giấy phép cá cược trực tuyến được cấp bởi cơ quan có thẩm quyền. Chúng tôi cam kết tuân thủ nghiêm ngặt các quy định pháp lý và tiêu chuẩn ngành, đảm bảo môi trường cá cược công bằng, an toàn và minh bạch cho người chơi."
        ),
        
        // Giấy phép hoạt động
        React.createElement('div', { className: "bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8" },
          React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mb-4" }, "Giấy phép hoạt động"),
          React.createElement('div', { className: "flex flex-col md:flex-row gap-6 items-center" },
            React.createElement('div', { className: "md:w-1/3 flex justify-center" },
              React.createElement('div', { className: "relative w-full h-48 border-2 border-gray-300 rounded-lg overflow-hidden flex items-center justify-center bg-white" },
                React.createElement('div', { className: "text-center p-4" },
                  React.createElement('div', { className: "text-[#bc2022] font-bold text-xl mb-2" }, "PAGCOR"),
                  React.createElement('div', { className: "text-gray-700 font-semibold" }, "Giấy phép cá cược trực tuyến"),
                  React.createElement('div', { className: "text-gray-700 mt-2" }, "Số: PAGCOR-OCGLA-2023/92L"),
                  React.createElement('div', { className: "text-gray-700 mt-2" }, "Ngày cấp: 15/01/2023"),
                  React.createElement('div', { className: "text-gray-700" }, "Hiệu lực: 15/01/2023 - 14/01/2028")
                )
              )
            ),
            React.createElement('div', { className: "md:w-2/3" },
              React.createElement('p', { className: "mb-4" }, 
                "92Lottery hoạt động dưới giấy phép cá cược trực tuyến số PAGCOR-OCGLA-2023/92L được cấp bởi Cơ quan Quản lý Trò chơi và Casino Philippines (PAGCOR) - một trong những cơ quan quản lý cá cược uy tín hàng đầu khu vực Châu Á."
              ),
              React.createElement('p', { className: "mb-4" }, 
                "Giấy phép này cho phép 92Lottery cung cấp dịch vụ cá cược trực tuyến hợp pháp, bao gồm xổ số, casino và các trò chơi khác. Việc sở hữu giấy phép từ PAGCOR đồng nghĩa với việc 92Lottery phải tuân thủ các tiêu chuẩn nghiêm ngặt về bảo mật, công bằng và minh bạch."
              ),
              React.createElement('p', null, 
                "Giấy phép của chúng tôi được gia hạn và kiểm tra định kỳ, đảm bảo 92Lottery luôn duy trì các tiêu chuẩn cao nhất trong hoạt động kinh doanh."
              )
            )
          )
        ),
        
        // Các quy định tuân thủ
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Các quy định tuân thủ"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "Phòng chống rửa tiền (AML)"),
            React.createElement('p', null, 
              "92Lottery áp dụng các biện pháp nghiêm ngặt để phòng chống rửa tiền, bao gồm quy trình KYC (Xác minh danh tính khách hàng), giám sát giao dịch liên tục, và báo cáo các hoạt động đáng ngờ cho cơ quan chức năng. Chúng tôi tuân thủ các tiêu chuẩn quốc tế về AML như khuyến nghị của FATF (Lực lượng Đặc nhiệm Tài chính)."
            )
          ),
          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "Bảo vệ người chơi"),
            React.createElement('p', null, 
              "Chúng tôi cam kết bảo vệ quyền lợi của người chơi thông qua các biện pháp như: quỹ bảo vệ người chơi, tách biệt tiền của người chơi và công ty, công khai tỷ lệ trả thưởng, và cung cấp công cụ giúp người chơi kiểm soát hoạt động cá cược của mình."
            )
          ),
          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "Cá cược có trách nhiệm"),
            React.createElement('p', null, 
              "92Lottery khuyến khích cá cược có trách nhiệm và cung cấp nhiều công cụ để hỗ trợ người chơi, bao gồm: giới hạn nạp tiền, giới hạn cược, tự loại trừ tạm thời hoặc vĩnh viễn, và kiểm tra tự đánh giá. Chúng tôi cũng hợp tác với các tổ chức hỗ trợ người chơi gặp vấn đề về cá cược."
            )
          ),
          React.createElement('div', { className: "bg-white p-5 rounded-lg border border-gray-200" },
            React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "Bảo mật thông tin"),
            React.createElement('p', null, 
              "Bảo vệ thông tin cá nhân của người chơi là ưu tiên hàng đầu của 92Lottery. Chúng tôi tuân thủ các tiêu chuẩn bảo mật dữ liệu như PCI DSS và ISO 27001, sử dụng mã hóa SSL 256-bit, và thực hiện kiểm tra bảo mật định kỳ để đảm bảo an toàn tuyệt đối cho thông tin của người chơi."
            )
          )
        ),
        
        // Tính công bằng của trò chơi
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Tính công bằng của trò chơi"),
        
        React.createElement('div', { className: "bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8" },
          React.createElement('p', { className: "mb-4" }, 
            "92Lottery cam kết đảm bảo tính công bằng tuyệt đối trong mọi trò chơi. Chúng tôi sử dụng Bộ sinh số ngẫu nhiên (RNG) được chứng nhận bởi iTech Labs - đơn vị kiểm định độc lập hàng đầu thế giới."
          ),
          React.createElement('p', { className: "mb-4" }, 
            "Hệ thống RNG của chúng tôi được kiểm tra định kỳ để đảm bảo tính ngẫu nhiên và không thể dự đoán của mọi kết quả trò chơi. Điều này đồng nghĩa với việc mọi người chơi đều có cơ hội thắng như nhau, không có bất kỳ sự can thiệp nào từ phía nhà cái."
          ),
          React.createElement('p', null, 
            "Ngoài ra, chúng tôi còn công khai tỷ lệ trả thưởng (RTP) của tất cả các trò chơi, giúp người chơi có thông tin đầy đủ trước khi tham gia."
          )
        ),
        
        // Chứng nhận và đối tác
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Chứng nhận và đối tác"),
        
        React.createElement('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" },
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center justify-center text-center" },
            React.createElement('div', { className: "font-bold text-lg mb-2" }, "iTech Labs"),
            React.createElement('div', { className: "text-sm text-gray-600" }, "Chứng nhận RNG")
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center justify-center text-center" },
            React.createElement('div', { className: "font-bold text-lg mb-2" }, "eCOGRA"),
            React.createElement('div', { className: "text-sm text-gray-600" }, "Chơi công bằng")
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center justify-center text-center" },
            React.createElement('div', { className: "font-bold text-lg mb-2" }, "PCI DSS"),
            React.createElement('div', { className: "text-sm text-gray-600" }, "Bảo mật thanh toán")
          ),
          React.createElement('div', { className: "bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center justify-center text-center" },
            React.createElement('div', { className: "font-bold text-lg mb-2" }, "ISO 27001"),
            React.createElement('div', { className: "text-sm text-gray-600" }, "Bảo mật thông tin")
          )
        ),
        
        // FAQ Section
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Câu hỏi thường gặp về giấy phép và quy định"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          faqItems.map((faq, index) => 
            React.createElement('div', { key: index, className: "border-b border-gray-200 pb-4" },
              React.createElement('h3', { className: "text-xl font-semibold mb-2" }, faq.question),
              React.createElement('p', null, faq.answer)
            )
          )
        ),
        
        // Cam kết của 92Lottery
        React.createElement('div', { className: "bg-gray-100 p-6 rounded-lg mt-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-4" }, "Cam kết của 92Lottery"),
          React.createElement('p', { className: "mb-4" }, 
            "92Lottery cam kết hoạt động với tiêu chuẩn cao nhất về tính minh bạch, công bằng và trách nhiệm. Chúng tôi không chỉ tuân thủ các quy định pháp lý hiện hành mà còn nỗ lực vượt trội để đảm bảo trải nghiệm cá cược an toàn và thú vị cho người chơi."
          ),
          React.createElement('p', null, 
            "Nếu bạn có bất kỳ câu hỏi nào về giấy phép hoặc quy định của 92Lottery, vui lòng liên hệ với đội ngũ hỗ trợ khách hàng của chúng tôi qua email support@92lottery.dev hoặc số điện thoại 0988 587 888."
          )
        )
      )
    )
  );
}
