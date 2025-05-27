// Custom image loader for Cloudflare Workers
export default function cloudflareImageLoader({ src, width, quality }) {
  // For external URLs, return as-is
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images, you might want to use Cloudflare Images
  // For now, just return the src as-is
  return src;
}
