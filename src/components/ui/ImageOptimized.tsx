import Image, { ImageProps } from 'next/image';

interface ImageOptimizedProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  className?: string;
}

/**
 * Component hình ảnh tối ưu hóa sử dụng Next.js Image
 * Tự động áp dụng lazy loading, tối ưu hóa kích thước và định dạng
 */
export default function ImageOptimized({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: ImageOptimizedProps) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={props.priority ? 'eager' : 'lazy'}
        className={`object-cover transition-all duration-300 ${props.className || ''}`}
        {...props}
      />
    </div>
  );
}
