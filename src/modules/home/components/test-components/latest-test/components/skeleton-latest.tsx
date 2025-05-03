const SkeletonLatest = () => {
  return (
    <div className="flex md:grid overflow-x-auto md:overflow-visible gap-4 md:gap-6 md:grid-cols-3 pb-4 md:pb-0 px-0 mx-0 snap-x snap-mandatory scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 scroll-bar-style h-full lg:h-full">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse flex flex-col items-start border border-gray-200 rounded-lg p-6"
        >
          <div className="w-40 h-5 bg-gray-300 rounded-md mb-4"></div>
          <div className="flex flex-row items-center justify-center mb-3">
            <div className="w-16 h-4 bg-gray-300 rounded-md mb-3"></div>
            <span className="mx-2 mb-3 h-1.5 w-1.5 bg-gray-400 rounded-full"></span>
            <div className="w-10 h-4 bg-gray-300 rounded-md mb-3"></div>
          </div>
          <div className="w-full h-12 bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};
export default SkeletonLatest;
