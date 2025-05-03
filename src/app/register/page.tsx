import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đăng ký tài khoản | 92Lottery',
  description: 'Đăng ký tài khoản tại 92Lottery để nhận ngay 100K và nhiều ưu đãi hấp dẫn khác.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RegisterPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <iframe 
        src="https://npq43b.com/#/register?invitationCode=543571301457"
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
