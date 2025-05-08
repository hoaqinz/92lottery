import { formatNumberWithCommas } from '@/lib/utils';

// Định nghĩa interface cho thành viên trong bảng xếp hạng
export interface RankingMember {
  username: string;
  amount: string;
  position: number;
  rawAmount: number; // Số tiền thực tế không có định dạng
}

// Danh sách tên người dùng ngẫu nhiên
const usernames = [
  'Mem***5US', 'Mem***6EN', 'Mem***X8W', 'Mem***MPD', 'Mem***SOX',
  'Mem***POU', 'LH***N', 'Tin***inh', 'Tri***uDõ', 'Mem***XVF',
  'Mem***ABC', 'Mem***123', 'Mem***XYZ', 'Mem***789', 'Mem***QWE',
  'Mem***RTY', 'Mem***UIO', 'Mem***JKL', 'Mem***BNM', 'Mem***ZXC'
];

// Phạm vi số tiền cho mỗi vị trí
const amountRanges = [
  { min: 5000000000, max: 8000000000 },   // Vị trí 1
  { min: 2000000000, max: 5000000000 },   // Vị trí 2
  { min: 1000000000, max: 2000000000 },   // Vị trí 3
  { min: 800000000, max: 1000000000 },    // Vị trí 4
  { min: 600000000, max: 800000000 },     // Vị trí 5
  { min: 400000000, max: 600000000 },     // Vị trí 6
  { min: 300000000, max: 400000000 },     // Vị trí 7
  { min: 200000000, max: 300000000 },     // Vị trí 8
  { min: 150000000, max: 200000000 },     // Vị trí 9
  { min: 90000000, max: 150000000 }       // Vị trí 10
];

// Lấy ngẫu nhiên một số trong khoảng
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Lấy ngẫu nhiên một phần tử từ mảng
function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

// Tạo danh sách 10 người dùng ngẫu nhiên
function generateRandomUsers(): RankingMember[] {
  // Tạo một bản sao của mảng usernames để không ảnh hưởng đến mảng gốc
  const shuffledUsernames = [...usernames].sort(() => 0.5 - Math.random());
  
  // Lấy 10 username đầu tiên
  const selectedUsernames = shuffledUsernames.slice(0, 10);
  
  // Tạo danh sách thành viên
  return selectedUsernames.map((username, index) => {
    const position = index + 1;
    const range = amountRanges[index];
    const rawAmount = getRandomNumber(range.min, range.max);
    
    return {
      username,
      amount: `${formatNumberWithCommas(rawAmount.toFixed(2))}₫`,
      position,
      rawAmount
    };
  });
}

// Tăng số tiền ngẫu nhiên cho mỗi thành viên
function increaseAmount(member: RankingMember): RankingMember {
  const position = member.position;
  const range = amountRanges[position - 1];
  
  // Tính toán mức tăng ngẫu nhiên (0.5% đến 2% của số tiền hiện tại)
  const increasePercentage = getRandomNumber(5, 20) / 1000;
  const increaseAmount = Math.floor(member.rawAmount * increasePercentage);
  
  // Đảm bảo số tiền mới không vượt quá giới hạn tối đa
  const newRawAmount = Math.min(member.rawAmount + increaseAmount, range.max);
  
  return {
    ...member,
    rawAmount: newRawAmount,
    amount: `${formatNumberWithCommas(newRawAmount.toFixed(2))}₫`
  };
}

// Lưu trữ dữ liệu bảng xếp hạng
let rankingData: RankingMember[] = [];
let lastResetDate: Date | null = null;
let lastUpdateTime: Date | null = null;

// Khởi tạo dữ liệu ban đầu
function initializeRankingData(): void {
  rankingData = generateRandomUsers();
  lastResetDate = new Date();
  lastUpdateTime = new Date();
}

// Cập nhật dữ liệu bảng xếp hạng
function updateRankingData(): void {
  const now = new Date();
  
  // Kiểm tra xem có cần reset dữ liệu không (đổi ngày hoặc chưa có dữ liệu)
  if (!lastResetDate || now.getDate() !== lastResetDate.getDate() || now.getMonth() !== lastResetDate.getMonth() || now.getFullYear() !== lastResetDate.getFullYear()) {
    initializeRankingData();
    return;
  }
  
  // Kiểm tra xem đã đến lúc cập nhật chưa (2 tiếng một lần)
  if (lastUpdateTime && (now.getTime() - lastUpdateTime.getTime() < 2 * 60 * 60 * 1000)) {
    return;
  }
  
  // Cập nhật số tiền cho mỗi thành viên
  rankingData = rankingData.map(member => increaseAmount(member));
  
  // Cập nhật thời gian cập nhật gần nhất
  lastUpdateTime = now;
}

// Lấy dữ liệu bảng xếp hạng
export function getRankingData(): RankingMember[] {
  // Nếu chưa có dữ liệu, khởi tạo
  if (rankingData.length === 0) {
    initializeRankingData();
  } else {
    // Nếu đã có dữ liệu, cập nhật
    updateRankingData();
  }
  
  // Sắp xếp theo vị trí
  return [...rankingData].sort((a, b) => a.position - b.position);
}

// Lấy thời gian cập nhật gần nhất
export function getLastUpdateTime(): Date | null {
  return lastUpdateTime;
}

// Lấy thời gian reset gần nhất
export function getLastResetDate(): Date | null {
  return lastResetDate;
}
