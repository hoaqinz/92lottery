type CloudflareImageOptions = {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'avif';
  fit?: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';
};

export function getCloudflareImageUrl(src: string, options: CloudflareImageOptions = {}) {
  // Nếu là URL từ bên ngoài, chuyển qua Cloudflare Images
  const base = 'https://92lottery.dev';
  const url = src.startsWith('http') ? src : `${base}${src}`;
  
  const params = new URLSearchParams();
  
  if (options.width) params.append('width', options.width.toString());
  if (options.height) params.append('height', options.height.toString());
  if (options.quality) params.append('quality', options.quality.toString());
  if (options.format) params.append('format', options.format);
  if (options.fit) params.append('fit', options.fit);
  
  // Thêm các tham số mặc định
  if (!options.format) params.append('format', 'auto');
  if (!options.quality) params.append('quality', '80');
  
  return `${url}?${params.toString()}`;
}