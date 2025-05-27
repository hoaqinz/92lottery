"use client";

import { useEffect, useState } from "react";

interface NetworkErrorHandlerProps {
  children: React.ReactNode;
}

export default function NetworkErrorHandler({ children }: NetworkErrorHandlerProps) {
  const [isOnline, setIsOnline] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setRetryCount(0);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    // Check initial connection
    setIsOnline(navigator.onLine);

    // Listen for connection changes
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Android-specific connection check
    const checkConnection = () => {
      if (!navigator.onLine) {
        setIsOnline(false);
        return;
      }

      // Try to fetch a small resource to verify actual connectivity
      fetch("/favicon.ico", { 
        method: "HEAD",
        cache: "no-cache",
        mode: "no-cors"
      })
        .then(() => setIsOnline(true))
        .catch(() => setIsOnline(false));
    };

    // Check connection every 30 seconds
    const interval = setInterval(checkConnection, 30000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearInterval(interval);
    };
  }, []);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    window.location.reload();
  };

  if (!isOnline) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Mất kết nối mạng
          </h2>
          <p className="text-gray-600 mb-4">
            Vui lòng kiểm tra kết nối internet và thử lại
          </p>
          <button
            onClick={handleRetry}
            className="bg-[#bc2022] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#a01820] transition-colors"
          >
            Thử lại {retryCount > 0 && `(${retryCount})`}
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
