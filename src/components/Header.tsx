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
          <button
            className="w-9 h-9 flex items-center justify-center"
            aria-label="Thông báo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <polyline points="3 9 12 15 21 9"></polyline>
            </svg>
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center"
            aria-label="Tải xuống"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
