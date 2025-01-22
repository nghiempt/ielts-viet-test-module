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
        title: 'Tài liệu luyện thi IELTS dành riêng cho học sinh cấp 2 - Đạt hiệu quả cao',
        date: '16 / 01 / 2025',
        author: 'Thuỳ Trang',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1666739032615-ecbd14dfb543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW5nbGlzaHxlbnwwfHwwfHx8MA%3D%3D',
        link: '#'
    },
    {
        id: '2',
        title: 'Danh sách 19 sách học IELTS dành cho người mới bắt đầu - Lựa chọn hàng đầu',
        date: '16 / 01 / 2025',
        author: 'Kim Hoàng',
        imageUrl: 'https://images.unsplash.com/photo-1543165796-5426273eaab3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW5nbGlzaHxlbnwwfHwwfHx8MA%3D%3D',
        link: '#'
    },
    {
        id: '3',
        title: 'Khám phá 7 trang web học IELTS Online miễn phí tốt nhất năm 2025',
        date: '16 / 01 / 2025',
        author: 'Kim Ngân',
        imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVuZ2xpc2h8ZW58MHx8MHx8fDA%3D',
        link: '#'
    },
    {
        id: '4',
        title: '5 Bí quyết cải thiện kỹ năng Listening IELTS nhanh chóng',
        date: '18 / 01 / 2025',
        author: 'Hoàng An',
        imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVuZ2xpc2h8ZW58MHx8MHx8fDA%3D',
        link: '#'
    },
    {
        id: '5',
        title: '10 Mẹo đạt điểm cao Writing IELTS mà bạn không nên bỏ qua',
        date: '20 / 01 / 2025',
        author: 'Mai Hương',
        imageUrl: 'https://images.unsplash.com/photo-1689784626180-3ae58cba794a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVuZ2xpc2h8ZW58MHx8MHx8fDA%3D',
        link: '#'
    },
    {
        id: '6',
        title: 'Học từ vựng IELTS theo chủ đề hiệu quả trong 30 ngày',
        date: '22 / 01 / 2025',
        author: 'Phương Anh',
        imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZW5nbGlzaHxlbnwwfHwwfHx8MA%3D%3D',
        link: '#'
    },
    {
        id: '7',
        title: 'Review 8 khóa học IELTS trực tuyến phù hợp với người đi làm',
        date: '24 / 01 / 2025',
        author: 'Ngọc Linh',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGVuZ2xpc2h8ZW58MHx8MHx8fDA%3D',
        link: '#'
    },
    {
        id: '8',
        title: 'Tầm quan trọng của kỹ năng Speaking trong kỳ thi IELTS',
        date: '26 / 01 / 2025',
        author: 'Trọng Nghĩa',
        imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZW5nbGlzaHxlbnwwfHwwfHx8MA%3D%3D',
        link: '#'
    },
    {
        id: '9',
        title: 'Lộ trình tự học IELTS từ 0 đến 7.5 cho người bận rộn',
        date: '28 / 01 / 2025',
        author: 'Hồng Phúc',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVuZ2xpc2h8ZW58MHx8MHx8fDA%3D',
        link: '#'
    }
];


const Section01 = () => {
    return (
        <section className="w-full">
            <div className="text-center mb-12">
                <p className="text-[rgb(var(--secondary-rgb))] text-md lg:text-lg font-semibold mb-3">
                    Bài Viết Hấp Dẫn
                </p>
                <div className="relative inline-block">
                    <h2 className="text-4xl lg:text-5xl font-bold">
                        Danh Sách Các Bài Viết
                    </h2>
                    <div className="absolute top-[73%] lg:top-1/2 right-[42%] lg:right-0 w-16 lg:w-32 h-3 bg-[rgb(var(--tertiary-rgb))] opacity-70 -z-10 transform translate-x-6"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-3 lg:mx-0">
                {blogPosts.map((post) => (
                    <article
                        key={post.id}
                        className="relative overflow-hidden group bg-white rounded-lg border hover:shadow-md transition-shadow duration-300">
                        <Link href='#'>
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