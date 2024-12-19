"use client";

import Image from "next/image"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../../styles/button.slider.css'
import { DATA } from "@/utils/data";
import '../../../styles/button.slider.css'
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

  const slides = chunkData(learners, 1);

  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const handleSwiper = (swiper: any) => {
    console.log("Swiper instance: ", swiper);
    setSwiperInstance(swiper);
  };

  return (
    <section className="grid grid-cols-12 items-center w-full mb-2">
      <div className="flex justify-center items-center col-span-1 mx-auto">
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="bg-[rgb(var(--secondary-rgb))] rounded-full p-2 text-white">
          <ArrowLeft />
        </button>
      </div>
      <div className="col-span-10 h-full mt-2">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          pagination={{ type: "bullets", clickable: true }}
          autoplay={{ delay: 5000 }}
          speed={800}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={1}
          onSwiper={handleSwiper}
          className="w-full"
        >
          {slides?.map((slide, slideIndex) => (
            <SwiperSlide
              key={`slide-${slideIndex}`}
              className="flex justify-center"
            >
              <div className="flex flex-row justify-around gap-6 py-10">
                {slide?.map((learn, index) => (
                  <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 relative" key={index}>
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
                    <p className="text-gray-600 text-sm line-clamp-4 mb-10">
                      {learn?.cmt}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-1 text-gray-500">
                        <p className="text-xs">{learn?.cmtSrc}</p>
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
      <div className="flex justify-center items-center col-span-1 mx-auto">
        <button onClick={() => swiperInstance?.slideNext()} className="bg-[rgb(var(--secondary-rgb))] rounded-full p-2 text-white">
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default LearnerSlider;

