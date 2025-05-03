"use client";

import Image from "next/image";

type TabItem = {
  icon: React.ReactNode;
  label: string;
  alt: string;
  isCenter?: boolean;
};

const tabItems: TabItem[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.3" cx="27" cy="28" r="18" fill="#e62e2e"></circle>
        <path fillRule="evenodd" clipRule="evenodd" d="M23.6599 5.27799L5.76039 17.3574V42.8644H15.8404V32.4244C15.8404 29.6409 18.0969 27.3844 20.8804 27.3844H27.2404C30.0239 27.3844 32.2804 29.6409 32.2804 32.4244V36.8044H28.9204V32.4244C28.9204 31.4965 28.1682 30.7444 27.2404 30.7444H20.8804C19.9526 30.7444 19.2004 31.4965 19.2004 32.4244V43.5844C19.2004 45.0424 18.0184 46.2244 16.5604 46.2244H5.04039C3.58236 46.2244 2.40039 45.0424 2.40039 43.5844V16.9747C2.40039 16.0973 2.83631 15.2772 3.56361 14.7863L22.4377 2.04925C23.1552 1.56501 24.0926 1.55594 24.8194 2.02622L44.5146 14.7702C45.2664 15.2567 45.7204 16.0911 45.7204 16.9866V43.5844C45.7204 45.0424 44.5384 46.2244 43.0804 46.2244H30.6004V42.8644H42.3604V17.3783L23.6599 5.27799Z" fill="#e62e2e"></path>
        <path d="M32.4004 44.5444C32.4004 45.4723 31.6482 46.2244 30.7204 46.2244C29.7926 46.2244 29.0404 45.4723 29.0404 44.5444C29.0404 43.6166 29.7926 42.8644 30.7204 42.8644C31.6482 42.8644 32.4004 43.6166 32.4004 44.5444Z" fill="#e62e2e"></path>
        <path d="M32.2804 36.7444C32.2804 37.6723 31.5282 38.4244 30.6004 38.4244C29.6726 38.4244 28.9204 37.6723 28.9204 36.7444C28.9204 35.8166 29.6726 35.0644 30.6004 35.0644C31.5282 35.0644 32.2804 35.8166 32.2804 36.7444Z" fill="#e62e2e"></path>
      </svg>
    ),
    label: "Trang chủ",
    alt: "Trang chủ"
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.3" cx="27" cy="24" r="18" fill="currentColor"></circle>
        <path fillRule="evenodd" clipRule="evenodd" d="M17.4489 16.6808C17.4491 16.6697 17.4492 16.6586 17.4492 16.6475C17.4492 15.681 16.6833 14.8975 15.7168 14.8975C14.7529 14.8975 13.9263 15.6767 13.9219 16.6396H13.9209C13.9212 16.6432 13.9215 16.6469 13.9219 16.6505C13.9221 16.7723 13.9355 16.8911 13.9606 17.0059C14.5925 21.9877 18.8462 25.8397 23.9996 25.8397C29.1037 25.8397 33.3252 22.0611 34.0195 17.1487C34.0666 16.9905 34.0918 16.8229 34.0918 16.6494C34.0918 15.6829 33.3083 14.8994 32.3418 14.8994C31.3753 14.8994 30.5469 15.6829 30.5469 16.6494C30.5469 16.6662 30.5471 16.6829 30.5476 16.6996C30.0741 19.8911 27.3228 22.3397 23.9996 22.3397C20.67 22.3397 17.9144 19.8815 17.4489 16.6808Z" fill="currentColor"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M10.5124 5.2H37.4875C40.0604 5.2 42.1758 7.22874 42.2833 9.79945L42.7935 22H42.8V22.0005C42.8 22.8841 43.5163 23.6005 44.4 23.6005C45.2837 23.6005 46 22.8841 46 22.0005C46 21.9341 45.996 21.8686 45.9881 21.8044L45.4805 9.66575C45.3013 5.38123 41.7757 2 37.4875 2H10.5124C6.2241 2 2.69852 5.38123 2.51935 9.66575L1.34844 37.6657C1.15836 42.2112 4.79203 46 9.34145 46H38.6584C43.2078 46 46.8415 42.2112 46.6514 37.6657L46.3308 30H46.3303C46.3069 29.1368 45.5998 28.4442 44.7309 28.4442C43.862 28.4442 43.1549 29.1368 43.1315 30H43.128L43.1312 30.0763C43.1317 30.1004 43.1327 30.1243 43.1342 30.148L43.4542 37.7994C43.5682 40.5267 41.388 42.8 38.6584 42.8H9.34145C6.6118 42.8 4.4316 40.5267 4.54565 37.7994L5.71656 9.79945C5.82406 7.22874 7.93941 5.2 10.5124 5.2Z" fill="currentColor"></path>
      </svg>
    ),
    label: "Hoạt động",
    alt: "Hoạt động"
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 57 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.93876 1.50122C9.69785 0.55236 10.8471 0 12.0622 0H44.2172C45.4324 0 46.5816 0.552359 47.3407 1.50122L55.0792 11.1744C55.5056 11.7073 55.828 12.2943 56.0469 12.9092H0.232598C0.451468 12.2943 0.773925 11.7073 1.20023 11.1744L8.93876 1.50122ZM0 16.091H56.2795C56.0896 17.0496 55.664 17.9709 55.0034 18.7637L31.2126 47.3125C29.6134 49.2316 26.666 49.2316 25.0669 47.3125L1.27612 18.7637C0.615521 17.9709 0.189841 17.0496 0 16.091ZM20.5563 22.0266L27.7513 32.1286C27.9512 32.4093 28.3685 32.4083 28.5671 32.1267L35.6853 22.0338C36.1425 21.3856 36.8863 21 37.6795 21C39.0272 21 40.1198 22.0925 40.1198 23.4403V23.6393H39.8972C39.5712 23.6393 39.1148 23.8877 38.5931 24.5708C38.0874 25.2331 32.1271 33.2938 28.9417 37.6047C28.7578 37.8535 28.467 38 28.1577 38C27.8515 38 27.5632 37.8562 27.379 37.6117L17.3204 24.2603C17.3204 24.2603 16.9258 23.6393 16.2608 23.6393H16.1198V23.445C16.1198 22.0947 17.2144 21 18.5648 21C19.3556 21 20.0975 21.3825 20.5563 22.0266Z" fill="currentColor" />
      </svg>
    ),
    label: "Tiếp thị",
    alt: "Tiếp thị",
    isCenter: true
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.3" cx="28" cy="24" r="18" fill="currentColor"></circle>
        <path d="M3 23C3 17.016 6.526 12.836 12.0085 12.132C12.5675 12.044 13.148 12 13.75 12H35.25C35.809 12 36.3465 12.022 36.8625 12.11C42.4095 12.77 46 16.972 46 23V34C46 40.6 41.7 45 35.25 45H13.75C7.3 45 3 40.6 3 34V31.822" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M46 23.7241H39.548C37.1822 23.7241 35.2466 25.5862 35.2466 27.8621C35.2466 30.1379 37.1822 32 39.548 32H46M37 12C36.4838 11.9172 35.8058 12 35.2466 12H14C13.3978 12 12.5592 11.9172 12 12C12 12 12.7312 11.3517 13.2474 10.8551L20.2371 4.11027C21.6566 2.75836 23.5733 2 25.5708 2C27.5682 2 29.4849 2.75836 30.9044 4.11027L34.6681 7.77235C36.0445 9.0758 39.548 12 37 12Z" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
    label: "Ví",
    alt: "Ví"
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.3" cx="28" cy="24" r="18" fill="currentColor"></circle>
        <path fillRule="evenodd" clipRule="evenodd" d="M24.08 5.27992C13.7412 5.27992 5.36 13.6612 5.36 23.9999C5.36 34.3387 13.7412 42.7199 24.08 42.7199C34.4188 42.7199 42.8 34.3387 42.8 23.9999V15.2399H46.16V23.9999C46.16 36.1944 36.2744 46.0799 24.08 46.0799C11.8856 46.0799 2 36.1944 2 23.9999C2 11.8055 11.8856 1.91992 24.08 1.91992H44.36V5.27992H24.08Z" fill="currentColor"></path>
        <path d="M46.16 3.59992C46.16 4.52776 45.4078 5.27992 44.48 5.27992C43.5522 5.27992 42.8 4.52776 42.8 3.59992C42.8 2.67208 43.5522 1.91992 44.48 1.91992C45.4078 1.91992 46.16 2.67208 46.16 3.59992Z" fill="currentColor"></path>
        <path d="M46.16 15.1199C46.16 16.0478 45.4078 16.7999 44.48 16.7999C43.5522 16.7999 42.8 16.0478 42.8 15.1199C42.8 14.1921 43.5522 13.4399 44.48 13.4399C45.4078 13.4399 46.16 14.1921 46.16 15.1199Z" fill="currentColor"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M15.8061 29.5825C16.5007 28.9674 17.5624 29.0317 18.1776 29.7263C19.3272 31.0242 20.9262 32.5202 23.64 32.5202C26.5114 32.5202 28.4968 31.0925 29.4445 29.9868C30.0483 29.2824 31.1089 29.2008 31.8133 29.8046C32.5178 30.4085 32.5994 31.469 31.9956 32.1735C30.5432 33.8679 27.6806 35.8802 23.64 35.8802C19.4418 35.8802 16.9928 33.4562 15.6624 31.9541C15.0472 31.2595 15.1115 30.1977 15.8061 29.5825Z" fill="currentColor"></path>
      </svg>
    ),
    label: "Tôi",
    alt: "Tôi"
  }
];

export default function TabBar() {
  return (
    <footer className="fixed left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[420px] z-10 safe-bottom">
      <nav
        className="grid grid-cols-5 shadow px-1 rounded-t-2xl h-[69px] w-full"
        style={{
          backgroundImage: "url('/anh/nenfooter.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
        {tabItems.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {item.isCenter ? (
              <>
                <div className="flex-1 flex items-center justify-center">
                  <button
                    className="bg-[#e62e2e] w-[48px] h-[48px] rounded-full -mt-10 flex items-center justify-center border border-white shadow-lg hover:bg-[#d42a2a] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e62e2e] relative overflow-visible marketing-button"
                    aria-label={item.label}
                  >
                    {/* Hiệu ứng sóng lan tỏa */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="ripple-effect">
                        <div className="ripple-1" style={{ borderColor: 'rgba(255, 215, 0, 0.9)', boxShadow: '0 0 8px rgba(255, 215, 0, 0.7), inset 0 0 5px rgba(255, 215, 0, 0.4)' }}></div>
                        <div className="ripple-2" style={{ borderColor: 'rgba(255, 215, 0, 0.9)', boxShadow: '0 0 8px rgba(255, 215, 0, 0.7), inset 0 0 5px rgba(255, 215, 0, 0.4)' }}></div>
                        <div className="ripple-3" style={{ borderColor: 'rgba(255, 215, 0, 0.9)', boxShadow: '0 0 8px rgba(255, 215, 0, 0.7), inset 0 0 5px rgba(255, 215, 0, 0.4)' }}></div>
                        <div className="ripple-4" style={{ borderColor: 'rgba(255, 215, 0, 0.9)', boxShadow: '0 0 8px rgba(255, 215, 0, 0.7), inset 0 0 5px rgba(255, 215, 0, 0.4)' }}></div>
                        <div className="ripple-5" style={{ borderColor: 'rgba(255, 215, 0, 0.9)', boxShadow: '0 0 8px rgba(255, 215, 0, 0.7), inset 0 0 5px rgba(255, 215, 0, 0.4)' }}></div>
                      </div>
                    </div>
                    <div className="relative z-10 diamond-icon scale-90 text-white">
                      {item.icon}
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="w-[22px] h-[22px] flex items-center justify-center text-gray-600">
                  {item.icon}
                </div>
              </div>
            )}
            {/* Tất cả các text đều nằm ở cùng một vị trí */}
            <div className="h-[16px] flex items-center justify-center absolute bottom-1">
              <span className="text-[11px] font-semibold tracking-wide text-gray-600">{item.label}</span>
            </div>
          </div>
        ))}
      </nav>
    </footer>
  );
}
