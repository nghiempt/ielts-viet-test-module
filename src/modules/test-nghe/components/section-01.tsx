// components/ReadingTestCollection.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";
import { ListeningService } from "@/services/listening";
import Link from "next/link";
import { ROUTES } from "@/utils/routes";

// Define interfaces for our data structures
interface ListeningTestItem {
  _id: string;
  type: string;
  parts: string[];
  name: string;
  thumbnail: string;
  time: number;
  created_at: string;
}

const ListeningSection: React.FC = () => {
  const COUNT = 6;

  // Filter categories
  const filterCategories = [
    // {
    //   title: "BỘ LỌC TRẠNG THÁI",
    //   options: [
    //     { id: "chua-lam", label: "Bài chưa làm" },
    //     { id: "dang-lam", label: "Bài đang làm" },
    //     { id: "da-lam", label: "Bài đã làm" },
    //   ],
    // },
    // {
    //   title: "DẠNG CÂU HỎI (15)",
    //   options: [
    //     { id: "summary", label: "Summary Completion" },
    //     { id: "true-false", label: "True/ False/ Not Given" },
    //     { id: "multiple-choice", label: "Multiple Choice" },
    //     { id: "matching-paragraph", label: "Matching Paragraph Information" },
    //     { id: "matching-name", label: "Matching Name" },
    //   ],
    // },
    {
      title: "SẮP XẾP THEO",
      options: [
        { id: "moi-nhat", label: "Mới nhất" },
        { id: "cu-nhat", label: "Cũ nhất" },
        // { id: "nhieu-luot", label: "Nhiều lượt làm nhất" },
        { id: "tu-a-z", label: "Từ A → Z" },
        { id: "tu-z-a", label: "Từ Z → A" },
      ],
    },
  ];

  const [listening, setListening] = useState<ListeningTestItem[]>([]);
  const [filteredListenings, setFilteredListenings] = useState<
    ListeningTestItem[]
  >([]);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currenPage, setCurrenPage] = useState<any>(1 as any);
  const [currenData, setCurrenData] = useState<any>([] as any);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const selectPage = (pageSelected: any) => {
    setCurrenPage(pageSelected);
    const start = (pageSelected - 1) * COUNT;
    const end = pageSelected * COUNT;
    setCurrenData(filteredListenings.slice(start, end));
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

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter((prev) => (prev === filterId ? "" : filterId));
  };

  const applyFilters = (data: ListeningTestItem[]) => {
    let filteredData = [...data];

    // Apply search filter
    if (searchQuery) {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting based on selected filter
    if (selectedFilter === "moi-nhat") {
      filteredData.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } else if (selectedFilter === "cu-nhat") {
      filteredData.sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    } else if (selectedFilter === "tu-a-z") {
      filteredData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedFilter === "tu-z-a") {
      filteredData.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filteredData;
  };

  const render = (data: ListeningTestItem[]) => {
    const filteredData = applyFilters(data);
    setFilteredListenings(filteredData);
    // setListening(filteredData);
    setTotalPage(Math.ceil(filteredData.length / COUNT));
    setCurrenPage(1);
    setCurrenData(filteredData.slice(0, COUNT));
  };

  const init = async () => {
    const res = await ListeningService.getAll();
    if (res && res.length > 0) {
      const filteredData = res.filter(
        (item: ListeningTestItem) => item.thumbnail != null
      );
      setListening(filteredData);
      render(filteredData);
    } else {
      setListening([]);
      setFilteredListenings([]);
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (listening.length > 0) {
      render(listening);
    }
  }, [selectedFilter, searchQuery]);

  // Test card component
  const TestCard: React.FC<{ test: ListeningTestItem }> = ({ test }) => {
    return (
      <div className="flex flex-col">
        <div className="relative mb-2">
          <Image
            src={test.thumbnail}
            alt={test.name}
            width={280}
            height={180}
            className="rounded-lg w-full object-cover h-40"
          />
          {/* {test.difficulty && (
            <div className="absolute top-2 left-2 bg-white text-gray-800 text-xs py-1 px-2 rounded">
              {test.difficulty}
            </div>
          )} */}
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="font-medium text-sm mb-1">{test.name}</h3>
            <p className="text-gray-500 text-xs mb-2">12K lượt làm</p>
          </div>
          <Link
            href={`${ROUTES.LISTENING_TEST}/${test._id}`}
            className="flex items-center text-sm text-[#FA812F]"
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

  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : true
  );

  useEffect(() => {
    // Only run this in the browser
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const expandedFilter = isMobile
    ? expanded
      ? filterCategories
      : filterCategories.slice(0, 1)
    : filterCategories;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Recommended tests section */}
      <section className="mb-12">
        <h2 className="text-xl font-medium mb-6">Gợi ý cho bạn</h2>

        {filteredListenings.length === 0 ? (
          <div className="flex justify-center items-center">
            Không tìm thấy bài nghe.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredListenings.slice(0, 4).map((test) => (
              <TestCard key={test._id} test={test} />
            ))}
          </div>
        )}
      </section>

      {/* Reading test collection section */}
      <section>
        <h2 className="text-xl font-medium mb-6">Kho Listening Test</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar with filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Tìm kiếm</h3>
              <div className="flex flex-row gap-3">
                <input
                  type="text"
                  placeholder="Search by name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 text-sm w-full"
                />
                <button className="bg-gray-700 hover:bg-gray-800 text-white px-3 rounded-full">
                  <Search size={16} />
                </button>
              </div>
            </div>

            {/* Filters with smooth transition */}
            <div
              className="overflow-hidden transition-all duration-700 ease-in-out"
              style={{
                maxHeight: isMobile
                  ? expanded
                    ? "1000px"
                    : "200px"
                  : "1000px",
              }}
            >
              {expandedFilter.map((category, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xs font-medium text-gray-500 mb-2">
                    {category.title}
                  </h3>
                  {category.options.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center py-1">
                      <input
                        type="checkbox"
                        id={option.id}
                        checked={selectedFilter === option.id}
                        onChange={() => handleFilterChange(option.id)}
                        className="h-4 w-4 text-[#FA812F]"
                      />
                      <label htmlFor={option.id} className="ml-2 text-sm">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex lg:hidden justify-center relative">
              {!expanded && (
                <div className="absolute bottom-[135%] left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
              )}
              <button
                className="text-black cursor-pointer font-semibold px-4 py-2 lg:py-4 lg:px-8 flex items-center gap-4 rounded-md"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? (
                  <>
                    <p className="text-[12px] lg:text-sm text-[#FA812F]">
                      Thu gọn
                    </p>
                    <div className="flex flex-col items-center gap-2">
                      <ChevronDown
                        size={16}
                        className="translate-y-1 updown-animation3 delay-0"
                        color="#FA812F"
                      />
                      <ChevronDown
                        size={16}
                        className="-translate-y-1 updown-animation4 delay-1"
                        color="#FA812F"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-[12px] lg:text-sm text-[#FA812F]">
                      Xem thêm
                    </p>
                    <div className="flex flex-col items-center gap-2">
                      <ChevronDown
                        size={16}
                        className="translate-y-1 updown-animation1 delay-0"
                        color="#FA812F"
                      />
                      <ChevronDown
                        size={16}
                        className="-translate-y-1 updown-animation2 delay-1"
                        color="#FA812F"
                      />
                    </div>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right side with test grid */}
          <div className="flex-1">
            {currenData.length === 0 ? (
              <div className="flex justify-center items-center">
                Không tìm thấy bài nghe.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currenData.map((test: ListeningTestItem, index: number) => (
                  <TestCard key={test._id} test={test} />
                ))}
              </div>
            )}

            {/* Pagination */}
            <nav
              className="flex flex-col items-start justify-center mt-4 p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
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

export default ListeningSection;
