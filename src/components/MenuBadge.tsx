"use client";

import React from 'react';
import { FaFire, FaTrophy, FaNewspaper, FaVideo } from 'react-icons/fa';

type BadgeType = 'hot' | 'new' | 'live' | 'trophy';

interface MenuBadgeProps {
  type: BadgeType;
}

export default function MenuBadge({ type }: MenuBadgeProps) {
  // Xác định nội dung và màu sắc dựa trên loại badge
  const getBadgeContent = () => {
    switch (type) {
      case 'hot':
        return {
          text: 'HOT',
          icon: <FaFire className="mr-1 text-yellow-300" />,
          bgColor: 'bg-gradient-to-r from-red-600 to-orange-500',
          animation: 'animate-pulse-slow'
        };
      case 'new':
        return {
          text: 'NEW',
          icon: <FaNewspaper className="mr-1 text-white" />,
          bgColor: 'bg-gradient-to-r from-blue-600 to-indigo-500',
          animation: 'animate-bounce'
        };
      case 'live':
        return {
          text: 'LIVE',
          icon: <FaVideo className="mr-1 text-white" />,
          bgColor: 'bg-gradient-to-r from-red-600 to-red-500',
          animation: 'animate-pulse'
        };
      case 'trophy':
        return {
          text: '',
          icon: <FaTrophy className="text-yellow-300" />,
          bgColor: 'bg-gradient-to-r from-yellow-600 to-yellow-500',
          animation: 'animate-bounce'
        };
      default:
        return {
          text: '',
          icon: null,
          bgColor: 'bg-gray-500',
          animation: ''
        };
    }
  };

  const { text, icon, bgColor, animation } = getBadgeContent();

  return (
    <div className={`menu-badge ${bgColor} ${animation} z-20`} style={{ overflow: 'visible' }}>
      <div className="flex items-center justify-center" style={{ overflow: 'visible' }}>
        {icon}
        {text && <span>{text}</span>}
      </div>
    </div>
  );
}
