import React from "react";

interface PassageProgressBarProps {
  passageNumber: number;
  currentQuestion: number;
  totalQuestions: number;
  startQuestion: number;
  endQuestion: number;
  choosenPassage?: boolean;
  onClick?: () => void;
  onQuestionClick?: (questionNum: number) => void;
}

const PassageProgressBar: React.FC<PassageProgressBarProps> = ({
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
      className={`w-[280px] rounded-lg py-2 px-2 bg-white mr-4 cursor-pointer`}
      onClick={onClick}
    >
      <div
        className={`${
          choosenPassage ? "text-[#FA812F]" : "text-gray-500"
        } font-medium text-sm mb-2`}
      >
        SECTION {passageNumber}
      </div>
      <div className="flex flex-wrap gap-1">
        {questionNumbers.map((question) => (
          <button
            key={question}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
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

export default PassageProgressBar;
