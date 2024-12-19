"use client"

import Header from "@/layout/header"
import Footer from "@/layout/footer"
import { DecorBar } from "@/components/using-ui/decor-bar"
import { DATA } from '@/utils/data'
import Image from "next/image"
import { useState } from "react"
// import Pagination from "react-bootstrap/Pagination";
import RealityImage from "../contact/reality-image"
import StudentSlider from "./components/students.slider"
import Link from "next/link";
import DOMPurify from 'isomorphic-dompurify';
import { ROUTES } from "@/utils/route"
import SignWithIELTS from "@/layout/sign-with-ielts"
import { slugifyURL } from "@/utils/slugify"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface Students {
    id: number,
    image: string,
    title: string,
    content: string,
}

interface Images {
    id: number,
    original: string,
    thumbnail: string,
    description: string
}

const students = DATA.STUDENTS as Students[]

const images = DATA.REAL_IMAGES as Images[]

export default function StudentPage() {
    const [itemPerPage, setItemPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const Option = { lower: true, locale: 'vi', trim: true };

    const totalResult = students.length;
    const totalPages = Math.ceil(totalResult / itemPerPage);

    const pagedResult = students.slice(
        (currentPage - 1) * itemPerPage,
        currentPage * itemPerPage
    );

    // const goToNextPage = () => {
    //     if (currentPage < totalPages) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // };
    // const goToPreviousPage = () => {
    //     if (currentPage > 1) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // };

    const goToPreviousPage = () => {
        if (currentPage <= 1) return;
        setCurrentPage(currentPage - 1);
    };

    const goToNextPage = () => {
        if (currentPage >= totalPages) return;
        setCurrentPage(currentPage + 1);
    };


    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        setCurrentPage(totalPages);
    };

    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className="w-3/4 mt-7 rounded-md flex justify-center items-center">
                <section className="w-full flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl">HỌC VIÊN IELTS VIỆT</h1>
                    <DecorBar />
                    <article className="w-4/6 text-wrap text-center text-base font-medium leading-7 text-gray-600">
                        Hơn 15 năm hoạt động, IELTS Việt tự hào là đơn vị đào tạo nên hàng ngàn học viên có thành tích IELTS ấn tượng. Các cựu học viên có điểm số cao (IELTS 8.0+) còn chủ động kết nối thành mạng lưới học viên năng động, góp phần giúp đỡ học viên hiện tại của trung tâm luyện tập kỹ năng Nghe – Nói. IELTS Việt tin rằng với mỗi hành trình đã đi qua, học viên đều có những câu chuyện truyền cảm hứng của riêng mình. Hãy cùng IELTS Việt khám phá nhé!
                    </article>
                </section>
            </div>
            <div className="w-3/4 mt-10">
                <div className="grid grid-cols-3 gap-7">
                    {pagedResult.map((stu, index) => (
                        <div key={index} className="group rounded-xl shadow-[rgba(17,_17,_26,_0.2)_0px_0px_15px] shadow-slate-200 overflow-hidden">
                            <div className="relative overflow-hidden rounded-t-xl py-10">
                                <Link href={`${ROUTES.STUDENT}/${slugifyURL(stu.title)}-${stu.id}`}>
                                    <Image className="transform transition-transform duration-500 group-hover:scale-105 object-cover w-36 h-36 mx-auto" src={stu.image} alt="" width={1000} height={1000} />
                                </Link>
                            </div>
                            <div className="mx-5 my-5">
                                <Link href={`${ROUTES.STUDENT}/${slugifyURL(stu.title)}-${stu.id}`}>
                                    <p className="font-bold text-xl mb-3 line-clamp-2 hover:text-[rgb(var(--secondary-rgb))] cursor-pointer">{stu.title}</p>
                                </Link>
                                <div className="text-justify text-gray-600 line-clamp-3">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(stu?.content || '', { USE_PROFILES: { html: false } }) }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-10">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={(e) => {
                                        if (currentPage <= 1) {
                                            e.preventDefault();
                                        } else {
                                            goToPreviousPage();
                                        }
                                    }}
                                    className={`px-5 py-2 border rounded-lg ${currentPage <= 1 ? 'opacity-50 cursor-default' : 'hover:bg-[rgb(var(--secondary-rgb))] hover:text-white cursor-pointer'}`}
                                />
                            </PaginationItem>
                            {currentPage !== 1 && (
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        onClick={goToFirstPage}
                                        className="text-center"
                                    >
                                        1
                                    </PaginationLink>
                                </PaginationItem>
                            )}
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    onClick={() => setCurrentPage(currentPage)}
                                    isActive={currentPage === currentPage}
                                >
                                    {currentPage}
                                </PaginationLink>
                            </PaginationItem>
                            {currentPage !== totalPages && (
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                        className="text-center"
                                    >
                                        {currentPage + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            )}
                            {currentPage < totalPages - 1 && (
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            )}
                            {/* {currentPage !== totalPages && (
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        onClick={goToLastPage}
                                        className="text-center"
                                    >
                                        {totalPages}
                                    </PaginationLink>
                                </PaginationItem>
                            )} */}
                            <PaginationItem>
                                <PaginationNext
                                    href="#"
                                    onClick={(e) => {
                                        if (currentPage >= totalPages) {
                                            e.preventDefault();
                                        } else {
                                            goToNextPage();
                                        }
                                    }}
                                    className={`px-5 py-2 border rounded-lg ${currentPage >= totalPages ? 'opacity-50 cursor-default' : 'hover:bg-[rgb(var(--secondary-rgb))] hover:text-white cursor-pointer'}`}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>

            <div className="w-3/4 mt-20 bg-gray-300 h-px"></div>

            <div className="w-3/4 mt-20 rounded-md flex justify-center items-center">
                <section className="w-full flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl">CẢM NHẬN HỌC VIÊN</h1>
                    <DecorBar />
                </section>
            </div>

            <div className="w-full flex justify-center">
                <StudentSlider />
            </div>

            <div className="bg-cover bg-center h-full w-full flex justify-center items-center py-8"
                style={{ backgroundImage: `url('https://res.cloudinary.com/farmcode/image/upload/v1733374676/ielts-viet/chuong-trinh-hoc-ielts-ktdc-ielts-6-Copy-min_eettnm.jpg')` }}>
                <div className="w-3/4 flex justify-center items-center">
                    <div className="w-full justify-self-center">
                        <div className="text-3xl text-[rgb(var(--secondary-rgb))] font-bold py-4">TƯ VẤN LỘ TRÌNH HỌC CÁ NHÂN HÓA</div>
                        <div className="text-base text-white py-4 w-[700px]">Mỗi học viên đều có xuất phát điểm và mục tiêu khác nhau. Để thiết kế lộ trình học cá nhân hóa cho riêng bạn, hãy để lại thông tin ở đây ngay bạn nhé!</div>
                        <div className="py-4">
                            <div className="text-base text-[rgb(var(--secondary-rgb))] font-bold">Hoặc gọi hotline</div>
                            <div className="text-xl text-white font-bold">093 921 77 18</div>
                        </div>
                    </div>
                    <div className="justify-self-center">
                        <div className="">
                            <input type="text" id="first_name" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Họ và tên" required />
                        </div>
                        <div className="py-4">
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Số điện thoại" required />
                        </div>
                        <div className="">
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                        </div>
                        <button className="w-full mt-8 px-4 py-2 bg-[rgb(var(--secondary-rgb))] text-white font-semibold rounded-full">Đăng ký tư vấn</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-20 w-full">
                <div className="flex flex-col justify-left w-3/4">
                    <h1 className="font-bold text-3xl">Hình ảnh thực tế</h1>
                    <DecorBar />
                    <div>
                        <RealityImage />
                    </div>
                </div>
            </div>
            <SignWithIELTS />
            <Footer />
        </div >
    )
}
