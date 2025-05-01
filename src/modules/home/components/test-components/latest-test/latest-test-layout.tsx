// components/TestCard.tsx
import React, { useEffect, useState } from "react";
import LatestTestCard from "./test-card";
import "@/styles/contact.css";
import Link from "next/link";
import { LatestService } from "@/services/latest";
import { ROUTES } from "@/utils/routes";

interface LatestTestItem {
  _id: string;
  type: string;
  parts: string[];
  name: string;
  thumbnail: string;
  time: number;
  created_at: string;
}

const LatestTestLayout = () => {
  const [latest, setLatest] = useState<LatestTestItem[]>([]);

  const render = (data: any) => {
    setLatest(data);
  };

  const init = async () => {
    const res = await LatestService.getAll();
    if (res && res.length > 0) {
      const filteredData = res.filter(
        (item: LatestTestItem) => item.thumbnail != null
      );
      const shuffledData = filteredData.sort(() => Math.random() - 0.5);
      const randomData = shuffledData.slice(
        0,
        Math.min(5, shuffledData.length)
      );

      render(randomData);
      render(filteredData);
    } else {
      setLatest([]);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="w-80 sm:w-96 lg:w-full">
      <div className="ml-0 lg:ml-0 mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-black">
          Bài test mới nhất
        </h1>
      </div>
      <div className="flex md:grid overflow-x-auto md:overflow-visible gap-4 md:gap-6 md:grid-cols-3 pb-4 md:pb-0 px-0 mx-0 snap-x snap-mandatory scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 scroll-bar-style h-56 lg:h-full">
        {latest?.slice(0, 6)?.map((item: LatestTestItem, index: number) => (
          <Link
            key={index}
            href={
              item.type === "R"
                ? `${ROUTES.READING_TEST}/${item?._id}`
                : item.type === "L"
                ? `${ROUTES.LISTENING_TEST}/${item?._id}`
                : `${ROUTES.WRITING_TEST}/${item?._id}`
            }
          >
            <LatestTestCard
              testName={item?.name}
              attempts={19}
              totalQuestions={40}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestTestLayout;
