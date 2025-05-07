import React, { useEffect, useState } from "react";
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
import { FullTestService } from "@/services/full-test";
import { usePathname } from "next/navigation";
import { ReadingService } from "@/services/reading";
import { ListeningService } from "@/services/listening";
import { WritingService } from "@/services/writing";
import { ROUTES } from "@/utils/routes";

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

interface WritingDetail {
  _id: string;
  type: string;
  parts: string[];
  name: string;
  thumbnail: string;
  time: number;
  created_at: string;
}
interface ListenDetail {
  _id: string;
  type: string;
  parts: string[];
  name: string;
  thumbnail: string;
  time: number;
  created_at: string;
}
interface ReadingDetail {
  _id: string;
  type: string;
  parts: string[];
  name: string;
  thumbnail: string;
  time: number;
  created_at: string;
}

export default function Section01() {
  const pathname = usePathname();
  const [fullTestDetail, setFullTestDetail] = useState<FullTestItem | null>(
    null
  );
  const [fullTests, setFullTests] = useState<FullTestItem[]>([]);
  const [reading, setReading] = useState<ReadingDetail | null>(null);
  const [listening, setListening] = useState<ListenDetail | null>(null);
  const [writing, setWriting] = useState<WritingDetail | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const render = (data: FullTestItem[]) => {
    setFullTests(data);
  };

  // Detect mobile device based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const init = async () => {
    const segments = pathname.split("/").filter(Boolean);
    const id = segments[segments.length - 1];

    try {
      const res = await FullTestService.getFullTestById(id);

      if (!res) {
        throw new Error("Full test data not found");
      }

      const resReading = await ReadingService.getReadingById(res.r_id);
      const resListening = await ListeningService.getListeningById(res.l_id);
      const resWriting = await WritingService.getWritingById(res.w_id);

      setFullTestDetail(res || null);
      setReading(resReading || null);
      setListening(resListening || null);
      setWriting(resWriting || null);
    } catch (error) {
      console.error("Error initializing reading test:", error);
      setFullTestDetail(null);
      setReading(null);
      setListening(null);
      setWriting(null);
    }

    try {
      const res = await FullTestService.getAll();

      if (!res || !Array.isArray(res) || res.length === 0) {
        setFullTests([]);
        return;
      }

      const filteredData = res.filter(
        (item: FullTestItem) => item && item.thumbnail != null
      );

      render(filteredData);
    } catch (error) {
      console.error("Error fetching all tests:", error);
      setFullTests([]);
    }
  };

  useEffect(() => {
    init();
  }, []);

  // Handler for opening test in new window on mobile
  const handleTestClick = (url: string) => {
    if (isMobile) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="w-full mx-auto px-6">
      <main>
        {/* Header */}
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:flex-row mb-4">
          <div className="w-full lg:w-40 h-full mr-0 lg:mr-4 mb-5 lg:mb-0">
            <Image
              src={fullTestDetail?.thumbnail || IMAGES.THUMBNAIL}
              alt=""
              width={280}
              height={180}
              className="rounded-lg w-full object-cover h-full"
            />
          </div>
          <div className="flex flex-col justify-between items-start">
            <div className="flex flex-col lg:items-start justify-center items-center">
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                {fullTestDetail?.name}
              </h1>
              <div className="flex justify-center lg:justify-start items-center text-sm text-gray-600">
                <span>8 bài tests</span>
                <span className="mx-2">•</span>
                <span>74,734 lượt làm</span>
              </div>
            </div>
            <div className="mt-1 flex justify-center lg:justify-start items-center w-full">
              <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-sm flex items-center">
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
          {fullTestDetail?.description}
        </p>

        {/* Test Sections */}
        <div className="mb-8 w-full">
          {/* Desktop Header */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-4 mb-4 text-base lg:text-lg border-b border-gray-200 pb-2">
            <div className="font-bold text-gray-800 text-center">BÀI TEST</div>
            <div className="font-bold text-gray-800 text-center">READING</div>
            <div className="font-bold text-gray-800 text-center">LISTENING</div>
            <div className="font-bold text-gray-800 text-center">WRITING</div>
          </div>

          {/* Tests */}
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 items-center py-3 border-b border-gray-200">
            {/* Test ID */}
            <div className="w-full text-center mb-4 lg:mb-0">
              <div className="font-medium text-lg lg:text-base">Full Test</div>
            </div>

            {/* Mobile: Horizontal Scroll, Desktop: Grid */}
            <div className="w-full lg:col-span-3 flex overflow-x-auto lg:overflow-visible gap-4 lg:grid lg:grid-cols-3 pb-4 lg:pb-0 px-0 mx-0 snap-x snap-mandatory scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 scroll-bar-style">
              {/* Reading */}
              <div className="flex-shrink-0 flex justify-center items-center w-32 lg:w-auto">
                {reading ? (
                  <div className="flex flex-col justify-center items-center gap-1">
                    <div className="border-4 border-gray-200 p-3 rounded-full">
                      <BookOpenText />
                    </div>
                    {isMobile ? (
                      <button
                        onClick={() =>
                          handleTestClick(
                            `${ROUTES.READING_TEST}/${fullTestDetail?.r_id}`
                          )
                        }
                        className="flex items-center justify-center py-2 px-4 mt-4 rounded-lg border border-gray-300 text-black hover:border-[#FA812F] w-full text-sm font-medium"
                      >
                        <div className="p-1 rounded-full bg-white flex items-center justify-center mr-2 border-2 border-[#FA812F]">
                          <PlayIcon color="#FA812F" fill="#FA812F" size={18} />
                        </div>
                        <span>Làm bài</span>
                      </button>
                    ) : (
                      <Link
                        href={`${ROUTES.READING_TEST}/${fullTestDetail?.r_id}`}
                        target="_blank"
                        className="flex items-center justify-center py-2 px-4 mt-4 rounded-lg border border-gray-300 text-black hover:border-[#FA812F] w-full text-sm font-medium"
                      >
                        <div className="p-1 rounded-full bg-white flex items-center justify-center mr-2 border-2 border-[#FA812F]">
                          <PlayIcon color="#FA812F" fill="#FA812F" size={18} />
                        </div>
                        <span>Làm bài</span>
                      </Link>
                    )}
                  </div>
                ) : (
                  <div className="h-[104px] lg:h-[120px]" /> // Placeholder for empty cell
                )}
              </div>

              {/* Listening */}
              <div className="flex-shrink-0 flex justify-center items-center w-32 lg:w-auto">
                {listening ? (
                  <div className="flex flex-col justify-center items-center gap-1">
                    <div className="border-4 border-gray-200 p-3 rounded-full">
                      <Headphones />
                    </div>
                    {isMobile ? (
                      <button
                        onClick={() =>
                          handleTestClick(
                            `${ROUTES.LISTENING_TEST}/${fullTestDetail?.l_id}`
                          )
                        }
                        className="flex items-center justify-center py-2 px-4 mt-4 rounded-lg border border-gray-300 text-black hover:border-[#FA812F] w-full text-sm font-medium"
                      >
                        <div className="p-1 rounded-full bg-white flex items-center justify-center mr-2 border-2 border-[#FA812F]">
                          <PlayIcon color="#FA812F" fill="#FA812F" size={18} />
                        </div>
                        <span>Làm bài</span>
                      </button>
                    ) : (
                      <Link
                        href={`${ROUTES.LISTENING_TEST}/${fullTestDetail?.l_id}`}
                        target="_blank"
                        className="flex items-center justify-center py-2 px-4 mt-4 rounded-lg border border-gray-300 text-black hover:border-[#FA812F] w-full text-sm font-medium"
                      >
                        <div className="p-1 rounded-full bg-white flex items-center justify-center mr-2 border-2 border-[#FA812F]">
                          <PlayIcon color="#FA812F" fill="#FA812F" size={18} />
                        </div>
                        <span>Làm bài</span>
                      </Link>
                    )}
                  </div>
                ) : (
                  <div className="h-[104px] lg:h-[120px]" /> // Placeholder for empty cell
                )}
              </div>

              {/* Writing */}
              <div className="flex-shrink-0 flex justify-center items-center w-32 lg:w-auto">
                {writing ? (
                  <div className="flex flex-col justify-center items-center gap-1">
                    <div className="border-4 border-gray-200 p-3 rounded-full">
                      <PenLine />
                    </div>
                    {isMobile ? (
                      <button
                        onClick={() =>
                          handleTestClick(
                            `${ROUTES.WRITING_TEST}/${fullTestDetail?.w_id}`
                          )
                        }
                        className="flex items-center justify-center py-2 px-4 mt-4 rounded-lg border border-gray-300 text-black hover:border-[#FA812F] w-full text-sm font-medium"
                      >
                        <div className="p-1 rounded-full bg-white flex items-center justify-center mr-2 border-2 border-[#FA812F]">
                          <PlayIcon color="#FA812F" fill="#FA812F" size={18} />
                        </div>
                        <span>Làm bài</span>
                      </button>
                    ) : (
                      <Link
                        href={`${ROUTES.WRITING_TEST}/${fullTestDetail?.w_id}`}
                        target="_blank"
                        className="flex items-center justify-center py-2 px-4 mt-4 rounded-lg border border-gray-300 text-black hover:border-[#FA812F] w-full text-sm font-medium"
                      >
                        <div className="p-1 rounded-full bg-white flex items-center justify-center mr-2 border-2 border-[#FA812F]">
                          <PlayIcon color="#FA812F" fill="#FA812F" size={18} />
                        </div>
                        <span>Làm bài</span>
                      </Link>
                    )}
                  </div>
                ) : (
                  <div className="h-[104px] lg:h-[120px]" /> // Placeholder for empty cell
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Book Series */}
        <h2 className="text-xl lg:text-3xl font-bold mb-4">
          Các bộ đề test liên quan
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {fullTests.slice(0, 4).map((item) => (
            <div
              key={item._id}
              className="grid grid-rows-1 gap-5 rounded-lg overflow-hidden"
            >
              <div className="col-span-12 lg:col-span-4 p-0 w-full h-full flex items-center justify-center">
                <div className="w-full h-full relative">
                  <Image
                    src={item?.thumbnail}
                    alt={`IELTS Test ${item?._id}`}
                    width={1000}
                    height={1000}
                    className="object-cover rounded-lg h-full w-full"
                  />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8 flex-1 p-0">
                <h2 className="text-lg lg:text-xl font-semibold">
                  {item?.name}
                </h2>
                <p className="text-gray-600 mt-1 text-sm">
                  20K bài tests • 16K lượt làm
                </p>
                <Link href={`${ROUTES.FULLTEST_DETAIL}/${item?._id}`}>
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
