'use client'

import Header from "@/layout/header"
import Footer from "@/layout/footer"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from "next/image"
import FB from '../../../../public/images/facebook.png'
import TW from '../../../../public/images/twitter.png'
import B from '../../../../public/images/back.png'
import View from '../../../../public/images/view.png'
import { useEffect, useRef, useState } from "react"
import { DATA } from "@/utils/data";
import { useParams, usePathname } from "next/navigation"
import Link from "next/link"

interface Students {
  id: number,
  image: string,
  title: string,
  content: string,
}

const students = DATA.STUDENTS as Students[]

export default function StudentDetailPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const imageSectionRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [student, setStudent] = useState<Students | null>(null);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (typeof id === "string") {
      const studentData = students.find((stu) => stu.id === parseInt(id, 10));
      setStudent(studentData || null);
    }
  }, [id]);

  useEffect(() => {
    const updateMaxScroll = () => {
      if (mainContentRef.current && imageSectionRef.current && sidebarRef.current) {
        const mainContentHeight = mainContentRef.current.offsetHeight;
        const imageOffsetTop = imageSectionRef.current.offsetTop;
        const sidebarHeight = sidebarRef.current.offsetHeight;
        const maxScrollable = imageOffsetTop - sidebarHeight;
        setMaxScroll(maxScrollable);
      }
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', updateMaxScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sidebarStyle = {
    transform: `translateY(${Math.min(scrollPosition, maxScroll)}px)`,
    transition: 'transform 0.1s ease-out',
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <div className="w-3/4 pb-10 pt-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>HỌC VIÊN IELTS VIỆT</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="grid grid-cols-12 w-3/4">
        <div className="col-span-2 flex flex-col items-end pr-10 gap-4"
          ref={sidebarRef}
          style={sidebarStyle}
        >
          <div className="rounded-full border object-cover w-10 h-10 flex justify-center items-center">
            <Image src={FB} alt="" className="" width={30} />
          </div>
          <div className="rounded-full border object-cover w-10 h-10 flex justify-center items-center">
            <Image src={TW} alt="" className="" width={30} />
          </div>
          <div className="rounded-full border object-cover w-10 h-10 flex justify-center items-center">
            <Link href={`/hoc-vien`}>
              <Image src={B} alt="" className="" width={30} />
            </Link>
          </div>
        </div>
        <div className="col-span-8" ref={mainContentRef}>
          <h2 className="flex justify-center text-4xl font-bold mb-6">{student?.title}</h2>
          <div className="flex flex-row gap-2 mb-6">
            <Image src={View} alt="" width={22} height={12} />
            <p>20 lượt xem</p>
          </div>
          <p>
            {student?.content}
          </p>
        </div>
        <div className="col-span-2"></div>
      </div>

      <div className="flex justify-center w-full mt-20" ref={imageSectionRef}>
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
        {students.filter((stu) => {
          if (Array.isArray(id)) return false;
          return stu.id !== parseInt(id, 10);
        }).slice(0, 4).map((stu) => (
          <div key={stu.id}>
            <Link href={`/hoc-vien/${stu.id}`}>
              <div className="relative">
                <Image className="rounded-lg cursor-pointer " src={stu.image} alt="" width={1000} height={1000} />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300 bg-opacity-0 cursor-pointer duration-500 hover:bg-opacity-50"></div>
              </div>
            </Link>
            <Link href={`/hoc-vien/${stu.id}`}>
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