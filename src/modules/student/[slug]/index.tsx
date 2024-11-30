'use client'

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DATA } from "@/utils/data";
import { useParams } from "next/navigation"
import Link from "next/link"
import DOMPurify from 'isomorphic-dompurify';
import { IMAGES } from "@/utils/images";
import { ROUTES } from "@/utils/route";
import { slugifyURL } from "@/utils/slugify";

interface Students {
  id: number,
  image: string,
  title: string,
  content: string,
}

const students = DATA.STUDENTS as Students[]

export default function StudentDetailPage() {

  const { slug } = useParams<{ slug: string }>()

  const [student, setStudent] = useState<Students | null>(null)
  const [idStu, setIdStu] = useState<number | null>(null);

  useEffect(() => {
    if (slug && typeof slug === 'string') {
      const slugParts = slug.split('-')
      const id = parseInt(slugParts[slugParts.length - 1])

      setIdStu(id);

      const foundStudent = students.find(stu => stu.id === id)

      if (foundStudent && slug === slugifyURL(foundStudent.title) + `-${foundStudent.id}`) {
        setStudent(foundStudent)
      } else {
        setStudent(null)
      }
    }
  }, [slug, idStu])

  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <div className="flex flex-row justify-center items-start w-3/4 rounded-lg mt-16">
        <div className="flex flex-col items-end pr-10 gap-4 pt-5 sticky top-60 left-12 min-w-44" >
          <div className="relative rounded-full border object-cover w-8 h-8 flex justify-center items-center cursor-pointer group">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
            <div className="absolute flex justify-center items-center right-10 transform opacity-0 group-hover:opacity-100 w-max h-10 bg-orange-500 rounded-xl text-white font-semibold px-3 text-sm transition-opacity duration-300">
              Chia sẻ Facebook
            </div>
          </div>
          <div className="relative rounded-full border object-cover w-8 h-8 flex justify-center items-center cursor-pointer group">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
            </svg>
            <div className="absolute flex justify-center items-center right-10 transform opacity-0 group-hover:opacity-100 w-max h-10 bg-orange-500 rounded-xl text-white font-semibold px-3 text-sm transition-opacity duration-300">
              Chia sẻ Twitter
            </div>
          </div>
          <div className="relative rounded-full border object-cover w-8 h-8 flex justify-center items-center cursor-pointer group">
            <Link href={ROUTES.STUDENT}>
              <svg className="w-4 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </Link>
            <div className="absolute flex justify-center items-center right-10 transform opacity-0 group-hover:opacity-100 w-max h-10 bg-orange-500 rounded-xl text-white font-semibold px-3 text-sm transition-opacity duration-300">
              Quay lại
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="flex justify-center text-3xl text-center font-bold leading-relaxed mb-6 px-0.5">{student?.title}</h2>
          <div className="flex flex-row gap-2 mb-10">
            <Image src={IMAGES.VIEW_ICON} alt="" width={22} height={12} />
            <p>20 lượt xem</p>
          </div>
          <div className="text-justify" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(student?.content || '', { ALLOWED_ATTR: ['class'], USE_PROFILES: { html: true } }) }} />
        </div>
        <div className="min-w-44"></div>
      </div>
      <div className="flex justify-center w-full mt-20" >
        <Image src="https://ktdcgroup.vn/wp-content/uploads/2021/05/PT.jpg" alt="" width={1150} height={1150} />
      </div>
      <div className="w-3/4">
        <div className="flex flex-row justify-center items-end mb-20">
          <div className="w-3/4 mt-20 bg-gray-300 h-px"></div>
          <div className="w-full flex justify-center text-4xl font-bold">Có thể bạn quan tâm</div>
          <div className="w-3/4 mt-20 bg-gray-300 h-px"></div>
        </div>
      </div>
      <div className="grid grid-cols-4 w-3/4 gap-4 mb-20">
        {students?.filter((stu) => {
          if (Array.isArray(idStu)) return false;
          return stu?.id !== idStu;
        })?.slice(0, 4)?.map((stu) => (
          <div key={stu?.id}>
            <Link href={`${ROUTES.STUDENT}/${slugifyURL(stu.title)}-${stu.id}`}>
              <div className="relative">
                <Image className="rounded-lg cursor-pointer " src={stu?.image} alt="" width={1000} height={1000} />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300 bg-opacity-0 cursor-pointer duration-500 hover:bg-opacity-50"></div>
              </div>
            </Link>
            <Link href={`${ROUTES.STUDENT}/${slugifyURL(stu.title)}-${stu.id}`}>
              <div className="font-bold text-md mt-5 tracking-wide hover:text-orange-500 cursor-pointer">
                {stu.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

