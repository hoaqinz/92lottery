'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

export default function NotFound() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
      <Header />
      
      <main className="flex-1 max-w-[420px] mx-auto w-full bg-white pb-16 flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <Image 
              src="/anh/404.png" 
              alt="Trang không tìm thấy" 
              fill
              style={{objectFit: 'contain'}}
              priority
            />
          </div>
          
          <h1 className="text-3xl font-bold text-[#bc2022] mb-4">404</h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Trang không tìm thấy</h2>
          
          <p className="text-gray-600 mb-8">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
          
          <div className="space-y-4">
            <Link href="/" className="block w-full py-3 bg-[#bc2022] text-white rounded-lg font-medium text-center hover:bg-[#a51d1f] transition-colors">
              Quay lại trang chủ
            </Link>
            
            <div className="flex justify-center space-x-4">
              <Link href="/lottery" className="text-[#bc2022] font-medium hover:underline">
                Xổ số
              </Link>
              <Link href="/blog" className="text-[#bc2022] font-medium hover:underline">
                Blog
              </Link>
              <Link href="/cong-dong" className="text-[#bc2022] font-medium hover:underline">
                Cộng đồng
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <TabBar />
    </div>
  );
}
