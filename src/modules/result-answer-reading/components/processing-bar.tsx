// components/processing-bar-mobile.tsx
import React from "react";

interface PassageProgressBarMobileProps {
  passageNumber: number;
  currentQuestion: number;
  totalQuestions: number;
  startQuestion: number;
  endQuestion: number;
  choosenPassage?: boolean;
  onClick?: () => void;
  onQuestionClick?: (questionNum: number) => void;
}

const PassageProgressBarMobile: React.FC<PassageProgressBarMobileProps> = ({
  passageNumber,
  currentQuestion,
  totalQuestions,
  startQuestion,
  endQuestion,
  choosenPassage,
  onClick,
  onQuestionClick,
}) => {
  const questionNumbers = Array.from(
    { length: totalQuestions },
    (_, index) => startQuestion + index
  );

  return (
    <div
      className={`w-[280px] rounded-lg py-1 px-1 bg-white mx-2 cursor-pointer`}
      onClick={onClick}
    >
      <div
        className={`${
          choosenPassage ? "text-[#FA812F]" : "text-gray-500"
        } font-medium text-xs my-2 text-center`}
      >
        PASSAGE {passageNumber}
      </div>
      <div className="flex flex-wrap gap-0.5 justify-start">
        {questionNumbers.map((question) => (
          <button
            key={question}
            className={`w-9 h-9 rounded-md flex items-center justify-center text-xs font-bold
              ${
                question === currentQuestion && choosenPassage
                  ? "bg-white border-2 border-gray-600 text-gray-800"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            onClick={(e) => {
              e.stopPropagation();
              onQuestionClick && onQuestionClick(question);
            }}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PassageProgressBarMobile;
