import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/utils/images";

interface FullTestProps {
  title: string;
  testCount: number;
  viewCount: number;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
}

const FullTestCard: React.FC<FullTestProps> = ({
  title,
  testCount,
  viewCount,
  description,
  imageSrc,
  imageAlt,
  link,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-5 w-full">
      <div className="rounded-lg p-0 w-full">
        <div className="flex justify-center w-full h-full">
          <Image
            src={IMAGES.THUMBNAIL}
            alt={imageAlt}
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>

      <div className="md:w-2/3 lg:w-full p-0 rounded-lg mt-4 lg:mt-0">
        <h2 className="text-lg lg:text-2xl font-bold text-black">{title}</h2>
        <div className="text-sm lg:text-base flex space-x-2 items-center mt-2 text-gray-600">
          <span>{testCount} bài tests</span>
          <span className="text-gray-400">•</span>
          <span>{viewCount}K lượt làm</span>
        </div>
        <p className="text-sm lg:text-base mt-2 text-gray-700">{description}</p>
        <Link
          href="/full-ielts-test"
          className="text-sm lg:text-base inline-flex items-center mt-4 text-[#FA812F] font-medium"
        >
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
        </Link>
      </div>
    </div>
  );
};

const FullTestLayout: React.FC = () => {
  const resources = [
    {
      title: "Official Guide to IELTS",
      testCount: 14,
      viewCount: 19,
      description:
        "Official Cambridge Guide To IELTS với đề bài IELTS Reading Listening Test được thiết kế dưới dạng bài thi thử...",
      imageSrc: "/images/official-guide-ielts.jpg",
      imageAlt: "Official Guide to IELTS book cover",
      link: "/resources/official-guide",
    },
    {
      title: "IELTS Trainer",
      testCount: 12,
      viewCount: 13,
      description:
        "IELTS Trainer với đề bài IELTS Reading Listening Test được thiết kế dưới dạng bài thi thử IELTS Online Test kèm...",
      imageSrc: "/images/ielts-trainer.jpg",
      imageAlt: "IELTS Trainer book cover",
      link: "/resources/ielts-trainer",
    },
  ];

  return (
    <div className="py-0 px-6 lg:px-0">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8 text-gray-800">
        Full Test
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5">
        {resources.map((resource, index) => (
          <FullTestCard key={index} {...resource} />
        ))}
      </div>
    </div>
  );
};

export default FullTestLayout;
