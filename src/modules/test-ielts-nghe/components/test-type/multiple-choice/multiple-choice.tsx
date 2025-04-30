// components/MultipleChoiceQuestion.tsx
import React from "react";

interface QuestionOption {
  id: string;
  text: string;
}

interface MultipleChoiceQuestionProps {
  id: string;
  text: string;
  options: QuestionOption[];
  selectedAnswers: string[];
  maxSelections: number;
  onAnswerChange: (questionId: string, selectedAnswers: string[]) => void;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  id,
  text,
  options,
  selectedAnswers,
  maxSelections,
  onAnswerChange,
}) => {
  const handleOptionClick = (optionId: string) => {
    let newSelectedAnswers = [...selectedAnswers];

    if (newSelectedAnswers.includes(optionId)) {
      // Remove if already selected
      newSelectedAnswers = newSelectedAnswers.filter((id) => id !== optionId);
    } else {
      // Add if not at max selections
      if (newSelectedAnswers.length < maxSelections) {
        newSelectedAnswers.push(optionId);
      } else {
        // Replace oldest selection if at max
        newSelectedAnswers.shift();
        newSelectedAnswers.push(optionId);
      }
    }

    onAnswerChange(id, newSelectedAnswers);
  };

  return (
    <div className="mb-8">
      <div className="flex items-start mb-4">
        <div className="text-blue-600 font-medium mr-4">{id}</div>
        <div>{text}</div>
      </div>

      <div className="ml-10 space-y-3">
        {options.map((option) => (
          <div
            key={option.id}
            className={`flex items-center p-2 rounded cursor-pointer ${
              selectedAnswers.includes(option.id) ? "bg-blue-50" : ""
            }`}
            onClick={() => handleOptionClick(option.id)}
          >
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${
                selectedAnswers.includes(option.id)
                  ? "bg-blue-600 text-white"
                  : "text-gray-500"
              }`}
            >
              {option.id}
            </div>
            <div>{option.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;
