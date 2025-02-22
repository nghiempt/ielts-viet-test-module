"use client";

import { useBlog } from "@/modules/blogs/components/blog-context";
import { BlogService } from "@/services/blog";
import { HELPER } from "@/utils/helper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface BlogPost {
  _id: string;
  title: string;
  thumbnail: string;
  content: string;
  facebook: string;
  twitter: string;
  instagram: string;
  author_id: string;
  created_at: string;
}

const Section07 = () => {
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
    <section className="w-full lg:w-3/4 px-6 lg:px-0 pb-20 pt-12">
      <div className="text-center mb-12">
        <div className="text-center space-y-1">
          <p className="text-[#eee] text-md lg:text-lg font-semibold mb-3">
            Tài Liệu Học Tập
          </p>
          <h2 className="text-4xl mx-2 lg:text-5xl font-bold text-[rgb(var(--quaternary-rgb))]">
            Các Tips Học IELT Hiệu Quả
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.slice(0, 3).map((item, index) => (
          <article
            key={index}
            className="cursor-pointer relative overflow-hidden group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            onClick={() => {
              handleClick(item._id, item.title);
            }}
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
                <span>
                  {/* {item?.author_id} */}
                  Kim Hoàng
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 line-clamp-2">
                {item?.title}
              </h3>
              <div className="inline-block text-[rgb(var(--secondary-rgb))] font-medium hover:opacity-60 transition-colors duration-300 underline-offset-2 cursor-pointer">
                Xem chi tiết
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Section07;
