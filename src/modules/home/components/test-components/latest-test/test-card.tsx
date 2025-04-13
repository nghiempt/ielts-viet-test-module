// components/TestCard.tsx
import { Play } from "lucide-react";
import React from "react";

interface TestCardProps {
  testName: string;
  type: "Reading" | "Listening";
  testNumber: number;
  attempts?: number;
  totalQuestions: number;
  started?: boolean;
}

const LatestTestCard: React.FC<TestCardProps> = ({
  testName,
  type,
  testNumber,
  attempts,
  totalQuestions,
  started = false,
}) => {
  return (
    <div className="flex-shrink-0 h-full w-64 lg:w-full bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {testName} - {type} Test {testNumber}
          </h3>
          <div className="flex items-center text-gray-500 text-sm mt-2">
            {attempts && (
              <>
                <span className="text-gray-700">{attempts}K lượt làm</span>
                <span className="mx-2">•</span>
              </>
            )}
            <span>
              {started ? `0/${totalQuestions}` : `${totalQuestions}`} câu
            </span>
          </div>
        </div>
        <button
          className={`flex items-center justify-center py-2 px-4 mt-4 rounded-lg border ${
            started
              ? "border-blue-200 text-blue-600"
              : "border-[#FA812F] text-[#FA812F]"
          } w-full text-sm font-medium`}
        >
          {started ? (
            <>
              <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center mr-2">
                <span className="text-blue-600 text-xs">▶</span>
              </div>
              <span>Làm tiếp</span>
            </>
          ) : (
            <>
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center mr-2 border-2 border-[#FA812F] p-3">
                <div>
                  <Play color="#FA812F" fill="#FA812F" size={15} />
                </div>
              </div>
              <span>Làm bài</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default LatestTestCard;
