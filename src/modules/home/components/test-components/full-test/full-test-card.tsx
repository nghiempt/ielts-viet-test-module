import { IMAGES } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";

interface FullTestProps {
  id: string;
  title: string;
  testCount: number;
  viewCount: number;
  description: string;
  thumbnail: string;
}

const FullTestCard: React.FC<FullTestProps> = ({
  id,
  title,
  testCount,
  viewCount,
  description,
  thumbnail,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-5 w-full">
      <div className="rounded-lg p-0 w-full">
        <div className="flex justify-center w-full h-full">
          <Image
            src={thumbnail}
            alt={title}
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>

      <div className="md:w-2/3 lg:w-full p-0 rounded-lg mt-4 lg:mt-0">
        <h2 className="text-lg lg:text-2xl font-bold text-black">{title}</h2>
        <div className="text-sm lg:text-base flex space-x-2 items-center mt-2 text-gray-600">
          <span>{testCount} bài tests</span>
          <span className="text-gray-400">•</span>
          <span>{viewCount}K lượt làm</span>
        </div>
        <p className="text-sm lg:text-base mt-2 text-gray-700">{description}</p>
        <Link
          href={`/full-ielts-test/${id}`}
          className="text-sm lg:text-base inline-flex items-center mt-4 text-[#FA812F] font-medium"
        >
          Xem bài test{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default FullTestCard;
