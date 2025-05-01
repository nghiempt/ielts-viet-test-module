"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import FastMarquee from "react-fast-marquee";
import { SliderService } from "@/services/slider";

export interface Slider {
  _id: string;
  image: string;
  created_at: string;
}

const Marquee = () => {
  const [data, setData] = React.useState<Slider[]>([]);

  const init = async () => {
    try {
      const res = await SliderService.getAll();

      if (Array.isArray(res) && res.length > 0) {
        setData(res);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setData([]);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <section className="w-full py-0 lg:py-8 overflow-hidden">
      <div className="hidden lg:flex justify-center items-center gap-4 whitespace-nowrap">
        <FastMarquee loop={0} speed={70}>
          {data?.map((item: Slider, index: number) => (
            <Image
              key={`marquee-image-${index}`}
              src={item?.image}
              alt="alt"
              className="w-80 h-56 object-cover object-center rounded-lg mr-10"
              width={1000}
              height={1000}
            />
          ))}
        </FastMarquee>
      </div>
      <div className="flex lg:hidden justify-center items-center gap-4 whitespace-nowrap">
        <FastMarquee loop={0} speed={70}>
          {data?.map((item: Slider, index: number) => (
            <Image
              key={`marquee-image-${index}`}
              src={item?.image}
              alt="alt"
              className="w-40 h-28 object-cover rounded-lg mr-10"
              width={1000}
              height={1000}
            />
          ))}
        </FastMarquee>
      </div>
    </section>
  );
};

export default Marquee;
