import React, { useEffect, useState } from "react";
import FullTestCard from "./full-test-card";
import { FullTestService } from "@/services/full-test";

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

  const render = (data: FullTestItem[]) => {
    setFullTest(data);
  };

  const init = async () => {
    const res = await FullTestService.getAll();
    if (res && res.length > 0) {
      const filteredData = res.filter(
        (item: FullTestItem) => item.thumbnail != null
      );
      render(filteredData);
    } else {
      setFullTest([]);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="py-0 px-6 lg:px-0">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8 text-gray-800">
        Full Test
      </h1>

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
    </div>
  );
};

export default FullTestLayout;
