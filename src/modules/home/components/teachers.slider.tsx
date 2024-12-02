"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../../styles/button.slider.css'
import { DATA } from "@/utils/data";
import Image from "next/image";

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

  const slides = chunkData(teachers, 3);

  return (
    <section className="w-4/5">
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
          {slides?.map((slide, index) => (
            <SwiperSlide
              key={`slide-${index}`}
              className="flex justify-center"
            >
              <div className="flex flex-row justify-around gap-6 px-14 py-10">
                {slide?.map((teach) => (
                  <div
                    key={teach?.id}
                    className="bg-white rounded-lg shadow-lg p-6 w-80"
                  >
                    <Image
                      src={teach?.img}
                      alt={teach?.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                      width={128}
                      height={128}
                    />
                    <h3 className="text-xl font-bold text-gray-800 text-center">
                      {teach?.name}
                    </h3>
                    <ul className="mt-4 text-gray-700 space-y-1 text-center text-base">
                      {teach?.qualifications.map((qual, index) => (
                        <li key={index}>✔️ {qual}</li>
                      ))}
                    </ul>
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

export default TeacherSlider;
