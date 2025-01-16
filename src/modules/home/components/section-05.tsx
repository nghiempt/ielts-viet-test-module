'use client'

import { Quote, Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
    id: string;
    name: string;
    role: string;
    rating: number;
    comment: string;
    imageUrl: string;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Nguyễn Thuỳ Trang',
        role: 'THPT An Khánh',
        rating: 5.0,
        comment: "Mình đã tham gia khoá học 1:1 cấp tốc tại IELTS CITY trong khoảng thời gian 7 tuần. Giáo trình học được đội ngũ giáo viên soạn riêng dựa theo năng lực.",
        imageUrl: 'https://res.cloudinary.com/farmcode/image/upload/v1737017655/ielts-viet/tkrtg2nekaldxkosyx5l.png'
    },
    {
        id: '2',
        name: 'Nguyễn Thuỳ Trang',
        role: 'THPT An Khánh',
        rating: 5.0,
        comment: "Mình đã tham gia khoá học 1:1 cấp tốc tại IELTS CITY trong khoảng thời gian 7 tuần. Giáo trình học được đội ngũ giáo viên soạn riêng dựa theo năng lực.",
        imageUrl: 'https://res.cloudinary.com/farmcode/image/upload/v1737017655/ielts-viet/tkrtg2nekaldxkosyx5l.png'
    },
    {
        id: '3',
        name: 'Nguyễn Thuỳ Trang',
        role: 'THPT An Khánh',
        rating: 5.0,
        comment: "Mình đã tham gia khoá học 1:1 cấp tốc tại IELTS CITY trong khoảng thời gian 7 tuần. Giáo trình học được đội ngũ giáo viên soạn riêng dựa theo năng lực.",
        imageUrl: 'https://res.cloudinary.com/farmcode/image/upload/v1737017655/ielts-viet/tkrtg2nekaldxkosyx5l.png'
    },
];

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`w-5 h-5 ${star <= rating ? 'fill-[rgb(var(--secondary-rgb))] text-[rgb(var(--secondary-rgb))]' : 'text-gray-300'
                        }`}
                />
            ))}
            <span className="ml-2 text-gray-600">({rating.toFixed(1)})</span>
        </div>
    );
};

const Section05 = () => {
    return (
        <section className="w-full lg:w-3/4 px-6 lg:px-0 pb-20 pt-12">
            <div className="text-center mb-12">
                <div className="text-center space-y-1">
                    <p className="text-[#eee] text-md lg:text-lg font-semibold mb-3">Thành Tựu Nổi Bật</p>
                    <h2 className="text-4xl mx-2 lg:text-5xl font-bold text-[rgb(var(--quaternary-rgb))]">
                        Học Viên Nói Gì Về IETLS VIET
                    </h2>
                </div>
            </div>
            <div className="relative">
                <div className="w-full flex flex-col lg:flex-row justify-between items-center overflow-hidden gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.id}
                            className={`w-[96%] md:w-1/2 lg:w-[31.5%] lg:flex-shrink-0 transform transition-transform duration-300 ease-in-out`} >
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <Image
                                        src={testimonial.imageUrl}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                        width={1000}
                                        height={1000} />
                                    <div>
                                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <StarRating rating={testimonial.rating} />
                                <p className="mt-4 text-gray-600">{testimonial.comment}</p>
                                <div className="hidden lg:flex absolute top-4 right-4 text-[rgb(var(--secondary-rgb))] text-4xl font-serif opacity-25"><Quote size={40} /></div>
                                <div className="flex lg:hidden absolute top-4 right-4 text-[rgb(var(--secondary-rgb))] text-4xl font-serif opacity-25"><Quote size={20} /></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section05;