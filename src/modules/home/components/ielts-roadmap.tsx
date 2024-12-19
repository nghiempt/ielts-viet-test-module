'use client'

import Image from "next/image";
import { IMAGES } from "@/utils/images"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../../styles/button.slider.css'
import { DATA } from "@/utils/data";
import { useState } from "react";
import { ArrowLeft, ArrowRight, MoveLeft } from "lucide-react";

interface IeltsRM {
  id: number,
  cate: number,
  title: string,
  price: number,
  duration: string,
  target: string[],
  image: string,
}

const ieltsroadmap = DATA.IELTSROADMAP as IeltsRM[];

const IeltsRoadMap = () => {
  const [selectedCate, setSelectedCate] = useState<number>(0);

  const filteredData = selectedCate === 0
    ? ieltsroadmap
    : ieltsroadmap.filter(item => item.cate === selectedCate);

  const chunkData = (data: IeltsRM[], size: number): IeltsRM[][] => {
    const chunks: IeltsRM[][] = [];
    for (let i = 0; i < data.length; i += size) {
      chunks.push(data.slice(i, i + size));
    }
    return chunks;
  };

  const slides = chunkData(filteredData, 1);

  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const handleSwiper = (swiper: any) => {
    setSwiperInstance(swiper);
  };

  const formatPrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    }).format(price);

    return formattedPrice.replace('₫', 'VND');
  };

  return (
    <div className="w-full mb-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Lộ trình học IELTS</h2>
        <p className="text-gray-500 mt-6 mb-2">
          Được giám khảo chấm thi IELTS xây dựng, đảm bảo tính chính xác, trọng tâm và bám sát với kỳ thi IELTS thực tế
        </p>
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        {[
          { label: "Tất cả", cate: 0 },
          { label: "Mục tiêu IELTS 4.5+", cate: 1 },
          { label: "Mục tiêu IELTS 5.0+", cate: 2 },
          { label: "Mục tiêu IELTS 5.5+", cate: 3 },
          { label: "Mục tiêu IELTS 6.5+", cate: 4 },
          { label: "Mục tiêu IELTS 7.5+", cate: 5 }
        ].map(({ label, cate }) => (
          <button
            key={cate}
            onClick={() => setSelectedCate(cate)}
            className={`px-4 py-2 hover:bg-[rgb(var(--secondary-rgb))] hover:text-white ${selectedCate === cate ? 'bg-[rgb(var(--secondary-rgb))] text-white' : 'bg-gray-100 text-gray-800'} font-semibold rounded-full`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-8">
        <div className="w-full justify-center items-center gap-6">

          {filteredData.length <= 2 ? (
            <div className="grid grid-cols-2 gap-6 w-4/5 mx-auto mt-10">
              {filteredData.map((irm) => (
                <div key={irm.id} className="w-full bg-white rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-2 relative flex justify-center items-center gap-6">
                  <div className="flex justify-center items-center">
                    <Image
                      src={irm.image}
                      alt={irm.title}
                      layout="responsive"
                      width={200}
                      height={360}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{irm.title}</h3>
                    <div className="flex justify-start items-center gap-2 my-4">
                      <p className="text-[rgb(var(--secondary-rgb))] font-semibold text-lg">{formatPrice(irm.price)}</p>
                      <p className="text-gray-500 text-sm">{irm.duration}</p>
                    </div>
                    <ul className="mt-2 text-gray-700 space-y-1">
                      {irm.target.map((tg, index) => (
                        <li key={index}>✔️ {tg}</li>
                      ))}
                    </ul>
                    <button className="mt-8 px-4 py-2 border border-[rgb(var(--secondary-rgb))] text-[rgb(var(--secondary-rgb))] font-semibold rounded-full">Tìm hiểu thêm</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <section className="grid grid-cols-12 items-center w-full mb-0">
              <div className="flex justify-center items-center col-span-1 mx-auto mb-10">
                <button onClick={() => swiperInstance?.slidePrev()} className="bg-[rgb(var(--secondary-rgb))] rounded-full p-2 text-white">
                  <ArrowLeft />
                </button>
              </div>
              <div className="col-span-10 h-full mt-2">
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  // navigation
                  pagination={{ type: "bullets", clickable: true }}
                  autoplay={{ delay: 5000 }}
                  speed={800}
                  loop={true}
                  spaceBetween={20}
                  slidesPerView={2}
                  slidesPerGroup={1}
                  onSwiper={handleSwiper}
                  className="w-full h-full"
                >
                  {slides?.map((slide, slideIndex) => (
                    <SwiperSlide
                      key={`slides-${slideIndex}`}
                      className="flex justify-center"
                    >
                      <div className="flex flex-row justify-around gap-6 py-10 px-2">
                        {slide?.map((irm) => (
                          <div key={irm.id} className="w-full bg-white rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-2 relative flex justify-center items-center gap-6">
                            <div className="flex justify-center items-center px-24 min-h-[360px]">
                              <Image
                                src={irm.image}
                                alt="IELTS Junior"
                                className="rounded-xl"
                                width={100}
                                height={0}
                              />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">{irm.title}</h3>
                              <div className="flex justify-start items-center gap-2 my-4">
                                <p className="text-[rgb(var(--secondary-rgb))] font-semibold text-lg">{formatPrice(irm.price)}</p>
                                <p className="text-gray-500 text-sm">{irm.duration}</p>
                              </div>
                              <ul className="mt-2 text-gray-700 space-y-1">
                                {irm.target.map((tg, index) => (
                                  <li key={index}>✔️ {tg}</li>
                                ))}
                              </ul>
                              <button className="mt-8 px-4 py-2 border border-[rgb(var(--secondary-rgb))] text-[rgb(var(--secondary-rgb))] font-semibold rounded-full">Tìm hiểu thêm</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex justify-center items-center col-span-1 mx-auto mb-10">
                <button onClick={() => swiperInstance?.slideNext()} className="bg-[rgb(var(--secondary-rgb))] rounded-full p-2 text-white">
                  <ArrowRight />
                </button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default IeltsRoadMap;
