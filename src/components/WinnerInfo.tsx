"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Định nghĩa kiểu dữ liệu cho người thắng cuộc
type Winner = {
  id: number;
  username: string;
  amount: string;
  avatar: string;
  gameIcon: string;
};

// Danh sách avatar
const avatars = [
  "/anh/avata/avata.png",
  "/anh/avata/avata2.png",
  "/anh/avata/avata3.png",
  "/anh/avata/avata4.png",
  "/anh/avata/avata5.png",
  "/anh/avata/avata6.png",
  "/anh/avata/avata7.png",
];

// Danh sách game icon
const gameIcons = [
  "/anh/icongame/game1.png",
  "/anh/icongame/game2.png",
  "/anh/icongame/game3.png",
  "/anh/icongame/game4.png",
  "/anh/icongame/game5.png",
];

// Tạo tên người dùng ngẫu nhiên
const generateRandomUsername = () => {
  // Tạo chuỗi ngẫu nhiên gồm 3 ký tự (chữ cái và số)
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 3; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `Mem***${result}`;
};

// Tạo số tiền ngẫu nhiên từ 10,000 đến 500,000 (làm tròn đến hàng nghìn)
const generateRandomAmount = () => {
  // Tạo số ngẫu nhiên từ 10 đến 500
  const min = 10;
  const max = 500;
  // Random số và làm tròn đến hàng nghìn
  const randomAmount = Math.floor(Math.random() * (max - min + 1)) + min;
  // Nhân với 1000 để có giá trị từ 10,000 đến 500,000
  const finalAmount = randomAmount * 1000;

  // Format số tiền với dấu phẩy ngăn cách hàng nghìn
  return finalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Tạo người thắng cuộc ngẫu nhiên
const generateRandomWinner = (id: number): Winner => {
  return {
    id,
    username: generateRandomUsername(),
    amount: generateRandomAmount(),
    avatar: avatars[Math.floor(Math.random() * avatars.length)],
    gameIcon: gameIcons[Math.floor(Math.random() * gameIcons.length)],
  };
};

// Component hiển thị thông tin một người trúng thưởng
const WinnerItem = ({ winner }: { winner: Winner }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm mb-2 border border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-11 h-11 relative">
          <div className="absolute inset-0 bg-gray-100 rounded-full border-2 border-[#e62e2e]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={winner.avatar}
              alt={winner.username}
              className="w-9 h-9 rounded-full"
              style={{
                objectFit: 'cover',
                clipPath: 'circle(50%)'
              }}
            />
          </div>
        </div>
        <div className="text-sm font-medium">{winner.username}</div>
      </div>
      <div className="flex items-center">
        <div className="w-11 h-11 relative mr-2">
          <div className="absolute inset-0 bg-[#e62e2e] rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={winner.gameIcon}
              alt="Game"
              className="w-9 h-9 rounded-md"
              style={{
                objectFit: 'cover',
                clipPath: 'inset(0% 0% 0% 0% round 0.375rem)'
              }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-bold text-[#bc2022]">
            Nhận {winner.amount}đ
          </div>
          <div className="text-xs text-gray-500">
            Số tiền trúng thưởng
          </div>
        </div>
      </div>
    </div>
  );
};

// Component chính hiển thị danh sách người trúng thưởng
export default function WinnerInfo() {
  // Khởi tạo danh sách 5 người thắng cuộc
  const [winners, setWinners] = useState<Winner[]>([
    generateRandomWinner(1),
    generateRandomWinner(2),
    generateRandomWinner(3),
    generateRandomWinner(4),
    generateRandomWinner(5),
  ]);

  // Cập nhật danh sách người thắng cuộc mỗi 3 giây
  useEffect(() => {
    // Tạo danh sách ban đầu với animation delay
    const initialWinners = [
      generateRandomWinner(1),
      generateRandomWinner(2),
      generateRandomWinner(3),
      generateRandomWinner(4),
      generateRandomWinner(5),
    ];
    setWinners(initialWinners);

    // Thiết lập interval để thêm người thắng cuộc mới
    const interval = setInterval(() => {
      // Tạo người thắng cuộc mới
      const newWinner = generateRandomWinner(Date.now());

      // Cập nhật danh sách: thêm người mới vào đầu, loại bỏ người cuối
      setWinners(prevWinners => [
        newWinner,
        ...prevWinners.slice(0, 4)
      ]);
    }, 3000); // Cập nhật mỗi 3 giây

    return () => clearInterval(interval); // Dọn dẹp khi component unmount
  }, []);

  return (
    <div className="bg-[#f8f9fc] rounded-lg p-4 mx-3 mb-4">
      <div className="flex items-center mb-4">
        <div className="w-1 h-6 bg-red-500 mr-2"></div>
        <h2 className="text-lg font-bold">Thông tin trúng thưởng</h2>
      </div>
      <div className="luckyWinners__container-wrapper relative overflow-hidden">
        <div className="space-y-0">
          {winners.map((winner, index) => (
            <div
              key={winner.id}
              className="winner-item transition-all duration-500 ease-in-out"
              style={{
                transform: `translateY(0)`,
                opacity: 1,
                animation: `slideDown 0.5s ease-in-out ${index * 0.1}s`
              }}
            >
              <WinnerItem winner={winner} />
            </div>
          ))}
        </div>
      </div>

      {/* CSS cho animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .luckyWinners__container-wrapper {
          transition: all 0.5s ease-in-out;
        }

        .winner-item {
          transition: all 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
