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
        <div className="flex items-center gap-2">
          <Link
            href="/huong-dan-dang-nhap"
            className="relative overflow-hidden px-3 py-1.5 rounded-md bg-white/20 text-white text-sm font-medium transition-all duration-300 hover:bg-white/30 hover:shadow-lg group"
            aria-label="Đăng nhập"
          >
            <span className="relative z-10">Đăng nhập</span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:animate-shimmer"></span>
          </Link>
          <Link
            href="/huong-dan-dang-ky"
            className="relative overflow-hidden px-3 py-1.5 rounded-md bg-yellow-500 text-white text-sm font-bold transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg group"
            aria-label="Đăng ký"
          >
            <span className="relative z-10">Đăng ký</span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:animate-shimmer"></span>
            <span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 group-hover:duration-200"></span>
          </Link>
        </div>
      </div>
    </header>
  );
}
