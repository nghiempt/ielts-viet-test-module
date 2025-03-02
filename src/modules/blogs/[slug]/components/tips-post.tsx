import Image from "next/image";
import { useEffect, useState } from "react";
import { BlogService } from "@/services/blog";
import { HELPER } from "@/utils/helper";
import { IMAGES } from "@/utils/images";

interface BlogPostProps {
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

export const BlogPost = () => {
  const [post, setPost] = useState<BlogPostProps | null>(null);
  const pathParams = new URLSearchParams(location.search);
  const blogId = pathParams.get("blog");
  const [isLoading, setIsLoading] = useState(true);

  const handleFacebookShare = (link: string) => {
    window.open(`https://www.facebook.com/share.php?u=${link}`, "_blank");
  };

  const init = async () => {
    if (blogId) {
      if (typeof blogId === "string") {
        const res = await BlogService.getBlogById(blogId);
        if (res) {
          setPost(res);
        }
      }
    } else {
      const storeId = localStorage.getItem("selectedBlogId");
      const res = await BlogService.getBlogById(storeId || "");
      if (res) {
        setPost(res);
      }
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <article className="w-full bg-white">
      <div className="space-y-4">
        <div className="w-full aspect-video relative">
          <Image
            src={post?.thumbnail || "/"}
            alt="blog cover"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-wrap items-center text-xs md:text-sm text-gray-500 space-x-2 md:space-x-4">
          <span>By {post?.author_name}</span>
          <span>•</span>
          <span>{HELPER.formatDate(post?.created_at || "")}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {post?.title}
        </h1>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: post?.content || "",
            }}
          />
        </div>
        <div className="border-t border-b py-4 mt-8">
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <div className="flex flex-row justify-center items-center gap-2 md:gap-4">
              <div
                onClick={() =>
                  handleFacebookShare(
                    `https://www.ieltsviet.edu.vn//bai-viet/${HELPER.convertSpacesToDash(
                      post?.title || ""
                    )}?blog=${post?._id}`
                  )
                }
                className="text-white hover:opacity-90 cursor-pointer bg-blue-500 py-2 px-4 rounded-lg"
              >
                Chia sẻ ngay
              </div>
              <Image
                src={IMAGES.FACEBOOK}
                alt=""
                width={1000}
                height={1000}
                className="w-[39px] h-[39px]"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
