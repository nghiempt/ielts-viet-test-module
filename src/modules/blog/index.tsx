"use client"

import Header from "@/layout/header"
import Footer from "@/layout/footer"
import { BreadcrumbFormat } from "@/components/using-ui/breadcrumb-format"
import { useEffect, useState } from "react";
import { CalendarDays, Clock } from "lucide-react";
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

export default function BlogPage() {

    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className="w-3/4 pb-10 pt-6">
                <BreadcrumbFormat currentPath={currentPath} />
            </div>
            <div className="w-5/6 flex justify-center items-start py-8">
                <div className="flex flex-col justify-start r w-3/4 px-12">
                    <div className="flex justify-start items-center w-full py-6">
                        <div className="text-3xl font-bold w-3/6">Tất cả bài viết</div>
                        <div className="w-full h-[2px] bg-gray-300 "></div>
                    </div>
                    {blogs?.map((blog: Blog, index: number) => (
                        <Link
                            key={index}
                            href={`${routes.BLOG}/${blog?.id}`}
                        >
                            <div className="flex justify-center items-center py-4">
                                <img className="w-2/6 h-[201px] rounded-sm" src={blog?.image} />
                                <div className="flex flex-col  px-6">
                                    <a className="text-center text-2xl font-bold hover:text-orange-400" href="/">{blog?.name}</a>
                                    <div className="text-center py-4">{blog?.description}</div>
                                    <div className="flex items-start gap-4">
                                        <div className="flex justify-center items-center"><CalendarDays className="mr-1" /> {blog?.date}</div>
                                        <div className="flex justify-center items-center"><Clock className="mr-1" /> {blog?.time}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col items-center w-2/6 py-8">
                    <img className="w-full" src="https://ktdcgroup.vn/wp-content/uploads/2021/05/banner-PT.jpg" />
                    <div className="flex justify-around items-center w-full py-4">
                        <div className="w-2/8 rounded-md border-yellow-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col items-center p-3">
                            <img className="w-[36px] h-[36px] m-2" src="https://cdn-icons-png.flaticon.com/128/733/733547.png" />
                            <div className="font-semibold">29.063+</div>
                            <div className="text-sm">Lượt thích</div>
                        </div>
                        <div className="w-2/8 rounded-md border-yellow-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col items-center p-3">
                            <img className="w-[36px] h-[36px] m-2" src="https://cdn-icons-png.flaticon.com/128/3938/3938026.png" />
                            <div className="font-semibold">1.050+</div>
                            <div className="text-sm">Lượt thích</div>
                        </div>
                        <div className="w-2/8 rounded-md border-yellow-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col items-center p-3">
                            <img className="w-[36px] h-[36px] m-2" src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" />
                            <div className="font-semibold">1.374+</div>
                            <div className="text-sm">Lượt thích</div>
                        </div>
                    </div>
                </div>
            </div>
            <SignWithIelts />
            <Footer />
        </div>
    )
}