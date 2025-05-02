import { Metadata } from 'next';
import Image from 'next/image';
import { generateLotteryGameSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { SEO } from '@/lib/constants';
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

export const metadata: Metadata = {
  title: '92Lottery - Xổ số & Lottery trực tuyến | Cơ hội trúng thưởng lớn',
  description: 'Tham gia xổ số và lottery trực tuyến tại 92Lottery với nhiều giải thưởng hấp dẫn. Đa dạng các loại xổ số, dễ chơi, dễ trúng thưởng.',
  keywords: ['92lottery', 'xổ số', 'lottery', 'xổ số trực tuyến', 'lottery trực tuyến', 'trúng thưởng', 'giải thưởng lớn'],
};

// Danh sách các trò chơi lottery
const lotteryGames = [
  {
    name: "92Lottery Win Go",
    description: "Đoán số Xanh/Đỏ/Tím để giành chiến thắng tại 92Lottery",
    image: "/icon-wingo.png",
    url: "https://92lottery.com/lottery/win-go",
    provider: "92Lottery"
  },
  {
    name: "92Lottery K3",
    description: "Đoán số Lớn/Nhỏ/Lẻ/Chẵn tại 92Lottery",
    image: "/icon-k3.png",
    url: "https://92lottery.com/lottery/k3",
    provider: "92Lottery"
  },
  {
    name: "92Lottery 5D",
    description: "Đoán số Lớn/Nhỏ/Lẻ/Chẵn tại 92Lottery",
    image: "/icon-5d.png",
    url: "https://92lottery.com/lottery/5d",
    provider: "92Lottery"
  },
  {
    name: "92Lottery Trx Win",
    description: "Đoán số Xanh/Đỏ/Tím để giành chiến thắng tại 92Lottery",
    image: "/icon-trx-win.png",
    url: "https://92lottery.com/lottery/trx-win",
    provider: "92Lottery"
  }
];

// Breadcrumb items
const breadcrumbItems = [
  { name: "Trang chủ", url: "https://92lottery.com" },
  { name: "Xổ số & Lottery", url: "https://92lottery.com/lottery" }
];

export default function LotteryPage() {
  // Generate Schema.org JSON-LD for lottery games
  const gameSchemas = lotteryGames.map(game => generateLotteryGameSchema(game));
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const schemaString = JSON.stringify([...gameSchemas, breadcrumbSchema]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
      <Header />

      <main className="flex-1 px-4 py-6 bg-white">
        <h1 className="text-2xl font-bold text-[#bc2022] mb-6">92Lottery - Xổ số & Lottery trực tuyến</h1>

        <p className="text-gray-700 mb-6">
          Tham gia xổ số và lottery trực tuyến tại 92Lottery với nhiều giải thưởng hấp dẫn.
          Chúng tôi cung cấp đa dạng các loại xổ số, dễ chơi, dễ trúng thưởng, với tỷ lệ trả thưởng cao nhất thị trường.
        </p>

        <h2 className="text-xl font-semibold text-[#bc2022] mb-4">Các trò chơi xổ số phổ biến</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {lotteryGames.map((game, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={game.image}
                  alt={game.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <h3 className="text-lg font-semibold text-[#bc2022]">{game.name}</h3>
              </div>
              <p className="text-gray-700 mb-3">{game.description}</p>
              <button className="bg-[#bc2022] text-white rounded-lg px-4 py-2 w-full hover:bg-[#a51c1e] transition-colors">
                Chơi ngay
              </button>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-[#bc2022] mb-4">Tại sao chọn 92Lottery?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-[#bc2022] mb-2">Đa dạng trò chơi</h3>
            <p className="text-gray-700">
              92Lottery cung cấp đa dạng các loại xổ số và lottery từ nhiều quốc gia khác nhau,
              đáp ứng mọi nhu cầu và sở thích của người chơi.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-[#bc2022] mb-2">Tỷ lệ trả thưởng cao</h3>
            <p className="text-gray-700">
              Chúng tôi tự hào cung cấp tỷ lệ trả thưởng cao nhất thị trường,
              giúp người chơi có cơ hội trúng thưởng lớn hơn.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-[#bc2022] mb-2">Thanh toán nhanh chóng</h3>
            <p className="text-gray-700">
              92Lottery đảm bảo quy trình thanh toán nhanh chóng và an toàn,
              giúp người chơi nhận thưởng ngay sau khi trúng.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-[#bc2022] mb-2">Hỗ trợ 24/7</h3>
            <p className="text-gray-700">
              Đội ngũ hỗ trợ khách hàng chuyên nghiệp sẵn sàng giúp đỡ bạn 24/7,
              đảm bảo trải nghiệm chơi game tốt nhất.
            </p>
          </div>
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
