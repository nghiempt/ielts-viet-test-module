"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../../styles/button.slider.css'
import { DATA } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, MoveLeft } from "lucide-react";

type Teacher = {
  id: number;
  name: string;
  img: string;
  qualifications: string[];
};

const teachers = DATA.TEACHERS as Teacher[];

const TeacherSlider = () => {

  const chunkData = (data: Teacher[], size: number): Teacher[][] => {
    const chunks: Teacher[][] = [];
    for (let i = 0; i < data.length; i += size) {
      chunks.push(data.slice(i, i + size));
    }
    return chunks;
  };

  const slides = chunkData(teachers, 1);

  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const handleSwiper = (swiper: any) => {
    console.log("Swiper instance: ", swiper);
    setSwiperInstance(swiper);
  };

  return (
    <section className="grid grid-cols-12 w-4/5">
      <div className="flex justify-center items-center col-span-1 mx-auto">
        <button onClick={() => swiperInstance?.slidePrev()} className="bg-[rgb(var(--secondary-rgb))] rounded-full p-2 text-white">
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
          spaceBetween={0}
          slidesPerView={3}
          slidesPerGroup={1}
          onSwiper={handleSwiper}
          className="w-full"
        >
          {slides?.map((slide, index) => (
            <SwiperSlide
              key={`slide-${index}`}
              className="flex justify-center"
            >
              <div className="flex flex-row justify-around gap-6 px-3 py-10">
                {slide?.map((teach) => (
                  <div
                    key={teach?.id}
                  >
                    <div className="bg-white rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-2 w-60 mb-5">
                      <Image
                        src={teach?.img}
                        alt={teach?.name}
                        className="w-full h-full rounded-xl mx-auto object-contain"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 text-center">
                      {teach?.name}
                    </h3>
                    {/* <ul className="mt-4 text-gray-700 space-y-1 text-center text-base">
                      {teach?.qualifications.map((qual, index) => (
                        <li key={index}>✔️ {qual}</li>
                      ))}
                    </ul> */}
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

export default TeacherSlider;
