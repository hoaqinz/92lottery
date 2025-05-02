"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LeaderboardTopSkeleton, WinnerItemSkeleton } from "./ui/loading-skeleton";

type TopWinner = {
  position: number;
  username: string;
  amount: string;
  image: string;
  color: string;
};

const topWinners: TopWinner[] = [
  {
    position: 2,
    username: "Mem***ND5",
    amount: "1,753,916,780.00₫",
    image: "https://ext.same-assets.com/2315791583/3620247821.png",
    color: "#7b90f7"
  },
  {
    position: 1,
    username: "Mem***BLN",
    amount: "2,940,000,000.00₫",
    image: "https://ext.same-assets.com/2315791583/3321412344.png",
    color: "#bc2022"
  },
  {
    position: 3,
    username: "Mem***67T",
    amount: "1,376,904,900.00₫",
    image: "https://ext.same-assets.com/2315791583/233422598.png",
    color: "#cc7933"
  }
];

// Danh sách người chơi xếp hạng từ 4-10
const otherWinners = Array(7).fill(null).map((_, i) => ({
  position: i + 4,
  username: "UserName",
  amount: "X,000,000₫"
}));

export default function LeaderBoard() {
  const [isLoading, setIsLoading] = useState(true);

  // Giả lập thời gian tải
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white px-3 pb-8">
      <h3 className="mb-2 font-semibold text-[#bc2022] text-base">BXH thu nhập hôm nay</h3>

      {/* Top 3 winners */}
      {isLoading ? (
        <LeaderboardTopSkeleton />
      ) : (
        <div className="flex justify-between items-end mb-2">
          {topWinners.sort((a, b) => a.position - b.position).map((winner) => (
            <div key={winner.position} className="flex flex-col items-center gap-1">
              <Image
                src={winner.image}
                alt={`${winner.position}${winner.position === 1 ? 'st' : winner.position === 2 ? 'nd' : 'rd'}`}
                width={winner.position === 1 ? 54 : 46}
                height={winner.position === 1 ? 54 : 46}
                className="object-contain"
                loading="lazy"
              />
              <div className="text-xs mt-1">{winner.username}</div>
              <div className="text-sm font-bold" style={{ color: winner.color }}>{winner.amount}</div>
            </div>
          ))}
        </div>
      )}

      {/* Other winners */}
      <ul className="grid gap-1">
        {isLoading ? (
          // Hiển thị skeleton khi đang tải
          <>
            {Array(7).fill(null).map((_, index) => (
              <WinnerItemSkeleton key={index} />
            ))}
          </>
        ) : (
          // Hiển thị dữ liệu thật khi đã tải xong
          otherWinners.map((winner) => (
            <li
              key={winner.position}
              className="flex items-center bg-[#f8f8f8] rounded-lg px-2 py-1 hover:bg-[#f0f0f0] transition-colors"
            >
              <div className="w-8 text-xs text-gray-500 text-right mr-1">{winner.position}</div>
              <div className="w-32 text-xs">{winner.username}</div>
              <div className="flex-1" />
              <div className="text-xs font-bold bg-[#bc2022] text-white rounded-lg px-2 py-1">{winner.amount}</div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
