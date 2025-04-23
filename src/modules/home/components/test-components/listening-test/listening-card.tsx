// components/TestBookCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TestCardProps {
  title: string;
  testCount: number;
  attemptsCount: number;
  coverImage: string;
}

const ListeningTestCard: React.FC<TestCardProps> = ({
  title,
  testCount,
  attemptsCount,
  coverImage,
}) => {
  return (
    <div className="grid grid-cols-12 gap-5 rounded-lg overflow-hidden">
      <div
        className={`col-span-4 p-0 w-full h-full flex items-center justify-center`}
      >
        <div className="w-full h-full relative">
          <Image
            src={coverImage}
            alt={`${title}`}
            width={1000}
            height={1000}
            className="object-cover rounded-lg h-full w-full"
          />
        </div>
      </div>
      <div className="col-span-8 flex-1 p-0">
        <h2 className="text-lg lg:text-2xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-1 text-sm lg:text-base">
          {testCount} bài tests • {attemptsCount}K lượt làm
        </p>
        <Link href={`/listening-test`}>
          <div className="flex flex-row items-center text-[#FA812F] mt-2 font-medium text-sm lg:text-base">
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

export default ListeningTestCard;
