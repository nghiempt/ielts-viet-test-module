"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../../styles/button.slider.css'
import { DATA } from "@/utils/data";
import Image from "next/image";
import pb from '../../../../public/images/play.png'

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

  return (
    <section className="w-4/5 mb-20">
      <div className="h-full mt-2">
        <Swiper
          navigation
          pagination={{
            type: "bullets", clickable: true,
          }}
          autoplay={{ delay: 5000 }}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={1}
          className="w-full h-[340px]"
        >
          {slides.map((slide, slideIndex) => (
            <SwiperSlide
              key={`slide-${slideIndex}`}
              className="flex justify-center"
            >
              <div className="flex flex-row justify-around gap-6 py-10">
                {slide.map((stu) => (
                  <div
                    key={stu.id}
                    className="bg-white w-80 overflow-hidden "
                  >
                    <div className="relative">
                      <Image
                        src={stu.image}
                        alt={stu.title}
                        className="w-full object-cover rounded-xl"
                        width={1000}
                        height={1000}
                      />
                      <a href={stu.URL} target="_blank">
                        <div className="rounded-xl absolute inset-0 flex items-center justify-center bg-gray-600 bg-opacity-25 cursor-pointer duration-500 hover:bg-opacity-75">
                          <div className="absoluterounded-full p-2 shadow-md z-10">
                            <Image src={pb} alt="" width={20} height={20} className="w-10 bg-white rounded-full" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="p-4">
                      <a href={stu.URL} target="_blank">
                        <h3 className="text-lg font-semibold text-gray-800 text-center cursor-pointer hover:text-[rgb(var(--secondary-rgb))]">
                          {stu.title}
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
    </section>
  );
};

export default StudentSlider;
