"use client"
import Image from "next/image"
import Header from "@/layout/header"
import Footer from "@/layout/footer"
import { useEffect, useState } from "react";
import { CalendarDays, Clock } from "lucide-react";
import { DATA } from "@/utils/data";
import Link from "next/link";
import { ROUTES } from "@/utils/route";
import SignWithIELTS from "@/layout/sign-with-ielts";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface Blog {
    id: number;
    name: string;
    image: string;
    content: string;
    date: string;
    time: string;
}

const blogs = DATA.BLOG_DATA as Blog[]
const routes = ROUTES

export default function BlogPage() {

    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    const [itemPerPage, setItemPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const Option = { lower: true, locale: 'vi', trim: true };

    const totalResult = blogs.length;
    const totalPages = Math.ceil(totalResult / itemPerPage);

    const pagedResult = blogs.slice(
        (currentPage - 1) * itemPerPage,
        currentPage * itemPerPage
    );

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
            <div className="w-3/4"></div>
            <div className="w-3/4 flex items-start">
                <div className="flex flex-col justify-start r w-3/4 pr-10">
                    <div className="flex justify-start items-center w-full py-6">
                        <div className="text-3xl font-bold w-3/6">Tất cả bài viết</div>
                        <div className="w-full h-[2px] bg-gray-300 "></div>
                    </div>
                    {pagedResult?.map((blog: Blog, index: number) => (
                        <Link
                            key={index}
                            href={`${routes.BLOG}/${blog?.id}`}
                        >
                            <div className="flex justify-center items-center py-4">
                                <Image className="w-2/6 h-[200px] rounded-sm" src={blog?.image} alt={""} width={1000} height={1000} />
                                <div className=" flex h-[200px] flex-col px-6 justify-start items-start">
                                    <div className="text-start text-xl font-bold hover:text-orange-400">{blog?.name}</div>
                                    <div className="text-start text-sm py-4 ">
                                        <p className="line-clamp-2">
                                            {blog?.content}
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="flex justify-center text-sm items-center"><CalendarDays className="mr-1" /> {blog?.date}</div>
                                        <div className="flex justify-center text-sm items-center"><Clock className="mr-1" /> {blog?.time}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
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
                <div className="flex flex-col items-center w-2/6 py-8">
                    <Image
                        className="w-full"
                        src="https://res.cloudinary.com/farmcode/image/upload/v1730742319/IELTS-viet/wcbfgroi7dyfkhyp6ada.png"
                        alt={""}
                        width={387.087}
                        height={516.112}
                    />
                    {/* <div className="flex justify-around items-center w-full py-4">
                        <div className="w-2/8 rounded-md border-yellow-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col items-center p-3">
                            <Image className="w-[36px] h-[36px] m-2" src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt={""} width={36} height={36} />
                            <div className="font-semibold">29.063+</div>
                            <div className="text-sm">Lượt thích</div>
                        </div>
                        <div className="w-2/8 rounded-md border-yellow-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col items-center p-3">
                            <Image className="w-[36px] h-[36px] m-2" src="https://cdn-icons-png.flaticon.com/128/3938/3938026.png" alt={""} width={36} height={36} />
                            <div className="font-semibold">1.050+</div>
                            <div className="text-sm">Lượt thích</div>
                        </div>
                        <div className="w-2/8 rounded-md border-yellow-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col items-center p-3">
                            <Image className="w-[36px] h-[36px] m-2" src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt={""} width={36} height={36} />
                            <div className="font-semibold">1.374+</div>
                            <div className="text-sm">Lượt thích</div>
                        </div>
                    </div> */}
                </div>
            </div>
            <SignWithIELTS />
            <Footer />
        </div>
    )
}