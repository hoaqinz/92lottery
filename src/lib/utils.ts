import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Định dạng số với dấu phẩy ngăn cách hàng nghìn
 * @param value Số cần định dạng
 * @returns Chuỗi đã được định dạng
 */
export function formatNumberWithCommas(value: string | number): string {
  // Chuyển đổi giá trị thành chuỗi
  const stringValue = typeof value === 'number' ? value.toString() : value;

  // Tách phần nguyên và phần thập phân
  const parts = stringValue.split('.');

  // Định dạng phần nguyên với dấu phẩy
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Kết hợp lại phần nguyên và phần thập phân (nếu có)
  return parts.join('.');
}
