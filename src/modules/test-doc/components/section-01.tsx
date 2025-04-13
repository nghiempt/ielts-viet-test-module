// components/ReadingTestCollection.tsx
import React, { useState } from "react";
import Image from "next/image";
import { Search, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import Link from "next/link";
import { IMAGES } from "@/utils/images";

// Define interfaces for our data structures
interface ReadingTest {
  id: string;
  title: string;
  viewCount: number;
  difficulty: string;
  imageUrl: string;
}

interface FilterOption {
  id: string;
  label: string;
}

const ReadingSection: React.FC = () => {
  // Recommended tests data
  const recommendedTests: ReadingTest[] = [
    {
      id: "1",
      title: "Why zoos are good",
      viewCount: 1400,
      difficulty: "13 câu",
      imageUrl: "/images/zoo.jpg",
    },
    {
      id: "2",
      title: "The impact of the Potato",
      viewCount: 770,
      difficulty: "13 câu",
      imageUrl: "/images/potato.jpg",
    },
    {
      id: "3",
      title: "Ancient Chinese Chariots",
      viewCount: 441,
      difficulty: "13 câu",
      imageUrl: "/images/chariot.jpg",
    },
    {
      id: "4",
      title: "Stealth Forces in Weight Loss",
      viewCount: 470,
      difficulty: "14 câu",
      imageUrl: "/images/weight-scale.jpg",
    },
  ];

  // Reading test collection data
  const readingTests: ReadingTest[] = [
    {
      id: "5",
      title: "Urban farming",
      viewCount: 154,
      difficulty: "",
      imageUrl: "/images/urban-farming.jpg",
    },
    {
      id: "6",
      title: "Forest management in Pennsylvania, USA",
      viewCount: 98,
      difficulty: "",
      imageUrl: "/images/forest.jpg",
    },
    {
      id: "7",
      title: "Conquering Earth's space junk problem",
      viewCount: 96,
      difficulty: "14 câu",
      imageUrl: "/images/space-junk.jpg",
    },
    {
      id: "8",
      title: "Stonehenge",
      viewCount: 71,
      difficulty: "",
      imageUrl: "/images/stonehenge.jpg",
    },
    {
      id: "9",
      title: "Living with artificial intelligence",
      viewCount: 93,
      difficulty: "",
      imageUrl: "/images/ai.jpg",
    },
    {
      id: "10",
      title: "An ideal city",
      viewCount: 86,
      difficulty: "14 câu",
      imageUrl: "/images/city.jpg",
    },
    {
      id: "11",
      title: "Materials to take us beyond concrete",
      viewCount: 36,
      difficulty: "",
      imageUrl: "/images/materials.jpg",
    },
    {
      id: "12",
      title: "The steam car",
      viewCount: 49,
      difficulty: "",
      imageUrl: "/images/steam-car.jpg",
    },
    {
      id: "13",
      title: "The case for mixed-ability classes",
      viewCount: 36,
      difficulty: "",
      imageUrl: "/images/classroom.jpg",
    },
    {
      id: "14",
      title: "Green roofs",
      viewCount: 46,
      difficulty: "",
      imageUrl: "/images/green-roofs.jpg",
    },
    {
      id: "15",
      title:
        "Alfred Wegener: science, exploration and the theory of continental drift",
      viewCount: 36,
      difficulty: "13 câu",
      imageUrl: "/images/earth.jpg",
    },
    {
      id: "16",
      title: "The growth mindset",
      viewCount: 45,
      difficulty: "",
      imageUrl: "/images/mindset.jpg",
    },
    {
      id: "17",
      title: "How tennis rackets have changed",
      viewCount: 71,
      difficulty: "13 câu",
      imageUrl: "/images/tennis.jpg",
    },
    {
      id: "18",
      title: "The pirates of the ancient Mediterranean",
      viewCount: 60,
      difficulty: "13 câu",
      imageUrl: "/images/pirates.jpg",
    },
    {
      id: "19",
      title: "The persistence and peril of misinformation",
      viewCount: 47,
      difficulty: "14 câu",
      imageUrl: "/images/misinformation.jpg",
    },
  ];

  // Filter categories
  const filterCategories = [
    {
      title: "BỘ LỌC TRẠNG THÁI",
      options: [
        { id: "chua-lam", label: "Bài chưa làm" },
        { id: "dang-lam", label: "Bài đang làm" },
        { id: "da-lam", label: "Bài đã làm" },
      ],
    },
    {
      title: "DẠNG CÂU HỎI (15)",
      options: [
        { id: "summary", label: "Summary Completion" },
        { id: "true-false", label: "True/ False/ Not Given" },
        { id: "multiple-choice", label: "Multiple Choice" },
        { id: "matching-paragraph", label: "Matching Paragraph Information" },
        { id: "matching-name", label: "Matching Name" },
      ],
    },
    {
      title: "SẮP XẾP THEO",
      options: [
        { id: "moi-nhat", label: "Mới nhất" },
        { id: "cu-nhat", label: "Cũ nhất" },
        { id: "nhieu-luot", label: "Nhiều lượt làm nhất" },
        { id: "tu-a-z", label: "Từ A → Z" },
        { id: "tu-z-a", label: "Từ Z → A" },
      ],
    },
  ];

  // Test card component
  const TestCard: React.FC<{ test: ReadingTest }> = ({ test }) => {
    return (
      <div className="flex flex-col">
        <div className="relative mb-2">
          <Image
            src={IMAGES.THUMBNAIL}
            alt={test.title}
            width={280}
            height={180}
            className="rounded-lg w-full object-cover h-40"
          />
          {test.difficulty && (
            <div className="absolute top-2 left-2 bg-white text-gray-800 text-xs py-1 px-2 rounded">
              {test.difficulty}
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="font-medium text-sm mb-1">{test.title}</h3>
            <p className="text-gray-500 text-xs mb-2">
              {test.viewCount} lượt làm
            </p>
          </div>
          <button className="flex items-center text-sm text-[#FA812F]">
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
          </button>
        </div>
      </div>
    );
  };

  const [expanded, setExpanded] = useState(false);
  const expandedFilter = expanded
    ? filterCategories
    : filterCategories.slice(0, 1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Recommended tests section */}
      <section className="mb-12">
        <h2 className="text-xl font-medium mb-6">Gợi ý cho bạn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommendedTests.map((test) => (
            <TestCard key={test.id} test={test} />
          ))}
        </div>
      </section>

      {/* Reading test collection section */}
      <section>
        <h2 className="text-xl font-medium mb-6">Kho Reading Test</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar with filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Tìm kiếm</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-300 rounded-l p-2 text-sm w-full"
                />
                <button className="bg-gray-700 hover:bg-gray-800 text-white px-3 rounded-r">
                  <Search size={16} />
                </button>
              </div>
            </div>

            {/* Filters with smooth transition */}
            <div
              className="overflow-hidden transition-all duration-700 ease-in-out"
              style={{
                maxHeight: expanded ? "1000px" : "200px",
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {readingTests.map((test) => (
                <TestCard key={test.id} test={test} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center bg-[#FA812F] text-white rounded-full">
                  1
                </span>
                {[2, 3, 4, 5].map((page) => (
                  <span
                    key={page}
                    className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-full cursor-pointer"
                  >
                    {page}
                  </span>
                ))}
                <span className="mx-2">...</span>
                <span className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-full cursor-pointer">
                  20
                </span>
                <span className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-full cursor-pointer">
                  <ChevronRight size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadingSection;
