import type { Metadata, Viewport } from "next";
import "./globals.css";
import { generateGamblingWebsiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "92Lottery - Cá cược thể thao & Casino trực tuyến | Xổ số, Lottery",
  description: "92Lottery - Trang web cá cược xổ số, lottery, thể thao và casino trực tuyến hàng đầu Việt Nam. Đăng ký ngay để nhận khuyến mãi hấp dẫn từ 92Lottery.",
  keywords: ["92lottery", "cá cược", "xổ số", "lottery", "thể thao", "casino", "trò chơi trực tuyến", "đánh bài", "cá cược trực tuyến"],
  authors: [{ name: "92Lottery" }],
  creator: "92Lottery",
  publisher: "92Lottery",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://92lottery.com",
    title: "92Lottery - Cá cược xổ số & Casino trực tuyến hàng đầu",
    description: "92Lottery - Trang web cá cược xổ số, lottery, thể thao và casino trực tuyến hàng đầu Việt Nam. Đăng ký ngay để nhận khuyến mãi hấp dẫn.",
    siteName: "92Lottery",
    images: [
      {
        url: "https://92lottery.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "92Lottery - Cá cược xổ số & Casino trực tuyến",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "92Lottery - Cá cược xổ số & Casino trực tuyến hàng đầu",
    description: "92Lottery - Trang web cá cược xổ số, lottery, thể thao và casino trực tuyến hàng đầu Việt Nam.",
    creator: "@92lottery",
    images: ["https://92lottery.com/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://92lottery.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#bc2022",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Generate Schema.org JSON-LD
  const websiteSchema = generateGamblingWebsiteSchema();
  const schemaString = JSON.stringify(websiteSchema);

  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://ext.same-assets.com" />
        <link rel="dns-prefetch" href="https://ext.same-assets.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaString }}
        />
      </head>
      <body className="flex justify-center min-h-screen items-start bg-gray-100 antialiased">
        <div className="w-[420px] min-h-screen bg-white rounded-lg shadow-2xl relative overflow-x-hidden max-w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
