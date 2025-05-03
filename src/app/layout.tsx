import type { Metadata, Viewport } from "next";
import "./globals.css";
import { generateGamblingWebsiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL('https://92lottery.dev'),
  title: {
    template: '%s | 92Lottery - Cá cược xổ số & Casino trực tuyến',
    default: '92Lottery - Xổ số & Casino trực tuyến | Cá cược uy tín hàng đầu Việt Nam'
  },
  description: "92Lottery - Trang web cá cược xổ số, lottery, thể thao và casino trực tuyến hàng đầu Việt Nam với tỷ lệ trả thưởng cao nhất thị trường. Đăng ký ngay để nhận khuyến mãi đặc biệt từ 92lottery.",
  keywords: ["92lottery", "cá cược", "xổ số", "lottery", "thể thao", "casino", "trò chơi trực tuyến", "đánh bài", "cá cược trực tuyến", "nhà cái uy tín", "92lottery việt nam"],
  authors: [{ name: "92Lottery" }],
  creator: "92Lottery",
  publisher: "92Lottery",
  applicationName: "92Lottery",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://92lottery.dev",
    title: "92Lottery - Cá cược xổ số & Casino trực tuyến hàng đầu",
    description: "92Lottery - Trang web cá cược xổ số, lottery, thể thao và casino trực tuyến hàng đầu Việt Nam. Đăng ký ngay để nhận khuyến mãi hấp dẫn.",
    siteName: "92Lottery",
    images: [
      {
        url: "https://92lottery.dev/images/og-image.jpg",
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
    images: ["https://92lottery.dev/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://92lottery.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "gambling",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#bc2022",
  colorScheme: "light",
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
    <html lang="vi" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://ext.same-assets.com" />
        <link rel="dns-prefetch" href="https://ext.same-assets.com" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="92Lottery" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaString }}
        />
      </head>
      <body className="flex justify-center min-h-screen items-start bg-gray-100 antialiased">
        <div className="w-full max-w-[420px] min-h-screen bg-white rounded-lg shadow-2xl relative overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
