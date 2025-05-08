'use client';

import React, { useEffect, useState, useRef } from 'react';

interface AmountDisplayProps {
  amount: string;
  className?: string;
}

const AmountDisplay: React.FC<AmountDisplayProps> = ({ amount, className = '' }) => {
  const [displayAmount, setDisplayAmount] = useState(amount);
  const [isUpdating, setIsUpdating] = useState(false);
  const prevAmountRef = useRef(amount);

  useEffect(() => {
    // Nếu số tiền thay đổi, thêm hiệu ứng
    if (amount !== prevAmountRef.current) {
      setIsUpdating(true);
      
      // Sau 1 giây, cập nhật số tiền hiển thị và tắt hiệu ứng
      const timer = setTimeout(() => {
        setDisplayAmount(amount);
        setIsUpdating(false);
      }, 1000);
      
      // Lưu số tiền mới vào ref
      prevAmountRef.current = amount;
      
      return () => clearTimeout(timer);
    }
  }, [amount]);

  return (
    <span className={`transition-all duration-300 ${isUpdating ? 'text-green-500 scale-110' : ''} ${className}`}>
      {displayAmount}
    </span>
  );
};

export default AmountDisplay;
