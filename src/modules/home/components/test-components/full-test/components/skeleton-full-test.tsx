const SkeletonFullTest = () => {
  return (
    <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2 pb-4 md:pb-0 px-0 mx-0">
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse flex flex-col lg:flex-row mb-5 lg:mb-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="w-full lg:w-[267px] h-[187px] bg-gray-300 rounded-md mb-0"></div>
            <div className="flex flex-col items-start">
              <div className="w-48 h-7 bg-gray-300 rounded-md mb-4"></div>
              <div className="flex flex-row items-center justify-center mb-0 lg:mb-3">
                <div className="w-20 h-5 bg-gray-300 rounded-md mb-3"></div>
                <span className="mx-2 mb-3 h-1.5 w-1.5 bg-gray-500 rounded-full"></span>
                <div className="w-16 h-5 bg-gray-300 rounded-md mb-3"></div>
              </div>
              <div className="w-full lg:w-48 h-14 bg-gray-300 rounded-md mb-4"></div>
              <div className="w-32 h-4 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SkeletonFullTest;
