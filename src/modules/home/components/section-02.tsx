'use client'

import Image from "next/image";

const Section02 = () => {
    return (
        <section className="w-full">
            <div className="space-y-12">
                <div className="text-center">
                    <p className="text-[rgb(var(--secondary-rgb))] text-lg font-semibold mb-3">
                        Cam kết đầu ra
                    </p>
                    <div className="relative inline-block">
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            Luyện IELTS Cam Kết Đầu Ra
                        </h2>
                        <div className="hidden lg:flex absolute top-1/2 right-0 w-32 h-3 bg-[rgb(var(--tertiary-rgb))] opacity-70 -z-10 transform translate-x-6"></div>
                    </div>
                </div>
                <div className="mx-6 lg:mx-4">
                    <p className="text-center">
                        Trải nghiệm chương trình luyện thi IELTS hoàn toàn mới được thiết kế đặc biệt bởi các chuyên gia IELTS hàng đầu tại trung tâm IELTS CITY. Khoá học IELTS theo mô hình nhóm nhỏ, sĩ số ít chỉ từ 4-8 học viên, giúp học viên đạt & vượt điểm IELTS trong thời gian nhanh nhất, đồng thời phát triển vượt bậc các kĩ năng Anh ngữ trong môi trường học sáng tạo bậc nhất hiện nay!
                    </p>
                </div>
                <div className="hidden lg:flex flex-row justify-around lg:justify-center items-center mx-4 lg:mx-0 gap-3 lg:gap-16">
                    <div className="flex flex-col lg:flex-row lg:justify-around items-center gap-3 lg:gap-16">
                        <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
                            <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/761/761505.png"
                                    alt="alt"
                                    className="w-full h-8 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                                    width={400}
                                    height={200}
                                />
                            </div>
                            <div className="text-sm text-center">Học Bổng Du Học</div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
                            <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/10473/10473299.png"
                                    alt="alt"
                                    className="w-full h-8 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                                    width={400}
                                    height={200}
                                />
                            </div>
                            <div className="text-sm text-center">Định Cư Nước Ngoài</div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-around items-center gap-3 lg:gap-16">
                        <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
                            <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997322.png"
                                    alt="alt"
                                    className="w-full h-8 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                                    width={400}
                                    height={200}
                                />
                            </div>
                            <div className="text-sm text-center">Xét Tuyển Đại Học</div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
                            <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/3059/3059330.png"
                                    alt="alt"
                                    className="w-full h-8 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                                    width={400}
                                    height={200}
                                />
                            </div>
                            <div className="text-sm text-center">Cơ Hội Việc Làm</div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:hidden flex-col justify-around lg:justify-center items-start mx-4 lg:mx-0 gap-3 lg:gap-16">
                    <div className="w-full flex flex-col lg:flex-row lg:justify-around items-center gap-3 lg:gap-16 px-8">
                        <div className="w-full flex justify-between items-center">
                            <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
                                <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/128/761/761505.png"
                                        alt="alt"
                                        className="w-full h-8 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                                        width={400}
                                        height={200}
                                    />
                                </div>
                                <div className="text-sm text-center">Học Bổng Du Học</div>
                            </div>
                            <div className="text-white">empty</div>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <div className="text-white">empty</div>
                            <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
                                <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/128/10473/10473299.png"
                                        alt="alt"
                                        className="w-full h-8 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                                        width={400}
                                        height={200}
                                    />
                                </div>
                                <div className="text-sm text-center">Định Cư Nước Ngoài</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row lg:justify-around items-center gap-3 lg:gap-16 px-8">
                        <div className="w-full flex justify-between items-center">
                            <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
                                <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/128/2997/2997322.png"
                                        alt="alt"
                                        className="w-full h-8 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                                        width={400}
                                        height={200}
                                    />
                                </div>
                                <div className="text-sm text-center">Xét Tuyển Đại Học</div>
                            </div>
                            <div className="text-white">empty</div>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <div className="text-white">empty</div>
                            <div className="flex flex-row justify-center items-center gap-3 cursor-pointer hover-container">
                                <div className="rounded-full bg-[#DEF2ED] p-[15px] pt-[16.5px] w-14 h-14 circle flex justify-center items-center">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/128/3059/3059330.png"
                                        alt="alt"
                                        className="w-full h-8 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                                        width={400}
                                        height={200}
                                    />
                                </div>
                                <div className="text-sm text-center">Cơ Hội Việc Làm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section02;