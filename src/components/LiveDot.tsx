"use client";

import React from 'react';

export default function LiveDot() {
  return (
    <div className="relative">
      {/* Điểm sáng chính */}
      <div className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full z-10"></div>
      
      {/* Hiệu ứng ping */}
      <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
      
      {/* Hiệu ứng pulse */}
      <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
    </div>
  );
}
