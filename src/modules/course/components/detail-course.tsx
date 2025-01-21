'use client'

import { IMAGES } from "@/utils/images";
import { CircleCheckBig, Trophy } from "lucide-react";
import Image from "next/image";

export default function CourseDetail() {
  return (
    <div className="w-full mx-auto max-h-[80vh] overflow-y-auto">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="relative w-full lg:col-span-5 h-[250px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
            <Image
              src={IMAGES.LOGO}
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-4 lg:space-y-6 lg:col-span-7">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Khoá học IELTS Foundation</h1>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--secondary-rgb))]" />
                  <span className="text-sm sm:text-base font-semibold">Đầu vào: 3.5 - 4.0</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--secondary-rgb))]" />
                  <span className="text-sm sm:text-base font-semibold">Đầu ra: 4.5+</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--secondary-rgb))]" />
                <span className="text-sm sm:text-base font-semibold">Cam kết đầu ra / học lại miễn phí</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--secondary-rgb))]" />
                <span className="text-sm sm:text-base font-semibold">Phương pháp Total Immersion, học nhanh hơn 40%</span>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <CircleCheckBig size={16} className="sm:w-5 sm:h-5 text-[rgb(var(--secondary-rgb))]" />
                <span className="text-sm sm:text-base">Thời gian: 1.5 giờ / buổi</span>
              </div>
              <div className="flex items-center space-x-2">
                <CircleCheckBig size={16} className="sm:w-5 sm:h-5 text-[rgb(var(--secondary-rgb))]" />
                <span className="text-sm sm:text-base">Thời lượng: 36 giờ (8 tuần)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CircleCheckBig size={16} className="sm:w-5 sm:h-5 text-[rgb(var(--secondary-rgb))]" />
                <span className="text-sm sm:text-base">Học phí: 9.889.000 đ</span>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold">Mục tiêu khóa học</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Khóa học Pre IELTS là sự tiếp nối của Foundation, cung cấp các kiến thức nền tảng cho kỳ thi IELTS.
                Được thiết kế dành riêng cho các bạn chưa tự tin sử dụng tiếng anh trong môi trường học thuật và
                giao tiếp hằng ngày, khóa học giúp nâng cao khả năng phản xạ, sự tự tin, vốn từ vựng và khả năng
                phát âm chuẩn xác.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}