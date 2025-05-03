"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface IframeLoaderProps {
  src: string;
  title?: string;
}

export default function IframeLoader({ src, title }: IframeLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // Preload the iframe content
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'document';
    preloadLink.href = src;
    preloadLink.crossOrigin = 'anonymous';
    document.head.appendChild(preloadLink);

    // Preconnect to the iframe domain
    const preconnectLink = document.createElement('link');
    preconnectLink.rel = 'preconnect';
    preconnectLink.href = new URL(src).origin;
    preconnectLink.crossOrigin = 'anonymous';
    document.head.appendChild(preconnectLink);

    // Prefetch DNS
    const dnsPrefetchLink = document.createElement('link');
    dnsPrefetchLink.rel = 'dns-prefetch';
    dnsPrefetchLink.href = new URL(src).origin;
    document.head.appendChild(dnsPrefetchLink);

    // Set a timeout to hide loading screen if iframe takes too long
    const timeoutId = setTimeout(() => {
      if (loading) {
        setLoading(false);
      }
    }, 5000); // 5 seconds timeout

    // Clean up
    return () => {
      document.head.removeChild(preloadLink);
      document.head.removeChild(preconnectLink);
      document.head.removeChild(dnsPrefetchLink);
      clearTimeout(timeoutId);
    };
  }, [src, loading]);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleIframeError = () => {
    if (retryCount < 3) {
      // Retry loading the iframe
      setRetryCount(prev => prev + 1);
      setTimeout(() => {
        const iframe = document.getElementById('auth-iframe') as HTMLIFrameElement;
        if (iframe) {
          iframe.src = src;
        }
      }, 1000);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setError(false);
    setLoading(true);
    setRetryCount(0);
    const iframe = document.getElementById('auth-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = src;
    }
  };

  return (
    <div className="w-full h-screen relative bg-white">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#e62e2e] z-10">
          <div className="relative w-40 h-12 mb-6 animate-pulse">
            <Image
              src="https://ext.same-assets.com/2315791583/2231750973.png"
              alt="92Lottery"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-white font-medium text-lg">
            {title?.includes('Đăng ký') ? 'Đang tải trang đăng ký...' : 'Đang tải trang đăng nhập...'}
          </p>
          <p className="mt-2 text-gray-200 text-sm text-center max-w-xs px-4">
            Hệ thống đang kết nối đến máy chủ an toàn. Vui lòng đợi trong giây lát.
          </p>
          <div className="mt-6 w-48 h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full animate-progress"></div>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#e62e2e] z-10">
          <div className="relative w-40 h-12 mb-6">
            <Image
              src="https://ext.same-assets.com/2315791583/2231750973.png"
              alt="92Lottery"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs w-full">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-white font-bold text-lg text-center">Không thể kết nối</p>
            <p className="mt-2 text-gray-200 text-sm text-center">
              Có lỗi xảy ra khi tải trang. Vui lòng kiểm tra kết nối mạng và thử lại.
            </p>
            <button
              onClick={handleRetry}
              className="mt-4 w-full py-3 bg-white text-[#e62e2e] font-bold rounded-md hover:bg-gray-100 transition-colors"
            >
              Thử lại
            </button>
          </div>
        </div>
      )}

      <iframe
        id="auth-iframe"
        src={src}
        title={title || "Authentication"}
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          zIndex: loading || error ? 0 : 999999,
          opacity: loading || error ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
          willChange: 'opacity',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: 1000,
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="eager"
        importance="high"
        fetchpriority="high"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
