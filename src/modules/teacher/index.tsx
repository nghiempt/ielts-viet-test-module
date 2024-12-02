"use client"

import Header from "@/layout/header"
import Footer from "@/layout/footer"
import { BreadcrumbFormat } from "@/components/using-ui/breadcrumb-format"
import { useEffect, useState } from "react";
import { DATA } from '@/utils/data'
import Image from "next/image";
import DetailTeacher from "./detail-teacher";
import SignWithIelts from "@/layout/sign-with-ielts";

const teacher = DATA.TEACHERS_DATA

export default function TeacherPage() {

    const [currentPath, setCurrentPath] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    const openPopup = (teacher: any) => {
        setSelectedTeacher(teacher);
    }

    const closePopup = () => {
        setSelectedTeacher(null);
    }

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    useEffect(() => {
        if (selectedTeacher) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedTeacher]);

    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className="w-3/4 mt-7 rounded-md flex justify-center">
                <section className="w-full flex flex-col items-center">
                    <h1 className="font-bold text-3xl mb-5">Đội ngũ giảng viên</h1>
                    <article className="w-4/6 text-center text-base text-gray-600">
                        Ielts Việt tự hào với <strong>100% giảng viên bản ngữ</strong>, trong đó <strong>80% là cựu giám khảo IELTS</strong> được đào tạo chuyên nghiệp bởi Hội Đồng Anh, kết hợp với các cố vấn học tập người <strong>Việt đạt 8.0+ IELTS</strong>. Bạn sẽ được học với giảng viên bản ngữ mà không sợ rào cản ngôn ngữ, và được các cố vấn học tập hỗ trợ trong và ngoài lớp để đạt band điểm mong muốn.
                    </article>
                </section>
            </div>
            <div className="w-3/4 mt-10">
                <div className="grid grid-cols-3 gap-7">
                    {teacher?.map((tc, index) => (
                        <div
                            key={index}
                            className="relative shadow-inner overflow-hidden group rounded-lg cursor-pointer"
                            onClick={() => openPopup(tc)}
                        >
                            <Image
                                className="rounded-lg transform transition-transform duration-500 group-hover:scale-105 object-cover w-full h-full"
                                src={tc?.image} alt="" width={1000} height={1000} />
                            <div className="absolute bottom-10 left-10 text-white z-10">
                                <p>Giảng viên</p>
                                <p className="text-xl font-bold">{tc?.name}</p>
                            </div>
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-zinc-700 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
            <DetailTeacher teacher={selectedTeacher} onClose={closePopup} />
            <SignWithIelts />
            <Footer />
        </div >
    )
}