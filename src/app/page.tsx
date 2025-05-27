import SafeImage from "@/components/SafeImage";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
      {/* HEADER */}
      <header className="bg-[#bc2022] rounded-t-lg relative px-3 pt-3 pb-1 flex flex-col items-center">
        <div className="flex items-center justify-between w-full">
          <SafeImage src="https://ext.same-assets.com/2315791583/2231750973.png" alt="Logo" width={100} height={38} />
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#fff3e6]">{/* Mail/Icon */}</button>
        </div>
        <div className="w-full mt-2">
          <SafeImage src="https://ext.same-assets.com/2315791583/2563901416.svg" alt="Banner" width={370} height={90} className="rounded-md w-full" />
        </div>
      </header>

      {/* VÒNG QUAY / THÔNG BÁO phần dưới banner */}
      <div className="flex items-center px-3 py-2 text-xs font-semibold bg-white border-b border-[#eee]">
        <span className="flex-1">Chúc mừng ID 12***32 đã là một trong những người may mắn nhận được giải thưởng của VÒNG QUAY M</span>
        <button className="ml-2 bg-[#bc2022] text-white rounded px-2 py-0.5 text-xs">Chi tiết</button>
      </div>

      {/* MENU CHỨC NĂNG */}
      <div className="grid grid-cols-4 gap-2 px-3 py-4 bg-white">
        <div className="flex flex-col items-center">
          <SafeImage src="https://ext.same-assets.com/2315791583/1708614472.png" alt="Lottery" width={50} height={50} />
          <span className="mt-1 text-xs font-medium text-gray-800">Lottery</span>
        </div>
        <div className="flex flex-col items-center">
          <SafeImage src="https://ext.same-assets.com/2315791583/3079872838.png" alt="Slots" width={50} height={50} />
          <span className="mt-1 text-xs font-medium text-gray-800">Slots</span>
        </div>
        <div className="flex flex-col items-center">
          <SafeImage src="https://ext.same-assets.com/2315791583/726095966.png" alt="Sports" width={50} height={50} />
          <span className="mt-1 text-xs font-medium text-gray-800">Sports</span>
        </div>
        <div className="flex flex-col items-center">
          <SafeImage src="https://ext.same-assets.com/2315791583/220548353.png" alt="Casino" width={50} height={50} />
          <span className="mt-1 text-xs font-medium text-gray-800">Casino</span>
        </div>
        <div className="flex flex-col items-center">
          <SafeImage src="https://ext.same-assets.com/2315791583/1684557050.png" alt="PVC" width={50} height={50} />
          <span className="mt-1 text-xs font-medium text-gray-800">PVC</span>
        </div>
        <div className="flex flex-col items-center">
          <SafeImage src="https://ext.same-assets.com/2315791583/2179188237.png" alt="Fishing" width={50} height={50} />
          <span className="mt-1 text-xs font-medium text-gray-800">Fishing</span>
        </div>
        <div className="flex flex-col items-center">
          <SafeImage src="https://ext.same-assets.com/2315791583/291592861.png" alt="Mini games" width={50} height={50} />
          <span className="mt-1 text-xs font-medium text-gray-800">Mini games</span>
        </div>
        <div className="flex flex-col items-center">
          <SafeImage src="https://ext.same-assets.com/2315791583/3938052756.png" alt="Popular" width={50} height={50} />
          <span className="mt-1 text-xs font-medium text-gray-800">Popular</span>
        </div>
      </div>

      {/* SECTION WIN GO, K3 LOTRE, 5D LOTRE, TRX WIN */}
      <div className="flex flex-col gap-3 px-3 py-4">
        {/* WIN GO */}
        <div className="bg-gradient-to-r from-[#7b90f7] to-[#89d9e7] rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <SafeImage src="https://ext.same-assets.com/2315791583/3465659352.png" alt="Win Go" width={34} height={34} />
            <span className="text-[1.12rem] font-bold text-white">Win Go</span>
          </div>
          <p className="text-xs text-white font-semibold">Đoán số Xanh/Đỏ/Tím để giành chiến thắng</p>
          {/* User list skeleton */}
        </div>
        {/* K3 Lotre */}
        <div className="bg-gradient-to-r from-[#cc7933] to-[#f6bf85] rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <SafeImage src="https://ext.same-assets.com/2315791583/2328052676.png" alt="K3 Lotre" width={34} height={34} />
            <span className="text-[1.12rem] font-bold text-white">K3 Lotre</span>
          </div>
          <p className="text-xs text-white font-semibold">Đoán số Lớn/Nhỏ/Lẻ/Chẵn</p>
        </div>
        {/* 5D Lotre */}
        <div className="bg-gradient-to-r from-[#7b90f7] to-[#cccefa] rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <SafeImage src="https://ext.same-assets.com/2315791583/2543983889.png" alt="5D Lotre" width={34} height={34} />
            <span className="text-[1.12rem] font-bold text-white">5D Lotre</span>
          </div>
          <p className="text-xs text-white font-semibold">Đoán số Lớn/Nhỏ/Lẻ/Chẵn</p>
        </div>
        {/* Trx Win */}
        <div className="bg-gradient-to-r from-[#a05b68] to-[#e7b6d1] rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <SafeImage src="https://ext.same-assets.com/2315791583/3265867209.png" alt="Trx Win" width={34} height={34} />
            <span className="text-[1.12rem] font-bold text-white">Trx Win</span>
          </div>
          <p className="text-xs text-white font-semibold">Đoán số Xanh/Đỏ/Tím để giành chiến thắng</p>
        </div>
      </div>

      {/* THÔNG TIN TRÚNG THƯỞNG */}
      <div className="bg-white px-3 pb-4">
        <h3 className="mb-2 font-semibold text-[#bc2022] text-base">Thông tin trúng thưởng</h3>
        {/* Winner skeleton list */}
        <ul className="grid gap-1">
          {[1, 2, 3, 4, 5, 6].map((i) => (<li key={i} className="flex items-center bg-[#f8f8f8] rounded-lg px-2 py-1">
            <div className="w-20 text-xs">Mem***TJD</div>
            <div className="flex-1" />
            <div className="text-xs font-bold bg-[#bc2022] text-white rounded-lg px-2 py-1">Nhận 58,800.00₫</div>
          </li>))}
        </ul>
      </div>

      {/* BXH THU NHẬP HÔM NAY */}
      <div className="bg-white px-3 pb-8">
        <h3 className="mb-2 font-semibold text-[#bc2022] text-base">BXH thu nhập hôm nay</h3>
        <div className="flex justify-between items-end mb-2">
          <div className="flex flex-col items-center gap-1">
            <SafeImage src="https://ext.same-assets.com/2315791583/3620247821.png" alt="2nd" width={46} height={46} />
            <div className="text-xs mt-1">Mem***ND5</div>
            <div className="text-sm font-bold text-[#7b90f7]">1,753,916,780.00₫</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <SafeImage src="https://ext.same-assets.com/2315791583/3321412344.png" alt="1st" width={54} height={54} />
            <div className="text-xs mt-1">Mem***BLN</div>
            <div className="text-sm font-bold text-[#bc2022]">2,940,000,000.00₫</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <SafeImage src="https://ext.same-assets.com/2315791583/233422598.png" alt="3rd" width={46} height={46} />
            <div className="text-xs mt-1">Mem***67T</div>
            <div className="text-sm font-bold text-[#cc7933]">1,376,904,900.00₫</div>
          </div>
        </div>
        <ul className="grid gap-1">
          {[1,2,3,4,5,6,7].map(i=>(<li key={i} className="flex items-center bg-[#f8f8f8] rounded-lg px-2 py-1">
            <div className="w-8 text-xs text-gray-500 text-right mr-1">{i+3}</div>
            <div className="w-32 text-xs">UserName</div>
            <div className="flex-1" />
            <div className="text-xs font-bold bg-[#bc2022] text-white rounded-lg px-2 py-1">X,000,000₫</div>
          </li>))}
        </ul>
      </div>

      {/* TAB BAR */}
      <footer className="fixed left-1/2 -translate-x-1/2 bottom-0 w-[420px] max-w-full z-10">
        <nav className="flex items-center bg-white shadow px-2 py-1 rounded-t-2xl border-t border-gray-200 justify-between">
          <button className="flex flex-col items-center flex-1 py-1">
            <SafeImage src="https://ext.same-assets.com/2315791583/2320907649.svg" alt="Trang chủ" width={30} height={30} />
            <span className="text-[10px] mt-0.5">Trang chủ</span>
          </button>
          <button className="flex flex-col items-center flex-1 py-1">
            <SafeImage src="https://ext.same-assets.com/2315791583/1998606599.svg" alt="Hoạt động" width={30} height={30} />
            <span className="text-[10px] mt-0.5">Hoạt động</span>
          </button>
          <div className="flex-1 flex items-center justify-center">
            <button className="bg-[#bc2022] w-[52px] h-[52px] rounded-full -mt-8 flex items-center justify-center border-4 border-white shadow-lg">
              <SafeImage src="https://ext.same-assets.com/2315791583/2838098675.svg" alt="Tiếp thị" width={32} height={32} />
            </button>
          </div>
          <button className="flex flex-col items-center flex-1 py-1">
            <SafeImage src="https://ext.same-assets.com/2315791583/2018733539.svg" alt="Ví" width={30} height={30} />
            <span className="text-[10px] mt-0.5">Ví</span>
          </button>
          <button className="flex flex-col items-center flex-1 py-1">
            <SafeImage src="https://ext.same-assets.com/2315791583/1367661487.svg" alt="Tôi" width={30} height={30} />
            <span className="text-[10px] mt-0.5">Tôi</span>
          </button>
        </nav>
      </footer>
    </div>
  );
}
