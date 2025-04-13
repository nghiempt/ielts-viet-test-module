// pages/index.tsx
import React from "react";
import TestBookCard from "./writing-card";
import { Swiper as SwiperCore } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "@/styles/contact.css";

interface WritingTest {
  id: number;
  title: string;
  testsCount: number;
  attempts: number;
  coverColor: string;
  coverImage: string;
}

const WritingTestLayout = () => {
  const testBooks: WritingTest[] = [
    {
      id: 1,
      title: "Practice Test Plus 1",
      testsCount: 10,
      attempts: 25000,
      coverColor: "bg-white",
      coverImage: "/images/ielts-book-1.png",
    },
    {
      id: 2,
      title: "Practice Test Plus 2",
      testsCount: 11,
      attempts: 9000,
      coverColor: "bg-white",
      coverImage: "/images/ielts-book-2.png",
    },
    {
      id: 3,
      title: "Practice Test Plus 3",
      testsCount: 14,
      attempts: 11000,
      coverColor: "bg-white",
      coverImage: "/images/ielts-book-3.png",
    },
    {
      id: 4,
      title: "Practice Test Plus 4",
      testsCount: 14,
      attempts: 11000,
      coverColor: "bg-white",
      coverImage: "/images/ielts-book-3.png",
    },
  ];

  let swiperInstance: SwiperCore | null = null;

  const handlePrev = () => {
    swiperInstance?.slidePrev(500);
  };

  const handleNext = () => {
    swiperInstance?.slideNext(500);
  };

  return (
    <div className="py-0">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8 text-black">
        Writing Test
      </h1>
      <div className="relative">
        <Swiper
          onSwiper={(swiper) => (swiperInstance = swiper)}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active bg-white",
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="w-80 sm:w-96 lg:w-[100%] h-[400px] sm:h-[430px] lg:h-[420px]"
        >
          {testBooks.map((book, index) => (
            <SwiperSlide key={index} className="">
              <TestBookCard key={book.id} book={book} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={handlePrev}
          className="hidden lg:flex absolute left-0 top-1/3 -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full w-12 h-12 items-center justify-center z-10 disabled:opacity-50"
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="hidden lg:flex absolute right-0 top-1/3 -translate-y-1/2 translate-x-1/2 bg-white shadow-lg rounded-full w-12 h-12 items-center justify-center z-10 disabled:opacity-50"
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WritingTestLayout;
