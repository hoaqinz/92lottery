"use client";

import Link from "next/link";
import { SEO } from "@/lib/constants";


export default function Footer() {
  return (
    <footer className="bg-[#e62e2e] text-white px-3 py-4 rounded-b-lg">
      <div className="flex flex-col items-center">
        <div className="text-center mb-3">
          <h2 className="text-lg font-bold mb-1">Lottery</h2>
          <p className="text-xs opacity-80">Xổ số, casino và cá cược trực tuyến</p>
        </div>
        
        <div className="w-full border-t border-white/20 pt-3">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <Link 
              href="/about" 
              className="text-sm text-center py-2 px-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors"
            >
              Về chúng tôi
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-center py-2 px-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors"
            >
              Điều khoản
            </Link>
            <Link 
              href="/privacy" 
              className="text-sm text-center py-2 px-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors"
            >
              Chính sách
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-center py-2 px-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors"
            >
              Liên hệ
            </Link>
          </div>
          
          <div className="text-center text-xs opacity-70">
            <p>© {new Date().getFullYear()} Lottery. All rights reserved.</p>
            <p className="mt-1">Trò chơi dành cho người trên 18 tuổi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
