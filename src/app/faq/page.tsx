import { Metadata } from 'next';
import { generateFAQSchema } from '@/lib/schema';
import { SEO } from '@/lib/constants';
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

export const metadata: Metadata = {
  title: '92Lottery - Câu hỏi thường gặp (FAQ) | Xổ số, Lottery',
  description: 'Câu hỏi thường gặp về 92Lottery - Trang web cá cược xổ số, lottery, thể thao và casino trực tuyến hàng đầu Việt Nam.',
  keywords: ['92lottery', 'faq', 'câu hỏi thường gặp', 'xổ số', 'lottery', 'hướng dẫn'],
};

// Danh sách câu hỏi thường gặp
const faqs = [
  {
    question: '92Lottery là gì?',
    answer: '92Lottery là trang web cá cược xổ số, lottery, thể thao và casino trực tuyến hàng đầu Việt Nam, cung cấp nhiều trò chơi hấp dẫn và cơ hội trúng thưởng lớn.'
  },
  {
    question: 'Làm thế nào để đăng ký tài khoản tại 92Lottery?',
    answer: 'Để đăng ký tài khoản tại 92Lottery, bạn chỉ cần truy cập trang web chính thức, nhấp vào nút "Đăng ký", điền thông tin cá nhân và làm theo hướng dẫn.'
  },
  {
    question: 'Các phương thức thanh toán nào được chấp nhận tại 92Lottery?',
    answer: '92Lottery chấp nhận nhiều phương thức thanh toán như thẻ ngân hàng, ví điện tử, chuyển khoản ngân hàng và tiền điện tử.'
  },
  {
    question: 'Làm thế nào để rút tiền từ tài khoản 92Lottery?',
    answer: 'Để rút tiền, bạn cần đăng nhập vào tài khoản, truy cập mục "Ví", chọn "Rút tiền", nhập số tiền muốn rút và phương thức thanh toán, sau đó xác nhận yêu cầu.'
  },
  {
    question: '92Lottery có an toàn không?',
    answer: '92Lottery sử dụng công nghệ mã hóa SSL tiên tiến để bảo vệ thông tin cá nhân và giao dịch của người chơi, đảm bảo an toàn tuyệt đối.'
  },
  {
    question: 'Tôi có thể chơi 92Lottery trên điện thoại di động không?',
    answer: 'Có, 92Lottery được tối ưu hóa cho cả máy tính và thiết bị di động, cho phép bạn chơi mọi lúc, mọi nơi trên điện thoại hoặc máy tính bảng.'
  },
  {
    question: 'Làm thế nào để liên hệ với bộ phận hỗ trợ khách hàng của 92Lottery?',
    answer: 'Bạn có thể liên hệ với bộ phận hỗ trợ khách hàng của 92Lottery qua live chat, email, hoặc hotline 24/7.'
  },
  {
    question: '92Lottery có chương trình khuyến mãi nào không?',
    answer: '92Lottery thường xuyên cung cấp nhiều chương trình khuyến mãi hấp dẫn như tiền thưởng chào mừng, hoàn trả, và các ưu đãi đặc biệt cho người chơi.'
  }
];

export default function FAQPage() {
  // Generate Schema.org JSON-LD for FAQ
  const faqSchema = generateFAQSchema(faqs);
  const schemaString = JSON.stringify(faqSchema);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
      <Header />
      
      <main className="flex-1 px-4 py-6 bg-white">
        <h1 className="text-2xl font-bold text-[#bc2022] mb-6">Câu hỏi thường gặp (FAQ)</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold text-[#bc2022] mb-2">{faq.question}</h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
      
      <TabBar />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaString }}
      />
    </div>
  );
}
