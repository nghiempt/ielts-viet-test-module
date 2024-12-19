"use client"

import Image from "next/image"
import TeacherSlider from "./components/teachers.slider"
import LearnerSlider from "./components/learners.slider"
import { DATA } from "@/utils/data"
import Header from "@/layout/header"
import Footer from "@/layout/footer"
import { IMAGES } from "@/utils/images"
import SignWithIELTS from "@/layout/sign-with-ielts"
import Link from "next/link"
import IeltsRoadMap from "./components/ielts-roadmap"
import { ROUTES } from "@/utils/route"
import IeltsCommunity from "./components/ielts-community"

interface Blog {
  id: number;
  name: string;
  image: string;
  description: string;
  content: string;
  date: string;
  time: string;
}

const blogs = DATA.BLOG_DATA as Blog[]

export default function HomePage() {

  const slogans = DATA.SLOGANS

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-3/4 flex justify-center items-center gap-8">
        <div className="w-1/2 flex flex-col justify-center items-start gap-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Học <span className="text-[rgb(var(--secondary-rgb))]">IELTS</span> cùng các chuyên gia đầu ngành
          </h2>
          <ul className="text-gray-700">
            <li>✔️ Phương pháp độc quyền, tiết kiệm 40% thời gian</li>
            <li>✔️ 80% giảng viên là cựu giám khảo IELTS</li>
            <li>✔️ Hệ thống AI độc quyền 4 kỹ năng</li>
            <li>✔️ Hỗ trợ toàn diện từ giáo viên bản ngữ</li>
            <li>✔️ Cam kết đầu ra – 15 năm uy tín</li>
          </ul>
          <div className="flex gap-4">
            <Link href="#">
              <button className="bg-[rgb(var(--secondary-rgb))] hover:opacity-80 transition duration-300 text-white font-semibold px-4 py-2 rounded-full">
                Test trình độ IELTS miễn phí
              </button>
            </Link>
            <Link href="#">
              <button className="border border-[rgb(var(--secondary-rgb))] text-[rgb(var(--secondary-rgb))] hover:text-white hover:bg-[rgb(var(--secondary-rgb))] hover:border-[rgb(var(--secondary-rgb))] transition duration-300 font-semibold px-4 py-2 rounded-full">
                Xem lịch khai giảng
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Image src="https://ktdcgroup.vn/wp-content/uploads/2024/10/hero-image.png" alt="alt" className="w-28 h-auto rounded-full" width={112} height={100} />
            <span className="text-gray-700 font-semibold">500+ học viên tại Cần Thơ</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image src="https://ktdcgroup.vn/wp-content/uploads/2024/06/british-council-logo.png" alt="alt" className="w-20" width={80} height={100} />
              <Image
                src="https://ktdcgroup.vn/wp-content/uploads/2024/05/logo-idp.svg"
                alt="alt" className="w-20"
                width={80}
                height={100}
              />
            </div>
            <div className="flex items-center gap-4">
              <Link href="#">
                <div className="flex items-center bg-orange-100 p-2 rounded-full">
                  <Image
                    src="https://ktdcgroup.vn/wp-content/uploads/2024/10/google-icon.png"
                    alt="alt"
                    className="w-6 h-6"
                    width={24}
                    height={24} />
                </div>
              </Link>
              <Link href="#">
                <div className="flex items-center bg-orange-100 p-2 rounded-full">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                    alt="alt"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-start relative">
          <div className="w-5/6 min-h-[500px] flex justify-center items-center border border-[rgb(var(--secondary-rgb))] p-4 rounded-lg">
            <Image
              src={IMAGES.IMAGE_HERO}
              alt="alt"
              className="rounded-lg"
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-[rgb(var(--quaternary-rgb))] py-8 my-16 overflow-hidden">
        <div className="flex justify-center items-center gap-4 animate-marquee whitespace-nowrap">
          {slogans.map((item: any, index: any) => (
            <div key={`item-${index}`} className="bg-white px-10 py-2 rounded-lg shadow-md text-center">
              <h3 className="text-[rgb(var(--secondary-rgb))] font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* IELTS Roadmap */}
      <IeltsRoadMap />

      <div className="w-full pt-8 pb-20 flex justify-center items-center flex-col">
        <div className="text-center mb-8 w-3/4">
          <h2 className="text-3xl font-bold text-gray-800">Đội Ngũ Chuyên Gia</h2>
          <p className="text-gray-500 mt-4">
            Đội ngũ gồm giảng viên bản ngữ giàu kinh nghiệm và cố vấn người Việt đạt IELTS 8.0+, hiểu rõ nhu cầu học viên Việt Nam. Chúng tôi áp dụng phương pháp giảng dạy toàn diện, kết hợp lý thuyết với thực hành hiệu quả. Phương châm Học để thành thạo, không chỉ để đạt điểm giúp học viên tự tin sử dụng tiếng Anh trong mọi tình huống.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <TeacherSlider />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center pb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Đặc quyền của học viên IELTS Việt</h2>
        </div>
        <div className="w-3/4 grid grid-cols-2 gap-6">
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <div className="flex justify-start items-center gap-3">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/10435/10435128.png"
                alt="img"
                className="rounded-lg"
                width={40}
                height={0}
              />
              <h3 className="text-lg font-bold text-gray-800">Phương pháp Total Immersion</h3>
            </div>
            <p className="mt-2 text-gray-600">
              Chúng tôi tạo môi trường học tập 100% tiếng Anh với phương pháp độc quyền, giúp học viên tiến bộ nhanh hơn 40% so với cách học truyền thống. Không chỉ hướng đến điểm số, chúng tôi tập trung vào khả năng ứng dụng kiến thức thực tế của học viên.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <div className="flex justify-start items-center gap-3">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/5585/5585472.png"
                alt="img"
                className=""
                width={40}
                height={0}
              />
              <h3 className="text-lg font-bold text-gray-800">Đội ngũ giảng viên đầu ngành</h3>
            </div>
            <p className="mt-2 text-gray-600">
              Được dẫn dắt bởi các cựu giám khảo IELTS, giảng viên với chứng chỉ CELTA, DELTA và nhiều năm kinh nghiệm, học viên nhận được sự hỗ trợ 1:1 cho Speaking và Writing. Mỗi giảng viên đều tận tâm điều chỉnh phương pháp giảng dạy phù hợp nhất với phong cách và nhu cầu học tập của từng học viên.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <div className="flex justify-start items-center gap-3">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/6873/6873405.png"
                alt="img"
                className=""
                width={40}
                height={0}
              />
              <h3 className="text-lg font-bold text-gray-800">Công nghệ AI tiên tiến</h3>
            </div>
            <p className="mt-2 text-gray-600">
              IELTS Việt là đơn vị đầu tiên tại Việt Nam ứng dụng AI để luyện tập đủ 4 kỹ năng IELTS. Hệ thống này cung cấp phản hồi chi tiết theo tiêu chuẩn IELTS, đồng thời nền tảng LMS hỗ trợ học viên luyện tập không giới hạn, mọi lúc, mọi nơi, đảm bảo lộ trình học tập tối ưu và hiệu quả.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <div className="flex justify-start items-center gap-3">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1642/1642322.png"
                alt="img"
                className=""
                width={40}
                height={0}
              />
              <h3 className="text-lg font-bold text-gray-800">Cam kết kết quả</h3>
            </div>
            <p className="mt-2 text-gray-600">
              Với 15 năm kinh nghiệm đào tạo, chúng tôi cam kết đầu ra hoặc học lại miễn phí. Học viên còn nhận được sự hỗ trợ toàn diện về kiến thức, tâm lý và các kỹ năng cần thiết để sẵn sàng cho kỳ thi, mang đến sự an tâm tuyệt đối trên hành trình chinh phục IELTS.
            </p>
          </div>
        </div>
      </div>

      {/* IELTS community */}
      <IeltsCommunity />


      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Học viên nói gì về IELTS Việt</h2>
          <p className="text-gray-500 mt-2">
            Những chia sẻ từ học viên trong suốt 4 năm qua
          </p>
        </div>
        <div className="w-4/5 flex justify-center gap-6">
          <LearnerSlider />
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-[rgb(var(--secondary-rgb))] text-white font-semibold rounded-full" >Xem thêm đánh giá</button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-20">
        <div className="w-3/4 flex flex-wrap bg-orange-50 rounded-xl overflow-hidden">
          <div className="w-full md:w-1/2">
            <Image
              src="https://res.cloudinary.com/farmcode/image/upload/v1733372485/ielts-viet/signwi_fhhanf.jpg"
              alt="IELTS consultation"
              className="w-full h-full object-cover rounded-l-lg"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Miễn phí suất thi thử IELTS</h2>
            <h3 className="text-lg font-semibold text-[rgb(var(--secondary-rgb))]">Được cựu giám khảo IELTS nhận xét</h3>
            <p className="text-gray-600 mt-2">
              Trải nghiệm bài thi thử IELTS 4 kỹ năng, mô phỏng thi thật, giúp đánh giá chính xác trình độ IELTS hiện tại.
            </p>
            <form action="#" method="POST" className="mt-6 space-y-4">
              <div>
                <label className="sr-only">Họ và tên</label>
                <input type="text" id="name" name="name" placeholder="Họ và tên" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--secondary-rgb))]" />
              </div>
              <div>
                <label className="sr-only">Số điện thoại</label>
                <input type="text" id="phone" name="phone" placeholder="Số điện thoại" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--secondary-rgb))]" />
              </div>
              <div>
                <label className="sr-only">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--secondary-rgb))]" />
              </div>
              <button type="submit" className="w-full bg-[rgb(var(--secondary-rgb))] text-white font-semibold py-3 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--secondary-rgb))]">Đăng ký tư vấn</button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Bảng Tin IELTS Việt</h2>
        </div>
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] overflow-hidden">
            <div className="p-6 flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <span className="bg-[rgb(var(--secondary-rgb))] text-white px-2 py-1 rounded-full text-sm">Were Hiring</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-800">IELTS TEACHER (Vietnamese)</h3>
              <hr className="w-full border-gray-300 my-2" />
              <p className="text-gray-600 text-sm">Recruitment: IELTS TEACHER (Vietnamese)</p>
              <p className="text-gray-500 text-xs mt-2">30/10/2024 • 4 phút đọc</p>
            </div>
            <a href={ROUTES.BLOG} className="text-[rgb(var(--secondary-rgb))] text-sm font-semibold p-6 block">Xem thêm tin khác</a>
          </div>

          {blogs?.slice(0, 2)?.map((blog: Blog, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] overflow-hidden">
              <Link
                key={index}
                href={`${ROUTES.BLOG}/${blog?.id}`}
              >
                <Image
                  src={blog?.image}
                  alt="Thi IELTS trên máy hay trên giấy?"
                  className="w-32 h-32 mx-auto mt-5 object-cover"
                  width={1000}
                  height={1000}
                />
                <div className="p-6">
                  <h3 className="text-md font-bold text-gray-800 mb-2">{blog?.name}</h3>
                  <p className="text-gray-500 text-xs">{blog?.date} • {blog?.time}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <SignWithIELTS />
      <Footer />
    </div>
  )
}
