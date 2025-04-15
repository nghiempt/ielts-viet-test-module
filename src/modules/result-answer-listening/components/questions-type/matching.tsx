// components/MatchingQuestion.tsx
import React, { useState } from "react";

interface QuestionOption {
  id: string;
  text: string;
}

interface MatchingQuestionProps {
  id: number;
  city: string;
  options: QuestionOption[];
  selectedAnswer: string;
  onAnswerChange: (questionId: number, answer: string) => void;
}

const MatchingQuestion: React.FC<MatchingQuestionProps> = ({
  id,
  city,
  options,
  selectedAnswer,
  onAnswerChange,
}) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  // Find the selected option text if there is a selected answer
  const selectedOption = options.find((option) => option.id === selectedAnswer);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);

    const optionId = e.dataTransfer.getData("optionId");
    onAnswerChange(id, optionId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  return (
    <div className="flex items-start mb-6">
      <div className="text-blue-600 font-medium mr-4">{id}</div>
      <div className="flex-1">
        <div className="mb-2">{city}</div>
        <div
          className={`flex items-center ${
            selectedAnswer ? "cursor-default" : "cursor-pointer"
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <div className="w-8 h-8 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center mr-2">
            {selectedAnswer ? (
              <span className="text-blue-600">{selectedAnswer}</span>
            ) : (
              <span className="text-gray-400 text-sm">?</span>
            )}
          </div>
          <div
            className={`flex-1 h-10 px-3 py-2 rounded ${
              isDraggingOver
                ? "bg-blue-100 border-2 border-blue-300"
                : selectedAnswer
                ? "bg-blue-50"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            {selectedOption ? selectedOption.text : "Drop your answer here"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchingQuestion;
