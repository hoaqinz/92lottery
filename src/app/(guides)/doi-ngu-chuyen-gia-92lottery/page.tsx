import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Đội ngũ chuyên gia 92Lottery - Những người đứng sau thành công | 92Lottery',
  description: 'Gặp gỡ đội ngũ chuyên gia đứng sau thành công của 92Lottery - Những người có kinh nghiệm hàng chục năm trong ngành xổ số và cá cược trực tuyến.',
  keywords: ['đội ngũ 92lottery', 'chuyên gia 92lottery', 'nhân sự 92lottery', 'lãnh đạo 92lottery', 'người sáng lập 92lottery', 'chuyên gia xổ số', 'chuyên gia cá cược'],
  alternates: {
    canonical: 'https://92lottery.dev/doi-ngu-chuyen-gia-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/doi-ngu-chuyen-gia-92lottery',
      'x-default': 'https://92lottery.dev/doi-ngu-chuyen-gia-92lottery'
    }
  },
};

export default function ExpertTeamPage() {
  // Danh sách chuyên gia
  const experts = [
    {
      name: "Nguyễn Văn Minh",
      position: "Người sáng lập & CEO",
      image: "/anh/avata/no1.png",
      experience: "15+ năm kinh nghiệm trong ngành xổ số và cá cược trực tuyến",
      education: "Thạc sĩ Quản trị Kinh doanh, Đại học Kinh tế TP.HCM",
      description: "Ông Nguyễn Văn Minh là người sáng lập và CEO của 92Lottery. Với hơn 15 năm kinh nghiệm trong ngành xổ số và cá cược trực tuyến, ông đã xây dựng 92Lottery trở thành một trong những nhà cái uy tín hàng đầu Việt Nam. Trước khi thành lập 92Lottery, ông từng giữ vị trí quản lý cấp cao tại nhiều công ty cá cược quốc tế."
    },
    {
      name: "Trần Thị Hương",
      position: "Giám đốc Công nghệ (CTO)",
      image: "/anh/avata/no2.png",
      experience: "12+ năm kinh nghiệm phát triển phần mềm và bảo mật thông tin",
      education: "Tiến sĩ Khoa học Máy tính, Đại học Bách Khoa Hà Nội",
      description: "Bà Trần Thị Hương là người đứng sau công nghệ tiên tiến của 92Lottery. Với bằng Tiến sĩ Khoa học Máy tính và hơn 12 năm kinh nghiệm, bà đã phát triển hệ thống bảo mật đa lớp và nền tảng cá cược tốc độ cao cho 92Lottery. Dưới sự lãnh đạo của bà, 92Lottery luôn đi đầu về công nghệ với giao diện thân thiện và tốc độ xử lý giao dịch nhanh chóng."
    },
    {
      name: "Lê Quang Đạt",
      position: "Giám đốc Sản phẩm (CPO)",
      image: "/anh/avata/no3.png",
      experience: "10+ năm kinh nghiệm phát triển sản phẩm cá cược và xổ số",
      education: "Thạc sĩ Thiết kế Trải nghiệm Người dùng, Đại học Quốc gia Singapore",
      description: "Ông Lê Quang Đạt là người chịu trách nhiệm phát triển các sản phẩm độc quyền của 92Lottery như WinGo, K3 Lotre, 5D Lotre và TRX Win. Với kiến thức sâu rộng về hành vi người dùng và xu hướng thị trường, ông đã tạo ra những trò chơi hấp dẫn với tỷ lệ trả thưởng cao, thu hút hàng triệu người chơi mỗi tháng."
    },
    {
      name: "Phạm Thanh Tùng",
      position: "Giám đốc Dịch vụ Khách hàng",
      image: "/anh/avata/no4.png",
      experience: "8+ năm kinh nghiệm quản lý dịch vụ khách hàng",
      education: "Cử nhân Quản trị Kinh doanh, Đại học Ngoại thương",
      description: "Ông Phạm Thanh Tùng lãnh đạo đội ngũ hỗ trợ khách hàng 24/7 của 92Lottery. Dưới sự chỉ đạo của ông, 92Lottery đã xây dựng được đội ngũ nhân viên hỗ trợ chuyên nghiệp, thân thiện và hiệu quả, sẵn sàng giải quyết mọi vấn đề của khách hàng trong thời gian ngắn nhất."
    },
    {
      name: "Ngô Thị Mai Anh",
      position: "Giám đốc Tài chính (CFO)",
      image: "/anh/avata/no5.png",
      experience: "14+ năm kinh nghiệm trong lĩnh vực tài chính và thanh toán điện tử",
      education: "Thạc sĩ Tài chính Ngân hàng, Đại học London",
      description: "Bà Ngô Thị Mai Anh quản lý toàn bộ hoạt động tài chính của 92Lottery. Với kinh nghiệm dày dặn trong lĩnh vực tài chính và thanh toán điện tử, bà đã xây dựng hệ thống nạp rút tiền an toàn, nhanh chóng với nhiều phương thức thanh toán đa dạng, đáp ứng nhu cầu của người chơi Việt Nam."
    }
  ];

  // FAQ Schema
  const faqItems = [
    {
      question: "Đội ngũ chuyên gia của 92Lottery gồm những ai?",
      answer: "Đội ngũ chuyên gia của 92Lottery bao gồm những người có kinh nghiệm hàng chục năm trong ngành xổ số và cá cược trực tuyến, dẫn đầu bởi CEO Nguyễn Văn Minh, CTO Trần Thị Hương, CPO Lê Quang Đạt, Giám đốc Dịch vụ Khách hàng Phạm Thanh Tùng và CFO Ngô Thị Mai Anh."
    },
    {
      question: "Người sáng lập 92Lottery là ai?",
      answer: "Người sáng lập 92Lottery là ông Nguyễn Văn Minh - hiện đang giữ vị trí CEO. Ông có hơn 15 năm kinh nghiệm trong ngành xổ số và cá cược trực tuyến, từng giữ vị trí quản lý cấp cao tại nhiều công ty cá cược quốc tế trước khi thành lập 92Lottery."
    },
    {
      question: "Ai phát triển các trò chơi độc quyền của 92Lottery?",
      answer: "Ông Lê Quang Đạt - Giám đốc Sản phẩm (CPO) của 92Lottery là người chịu trách nhiệm phát triển các sản phẩm độc quyền như WinGo, K3 Lotre, 5D Lotre và TRX Win. Ông có hơn 10 năm kinh nghiệm phát triển sản phẩm cá cược và xổ số."
    },
    {
      question: "92Lottery có đội ngũ hỗ trợ khách hàng như thế nào?",
      answer: "92Lottery có đội ngũ hỗ trợ khách hàng 24/7 dưới sự lãnh đạo của ông Phạm Thanh Tùng. Đội ngũ này được đào tạo chuyên nghiệp, thân thiện và hiệu quả, sẵn sàng giải quyết mọi vấn đề của khách hàng trong thời gian ngắn nhất qua nhiều kênh như live chat, email, điện thoại và Telegram."
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  const faqSchemaString = JSON.stringify(faqSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://92lottery.dev" },
    { name: "Đội ngũ chuyên gia 92Lottery", url: "https://92lottery.dev/doi-ngu-chuyen-gia-92lottery" }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const breadcrumbSchemaString = JSON.stringify(breadcrumbSchema);

  // Person Schema
  const personSchemas = experts.map(expert => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": expert.name,
    "jobTitle": expert.position,
    "worksFor": {
      "@type": "Organization",
      "name": "92Lottery",
      "url": "https://92lottery.dev"
    },
    "description": expert.description,
    "image": `https://92lottery.dev${expert.image}`
  }));
  const personSchemasString = JSON.stringify(personSchemas);

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
    React.createElement('script', {
      key: 'person-schemas',
      type: 'application/ld+json',
      dangerouslySetInnerHTML: { __html: personSchemasString }
    }),
    
    // Breadcrumb
    React.createElement('div', { className: "bg-gray-100 py-2 px-4" },
      React.createElement('nav', { className: "text-sm" },
        React.createElement('ol', { className: "list-none p-0 inline-flex" },
          React.createElement('li', { className: "flex items-center" },
            React.createElement(Link, { href: "/", className: "text-blue-600 hover:text-blue-800" }, "Trang chủ"),
            React.createElement('span', { className: "mx-2" }, "/")
          ),
          React.createElement('li', { className: "text-gray-700" }, "Đội ngũ chuyên gia 92Lottery")
        )
      )
    ),
    
    // Main Content
    React.createElement('div', { className: "px-4 py-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-[#bc2022] mb-6" }, "Đội ngũ chuyên gia 92Lottery - Những người đứng sau thành công"),
      
      React.createElement('div', { className: "prose max-w-none" },
        React.createElement('p', { className: "text-lg mb-6" }, 
          "Thành công của 92Lottery không chỉ đến từ nền tảng công nghệ tiên tiến hay các trò chơi hấp dẫn, mà còn nhờ vào đội ngũ chuyên gia giàu kinh nghiệm đứng sau. Họ là những người có kinh nghiệm hàng chục năm trong ngành xổ số và cá cược trực tuyến, luôn nỗ lực không ngừng để mang đến trải nghiệm tốt nhất cho người chơi."
        ),
        
        // Danh sách chuyên gia
        React.createElement('div', { className: "space-y-8 mt-8" },
          experts.map((expert, index) => 
            React.createElement('div', { key: index, className: "bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col md:flex-row gap-6" },
              React.createElement('div', { className: "md:w-1/4 flex justify-center" },
                React.createElement('div', { className: "relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#bc2022]" },
                  React.createElement(Image, { 
                    src: expert.image,
                    alt: expert.name,
                    fill: true,
                    style: { objectFit: 'cover' }
                  })
                )
              ),
              React.createElement('div', { className: "md:w-3/4" },
                React.createElement('h2', { className: "text-2xl font-bold text-[#bc2022]" }, expert.name),
                React.createElement('p', { className: "text-lg font-semibold mb-2" }, expert.position),
                React.createElement('div', { className: "space-y-2 mb-4" },
                  React.createElement('p', { className: "flex items-center" },
                    React.createElement('span', { className: "font-semibold mr-2" }, "Kinh nghiệm:"),
                    expert.experience
                  ),
                  React.createElement('p', { className: "flex items-center" },
                    React.createElement('span', { className: "font-semibold mr-2" }, "Học vấn:"),
                    expert.education
                  )
                ),
                React.createElement('p', { className: "text-gray-700" }, expert.description)
              )
            )
          )
        ),
        
        // Giới thiệu về đội ngũ
        React.createElement('div', { className: "mt-10" },
          React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mb-4" }, "Tại sao đội ngũ chuyên gia là yếu tố quan trọng của 92Lottery?"),
          React.createElement('p', { className: "mb-4" }, 
            "Đội ngũ chuyên gia của 92Lottery không chỉ mang đến kinh nghiệm và chuyên môn trong ngành, mà còn thể hiện cam kết của chúng tôi về tính minh bạch và uy tín. Mỗi thành viên trong đội ngũ đều có trách nhiệm đảm bảo 92Lottery luôn tuân thủ các quy định pháp luật và cung cấp môi trường cá cược công bằng, an toàn cho người chơi."
          ),
          React.createElement('p', { className: "mb-4" }, 
            "Với đội ngũ lãnh đạo giàu kinh nghiệm, 92Lottery không ngừng đổi mới và phát triển, mang đến những sản phẩm và dịch vụ tốt nhất cho người chơi Việt Nam. Chúng tôi tự hào về đội ngũ chuyên gia của mình và cam kết tiếp tục nâng cao chất lượng dịch vụ để đáp ứng mong đợi của khách hàng."
          )
        ),
        
        // FAQ Section
        React.createElement('h2', { className: "text-2xl font-semibold text-[#bc2022] mt-8 mb-4" }, "Câu hỏi thường gặp về đội ngũ chuyên gia 92Lottery"),
        
        React.createElement('div', { className: "space-y-6 mb-8" },
          faqItems.map((faq, index) => 
            React.createElement('div', { key: index, className: "border-b border-gray-200 pb-4" },
              React.createElement('h3', { className: "text-xl font-semibold mb-2" }, faq.question),
              React.createElement('p', null, faq.answer)
            )
          )
        ),
        
        // Liên hệ
        React.createElement('div', { className: "bg-gray-100 p-6 rounded-lg mt-8" },
          React.createElement('h3', { className: "text-xl font-semibold mb-4" }, "Liên hệ với đội ngũ chuyên gia 92Lottery"),
          React.createElement('p', { className: "mb-4" }, "Nếu bạn có câu hỏi hoặc góp ý, đừng ngần ngại liên hệ với đội ngũ chuyên gia của chúng tôi:"),
          React.createElement('ul', { className: "space-y-2" },
            React.createElement('li', null, "Email: support@92lottery.dev"),
            React.createElement('li', null, "Số điện thoại: 0988 587 888"),
            React.createElement('li', null, "Telegram: ", 
              React.createElement(Link, { href: "/92lottery-telegram", className: "text-blue-600 hover:text-blue-800" }, "@92lottery_official")
            )
          )
        )
      )
    )
  );
}
