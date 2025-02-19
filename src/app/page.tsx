"use client";

import { BlogProvider } from "@/modules/blogs/components/blog-context";
import HomeClient from "@/modules/home";
import { Loader } from "lucide-react";
import React, { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <BlogProvider>
        <Suspense
          fallback={
            <div className="w-full h-[500px] flex flex-col justify-center items-center">
              <Loader className="animate-spin" size={24} />
            </div>
          }
        >
          <HomeClient />
        </Suspense>
      </BlogProvider>
    </div>
  );
}
