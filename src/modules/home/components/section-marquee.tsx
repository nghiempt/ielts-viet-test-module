'use client'

import React from "react";
import Image from "next/image";
import FastMarquee from "react-fast-marquee";

const Marquee = () => {

  const myArray = [
    "https://res.cloudinary.com/farmcode/image/upload/v1737486040/ielts-viet/kud5jqx64b0fhr4agwp5.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1737486040/ielts-viet/wfrjklqjato60wjicrvo.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1737486039/ielts-viet/gz4p8bu280kvelkvrb6n.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1737486038/ielts-viet/umnyoydgytlqbdtudjbt.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1737486038/ielts-viet/gwpwwwlvavk2fnqvxoq4.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1737486037/ielts-viet/hgio2d2k9zx6xhc8pens.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1737486037/ielts-viet/vch5bl4ewxhm0noznds6.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1737486036/ielts-viet/qhwvxwunh9gnvbjcpo8h.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1737486036/ielts-viet/ilfx0mtmum5wu1cuq03z.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1737486036/ielts-viet/miqflc00vndtfns6katm.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1737486036/ielts-viet/mplejel4nxfszo5h22bb.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1737486023/ielts-viet/b29don50hqhvfvbj5t0k.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1737486000/ielts-viet/cfjurrtf2224ujouqvyv.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1737483656/ielts-viet/laf9k72mi5e4bac3rxds.jpg",
    "https://res.cloudinary.com/farmcode/image/upload/v1737442359/ielts-viet/pai7wqhbz8t9xwodyzdy.png",
    "https://res.cloudinary.com/farmcode/image/upload/v1737442215/ielts-viet/x3vh4zoqu4wrx64ua4ux.png",
    "https://res.cloudinary.com/farmcode/image/upload/v1737435779/ielts-viet/p2rb9bpcdzvnelvnad0j.png",
    "https://res.cloudinary.com/farmcode/image/upload/v1737435811/ielts-viet/v8eul70ldtygnsrdohxa.png",
    "https://res.cloudinary.com/farmcode/image/upload/v1737435839/ielts-viet/pxyfd84me3bvelcvjbw0.png",
    "https://res.cloudinary.com/farmcode/image/upload/v1736620702/ielts-viet/website-thumbnail_uqdu6b.png",
  ];

  function getRandomItem(array: any) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  return (
    <section className="w-full py-8 overflow-hidden">
      <div className="hidden lg:flex justify-center items-center gap-4 whitespace-nowrap">
        <FastMarquee loop={0} speed={70}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              key={`marquee-image-${index}`}
              src={getRandomItem(myArray)}
              alt="alt"
              className="w-80 h-56 object-cover object-center rounded-lg mr-10"
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
              src={getRandomItem(myArray)}
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