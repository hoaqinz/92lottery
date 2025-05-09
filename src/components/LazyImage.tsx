'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  fill = false,
  sizes = '100vw',
  style,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  // Kiểm tra xem hình ảnh đã được tối ưu hóa chưa
  useEffect(() => {
    // Nếu src bắt đầu bằng /anh/ và không phải là /anh/optimized/
    if (src.startsWith('/anh/') && !src.startsWith('/anh/optimized/')) {
      // Tạo đường dẫn đến phiên bản tối ưu hóa
      const optimizedSrc = src.replace('/anh/', '/anh/optimized/');
      
      // Kiểm tra xem phiên bản tối ưu hóa có tồn tại không
      fetch(optimizedSrc, { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            setImageSrc(optimizedSrc);
          } else {
            setImageSrc(src);
          }
        })
        .catch(() => {
          setImageSrc(src);
        });
    } else {
      setImageSrc(src);
    }
  }, [src]);

  // Sử dụng Intersection Observer để theo dõi khi nào hình ảnh xuất hiện trong viewport
  useEffect(() => {
    if (!priority) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      const currentElement = document.getElementById(`lazy-image-${src.replace(/[^a-zA-Z0-9]/g, '-')}`);
      if (currentElement) {
        observer.observe(currentElement);
      }

      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    } else {
      setIsInView(true);
    }
  }, [src, priority]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  // Tạo placeholder cho hình ảnh
  const defaultBlurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+';

  return (
    <div
      id={`lazy-image-${src.replace(/[^a-zA-Z0-9]/g, '-')}`}
      className={`relative ${className} ${isLoaded ? 'loaded' : 'loading'}`}
      style={{
        ...style,
        width: fill ? '100%' : width ? `${width}px` : 'auto',
        height: fill ? '100%' : height ? `${height}px` : 'auto',
      }}
    >
      {(isInView || priority) && imageSrc && (
        <Image
          src={imageSrc}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          quality={quality}
          priority={priority}
          fill={fill}
          sizes={sizes}
          onLoad={handleImageLoad}
          placeholder={placeholder}
          blurDataURL={blurDataURL || defaultBlurDataURL}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            objectFit: 'cover',
          }}
        />
      )}
      {(!isLoaded || !isInView || !imageSrc) && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            opacity: isLoaded ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      )}
    </div>
  );
};

export default LazyImage;
