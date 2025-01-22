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
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1737486036/ielts-viet/mplejel4nxfszo5h22bb.jpg',
    },
    {
        id: 'marketing',
        title: 'Đầy Đủ Thiết Bị Dạy Và Học',
        description: 'We are providing you the best Digital Marketing guideline. That help you be professional.',
        icon: (
            <div className="bg-emerald-500 p-4 rounded-full">
                <div className="text-white"><TvMinimal /></div>
            </div>
        ),
        backgroundColor: 'bg-white',
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1737435779/ielts-viet/p2rb9bpcdzvnelvnad0j.png',
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
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1734515016/ielts-viet/i1jpeg706915450493341690964553-8179-2357-1731214088_urxkup.jpg',
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
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1737442238/ielts-viet/zplfykopocpkhtvpy08q.png',
    },
    {
        id: 'i7',
        title: 'Góc Tự Học IELTS',
        description: 'We are providing you the best Self Improvement guideline. That help you be professional.',
        icon: (
            <div className="bg-[#0A3D62] p-4 rounded-full">
                <div className="text-white"><GraduationCap /></div>
            </div>
        ),
        backgroundColor: 'bg-white',
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1737486038/ielts-viet/gwpwwwlvavk2fnqvxoq4.jpg',
    },
    {
        id: 'i8',
        title: 'Tặng Tài Khoản Tự Luyện IELTS',
        description: 'We are providing you the best Self Improvement guideline. That help you be professional.',
        icon: (
            <div className="bg-[#868E26] p-4 rounded-full">
                <div className="text-white"><CircleUser /></div>
            </div>
        ),
        backgroundColor: 'bg-white',
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1737435811/ielts-viet/v8eul70ldtygnsrdohxa.png',
    },
    {
        id: 'i9',
        title: 'Thực Hành Nghe Nói Liên Tục',
        description: 'We are providing you the best Self Improvement guideline. That help you be professional.',
        icon: (
            <div className="bg-[#EDD2B5] p-4 rounded-full">
                <div className="text-white"><BookHeadphones /></div>
            </div>
        ),
        backgroundColor: 'bg-white',
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1737486000/ielts-viet/cfjurrtf2224ujouqvyv.jpg',
    },
    {
        id: 'i10',
        title: 'Phòng Đọc IELTS',
        description: 'We are providing you the best Self Improvement guideline. That help you be professional.',
        icon: (
            <div className="bg-[#333333] p-4 rounded-full">
                <div className="text-white"><BookMarked /></div>
            </div>
        ),
        backgroundColor: 'bg-white',
        thumbail: 'https://res.cloudinary.com/farmcode/image/upload/v1737486035/ielts-viet/hgftmi9a0mpc8qaquc36.jpg',
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
                </div>
            </div>
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`flex flex-col ${category.backgroundColor} justify-between rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-300 cursor-pointer mx-2 lg:mx-0`}>
                            {/* <div className="flex flex-col items-start gap-4 p-4">
                                {category.icon}
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div> */}
                            <h3 className="text-xl font-bold">{category.title}</h3>
                            <Image
                                src={category.thumbail}
                                alt="alt"
                                className="w-full h-[300px] object-cover rounded-lg mt-4"
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