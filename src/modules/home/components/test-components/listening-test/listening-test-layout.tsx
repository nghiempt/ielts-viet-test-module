// components/IELTSTestLayout.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/utils/images";
import { ChevronDown, ChevronUp } from "lucide-react";
import "@/styles/contact.css";
import { ListeningService } from "@/services/listening";
import ListeningTestCard from "./listening-card";

interface ListeningTestItem {
  id: number;
  title: string;
  testCount: number;
  attemptCount: string;
  bgColor: string;
  imagePath: string;
}

const ListeningTest: React.FC = () => {
  const [listenings, setListenings] = useState<any[]>([]);

  const render = (data: any) => {
    setListenings(data);
  };

  const init = async () => {
    const res = await ListeningService.getAll();
    if (res && res?.length > 0) {
      render(res);
    } else {
      setListenings([]);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="py-0 px-6 lg:px-0">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8 text-black">
        Listening Test
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {listenings.slice(0, 6).map((item, index) => (
          <ListeningTestCard
            key={index}
            title={item?.name}
            testCount={11}
            attemptsCount={113}
            coverImage={item?.thumbnail}
          />
        ))}
      </div>
      <div className="mt-6 flex justify-center relative">
        <button className="text-[#FA812F] cursor-pointer font-semibold px-4 py-2 lg:py-4 lg:px-8 flex items-center gap-2 rounded-md">
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
        </button>
      </div>
    </div>
  );
};

export default ListeningTest;
