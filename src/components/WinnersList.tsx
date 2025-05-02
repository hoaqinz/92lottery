"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WinnerItemSkeleton } from "./ui/loading-skeleton";

export default function WinnersList() {
  const [isLoading, setIsLoading] = useState(true);

  // Tạo tên người dùng ngẫu nhiên
  const generateRandomUsername = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "Member";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Tạo số tiền ngẫu nhiên từ 9,800 đến 200,000
  const generateRandomAmount = () => {
    const min = 9800;
    const max = 200000;
    const amount = Math.floor(Math.random() * (max - min + 1)) + min;
    return amount.toLocaleString("vi-VN") + "₫";
  };

  // Tạo avatar ngẫu nhiên
  const generateRandomAvatar = () => {
    // Sử dụng avatar từ public/icons
    const avatars = [
      "/icons/banca.png",
      "/icons/casino.png",
      "/icons/gamebai.png",
      "/icons/minigame.png",
      "/icons/phobien.png",
      "/icons/slots.png",
      "/icons/thethao.png",
      "/icons/xoso.png"
    ];
    return avatars[Math.floor(Math.random() * avatars.length)];
  };

  // Giả lập dữ liệu người thắng cuộc
  const winners = Array(6).fill(null).map((_, i) => ({
    id: i + 1,
    username: generateRandomUsername(),
    amount: generateRandomAmount(),
    avatar: generateRandomAvatar()
  }));

  // Giả lập thời gian tải
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white px-3 pb-4">
      <h3 className="mb-2 font-semibold text-[#bc2022] text-base">Thông tin trúng thưởng</h3>
      <ul className="grid gap-1">
        {isLoading ? (
          // Hiển thị skeleton khi đang tải
          <>
            {Array(6).fill(null).map((_, index) => (
              <WinnerItemSkeleton key={index} />
            ))}
          </>
        ) : (
          // Hiển thị dữ liệu thật khi đã tải xong
          winners.map((winner) => (
            <li
              key={winner.id}
              className="flex items-center bg-[#f8f8f8] rounded-lg px-2 py-1 hover:bg-[#f0f0f0] transition-colors"
            >
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
                Nhận {winner.amount}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
