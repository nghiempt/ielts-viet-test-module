'use client'

import { BookHeadphones, BookMarked, CircleUser, Component, FolderCode, GraduationCap, Target, TvMinimal } from "lucide-react";
import Image from "next/image";

interface CourseCategory {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    backgroundColor: string;
    thumbail: string;
}

const categories: CourseCategory[] = [
    {
        id: 'uiux',
        title: 'Phòng Riêng Biệt',
        description: 'We are providing you the best UI/UX design guideline. That help you be professional.',
        icon: (
            <div className="bg-yellow-400 p-4 rounded-full">
                <div className="text-white font-bold"><Component /></div>
            </div>
        ),
        backgroundColor: 'bg-white',
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1737435779/ielts-viet/p2rb9bpcdzvnelvnad0j.png',
    },
    {
        id: 'marketing',
        title: 'Đầy đủ thiết bị dạy và học',
        description: 'We are providing you the best Digital Marketing guideline. That help you be professional.',
        icon: (
            <div className="bg-emerald-500 p-4 rounded-full">
                <div className="text-white"><TvMinimal /></div>
            </div>
        ),
        backgroundColor: 'bg-white',
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1737435811/ielts-viet/v8eul70ldtygnsrdohxa.png',
    },
    {
        id: 'development',
        title: 'Tài Liệu Nước Ngoài',
        description: 'We are providing you the best Development guideline. That help you be professional.',
        icon: (
            <div className="bg-blue-600 p-4 rounded-full">
                <div className="text-white"><FolderCode /></div>
            </div>
        ),
        backgroundColor: 'bg-white',
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1737435839/ielts-viet/pxyfd84me3bvelcvjbw0.png',
    },
    {
        id: 'improvement',
        title: 'Online Linh Hoạt',
        description: 'We are providing you the best Self Improvement guideline. That help you be professional.',
        icon: (
            <div className="bg-pink-500 p-4 rounded-full">
                <div className="text-white"><Target /></div>
            </div>
        ),
        backgroundColor: 'bg-white',
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1737435896/ielts-viet/lkqpogc3gwoxyq62r4dl.png',
    },
    {
        id: 'i7',
        title: 'Góc tự học IELTS',
        description: 'We are providing you the best Self Improvement guideline. That help you be professional.',
        icon: (
            <div className="bg-[#0A3D62] p-4 rounded-full">
                <div className="text-white"><GraduationCap /></div>
            </div>
        ),
        backgroundColor: 'bg-white',
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1737435896/ielts-viet/lkqpogc3gwoxyq62r4dl.png',
    },
    {
        id: 'i8',
        title: 'Tặng tài khoản tự luyện IELTS',
        description: 'We are providing you the best Self Improvement guideline. That help you be professional.',
        icon: (
            <div className="bg-[#868E26] p-4 rounded-full">
                <div className="text-white"><CircleUser /></div>
            </div>
        ),
        backgroundColor: 'bg-white',
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1737435896/ielts-viet/lkqpogc3gwoxyq62r4dl.png',
    },
    {
        id: 'i9',
        title: 'Thực hành nghe nói liên tục',
        description: 'We are providing you the best Self Improvement guideline. That help you be professional.',
        icon: (
            <div className="bg-[#EDD2B5] p-4 rounded-full">
                <div className="text-white"><BookHeadphones /></div>
            </div>
        ),
        backgroundColor: 'bg-white',
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1737435896/ielts-viet/lkqpogc3gwoxyq62r4dl.png',
    },
    {
        id: 'i10',
        title: 'Phòng đọc IELTS',
        description: 'We are providing you the best Self Improvement guideline. That help you be professional.',
        icon: (
            <div className="bg-[#333333] p-4 rounded-full">
                <div className="text-white"><BookMarked /></div>
            </div>
        ),
        backgroundColor: 'bg-white',
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1737435896/ielts-viet/lkqpogc3gwoxyq62r4dl.png',
    }
];

const Section06 = () => {
    return (
        <div className="w-full px-4 lg:px-0">
            <div className="text-center mb-12">
                <p className="text-[rgb(var(--secondary-rgb))] text-md lg:text-lg font-semibold mb-3">
                    Không Gian Học Tập
                </p>
                <div className="relative inline-block">
                    <h2 className="text-4xl lg:text-5xl font-bold">
                        Cơ Sở Vật Chất Hiện Đại
                    </h2>
                    <div className="hidden lg:flex absolute top-1/2 right-0 w-32 h-3 bg-[rgb(var(--tertiary-rgb))] opacity-70 -z-10 transform translate-x-6"></div>
                </div>
            </div>
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`flex ${category.backgroundColor} justify-between rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-300 cursor-pointer mx-2 lg:mx-0`}>
                            <div className="flex flex-col items-start gap-4 p-4">
                                {category.icon}
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>
                            <Image
                                src={category.thumbail}
                                alt="alt"
                                className="w-2/4 object-cover rounded-lg"
                                width={400}
                                height={200}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section06;