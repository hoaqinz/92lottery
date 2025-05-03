"use client";

import { useState, useEffect } from 'react';

export default function AddToHomeScreen() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [platform, setPlatform] = useState<'ios' | 'android' | 'desktop' | null>(null);

  useEffect(() => {
    // Kiểm tra nếu đã hiển thị prompt trước đó
    const hasShownPrompt = localStorage.getItem('a2hs_prompt_shown');
    if (hasShownPrompt) return;

    // Xác định platform
    const ua = window.navigator.userAgent;
    const iOS = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
    const android = /Android/.test(ua);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

    // Chỉ hiển thị nếu không phải là standalone app
    if (!isStandalone) {
      if (iOS) {
        setPlatform('ios');
        setShowPrompt(true);
      } else if (android) {
        setPlatform('android');
        setShowPrompt(true);
      } else {
        setPlatform('desktop');
      }
    }
  }, []);

  const dismissPrompt = () => {
    setShowPrompt(false);
    localStorage.setItem('a2hs_prompt_shown', 'true');
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-[80px] left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-white rounded-xl shadow-lg z-50 p-4 border border-gray-200">
      <div className="flex items-start">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#e62e2e] mb-2">Thêm 92Lottery vào màn hình chính</h3>
          
          {platform === 'ios' && (
            <div className="text-sm text-gray-700">
              <p className="mb-2">Nhấn vào biểu tượng <span className="inline-block px-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span> rồi chọn "Thêm vào màn hình chính"</p>
            </div>
          )}
          
          {platform === 'android' && (
            <div className="text-sm text-gray-700">
              <p className="mb-2">Nhấn vào biểu tượng menu <span className="inline-block px-1">⋮</span> rồi chọn "Thêm vào màn hình chính"</p>
            </div>
          )}
          
          {platform === 'desktop' && (
            <div className="text-sm text-gray-700">
              <p className="mb-2">Nhấn vào biểu tượng cài đặt trong thanh địa chỉ, sau đó chọn "Cài đặt trang web này"</p>
            </div>
          )}
        </div>
        
        <button 
          onClick={dismissPrompt}
          className="text-gray-500 hover:text-gray-700 ml-2"
          aria-label="Đóng"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
