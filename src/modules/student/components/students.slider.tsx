"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../../styles/button.slider.css'
import { DATA } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";

interface Students {
  id: number,
  image: string,
  title: string,
  URL: string
}

const students = DATA.STUDENTS_FEELING as Students[];

const StudentSlider = () => {

  const chunkData = (data: Students[], size: number): Students[][] => {
    const chunks: Students[][] = [];
    for (let i = 0; i < data.length; i += size) {
      chunks.push(data.slice(i, i + size));
    }
    return chunks;
  };

  const slides = chunkData(students, 1);

  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const handleSwiper = (swiper: any) => {
    setSwiperInstance(swiper);
  };

  return (
    <section className="grid grid-cols-12 items-center w-11/12 mb-20">
      <div className="flex justify-center items-center col-span-1 mx-auto mb-20">
        <button onClick={() => swiperInstance?.slidePrev()}>
          <svg className="w-10 h-10 bg-[rgb(var(--secondary-rgb))] p-3 rounded-full opacity-65 hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="white">
            <path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z" />
          </svg>
        </button>
      </div>
      <div className="col-span-10 h-full mt-2">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          pagination={{ type: "bullets", clickable: true }}
          autoplay={{ delay: 5000 }}
          speed={800}
          loop={true}
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={1}
          onSwiper={handleSwiper}
          className="w-full h-[330px]"
        >
          {slides?.map((slide, slideIndex) => (
            <SwiperSlide
              key={`slides-${slideIndex}`}
              className="flex justify-center"
            >
              <div className="flex flex-row justify-around gap-6 py-10">
                {slide?.map((stu) => (
                  <div
                    key={stu?.id}
                    className="bg-white w-80"
                  >
                    <div className="relative">
                      <Image
                        src={stu?.image}
                        alt={stu?.title}
                        className="w-full object-cover rounded-xl"
                        width={1000}
                        height={1000}
                      />
                      <a href={stu.URL} target="_blank">
                        <div className="rounded-xl absolute inset-0 flex items-center justify-center bg-gray-600 bg-opacity-25 cursor-pointer duration-500 hover:bg-opacity-75">
                          <div className="absolute rounded-full shadow-md z-10">
                            <svg className="w-10 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white">
                              <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href={stu?.URL} target="_blank">
                        <h3 className="text-lg font-semibold text-gray-800 text-center cursor-pointer hover:text-[rgb(var(--secondary-rgb))]">
                          {stu?.title}
                        </h3>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center items-center col-span-1 mx-auto mb-20 ">
        <button onClick={() => swiperInstance?.slideNext()}>
          <svg className="w-10 h-10 bg-[rgb(var(--secondary-rgb))] p-3 rounded-full opacity-65 hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="white">
            <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default StudentSlider;
