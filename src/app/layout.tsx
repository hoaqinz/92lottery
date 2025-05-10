import type { Metadata, Viewport } from "next";
import "./globals.css";
import { generateGamblingWebsiteSchema } from "@/lib/schema";
import { AuthProvider } from "@/contexts/AuthContext";
import AuthPopup from "@/components/AuthPopup";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://92lottery.dev'),
  title: {
    template: '%s | 92LOTTERY',
    default: '92LOTTERY - Xổ Số 1 Phút, Casino Trực Tuyến Uy Tín #1 Việt Nam'
  },
  description: "92LOTTERY là nhà cái xổ số trực tuyến uy tín hàng đầu Việt Nam, cung cấp WinGo, K3 Lotre, 5D Lotre, TRX Win và nhiều trò chơi hấp dẫn khác. Đăng ký 92LOTTERY ngay để nhận khuyến mãi 100K và trải nghiệm dịch vụ chất lượng cao.",
  keywords: ["92lottery", "trangchu92lottery", "dangky92lottery", "dangnhap92lottery", "92lotterykhuyenmai", "92lottery đăng nhập", "92lottery đăng ký", "92lottery bị sập", "92lottery telegram", "92lottery có lừa đảo không", "92lottery mini", "92lottery club", "app 92lottery", "cách đăng ký 92lottery", "rút tiền 92lottery", "nạp tiền 92lottery", "tải 92lottery", "link 92lottery", "92lottery việt nam", "WinGo", "K3 Lotre", "5D Lotre", "TRX Win"],
  authors: [{ name: "92LOTTERY" }],
  creator: "92LOTTERY",
  publisher: "92LOTTERY",
  applicationName: "92LOTTERY",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/anh/favicon.png",
    apple: "/anh/favicon.png"
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://92lottery.dev",
    title: "92LOTTERY - Xổ Số 1 Phút, Casino Trực Tuyến Uy Tín #1 Việt Nam",
    description: "92LOTTERY là nhà cái xổ số trực tuyến uy tín hàng đầu Việt Nam, cung cấp WinGo, K3 Lotre, 5D Lotre, TRX Win và nhiều trò chơi hấp dẫn khác. Đăng ký 92LOTTERY ngay để nhận khuyến mãi 100K.",
    siteName: "92LOTTERY",
    images: [
      {
        url: "https://92lottery.dev/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "92LOTTERY - Xổ Số 1 Phút, Casino Trực Tuyến Uy Tín #1 Việt Nam",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "92LOTTERY - Xổ Số 1 Phút, Casino Trực Tuyến Uy Tín #1 Việt Nam",
    description: "92LOTTERY là nhà cái xổ số trực tuyến uy tín hàng đầu Việt Nam, cung cấp WinGo, K3 Lotre, 5D Lotre, TRX Win và nhiều trò chơi hấp dẫn khác. Đăng ký 92LOTTERY ngay để nhận khuyến mãi 100K.",
    creator: "@92LOTTERY",
    images: ["https://92lottery.dev/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://92lottery.dev",
    languages: {
      'vi': 'https://92lottery.dev',
      'x-default': 'https://92lottery.dev'
    }
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
        <link rel="preconnect" href="https://npq43b.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://npq43b.com" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="92LOTTERY" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/json" href="/google-business-profile.json" />
        <link rel="alternate" type="application/json" href="/knowledge-graph.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaString }}
        />
      </head>
      <body className="flex justify-center min-h-screen items-start bg-gray-100 antialiased">
        <AuthProvider>
          <div className="w-full max-w-[420px] min-h-screen bg-white rounded-lg shadow-2xl relative overflow-x-hidden">
            {children}
            <Footer />
            <AuthPopup />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
