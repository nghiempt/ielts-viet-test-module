'use client'

import Image from "next/image";

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
    }
];

const Section07 = () => {
    return (
        <section className="w-full lg:w-3/4 px-6 lg:px-0 pb-20 pt-12">
            <div className="text-center mb-12">
                <div className="text-center space-y-1">
                    <p className="text-[#eee] text-md lg:text-lg font-semibold mb-3">Tài Liệu Học Tập</p>
                    <h2 className="text-4xl mx-2 lg:text-5xl font-bold text-[rgb(var(--quaternary-rgb))]">
                        Các Tips Học IELT Hiệu Quả
                    </h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <article
                        key={post.id}
                        className="relative overflow-hidden group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
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
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Section07;