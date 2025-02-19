"use client";

import TipsDetailPage from "@/modules/blogs/[slug]";
import { BlogProvider } from "@/modules/blogs/components/blog-context";
import { Loader } from "lucide-react";
import { Suspense } from "react";

export default function TipsDetail() {
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
          <TipsDetailPage />
        </Suspense>
      </BlogProvider>
    </div>
  );
}
