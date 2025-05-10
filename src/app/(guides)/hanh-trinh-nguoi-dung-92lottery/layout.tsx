import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hành trình người dùng 92Lottery - Từ người mới đến chuyên gia | 92Lottery',
  description: 'Hướng dẫn toàn diện cho hành trình người dùng 92Lottery từ nhận thức, cân nhắc, quyết định đến trung thành và ủng hộ. Mọi thông tin bạn cần biết ở mỗi giai đoạn.',
  keywords: ['hành trình người dùng 92lottery', 'hướng dẫn 92lottery', 'người mới 92lottery', 'chuyên gia 92lottery', 'nhận thức 92lottery', 'cân nhắc 92lottery', 'quyết định 92lottery', 'trung thành 92lottery', 'ủng hộ 92lottery'],
  alternates: {
    canonical: 'https://92lottery.dev/hanh-trinh-nguoi-dung-92lottery',
    languages: {
      'vi': 'https://92lottery.dev/hanh-trinh-nguoi-dung-92lottery',
      'x-default': 'https://92lottery.dev/hanh-trinh-nguoi-dung-92lottery'
    }
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Schema.org markup sẽ được xử lý ở đây nếu cần */}
      {children}
    </>
  );
}
