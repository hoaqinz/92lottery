import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Dynamically import the IframeLoader component with no SSR
const IframeLoader = dynamic(() => import('@/components/IframeLoader'), { ssr: false });

export const metadata: Metadata = {
  title: 'Đăng nhập | 92Lottery',
  description: 'Đăng nhập vào tài khoản 92Lottery để tham gia các trò chơi xổ số, casino và nhận thưởng.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function LoginPage() {
  return (
    <IframeLoader 
      src="https://npq43b.com/#/login" 
      title="Đăng nhập 92Lottery"
    />
  );
}
