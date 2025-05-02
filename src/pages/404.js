import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Không tìm thấy trang</h1>
      <p className="text-lg mb-6">Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
      <Link href="/" className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
        Quay lại trang chủ
      </Link>
    </div>
  );
}
