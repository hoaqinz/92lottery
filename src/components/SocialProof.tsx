'use client';

import React from 'react';
import Link from 'next/link';
import OptimizedImage from './OptimizedImage';

interface SocialProofProps {
  type: 'testimonials' | 'social-media' | 'brand-mentions' | 'reviews';
  items: SocialProofItem[];
  className?: string;
}

interface SocialProofItem {
  id: string;
  author: {
    name: string;
    avatar?: string;
    title?: string;
    url?: string;
  };
  content: string;
  rating?: number;
  date?: string;
  source?: {
    name: string;
    url: string;
    icon?: string;
  };
}

const SocialProof: React.FC<SocialProofProps> = ({
  type,
  items,
  className = ''
}) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const renderTestimonials = () => {
    return (
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-3">
              {item.author.avatar && (
                <div className="mr-3">
                  <OptimizedImage
                    src={item.author.avatar}
                    alt={item.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              )}
              <div>
                <p className="font-semibold">{item.author.name}</p>
                {item.author.title && (
                  <p className="text-sm text-gray-600">{item.author.title}</p>
                )}
              </div>
            </div>
            <p className="text-gray-700 italic">"{item.content}"</p>
            {item.rating && (
              <div className="mt-2">{renderStars(item.rating)}</div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderSocialMedia = () => {
    return (
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                {item.author.avatar && (
                  <div className="mr-3">
                    <OptimizedImage
                      src={item.author.avatar}
                      alt={item.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold">{item.author.name}</p>
                  {item.date && (
                    <p className="text-xs text-gray-500">{item.date}</p>
                  )}
                </div>
              </div>
              {item.source && item.source.icon && (
                <OptimizedImage
                  src={item.source.icon}
                  alt={item.source.name}
                  width={24}
                  height={24}
                />
              )}
            </div>
            <p className="text-gray-700">{item.content}</p>
            {item.source && (
              <div className="mt-2 text-sm">
                <a
                  href={item.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Xem trên {item.source.name}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderBrandMentions = () => {
    return (
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="font-semibold">{item.source?.name}</p>
                {item.date && (
                  <p className="text-xs text-gray-500">{item.date}</p>
                )}
              </div>
              {item.source && item.source.icon && (
                <OptimizedImage
                  src={item.source.icon}
                  alt={item.source.name}
                  width={80}
                  height={30}
                />
              )}
            </div>
            <p className="text-gray-700">{item.content}</p>
            {item.source && (
              <div className="mt-2 text-sm">
                <a
                  href={item.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Đọc bài viết đầy đủ
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderReviews = () => {
    return (
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                {item.author.avatar && (
                  <div className="mr-3">
                    <OptimizedImage
                      src={item.author.avatar}
                      alt={item.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold">{item.author.name}</p>
                  {item.date && (
                    <p className="text-xs text-gray-500">{item.date}</p>
                  )}
                </div>
              </div>
              {item.rating && (
                <div>{renderStars(item.rating)}</div>
              )}
            </div>
            <p className="text-gray-700">{item.content}</p>
            {item.source && (
              <div className="mt-2 text-sm">
                <a
                  href={item.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Xem trên {item.source.name}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    switch (type) {
      case 'testimonials':
        return renderTestimonials();
      case 'social-media':
        return renderSocialMedia();
      case 'brand-mentions':
        return renderBrandMentions();
      case 'reviews':
        return renderReviews();
      default:
        return null;
    }
  };

  return (
    <div className={`social-proof ${className}`} data-type={type}>
      {renderContent()}
    </div>
  );
};

export default SocialProof;
