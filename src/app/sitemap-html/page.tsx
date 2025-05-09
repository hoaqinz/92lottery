import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sitemap 92Lottery - Sơ đồ trang web | 92Lottery',
  description: 'Sitemap 92Lottery - Sơ đồ trang web giúp bạn dễ dàng tìm kiếm và truy cập tất cả các trang trên 92lottery.dev.',
  keywords: ['sitemap 92lottery', 'sơ đồ trang web 92lottery', 'tất cả trang 92lottery', 'danh sách trang 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/sitemap-html',
    languages: {
      'vi': 'https://92lottery.dev/sitemap-html',
      'x-default': 'https://92lottery.dev/sitemap-html'
    }
  },
};

export default function SitemapPage() {
  // Danh sách tất cả các trang
  const pages = [
    {
      category: "Trang chính",
      links: [
        { title: "Trang chủ", url: "/" },
        { title: "Đăng nhập", url: "/login" },
        { title: "Đăng ký", url: "/register" },
        { title: "Lottery", url: "/lottery" },
        { title: "Tất cả về 92Lottery", url: "/tat-ca-ve-92lottery" }
      ]
    },
    {
      category: "Hướng dẫn cơ bản",
      links: [
        { title: "Giới thiệu", url: "/gioi-thieu" },
        { title: "Hướng dẫn đăng ký", url: "/huong-dan-dang-ky" },
        { title: "Hướng dẫn đăng nhập", url: "/huong-dan-dang-nhap" },
        { title: "Hướng dẫn nạp tiền", url: "/huong-dan-nap-tien" },
        { title: "Rút tiền 92Lottery", url: "/rut-tien-92lottery" }
      ]
    },
    {
      category: "Thông tin và đánh giá",
      links: [
        { title: "92Lottery có lừa đảo không?", url: "/92lottery-co-lua-dao-khong" },
        { title: "92Lottery bị sập", url: "/92lottery-bi-sap" },
        { title: "92Lottery Telegram", url: "/92lottery-telegram" },
        { title: "92Lottery Club", url: "/92lottery-club" },
        { title: "92Lottery Mini Game", url: "/92lottery-mini-game" },
        { title: "App 92Lottery", url: "/app-92lottery" }
      ]
    },
    {
      category: "Bài viết chuyên sâu",
      links: [
        { title: "Bảo mật tài khoản 92Lottery", url: "/bao-mat-tai-khoan-92lottery" },
        { title: "Cách chơi 92Lottery hiệu quả", url: "/cach-choi-92lottery-hieu-qua" },
        { title: "Cộng đồng 92Lottery", url: "/cong-dong-92lottery" },
        { title: "Đánh giá 92Lottery 2025", url: "/danh-gia-92lottery-2025" },
        { title: "Lịch sử phát triển 92Lottery", url: "/lich-su-phat-trien-92lottery" },
        { title: "So sánh 92Lottery", url: "/so-sanh-92lottery" }
      ]
    },
    {
      category: "Trang kỹ thuật",
      links: [
        { title: "Sitemap XML", url: "/sitemap.xml" },
        { title: "Robots.txt", url: "/robots.txt" }
      ]
    }
  ];

  return (
    <>
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
            <li className="text-gray-700">Sitemap</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">Sitemap 92Lottery - Sơ đồ trang web</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Dưới đây là danh sách tất cả các trang trên 92Lottery. Sitemap này giúp bạn dễ dàng tìm kiếm và truy cập thông tin bạn cần.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {pages.map((category, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold mb-3 text-[#bc2022]">{category.category}</h2>
                <ul className="space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="flex items-center">
                      <span className="text-[#bc2022] mr-2">•</span>
                      <Link href={link.url} className="text-blue-600 hover:text-blue-800">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-semibold mb-4">Thông tin liên hệ 92Lottery</h2>
            <ul className="space-y-2">
              <li>Thương hiệu: 92Lottery</li>
              <li>Website: <Link href="/" className="text-blue-600 hover:text-blue-800">https://92lottery.dev</Link></li>
              <li>Email: support@92lottery.dev</li>
              <li>Số điện thoại: 0988 587 888</li>
              <li>Địa chỉ: 228 Trần Duy Hưng, Hà Nội, Việt Nam</li>
              <li>Zipcode: 100000</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
