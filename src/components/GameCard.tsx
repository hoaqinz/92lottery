"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type GameCardProps = {
  title: string;
  description: string;
  icon: string;
  backgroundImage?: string;
  gradientFrom: string;
  gradientTo: string;
};

export default function GameCard({ title, description, icon, backgroundImage, gradientFrom, gradientTo }: GameCardProps) {
  // Tạo style object cho background
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '100% 100%', // Hiển thị toàn bộ hình ảnh
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100px',
        width: '100%',
        borderRadius: '0',
        maxWidth: '420px' // Giới hạn chiều rộng tối đa
      }
    : {
        background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
        height: '100px',
        width: '100%',
        borderRadius: '0',
        maxWidth: '420px'
      };

  // Tạo tên người dùng ngẫu nhiên
  const generateRandomUsername = () => {
    // Tạo chuỗi ngẫu nhiên gồm chữ cái và số
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 7; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `Member${result}`;
  };

  // Tạo số tiền ngẫu nhiên từ 9,800 đến 200,000
  const generateRandomAmount = () => {
    const min = 9800;
    const max = 200000;
    const amount = Math.floor(Math.random() * (max - min + 1)) + min;
    return amount.toLocaleString("vi-VN");
  };

  // Sử dụng state để lưu trữ thông tin người thắng cuộc
  const [winner, setWinner] = useState({
    username: generateRandomUsername(),
    amount: generateRandomAmount(),
    avatar: "/icon-trung-thuong.png" // Sử dụng icon trúng thưởng
  });

  // Cập nhật thông tin người thắng cuộc mỗi giây
  useEffect(() => {
    const interval = setInterval(() => {
      setWinner({
        username: generateRandomUsername(),
        amount: generateRandomAmount(),
        avatar: "/icon-trung-thuong.png"
      });
    }, 1000); // Cập nhật mỗi 1 giây

    return () => clearInterval(interval); // Dọn dẹp khi component unmount
  }, []);

  return (
    <div className="mb-1">


      {/* Game card với hình nền */}
      <div
        className="w-full transition-all hover:scale-[1.03] cursor-pointer shadow-lg relative overflow-hidden border-0"
        style={{
          ...backgroundStyle,
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease"
        }}
      >
        <div className="p-3 relative h-full">
          {/* Tiêu đề ở trên cùng bên trái */}
          <div className="absolute top-2 left-3 z-10">
            <h3 className="text-[1.3rem] font-bold text-white animate-glow" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.7)" }}>{title}</h3>
          </div>

          {/* Mô tả ở dưới cùng bên trái - hỗ trợ xuống dòng */}
          <div className="absolute bottom-3 left-3 z-10">
            <p className="text-xs text-white font-semibold whitespace-pre-line" style={{ textShadow: "0 0 5px rgba(0, 0, 0, 0.5)" }}>{description}</p>
          </div>



          {/* Icon ở bên phải */}
          <div className="absolute top-[30%] right-3 -translate-y-1/2 z-10">
            <div className="relative game-icon-container">
              {/* Hiệu ứng sóng lan tỏa */}
              <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>
              <div className="absolute inset-2 rounded-full bg-white opacity-30 animate-ping animation-delay-300"></div>
              <div className="absolute inset-4 rounded-full bg-white opacity-40 animate-ping animation-delay-600"></div>

              {/* Icon chính */}
              <Image
                src={icon}
                alt={title}
                width={70}
                height={70}
                className="object-contain relative z-10 animate-float"
                style={{
                  filter: "drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Thông tin người trúng thưởng */}
      <div className="flex items-center bg-[#f8f8f8] rounded-b-lg px-2 py-2 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#e62e2e]">
            <Image
              src={winner.avatar}
              alt={winner.username}
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="text-xs">{winner.username}</div>
        </div>
        <div className="flex-1" />
        <div className="text-xs font-bold bg-[#bc2022] text-white rounded-lg px-2 py-1">
          Số tiền trúng thưởng {winner.amount}
        </div>
      </div>
    </div>
  );
}
