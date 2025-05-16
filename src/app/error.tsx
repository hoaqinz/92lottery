'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image 
            src="/anh/error.png" 
            alt="Đã xảy ra lỗi" 
            fill
            style={{objectFit: 'contain'}}
          />
        </div>
        
        <h1 className="text-2xl font-bold text-[#bc2022] mb-4">Đã xảy ra lỗi</h1>
        
        <p className="text-gray-600 mb-6">
          Rất tiếc, đã xảy ra lỗi khi tải trang. Vui lòng thử lại sau.
        </p>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full py-3 bg-[#bc2022] text-white rounded-lg font-medium hover:bg-[#a51d1f] transition-colors"
          >
            Thử lại
          </button>
          
          <Link href="/" className="block w-full py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors">
            Quay lại trang chủ
          </Link>
        </div>
        
        <p className="mt-6 text-xs text-gray-500">
          Mã lỗi: {error.digest}
        </p>
      </div>
    </div>
  );
}
