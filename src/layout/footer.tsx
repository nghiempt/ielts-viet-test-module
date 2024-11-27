"use client"

import { MapPin, PhoneCall } from "lucide-react"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="w-full flex flex-col justify-center items-center">
            <div className="w-3/4 grid grid-cols-2 gap-20">
                <div>
                    <Image src="/favicon.ico" alt="alt" width={60} height={60} />
                    <p className="text-lg font-bold text-[rgb(var(--secondary-rgb))] py-2">IELTS VIỆT</p>
                    <p className="text-gray-600">
                        Thông qua IELTS, khai phá tiềm năng người học - Kiến tạo cộng đồng người Việt trẻ biết học hỏi tự chủ.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-md justify-start items-center">
                    <div>
                        <h3 className="text-[rgb(var(--secondary-rgb))] font-semibold mb-2">Học tại IELTS VIỆT</h3>
                        <ul className="space-y-1">
                            <li><a href="#">Đăng ký học</a></li>
                            <li><a href="#">Lịch khai giảng</a></li>
                            <li><a href="#">Cảm nhận học viên</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[rgb(var(--secondary-rgb))] font-semibold mb-2">Về IELTS VIỆT</h3>
                        <ul className="space-y-1">
                            <li><a href="#">Giới thiệu IELTS VIỆT</a></li>
                            <li><a href="#">Câu hỏi thường gặp</a></li>
                            <li><a href="#">Tuyển dụng</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[rgb(var(--secondary-rgb))] font-semibold mb-2">Tài liệu IELTS</h3>
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
                        <MapPin className="w-4 h-4" />
                        <p className="font-semibold">Cơ sở 1:</p>
                    </div>
                    <p className="text-[rgb(var(--secondary-rgb))]">Khu dân cư Thới Nhựt</p>
                    <p>106 Nguyễn Minh Quang, P. An Khánh, Q. Ninh Kiều, TP. Cần Thơ</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-4 h-4" />
                        <p className="font-semibold">Cơ sở 2:</p>
                    </div>
                    <p className="text-[rgb(var(--secondary-rgb))]">Khu dân cư Thới Nhựt</p>
                    <p>172c Nguyễn Tri Phương, P. An Khánh, Q. Ninh Kiều, TP. Cần Thơ</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                        <PhoneCall className="w-4 h-4" />
                        <p className="font-semibold">Liên hệ:</p>
                    </div>
                    <p className="text-[rgb(var(--secondary-rgb))]">Hotline</p>
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
    )
}
