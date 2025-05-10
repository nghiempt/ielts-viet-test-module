"use client";

import Footer from "@/layout/footer";
import Header from "@/layout/header";
import ReadingContent from "@/modules/test-doc/main";
import React from "react";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full mt-0 mb-0">
        <ReadingContent />
      </div>
      <Footer />
    </div>
  );
}
