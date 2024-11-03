"use client"

import Image from "next/image"

export default function HomePage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-3/4 flex items-center justify-between py-4">
        <a href="/" className="flex items-center space-x-2 cursor-pointer">
          <Image src="/favicon.ico" alt="alt" width={48} height={48} />
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-gray-800">Ielts Việt</span>
            <span className="text-sm font-medium text-orange-500">English Center</span>
          </div>
        </a>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
            <span className="text-gray-700 font-light">Hotline:</span>
            <span className="font-semibold text-gray-800">093 921 77 18</span>
          </div>
          <a href="/" className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-full">Đặt lịch hẹn</a>
          <div className="flex items-center space-x-2">
            <Image src="https://ktdcgroup.vn/wp-content/uploads/flags/english.svg" alt="alt" width={20} height={20} />
            <span className="text-gray-700 font-semibold">EN</span>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex justify-center items-center border-b border-t border-gray-200 bg-white py-4">
        <ul className="flex justify-center items-center gap-20">
          <li>
            <a href="#" className="font-bold text-orange-500">TRANG CHỦ</a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-orange-500">KHOÁ HỌC</a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-orange-500">GIẢNG VIÊN</a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-orange-500">HỌC VIÊN</a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-orange-500">LIÊN HỆ</a>
          </li>
        </ul>
      </div>
      <div className="w-3/4 flex justify-center items-center py-8 gap-8">
        <div className="w-1/2 flex flex-col justify-center items-start gap-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Học <span className="text-orange-500">IELTS</span> cùng các chuyên gia đầu ngành
          </h2>
          <ul className="text-gray-700">
            <li>✔️ Phương pháp độc quyền, tiết kiệm 40% thời gian</li>
            <li>✔️ 80% giảng viên là cựu giám khảo IELTS</li>
            <li>✔️ Hệ thống AI độc quyền 4 kỹ năng</li>
            <li>✔️ Hỗ trợ toàn diện từ giáo viên bản ngữ</li>
            <li>✔️ Cam kết đầu ra – 15 năm uy tín</li>
          </ul>
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-full">
              Test trình độ IELTS miễn phí
            </button>
            <button className="border border-orange-500 text-orange-500 font-semibold px-4 py-2 rounded-full">
              Xem lịch khai giảng
            </button>
          </div>
          <div className="flex items-center gap-4">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/hero-image.png" alt="alt" className="w-28 rounded-full" />
            <span className="text-gray-700 font-semibold">500+ học viên tại Cần Thơ</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src="https://ktdcgroup.vn/wp-content/uploads/2024/06/british-council-logo.png" alt="alt" className="w-20" />
              <img src="https://ktdcgroup.vn/wp-content/uploads/2024/05/logo-idp.svg" alt="alt" className="w-20" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-orange-100 p-2 rounded-full">
                <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/google-icon.png" alt="alt" className="w-6 h-6" />
              </div>
              <div className="flex items-center bg-orange-100 p-2 rounded-full">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="alt" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/454277669_122159047598053425_7730570542415368807_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHdMr9YCue3Rnbyy45oBsv5OLhPL_JvqOQ4uE8v8m-o5O_vf6w4cnaOEWpRR5EDhP6AE0vLKhtMMYjr2HzqFCk6&_nc_ohc=_OZ-YnnrHGsQ7kNvgH1nbCY&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=Al34xMdshW4viVsthcwcGm3&oh=00_AYAx9ciY1001yilDVgz0XkhVthhDwBGWWSqWlU1dm08h3A&oe=672D8A4C" alt="alt" className="w-5/6 rounded-lg" />
        </div>
      </div>
      <div className="w-full bg-orange-100 py-8 my-10">
        <div className="flex justify-center items-center gap-10">
          <div className="bg-white p-4 rounded-lg shadow-md w-64 text-center">
            <h3 className="text-orange-500 font-bold text-lg">Bảo đảm kết quả</h3>
            <p className="text-gray-600">Yên tâm học hành</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-64 text-center">
            <h3 className="text-orange-500 font-bold text-lg">80% Cựu Giám khảo</h3>
            <p className="text-gray-600">Dạy giỏi, tận tâm</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-64 text-center">
            <h3 className="text-orange-500 font-bold text-lg">40% Học nhanh hơn</h3>
            <p className="text-gray-600">Khoa học chứng minh</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-64 text-center">
            <h3 className="text-orange-500 font-bold text-lg">98% Học Viên</h3>
            <p className="text-gray-600">Hài lòng với chất lượng</p>
          </div>
        </div>
      </div>
      {/* <div className="bg-white py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Lộ trình học IELTS</h2>
          <p className="text-gray-500 mt-2">
            Được giám khảo chấm thi IELTS xây dựng, đảm bảo tính chính xác, trọng tâm và bám sát với kỳ thi IELTS thực tế
          </p>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-full">Tất cả</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-full">Mục tiêu IELTS 4.5+</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-full">Mục tiêu IELTS 5.0+</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-full">Mục tiêu IELTS 5.5+</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-full">Mục tiêu IELTS 6.5+</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-full">Mục tiêu IELTS 7.5+</button>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 w-80 relative">
            <img src="https://via.placeholder.com/300x150" alt="IELTS Foundation" className="w-full rounded-lg mb-4" />
            <h3 className="text-lg font-bold text-gray-800">IELTS Foundation</h3>
            <p className="text-orange-500 font-semibold text-lg">9.488.000 VND</p>
            <p className="text-gray-500 text-sm">36 giờ (8 tuần)</p>
            <ul className="mt-2 text-gray-700 space-y-1">
              <li>✔️ Đầu vào: 3.5 - 4.0 | Đầu ra: 4.5+</li>
              <li>✔️ Có nền tảng tiếng Anh cơ bản</li>
              <li>✔️ Chưa tự tin sử dụng tiếng Anh trong môi trường học thuật và giao tiếp</li>
              <li>✔️ Tăng vốn từ và ngữ pháp, luyện phát âm và phản xạ</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded-full">Tìm hiểu thêm</button>
            <div className="absolute bottom-4 left-4 text-center">
              <span className="block text-orange-500 font-bold text-xl">4.5+</span>
              <span className="text-gray-500 text-sm">Điểm đầu ra</span>
            </div>
            <div className="absolute bottom-4 right-4 text-center">
              <span className="block text-gray-800 font-bold text-xl">04</span>
              <span className="text-gray-500 text-sm">Kỹ năng</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 w-80 relative">
            <img src="https://via.placeholder.com/300x150" alt="Pre-IELTS" className="w-full rounded-lg mb-4" />
            <h3 className="text-lg font-bold text-gray-800">Pre-IELTS</h3>
            <p className="text-orange-500 font-semibold text-lg">9.889.000 VND</p>
            <p className="text-gray-500 text-sm">36 giờ (8 tuần)</p>
            <ul className="mt-2 text-gray-700 space-y-1">
              <li>✔️ Đầu vào: 4.5 | Đầu ra: 5.0+</li>
              <li>✔️ Làm quen với các chủ đề cơ bản nhất để nắm được cấu trúc bài thi và cách làm bài thi IELTS</li>
              <li>✔️ Tăng vốn từ và ngữ pháp, luyện phát âm và phản xạ</li>
            </ul>
            <button className="mt-4 px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full">Tìm hiểu thêm</button>
            <div className="absolute bottom-4 left-4 text-center">
              <span className="block text-orange-500 font-bold text-xl">5.0+</span>
              <span className="text-gray-500 text-sm">Điểm đầu ra</span>
            </div>
            <div className="absolute bottom-4 right-4 text-center">
              <span className="block text-gray-800 font-bold text-xl">04</span>
              <span className="text-gray-500 text-sm">Kỹ năng</span>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-white py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Đội ngũ Chuyên gia</h2>
          <p className="text-gray-500 mt-2">
            Giảng viên bản ngữ, <span className="text-orange-500">80% là cựu giám khảo IELTS</span>, cùng cố vấn người Việt đạt 8.0+, đem lại phương pháp toàn diện, hiệu quả cho học viên Việt Nam.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
            <img src="https://via.placeholder.com/150" alt="Andy Robertson" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_Kingdom.svg" alt="UK Flag" className="w-8 h-8 absolute top-4 left-4 rounded-full" />
            <h3 className="text-xl font-bold text-gray-800 text-center">Thầy Andy Robertson</h3>
            <ul className="mt-4 text-gray-700 space-y-1 text-center">
              <li>✔️ Chứng chỉ TEFL (2006)</li>
              <li>✔️ Cử nhân danh dự - Khoa học Kinh Tế - Đại học Wales, Anh</li>
              <li>✔️ Thạc sĩ Khoa Học Xã Hội – Đại học Lund, Thụy Điển</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
            <img src="https://via.placeholder.com/150" alt="Denise Thomson" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Australia_%28converted%29.svg" alt="Australia Flag" className="w-8 h-8 absolute top-4 left-4 rounded-full" />
            <h3 className="text-xl font-bold text-gray-800 text-center">Cô Denise Thomson</h3>
            <ul className="mt-4 text-gray-700 space-y-1 text-center">
              <li>✔️ Chứng chỉ TEFL (2006)</li>
              <li>✔️ Cử nhân Giáo dục - Đại học Auckland (1988)</li>
              <li>✔️ Nghiên cứu Giảng dạy nâng cao - Đại học Sư phạm Auckland (1989)</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
            <img src="https://via.placeholder.com/150" alt="Hamish McNair-Wilson" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_Kingdom.svg" alt="UK Flag" className="w-8 h-8 absolute top-4 left-4 rounded-full" />
            <h3 className="text-xl font-bold text-gray-800 text-center">Thầy Hamish McNair-Wilson</h3>
            <ul className="mt-4 text-gray-700 space-y-1 text-center">
              <li>✔️ Chứng chỉ CELTA (2009)</li>
              <li>✔️ Cử nhân Lịch Sử và Chính Trị - Đại học Durham, Anh</li>
              <li>✔️ Chứng chỉ TKT band 4 (2015)</li>
            </ul>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-white py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Đặc quyền của học viên KTDC</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Phương pháp Total Immersion</h3>
            <p className="mt-2 text-gray-600">
              Chúng tôi tạo môi trường học tập 100% tiếng Anh với phương pháp độc quyền, giúp học viên tiến bộ nhanh hơn 40% so với cách học truyền thống. Không chỉ hướng đến điểm số, chúng tôi tập trung vào khả năng ứng dụng kiến thức thực tế của học viên.
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Đội ngũ giảng viên đầu ngành</h3>
            <p className="mt-2 text-gray-600">
              Được dẫn dắt bởi các cựu giám khảo IELTS, giảng viên với chứng chỉ CELTA, DELTA và nhiều năm kinh nghiệm, học viên nhận được sự hỗ trợ 1:1 cho Speaking và Writing. Giảng viên điều chỉnh phương pháp giảng dạy phù hợp với từng học viên.
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Công nghệ AI tiên tiến</h3>
            <p className="mt-2 text-gray-600">
              KTDC là đơn vị đầu tiên tại Việt Nam ứng dụng AI để luyện tập đủ 4 kỹ năng IELTS. Hệ thống cung cấp phản hồi chi tiết theo tiêu chuẩn IELTS, kết hợp nền tảng LMS hỗ trợ học tập 24/7.
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Cam kết kết quả</h3>
            <p className="mt-2 text-gray-600">
              Với 15 năm kinh nghiệm đào tạo, chúng tôi cam kết đầu ra hoặc học lại miễn phí. Học viên được hỗ trợ toàn diện, từ kiến thức đến tâm lý trước kỳ thi.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-white py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Cộng đồng Alumni</h2>
          <p className="text-gray-500 mt-2">
            KTDC tin rằng với mỗi hành trình đã đi qua, học viên đều có những câu chuyện truyền cảm hứng của riêng mình.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md w-80">
            <img src="https://via.placeholder.com/300x200" alt="Nguyễn Thụy Như Phương" className="w-full h-48 rounded-t-lg" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-yellow-100 text-orange-500 font-bold text-lg rounded-full px-2 py-1">8.5</span>
                <h3 className="ml-4 font-bold text-gray-800">Nguyễn Thụy Như Phương</h3>
              </div>
              <p className="text-gray-600">THPT Trần Phú</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-80">
            <img src="https://via.placeholder.com/300x200" alt="Huỳnh Đức Nguyễn Khang" className="w-full h-48 rounded-t-lg" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-yellow-100 text-orange-500 font-bold text-lg rounded-full px-2 py-1">8.5</span>
                <h3 className="ml-4 font-bold text-gray-800">Huỳnh Đức Nguyễn Khang</h3>
              </div>
              <p className="text-gray-600">THPT Năng Khiếu ĐHQG TPHCM</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-80">
            <img src="https://via.placeholder.com/300x200" alt="Trần Lê Phương Quỳnh" className="w-full h-48 rounded-t-lg" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-yellow-100 text-orange-500 font-bold text-lg rounded-full px-2 py-1">8.5</span>
                <h3 className="ml-4 font-bold text-gray-800">Trần Lê Phương Quỳnh</h3>
              </div>
              <p className="text-gray-600">THPT Chuyên Trần Đại Nghĩa</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-white py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Học viên nói gì về KTDC</h2>
          <p className="text-gray-500 mt-2">
            Những chia sẻ từ học viên trong suốt 15 năm qua
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://via.placeholder.com/50" alt="Avatar" className="w-10 h-10 rounded-full" />
              <h3 className="font-bold text-gray-800">Ngọc Anh</h3>
              <span className="text-orange-500 text-2xl font-bold absolute top-4 right-4">“</span>
            </div>
            <p className="text-gray-600 text-sm">
              Mình chỉ mới bắt đầu học ielts từ hè năm nay, lúc đó kiến thức về tiếng anh của mình chỉ coi là đủ dùng và ở mức 4.5(?). Nhưng sau khi học tại KTDC được 2 tháng và giờ...
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1 text-gray-500">
                <span className="text-xs">Google</span>
              </div>
              <a href="#" className="text-blue-500 text-sm font-semibold">Xem chi tiết</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://via.placeholder.com/50" alt="Avatar" className="w-10 h-10 rounded-full" />
              <h3 className="font-bold text-gray-800">Hồ Nguyên Khang</h3>
              <span className="text-orange-500 text-2xl font-bold absolute top-4 right-4">“</span>
            </div>
            <p className="text-gray-600 text-sm">
              Học ở đây vui lắm luôn. Ngày đầu học mình thấy hơi lo lắng tại do học với người bản xứ thì sợ mình không hiểu các thầy nói gì. Nhưng mà sau khi trải nghiệm thì lại thấy nghe...
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1 text-gray-500">
                <span className="text-xs">Google</span>
              </div>
              <a href="#" className="text-blue-500 text-sm font-semibold">Xem chi tiết</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://via.placeholder.com/50" alt="Avatar" className="w-10 h-10 rounded-full" />
              <h3 className="font-bold text-gray-800">Le Nha Thy</h3>
              <span className="text-orange-500 text-2xl font-bold absolute top-4 right-4">“</span>
            </div>
            <p className="text-gray-600 text-sm">
              Chương trình học bám sát ielts và cực kỳ hiệu quả, thấy lại chuyên môn cao và cách học giúp học viên luyện tập khả năng chủ động trong học tập...
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1 text-gray-500">
                <span className="text-xs">Google</span>
              </div>
              <a href="#" className="text-blue-500 text-sm font-semibold">Xem chi tiết</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://via.placeholder.com/50" alt="Avatar" className="w-10 h-10 rounded-full" />
              <h3 className="font-bold text-gray-800">Nguyễn Đình Kha</h3>
              <span className="text-orange-500 text-2xl font-bold absolute top-4 right-4">“</span>
            </div>
            <p className="text-gray-600 text-sm">
              Mình đã có trải nghiệm học IELTS tại KTDC vô cùng tuyệt vời. Ngay từ ban đầu, mình đã được đánh giá chi tiết về trình độ và được tư vấn kỹ càng về...
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1 text-gray-500">
                <span className="text-xs">Facebook</span>
              </div>
              <a href="#" className="text-blue-500 text-sm font-semibold">Xem chi tiết</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://via.placeholder.com/50" alt="Avatar" className="w-10 h-10 rounded-full" />
              <h3 className="font-bold text-gray-800">Phương Linh</h3>
              <span className="text-orange-500 text-2xl font-bold absolute top-4 right-4">“</span>
            </div>
            <p className="text-gray-600 text-sm">
              Mình học ở đây mới tháng thứ 3 nhưng mà trình độ đã cải thiện rất nhiều, tăng band chỉ sau 1 khóa học. Giáo viên siêu nhiệt tình...
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1 text-gray-500">
                <span className="text-xs">Facebook</span>
              </div>
              <a href="#" className="text-blue-500 text-sm font-semibold">Xem chi tiết</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://via.placeholder.com/50" alt="Avatar" className="w-10 h-10 rounded-full" />
              <h3 className="font-bold text-gray-800">Lý Vĩnh Quân</h3>
              <span className="text-orange-500 text-2xl font-bold absolute top-4 right-4">“</span>
            </div>
            <p className="text-gray-600 text-sm">
              Mình đã học xong 2 khoá ở ktdc rồi và trường oke cực. Cơ sở vật chất tốt, giáo trình được soạn bởi cựu examiner của British Councils...
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1 text-gray-500">
                <span className="text-xs">Facebook</span>
              </div>
              <a href="#" className="text-blue-500 text-sm font-semibold">Xem chi tiết</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full" >Xem thêm đánh giá</button>
        </div>
      </div> */}
      {/* <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto flex flex-wrap bg-yellow-50 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2">
            <img src="https://via.placeholder.com/600x400" alt="IELTS consultation" className="w-full h-full object-cover rounded-l-lg" />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Miễn phí suất thi thử IELTS</h2>
            <h3 className="text-lg font-semibold text-orange-500">Được cựu giám khảo IELTS nhận xét</h3>
            <p className="text-gray-600 mt-2">
              Trải nghiệm bài thi thử IELTS 4 kỹ năng, mô phỏng thi thật, giúp đánh giá chính xác trình độ IELTS hiện tại.
            </p>
            <form action="#" method="POST" className="mt-6 space-y-4">
              <div>
                <label className="sr-only">Họ và tên</label>
                <input type="text" id="name" name="name" placeholder="Họ và tên" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="sr-only">Số điện thoại</label>
                <input type="text" id="phone" name="phone" placeholder="Số điện thoại" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="sr-only">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <button type="submit" className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">Đăng ký tư vấn</button>
            </form>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-white py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Bảng tin KTDC</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm">Were Hiring</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-800">IELTS TEACHER (Vietnamese)</h3>
              <hr className="w-full border-gray-300 my-2" />
              <p className="text-gray-600 text-sm">Recruitment: IELTS TEACHER (Vietnamese)</p>
              <p className="text-gray-500 text-xs mt-2">30/10/2024 • 4 phút đọc</p>
            </div>
            <a href="#" className="text-orange-500 text-sm font-semibold p-6 block">Xem thêm tin khác</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/300x200" alt="Thi IELTS trên máy hay trên giấy?" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Thi IELTS trên máy hay trên giấy? Đâu là hình thức phù hợp?</h3>
              <p className="text-gray-500 text-xs mt-2">19/10/2024 • 4 phút đọc</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/300x200" alt="Lịch thi IELTS 2025 tại IDP" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Lịch Thi IELTS 2025: Thông Tin Mới Nhất Và Cách Đăng Ký tại IDP</h3>
              <p className="text-gray-500 text-xs mt-2">12/10/2024 • 4 phút đọc</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-yellow-50 py-12 px-6 rounded-lg shadow-lg max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Đăng ký học cùng <span className="text-orange-500">KTDC</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img src="https://via.placeholder.com/40" alt="Zalo Logo" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-gray-800">Nhắn tin Zalo</p>
              <p className="text-gray-500 text-sm">Trung tâm KTDC IELTS</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img src="https://via.placeholder.com/40" alt="Messenger Logo" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-gray-800">Nhắn tin Messenger</p>
              <p className="text-gray-500 text-sm">Trung tâm KTDC IELTS</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img src="https://via.placeholder.com/40" alt="Phone Icon" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-gray-800">Gọi hotline</p>
              <p className="text-gray-500 text-sm">(028) 7309 6990</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img src="https://via.placeholder.com/40" alt="Clipboard Icon" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-gray-800">Đăng ký kiểm tra trình độ</p>
              <p className="text-orange-500 text-sm">miễn phí</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6 space-x-4">
          <p className="text-gray-600 font-semibold">Điểm đánh giá</p>
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Google_Logo.png" alt="Google Logo" className="w-4 h-4 mr-1" />
              <span className="text-gray-800 font-semibold">4.9/5</span>
            </div>
            <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook Logo" className="w-4 h-4 mr-1" />
              <span className="text-gray-800 font-semibold">4.9/5</span>
            </div>
          </div>
        </div>
      </div> */}
      <footer className="w-full flex flex-col justify-center items-center">
        <div className="w-3/4 grid grid-cols-2 gap-28">
          <div>
            <Image src="/favicon.ico" alt="alt" width={60} height={60} />
            <p className="text-lg font-bold text-orange-500 py-2">IELTS VIỆT</p>
            <p className="text-gray-600">
              Thông qua IELTS, khai phá tiềm năng người học - Kiến tạo cộng đồng người Việt trẻ biết học hỏi tự chủ.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-md justify-start items-center">
            <div>
              <h3 className="text-orange-500 font-semibold mb-2">Học tại IELTS VIỆT</h3>
              <ul className="space-y-1">
                <li><a href="#">Đăng ký học</a></li>
                <li><a href="#">Lịch khai giảng</a></li>
                <li><a href="#">Cảm nhận học viên</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-orange-500 font-semibold mb-2">Về IELTS VIỆT</h3>
              <ul className="space-y-1">
                <li><a href="#">Giới thiệu IELTS VIỆT</a></li>
                <li><a href="#">Câu hỏi thường gặp</a></li>
                <li><a href="#">Tuyển dụng</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-orange-500 font-semibold mb-2">Tài liệu IELTS</h3>
              <ul className="space-y-1">
                <li><a href="#">Thi thử IELTS</a></li>
                <li><a href="#">Sự Kiện IELTS</a></li>
                <li><a href="#">Thư Viện IELTS</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-3/4  box-border grid grid-cols-3 gap-4 text-sm text-gray-300 my-4">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657A8 8 0 013.515 6.343L12 12l8.485 8.485a8 8 0 01-2.828 2.828z" />
              </svg>
              <p className="font-semibold">Cơ sở 1:</p>
            </div>
            <p className="text-orange-500">Khu dân cư Thới Nhựt</p>
            <p>106 Nguyễn Minh Quang, P. An Khánh, Q. Ninh Kiều, TP. Cần Thơ</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657A8 8 0 013.515 6.343L12 12l8.485 8.485a8 8 0 01-2.828 2.828z" />
              </svg>
              <p className="font-semibold">Cơ sở 2:</p>
            </div>
            <p className="text-orange-500">Khu dân cư Thới Nhựt</p>
            <p>106 Nguyễn Minh Quang, P. An Khánh, Q. Ninh Kiều, TP. Cần Thơ</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657A8 8 0 013.515 6.343L12 12l8.485 8.485a8 8 0 01-2.828 2.828z" />
              </svg>
              <p className="font-semibold">Liên hệ:</p>
            </div>
            <p className="text-orange-500">Hotline</p>
            <p>0939 217 718</p>
          </div>
        </div>
        <div className="w-full bg-gray-800 py-4 flex justify-center items-center">
          <div className="w-3/4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Ielts Việt</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span>Kết nối với chúng tôi</span>
              <span className="border-l border-gray-600 h-4 mx-2"></span>
              <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/google-icon.png" alt="alt" className="w-4 h-4" />
              <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/facebook-icon.png" alt="alt" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
