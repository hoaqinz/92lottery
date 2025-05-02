import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
        <link rel="preconnect" href="https://ext.same-assets.com" />
        <link rel="dns-prefetch" href="https://ext.same-assets.com" />
      </Head>
      <body className="flex justify-center min-h-screen items-start bg-gray-100 antialiased">
        <div className="w-[420px] min-h-screen bg-white rounded-lg shadow-2xl relative overflow-x-hidden max-w-full">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
