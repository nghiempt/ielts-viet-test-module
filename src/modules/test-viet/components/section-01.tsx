// components/ReadingTestCollection.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { WritingService } from "@/services/writing";
import Link from "next/link";
import { ROUTES } from "@/utils/routes";

// Define interfaces for our data structures
interface WritingTestItem {
  _id: string;
  type: string;
  parts: string[];
  name: string;
  thumbnail: string;
  time: number;
  created_at: string;
}

const WritingSection: React.FC = () => {
  const COUNT = 12;

  const [writings, setWritings] = useState<WritingTestItem[]>([]);
  const [filteredWritings, setFilteredWritings] = useState<WritingTestItem[]>(
    []
  );
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currenPage, setCurrenPage] = useState<any>(1 as any);
  const [currenData, setCurrenData] = useState<any>([] as any);

  const selectPage = (pageSelected: any) => {
    setCurrenPage(pageSelected);
    const start = (pageSelected - 1) * COUNT;
    const end = pageSelected * COUNT;
    setCurrenData(filteredWritings.slice(start, end));
  };

  const prevPage = () => {
    if (currenPage > 1) {
      selectPage(currenPage - 1);
    }
  };

  const nextPage = () => {
    if (currenPage < totalPage) {
      selectPage(currenPage + 1);
    }
  };

  const render = (data: WritingTestItem[]) => {
    setFilteredWritings(data);
    // setWritings(data);
    setTotalPage(Math.ceil(data.length / COUNT));
    setCurrenPage(1);
    setCurrenData(data.slice(0, COUNT));
  };

  const init = async () => {
    const res = await WritingService.getAll();
    if (res && res.length > 0) {
      const filteredData = res.filter(
        (item: WritingTestItem) => item.thumbnail != null
      );
      setWritings(filteredData);
      render(filteredData);
    } else {
      setWritings([]);
      setFilteredWritings([]);
    }
  };

  useEffect(() => {
    init();
  }, []);

  // Test card component
  const TestCard: React.FC<{ test: WritingTestItem }> = ({ test }) => {
    return (
      <div className="flex flex-col">
        <div className="relative mb-2">
          <Image
            src={test.thumbnail}
            alt={test.name}
            width={280}
            height={180}
            className="rounded-lg w-full object-cover h-60 lg:h-40"
          />
          {/* {test.difficulty && (
            <div className="absolute top-2 left-2 bg-white text-gray-800 text-xs py-1 px-2 rounded">
              {test.difficulty}
            </div>
          )} */}
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="font-medium text-xl lg:text-sm mb-1">{test.name}</h3>
            <p className="text-gray-500 text-sm lg:text-xs mb-2">
              17K lượt làm
            </p>
          </div>
          <Link
            href={`${ROUTES.WRITING_TEST}/${test._id}`}
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
            {currenData.length === 0 ? (
              <div className="flex justify-center items-center">
                Không tìm thấy bài viết.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currenData.map((test: WritingTestItem, index: number) => (
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
                    disabled={currenPage === 1}
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
                {Array.from({ length: totalPage }, (_, i) => i + 1)?.map(
                  (item: any, index: any) => {
                    return (
                      <li key={index} onClick={() => selectPage(item)}>
                        <a
                          href="#"
                          className={`${
                            item === currenPage
                              ? "bg-indigo-50 hover:bg-indigo-100 text-gray-700"
                              : "bg-white"
                          } flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700`}
                        >
                          {item}
                        </a>
                      </li>
                    );
                  }
                )}
                <li>
                  <button
                    onClick={nextPage}
                    disabled={currenPage === totalPage}
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

export default WritingSection;
