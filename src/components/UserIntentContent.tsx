'use client';

import React from 'react';

type UserIntent = 'informational' | 'navigational' | 'transactional' | 'commercial';

interface UserIntentContentProps {
  intent: UserIntent;
  children: React.ReactNode;
  className?: string;
  keywords?: string[];
}

const UserIntentContent: React.FC<UserIntentContentProps> = ({
  intent,
  children,
  className = '',
  keywords = []
}) => {
  // Different styling or structure based on user intent
  let intentSpecificClass = '';
  let intentSpecificStructure = null;
  
  switch (intent) {
    case 'informational':
      intentSpecificClass = 'informational-content';
      intentSpecificStructure = (
        <div className="mb-4 text-sm text-gray-600">
          <p>Bạn đang tìm hiểu về: {keywords.join(', ')}</p>
        </div>
      );
      break;
    case 'navigational':
      intentSpecificClass = 'navigational-content';
      intentSpecificStructure = (
        <div className="mb-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">Điều hướng nhanh:</p>
          <div className="flex space-x-2">
            {keywords.map((keyword, index) => (
              <a 
                key={index} 
                href={`#${keyword.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                {keyword}
              </a>
            ))}
          </div>
        </div>
      );
      break;
    case 'transactional':
      intentSpecificClass = 'transactional-content';
      intentSpecificStructure = (
        <div className="mb-4 bg-yellow-50 p-3 rounded-md">
          <p className="text-sm font-semibold">Hành động nhanh:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {keywords.map((keyword, index) => (
              <a 
                key={index} 
                href={`/${keyword.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-[#bc2022] text-white px-3 py-1 rounded-md hover:bg-[#a51b1b] transition-colors text-sm"
              >
                {keyword}
              </a>
            ))}
          </div>
        </div>
      );
      break;
    case 'commercial':
      intentSpecificClass = 'commercial-content';
      intentSpecificStructure = (
        <div className="mb-4 bg-blue-50 p-3 rounded-md">
          <p className="text-sm font-semibold">So sánh và đánh giá:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {keywords.map((keyword, index) => (
              <a 
                key={index} 
                href={`/so-sanh-${keyword.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                {keyword}
              </a>
            ))}
          </div>
        </div>
      );
      break;
  }
  
  return (
    <div className={`user-intent-content ${intentSpecificClass} ${className}`} data-intent={intent}>
      {intentSpecificStructure}
      {children}
    </div>
  );
};

export default UserIntentContent;
