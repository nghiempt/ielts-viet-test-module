import Image from "next/image"
export function Header() {
    return (
        <><div className="w-3/4 flex items-center justify-between py-4">
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
        </div><div className="w-3/4 flex justify-center items-center border-b border-t border-gray-200 bg-white py-4">
                <ul className="flex justify-center items-center gap-20">
                    <li>
                        <a href="/" className="font-bold text-orange-500">TRANG CHỦ</a>
                    </li>
                    <li>
                        <a href="/course" className="text-gray-800 hover:text-orange-500">KHOÁ HỌC</a>
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
            </div></>
    )
}