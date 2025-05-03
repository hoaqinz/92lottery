/**
 * Hàm tạo URL cho hình ảnh với kích thước tối ưu
 * @param src URL gốc của hình ảnh
 * @param width Chiều rộng mong muốn
 * @param quality Chất lượng hình ảnh (1-100)
 * @returns URL đã được tối ưu
 */
export function getOptimizedImageUrl(src: string, width: number = 0, quality: number = 80): string {
  // Nếu là URL từ ext.same-assets.com, thêm tham số cho Cloudflare Images
  if (src.startsWith('https://ext.same-assets.com/')) {
    const url = new URL(src);
    url.searchParams.set('format', 'auto'); // Tự động chọn WebP hoặc AVIF
    url.searchParams.set('quality', quality.toString());
    if (width > 0) {
      url.searchParams.set('width', width.toString());
    }
    return url.toString();
  }
  
  // Nếu là URL từ thư mục public, sử dụng Cloudflare CDN
  if (src.startsWith('/')) {
    const baseUrl = 'https://92lottery.dev';
    const url = new URL(src, baseUrl);
    url.searchParams.set('format', 'auto');
    url.searchParams.set('quality', quality.toString());
    if (width > 0) {
      url.searchParams.set('width', width.toString());
    }
    return url.toString();
  }
  
  return src;
}

/**
 * Hàm tạo danh sách các kích thước hình ảnh cho thuộc tính srcSet
 * @param src URL gốc của hình ảnh
 * @param sizes Mảng các kích thước cần tạo
 * @returns Chuỗi srcSet
 */
export function generateSrcSet(src: string, sizes: number[] = [320, 480, 768, 1024]): string {
  if (!src) return '';
  
  return sizes
    .map((size) => `${getOptimizedImageUrl(src, size)} ${size}w`)
    .join(', ');
}

/**
 * Hàm tạo thuộc tính sizes cho thẻ img
 * @param defaultSize Kích thước mặc định cho màn hình lớn
 * @returns Chuỗi sizes
 */
export function generateSizes(defaultSize: string = '100vw'): string {
  return `
    (max-width: 420px) 100vw,
    (max-width: 768px) 420px,
    ${defaultSize}
  `.trim();
}
