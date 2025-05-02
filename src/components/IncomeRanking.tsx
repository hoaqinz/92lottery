'use client';

import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface RankingMember {
  username: string;
  amount: string;
  position: number;
}

const IncomeRanking: React.FC = () => {
  // Dữ liệu mẫu cho bảng xếp hạng
  const [rankingData, setRankingData] = useState<RankingMember[]>([
    {
      username: 'Mem***5US',
      amount: '6,411,777,400.00₫',
      position: 1
    },
    {
      username: 'Mem***6EN',
      amount: '3,084,944,450.00₫',
      position: 2
    },
    {
      username: 'Mem***X8W',
      amount: '1,027,040,000.00₫',
      position: 3
    },
    {
      username: 'Mem***MPD',
      amount: '1,019,674,320.00₫',
      position: 4
    },
    {
      username: 'Mem***SOX',
      amount: '880,040,000.00₫',
      position: 5
    },
    {
      username: 'Mem***POU',
      amount: '558,033,560.00₫',
      position: 6
    },
    {
      username: 'LH***N',
      amount: '489,586,250.00₫',
      position: 7
    },
    {
      username: 'Tin***inh',
      amount: '398,472,900.00₫',
      position: 8
    },
    {
      username: 'Tri***uDõ',
      amount: '386,457,610.00₫',
      position: 9
    },
    {
      username: 'Mem***XVF',
      amount: '337,602,160.00₫',
      position: 10
    }
  ]);

  useEffect(() => {
    // Đây là nơi bạn có thể gọi API để lấy dữ liệu thực tế
  }, []);

  return (
    <div className="mb-4 bg-white p-0 rounded-lg">
      <div className="flex items-center mb-[50px] p-4">
        <div className="w-1 h-6 bg-[#e62e2e] mr-2"></div>
        <h2 className="text-xl font-bold">BXH thu nhập hôm nay</h2>
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
                  src="/anh/bxh/crow 2.png"
                  alt="Crown"
                  width={30}
                  height={30}
                  className="absolute -top-2 left-0 z-10"
                  unoptimized
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2" style={{ width: '60px', height: '30px' }}>
                  <img src="/anh/bxh/no 2.png" alt="NO2" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="absolute top-20 left-1/2 transform -translate-x-[53%] text-center w-28 bg-white bg-opacity-20 rounded p-1" style={{ zIndex: 10 }}>
                  <div className="text-xs font-medium text-white">{rankingData[1]?.username}</div>
                  <div className="text-[10px] text-white font-bold">{rankingData[1]?.amount}</div>
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
                  src="/anh/bxh/crow 1.png"
                  alt="Crown"
                  width={40}
                  height={40}
                  className="absolute -top-3 left-0 z-10"
                  unoptimized
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2" style={{ width: '70px', height: '35px' }}>
                  <img src="/anh/bxh/no 1.png" alt="NO1" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="absolute top-28 left-1/2 transform -translate-x-1/2 text-center w-32" style={{ zIndex: 10 }}>
                  <div className="text-sm font-medium text-white drop-shadow-md">{rankingData[0]?.username}</div>
                  <div className="text-xs text-white font-bold drop-shadow-md">{rankingData[0]?.amount}</div>
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
                  src="/anh/bxh/crow 3.png"
                  alt="Crown"
                  width={30}
                  height={30}
                  className="absolute -top-2 left-0 z-10"
                  unoptimized
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2" style={{ width: '60px', height: '30px' }}>
                  <img src="/anh/bxh/no 3.png" alt="NO3" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="absolute top-20 left-1/2 transform -translate-x-[47%] text-center w-28 bg-white bg-opacity-20 rounded p-1" style={{ zIndex: 10 }}>
                  <div className="text-xs font-medium text-white">{rankingData[2]?.username}</div>
                  <div className="text-[10px] text-white font-bold">{rankingData[2]?.amount}</div>
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
                {item.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncomeRanking;
