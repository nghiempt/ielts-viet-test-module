"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Header } from "@/components/using-ui/header"
import { Footer } from "@/components/using-ui/footer"

import { Breadcrumbformat } from "@/components/using-ui/breadcrumb-format"
import { data } from "./data"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Decorbar } from "@/components/using-ui/decor-bar"
export default function CoursePage() {
  const [currentPath, setCurrentPath] = useState('');
  useEffect(() => {
    // This code runs only on the client-side
    setCurrentPath(window.location.pathname); // Get the current path
  }, []);
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <div className="w-3/4 pb-10 pt-4"><Breadcrumbformat currentPath={currentPath} /></div>
      <div className="w-3/4 flex pb-10">
        <div className="w-1/2 flex flex-col justify-start items-start gap-8 ">
          <h2 className="text-4xl font-bold text-gray-800">
            CHƯƠNG TRÌNH IELTS
          </h2>
          <ul className="text-gray-700">
            <li>✔️ Phương pháp độc quyền, tiết kiệm 40% thời gian</li>
            <li>✔️ 80% giảng viên là cựu giám khảo IELTS</li>
            <li>✔️ Hệ thống AI độc quyền 4 kỹ năng</li>
            <li>✔️ Hỗ trợ toàn diện từ giáo viên bản ngữ</li>
            <li>✔️ Cam kết đầu ra – 15 năm uy tín</li>
          </ul>
        </div>
        <div className="w-1/2 flex justify-end items-start relative ">
          <img src="https://ktdcgroup.vn/wp-content/uploads/2024/07/Lo-trinh-560x4101-3.png" alt="alt" className="w-7/8 rounded-lg absolute" />
        </div>
      </div>

      <div className="w-full bg-orange-100 py-8 my-10 overflow-hidden">
        <div className="flex justify-center items-center gap-4 animate-marquee whitespace-nowrap">
          {data.map((item, index) => (
            <div key={`item-${index}`} className="bg-white px-10 py-2 rounded-lg shadow-md text-center">
              <h3 className="text-orange-500 font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mb-10 flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Khoá IELTS 4 kỹ năng</h2>
          <p className="text-gray-500 mt-6 mb-2 text-left w-[900px] justify-self-center">
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
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square flex-col items-center rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                      <div className="text-center">
                        <img src="https://ktdcgroup.vn/wp-content/uploads/2020/07/IELTS-Level-3-460x335.jpg" />
                        <div className="px-8 ">
                          <div className="font-bold py-4 border-b-2 ">Khóa học IELTS 1</div>

                          <div className="flex justify-center items-stretch">
                            <div className=" text-sm mt-2 px-2 border-r-2 pr-5 ">
                              <div>36 giờ (8 tuần)</div>
                              <div>Đầu vào: 3.5-4.0</div>
                            </div>
                            <div className=" text-sm mt-2 px-2 pl-5">
                              <div>9.448.000VNĐ</div>
                              <div>Đầu ra: 4.5+</div>
                            </div>
                          </div>

                          <div className="text-sm flex flex-col items-center py-2">
                            <div className="text-orange-400 font-medium flex justify-self-center">★ Cam kết đầu ra</div>
                            <div className="flex justify-self-center"><Check className="text-green-500" />Học hiệu quả, nhanh hơn 40%</div>
                            <div className="flex justify-self-center "><img src="https://cdn-icons-png.flaticon.com/128/555/555417.png" className="w-4 mr-2" /> Giảng viên Bản Ngữ</div>
                            <div className="flex justify-self-center"> <img src="https://cdn-icons-png.flaticon.com/128/555/555515.png" className="w-4 mr-2" />Đội ngũ hỗ trợ IELTS người Việt</div>
                          </div>
                          <button className="mt-5 px-4 py-2 bg-orange-500 text-white font-semibold rounded-full">Tìm hiểu thêm</button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square flex-col items-center rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                      <div className="text-center">
                        <img src="https://ktdcgroup.vn/wp-content/uploads/2020/07/IELTS-Level-3-460x335.jpg" />
                        <div className="px-8 ">
                          <div className="font-bold py-4 border-b-2 ">Khóa học IELTS 1</div>

                          <div className="flex justify-center items-stretch">
                            <div className=" text-sm mt-2 px-2 border-r-2 pr-5 ">
                              <div>36 giờ (8 tuần)</div>
                              <div>Đầu vào: 3.5-4.0</div>
                            </div>
                            <div className=" text-sm mt-2 px-2 pl-5">
                              <div>9.448.000VNĐ</div>
                              <div>Đầu ra: 4.5+</div>
                            </div>
                          </div>

                          <div className="text-sm flex flex-col items-center py-2">
                            <div className="text-orange-400 font-medium flex justify-self-center">★ Cam kết đầu ra</div>
                            <div className="flex justify-self-center"><Check className="text-green-500" />Học hiệu quả, nhanh hơn 40%</div>
                            <div className="flex justify-self-center"><img src="https://cdn-icons-png.flaticon.com/128/555/555417.png" className="w-4 mr-2" /> Giảng viên Bản Ngữ</div>
                            <div className="flex justify-self-center"> <img src="https://cdn-icons-png.flaticon.com/128/555/555515.png" className="w-4 mr-2" />Đội ngũ hỗ trợ IELTS người Việt</div>
                          </div>
                          <button className="mt-5 px-4 py-2 bg-orange-500 text-white font-semibold rounded-full">Tìm hiểu thêm</button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square flex-col items-center rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                      <div className="text-center">
                        <img src="https://ktdcgroup.vn/wp-content/uploads/2020/07/IELTS-Level-3-460x335.jpg" />
                        <div className="px-8 ">
                          <div className="font-bold py-4 border-b-2 ">Khóa học IELTS 1</div>

                          <div className="flex justify-center items-stretch">
                            <div className=" text-sm mt-2 px-2 border-r-2 pr-5 ">
                              <div>36 giờ (8 tuần)</div>
                              <div>Đầu vào: 3.5-4.0</div>
                            </div>
                            <div className=" text-sm mt-2 px-2 pl-5">
                              <div>9.448.000VNĐ</div>
                              <div>Đầu ra: 4.5+</div>
                            </div>
                          </div>

                          <div className="text-sm flex flex-col items-center py-2">
                            <div className="text-orange-400 font-medium flex justify-self-center">★ Cam kết đầu ra</div>
                            <div className="flex justify-self-center"><Check className="text-green-500" />Học hiệu quả, nhanh hơn 40%</div>
                            <div className="flex justify-self-center"><img src="https://cdn-icons-png.flaticon.com/128/555/555417.png" className="w-4 mr-2" /> Giảng viên Bản Ngữ</div>
                            <div className="flex justify-self-center"> <img src="https://cdn-icons-png.flaticon.com/128/555/555515.png" className="w-4 mr-2" />Đội ngũ hỗ trợ IELTS người Việt</div>
                          </div>
                          <button className="mt-5 px-4 py-2 bg-orange-500 text-white font-semibold rounded-full">Tìm hiểu thêm</button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square flex-col items-center rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                      <div className="text-center">
                        <img src="https://ktdcgroup.vn/wp-content/uploads/2020/07/IELTS-Level-3-460x335.jpg" />
                        <div className="px-8 ">
                          <div className="font-bold py-4 border-b-2 ">Khóa học IELTS 1</div>

                          <div className="flex justify-center items-stretch">
                            <div className=" text-sm mt-2 px-2 border-r-2 pr-5 ">
                              <div>36 giờ (8 tuần)</div>
                              <div>Đầu vào: 3.5-4.0</div>
                            </div>
                            <div className=" text-sm mt-2 px-2 pl-5">
                              <div>9.448.000VNĐ</div>
                              <div>Đầu ra: 4.5+</div>
                            </div>
                          </div>

                          <div className="text-sm flex flex-col items-center py-2">
                            <div className="text-orange-400 font-medium flex justify-self-center">★ Cam kết đầu ra</div>
                            <div className="flex justify-self-center"><Check className="text-green-500" />Học hiệu quả, nhanh hơn 40%</div>
                            <div className="flex justify-self-center"><img src="https://cdn-icons-png.flaticon.com/128/555/555417.png" className="w-4 mr-2" /> Giảng viên Bản Ngữ</div>
                            <div className="flex justify-self-center"> <img src="https://cdn-icons-png.flaticon.com/128/555/555515.png" className="w-4 mr-2" /> Đội ngũ hỗ trợ IELTS người Việt</div>
                          </div>
                          <button className="mt-5 px-4 py-2 bg-orange-500 text-white font-semibold rounded-full">Tìm hiểu thêm</button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="w-full mb-10 flex flex-col gap-10 bg-[#eee] py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Khoá IELTS 4 kỹ năng</h2>
          <p className="text-gray-500 mt-6 mb-2 text-left w-[900px] justify-self-center">
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
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square flex-col items-center rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                      <div className="text-center">
                        <img src="https://ktdcgroup.vn/wp-content/uploads/2020/07/IELTS-Level-3-460x335.jpg" />
                        <div className="px-8 ">
                          <div className="font-bold py-4 border-b-2 ">Khóa học IELTS 1</div>

                          <div className="flex justify-center items-stretch">
                            <div className=" text-sm mt-2 px-2 border-r-2 pr-5 ">
                              <div>36 giờ (8 tuần)</div>
                              <div>Đầu vào: 3.5-4.0</div>
                            </div>
                            <div className=" text-sm mt-2 px-2 pl-5">
                              <div>9.448.000VNĐ</div>
                              <div>Đầu ra: 4.5+</div>
                            </div>
                          </div>
                          <button className="mt-5 px-4 py-2 bg-orange-500 text-white font-semibold rounded-full">Tìm hiểu thêm</button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square flex-col items-center rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                      <div className="text-center">
                        <img src="https://ktdcgroup.vn/wp-content/uploads/2020/07/IELTS-Level-3-460x335.jpg" />
                        <div className="px-8 ">
                          <div className="font-bold py-4 border-b-2 ">Khóa học IELTS 1</div>

                          <div className="flex justify-center items-stretch">
                            <div className=" text-sm mt-2 px-2 border-r-2 pr-5 ">
                              <div>36 giờ (8 tuần)</div>
                              <div>Đầu vào: 3.5-4.0</div>
                            </div>
                            <div className=" text-sm mt-2 px-2 pl-5">
                              <div>9.448.000VNĐ</div>
                              <div>Đầu ra: 4.5+</div>
                            </div>
                          </div>
                          <button className="mt-5 px-4 py-2 bg-orange-500 text-white font-semibold rounded-full">Tìm hiểu thêm</button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square flex-col items-center rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                      <div className="text-center">
                        <img src="https://ktdcgroup.vn/wp-content/uploads/2020/07/IELTS-Level-3-460x335.jpg" />
                        <div className="px-8 ">
                          <div className="font-bold py-4 border-b-2 ">Khóa học IELTS 1</div>

                          <div className="flex justify-center items-stretch">
                            <div className=" text-sm mt-2 px-2 border-r-2 pr-5 ">
                              <div>36 giờ (8 tuần)</div>
                              <div>Đầu vào: 3.5-4.0</div>
                            </div>
                            <div className=" text-sm mt-2 px-2 pl-5">
                              <div>9.448.000VNĐ</div>
                              <div>Đầu ra: 4.5+</div>
                            </div>
                          </div>
                          <button className="mt-5 px-4 py-2 bg-orange-500 text-white font-semibold rounded-full">Tìm hiểu thêm</button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square flex-col items-center rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                      <div className="text-center">
                        <img src="https://ktdcgroup.vn/wp-content/uploads/2020/07/IELTS-Level-3-460x335.jpg" />
                        <div className="px-8 ">
                          <div className="font-bold py-4 border-b-2 ">Khóa học IELTS 1</div>

                          <div className="flex justify-center items-stretch">
                            <div className=" text-sm mt-2 px-2 border-r-2 pr-5 ">
                              <div>36 giờ (8 tuần)</div>
                              <div>Đầu vào: 3.5-4.0</div>
                            </div>
                            <div className=" text-sm mt-2 px-2 pl-5">
                              <div>9.448.000VNĐ</div>
                              <div>Đầu ra: 4.5+</div>
                            </div>
                          </div>
                          <button className="mt-5 px-4 py-2 bg-orange-500 text-white font-semibold rounded-full">Tìm hiểu thêm</button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>





      <div className="bg-cover bg-center h-full w-full flex justify-center items-center py-8"
        style={{ backgroundImage: `url('https://ktdcgroup.vn/wp-content/uploads/2021/10/chuong-trinh-hoc-ielts-ktdc-ielts-6-Copy-min.jpg')` }}>
        <div className="w-full flex justify-center items-center">
          <div className="justify-self-center px-5">
            <div className="text-3xl text-orange-500 font-bold py-4">TƯ VẤN LỘ TRÌNH HỌC CÁ NHÂN HÓA</div>
            <div className="text-base text-white py-4 w-[700px]">Mỗi học viên đều có xuất phát điểm và mục tiêu khác nhau. Để thiết kế lộ trình học cá nhân hóa cho riêng bạn, hãy để lại thông tin ở đây ngay bạn nhé!</div>
            <div className="py-4">
              <div className="text-base text-orange-500 font-bold">Hoặc gọi hotline</div>
              <div className="text-xl text-white font-bold">(028) 7309 6990</div>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="">
              <input type="text" id="first_name" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Họ và tên" required />
            </div>
            <div className="py-2">
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Số điện thoại" required />
            </div>
            <div className="">
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
            </div>
            <button className="mt-2 ml-6 px-4 py-2 bg-orange-500 text-white font-semibold rounded-full">Đăng ký tư vấn</button>
          </div>
        </div>
      </div>


      <div className="flex justify-center items-center w-5/6 px-20 py-20 border-b-2">
        <div className="w-3/4 px-4 flex flex-col items-center">
          <div className=" p-24 relative flex items-center justify-center">
            <div className="absolute w-60 h-60 border border-gray-100 rounded-full"></div>
            <div className="absolute w-48 h-48 border border-gray-300 rounded-full"></div>
            <div className="absolute w-32 h-32 border border-gray-400 rounded-full"></div>
            <img className="align-middle rounded-full bg-gray-500 p-4" src="https://ktdcgroup.vn/wp-content/uploads/2024/07/nativespeakers.png" />
          </div>
          <div className="font-bold text-lg">100% chuyên gia IELTS bản ngữ </div>
          <div className="text-center text-sm font-medium text-gray-500">Đội ngũ chuyên gia hàng đầu tại TP HCM với kinh nghiệm lâu năm trong giảng dạy IELTS. Trong đó, hơn 70% là cựu giám khảo do British Council và IDP đào tạo nghiệp vụ chấm thi IELTS chuyên nghiệp.</div>
        </div>
        <div className="w-3/4 px-4 flex flex-col items-center">
          <div className=" p-24 relative flex items-center justify-center">
            <div className="absolute w-60 h-60 border border-gray-100 rounded-full"></div>
            <div className="absolute w-48 h-48 border border-gray-300 rounded-full"></div>
            <div className="absolute w-32 h-32 border border-gray-400 rounded-full"></div>
            <img className="align-middle rounded-full bg-gray-500 p-4" src="https://ktdcgroup.vn/wp-content/uploads/2024/07/learning-group-2.png" />
          </div>
          <div className="font-bold text-lg">Educational Session</div>
          <div className="text-center text-sm font-medium text-gray-500">Học viên được tham gia các cộng đồng học tập tự chủ, quy tụ các bạn có chung mục tiêu IELTS để cùng nhau trao đổi kiến thức, luyện tập kỹ năng và thúc đẩy tinh thần trong quá trình học.</div>
        </div>
        <div className="w-3/4 px-4 flex flex-col items-center">
          <div className=" p-24 relative flex items-center justify-center">
            <div className="absolute w-60 h-60 border border-gray-100 rounded-full"></div>
            <div className="absolute w-48 h-48 border border-gray-300 rounded-full"></div>
            <div className="absolute w-32 h-32 border border-gray-400 rounded-full"></div>
            <img className="align-middle rounded-full bg-gray-500 p-4" src="https://ktdcgroup.vn/wp-content/uploads/2024/07/mock-test.png" />
          </div>
          <div className="font-bold text-lg">IELTS Mock Test</div>
          <div className="text-center text-sm font-medium text-gray-500">Trải nghiệm áp lực phòng thi với độ khó tương đương bài thi thật và nghe chuyên gia tư vấn lộ trình học phù hợp để tăng band điểm.</div>
        </div>
      </div>

      <div className="flex flex-col items-center py-24 w-full h-min">
        <div className="text-3xl font-bold">Ưu điểm vượt trội của khóa học</div>
        <Decorbar />
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-3/4 mx-4 border-2 rounded-lg p-8 h-100">
            <div className="py-2 "><img className="w-[50px] h-[50px]" src="https://ktdcgroup.vn/wp-content/uploads/2020/07/Mask-Group-461.png" /></div>
            <div className="text-lg font-bold py-2">80% CỰU GIÁM KHẢO IELTS</div>
            <div className="  font-medium text-gray-500 ">80% đội ngũ chuyên gia là cựu giám khảo IELTS được British Council đào tạo nghiệp vụ chấm thi chuyên nghiệp. Do đó các chuyên gia hiểu rất rõ bản chất IELTS bao gồm các tiêu chí chấm điểm, yêu cầu về mặt kiến thức, kỹ năng và những lỗi sai phổ biến ứng với mỗi band điểm để hướng dẫn học viên cải thiện nhanh chóng.</div>
          </div>
          <div className="w-3/4 mx-4 border-2 rounded-lg p-8 h-100">
            <div className="py-2 "><img className="w-[50px] h-[50px]" src="https://ktdcgroup.vn/wp-content/uploads/2020/07/Mask-Group-456.png" /></div>
            <div className="text-lg font-bold py-2">TẬP TRUNG VÀO IELTS</div>
            <div className="  font-medium text-gray-500">Nhờ hiểu biết sâu sắc về IELTS, đội ngũ chuyên gia tuyệt đối không dạy kiến thức tiếng Anh đại trà. Thay vào đó chỉ tập trung vào những kiến thức trọng tâm dành riêng cho kỳ thi IELTS. Với đội ngũ chuyên gia hàng đầu, KTDC tự tin là một trong những đơn vị uy tín nhất trên thị trường cung cấp kiến thức IELTS chuẩn Cambridge.</div>
          </div>
          <div className="w-3/4 mx-4 border-2 rounded-lg p-8 h-100">
            <div className="py-2 "><img className="w-[50px] h-[50px]" src="https://ktdcgroup.vn/wp-content/uploads/2020/07/Mask-Group-458.png" /></div>
            <div className="text-lg font-bold py-2">PHƯƠNG PHÁP DẠY 3-0</div>
            <div className=" font-medium text-gray-500">Không học lý thuyết đơn thuần, học viên được hướng dẫn chủ động suy nghĩ ý tưởng và tự đưa ra câu trả lời. Không học từ vựng một cách cứng nhắc, học viên được hướng dẫn bối cảnh dùng từ để sử dụng từ được tự nhiên nhất. Không học tủ, học vẹt. Học viên được hướng dẫn xây dựng tư duy nhạy bén để ứng phó với mọi dạng đề.</div>
          </div>
        </div>
        <div className="w-3/4 flex justify-center items-center py-8 h-1/2">
          <div className="w-3/4 mx-4 border-2 rounded-lg p-8 h-128">
            <div className="py-2 "><img className="w-[50px] h-[50px]" src="https://ktdcgroup.vn/wp-content/uploads/2020/07/Mask-Group-460.png" /></div>
            <div className="text-lg font-bold py-2">HỌC TƯ DUY PHẢN BIỆN</div>
            <div className=" font-medium text-gray-500">Kỹ năng tư duy phản biện (Critical Thinking) được chú trọng lồng ghép trong chương trình học, nhất là trong quá trình luyện tập các dạng bài của Speaking Part 3 và Writing Task 2. Qua đó giúp học viên phát triển khả năng lập luận để ứng phó với mọi dạng đề bằng cách hình thành thói quen đánh giá vấn đề nhạy bén, trình bày quan điểm cá nhân và bảo vệ quan điểm bằng những dẫn chứng, lời giải thích và ví dụ có tính thuyết phục.</div>
          </div>
          <div className="w-3/4 mx-4 border-2 rounded-lg p-8 h-128">
            <div className="py-2 "><img className="w-[50px] h-[50px]" src="https://ktdcgroup.vn/wp-content/uploads/2020/07/Mask-Group-457.png" /></div>
            <div className="text-lg font-bold py-2">LỘ TRÌNH CÁ NHÂN HÓA</div>
            <div className=" font-medium text-gray-500">Sau giờ học cùng chuyên gia, học viên còn được hỗ trợ phát triển kỹ năng toàn diện bởi cộng đồng Alumni năng động (bao gồm các cựu học viên có điểm số cao từ 8.0 đến 8.5+). Riêng học viên khóa Foundation & Pre IELTS sẽ được bố trí cố vấn cá nhân riêng, giúp xây dựng lộ trình học phù hợp với bản thân, giải đáp các vấn đề học thuật, kèm 1:1, lắng nghe, chia sẻ các áp lực tâm lý trong suốt quá trình học để đảm bảo theo đúng lộ trình đề ra.</div>
          </div>
          <div className="w-3/4 mx-4 border-2 rounded-lg p-8 h-128">
            <div className="py-2"><img className="w-[50px] h-[50px]" src="https://ktdcgroup.vn/wp-content/uploads/2020/07/Mask-Group-459.png" /></div>
            <div className="text-lg font-bold py-2">NHÓM HỌC TẬP TỰ CHỦ</div>
            <div className=" font-medium text-gray-500">Học viên được tham gia các cộng đồng học tập tự chủ, bao gồm những cá nhân có chung mục tiêu IELTS để cùng nhau trao đổi kiến thức, luyện tập kỹ năng và thúc đẩy tinh thần trong suốt quá trình học. Một số cộng đồng điển hình tại KTDC có thể kể đến như nhóm học viên thi IELTS vào cùng thời điểm, cộng đồng luyện tập thói quen sử dụng tiếng Anh hàng ngày,...</div>
          </div>
        </div>
      </div>


      <div className="w-full bg-orange-50 py-12 px-6 mt-14 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Đăng ký học cùng <span className="text-orange-500">IELTS VIỆT</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float.png" alt="Zalo Logo" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-gray-800">Nhắn tin Zalo</p>
              <p className="text-gray-500 text-sm">Trung tâm IELTS VIỆT</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float-1.png" alt="Messenger Logo" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-gray-800">Nhắn tin Messenger</p>
              <p className="text-gray-500 text-sm">Trung tâm IELTS VIỆT</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float-2.png" alt="Phone Icon" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-gray-800">Gọi hotline</p>
              <p className="text-gray-500 text-sm">0939 217 718</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img src="https://ktdcgroup.vn/wp-content/uploads/2024/10/Icon-float-3.png" alt="Clipboard Icon" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-gray-800">Đăng ký kiểm tra trình độ</p>
              <p className="text-orange-500 text-sm">miễn phí</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
