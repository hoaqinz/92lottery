'use client';

import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <Image 
            src="/anh/favicon.png" 
            alt="92LOTTERY" 
            fill
            style={{objectFit: 'contain'}}
            className="animate-pulse"
          />
        </div>
        
        <div className="flex justify-center items-center space-x-2">
          <div className="w-3 h-3 bg-[#bc2022] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-[#bc2022] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-[#bc2022] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        
        <p className="mt-4 text-gray-600 text-sm">Đang tải...</p>
      </div>
    </div>
  );
}
