import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const PopupMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  // Section data
  const sections = [
    {
      id: 1,
      answeredQuestions: 7,
      totalQuestions: 13,
      questionRange: Array.from({ length: 13 }, (_, i) => i + 1),
    },
    {
      id: 2,
      answeredQuestions: 4,
      totalQuestions: 13,
      questionRange: Array.from({ length: 13 }, (_, i) => i + 14),
    },
    {
      id: 3,
      answeredQuestions: 8,
      totalQuestions: 14,
      questionRange: Array.from({ length: 14 }, (_, i) => i + 27),
    },
  ];

  const getQuestionStatus = (sectionId: number, questionNum: number) => {
    const section = sections.find((s) => s.id === sectionId);
    const questionIndex = section ? questionNum - section.questionRange[0] : -1;
    return section ? questionIndex < section.answeredQuestions : false;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 z-30"
        >
          <div className="bg-white rounded-t-[40px] shadow-lg w-full max-w-md mx-auto overflow-hidden">
            <div className="bg-black w-32 h-[4px] rounded-full mx-auto mt-3"></div>
            {/* Header */}
            <div className="px-6 pb-0 pt-3 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Lưu ý</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Instruction */}
            <div className="px-6 py-3">
              <p className="text-gray-700 text-xs">
                Bạn có thể review và sửa lại đáp án ở các sections 1, 2, và 3.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex border-b">
              <button
                className={`flex-1 py-3 text-center font-medium text-sm ${
                  selectedTab === 0
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setSelectedTab(0)}
              >
                Section 1
              </button>
              <button
                className={`flex-1 py-3 text-center font-medium text-sm ${
                  selectedTab === 1
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setSelectedTab(1)}
              >
                Section 2
              </button>
              <button
                className={`flex-1 py-3 text-center font-medium text-sm ${
                  selectedTab === 2
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setSelectedTab(2)}
              >
                Section 3
              </button>
            </div>

            {/* Tab Content */}
            <div className="px-6 py-4 overflow-y-auto max-h-[60vh]">
              {selectedTab === 0 && (
                <div className="mb-5">
                  <h3 className="text-sm font-bold mb-3">SECTION 1</h3>
                  <div className="grid grid-cols-5 gap-4">
                    {sections[0].questionRange.map((num) => (
                      <div
                        key={num}
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium ${
                          getQuestionStatus(1, num)
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {selectedTab === 1 && (
                <div className="mb-5">
                  <h3 className="text-sm font-bold mb-3">SECTION 2</h3>
                  <div className="grid grid-cols-5 gap-4">
                    {sections[1].questionRange.map((num) => (
                      <div
                        key={num}
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium ${
                          getQuestionStatus(2, num)
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {selectedTab === 2 && (
                <div className="mb-5">
                  <h3 className="text-sm font-bold mb-3">SECTION 3</h3>
                  <div className="grid grid-cols-5 gap-4">
                    {sections[2].questionRange.map((num) => (
                      <div
                        key={num}
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium ${
                          getQuestionStatus(3, num)
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="px-4 py-5">
              <Link href={"/reading-test/view-result"}>
                <button className="w-full py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition duration-150">
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupMenu;
