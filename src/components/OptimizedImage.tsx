'use client';

import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy'
}) => {
  // Determine if the image is already a WebP format
  const isWebP = src.toLowerCase().endsWith('.webp');
  
  // If not WebP, we can add a query parameter to request Next.js to convert it
  const optimizedSrc = isWebP ? src : `${src}?format=webp`;

  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={loading}
      quality={90}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

export default OptimizedImage;
