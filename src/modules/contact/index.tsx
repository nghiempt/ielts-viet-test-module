"use client";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import RealityImage from "./reality-image";
import { DecorBar } from "@/components/using-ui/decor-bar";

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full mb-10">
        <div className="w-full h-[350px] bg-center bg-cover" style={{
          backgroundImage: "url('https://ktdcgroup.vn/wp-content/uploads/2020/10/Lien-he-1-1920x350.jpg')",
        }}>
        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <h1 className="font-bold text-4xl">IELTS VIET TRAINING CENTER</h1>
          <div className="w-14 border-b-2 border-[rgb(var(--secondary-rgb))] my-4 rounded"></div>
          <div className="text-slate-500 mt-4 font-medium">Liên hệ IELTS Việt để được tư vấn lộ trình học IELTS phù hợp dành cho bạn.</div>
        </div>
        <div className="flex flex-row justify-center items-center mt-16">
          <div className="flex flex-col justify-center items-center pl-10 pr-10">
            <Image
              src={"https://ktdcgroup.vn/wp-content/uploads/2022/05/icon-call-50x50.jpg"}
              width={50}
              height={50}
              alt="call"
              className="mb-5"
            />
            <div className="mb-5 font-bold">Gọi ngay</div>
            <div className="text-md hover:text-orange-300 cursor-pointer">(093) 921 77 18</div>
          </div>
          <div className="flex flex-col justify-center items-center border-l pl-10 pr-10">
            <Image src={"https://ktdcgroup.vn/wp-content/uploads/2022/05/icon-messenger-50x50.jpg"}
              width={50}
              height={50}
              alt="messenger"
              className="mb-5"
            />
            <div className="mb-5 font-bold">Facebook Messenger</div>
            <div className="text-md hover:text-orange-300 cursor-pointer">m.me / ielts-viet</div>
          </div>
          <div className="flex flex-col justify-center items-center border-l pl-10 pr-10">
            <Image src={"https://ktdcgroup.vn/wp-content/uploads/2024/07/zalo-icon-50x50.png"}
              width={50}
              height={50}
              alt="zl"
              className="mb-5"
            />
            <div className="mb-5 font-bold">Zalo</div>
            <div className="text-md hover:text-orange-300 cursor-pointer">m.me / ielts-viet</div>
          </div>
          <div className="flex flex-col justify-center items-center border-l pl-10 pr-10">
            <Image src={"https://ktdcgroup.vn/wp-content/uploads/2022/05/icon-fb-50x50.jpg"}
              width={50}
              height={50}
              alt="fb"
              className="mb-5"
            />
            <div className="mb-5 font-bold">Facebook Fanpage</div>
            <div className="text-md hover:text-orange-300 cursor-pointer">m.me / ielts-viet</div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-full mt-32">
          <div className="flex flex-row justify-between items-center w-3/4">
            <div>
              <div className="font-bold text-2xl mb-4">ĐỊA CHỈ</div>
              <div>106 Nguyễn Minh Quang, P. An Khánh, Q. Ninh Kiều, TP. Cần Thơ</div>
            </div>
            <Link href="https://maps.app.goo.gl/epTLBiHeZqaKXBWR9" target="_blank">
              <Button className="text-[16px] rounded-md py-2 px-10 bg-[rgb(var(--secondary-rgb))]">Xem bản đồ</Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-10">
          <div className="flex justify-between items-center w-3/4">
            <div className="w-full">
              <iframe
                width="100%"
                height="400"
                scrolling="no"
                style={{
                  border: 0,
                }}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=106%20Nguy%E1%BB%85n%20Minh%20Quang,%20P.%20An%20Kh%C3%A1nh,%20Q.%20Ninh%20Ki%E1%BB%81u,%20TP.%20C%E1%BA%A7n%20Th%C6%A1+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              </iframe>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20 w-full">
          <div className="flex flex-col justify-left w-3/4">
            <h1 className="font-bold text-2xl">HÌNH ẢNH THỰC TẾ</h1>
            <DecorBar />
            <div>
              <RealityImage />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-orange-50 py-12 px-6 mt-14 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Đăng ký học cùng <span className="text-[rgb(var(--secondary-rgb))]">IELTS VIỆT</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <Image src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float.png" alt="Zalo Logo" className="w-10 h-10" width={1000} height={1000} />
            <div className="cursor-pointer" onClick={() => window.open('https://www.facebook.com/profile.php?id=61550718094576', '_blank')}>
              <p className="font-semibold text-gray-800">Nhắn tin Zalo</p>
              <p className="text-gray-500 text-sm">Trung tâm IELTS VIỆT</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <Image src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float-1.png" alt="Messenger Logo" className="w-10 h-10" width={1000} height={1000} />
            <div className="cursor-pointer" onClick={() => window.open('https://www.facebook.com/profile.php?id=61550718094576', '_blank')}>
              <p className="font-semibold text-gray-800">Nhắn tin Messenger</p>
              <p className="text-gray-500 text-sm">Trung tâm IELTS VIỆT</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <Image src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float-2.png" alt="Phone Icon" className="w-10 h-10" width={1000} height={1000} />
            <div className="cursor-pointer" onClick={() => window.open('https://www.facebook.com/profile.php?id=61550718094576', '_blank')}>
              <p className="font-semibold text-gray-800">Gọi hotline</p>
              <p className="text-gray-500 text-sm">0939 217 718</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <Image src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float-3.png" alt="Clipboard Icon" className="w-10 h-10" width={1000} height={1000} />
            <div className="cursor-pointer" onClick={() => window.open('https://www.facebook.com/profile.php?id=61550718094576', '_blank')}>
              <p className="font-semibold text-gray-800">Đăng ký kiểm tra trình độ</p>
              <p className="text-[rgb(var(--secondary-rgb))] text-sm">miễn phí</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
