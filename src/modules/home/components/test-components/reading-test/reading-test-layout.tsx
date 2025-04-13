"use client";
import React from "react";
import { Swiper as SwiperCore } from "swiper/types";
import ReadingTestCard from "./reading-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "@/styles/contact.css";

const ReadingTestLayout = () => {
  const readingTest = [
    {
      bookNumber: 13,
      testCount: 8,
      attemptsCount: 56,
      bgColor: "bg-white",
      coverImage: "/images/cambridge-ielts-13.png",
    },
    {
      bookNumber: 17,
      testCount: 8,
      attemptsCount: 136,
      bgColor: "bg-white",
      coverImage: "/images/cambridge-ielts-17.png",
    },
    {
      bookNumber: 16,
      testCount: 8,
      attemptsCount: 212,
      bgColor: "bg-white",
      coverImage: "/images/cambridge-ielts-16.png",
    },
    {
      bookNumber: 15,
      testCount: 8,
      attemptsCount: 119,
      bgColor: "bg-white",
      coverImage: "/images/cambridge-ielts-15.png",
    },
    {
      bookNumber: 15,
      testCount: 8,
      attemptsCount: 119,
      bgColor: "bg-white",
      coverImage: "/images/cambridge-ielts-15.png",
    },
    {
      bookNumber: 15,
      testCount: 8,
      attemptsCount: 119,
      bgColor: "bg-white",
      coverImage: "/images/cambridge-ielts-15.png",
    },
    {
      bookNumber: 15,
      testCount: 8,
      attemptsCount: 119,
      bgColor: "bg-white",
      coverImage: "/images/cambridge-ielts-15.png",
    },
    {
      bookNumber: 15,
      testCount: 8,
      attemptsCount: 119,
      bgColor: "bg-white",
      coverImage: "/images/cambridge-ielts-15.png",
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
      <main>
        <h1 className="text-2xl lg:text-3xl font-bold text-black mb-8">
          Reading Test
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
                slidesPerView: 4,
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
            className="w-80 sm:w-96 lg:w-[100%] h-[400px] lg:h-[380px]"
          >
            {readingTest.map((book, index) => (
              <SwiperSlide key={index} className="">
                <ReadingTestCard
                  key={book.bookNumber}
                  bookNumber={book.bookNumber}
                  testCount={book.testCount}
                  attemptsCount={book.attemptsCount}
                  bgColor={book.bgColor}
                  coverImage={book.coverImage}
                />
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
      </main>
    </div>
  );
};

export default ReadingTestLayout;
