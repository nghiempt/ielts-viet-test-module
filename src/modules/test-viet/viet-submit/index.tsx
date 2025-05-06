"use client";

import Image from "next/image";
import gif from "../../../../public/lucky.gif";
import Link from "next/link";
import { ROUTES } from "@/utils/routes";
import { ArrowRight } from "lucide-react";

export default function WritingSubmission() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* <Header /> */}
      <div className="w-full flex justify-center items-center mb-20">
        <Image
          src={gif}
          alt=""
          width={1000}
          height={1000}
          className="w-1/3 h-full"
        />
      </div>
      <div className="font-medium text-xl">
        Bài viết của bạn đã nộp thành công và đang chờ chấm điểm.
      </div>
      <div className="font-medium text-xl">
        Điểm của bạn sẽ được phản hồi qua Email trong 2-3 ngày tới nhé!
      </div>
      <Link
        href={ROUTES.HOME}
        target="_blank"
        className="mt-3 text-lg text-[#FA812F] font-semibold flex flex-row gap-2 items-center"
      >
        <span className="hover:underline">Trang chủ</span>{" "}
        <ArrowRight color="#FA812F" />
      </Link>
      {/* <Footer /> */}
    </div>
  );
}
