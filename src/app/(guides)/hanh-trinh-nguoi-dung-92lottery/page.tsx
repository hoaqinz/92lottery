import React from 'react';
import Link from 'next/link';

export default function UserJourneyPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 px-4">
        <nav className="text-sm">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="text-blue-600 hover:text-blue-800">Trang chủ</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700">Hành trình người dùng 92Lottery</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-[#bc2022] mb-6">Hành trình người dùng 92Lottery - Từ người mới đến chuyên gia</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Chào mừng bạn đến với hướng dẫn toàn diện về hành trình người dùng 92Lottery. Bài viết này sẽ giúp bạn hiểu rõ mỗi giai đoạn từ khi lần đầu biết đến 92Lottery cho đến khi trở thành người chơi chuyên nghiệp và thậm chí là người ủng hộ tích cực.
          </p>

          {/* Mục lục */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold mb-4">Mục lục</h2>
            <ul className="space-y-2">
              <li>
                <a href="#gioi-thieu" className="text-blue-600 hover:text-blue-800 font-medium">Giới thiệu về hành trình người dùng</a>
              </li>
              <li>
                <a href="#nhan-thuc" className="text-blue-600 hover:text-blue-800 font-medium">Giai đoạn 1: Nhận thức (Awareness)</a>
              </li>
              <li>
                <a href="#can-nhac" className="text-blue-600 hover:text-blue-800 font-medium">Giai đoạn 2: Cân nhắc (Consideration)</a>
              </li>
              <li>
                <a href="#quyet-dinh" className="text-blue-600 hover:text-blue-800 font-medium">Giai đoạn 3: Quyết định (Decision)</a>
              </li>
              <li>
                <a href="#trung-thanh" className="text-blue-600 hover:text-blue-800 font-medium">Giai đoạn 4: Trung thành (Retention)</a>
              </li>
              <li>
                <a href="#ung-ho" className="text-blue-600 hover:text-blue-800 font-medium">Giai đoạn 5: Ủng hộ (Advocacy)</a>
              </li>
              <li>
                <a href="#faq" className="text-blue-600 hover:text-blue-800 font-medium">Câu hỏi thường gặp</a>
              </li>
            </ul>
          </div>

          {/* Giới thiệu về hành trình người dùng */}
          <section id="gioi-thieu" className="mb-10">
            <h2 className="text-2xl font-semibold text-[#bc2022] mb-4">Giới thiệu về hành trình người dùng</h2>

            <p className="mb-4">
              Hành trình người dùng (User Journey) là quá trình một người trải qua từ khi lần đầu biết đến một sản phẩm hoặc dịch vụ cho đến khi trở thành người dùng trung thành và thậm chí là người ủng hộ tích cực. Trong bối cảnh của 92Lottery, hành trình này bao gồm 5 giai đoạn chính.
            </p>

            <div className="bg-white p-5 rounded-lg border border-gray-200 mb-4">
              <ol className="list-decimal pl-5 space-y-2">
                <li className="font-semibold">
                  Nhận thức (Awareness): <span className="font-normal">Giai đoạn người dùng lần đầu biết đến 92Lottery.</span>
                </li>
                <li className="font-semibold">
                  Cân nhắc (Consideration): <span className="font-normal">Giai đoạn người dùng tìm hiểu, so sánh và đánh giá 92Lottery.</span>
                </li>
                <li className="font-semibold">
                  Quyết định (Decision): <span className="font-normal">Giai đoạn người dùng quyết định đăng ký và bắt đầu chơi tại 92Lottery.</span>
                </li>
                <li className="font-semibold">
                  Trung thành (Retention): <span className="font-normal">Giai đoạn người dùng tiếp tục chơi và trở thành khách hàng thân thiết của 92Lottery.</span>
                </li>
                <li className="font-semibold">
                  Ủng hộ (Advocacy): <span className="font-normal">Giai đoạn người dùng giới thiệu 92Lottery cho người khác và trở thành người ủng hộ tích cực.</span>
                </li>
              </ol>
            </div>

            <p className="mb-4">
              Hiểu rõ hành trình người dùng sẽ giúp bạn có trải nghiệm tốt nhất tại 92Lottery, từ việc tìm hiểu ban đầu đến việc trở thành người chơi chuyên nghiệp. Hãy cùng khám phá chi tiết từng giai đoạn trong hành trình này.
            </p>
          </section>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#bc2022] mb-4">Kết luận</h2>
            <p>
              Hành trình người dùng 92Lottery là một quá trình liên tục từ khi bạn lần đầu biết đến 92Lottery cho đến khi trở thành người chơi chuyên nghiệp và thậm chí là người ủng hộ tích cực. Hy vọng bài viết này đã cung cấp cho bạn thông tin hữu ích để có trải nghiệm tốt nhất tại 92Lottery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
