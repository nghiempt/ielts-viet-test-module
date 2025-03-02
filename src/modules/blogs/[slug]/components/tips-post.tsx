import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BlogService } from "@/services/blog";
import { HELPER } from "@/utils/helper";
import sanitizeHtml from "sanitize-html";
import { useParams } from "next/navigation";

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

  const sanitizedContent = sanitizeHtml(post?.content || "", {
    allowedTags: ["p", "img", "ul", "li"],
    allowedAttributes: {
      img: ["src", "alt"],
    },
  });

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
        <div className="prose max-w-none text-sm md:text-base">
          <div
            // dangerouslySetInnerHTML={{
            //   __html: HELPER.sanitizeContent(post?.content || ""),
            // }}

            dangerouslySetInnerHTML={{
              __html: sanitizedContent,
            }}
          />
        </div>
        <div className="border-t border-b py-4 mt-8">
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <span className="font-medium">SHARE:</span>
            <div className="flex gap-2 md:gap-4">
              <div
                onClick={() =>
                  handleFacebookShare(
                    `https://www.ieltsviet.edu.vn//bai-viet/${HELPER.convertSpacesToDash(
                      post?.title || ""
                    )}?blog=${post?._id}`
                  )
                }
                className="text-gray-500 hover:text-gray-900 cursor-pointer"
              >
                Facebook
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
