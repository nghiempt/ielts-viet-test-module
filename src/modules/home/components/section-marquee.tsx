'use client'

import React from "react";
import { DATA } from "@/utils/data";
import Image from "next/image";
import FastMarquee from "react-fast-marquee";

const Marquee = () => {
  const slogans = DATA.SLOGANS
  return (
    <section className="w-full bg-[rgb(var(--quaternary-rgb))] py-8 overflow-hidden">
      <div className="hidden lg:flex justify-center items-center gap-4 whitespace-nowrap">
        <FastMarquee loop={0} speed={70}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              key={`marquee-image-${index}`}
              src="https://res.cloudinary.com/farmcode/image/upload/v1737435811/ielts-viet/v8eul70ldtygnsrdohxa.png"
              alt="alt"
              className="w-52 h-24 object-cover object-center rounded-lg mr-10"
              width={1000}
              height={1000}
            />
          ))}
        </FastMarquee>
      </div>
      <div className="flex lg:hidden justify-center items-center gap-4 whitespace-nowrap">
        <FastMarquee loop={0} speed={100}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              key={`marquee-image-${index}`}
              src="https://res.cloudinary.com/farmcode/image/upload/v1737435811/ielts-viet/v8eul70ldtygnsrdohxa.png"
              alt="alt"
              className="w-32 h-20 object-cover rounded-lg mr-10"
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