// components/ReadingTestCollection.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { WritingService } from "@/services/writing";
import Link from "next/link";
import { ROUTES } from "@/utils/routes";
import Skeleton from "@/components/ui/skeleton";
import { CircleCheckBig, PlayIcon, RotateCw } from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { UserService } from "@/services/user";

interface WritingTestItem {
  _id: string;
  type: string;
  parts: string[];
  name: string;
  thumbnail: string;
  time: number;
  created_at: string;
}

interface CompletedTest {
  test_id: string;
  // Add other relevant fields from completed test if needed
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
  const [loading, setLoading] = useState<boolean>(true);
  const [completedTests, setCompletedTests] = useState<string[]>([]);

  const isLogin = Cookies.get("isLogin");
  const router = useRouter();

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
    setLoading(true);
    try {
      const res = await WritingService.getAll();
      if (res && res.length > 0) {
        const filteredData = res.filter(
          (item: WritingTestItem) => item.thumbnail != ""
        );
        setWritings(filteredData);
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
        setWritings([]);
        setFilteredWritings([]);
      }
    } catch (error) {
      console.error("Error initializing data:", error);
      setWritings([]);
      setFilteredWritings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const handleViewResult = async (testId: string) => {
    if (isLogin) {
      const response = await UserService.getCompleteTestById(testId, isLogin);

      const jsonData = JSON.stringify(response, null, 2);
      localStorage.setItem("writingTestAnswers", jsonData);
      router.push(`${ROUTES.TEST_WRITING_RESULT}/${testId}`);
    }
  };

  // Test card component
  const TestCard: React.FC<{ test: WritingTestItem }> = ({ test }) => {
    const isCompleted = completedTests.includes(test._id);
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
          {isLogin && isCompleted ? (
            <>
              <div className="grid grid-cols-12 items-center gap-3">
                <Link
                  href={`${ROUTES.WRITING_TEST}/${test._id}?isRetake=true`}
                  className="col-span-5 flex flex-row justify-center items-center gap-2 border border-[#0D5293] hover:bg-[#0D5293] hover:text-white rounded-lg px-3 py-1.5 group transition-all duration-200 ease-in-out"
                >
                  <RotateCw
                    size={15}
                    className="text-[#0D5293] group-hover:text-white transition-colors duration-200 ease-in-out"
                  />
                  <span className="text-sm mr-1 text-[#0D5293] group-hover:text-white">
                    Làm lại
                  </span>
                </Link>
                <div
                  onClick={() => handleViewResult(test._id)}
                  className="cursor-pointer col-span-7 flex flex-row justify-center items-center gap-2 border border-[#58c558] hover:bg-[#58c558] hover:text-white rounded-lg px-3 py-1.5 group transition-all duration-200 ease-in-out"
                >
                  <CircleCheckBig
                    size={15}
                    className="text-[#58c558] group-hover:text-white transition-colors duration-200 ease-in-out"
                  />
                  <span className="text-sm mr-1 text-[#58c558] group-hover:text-white">
                    Xem kết quả
                  </span>
                </div>
              </div>
            </>
          ) : (
            <Link
              href={`${ROUTES.WRITING_TEST}/${test._id}`}
              className="flex items-center text-md lg:text-sm"
            >
              <div className="flex flex-row items-center gap-2 border border-[#FA812F] hover:bg-[#FA812F] hover:text-white rounded-lg px-3 py-1.5 group transition-all duration-200 ease-in-out">
                <div className="p-1 border border-[#FA812F] group-hover:border-white rounded-full transition-all duration-200 ease-in-out text-[#FA812F] group-hover:text-white">
                  <PlayIcon
                    size={12}
                    fill="#FA812F"
                    className="group-hover:fill-white transition-colors duration-200 ease-in-out"
                  />
                </div>
                <span className="text-sm mr-1 text-[#FA812F] group-hover:text-white">
                  Làm bài
                </span>
              </div>
            </Link>
          )}
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
            ) : currenData.length === 0 ? (
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
