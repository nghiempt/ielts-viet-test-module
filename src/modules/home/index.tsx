"use client"

import Image from "next/image"
import { data } from "./data"
import TeacherSlider from "./teacherSlider"
import LearnerSlider from "./learnerCommentSlider"

export default function HomePage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-3/4 flex items-center justify-between py-4">
        <a href="/" className="flex items-center space-x-2 cursor-pointer">
          <Image src="/favicon.ico" alt="alt" width={48} height={48} />
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-gray-800">IELTS VIỆT</span>
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
            <a href="/khoa-hoc" className="text-gray-800 hover:text-orange-500">KHOÁ HỌC</a>
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
        <div className="w-1/2 flex justify-end items-start relative">
          {/* <img src="https://res.cloudinary.com/farmcode/image/upload/v1731055890/ielts-viet/solffftvy8bkth7b1vhz.png" alt="alt" className="w-5/6 rounded-lg border-[1.5px] border-orange-500" /> */}
          <img src="https://res.cloudinary.com/farmcode/image/upload/v1730742319/ielts-viet/wcbfgroi7dyfkhyp6ada.png" alt="alt" className="w-5/6 rounded-lg top-6 left-16 " />
        </div>
      </div>
      <div className="w-full bg-orange-100 py-8 my-10 overflow-hidden">
        <div className="flex justify-center items-center gap-4 animate-marquee whitespace-nowrap">
          {data.map((item, index) => (
            <div key={`item-${index}`} className="bg-white px-10 py-2 rounded-lg shadow-md text-center">
              <h3 className="text-orange-500 font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mb-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Lộ trình học IELTS</h2>
          <p className="text-gray-500 mt-6 mb-2">
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
        <div className="w-full flex justify-center items-center mt-8">
          <div className="w-3/4 grid grid-cols-2 justify-center items-center gap-6">
            <div className="w-full bg-white rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-2 relative flex justify-center items-center gap-6">
              <img src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/448624343_122188562204023936_1427625599855996507_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGWgyL0HkvTkE6b6pZ-aiGLAasASobVwvIBqwBKhtXC8sDQqv9e2NyljGq0uvbw75d24nRiqERNrgPmiR8Uj7iX&_nc_ohc=PYWzDGKg5vYQ7kNvgFnTSTk&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=AYP3H2BIy_xH1xoaMOuQuxk&oh=00_AYAsgHkL_ZV8NJhmSqwbtdJragiIaQkEzPd4Obo68iahfA&oe=672ED482" alt="alt" className="w-[320px] h-[380px] rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">IELTS Foundation</h3>
                <div className="flex justify-start items-center gap-4 my-4">
                  <p className="text-orange-500 font-semibold text-lg">9.488.000 VND</p>
                  <p className="text-gray-500 text-sm">36 giờ (8 tuần)</p>
                </div>
                <ul className="mt-2 text-gray-700 space-y-1">
                  <li>✔️ Đầu vào: 3.5 - 4.0 | Đầu ra: 4.5+</li>
                  <li>✔️ Có nền tảng tiếng Anh cơ bản</li>
                  <li>✔️ Chưa tự tin sử dụng tiếng Anh trong môi trường học thuật và giao tiếp</li>
                  <li>✔️ Tăng vốn từ và ngữ pháp, luyện phát âm và phản xạ</li>
                </ul>
                <button className="mt-8 px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full">Tìm hiểu thêm</button>
              </div>
            </div>
            <div className="w-full bg-white rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-2 relative flex justify-center items-center gap-6">
              <img src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/449304507_122190859112023936_8558148362142286384_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGweVW5C00UPj9PSgB17u3VlnqWcoCIG0yWepZygIgbTJ6GY0ZRzMEgyg-0cy0584ma8B5xgIDNlDOCkbggkfjD&_nc_ohc=WH7TiVPN-BgQ7kNvgHD_l4b&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=AfSMt4yeFCo-no9lSYnUNZz&oh=00_AYDTQeD3ZL5IaYfzQh58renPK6m8YWNGaW7PexewAoI7QA&oe=672EC267" alt="alt" className="w-[320px] h-[380px] rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">IELTS Foundation</h3>
                <div className="flex justify-start items-center gap-4 my-4">
                  <p className="text-orange-500 font-semibold text-lg">9.488.000 VND</p>
                  <p className="text-gray-500 text-sm">36 giờ (8 tuần)</p>
                </div>
                <ul className="mt-2 text-gray-700 space-y-1">
                  <li>✔️ Đầu vào: 3.5 - 4.0 | Đầu ra: 4.5+</li>
                  <li>✔️ Có nền tảng tiếng Anh cơ bản</li>
                  <li>✔️ Chưa tự tin sử dụng tiếng Anh trong môi trường học thuật và giao tiếp</li>
                  <li>✔️ Tăng vốn từ và ngữ pháp, luyện phát âm và phản xạ</li>
                </ul>
                <button className="mt-8 px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full">Tìm hiểu thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-8 pb-20 flex justify-center items-center flex-col">
        <div className="text-center mb-8 w-3/4">
          <h2 className="text-3xl font-bold text-gray-800">Đội Ngũ Chuyên Gia</h2>
          <p className="text-gray-500 mt-4">
            Đội ngũ gồm giảng viên bản ngữ giàu kinh nghiệm và cố vấn người Việt đạt IELTS 8.0+, hiểu rõ nhu cầu học viên Việt Nam. Chúng tôi áp dụng phương pháp giảng dạy toàn diện, kết hợp lý thuyết với thực hành hiệu quả. Phương châm "Học để thành thạo, không chỉ để đạt điểm" giúp học viên tự tin sử dụng tiếng Anh trong mọi tình huống.
          </p>
        </div>

        {/* doi ngu chuyen gia x3 */}
        <div className="w-full flex justify-center">
          <TeacherSlider />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center pb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Đặc quyền của học viên Ielts Việt</h2>
        </div>
        <div className="w-3/4 grid grid-cols-2 gap-6">
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Phương pháp Total Immersion</h3>
            <p className="mt-2 text-gray-600">
              Chúng tôi tạo môi trường học tập 100% tiếng Anh với phương pháp độc quyền, giúp học viên tiến bộ nhanh hơn 40% so với cách học truyền thống. Không chỉ hướng đến điểm số, chúng tôi tập trung vào khả năng ứng dụng kiến thức thực tế của học viên.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Đội ngũ giảng viên đầu ngành</h3>
            <p className="mt-2 text-gray-600">
              Được dẫn dắt bởi các cựu giám khảo IELTS, giảng viên với chứng chỉ CELTA, DELTA và nhiều năm kinh nghiệm, học viên nhận được sự hỗ trợ 1:1 cho Speaking và Writing. Mỗi giảng viên đều tận tâm điều chỉnh phương pháp giảng dạy phù hợp nhất với phong cách và nhu cầu học tập của từng học viên.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Công nghệ AI tiên tiến</h3>
            <p className="mt-2 text-gray-600">
              Ielts Việt là đơn vị đầu tiên tại Việt Nam ứng dụng AI để luyện tập đủ 4 kỹ năng IELTS. Hệ thống này cung cấp phản hồi chi tiết theo tiêu chuẩn IELTS, đồng thời nền tảng LMS hỗ trợ học viên luyện tập không giới hạn, mọi lúc, mọi nơi, đảm bảo lộ trình học tập tối ưu và hiệu quả.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Cam kết kết quả</h3>
            <p className="mt-2 text-gray-600">
              Với 15 năm kinh nghiệm đào tạo, chúng tôi cam kết đầu ra hoặc học lại miễn phí. Học viên còn nhận được sự hỗ trợ toàn diện về kiến thức, tâm lý và các kỹ năng cần thiết để sẵn sàng cho kỳ thi, mang đến sự an tâm tuyệt đối trên hành trình chinh phục IELTS.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full pb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Cộng đồng Ielt Việt</h2>
          <p className="text-gray-500 mt-4">
            Ielt Việt tin rằng với mỗi hành trình đã đi qua, học viên đều có những câu chuyện truyền cảm hứng của riêng mình.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md w-80">
            <img src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/452104939_122195342294023936_2949067571913687341_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdBZnW00NPiZwupJWkKYFok54p0mFEJ3yTninSYUQnfNFtP3gUjog3AR2tahduf44z8PoY7LF0Ih_Cq4vGu5Gv&_nc_ohc=HqWIZA6LLPAQ7kNvgGSRFDu&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=Am1niY4-gL4yKSHCh_-2MHe&oh=00_AYA5-8x-FEosgxuOjAdrDNxqSp8TpJ_IQE_Zv5P4DeGXng&oe=67312874" alt="alt" className="w-full rounded-t-lg" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-orange-100 text-orange-500 font-bold text-2xl rounded-full px-2 py-2">8.5</span>
                <h3 className="ml-4 font-bold text-gray-800">Nguyễn Văn A</h3>
              </div>
              <p className="text-gray-600">THPT A</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-80">
            <img src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/452104939_122195342294023936_2949067571913687341_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdBZnW00NPiZwupJWkKYFok54p0mFEJ3yTninSYUQnfNFtP3gUjog3AR2tahduf44z8PoY7LF0Ih_Cq4vGu5Gv&_nc_ohc=HqWIZA6LLPAQ7kNvgGSRFDu&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=Am1niY4-gL4yKSHCh_-2MHe&oh=00_AYA5-8x-FEosgxuOjAdrDNxqSp8TpJ_IQE_Zv5P4DeGXng&oe=67312874" alt="alt" className="w-full rounded-t-lg" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-orange-100 text-orange-500 font-bold text-2xl rounded-full px-2 py-2">8.5</span>
                <h3 className="ml-4 font-bold text-gray-800">Nguyễn Văn A</h3>
              </div>
              <p className="text-gray-600">THPT A</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-80">
            <img src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/452104939_122195342294023936_2949067571913687341_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdBZnW00NPiZwupJWkKYFok54p0mFEJ3yTninSYUQnfNFtP3gUjog3AR2tahduf44z8PoY7LF0Ih_Cq4vGu5Gv&_nc_ohc=HqWIZA6LLPAQ7kNvgGSRFDu&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=Am1niY4-gL4yKSHCh_-2MHe&oh=00_AYA5-8x-FEosgxuOjAdrDNxqSp8TpJ_IQE_Zv5P4DeGXng&oe=67312874" alt="alt" className="w-full rounded-t-lg" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-orange-100 text-orange-500 font-bold text-2xl rounded-full px-2 py-2">8.5</span>
                <h3 className="ml-4 font-bold text-gray-800">Nguyễn Văn A</h3>
              </div>
              <p className="text-gray-600">THPT A</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Học viên nói gì về Ielt Việt</h2>
          <p className="text-gray-500 mt-2">
            Những chia sẻ từ học viên trong suốt 4 năm qua
          </p>
        </div>
        <div className="w-4/5 flex justify-center gap-6">
          <LearnerSlider />
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full" >Xem thêm đánh giá</button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-20">
        <div className="w-3/4 flex flex-wrap bg-orange-50 rounded-xl overflow-hidden">
          <div className="w-full md:w-1/2">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/06/REGISTRATION-FORM_690X551_Slide-02.png" alt="IELTS consultation" className="w-full h-full object-cover rounded-l-lg" />
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
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Bảng Tin Ielt Việt</h2>
        </div>
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] overflow-hidden">
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
          <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] overflow-hidden">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/08/Thi-IELTS-tren-may-hay-tren-giay-KTDC.jpg" alt="Thi IELTS trên máy hay trên giấy?" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Thi IELTS trên máy hay trên giấy? Đâu là hình thức phù hợp?</h3>
              <p className="text-gray-500 text-xs mt-2">19/10/2024 • 4 phút đọc</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] overflow-hidden">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/11/huong-dan-cach-viet-thu-xin-viec-bang-tieng-Anh.jpg" alt="Lịch thi IELTS 2025 tại IDP" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Lịch Thi IELTS 2025: Thông Tin Mới Nhất Và Cách Đăng Ký tại IDP</h3>
              <p className="text-gray-500 text-xs mt-2">12/10/2024 • 4 phút đọc</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-orange-50 py-12 px-6 mt-14 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Đăng ký học cùng <span className="text-orange-500">IELTS VIỆT</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float.png" alt="Zalo Logo" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-gray-800">Nhắn tin Zalo</p>
              <p className="text-gray-500 text-sm">Trung tâm IELTS VIỆT</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float-1.png" alt="Messenger Logo" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-gray-800">Nhắn tin Messenger</p>
              <p className="text-gray-500 text-sm">Trung tâm IELTS VIỆT</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float-2.png" alt="Phone Icon" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-gray-800">Gọi hotline</p>
              <p className="text-gray-500 text-sm">0939 217 718</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float-3.png" alt="Clipboard Icon" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-gray-800">Đăng ký kiểm tra trình độ</p>
              <p className="text-orange-500 text-sm">miễn phí</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full flex flex-col justify-center items-center">
        <div className="w-3/4 grid grid-cols-2 gap-20">
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
