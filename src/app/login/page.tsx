import { Metadata } from 'next';

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
    <div className="w-full h-screen flex flex-col">
      <iframe 
        src="https://npq43b.com/#/login"
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
