// components/IELTSTestLayout.tsx
"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import "@/styles/contact.css";
import { ListeningService } from "@/services/listening";
import ListeningTestCard from "./listening-card";
import Link from "next/link";
import { ROUTES } from "@/utils/routes";
import SkeletonListening from "./components/skeleton-listening";

interface ListeningTestItem {
  _id: string;
  type: string;
  parts: string[];
  name: string;
  thumbnail: string;
  time: number;
  created_at: string;
}

const ListeningTest: React.FC = () => {
  const [listenings, setListenings] = useState<ListeningTestItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const render = (data: any) => {
    setListenings(data);
  };

  const init = async () => {
    setLoading(true);
    const res = await ListeningService.getAll();
    if (res && res.length > 0) {
      const filteredData = res.filter(
        (item: ListeningTestItem) => item.thumbnail != null
      );
      render(filteredData);
      setLoading(false);
    } else {
      setListenings([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="py-0">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8 text-black">
        Listening Test
      </h1>
      {loading ? (
        <SkeletonListening />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {listenings
              ?.slice(0, 4)
              ?.map((item: ListeningTestItem, index: number) => (
                <ListeningTestCard
                  key={index}
                  id={item?._id}
                  title={item?.name}
                  testCount={11}
                  attemptsCount={113}
                  coverImage={item?.thumbnail}
                />
              ))}
          </div>
          <div className="mt-6 flex justify-center relative">
            <Link
              href={`${ROUTES.LISTENING_HOME}`}
              className="text-[#FA812F] cursor-pointer font-semibold px-4 py-2 lg:py-4 lg:px-8 flex items-center gap-2 rounded-md"
            >
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
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ListeningTest;
