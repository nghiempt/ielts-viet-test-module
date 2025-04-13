// components/IELTSTestLayout.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/utils/images";
import { ChevronDown, ChevronUp } from "lucide-react";
import "@/styles/contact.css";

interface ListeningTestItem {
  id: number;
  title: string;
  testCount: number;
  attemptCount: string;
  bgColor: string;
  imagePath: string;
}

const ListeningTest: React.FC = () => {
  const testItems: ListeningTestItem[] = [
    {
      id: 1,
      title: "IELTS Actual Test 1",
      testCount: 6,
      attemptCount: "22K",
      bgColor: "bg-white",
      imagePath: "/images/ielts-1.png",
    },
    {
      id: 2,
      title: "Actual Test 2",
      testCount: 6,
      attemptCount: "5K",
      bgColor: "bg-white",
      imagePath: "/images/ielts-2.png",
    },
    {
      id: 3,
      title: "Actual Test 3",
      testCount: 11,
      attemptCount: "12K",
      bgColor: "bg-white",
      imagePath: "/images/ielts-3.png",
    },
    {
      id: 4,
      title: "Actual Test 4",
      testCount: 12,
      attemptCount: "12K",
      bgColor: "bg-white",
      imagePath: "/images/ielts-4.png",
    },
    {
      id: 5,
      title: "Actual Test 5",
      testCount: 12,
      attemptCount: "15K",
      bgColor: "bg-white",
      imagePath: "/images/ielts-5.png",
    },
    {
      id: 6,
      title: "Actual Test 6",
      testCount: 12,
      attemptCount: "24K",
      bgColor: "bg-white",
      imagePath: "/images/ielts-6.png",
    },
  ];

  return (
    <div className="py-0 px-6 lg:px-0">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8 text-black">
        Listening Test
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testItems.slice(0, 6).map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-12 gap-5 rounded-lg overflow-hidden"
          >
            <div
              className={`${item.bgColor} col-span-4 p-0 w-full h-full flex items-center justify-center`}
            >
              <div className="w-full h-full relative">
                <Image
                  src={IMAGES.THUMBNAIL}
                  alt={`IELTS Test ${item.id}`}
                  width={1000}
                  height={1000}
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>
            </div>
            <div className="col-span-8 flex-1 p-0">
              <h2 className="text-lg lg:text-2xl font-semibold">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-1 text-sm lg:text-base">
                {item.testCount} bài tests • {item.attemptCount} lượt làm
              </p>
              <Link href={`/listening-test`}>
                <div className="flex flex-row items-center text-[#FA812F] mt-2 font-medium text-sm lg:text-base">
                  Xem bài test{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center relative">
        <button className="text-[#FA812F] cursor-pointer font-semibold px-4 py-2 lg:py-4 lg:px-8 flex items-center gap-2 rounded-md">
          <>
            <p className="text-[14px] lg:text-base">Xem thêm</p>{" "}
            <div className="flex flex-col items-center gap-2">
              <ChevronDown
                size={16}
                className="translate-y-1 updown-animation1 delay-0"
              />
              <ChevronDown
                size={16}
                className="-translate-y-1 updown-animation2 delay-1"
              />
            </div>
          </>
        </button>
      </div>
    </div>
  );
};

export default ListeningTest;
