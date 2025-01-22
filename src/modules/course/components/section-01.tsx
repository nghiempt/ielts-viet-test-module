'use client'

import { Card, CardContent } from "@/components/ui/card";
import { HELPER } from "@/utils/helper";
import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import CourseDetail from "./detail-course";

interface Course {
    id: number;
    title: string;
    price: number;
    instructor: {
        name: string;
        avatar: string;
        rating: number;
    };
    studentsCount: number;
    lessonsCount: number;
    image: string;
}

const courses: Course[] = [
    {
        id: 1,
        title: "Khoá Học IELTS Cấp Tốc Dành Cho Người Tìm Việc Làm",
        price: 8900000,
        instructor: {
            name: "Thầy Trương Hoàng Hậu",
            avatar: "https://res.cloudinary.com/farmcode/image/upload/v1737517741/ielts-viet/e9ezv52zjsijpkidifme.jpg",
            rating: 5.0,
        },
        studentsCount: 8,
        lessonsCount: 30,
        image: "https://res.cloudinary.com/farmcode/image/upload/v1737486040/ielts-viet/wfrjklqjato60wjicrvo.jpg",
    },
    {
        id: 2,
        title: "Khoá Học IELTS Online",
        price: 11900000,
        instructor: {
            name: "Cô Phương Trinh",
            avatar: "https://res.cloudinary.com/farmcode/image/upload/v1737517741/ielts-viet/xwhzeij09ovqumaso6rn.jpg",
            rating: 5.0,
        },
        studentsCount: 8,
        lessonsCount: 30,
        image: "https://res.cloudinary.com/farmcode/image/upload/v1737486039/ielts-viet/gz4p8bu280kvelkvrb6n.jpg",
    },
    {
        id: 3,
        title: "Khoá Học IELTS 1:1",
        price: 20000000,
        instructor: {
            name: "Cô Minh Thư",
            avatar: "https://res.cloudinary.com/farmcode/image/upload/v1737517741/ielts-viet/vstvevvdeyhrk2ng0kun.jpg",
            rating: 5.0,
        },
        studentsCount: 8,
        lessonsCount: 30,
        image: "https://res.cloudinary.com/farmcode/image/upload/v1737486037/ielts-viet/hgio2d2k9zx6xhc8pens.jpg",
    },
    {
        id: 4,
        title: "Khoá Học Nghe - Nói Tiếng Anh Thật Sự",
        price: 8900000,
        instructor: {
            name: "Thầy Lâm Tiến Thành",
            avatar: "https://res.cloudinary.com/farmcode/image/upload/v1737517742/ielts-viet/hdxxkkes5gtfokmssff8.jpg",
            rating: 5.0,
        },
        studentsCount: 8,
        lessonsCount: 30,
        image: "https://res.cloudinary.com/farmcode/image/upload/v1737486038/ielts-viet/gwpwwwlvavk2fnqvxoq4.jpg",
    },
    {
        id: 5,
        title: "Khoá Học Bám Sát Chương Trình Đang Học",
        price: 11900000,
        instructor: {
            name: "Cô Lê Đức Anh Thư",
            avatar: "https://res.cloudinary.com/farmcode/image/upload/v1737517741/ielts-viet/ylsyb61zi9kyascwp0it.jpg",
            rating: 5.0,
        },
        studentsCount: 8,
        lessonsCount: 30,
        image: "https://res.cloudinary.com/farmcode/image/upload/v1737486037/ielts-viet/vch5bl4ewxhm0noznds6.jpg",
    },
    {
        id: 6,
        title: "Khoá Học Đặc Biệt Chỉ Có Tại IELTS Việt",
        price: 20000000,
        instructor: {
            name: "Cô Ngọc Trân",
            avatar: "https://res.cloudinary.com/farmcode/image/upload/v1737517742/ielts-viet/wzyakd9aahjm9lguisas.jpg",
            rating: 5.0,
        },
        studentsCount: 8,
        lessonsCount: 30,
        image: "https://res.cloudinary.com/farmcode/image/upload/v1737486036/ielts-viet/mplejel4nxfszo5h22bb.jpg",
    },
];

const Section01 = () => {
    return (
        <section className="w-full">
            <div className="space-y-12">
                <div className="text-center">
                    <p className="text-[rgb(var(--secondary-rgb))] text-md lg:text-lg font-semibold mb-3">
                        Đăng ký để nhận ưu đãi
                    </p>
                    <div className="relative inline-block px-2">
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            Danh Sách Các Khoá Học
                        </h2>
                        <div className="absolute top-[73%] lg:top-1/2 right-[42%] lg:right-0 w-16 lg:w-32 h-3 bg-[rgb(var(--tertiary-rgb))] opacity-70 -z-10 transform translate-x-6"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 lg:mx-0">
                    {courses?.map((course: Course) => (
                        <Dialog key={course?.id}>
                            <DialogTrigger asChild>
                                <Card className="relative overflow-hidden cursor-pointer group hover:opacity-80">
                                    <CardContent className="p-0">
                                        <div className="relative shadow-inner overflow-hidden group">
                                            <Image
                                                src={course?.image}
                                                alt={course?.title}
                                                className="w-full h-56 transform transition-transform duration-500 group-hover:scale-105 object-cover"
                                                width={400}
                                                height={200} />
                                            {/* <div className="absolute top-4 right-4 bg-[rgb(var(--quaternary-rgb))] text-gray-700 rounded-full py-1 px-4 font-semibold">
                                                {HELPER.formatVND(course?.price)}
                                            </div> */}
                                        </div>
                                        <div className="p-6 space-y-4">
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={course?.instructor.avatar}
                                                    alt={course?.instructor.name}
                                                    className="w-10 h-10 rounded-full border"
                                                    width={40}
                                                    height={40} />
                                                <div className="flex-1">
                                                    <p className="font-medium">{course?.instructor.name}</p>
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 fill-[rgb(var(--secondary-rgb))] text-[rgb(var(--secondary-rgb))]" />
                                                        <span>({course?.instructor.rating})</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="font-bold text-lg">{course?.title}</h3>
                                            <div className="flex items-center justify-between text-sm text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                                    </svg>
                                                    <span>{course?.studentsCount} Students</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                    </svg>
                                                    <span>{course?.lessonsCount} Lessons</span>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[1000px]">
                                <DialogHeader>
                                    <DialogTitle>Chi Tiết Khoá Học</DialogTitle>
                                </DialogHeader>
                                <CourseDetail course={course} />
                                <DialogFooter>
                                    <Button
                                        type="submit"
                                        className="bg-[rgb(var(--secondary-rgb))] hover:bg-[rgb(var(--secondary-rgb))] hover:opacity-80" >
                                        Đăng ký ngay
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section01;