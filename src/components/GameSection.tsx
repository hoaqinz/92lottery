"use client";

import { useState, useEffect } from "react";
import GameCard from "./GameCard";
import { GameCardSkeleton } from "./ui/loading-skeleton";

const games = [
  {
    title: "Win Go",
    description: "Đoán Số\nXanh/Đỏ/Tím",
    icon: "/anh/icongame/game 1.png",
    backgroundImage: "/anh/icongame/game 1.png", // Đường dẫn đến hình nền
    gradientFrom: "#4a9cff",
    gradientTo: "#4a9cff"
  },
  {
    title: "K3 Lotre",
    description: "Đoán Số\nLớn/Nhỏ/Lẻ/Chẵn",
    icon: "/anh/icongame/game 2.png",
    backgroundImage: "/anh/icongame/game 2.png", // Đường dẫn đến hình nền
    gradientFrom: "#4a9cff",
    gradientTo: "#4a9cff"
  },
  {
    title: "5D Lotre",
    description: "Đoán Số\nLớn/Nhỏ/Lẻ/Chẵn",
    icon: "/anh/icongame/game 3.png",
    backgroundImage: "/anh/icongame/game 3.png", // Đường dẫn đến hình nền
    gradientFrom: "#7b6af7",
    gradientTo: "#7b6af7"
  },
  {
    title: "Trx Win",
    description: "Đoán Số\nXanh/Đỏ/Tím",
    icon: "/anh/icongame/game 4.png",
    backgroundImage: "/anh/icongame/game 4.png", // Đường dẫn đến hình nền
    gradientFrom: "#b36af7",
    gradientTo: "#b36af7"
  }
];

export default function GameSection() {
  const [isLoading, setIsLoading] = useState(true);

  // Giả lập thời gian tải
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-1 px-3 py-2">
      {isLoading ? (
        // Hiển thị skeleton khi đang tải
        <>
          <GameCardSkeleton />
          <GameCardSkeleton />
          <GameCardSkeleton />
          <GameCardSkeleton />
        </>
      ) : (
        // Hiển thị dữ liệu thật khi đã tải xong
        games.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            description={game.description}
            icon={game.icon}
            backgroundImage={game.backgroundImage}
            gradientFrom={game.gradientFrom}
            gradientTo={game.gradientTo}
          />
        ))
      )}
    </div>
  );
}
