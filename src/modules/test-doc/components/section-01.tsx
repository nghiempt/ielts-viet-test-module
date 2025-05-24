// components/ReadingTestCollection.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/utils/images";
import { ReadingService } from "@/services/reading";
import Link from "next/link";
import { ROUTES } from "@/utils/routes";
import Skeleton from "../../../components/ui/skeleton";
import Cookies from "js-cookie";
import {
  ChevronDown,
  ChevronUp,
  CircleCheckBig,
  PlayIcon,
  RotateCw,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { UserService } from "@/services/user";

interface ReadingTestItem {
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

const ReadingSection: React.FC = () => {
  const [readings, setReadings] = useState<ReadingTestItem[]>([]);
  const [filteredReadings, setFilteredReadings] = useState<ReadingTestItem[]>(
    []
  );
  const [currentData, setCurrentData] = useState<ReadingTestItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isFull, setIsFull] = useState<boolean>(false);
  const [completedTests, setCompletedTests] = useState<string[]>([]);

  const isLogin = Cookies.get("isLogin");
  const router = useRouter();

  const render = (data: ReadingTestItem[]) => {
    setFilteredReadings(data);
    setCurrentData(data);
  };

  const init = async () => {
    setLoading(true);
    try {
      const res = await ReadingService.getAll();
      if (res && res.length > 0) {
        const filteredData = res.filter(
          (item: ReadingTestItem) => item.thumbnail != ""
        );
        setReadings(filteredData);
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
        setReadings([]);
        setFilteredReadings([]);
      }
    } catch (error) {
      console.error("Error initializing data:", error);
      setReadings([]);
      setFilteredReadings([]);
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
      localStorage.setItem("readingTestAnswers", jsonData);
      router.push(`${ROUTES.READING_STATISTIC}/${testId}`);
    }
  };

  const TestCard: React.FC<{ test: ReadingTestItem }> = ({ test }) => {
    const isCompleted = completedTests.includes(test._id);
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
            <h3 className="font-medium text-xl lg:text-base mb-1">
              {test.name}
            </h3>
            <p className="text-gray-500 text-sm lg:text-xs mb-2">
              20K lượt làm
            </p>
          </div>
          <div className="flex flex-row items-center gap-3">
            {isLogin && isCompleted ? (
              <>
                <div className="grid grid-cols-12 items-center gap-3 w-3/4 lg:w-full">
                  <Link
                    href={`${ROUTES.READING_TEST}/${test._id}?isRetake=true`}
                    className="col-span-5 sm:col-span-12 md:col-span-5 flex flex-row justify-center items-center gap-2 border border-[#0D5293] hover:bg-[#0D5293] hover:text-white rounded-lg px-3 py-1.5 group transition-all duration-200 ease-in-out"
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
                    className="cursor-pointer col-span-7 sm:col-span-12 md:col-span-7 flex flex-row justify-center items-center gap-2 border border-[#58c558] hover:bg-[#58c558] hover:text-white rounded-lg px-3 py-1.5 group transition-all duration-200 ease-in-out"
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
              <>
                <Link
                  href={`${ROUTES.READING_TEST}/${test._id}`}
                  className="flex items-center text-md lg:text-sm"
                >
                  <div className="w-full flex flex-row justify-center items-center gap-2 border border-[#FA812F] hover:bg-[#FA812F] hover:text-white rounded-lg px-3 py-1.5 group transition-all duration-200 ease-in-out">
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
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  const filteredData = isFull ? currentData : currentData.slice(0, 12);

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0">
      <section>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            {loading ? (
              <Skeleton />
            ) : currentData.length === 0 ? (
              <div className="flex justify-center items-center">
                Không tìm thấy bài đọc.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredData.map((test: ReadingTestItem) => (
                  <TestCard key={test._id} test={test} />
                ))}
              </div>
            )}
            {currentData.length > 12 &&
              (!isFull ? (
                <div
                  onClick={() => setIsFull(true)}
                  className="mt-6 flex justify-center relative"
                >
                  <div className="text-[#FA812F] cursor-pointer font-semibold px-4 py-2 lg:py-4 lg:px-8 flex items-center gap-2 rounded-md">
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
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setIsFull(false)}
                  className="mt-6 flex justify-center relative"
                >
                  <div className="text-[#FA812F] cursor-pointer font-semibold px-4 py-2 lg:py-4 lg:px-8 flex items-center gap-2 rounded-md">
                    <>
                      <p className="text-[14px] lg:text-base">Thu gọn</p>{" "}
                      <div className="flex flex-col items-center gap-2">
                        <ChevronDown
                          size={16}
                          className="translate-y-1 updown-animation3 delay-0"
                        />
                        <ChevronDown
                          size={16}
                          className="-translate-y-1 updown-animation4 delay-1"
                        />
                      </div>
                    </>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadingSection;
