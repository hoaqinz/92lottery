/**
 * Hàm tạo URL cho hình ảnh với kích thước tối ưu
 * @param src URL gốc của hình ảnh
 * @param width Chiều rộng mong muốn
 * @param quality Chất lượng hình ảnh (1-100)
 * @returns URL đã được tối ưu
 */
export function getOptimizedImageUrl(src: string, width: number = 0, quality: number = 80): string {
  // Nếu là URL từ ext.same-assets.com, giữ nguyên
  if (src.startsWith('https://ext.same-assets.com/')) {
    return src;
  }
  
  // Nếu là URL từ unsplash, thêm tham số kích thước
  if (src.includes('unsplash.com')) {
    const url = new URL(src);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('q', quality.toString());
    url.searchParams.set('auto', 'format');
    url.searchParams.set('fit', 'crop');
    return url.toString();
  }
  
  // Trả về URL gốc nếu không phù hợp với các điều kiện trên
  return src;
}

/**
 * Hàm tạo danh sách các kích thước hình ảnh cho thuộc tính srcSet
 * @param src URL gốc của hình ảnh
 * @param sizes Mảng các kích thước cần tạo
 * @returns Chuỗi srcSet
 */
export function generateSrcSet(src: string, sizes: number[] = [320, 640, 768, 1024]): string {
  if (!src.includes('unsplash.com')) {
    return '';
  }
  
  return sizes
    .map((size) => `${getOptimizedImageUrl(src, size)} ${size}w`)
    .join(', ');
}

/**
 * Hàm tạo thuộc tính sizes cho thẻ img
 * @param defaultSize Kích thước mặc định
 * @returns Chuỗi sizes
 */
export function generateSizes(defaultSize: string = '100vw'): string {
  return `(max-width: 768px) 100vw, ${defaultSize}`;
}
