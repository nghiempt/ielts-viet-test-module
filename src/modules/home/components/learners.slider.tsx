"use client";

import Image from "next/image"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { DATA } from "@/utils/data";
import '../../../styles/button.slider.css'

type Learner = {
  id: number,
  name: string,
  cmt: string,
  cmtSrc: string
}

const learners = DATA.LEARNERS as Learner[];

const LearnerSlider = () => {

  const chunkData = (data: Learner[], size: number): Learner[][] => {
    const chunks: Learner[][] = [];
    for (let i = 0; i < data.length; i += size) {
      chunks.push(data.slice(i, i + size));
    }
    return chunks;
  };

  const slides = chunkData(learners, 3);

  return (
    <section className="w-full">
      <div className="h-full mt-2">
        <Swiper
          navigation
          pagination={{ type: "bullets", clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          className="w-full"
        >
          {slides.map((slide, slideIndex) => (
            <SwiperSlide
              key={`slide-${slideIndex}`}
              className="flex justify-center"
            >
              <div className="flex flex-row justify-around gap-6 px-14 py-10">
                {slide.map((learn) => (
                  <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 relative" key={learn.id}>
                    <div className="flex items-center space-x-2 mb-4">
                      <Image 
                      src="https://cdn-icons-png.flaticon.com/128/149/149071.png" 
                      alt="Avatar" 
                      className="w-10 h-10 rounded-full" 
                      width={40}
                      height={40}
                      />
                      <h3 className="font-bold text-gray-800">{learn.name}</h3>
                      <span className="text-[rgb(var(--secondary-rgb))] text-2xl font-bold absolute top-4 right-4">“</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {learn.cmt}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-1 text-gray-500">
                        <p className="text-xs">{learn.cmtSrc}</p>
                      </div>
                      <a href="#" className="text-blue-500 text-sm font-semibold">Xem chi tiết</a>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LearnerSlider;

