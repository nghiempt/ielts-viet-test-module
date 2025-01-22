'use client'

import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import '../../../styles/contact.css'

interface Testimonial {
    id: number;
    name: string;
    role: string;
    rating: number;
    comment: string;
    imageUrl: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Hoài Thương',
        role: 'THPT Long An',
        rating: 5.0,
        comment: "Mình đã tham gia khoá học 1:1 cấp tốc tại Trung Tâm IELTS VIỆT trong 7 tuần. Giáo trình được thiết kế riêng theo năng lực cá nhân, giúp mình tiến bộ rõ rệt trong thời gian ngắn.",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtV9gfYw0MLRJDCzusdtjAn3jJqZoMgAMjU8BZj7cD5XLm8Zj-hFNOem5kPPj5IiUIJp8&usqp=CAU'
    },
    {
        id: 2,
        name: 'Quốc Khánh',
        role: 'Đại Học Y Dược Cần Thơ',
        rating: 5.0,
        comment: "Trải nghiệm học tập tại Trung Tâm IELTS VIỆT thực sự rất hiệu quả. Khoá học 1:1 cấp tốc trong 7 tuần đã giúp mình tự tin hơn rất nhiều với lộ trình học phù hợp và sự hỗ trợ tận tâm từ giáo viên.",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Ybci_L25OcWJhFyrcmoR4q_vsqoAtT_Qug&s'
    },
    {
        id: 3,
        name: 'Nguyễn Hiếu',
        role: 'Đại Học FPT Cần Thơ',
        rating: 5.0,
        comment: "Mình cảm thấy rất hài lòng khi học tại Trung Tâm IELTS VIỆT. Khoá học 1:1 cấp tốc không chỉ giúp mình đạt được mục tiêu mà còn xây dựng sự tự tin khi sử dụng tiếng Anh.",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XD7_BX8gEe9eGvr0FktdJ5dYmgxtBDXE9WQN7cwOTea2FNJ-5ls3ckVvZKg4ApJTF3o&usqp=CAU'
    },
    {
        id: 4,
        name: 'Nguyễn Hiếu',
        role: 'Đại Học FPT Cần Thơ',
        rating: 5.0,
        comment: "Mình cảm thấy rất hài lòng khi học tại Trung Tâm IELTS VIỆT. Khoá học 1:1 cấp tốc không chỉ giúp mình đạt được mục tiêu mà còn xây dựng sự tự tin khi sử dụng tiếng Anh.",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XD7_BX8gEe9eGvr0FktdJ5dYmgxtBDXE9WQN7cwOTea2FNJ-5ls3ckVvZKg4ApJTF3o&usqp=CAU'
    }
];

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`w-5 h-5 ${star <= rating ? 'fill-[rgb(var(--secondary-rgb))] text-[rgb(var(--secondary-rgb))]' : 'text-gray-300'
                        }`} />
            ))}
            <span className="ml-2 text-gray-600">({rating.toFixed(1)})</span>
        </div>
    );
};

const Section05 = () => {
    return (
        <section className="w-screen px-6 lg:px-0 pb-20 pt-12">
            <div className="text-center mb-12">
                <div className="text-center space-y-1">
                    <p className="text-[#eee] text-md lg:text-lg font-semibold mb-3">Thành Tựu Nổi Bật</p>
                    <h2 className="text-4xl mx-2 lg:text-5xl font-bold text-[rgb(var(--quaternary-rgb))]">
                        Học Viên Nói Gì Về IETLS VIET
                    </h2>
                </div>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                    scale: 0.85,
                }}
                spaceBetween={30}
                pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet', bulletActiveClass: 'swiper-pagination-bullet-active bg-white' }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="w-full lg:w-[74%] h-96"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <div className={`w-full md:w-1/2 lg:w-[100%] flex flex-row justify-around items-center transform transition-transform duration-300 ease-in-out`} >
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <div key={testimonial.id} className="flex items-center gap-4 mb-4">
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Section05;