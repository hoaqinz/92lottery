"use client";

import Image from "next/image";
import Link from "next/link";
import { SEO } from "@/lib/constants";

export default function Header() {
  return (
    <header className="bg-[#e62e2e] relative px-3 h-[49px] flex items-center">
      <div className="flex items-center justify-between w-full">
        <Link href="/" title={SEO.title}>
          <div className="flex items-center">
            <Image
              src="https://ext.same-assets.com/2315791583/2231750973.png"
              alt="92Lottery - Cá cược xổ số & Casino trực tuyến"
              width={100}
              height={28}
              className="mr-1"
              priority
            />
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/huong-dan-dang-nhap"
            className="relative px-4 py-1.5 rounded-full border border-white/50 text-white text-sm font-medium transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] group"
            aria-label="Đăng nhập"
          >
            <span>Đăng nhập</span>
          </Link>
          <Link
            href="/huong-dan-dang-ky"
            className="relative px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white text-sm font-bold transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:from-amber-400 hover:to-red-400"
            aria-label="Đăng ký"
          >
            <span>Đăng ký</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
