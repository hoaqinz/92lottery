"use client";

import { useEffect, useState } from "react";

// Hàm tạo ID ngẫu nhiên
const generateRandomID = () => {
  const prefix = Math.floor(Math.random() * 900) + 100; // 3 chữ số đầu (100-999)
  return `${prefix}****`;
};

// Hàm tạo số tiền ngẫu nhiên
const generateRandomAmount = () => {
  const prefix = Math.floor(Math.random() * 900) + 100; // 3 chữ số đầu (100-999)
  return `${prefix}***`;
};

// Thông báo loại 1 - Random mỗi lần hiển thị
const getRandomNotification = () => {
  return {
    type: "random",
    line1: `Chúc mừng ID ${generateRandomID()} đã là một trong những người may mắn`,
    line2: `được quay số bốc thăm nhận tiền thưởng ${generateRandomAmount()} VND`
  };
};

// Thông báo cố định
const notifications = [
  {
    type: "domain",
    line1: "👉👉 Quý khách vui lòng truy cập trực tiếp",
    line2: "tên miền dễ nhớ: 92lt.bet"
  },
  {
    type: "warning",
    parts: [
      "🆘🆘🆘 CẢNH BÁO: Quý khách hàng lưu ý gần đây có một số cá nhân đã cố ý tạo số tài khoản ngân hàng giống với các tài khoản thụ hưởng",
      "của các cổng nạp 92LOTTERY, quý khách hàng khi nạp tiền lưu ý kiểm tra kỹ số tài khoản",
      "tên ngân hàng và tên người thụ hưởng trước khi tiến hành thanh toán để tránh thất thoát. Xin cảm ơn! 💯💯"
    ],
    currentPart: 0
  }
];

export default function Notification() {
  // Thêm state để lưu thông báo hiện tại và thông báo tiếp theo
  const [currentNotification, setCurrentNotification] = useState(getRandomNotification());
  const [nextNotification, setNextNotification] = useState(notifications[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(0);
  const [warningPartIndex, setWarningPartIndex] = useState(0);

  // Hàm để lấy nội dung hiển thị của thông báo hiện tại
  const getCurrentContent = () => {
    if (currentNotification.type === "warning" && currentNotification.parts) {
      return currentNotification.parts[warningPartIndex];
    } else if (currentNotification.line1 && currentNotification.line2) {
      return `${currentNotification.line1} ${currentNotification.line2}`;
    }
    return "";
  };

  // Hàm để lấy nội dung hiển thị của thông báo tiếp theo
  const getNextContent = () => {
    if (nextNotification.type === "warning" && nextNotification.parts) {
      // Nếu đang chuyển từ thông báo khác sang warning, hiển thị phần đầu tiên
      return nextNotification.parts[0];
    } else if (nextNotification.line1 && nextNotification.line2) {
      return `${nextNotification.line1} ${nextNotification.line2}`;
    }
    return "";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      // Sau khi animation kết thúc, đổi nội dung và reset animation
      setTimeout(() => {
        // Kiểm tra xem thông báo hiện tại có phải là warning và còn phần tiếp theo không
        if (currentNotification.type === "warning" && currentNotification.parts &&
            warningPartIndex < currentNotification.parts.length - 1) {
          // Nếu còn phần tiếp theo, tăng warningPartIndex
          setWarningPartIndex(warningPartIndex + 1);
        } else {
          // Nếu không còn phần tiếp theo hoặc không phải warning, chuyển sang thông báo tiếp theo
          setCurrentNotification(nextNotification);
          setWarningPartIndex(0); // Reset warningPartIndex

          // Tính toán thông báo tiếp theo
          const nextIndex = (notificationIndex + 1) % (notifications.length + 1);
          setNotificationIndex(nextIndex);

          // Nếu nextIndex = 0, hiển thị thông báo ngẫu nhiên, ngược lại hiển thị thông báo cố định
          if (nextIndex === 0) {
            setNextNotification(getRandomNotification());
          } else {
            setNextNotification(notifications[nextIndex - 1]);
          }
        }

        setIsAnimating(false);
      }, 700); // Thời gian animation - khớp với duration-700

    }, 7000); // Đổi thông báo mỗi 7 giây để người dùng có thời gian đọc

    return () => clearInterval(interval);
  }, [notificationIndex, warningPartIndex, currentNotification, nextNotification]);

  return (
    <div className="flex items-center px-3 py-2 text-xs font-semibold bg-white border-b border-[#eee] overflow-hidden h-[36px]">
      <div className="flex-none mr-2 text-[#e62e2e] self-start mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      </div>
      <div className="flex-1 overflow-hidden relative h-6">
        <div
          className={`absolute w-full flex flex-col ${
            isAnimating ? 'animate-[smoothSlideUp_700ms_ease-in-out_forwards]' : ''
          }`}
          style={{
            transform: isAnimating ? 'translateY(0)' : 'translateY(0)',
            opacity: isAnimating ? 1 : 1
          }}
        >
          <div className="text-center text-[11px] text-amber-500 font-bold whitespace-normal leading-tight px-2">{getCurrentContent()}</div>
        </div>
        <div
          className={`absolute w-full flex flex-col ${
            !isAnimating ? 'hidden' : ''
          }`}
          style={{
            transform: 'translateY(100%)',
            opacity: 0
          }}
        >
          <div className="text-center text-[11px] text-amber-500 font-bold whitespace-normal leading-tight px-2">{getNextContent()}</div>
        </div>
      </div>
      <button className="ml-2 bg-[#e62e2e] text-white rounded px-2 py-0.5 text-xs whitespace-nowrap self-start mt-1">
        Chi tiết
      </button>
    </div>
  );
}
