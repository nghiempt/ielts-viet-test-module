'use client'

import Image from "next/image";
import Link from "next/link";

interface BlogPost {
    id: string;
    title: string;
    date: string;
    author: string;
    imageUrl: string;
    link: string;
}

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Tổng hợp tài liệu luyện thi IELTS cho học sinh cấp 2 hiệu quả',
        date: '16 / 01 / 2025',
        author: 'Thuỳ Trang',
        imageUrl: 'https://res.cloudinary.com/farmcode/image/upload/v1737442529/ielts-viet/ypjyepv8qjue5renn4dz.png',
        link: '#'
    },
    {
        id: '2',
        title: 'Top 19 sách học IELTS cho người mất gốc hay nhất',
        date: '16 / 01 / 2025',
        author: 'Kim Hoàng',
        imageUrl: 'https://res.cloudinary.com/farmcode/image/upload/v1737442536/ielts-viet/oqof1iwynzxywfbs0tdz.png',
        link: '#'
    },
    {
        id: '3',
        title: '7 Trang web học IELTS Online miễn phí chất lượng 2025',
        date: '16 / 01 / 2025',
        author: 'Kim Ngân',
        imageUrl: 'https://res.cloudinary.com/farmcode/image/upload/v1737442538/ielts-viet/vech6qo8wljhccmcwrsh.png',
        link: '#'
    },
    {
        id: '1',
        title: 'Tổng hợp tài liệu luyện thi IELTS cho học sinh cấp 2 hiệu quả',
        date: '16 / 01 / 2025',
        author: 'Thuỳ Trang',
        imageUrl: 'https://res.cloudinary.com/farmcode/image/upload/v1737442529/ielts-viet/ypjyepv8qjue5renn4dz.png',
        link: '#'
    },
    {
        id: '2',
        title: 'Top 19 sách học IELTS cho người mất gốc hay nhất',
        date: '16 / 01 / 2025',
        author: 'Kim Hoàng',
        imageUrl: 'https://res.cloudinary.com/farmcode/image/upload/v1737442536/ielts-viet/oqof1iwynzxywfbs0tdz.png',
        link: '#'
    },
    {
        id: '3',
        title: '7 Trang web học IELTS Online miễn phí chất lượng 2025',
        date: '16 / 01 / 2025',
        author: 'Kim Ngân',
        imageUrl: 'https://res.cloudinary.com/farmcode/image/upload/v1737442538/ielts-viet/vech6qo8wljhccmcwrsh.png',
        link: '#'
    }
];

const Section01 = () => {
    return (
        <section className="w-full px-2.5">
            <div className="text-center mb-12">
                <p className="text-[rgb(var(--secondary-rgb))] text-md lg:text-lg font-semibold mb-3">
                    Đăng ký để nhận ưu đãi
                </p>
                <div className="relative inline-block">
                    <h2 className="text-4xl lg:text-5xl font-bold">
                        Danh Sách Các Khoá Học
                    </h2>
                    <div className="absolute top-[73%] lg:top-1/2 right-[42%] lg:right-0 w-16 lg:w-32 h-3 bg-[rgb(var(--tertiary-rgb))] opacity-70 -z-10 transform translate-x-6"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-3 lg:mx-0">
                {blogPosts.map((post) => (
                    <article
                        key={post.id}
                        className="relative overflow-hidden group bg-white rounded-lg border hover:shadow-md transition-shadow duration-300">
                        <Link href='/tips/1'>
                            <div className="relative overflow-hidden group aspect-[4/3]">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full transform transition-transform duration-500 group-hover:scale-105 object-cover"
                                    width={1000}
                                    height={1000} />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                    <time>{post.date}</time>
                                    <span className="text-gray-400">•</span>
                                    <span>{post.author}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 line-clamp-2">
                                    {post.title}
                                </h3>
                                <div
                                    className="inline-block text-[rgb(var(--secondary-rgb))] font-medium hover:opacity-60 transition-colors duration-300 underline-offset-2 cursor-pointer">
                                    Xem chi tiết
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Section01;