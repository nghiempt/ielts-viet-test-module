// components/TestCard.tsx
import React from "react";
import LatestTestCard from "./test-card";
import "@/styles/contact.css";
import Link from "next/link";

const LatestTestLayout = () => {
  return (
    <div className="w-80 sm:w-96 lg:w-full">
      <div className="ml-0 lg:ml-0 mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-black">
          Bài test mới nhất
        </h1>
      </div>
      <div className="flex md:grid overflow-x-auto md:overflow-visible gap-4 md:gap-6 md:grid-cols-3 pb-4 md:pb-0 px-0 mx-0 snap-x snap-mandatory scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 scroll-bar-style">
        <Link href="/listening-test">
          <LatestTestCard
            testName="CAM16"
            type="Listening"
            testNumber={4}
            attempts={19}
            totalQuestions={40}
          />
        </Link>
        <Link href="/reading-test">
          <LatestTestCard
            testName="CAM15"
            type="Reading"
            testNumber={4}
            attempts={20}
            totalQuestions={40}
          />
        </Link>
        <Link href="/writing-test">
          <LatestTestCard
            testName="CAM15"
            type="Listening"
            testNumber={4}
            attempts={18}
            totalQuestions={40}
          />
        </Link>
        <LatestTestCard
          testName="CAM14"
          type="Listening"
          testNumber={4}
          attempts={18}
          totalQuestions={40}
        />
        <LatestTestCard
          testName="CAM14"
          type="Reading"
          testNumber={4}
          attempts={16}
          totalQuestions={40}
        />
      </div>
    </div>
  );
};

export default LatestTestLayout;
