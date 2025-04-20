import React from "react";

interface QuizHeaderProps {
  title: string;
  subtitle: string;
}

interface QuizOptionProps {
  label: string;
  option: string;
  isSelected: boolean;
  isMultiple: boolean;
  onSelect: () => void;
}

interface QuizQuestionProps {
  id: number;
  question: string;
  options: string[];
  isMultiple: boolean;
  selectedOptions: string[] | string | null;
  onSelectOption: (option: string) => void;
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({ title, subtitle }) => (
  <div className="bg-[#FA812F] text-white p-4 rounded-lg mb-4">
    <h1 className="flex flex-row justify-between items-center text-lg font-bold">
      <span>{title}</span>{" "}
      <span className="font-normal text-base ml-2">{subtitle}</span>
    </h1>
  </div>
);

export const QuizOption: React.FC<QuizOptionProps> = ({
  label,
  option,
  isSelected,
  isMultiple,
  onSelect,
}) => (
  <div className="flex items-center mb-3 cursor-pointer" onClick={onSelect}>
    <div
      className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 border ${
        isSelected
          ? "bg-[#f8f2ef] border-[#FA812F]"
          : "bg-gray-100 border-gray-300"
      }`}
    >
      <span
        className={`font-medium ${
          isSelected ? "text-[#FA812F]" : "text-gray-600"
        }`}
      >
        {label}
      </span>
    </div>
    <span className="text-gray-700">{option}</span>
  </div>
);

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  id,
  question,
  options,
  isMultiple,
  selectedOptions,
  onSelectOption,
}) => {
  const optionLabels = ["A", "B", "C", "D"];

  return (
    <div className="mb-8 bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex mb-4">
        <span className="text-[#FA812F  text-xl font-bold mr-3">{id}</span>
        <p className="text-gray-800 text-lg">{question}</p>
      </div>

      {options.map((option, index) => (
        <QuizOption
          key={index}
          label={optionLabels[index]}
          option={option}
          isMultiple={isMultiple}
          isSelected={
            isMultiple
              ? Array.isArray(selectedOptions) &&
                selectedOptions.includes(option)
              : selectedOptions === option
          }
          onSelect={() => onSelectOption(option)}
        />
      ))}
    </div>
  );
};

export default function MultipleChoiceQuiz({
  questions,
  handleSelectOption,
}: {
  questions: QuizQuestionProps[];
  handleSelectOption: (questionId: number, option: string) => void;
}) {
  return (
    <div className="w-full">
      {questions.map((question) => (
        <QuizQuestion
          key={question.id}
          id={question.id}
          question={question.question}
          options={question.options}
          isMultiple={question.isMultiple}
          selectedOptions={question.selectedOptions}
          onSelectOption={(option) => handleSelectOption(question.id, option)}
        />
      ))}
    </div>
  );
}
// export const Quiz: React.FC = () => {
//   const [questions, setQuestions] = useState<QuizItem[]>([
//     {
//       id: 7,
//       question:
//         "The counter-excavation method completely replaced the qanat method in the 6th century BCE.",
//       options: ["True", "False", "Not given"],
//       selectedOption: null,
//     },
//     {
//       id: 8,
//       question:
//         "Only experienced builders were employed to construct a tunnel using the counter-excavation method.",
//       options: ["True", "False", "Not given"],
//       selectedOption: null,
//     },
//     {
//       id: 9,
//       question:
//         "The information about a problem that occurred during the construction of the Saldae aqueduct system was found in an ancient book.",
//       options: ["True", "False", "Not given"],
//       selectedOption: null,
//     },
//     {
//       id: 10,
//       question:
//         "The mistake made by the builders of the Saldae aqueduct system was that the two parts of the tunnel failed to meet.",
//       options: ["True", "False", "Not given"],
//       selectedOption: null,
//     },
//   ]);

//   const handleSelectOption = (questionId: number, option: string) => {
//     setQuestions(
//       questions.map((q) =>
//         q.id === questionId ? { ...q, selectedOption: option } : q
//       )
//     );
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <QuizHeader
//         title="Question 7 - 10"
//         subtitle="Choose TRUE/FALSE/NOT GIVEN"
//       />

//       {questions.map((question) => (
//         <QuizQuestion
//           key={question.id}
//           id={question.id}
//           question={question.question}
//           options={question.options}
//           selectedOption={question.selectedOption}
//           onSelectOption={(option) => handleSelectOption(question.id, option)}
//         />
//       ))}
//     </div>
//   );
// };
