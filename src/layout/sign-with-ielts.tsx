'use client'

import Image from "next/image"

export default function SignWithIelts() {
  return (
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
  );
}