// Cloudflare Worker for Next.js app
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle API routes if any
    if (url.pathname.startsWith("/api/")) {
      return new Response(JSON.stringify({ 
        status: "ok",
        message: "API endpoint",
        userAgent: request.headers.get("User-Agent"),
        timestamp: new Date().toISOString()
      }), {
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    // Handle preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    // Add special headers for Android compatibility
    const response = await env.ASSETS.fetch(request);
    
    // Clone response to modify headers
    const newResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        ...response.headers,
        // Android-specific headers
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "SAMEORIGIN",
        "X-XSS-Protection": "1; mode=block",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        // Cache control for better Android compatibility
        "Cache-Control": "public, max-age=3600, must-revalidate",
        // CORS headers
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });

    return newResponse;
  },
};
