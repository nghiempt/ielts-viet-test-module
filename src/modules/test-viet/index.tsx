"use client";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import WritingContent from "./main";

export default function WritingClient() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full mb-0">
        <WritingContent />
      </div>
      <Footer />
    </div>
  );
}
