'use client';

import React, { useState } from 'react';

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
  hashtags?: string[];
  className?: string;
  showCopyLink?: boolean;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({
  url,
  title,
  description = '',
  hashtags = [],
  className = '',
  showCopyLink = true,
}) => {
  const [copied, setCopied] = useState(false);
  
  // Đảm bảo URL là đầy đủ
  const fullUrl = url.startsWith('http') ? url : `https://92lottery.dev${url.startsWith('/') ? '' : '/'}${url}`;
  
  // Chuẩn bị các tham số cho các nền tảng chia sẻ
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedHashtags = hashtags.join(',');
  
  // Các URL chia sẻ
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${encodedHashtags}`;
  const telegramShareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;
  const zaloShareUrl = `https://zalo.me/article/share?url=${encodedUrl}&title=${encodedTitle}&description=${encodedDescription}`;
  
  // Xử lý sao chép liên kết
  const handleCopyLink = () => {
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  // Xử lý chia sẻ
  const handleShare = (platform: string, shareUrl: string) => {
    window.open(shareUrl, `share-${platform}`, 'width=600,height=400');
  };
  
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Facebook */}
      <button
        onClick={() => handleShare('facebook', facebookShareUrl)}
        className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
        aria-label="Chia sẻ lên Facebook"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
        </svg>
      </button>
      
      {/* Twitter */}
      <button
        onClick={() => handleShare('twitter', twitterShareUrl)}
        className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors"
        aria-label="Chia sẻ lên Twitter"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"></path>
        </svg>
      </button>
      
      {/* Telegram */}
      <button
        onClick={() => handleShare('telegram', telegramShareUrl)}
        className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
        aria-label="Chia sẻ lên Telegram"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
        </svg>
      </button>
      
      {/* Zalo */}
      <button
        onClick={() => handleShare('zalo', zaloShareUrl)}
        className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors"
        aria-label="Chia sẻ lên Zalo"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.49 10.2722H14.22C14.3867 10.2722 14.5267 10.1322 14.5267 9.9655V9.0055C14.5267 8.8388 14.3867 8.6988 14.22 8.6988H12.49V7.5188H14.22C14.3867 7.5188 14.5267 7.3788 14.5267 7.2122V6.2522C14.5267 6.0855 14.3867 5.9455 14.22 5.9455H11.7567C11.59 5.9455 11.45 6.0855 11.45 6.2522V13.7455C11.45 13.9122 11.59 14.0522 11.7567 14.0522H14.22C14.3867 14.0522 14.5267 13.9122 14.5267 13.7455V12.7855C14.5267 12.6188 14.3867 12.4788 14.22 12.4788H12.49V10.2722Z" />
          <path d="M18.29 5.9455H17.51C17.3433 5.9455 17.2033 6.0855 17.2033 6.2522V10.6855L14.7367 6.1055C14.6833 6.0055 14.5767 5.9455 14.46 5.9455H13.7233C13.5567 5.9455 13.4167 6.0855 13.4167 6.2522V13.7455C13.4167 13.9122 13.5567 14.0522 13.7233 14.0522H14.5033C14.67 14.0522 14.81 13.9122 14.81 13.7455V9.2055L17.3433 13.8922C17.3967 13.9922 17.5033 14.0522 17.62 14.0522H18.29C18.4567 14.0522 18.5967 13.9122 18.5967 13.7455V6.2522C18.5967 6.0855 18.4567 5.9455 18.29 5.9455Z" />
          <path d="M9.92 10.9455H8.19V6.2522C8.19 6.0855 8.05 5.9455 7.8833 5.9455H7.1033C6.9367 5.9455 6.7967 6.0855 6.7967 6.2522V13.7455C6.7967 13.9122 6.9367 14.0522 7.1033 14.0522H9.92C10.0867 14.0522 10.2267 13.9122 10.2267 13.7455V11.2522C10.2267 11.0855 10.0867 10.9455 9.92 10.9455Z" />
          <path d="M12 0C5.37333 0 0 5.37333 0 12C0 18.6267 5.37333 24 12 24C18.6267 24 24 18.6267 24 12C24 5.37333 18.6267 0 12 0ZM12 21.6C6.69667 21.6 2.4 17.3033 2.4 12C2.4 6.69667 6.69667 2.4 12 2.4C17.3033 2.4 21.6 6.69667 21.6 12C21.6 17.3033 17.3033 21.6 12 21.6Z" />
        </svg>
      </button>
      
      {/* Copy Link */}
      {showCopyLink && (
        <button
          onClick={handleCopyLink}
          className={`w-10 h-10 rounded-full ${copied ? 'bg-green-500' : 'bg-gray-600'} text-white flex items-center justify-center hover:bg-gray-700 transition-colors`}
          aria-label="Sao chép liên kết"
        >
          {copied ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default ShareButtons;
