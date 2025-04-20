import React from "react";

interface ShortAnswerQuestionProps {
  id: number;
  start_passage: string;
  end_passage: string;
}

export const ShortAnswerQuestion: React.FC<ShortAnswerQuestionProps> = ({
  id,
  start_passage,
  end_passage,
}) => {
  return (
    <div className="flex py-3">
      <div className="flex items-center">
        <span className="text-[#FA812F] text-xl font-bold mr-3">{id}</span>
        <span className="text-[#FA812F] mr-3">→</span>
      </div>
      <div className="w-full flex flex-row items-center">
        <p className="text-gray-800">{start_passage}</p>
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-4 py-2 mx-3 focus:outline-none focus:ring-2 focus:ring-[#FA812F] focus:border-transparent"
          placeholder="Your answer here"
        />
        <p className="text-gray-800">{end_passage}</p>
      </div>
    </div>
  );
};

interface ShortAnswerQuizProps {
  title: string;
  subtitle: string;
  instructions: string;
  questions: Array<{
    id: number;
    start_passage: string;
    end_passage: string;
  }>;
}

export const ShortAnswerQuiz: React.FC<ShortAnswerQuizProps> = ({
  title,
  subtitle,
  instructions,
  questions,
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#FA812F] text-white p-4 rounded-lg mb-4">
        <div className="flex flex-row justify-between items-baseline">
          <h1 className="text-lg font-bold mr-4">{title}</h1>
          <div>
            <p className="text-md mt-1">{instructions}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        {questions.map((question) => (
          <ShortAnswerQuestion
            key={question.id}
            id={question.id}
            start_passage={question.start_passage}
            end_passage={question.end_passage}
          />
        ))}
      </div>
    </div>
  );
};
