"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200/80 dark:bg-gray-700/80",
        className
      )}
    />
  );
}

export function GameCardSkeleton() {
  return (
    <div className="mb-1">
      {/* Game card skeleton */}
      <div className="bg-gray-200 h-[100px] p-3 border-0 rounded-none relative">
        {/* Tiêu đề ở trên cùng bên trái */}
        <div className="absolute top-2 left-3">
          <Skeleton className="h-7 w-28" />
        </div>

        {/* Mô tả ở dưới cùng bên trái */}
        <div className="absolute bottom-3 left-3">
          <Skeleton className="h-4 w-48" />
        </div>

        {/* Icon ở bên phải */}
        <div className="absolute top-[30%] right-3 -translate-y-1/2">
          <Skeleton className="h-16 w-16" />
        </div>
      </div>

      {/* Winner info skeleton */}
      <div className="flex items-center bg-[#f8f8f8] rounded-b-lg px-2 py-2 shadow-sm">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="flex-1" />
        <Skeleton className="h-6 w-36 rounded-lg" />
      </div>
    </div>
  );
}

export function WinnerItemSkeleton() {
  return (
    <div className="flex items-center bg-[#f8f8f8] rounded-lg px-2 py-1">
      <Skeleton className="w-20 h-4" />
      <div className="flex-1" />
      <Skeleton className="w-24 h-6 rounded-lg" />
    </div>
  );
}

export function LeaderboardTopSkeleton() {
  return (
    <div className="flex justify-between items-end mb-2">
      <div className="flex flex-col items-center gap-1">
        <Skeleton className="w-12 h-12 rounded-full" />
        <Skeleton className="w-16 h-3 mt-1" />
        <Skeleton className="w-20 h-4 mt-1" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <Skeleton className="w-14 h-14 rounded-full" />
        <Skeleton className="w-16 h-3 mt-1" />
        <Skeleton className="w-24 h-4 mt-1" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <Skeleton className="w-12 h-12 rounded-full" />
        <Skeleton className="w-16 h-3 mt-1" />
        <Skeleton className="w-20 h-4 mt-1" />
      </div>
    </div>
  );
}
