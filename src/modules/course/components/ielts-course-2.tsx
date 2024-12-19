'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { DecorBar } from "@/components/using-ui/decor-bar"
import Image from "next/image"
import { DATA } from "@/utils/data"

interface Course2 {
  id: number,
  title: string,
  duration: string,
  entryPoint: string,
  outputPoint: string,
  price: number,
  commitment: string[],
  image: string,
}

const course2 = DATA.COURSE2SKILLS as Course2[]

export default function IeltsCourse2() {

  const formatPrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    }).format(price);

    return formattedPrice.replace('₫', 'VND');
  };

  return (
    <div className="w-full flex flex-col gap-6 bg-orange-50 py-14 justify-center items-center">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Khoá IELTS 2 kỹ năng</h2>
        <DecorBar />
        <p className="text-gray-500  mb-2 text-center w-[900px] justify-self-center">
          Hệ thống các khóa học IELTS được phân theo cấp độ từ thấp đến cao giúp học viên cải thiện cả 4 kỹ năng Nghe, Nói, Đọc, Viết theo chuẩn format của bài thi IELTS thông qua lượng kiến thức toàn diện.
        </p>
      </div>
      <div className="items-center flex flex-col">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {course2?.map((c2, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                <div className="p-1">
                  <Card>
                    <CardContent className="px-0 flex aspect-square flex-col items-center rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                      <div className="text-center group overflow-hidden">
                        <div className="overflow-hidden cursor-pointer">
                          <Image
                            className="w-48 h-48 mx-auto my-10 rounded-t-xl transform transition-transform duration-500 group-hover:scale-105"
                            src={c2.image}
                            alt={""}
                            width={1000}
                            height={1000} />
                        </div>
                        <div className="px-8">
                          <div className="font-bold py-4 border-b-2 hover:text-[rgb(var(--secondary-rgb))] cursor-pointer">{c2.title}</div>
                          <div className="flex justify-center items-stretch">
                            <div className=" text-sm mt-2 px-2 border-r-2 pr-5 ">
                              <div>{c2.duration}</div>
                              <div>Đầu vào: {c2.entryPoint}</div>
                            </div>
                            <div className=" text-sm mt-2 px-2 pl-5">
                              <div>{formatPrice(c2.price)}</div>
                              <div>Đầu ra: {c2.outputPoint}</div>
                            </div>
                          </div>
                          <button className="mt-5 px-4 py-2 bg-[rgb(var(--secondary-rgb))] text-white font-semibold rounded-full">Tìm hiểu thêm</button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}