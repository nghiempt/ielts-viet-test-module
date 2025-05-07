import React, { useEffect, useState } from "react";
import FullTestCard from "./full-test-card";
import { FullTestService } from "@/services/full-test";
import SkeletonFullTest from "./components/skeleton-full-test";
import Link from "next/link";
import { ROUTES } from "@/utils/routes";
import { ChevronDown } from "lucide-react";

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

const FullTestLayout: React.FC = () => {
  const [fullTest, setFullTest] = useState<FullTestItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const render = (data: FullTestItem[]) => {
    setFullTest(data);
  };

  const init = async () => {
    setIsLoading(true);
    const res = await FullTestService.getAll();
    if (res && res.length > 0) {
      const filteredData = res.filter(
        (item: FullTestItem) => item.thumbnail != null
      );
      render(filteredData);
      setIsLoading(false);
    } else {
      setFullTest([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="py-0">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8 text-gray-800">
        Full Test
      </h1>
      {isLoading ? (
        <SkeletonFullTest />
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5">
            {fullTest?.slice(0, 2)?.map((item: FullTestItem, index: number) => (
              <FullTestCard
                key={index}
                title={item?.name}
                testCount={3}
                viewCount={20}
                description={item?.description}
                thumbnail={item?.thumbnail}
                id={item?._id}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-center relative">
            <Link
              href={`${ROUTES.FULLTEST_HOME}`}
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

export default FullTestLayout;
