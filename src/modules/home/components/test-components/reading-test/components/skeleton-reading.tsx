import { useState, useEffect } from "react";

const SkeletonReading = () => {
  const [itemCount, setItemCount] = useState(4);

  useEffect(() => {
    const updateItemCount = () => {
      if (window.innerWidth < 768) {
        setItemCount(1);
      } else {
        setItemCount(4);
      }
    };

    updateItemCount();
    window.addEventListener("resize", updateItemCount);

    return () => window.removeEventListener("resize", updateItemCount);
  }, []);

  return (
    <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-4 pb-4 md:pb-0 px-0 mx-0">
      {Array.from({ length: itemCount }).map((_, index) => (
        <div key={index} className="animate-pulse flex flex-col items-start">
          <div className="w-full h-[184px] bg-gray-300 rounded-md mb-4"></div>
          <div className="w-48 h-7 bg-gray-300 rounded-md mb-4"></div>
          <div className="flex flex-row items-center justify-center mb-3">
            <div className="w-16 h-4 bg-gray-300 rounded-md mb-3"></div>
            <span className="mx-2 mb-3 h-1.5 w-1.5 bg-gray-400 rounded-full"></span>
            <div className="w-10 h-4 bg-gray-300 rounded-md mb-3"></div>
          </div>
          <div className="w-32 h-5 bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonReading;
