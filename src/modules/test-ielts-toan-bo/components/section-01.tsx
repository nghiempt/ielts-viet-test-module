// pages/index.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/utils/images";
import {
  BookOpenText,
  Facebook,
  Headphones,
  PenLine,
  PlayIcon,
} from "lucide-react";

interface TestItem {
  id: number;
  hasReading: boolean;
  hasListening: boolean;
  hasWriting: boolean;
}

interface BookItem {
  id: number;
  title: string;
  testCount: number;
  attemptCount: string;
}

export default function Section01() {
  const tests: TestItem[] = [
    { id: 1, hasReading: true, hasListening: true, hasWriting: true },
    { id: 2, hasReading: true, hasListening: true, hasWriting: true },
    { id: 3, hasReading: true, hasListening: true, hasWriting: true },
  ];

  const books: BookItem[] = [
    { id: 10, title: "Cambridge IELTS 10", testCount: 8, attemptCount: "4.9M" },
    { id: 11, title: "Cambridge IELTS 11", testCount: 8, attemptCount: "4.1M" },
    { id: 12, title: "Cambridge IELTS 12", testCount: 8, attemptCount: "4.3M" },
    { id: 13, title: "Cambridge IELTS 13", testCount: 8, attemptCount: "5.6M" },
    {
      id: 15,
      title: "Cambridge IELTS 15",
      testCount: 8,
      attemptCount: "1.25M",
    },
    {
      id: 17,
      title: "Cambridge IELTS 17",
      testCount: 8,
      attemptCount: "1.56M",
    },
    { id: 18, title: "Cambridge IELTS 18", testCount: 8, attemptCount: "1.6M" },
    { id: 9, title: "Cambridge IELTS 9", testCount: 8, attemptCount: "3.7M" },
  ];

  return (
    <div className="w-full mx-auto px-6">
      <main>
        {/* Header */}
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:flex-row mb-4">
          <div className="w-full lg:w-40 h-full mr-0 lg:mr-4 mb-5 lg:mb-0">
            <Image
              src={IMAGES.THUMBNAIL}
              alt=""
              width={280}
              height={180}
              className="rounded-lg w-full object-cover h-full"
            />
          </div>
          <div className="flex flex-col justify-between items-start">
            <div className="">
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                Cambridge IELTS 18
              </h1>
              <div className="flex justify-center lg:justify-start items-center text-sm text-gray-600">
                <span>8 bài tests</span>
                <span className="mx-2">•</span>
                <span>74,734 lượt làm</span>
              </div>
            </div>
            <div className="mt-1 flex justify-center lg:justify-start items-center w-full">
              <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-sm flex  items-center">
                <Facebook
                  size={15}
                  color="#ffffff"
                  fill="white"
                  className="mr-1"
                />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm lg:text-lg text-justify lg:text-left text-gray-700 mb-6">
          Cambridge IELTS 18 với đề thi IELTS Reading Listening Test được thiết
          kế dưới dạng bài thi thử IELTS Online Test kèm Answer key giúp thiết
          đặc ăn chế bảng Listeningpractice, lật lý tưởng IELTS các học trong
          bài và Free PDF download.
        </p>

        {/* Test Sections */}
        <div className="mb-8">
          <div className="hidden lg:flex mb-2 text-base lg:text-xl">
            <div className="w-28 font-bold text-gray-800 mr-8">BÀI TEST</div>
            <div className="w-28 font-bold text-gray-800 mr-16">READING</div>
            <div className="w-28 font-bold text-gray-800 mr-16">LISTENING</div>
            <div className="font-bold text-gray-800">WRITING</div>
          </div>

          {tests.map((test) => (
            <div
              key={test.id}
              className=" flex flex-col lg:flex-row justify-center items-center py-3 border-b border-gray-200"
            >
              <div className="w-full text-center lg:text-left mb-5 lg:mb-0 lg:w-32">
                <div className="font-medium text-lg lg:text-sm">
                  Test {test.id}
                </div>
              </div>

              <div className="w-80 lg:w-full flex md:grid overflow-x-auto md:overflow-visible gap-4 md:gap-6 md:grid-cols-3 pb-4 md:pb-0 px-0 mx-0 snap-x snap-mandatory scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 scroll-bar-style">
                <div className="flex-shrink-0 flex items-center">
                  {test.hasReading && (
                    <div className="flex flex-col justify-center items-center gap-1">
                      <div className="border-4 border-gray-200 p-3 rounded-full">
                        <BookOpenText />
                      </div>
                      <button
                        className={`flex items-center justify-center py-2 px-4 mt-4 rounded-lg border
                          border-gray-300 text-black hover:border-[#FA812F]
                       w-full text-sm font-medium`}
                      >
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center mr-2 border-2 border-[#FA812F] p-3">
                          <div>
                            <PlayIcon
                              color="#FA812F"
                              fill="#FA812F"
                              size={15}
                            />
                          </div>
                        </div>
                        <span>Làm bài</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex-shrink-0 flex items-center">
                  {test.hasListening && (
                    <div className="flex flex-col justify-center items-center gap-1">
                      <div className="border-4 border-gray-200 p-3 rounded-full">
                        <Headphones />
                      </div>
                      <button
                        className={`flex items-center justify-center py-2 px-4 mt-4 rounded-lg border
                          border-gray-300 text-black hover:border-[#FA812F]
                       w-full text-sm font-medium`}
                      >
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center mr-2 border-2 border-[#FA812F] p-3">
                          <div>
                            <PlayIcon
                              color="#FA812F"
                              fill="#FA812F"
                              size={15}
                            />
                          </div>
                        </div>
                        <span>Làm bài</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex-shrink-0 flex items-center">
                  {test.hasWriting && (
                    <div className="flex flex-col justify-center items-center gap-1">
                      <div className="border-4 border-gray-200 p-3 rounded-full">
                        <PenLine />
                      </div>
                      <button
                        className={`flex items-center justify-center py-2 px-4 mt-4 rounded-lg border
                          border-gray-300 text-black hover:border-[#FA812F]
                       w-full text-sm font-medium`}
                      >
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center mr-2 border-2 border-[#FA812F] p-3">
                          <div>
                            <PlayIcon
                              color="#FA812F"
                              fill="#FA812F"
                              size={15}
                            />
                          </div>
                        </div>
                        <span>Làm bài</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Series */}
        <h2 className="text-xl lg:text-3xl font-bold mb-4">
          Sách cùng bộ Cambridge
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {books.slice(0, 4).map((item, index) => (
            <div
              key={item.id}
              className="grid grid-rows-1 gap-5 rounded-lg overflow-hidden"
            >
              <div
                className={`col-span-12 lg:col-span-4 p-0 w-full h-full flex items-center justify-center`}
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
              <div className="col-span-12 lg:col-span-8 flex-1 p-0">
                <h2 className="text-lg lg:text-xl font-semibold">
                  {item.title}
                </h2>
                <p className="text-gray-600 mt-1 text-sm">
                  {item.testCount} bài tests • {item.attemptCount} lượt làm
                </p>
                <Link href={`/tests/${item.id}`}>
                  <div className="flex flex-row items-center text-[#FA812F] mt-2 font-medium text-sm">
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
      </main>
    </div>
  );
}
