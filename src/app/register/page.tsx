import { Metadata } from 'next';
import ClientIframeWrapper from '@/components/ClientIframeWrapper';

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
    <ClientIframeWrapper
      src="https://npq43b.com/#/register?invitationCode=543571301457"
      title="Đăng ký tài khoản 92Lottery"
    />
  );
}
