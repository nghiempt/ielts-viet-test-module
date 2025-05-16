// components/ReadingTestCollection.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/utils/images";
import Link from "next/link";
import { ROUTES } from "@/utils/routes";
import { FullTestService } from "@/services/full-test";
import Skeleton from "@/components/ui/skeleton";
import { BookCheck, Headphones, PencilLine, PlayIcon } from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { UserService } from "@/services/user";

interface FullTestItem {
  _id: string;
  name: string;
  thumbnail: string;
  description: string;
  r_id: string;
  l_id: string;
  w_id: string;
  created_at: string;
}

interface CompletedTest {
  test_id: string;
  // Add other relevant fields from completed test if needed
}

const FullTestSection: React.FC = () => {
  const COUNT = 12;

  const [fullTests, setFullTests] = useState<FullTestItem[]>([]);
  const [filteredFullTests, setFilteredFullTests] = useState<FullTestItem[]>(
    []
  );
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentData, setCurrentData] = useState<FullTestItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [completedTests, setCompletedTests] = useState<string[]>([]);

  const isLogin = Cookies.get("isLogin");
  const router = useRouter();

  const selectPage = (pageSelected: number) => {
    setCurrentPage(pageSelected);
    const start = (pageSelected - 1) * COUNT;
    const end = pageSelected * COUNT;
    setCurrentData(filteredFullTests.slice(start, end));
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

  const render = (data: FullTestItem[]) => {
    setFilteredFullTests(data);
    setTotalPage(Math.ceil(data.length / COUNT));
    setCurrentPage(1);
    setCurrentData(data.slice(0, COUNT));
  };

  const init = async () => {
    setLoading(true);
    try {
      const res = await FullTestService.getAll();
      if (res && res.length > 0) {
        const filteredData = res.filter(
          (item: FullTestItem) => item.thumbnail != null
        );
        setFullTests(filteredData);
        render(filteredData);

        if (isLogin) {
          const completedRes = await UserService.getCompleteUserTestById(
            isLogin
          );
          if (completedRes && completedRes.length > 0) {
            const completedTestIds = completedRes.map(
              (test: CompletedTest) => test.test_id
            );
            setCompletedTests(completedTestIds);
          }
        }
      } else {
        setFullTests([]);
        setFilteredFullTests([]);
      }
    } catch (error) {
      console.error("Error initializing data:", error);
      setFullTests([]);
      setFilteredFullTests([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  // Test card component
  const TestCard: React.FC<{ test: FullTestItem }> = ({ test }) => {
    const isReadingCompleted = completedTests.includes(test.r_id);
    const isListeningCompleted = completedTests.includes(test.l_id);
    const isWritingCompleted = completedTests.includes(test.w_id);
    return (
      <div className="flex flex-col">
        <div className="relative mb-2">
          <Image
            src={test.thumbnail || IMAGES.THUMBNAIL}
            alt={test.name}
            width={280}
            height={180}
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
            href={`${ROUTES.FULLTEST_DETAIL}/${test._id}`}
            className="flex items-center text-md lg:text-sm "
          >
            <div className="text-[#FA812F] flex flex-row items-center gap-2 border border-[#FA812F] hover:bg-[#FA812F] hover:text-white rounded-lg px-3 py-1.5 group transition-all duration-200 ease-in-out">
              <div className="p-1 border border-[#FA812F] group-hover:border-white rounded-full transition-all duration-200 ease-in-out">
                <PlayIcon
                  size={14}
                  fill="#FA812F"
                  className="group-hover:fill-white transition-colors duration-200 ease-in-out"
                />
              </div>
              <span className="mr-1 text-[#FA812F] group-hover:text-white">
                Làm bài
              </span>
            </div>
            <div className="flex flex-row items-center gap-3 ml-5">
              <div
                className={`border p-1.5 rounded-full ${
                  isReadingCompleted
                    ? "text-white border-white bg-[#58c558]"
                    : "text-gray-500 border-gray-500"
                }`}
              >
                <BookCheck size={15} />
              </div>
              <div
                className={`border p-1.5 rounded-full ${
                  isListeningCompleted
                    ? "text-white border-white bg-[#58c558]"
                    : "text-gray-500 border-gray-500"
                }`}
              >
                <Headphones size={15} />
              </div>
              <div
                className={`border p-1.5 rounded-full ${
                  isWritingCompleted
                    ? "text-white border-white bg-[#58c558]"
                    : "text-gray-500 border-gray-500"
                }`}
              >
                <PencilLine size={15} />
              </div>
            </div>
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
            {loading ? (
              <Skeleton />
            ) : currentData.length === 0 ? (
              <div className="flex justify-center items-center">
                Không tìm thấy bài test.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentData.map((test: FullTestItem) => (
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

export default FullTestSection;
