"use client"

import Header from "@/layout/header"
import Footer from "@/layout/footer"
import { BreadcrumbFormat } from "@/components/using-ui/breadcrumb-format"
import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { DATA } from "@/utils/data";
import Link from "next/link";
import { ROUTES } from "@/utils/route";
import SignWithIelts from "@/layout/sign-with-ielts";

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
const routes = ROUTES

export default function BlogDetailPage() {

    const [currentData, setCurrentData] = useState<Blog | null>(null);
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        const fetchData = async () => {
            let id = 0;
            const regex = /\/bang-tin\/(\d+)/;
            const match = currentPath.match(regex);
            if (match && match[1]) {
                id = parseInt(match[1], 10);
                blogs?.forEach((blog: Blog) => {
                    if (blog?.id === id) {
                        setCurrentData(blog);
                    }
                });
            }
        };
        fetchData();
    }, [currentPath]);

    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className="w-5/6 flex justify-center items-start py-8">
                <div className="flex flex-col items-start border-t-2 border-b-2 gap-4 py-6  sticky top-12 l left-12">
                    <div className="text-sm text-gray-700">Chia sẻ</div>
                    <a href="#" className=" text-lg font-bold w-14 h-14 flex items-center justify-center rounded-full bg-white border border-gray-200 text-[rgb(var(--secondary-rgb))] hover:bg-[rgb(var(--secondary-rgb))] hover:text-white transition duration-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">f</a>
                    <a href="#" className="text-lg font-bold w-14 h-14 flex items-center justify-center rounded-full bg-white border border-gray-200 text-[rgb(var(--secondary-rgb))] hover:bg-[rgb(var(--secondary-rgb))] hover:text-white transition duration-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">x</a>
                    <a href="#" className="text-lg font-bold w-14 h-14 flex items-center justify-center rounded-full bg-white border border-gray-200 text-[rgb(var(--secondary-rgb))] hover:bg-[rgb(var(--secondary-rgb))] hover:text-white transition duration-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">🔗</a>
                </div>
                <div className="flex flex-col justify-start r w-3/4 px-12 ">
                    <div className="w-7/8 flex justify-between items-center py-4">
                        <BreadcrumbFormat currentPath={currentPath} />
                        <div className="flex items-center "><CalendarDays className="mr-1" /> {currentData?.date}</div>
                    </div>
                    <div className="border-b-2">
                        <div className="text-4xl font-bold py-4">{currentData?.name}</div>
                        <div className="text-base py-4">{currentData?.content}</div>
                    </div>
                    <div></div>
                </div>
                <div className="flex flex-col items-center w-2/6 py-6">
                    <img className="w-full" src="https://ktdcgroup.vn/wp-content/uploads/2021/05/banner-PT.jpg" />
                    <div className="flex flex-col w-full py-6 sticky top-12">
                        <div className="text-xl font-bold py-4">Có thể bạn quan tâm</div>
                        {blogs?.map((blog: Blog, index: number) => (
                            blog?.id === currentData?.id ?
                                <></>
                                :
                                <Link key={index} href={`${routes.BLOG}/${blog?.id}`}>
                                    <div className="flex justify-center items-center py-2">
                                        <img className="w-[200px] h-[65px] rounded-md" src={blog?.image} />
                                        <div className="px-4 text-base font-bold">{blog?.name}</div>
                                    </div>
                                </Link>
                        ))}
                    </div>
                </div>
            </div>
            <SignWithIelts />
            <Footer />
        </div>
    )
}