// components/ReadingTestCollection.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/utils/images";
import { ReadingService } from "@/services/reading";
import Link from "next/link";
import { ROUTES } from "@/utils/routes";

// Define interfaces for our data structures

interface ReadingTestItem {
  _id: string;
  type: string;
  parts: string[];
  name: string;
  thumbnail: string;
  time: number;
  created_at: string;
}

const ReadingSection: React.FC = () => {
  const COUNT = 12;

  const [readings, setReadings] = useState<ReadingTestItem[]>([]);
  const [filteredReadings, setFilteredReadings] = useState<ReadingTestItem[]>(
    []
  );
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentData, setCurrentData] = useState<ReadingTestItem[]>([]);

  const selectPage = (pageSelected: number) => {
    setCurrentPage(pageSelected);
    const start = (pageSelected - 1) * COUNT;
    const end = pageSelected * COUNT;
    setCurrentData(filteredReadings.slice(start, end));
  };

  const prevPage = () => {
    if (currentPage > 1) {
      selectPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPage) {
      selectPage(currentPage + 1);
    }
  };

  const render = (data: ReadingTestItem[]) => {
    setFilteredReadings(data);
    setTotalPage(Math.ceil(data.length / COUNT));
    setCurrentPage(1);
    setCurrentData(data.slice(0, COUNT));
  };

  const init = async () => {
    const res = await ReadingService.getAll();
    if (res && res.length > 0) {
      const filteredData = res.filter(
        (item: ReadingTestItem) => item.thumbnail != null
      );
      setReadings(filteredData);
      render(filteredData);
    } else {
      setReadings([]);
      setFilteredReadings([]);
    }
  };

  useEffect(() => {
    init();
  }, []);

  // Test card component
  const TestCard: React.FC<{ test: ReadingTestItem }> = ({ test }) => {
    return (
      <div className="flex flex-col">
        <div className="relative mb-2">
          <Image
            src={test.thumbnail || IMAGES.THUMBNAIL}
            alt={test.name}
            width={1000}
            height={1000}
            className="rounded-lg w-full object-cover h-60 lg:h-40"
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="font-medium text-xl lg:text-sm mb-1">{test.name}</h3>
            <p className="text-gray-500 text-sm lg:text-xs mb-2">
              20K lượt làm
            </p>
          </div>
          <Link
            href={`${ROUTES.READING_TEST}/${test._id}`}
            className="flex items-center text-md lg:text-sm text-[#FA812F]"
          >
            <span className="mr-1">Làm bài</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <section>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            {currentData.length === 0 ? (
              <div className="flex justify-center items-center">
                Không tìm thấy bài đọc.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentData.map((test: ReadingTestItem) => (
                  <TestCard key={test._id} test={test} />
                ))}
              </div>
            )}
            <nav
              className="flex flex-col items-center justify-center mt-4 p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
              aria-label="Table navigation"
            >
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="cursor-pointer flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
                {Array.from({ length: totalPage }, (_, i) => i + 1).map(
                  (item, index) => (
                    <li key={index} onClick={() => selectPage(item)}>
                      <a
                        href="#"
                        className={`${
                          item === currentPage
                            ? "bg-indigo-50 hover:bg-indigo-100 text-gray-700"
                            : "bg-white"
                        } flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700`}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
                <li>
                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPage}
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadingSection;
