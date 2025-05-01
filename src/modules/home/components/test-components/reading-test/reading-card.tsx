// components/TestBookCard.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/utils/routes";

interface TestCardProps {
  id: string;
  title: string;
  testCount: number;
  attemptsCount: number;
  coverImage: string;
}

const ReadingTestCard: React.FC<TestCardProps> = ({
  id,
  title,
  testCount,
  attemptsCount,
  coverImage,
}) => {
  return (
    <div className={`rounded-lg p-0 lg:p-0`}>
      <div className="flex justify-center">
        <div className="relative w-full h-full">
          <Image
            src={coverImage}
            alt={`kkkk`}
            width={1000}
            height={1000}
            className="object-cover rounded-lg shadow-lg w-full h-full"
          />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <div className="flex items-center text-gray-600 mt-1">
          <span>{testCount} bài tests</span>
          <span className="mx-2">•</span>
          <span>{attemptsCount}K lượt làm</span>
        </div>
        <Link href={`${ROUTES.READING_TEST}/${id}`}>
          <div className="inline-flex items-center text-[#FA812F] font-medium mt-2">
            Xem bài test
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
  );
};

export default ReadingTestCard;
