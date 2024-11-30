"use client"

import { ROUTES } from "@/utils/route"
import { PhoneCall } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import FAVICON from '../app/favicon.ico'

export default function Header() {

    const pathName = usePathname()

    const checkPathName = (pathName: string) => {
        if (new RegExp(`^${ROUTES.STUDENT}/[a-z0-9-]+$`).test(pathName)) {
            return 3;
        }
        switch (pathName) {
            case `${ROUTES.HOME}`:
                return 0
            case `${ROUTES.COURSE}`:
                return 1
            case `${ROUTES.TEACHER}`:
                return 2
            case `${ROUTES.STUDENT}`:
                return 3
            case `${ROUTES.CONTACT}`:
                return 4
            case `${ROUTES.BLOG}`:
                return 5
            default:
                return 0
        }
    }

    useEffect(() => { }, [pathName])

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-3/4 flex items-center justify-between py-4">
                <a href="/" className="flex items-center space-x-2 cursor-pointer">
                    <Image src={FAVICON} alt="alt" width={48} height={48} />
                    <div className="flex flex-col">
                        <span className="font-bold text-2xl text-gray-800">Ielts Việt</span>
                        <span className="text-sm font-medium text-[rgb(var(--secondary-rgb))]">English Center</span>
                    </div>
                </a>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-[rgb(var(--quaternary-rgb))] px-4 py-2 rounded-full">
                        <PhoneCall className="w-4 h-4" />
                        <span className="text-gray-700 font-light">Hotline:</span>
                        <span className="font-semibold text-gray-800">093 921 77 18</span>
                    </div>
                    <a href="/" className="bg-[rgb(var(--secondary-rgb))] text-white font-semibold px-4 py-2 rounded-full">Đặt lịch hẹn</a>
                    <div className="flex items-center space-x-2">
                        <Image src="https://cdn-icons-png.flaticon.com/128/197/197473.png" alt="alt" width={20} height={20} />
                        <span className="text-gray-700 font-semibold">VI</span>
                    </div>
                </div>
            </div>
            <div className="w-3/4 flex justify-center items-center border-b border-t border-gray-200 bg-white py-4">
                <ul className="flex justify-center items-center gap-20">
                    <li>
                        <a href={ROUTES.HOME} className={`${checkPathName(pathName) === 0 ? 'font-bold text-[rgb(var(--secondary-rgb))]' : 'text-gray-800 hover:text-[rgb(var(--secondary-rgb))]'}`}>TRANG CHỦ</a>
                    </li>
                    <li>
                        <a href={ROUTES.COURSE} className={`${checkPathName(pathName) === 1 ? 'font-bold text-[rgb(var(--secondary-rgb))]' : 'text-gray-800 hover:text-[rgb(var(--secondary-rgb))]'}`}>KHOÁ HỌC</a>
                    </li>
                    <li>
                        <a href={ROUTES.TEACHER} className={`${checkPathName(pathName) === 2 ? 'font-bold text-[rgb(var(--secondary-rgb))]' : 'text-gray-800 hover:text-[rgb(var(--secondary-rgb))]'}`}>GIẢNG VIÊN</a>
                    </li>
                    <li>
                        <a href={ROUTES.STUDENT} className={`${checkPathName(pathName) === 3 ? 'font-bold text-[rgb(var(--secondary-rgb))]' : 'text-gray-800 hover:text-[rgb(var(--secondary-rgb))]'}`}>HỌC VIÊN</a>
                    </li>
                    <li>
                        <a href={ROUTES.CONTACT} className={`${checkPathName(pathName) === 4 ? 'font-bold text-[rgb(var(--secondary-rgb))]' : 'text-gray-800 hover:text-[rgb(var(--secondary-rgb))]'}`}>LIÊN HỆ</a>
                    </li>
                    <li>
                        <a href={ROUTES.BLOG} className={`${checkPathName(pathName) === 5 ? 'font-bold text-[rgb(var(--secondary-rgb))]' : 'text-gray-800 hover:text-[rgb(var(--secondary-rgb))]'}`}>BẢNG TIN</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://app.testonline.vn/vi/manage-class/672d7e9e0e00a43c5d0afc95" className={`text-gray-800 hover:text-[rgb(var(--secondary-rgb))]`}>TEST ONLINE</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
