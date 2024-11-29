'use client'

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import FB from '../../../../public/images/facebook.png';
import TW from '../../../../public/images/twitter.png';
import B from '../../../../public/images/back.png';
import View from '../../../../public/images/view.png'
import { useEffect, useState, useRef } from "react";
import { DATA } from "@/utils/data";
import { useParams, usePathname } from "next/navigation"
import Link from "next/link"
import DOMPurify from 'dompurify';


interface Students {
  id: number,
  image: string,
  title: string,
  content: string,
}

const students = DATA.STUDENTS as Students[]

export default function StudentDetailPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
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
    const handleScroll = () => {
      if (gridRef.current && contentRef.current) {
        const gridElement = gridRef.current;
        const gridScrollTop = gridElement.scrollTop;
        const contentHeight = contentRef.current.scrollHeight;
        const gridHeight = gridElement.clientHeight;

        setScrollPosition(gridScrollTop);
        console.log("check position: ", scrollPosition)

        if (gridScrollTop + gridHeight >= contentHeight) {
          setIsAtBottom(true);
          gridElement.scrollTop = contentHeight - gridHeight;
        } else {
          setIsAtBottom(false);
        }
      }
    };

    const gridElement = gridRef.current;
    if (gridElement) {
      gridElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (gridElement) {
        gridElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollPosition]);

  const sidebarStyle = {
    transform: `translateY(${scrollPosition}px)`,
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

      <div
        ref={gridRef}
        className="grid grid-cols-12 w-3/4 max-h-[700px] overflow-y-scroll rounded-lg pr-44"
      >
        <div
          className="col-span-3 flex flex-col items-end pr-10 gap-4 pt-5"
          style={sidebarStyle}
        >

          <div className="relative rounded-full border object-cover w-8 h-8 flex justify-center items-center cursor-pointer group">
            {/* <Image src={FB} alt="" className="" width={15} /> */}
            {/* <Facebook /> */}
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
            <div className="absolute flex justify-center items-center right-10 transform opacity-0 group-hover:opacity-100 w-max h-10 bg-[rgb(var(--secondary-rgb))] rounded-xl text-white font-semibold px-3 text-sm transition-opacity duration-300">Chia sẻ Facebook</div>
          </div>
          <div className="relative rounded-full border object-cover w-8 h-8 flex justify-center items-center cursor-pointer group">
            <Image src={TW} alt="" className="" width={15} height={100}/>
            <div className="absolute flex justify-center items-center right-10 transform opacity-0 group-hover:opacity-100 w-max h-10 bg-[rgb(var(--secondary-rgb))] rounded-xl text-white font-semibold px-3 text-sm transition-opacity duration-300">Chia sẻ Twitter</div>
          </div>

          <div className="relative rounded-full border object-cover w-8 h-8 flex justify-center items-center cursor-pointer group">
            <Link href={`/hoc-vien`}>
              <Image src={B} alt="" className="" width={15} height={100}/>
            </Link>
            <div className="absolute flex justify-center items-center right-10 transform opacity-0 group-hover:opacity-100 w-max h-10 bg-[rgb(var(--secondary-rgb))] rounded-xl text-white font-semibold px-3 text-sm transition-opacity duration-300">Quay lại</div>
          </div>
        </div>

        <div
          ref={contentRef}
          className="col-span-9"
        >
          <h2 className="flex justify-center text-4xl font-bold mb-6">{student?.title}</h2>
          <div className="flex flex-row gap-2 mb-6">
            <Image src={View} alt="" width={22} height={12} />
            <p>20 lượt xem</p>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(student?.content || '') }}
          />
        </div>

        {/* <div className="col-span-2"></div> */}
      </div>

      <div className="flex justify-center w-full mt-20"
      >
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
              <div className="font-bold text-md mt-5 tracking-wide hover:text-[rgb(var(--secondary-rgb))] cursor-pointer">
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

