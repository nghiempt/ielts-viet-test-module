"use client";

import Image from "next/image";
import Link from "next/link";
import { slugifyURL } from "@/utils/slugify";
import { DATA } from "@/utils/data";
import React, { useEffect } from "react";
import { BlogService } from "@/services/reading";
import { HELPER } from "@/utils/helper";
import { useBlog } from "./blog-context";
import { useRouter } from "next/navigation";

interface BlogPost {
  _id: string;
  title: string;
  thumbnail: string;
  content: string;
  facebook: string;
  twitter: string;
  instagram: string;
  author_id: string;
  author_name: string;
  created_at: string;
}

const Section01 = () => {
  const [data, setData] = React.useState<BlogPost[]>([]);

  const init = async () => {
    try {
      const res = await BlogService.getAll();

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

  const { setSelectedBlogId } = useBlog();
  const router = useRouter();

  const handleClick = (id: string, title: string) => {
    setSelectedBlogId(id);
    localStorage.setItem("selectedBlogId", id);
    router.push(`/bai-viet/${HELPER.convertSpacesToDash(title)}`);
  };

  return (
    <section className="w-full px-2 lg:px-0">
      <div className="text-center mb-12">
        <p className="text-[rgb(var(--secondary-rgb))] text-md lg:text-lg font-semibold mb-3">
          Bài Viết Hấp Dẫn
        </p>
        <div className="relative inline-block">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Danh Sách Các Bài Viết
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-3 lg:mx-0">
        {data.map((item, index) => (
          <article
            key={index}
            className="cursor-pointer relative overflow-hidden group bg-white rounded-lg border hover:shadow-md transition-shadow duration-300"
            onClick={() => {
              handleClick(item._id, item.title);
            }}
          >
            <Link
              // href={`bai-viet/${slugifyURL(item.title)}-${item?._id}`}
              href={`/bai-viet/${HELPER.convertSpacesToDash(item.title)}`}
            >
              <div className="relative overflow-hidden group aspect-[4/3]">
                <Image
                  src={item?.thumbnail}
                  alt={item?.title}
                  className="w-full h-full transform transition-transform duration-500 group-hover:scale-105 object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <time>{HELPER.formatDate(item?.created_at)}</time>
                  <span className="text-gray-400">•</span>
                  <span>{item?.author_name}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 line-clamp-2">
                  {item?.title}
                </h3>
                <div className="inline-block text-[rgb(var(--secondary-rgb))] font-medium hover:opacity-60 transition-colors duration-300 underline-offset-2 cursor-pointer">
                  Xem chi tiết
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Section01;
