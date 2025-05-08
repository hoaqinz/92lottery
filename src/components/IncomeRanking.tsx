'use client';

import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getRankingData, type RankingMember } from '@/services/rankingService';
import AmountDisplay from './AmountDisplay';

const IncomeRanking: React.FC = () => {
  // State cho dữ liệu bảng xếp hạng
  const [rankingData, setRankingData] = useState<RankingMember[]>([]);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  // Hàm cập nhật dữ liệu
  const updateRankingData = () => {
    setIsUpdating(true);

    // Thêm timeout để tạo hiệu ứng loading
    setTimeout(() => {
      const data = getRankingData();
      setRankingData(data);
      setLastUpdated(new Date());
      setIsUpdating(false);
    }, 800); // Đợi 800ms để tạo hiệu ứng
  };

  // Khởi tạo dữ liệu khi component mount
  useEffect(() => {
    updateRankingData();

    // Cập nhật dữ liệu mỗi 2 tiếng
    const intervalId = setInterval(() => {
      updateRankingData();
    }, 2 * 60 * 60 * 1000); // 2 giờ

    // Cleanup interval khi component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mb-4 bg-white p-0 rounded-lg">
      <div className="flex flex-col mb-[50px] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-1 h-6 bg-[#e62e2e] mr-2"></div>
            <h2 className="text-xl font-bold">BXH thu nhập hôm nay</h2>
          </div>
          <button
            onClick={updateRankingData}
            disabled={isUpdating}
            className={`text-xs text-white px-2 py-1 rounded-md transition-colors flex items-center ${
              isUpdating ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#e62e2e] hover:bg-[#d42a2a]'
            }`}
          >
            {isUpdating ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Đang cập nhật...
              </>
            ) : (
              'Cập nhật'
            )}
          </button>
        </div>
        {lastUpdated && (
          <div className="text-xs text-gray-500 mt-1 ml-3">
            Cập nhật: {lastUpdated.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
      </div>

      <div className="relative">
        {/* Ảnh bục */}
        <div className="relative w-full" style={{ height: '188px' }}>
          <Image
            src="/anh/bxh/buc.png"
            alt="Podium"
            fill
            className="object-contain"
            unoptimized
          />

          {/* Top 3 */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Tất cả avatar đặt trên cùng của bục */}
            <div className="absolute top-0 left-0 w-full flex justify-between px-8">
              {/* Vị trí 2 - Bên trái */}
              <div className="relative" style={{ marginTop: '10px' }}>
                <div
                  className="w-16 h-16 rounded-full border-2 border-[#e62e2e]"
                  style={{
                    backgroundColor: '#8ab4e8',
                    backgroundImage: 'url(/anh/avata/avata.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <Image
                  src="/anh/bxh/crow2.png"
                  alt="Crown"
                  width={30}
                  height={30}
                  className="absolute -top-2 left-0 z-10"
                  unoptimized
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2" style={{ width: '60px', height: '30px' }}>
                  <img src="/anh/bxh/no2.png" alt="NO2" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="absolute top-20 left-1/2 transform -translate-x-[53%] text-center w-28 bg-white bg-opacity-20 rounded p-1" style={{ zIndex: 10 }}>
                  <div className="text-xs font-medium text-white">{rankingData[1]?.username}</div>
                  <div className="text-[10px] text-white font-bold">
                    <AmountDisplay amount={rankingData[1]?.amount || ''} />
                  </div>
                </div>
              </div>

              {/* Vị trí 1 - Giữa */}
              <div className="relative" style={{ marginTop: '-35px' }}>
                <div
                  className="w-20 h-20 rounded-full border-2 border-[#e62e2e]"
                  style={{
                    backgroundColor: '#e74c3c',
                    backgroundImage: 'url(/anh/avata/avata2.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <Image
                  src="/anh/bxh/crow1.png"
                  alt="Crown"
                  width={40}
                  height={40}
                  className="absolute -top-3 left-0 z-10"
                  unoptimized
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2" style={{ width: '70px', height: '35px' }}>
                  <img src="/anh/bxh/no1.png" alt="NO1" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="absolute top-28 left-1/2 transform -translate-x-1/2 text-center w-32" style={{ zIndex: 10 }}>
                  <div className="text-sm font-medium text-white drop-shadow-md">{rankingData[0]?.username}</div>
                  <div className="text-xs text-white font-bold drop-shadow-md">
                    <AmountDisplay amount={rankingData[0]?.amount || ''} />
                  </div>
                </div>
              </div>

              {/* Vị trí 3 - Bên phải */}
              <div className="relative" style={{ marginTop: '15px' }}>
                <div
                  className="w-16 h-16 rounded-full border-2 border-[#e62e2e]"
                  style={{
                    backgroundColor: '#f39c12',
                    backgroundImage: 'url(/anh/avata/avata3.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <Image
                  src="/anh/bxh/crow3.png"
                  alt="Crown"
                  width={30}
                  height={30}
                  className="absolute -top-2 left-0 z-10"
                  unoptimized
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2" style={{ width: '60px', height: '30px' }}>
                  <img src="/anh/bxh/no3.png" alt="NO3" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="absolute top-20 left-1/2 transform -translate-x-[47%] text-center w-28 bg-white bg-opacity-20 rounded p-1" style={{ zIndex: 10 }}>
                  <div className="text-xs font-medium text-white">{rankingData[2]?.username}</div>
                  <div className="text-[10px] text-white font-bold">
                    <AmountDisplay amount={rankingData[2]?.amount || ''} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Danh sách xếp hạng từ 4-10 */}
        <div className="mt-2 space-y-3">
          {rankingData.slice(3).map((item, index) => (
            <div key={index} className="p-2 flex justify-between items-center bg-white bg-opacity-5 rounded-lg shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center text-gray-500 font-bold">
                  {index + 4}
                </div>
                <div
                  className="w-8 h-8 rounded-full border-2 border-[#e62e2e]"
                  style={{
                    backgroundImage: `url(/anh/avata/avata${(index % 9) + 2}.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="ml-2 text-xs text-gray-600">{item.username}</div>
              </div>
              <div className="bg-red-600 text-white text-xs px-4 py-1 rounded-full shadow-md">
                <AmountDisplay amount={item.amount} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncomeRanking;
