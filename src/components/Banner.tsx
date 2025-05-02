"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full relative">
      <Image
        src="/banner.jpg"
        alt="Thử thách điểm danh nhận thưởng 7 ngày liên tiếp"
        width={420}
        height={200}
        className="w-full"
        priority
      />

      <div className="absolute bottom-3 right-3">
        <button className="relative overflow-hidden bg-[#e62e2e] text-white px-3 py-1 rounded-full font-medium text-xs shadow-md hover:shadow-lg transition-all duration-200 hover:bg-[#d42a2a]">
          {/* Hiệu ứng lóe sáng nhẹ */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full animate-shine opacity-20"></div>

          {/* Nội dung */}
          <span className="relative z-10">
            Chi tiết
          </span>
        </button>
      </div>
    </div>
  );
}
