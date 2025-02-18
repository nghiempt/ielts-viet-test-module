'use client'

import Header from '@/layout/header';
import Footer from '@/layout/footer';
import Image from 'next/image';
import { LoginModal } from './login';
import { useState } from 'react';
import { Loader } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const teachers: any = [
    {
        id: "1",
        name: "Thầy Trương Hoàng Hậu",
        role: "Giám Đốc",
        image:
            "https://res.cloudinary.com/farmcode/image/upload/v1737517741/ielts-viet/e9ezv52zjsijpkidifme.jpg",
        backgroundColor: "bg-pink-100",
    },
    {
        id: "1",
        name: "Thầy Lâm Tiến Thành",
        role: "Giảng viên",
        image:
            "https://res.cloudinary.com/farmcode/image/upload/v1737517742/ielts-viet/hdxxkkes5gtfokmssff8.jpg",
        backgroundColor: "bg-pink-100",
    },
    {
        id: "1",
        name: "Cô Thạch Ngọc Trân",
        role: "Giảng viên",
        image:
            "https://res.cloudinary.com/farmcode/image/upload/v1737517742/ielts-viet/wzyakd9aahjm9lguisas.jpg",
        backgroundColor: "bg-pink-100",
    },
    {
        id: "1",
        name: "Cô Lê Đức Anh Thư",
        role: "Giảng viên",
        image:
            "https://res.cloudinary.com/farmcode/image/upload/v1737517741/ielts-viet/ylsyb61zi9kyascwp0it.jpg",
        backgroundColor: "bg-pink-100",
    },
    {
        id: "1",
        name: "Cô Võ Minh Thư",
        role: "Giảng viên",
        image:
            "https://res.cloudinary.com/farmcode/image/upload/v1737517741/ielts-viet/vstvevvdeyhrk2ng0kun.jpg",
        backgroundColor: "bg-cyan-100",
    },
    {
        id: "courtney",
        name: "Cô Phương Trinh",
        role: "Giảng viên",
        image:
            "https://res.cloudinary.com/farmcode/image/upload/v1737517741/ielts-viet/xwhzeij09ovqumaso6rn.jpg",
        backgroundColor: "bg-sky-100",
    },
];

export default function TimeKeepingClient() {

    const currentTime = new Date().toLocaleTimeString();
    const { toast } = useToast();

    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isCheckIn, setIsCheckIn] = useState(false);

    const handleLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsLogin(true);
        }, 2000);
    }

    const handleCheckIn = () => {
        setIsLoading(true);
        setTimeout(() => {
            toast({
                title: "Bạn đã check-in thành công!",
                description: "Chúc bạn một ngày làm việc hiệu quả!",
            })
            setIsLoading(false);
            setIsCheckIn(true);
        }, 2000);
    }

    const handleCheckOut = () => {
        setIsLoading(true);
        setTimeout(() => {
            toast({
                title: "Bạn đã check-out thành công!",
                description: "Thời gian làm việc hôm nay của bạn là 118 phút.",
            })
            setIsLoading(false);
            setIsCheckIn(false);
            setIsLogin(false);
        }, 2000);
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Header />
            <div className="w-full flex flex-col justify-center items-center pt-10 pb-20">
                {
                    !isLogin && (
                        <div className='w-3/4'>
                            <h1 className="text-2xl text-center">Hãy chọn bản thân để Check-in nhé!</h1>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10'>
                                {
                                    teachers?.map((teacher: any, index: any) => {
                                        return (
                                            <LoginModal key={index} teacher={teacher} handleLogin={handleLogin} isLoading={isLoading} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
                {
                    isLogin && !isCheckIn && (
                        <div className='w-3/4 flex flex-col lg:flex-row justify-center items-center gap-10 lg:mt-10'>
                            <div className="border border-green-500 p-10 rounded-lg flex flex-col justify-center items-center cursor-pointer">
                                <Image
                                    src="https://res.cloudinary.com/farmcode/image/upload/v1737517741/ielts-viet/e9ezv52zjsijpkidifme.jpg"
                                    alt="alt"
                                    className="w-20 h-20 object-cover rounded-full border"
                                    width={1000}
                                    height={0}
                                />
                                <div className="text-center space-y-1 mt-4">
                                    <h3 className="text-xl font-bold">Thầy Trương Hoàng Hậu</h3>
                                    <p className="text-[rgb(var(--secondary-rgb))] font-medium">
                                        Giảng viên
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-start items-center gap-4'>
                                <h1 className="text-xl text-center">Click vào nút bên dưới để Check-in</h1>
                                <div className='flex justify-center items-center'>
                                    <div onClick={handleCheckIn} className='w-28 h-28 rounded-full border border-dashed border-green-500 text-green-500 hover:border-2 hover:font-extrabold flex justify-center items-center cursor-pointer'>
                                        {
                                            isLoading
                                                ?
                                                <Loader className="w-6 h-6 ml-2 animate-spin" />
                                                :
                                                "Check-in"
                                        }
                                    </div>
                                </div>
                                <h1 className="text-xl text-center">Thời gian bạn Check-in là: {currentTime}</h1>
                            </div>
                        </div>
                    )
                }
                {
                    isLogin && isCheckIn && (
                        <div className='w-3/4 flex flex-col lg:flex-row justify-center items-center gap-10 lg:mt-10'>
                            <div className="border border-red-500 p-10 rounded-lg flex flex-col justify-center items-center cursor-pointer">
                                <Image
                                    src="https://res.cloudinary.com/farmcode/image/upload/v1737517741/ielts-viet/e9ezv52zjsijpkidifme.jpg"
                                    alt="alt"
                                    className="w-20 h-20 object-cover rounded-full border"
                                    width={1000}
                                    height={0}
                                />
                                <div className="text-center space-y-1 mt-4">
                                    <h3 className="text-xl font-bold">Thầy Trương Hoàng Hậu</h3>
                                    <p className="text-[rgb(var(--secondary-rgb))] font-medium">
                                        Giảng viên
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-start items-center gap-4'>
                                <h1 className="text-xl text-center">Bạn đã Check-in lúc 5:20:16 PM</h1>
                                <div className='flex justify-center items-center'>
                                    <div onClick={handleCheckOut} className='w-28 h-28 rounded-full border border-dashed border-red-500 text-red-500 hover:border-2 hover:font-extrabold flex justify-center items-center cursor-pointer'>
                                        {
                                            isLoading
                                                ?
                                                <Loader className="w-6 h-6 ml-2 animate-spin" />
                                                :
                                                "Check-out"
                                        }
                                    </div>
                                </div>
                                <h1 className="text-xl text-center">Thời gian bạn đang làm việc là: 118 phút.</h1>
                            </div>
                        </div>
                    )
                }
            </div>
            <Footer />
        </div>
    );
}