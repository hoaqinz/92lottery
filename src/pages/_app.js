// Không import globals.css từ app router
// Chỉ xử lý các routes không được xử lý bởi app router

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
