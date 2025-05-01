"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/utils/routes";

interface WritingTest {
  _id: string;
  type: string;
  parts: string[];
  name: string;
  thumbnail: string;
  time: number;
  created_at: string;
}
interface WritingTestCardProps {
  book: WritingTest;
}

const WritingTestCard: React.FC<WritingTestCardProps> = ({ book }) => {
  return (
    <div className={`rounded-lg p-0`}>
      <div className="relative flex flex-col items-center">
        <div className="relative w-full h-full mb-4">
          <Image
            src={book?.thumbnail}
            alt={book?.name}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="w-full mt-2">
          <h3 className="text-lg lg:text-2xl font-bold">{book?.name}</h3>
          <p className="text-sm lg:text-base text-gray-600 mt-1">
            11 bài tests · 12K lượt làm
          </p>

          <Link
            href={`${ROUTES.WRITING_TEST}/${book?._id}`}
            className="text-sm lg:text-base text-[#FA812F] font-medium flex items-center mt-4"
          >
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WritingTestCard;
