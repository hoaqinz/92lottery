"use client";

import Image from "next/image";
import MenuBadge from "./MenuBadge";

type MenuItem = {
  icon: string;
  label: string;
  alt: string;
  description?: string;
  badge?: 'hot' | 'new' | 'live' | 'trophy';
};

const menuItems: MenuItem[] = [
  {
    icon: "https://ext.same-assets.com/2315791583/1708614472.png",
    label: "Xổ số",
    alt: "Xổ số trực tuyến",
    description: "Xổ số trực tuyến với nhiều giải thưởng hấp dẫn",
    badge: "hot"
  },
  {
    icon: "https://ext.same-assets.com/2315791583/3079872838.png",
    label: "Slots",
    alt: "Slots",
    description: "Trò chơi Slots hấp dẫn",
    badge: "new"
  },
  {
    icon: "https://ext.same-assets.com/2315791583/726095966.png",
    label: "Thể thao",
    alt: "Thể thao",
    description: "Cá cược thể thao",
    badge: "live"
  },
  {
    icon: "https://ext.same-assets.com/2315791583/220548353.png",
    label: "Casino",
    alt: "Casino",
    description: "Casino trực tuyến",
    badge: "live"
  },
  {
    icon: "https://ext.same-assets.com/2315791583/1684557050.png",
    label: "Game bài",
    alt: "Game bài",
    description: "Game bài đổi thưởng",
    badge: "new"
  },
  {
    icon: "https://ext.same-assets.com/2315791583/2179188237.png",
    label: "Bắn cá",
    alt: "Bắn cá",
    description: "Trò chơi bắn cá",
    badge: "new"
  },
  {
    icon: "https://ext.same-assets.com/2315791583/291592861.png",
    label: "Mini game",
    alt: "Mini game",
    description: "Các trò chơi mini",
    badge: "hot"
  },
  {
    icon: "https://ext.same-assets.com/2315791583/3938052756.png",
    label: "Phổ biến",
    alt: "Phổ biến",
    description: "Trò chơi phổ biến",
    badge: "trophy"
  }
];

export default function MenuGrid() {
  return (
    <div className="dock-container py-2 bg-white" style={{ overflow: 'visible' }}>
      <div className="dock" style={{ overflow: 'visible' }}>
        {menuItems.map((item, index) => (
          <div key={index} className="dock-item-container" style={{ position: 'relative', overflow: 'visible', isolation: 'isolate' }}>
            <div className="dock-item">
              <button
                className="flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-[#e62e2e] rounded-lg p-0.5"
                aria-label={item.description}
                title={item.description}
              >
                <div className="w-14 h-14 mb-1 flex items-center justify-center relative overflow-visible" style={{ position: 'relative', zIndex: 1, isolation: 'isolate' }}>
                  {/* Khung tròn viền - hiệu ứng live stream */}
                  <div className="absolute inset-0 rounded-full border border-[#e62e2e] shadow-sm dock-border" style={{ overflow: 'visible' }}>
                    {/* Thêm badge tương ứng */}
                    {item.badge && <MenuBadge type={item.badge} />}
                  </div>

                  {/* Hiệu ứng lóe sáng - giới hạn trong vòng tròn */}
                  <div className="absolute inset-0 rounded-full overflow-hidden menu-icon-container">
                    <div className="absolute inset-0 menu-icon-shine z-20"></div>
                  </div>

                  {/* Hiệu ứng pulse nhẹ */}
                  <div className="absolute inset-1 rounded-full opacity-30 animate-pulse-slow"></div>

                  {/* Hiệu ứng glow */}
                  <div className="absolute inset-0 rounded-full animate-glow"></div>

                  {/* Hiệu ứng sóng lan tỏa - đặt ở trung tâm */}
                  <div className="absolute inset-0 flex items-center justify-center" style={{ overflow: 'visible' }}>
                    <div className="ripple-effect">
                      <div className="ripple-1"></div>
                      <div className="ripple-2"></div>
                      <div className="ripple-3"></div>
                      <div className="ripple-4"></div>
                      <div className="ripple-5"></div>
                    </div>
                  </div>

                  <Image
                    src={item.icon || "https://via.placeholder.com/64"}
                    alt={item.alt}
                    width={56}
                    height={56}
                    className="object-contain z-10 relative transition-all duration-200"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))"
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-gray-800">{item.label}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
