import { Metadata } from 'next';
import ClientIframeWrapper from '@/components/ClientIframeWrapper';

export const metadata: Metadata = {
  title: 'Đăng nhập | 92Lottery',
  description: 'Đăng nhập vào tài khoản 92Lottery để tham gia các trò chơi xổ số, casino và nhận thưởng.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://92lottery.dev/login',
    languages: {
      'vi': 'https://92lottery.dev/login',
      'x-default': 'https://92lottery.dev/login'
    }
  },
};

export default function LoginPage() {
  return (
    <ClientIframeWrapper
      src="https://npq43b.com/#/login"
      title="Đăng nhập 92Lottery"
    />
  );
}
