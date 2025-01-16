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
        title: 'Tổng hợp tài liệu luyện thi IELTS cho học sinh cấp 2 hiệu quả',
        date: '16 / 01 / 2025',
        author: 'Thuỳ Trang',
        imageUrl: 'https://ieltscity.vn/wp-content/uploads/2024/07/tai-lieu-luyen-thi-ielts-cho-hoc-sinh-cap-2-1024x576.jpg',
        link: '#'
    },
    {
        id: '2',
        title: 'Top 19 sách học IELTS cho người mất gốc hay nhất',
        date: '16 / 01 / 2025',
        author: 'Kim Hoàng',
        imageUrl: 'https://ieltscity.vn/wp-content/uploads/2023/03/sach-hoc-ielts-cho-nguoi-mat-goc-1024x575.jpg',
        link: '#'
    },
    {
        id: '3',
        title: '7 Trang web học IELTS Online miễn phí chất lượng 2025',
        date: '16 / 01 / 2025',
        author: 'Kim Ngân',
        imageUrl: 'https://ieltscity.vn/wp-content/uploads/2023/05/hoc-ielts-online-mien-phi-1024x575.jpg',
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