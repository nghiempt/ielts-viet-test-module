"use client";

import Image from "next/image";
import Link from "next/link";
import { slugifyURL } from "@/utils/slugify";
import { DATA } from "@/utils/data";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  authorImage: string;
  authorDesc: string;
  imageUrl: string;
  content: string;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
  linkedInLink: string;
}

const blogPosts = DATA.BLOG_POSTS as BlogPost[];

const Section01 = () => {
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
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="relative overflow-hidden group bg-white rounded-lg border hover:shadow-md transition-shadow duration-300"
          >
            <Link href={`bai-viet/${slugifyURL(post.title)}-${post.id}`}>
              <div className="relative overflow-hidden group aspect-[4/3]">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full transform transition-transform duration-500 group-hover:scale-105 object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <time>{post.date}</time>
                  <span className="text-gray-400">•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 line-clamp-2">
                  {post.title}
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
