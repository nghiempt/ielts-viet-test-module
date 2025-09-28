"use client";

import Footer from "@/layout/footer";
import Header from "@/layout/header";
import ListeningContent from "@/modules/test-nghe/main";
import React from "react";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full mt-0 mb-0">
        <ListeningContent />
      </div>
      <Footer />
    </div>
  );
}
