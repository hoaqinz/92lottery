import type { Metadata, Viewport } from "next";
import "./globals.css";
import { generateGamblingWebsiteSchema } from "@/lib/schema";
import { AuthProvider } from "@/contexts/AuthContext";
import AuthPopup from "@/components/AuthPopup";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://92lottery.dev'),
  title: {
    template: '%s | 92LOTTERY - Cá cược xổ số & Casino trực tuyến',
    default: '92LOTTERY - Nhà cái xổ số & Casino trực tuyến uy tín hàng đầu Việt Nam'
  },
  description: "92LOTTERY - Nhà cái xổ số, lottery, thể thao và casino trực tuyến uy tín hàng đầu Việt Nam với tỷ lệ trả thưởng cao nhất. Đăng ký 92LOTTERY ngay để nhận khuyến mãi 100K và trải nghiệm WinGo, K3 Lotre, 5D Lotre, TRX Win.",
  keywords: ["92lottery", "92LOTTERY", "nhà cái 92lottery", "xổ số 92lottery", "92lottery việt nam", "đăng ký 92lottery", "đăng nhập 92lottery", "app 92lottery", "win go 92lottery", "k3 lotre", "5d lotre", "trx win"],
  authors: [{ name: "92LOTTERY" }],
  creator: "92LOTTERY",
  publisher: "92LOTTERY",
  applicationName: "92LOTTERY",
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
    title: "92LOTTERY - Nhà cái xổ số & Casino trực tuyến uy tín hàng đầu Việt Nam",
    description: "92LOTTERY - Nhà cái xổ số, lottery, thể thao và casino trực tuyến uy tín hàng đầu Việt Nam với tỷ lệ trả thưởng cao nhất. Đăng ký 92LOTTERY ngay để nhận khuyến mãi 100K.",
    siteName: "92LOTTERY",
    images: [
      {
        url: "https://92lottery.dev/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "92LOTTERY - Nhà cái xổ số & Casino trực tuyến uy tín hàng đầu Việt Nam",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "92LOTTERY - Nhà cái xổ số & Casino trực tuyến uy tín hàng đầu Việt Nam",
    description: "92LOTTERY - Nhà cái xổ số, lottery, thể thao và casino trực tuyến uy tín hàng đầu Việt Nam với tỷ lệ trả thưởng cao nhất. Đăng ký 92LOTTERY ngay để nhận khuyến mãi 100K.",
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
    google: "google-site-verification=dQw4w9WgXcQ_92lottery",
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
        <meta name="apple-mobile-web-app-title" content="92Lottery" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaString }}
        />
      </head>
      <body className="flex justify-center min-h-screen items-start bg-gray-100 antialiased">
        <AuthProvider>
          <div className="w-full max-w-[420px] min-h-screen bg-white rounded-lg shadow-2xl relative overflow-x-hidden">
            {children}
            <AuthPopup />
            <GoogleAnalytics />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
