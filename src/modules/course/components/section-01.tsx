'use client'

import { Card, CardContent } from "@/components/ui/card";
import { HELPER } from "@/utils/helper";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

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
        title: "Learn WordPress & Elementor for Beginners",
        price: 8900000,
        instructor: {
            name: "Robert Henry",
            avatar: "https://wpocean.com/html/tf/eduko/assets/images/popular/avater/img-3.jpg",
            rating: 4.5,
        },
        studentsCount: 245,
        lessonsCount: 25,
        image: "https://wpocean.com/html/tf/eduko/assets/images/popular/img-3.jpg",
    },
    {
        id: 2,
        title: "The Complete Guide to Be a Graphics Designer.",
        price: 8900000,
        instructor: {
            name: "Jenny Wilson",
            avatar: "https://wpocean.com/html/tf/eduko/assets/images/popular/avater/img-3.jpg",
            rating: 5.0,
        },
        studentsCount: 365,
        lessonsCount: 35,
        image: "https://wpocean.com/html/tf/eduko/assets/images/popular/img-3.jpg",
    },
    {
        id: 3,
        title: "Learning How To Write As A Professional Author",
        price: 8900000,
        instructor: {
            name: "Jerome Bell",
            avatar: "https://wpocean.com/html/tf/eduko/assets/images/popular/avater/img-3.jpg",
            rating: 4.9,
        },
        studentsCount: 134,
        lessonsCount: 12,
        image: "https://wpocean.com/html/tf/eduko/assets/images/popular/img-3.jpg",
    },
    {
        id: 1,
        title: "Learn WordPress & Elementor for Beginners",
        price: 8900000,
        instructor: {
            name: "Robert Henry",
            avatar: "https://wpocean.com/html/tf/eduko/assets/images/popular/avater/img-3.jpg",
            rating: 4.5,
        },
        studentsCount: 245,
        lessonsCount: 25,
        image: "https://wpocean.com/html/tf/eduko/assets/images/popular/img-3.jpg",
    },
    {
        id: 2,
        title: "The Complete Guide to Be a Graphics Designer.",
        price: 8900000,
        instructor: {
            name: "Jenny Wilson",
            avatar: "https://wpocean.com/html/tf/eduko/assets/images/popular/avater/img-3.jpg",
            rating: 5.0,
        },
        studentsCount: 365,
        lessonsCount: 35,
        image: "https://wpocean.com/html/tf/eduko/assets/images/popular/img-3.jpg",
    },
    {
        id: 3,
        title: "Learning How To Write As A Professional Author",
        price: 8900000,
        instructor: {
            name: "Jerome Bell",
            avatar: "https://wpocean.com/html/tf/eduko/assets/images/popular/avater/img-3.jpg",
            rating: 4.9,
        },
        studentsCount: 134,
        lessonsCount: 12,
        image: "https://wpocean.com/html/tf/eduko/assets/images/popular/img-3.jpg",
    },
    {
        id: 1,
        title: "Learn WordPress & Elementor for Beginners",
        price: 8900000,
        instructor: {
            name: "Robert Henry",
            avatar: "https://wpocean.com/html/tf/eduko/assets/images/popular/avater/img-3.jpg",
            rating: 4.5,
        },
        studentsCount: 245,
        lessonsCount: 25,
        image: "https://wpocean.com/html/tf/eduko/assets/images/popular/img-3.jpg",
    },
    {
        id: 2,
        title: "The Complete Guide to Be a Graphics Designer.",
        price: 8900000,
        instructor: {
            name: "Jenny Wilson",
            avatar: "https://wpocean.com/html/tf/eduko/assets/images/popular/avater/img-3.jpg",
            rating: 5.0,
        },
        studentsCount: 365,
        lessonsCount: 35,
        image: "https://wpocean.com/html/tf/eduko/assets/images/popular/img-3.jpg",
    },
    {
        id: 3,
        title: "Learning How To Write As A Professional Author",
        price: 8900000,
        instructor: {
            name: "Jerome Bell",
            avatar: "https://wpocean.com/html/tf/eduko/assets/images/popular/avater/img-3.jpg",
            rating: 4.9,
        },
        studentsCount: 134,
        lessonsCount: 12,
        image: "https://wpocean.com/html/tf/eduko/assets/images/popular/img-3.jpg",
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
                    <div className="relative inline-block">
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            Danh Sách Các Khoá Học
                        </h2>
                        <div className="absolute top-1/2 right-0 w-32 h-3 bg-[rgb(var(--tertiary-rgb))] opacity-70 -z-10 transform translate-x-6"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 lg:mx-0">
                    {courses?.map((course: Course) => (
                        <Card key={course?.id} className="relative overflow-hidden cursor-pointer group hover:opacity-80">
                            <CardContent className="p-0">
                                <div className="relative shadow-inner overflow-hidden group">
                                    <Image
                                        src={course?.image}
                                        alt={course?.title}
                                        className="w-full h-56 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                                        width={400}
                                        height={200}
                                    />
                                    <div className="absolute top-4 right-4 bg-[rgb(var(--quaternary-rgb))] text-gray-700 rounded-full py-1 px-4 font-semibold">
                                        {HELPER.formatVND(course?.price)}
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={course?.instructor.avatar}
                                            alt={course?.instructor.name}
                                            className="w-10 h-10 rounded-full"
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
                                            <span>{course?.lessonsCount} Lesson</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section01
    ;