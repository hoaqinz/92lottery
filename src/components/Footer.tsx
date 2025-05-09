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
              href="/tat-ca-ve-92lottery"
              className="text-sm text-center py-2 px-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors font-bold"
            >
              Tất cả về 92Lottery
            </Link>
            <Link
              href="/tu-khoa-pho-bien-92lottery"
              className="text-sm text-center py-2 px-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors font-bold"
            >
              Từ khóa phổ biến
            </Link>
            <Link
              href="/gioi-thieu"
              className="text-sm text-center py-2 px-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors"
            >
              Giới thiệu
            </Link>
            <Link
              href="/danh-gia-92lottery-2025"
              className="text-sm text-center py-2 px-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors"
            >
              Đánh giá
            </Link>
            <Link
              href="/cach-choi-92lottery-hieu-qua"
              className="text-sm text-center py-2 px-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors"
            >
              Cách chơi
            </Link>
            <Link
              href="/so-sanh-92lottery"
              className="text-sm text-center py-2 px-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors"
            >
              So sánh
            </Link>
            <Link
              href="/lich-su-phat-trien-92lottery"
              className="text-sm text-center py-2 px-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors"
            >
              Lịch sử
            </Link>
            <Link
              href="/92lottery-co-lua-dao-khong"
              className="text-sm text-center py-2 px-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors"
            >
              Uy tín
            </Link>
            <Link
              href="/bao-mat-tai-khoan-92lottery"
              className="text-sm text-center py-2 px-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors"
            >
              Bảo mật
            </Link>
            <Link
              href="/app-92lottery"
              className="text-sm text-center py-2 px-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors"
            >
              Tải App
            </Link>
            <Link
              href="/sitemap-html"
              className="text-sm text-center py-2 px-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors col-span-2"
            >
              Sitemap
            </Link>
          </div>

          <div className="text-center text-xs opacity-80 mt-3">
            <div className="mb-2">
              <p className="font-semibold">Thông tin liên hệ:</p>
              <p>Thương hiệu: 92Lottery</p>
              <p>Email: support@92lottery.dev</p>
              <p>Số điện thoại: 0988 587 888</p>
              <p>Địa chỉ: 228 Trần Duy Hưng, Hà Nội, Việt Nam</p>
              <p>Zipcode: 100000</p>
            </div>
            <div className="mt-3 pt-2 border-t border-white/20">
              <p>© {new Date().getFullYear()} 92Lottery. All rights reserved.</p>
              <p className="mt-1">Trò chơi dành cho người trên 18 tuổi.</p>
              <p className="mt-2 text-[10px] opacity-70">#92lottery #trangchu92lottery #dangky92lottery #dangnhap92lottery #92lotterykhuyenmai</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
