// pages/index.tsx
import { useState } from "react";
import Image from "next/image";
import "@/styles/hide-scroll.css";
import { IMAGES } from "@/utils/images";
import { Check } from "lucide-react";
import Link from "next/link";

type QuestionType =
  | "Diagram Completion"
  | "True/ False/ Not Given"
  | "Sentence Completion"
  | "Multiple Choice"
  | "Summary Completion"
  | "Yes/ No/ Not Given"
  | "Matching Headings";

type ResultRow = {
  type: QuestionType;
  total: number;
  correct: number;
  incorrect: number;
  unanswered: number;
};

type Answer = {
  id: number;
  passage: number;
  questionNumber: number;
  missed: boolean;
  correctAnswer: string;
};

const ResultStatistic = () => {
  const [resultStats] = useState({
    correct: 0,
    incorrect: 0,
    unanswered: 40,
    score: 5.0,
  });

  const scorePercentage = resultStats.score * 10;

  const [resultRows] = useState<ResultRow[]>([
    {
      type: "Diagram Completion",
      total: 6,
      correct: 0,
      incorrect: 0,
      unanswered: 6,
    },
    {
      type: "True/ False/ Not Given",
      total: 4,
      correct: 0,
      incorrect: 0,
      unanswered: 4,
    },
    {
      type: "Sentence Completion",
      total: 3,
      correct: 0,
      incorrect: 0,
      unanswered: 3,
    },
    {
      type: "Multiple Choice",
      total: 7,
      correct: 0,
      incorrect: 0,
      unanswered: 7,
    },
    {
      type: "Summary Completion",
      total: 5,
      correct: 0,
      incorrect: 0,
      unanswered: 5,
    },
    {
      type: "Yes/ No/ Not Given",
      total: 9,
      correct: 0,
      incorrect: 0,
      unanswered: 9,
    },
    {
      type: "Matching Headings",
      total: 6,
      correct: 0,
      incorrect: 0,
      unanswered: 6,
    },
  ]);

  const [answers] = useState<Answer[]>([
    {
      id: 1,
      passage: 1,
      questionNumber: 1,
      missed: true,
      correctAnswer: "posts",
    },
    {
      id: 2,
      passage: 1,
      questionNumber: 2,
      missed: true,
      correctAnswer: "canal",
    },
    {
      id: 3,
      passage: 1,
      questionNumber: 3,
      missed: true,
      correctAnswer: "ventilation",
    },
    {
      id: 4,
      passage: 1,
      questionNumber: 4,
      missed: true,
      correctAnswer: "lid",
    },
    {
      id: 5,
      passage: 1,
      questionNumber: 5,
      missed: true,
      correctAnswer: "weight",
    },
    {
      id: 6,
      passage: 1,
      questionNumber: 6,
      missed: true,
      correctAnswer: "climbing",
    },
    {
      id: 7,
      passage: 1,
      questionNumber: 7,
      missed: true,
      correctAnswer: "False",
    },
    {
      id: 8,
      passage: 1,
      questionNumber: 8,
      missed: true,
      correctAnswer: "Not Given",
    },
    {
      id: 9,
      passage: 1,
      questionNumber: 9,
      missed: true,
      correctAnswer: "False",
    },
    {
      id: 10,
      passage: 1,
      questionNumber: 10,
      missed: true,
      correctAnswer: "True",
    },
    {
      id: 11,
      passage: 1,
      questionNumber: 11,
      missed: true,
      correctAnswer: "gold",
    },
    {
      id: 12,
      passage: 1,
      questionNumber: 12,
      missed: true,
      correctAnswer: "the architect",
    },
    {
      id: 13,
      passage: 1,
      questionNumber: 13,
      missed: true,
      correctAnswer: "harbour",
    },
    {
      id: 14,
      passage: 2,
      questionNumber: 14,
      missed: true,
      correctAnswer: "A",
    },
    {
      id: 15,
      passage: 2,
      questionNumber: 15,
      missed: true,
      correctAnswer: "B",
    },
    {
      id: 16,
      passage: 2,
      questionNumber: 16,
      missed: true,
      correctAnswer: "D",
    },
    {
      id: 17,
      passage: 2,
      questionNumber: 17,
      missed: true,
      correctAnswer: "B",
    },
    {
      id: 18,
      passage: 2,
      questionNumber: 18,
      missed: true,
      correctAnswer: "D",
    },
    {
      id: 19,
      passage: 2,
      questionNumber: 19,
      missed: true,
      correctAnswer: "H",
    },
    {
      id: 20,
      passage: 2,
      questionNumber: 20,
      missed: true,
      correctAnswer: "F",
    },
    {
      id: 21,
      passage: 2,
      questionNumber: 21,
      missed: true,
      correctAnswer: "B",
    },
    {
      id: 22,
      passage: 2,
      questionNumber: 22,
      missed: true,
      correctAnswer: "C",
    },
    {
      id: 23,
      passage: 2,
      questionNumber: 23,
      missed: true,
      correctAnswer: "Yes",
    },
    {
      id: 24,
      passage: 2,
      questionNumber: 24,
      missed: true,
      correctAnswer: "No",
    },
    {
      id: 25,
      passage: 2,
      questionNumber: 25,
      missed: true,
      correctAnswer: "Not Given",
    },
    {
      id: 26,
      passage: 2,
      questionNumber: 26,
      missed: true,
      correctAnswer: "Yes",
    },
    {
      id: 27,
      passage: 3,
      questionNumber: 27,
      missed: true,
      correctAnswer: "III",
    },
    {
      id: 28,
      passage: 3,
      questionNumber: 28,
      missed: true,
      correctAnswer: "VI",
    },
    {
      id: 29,
      passage: 3,
      questionNumber: 29,
      missed: true,
      correctAnswer: "II",
    },
    {
      id: 30,
      passage: 3,
      questionNumber: 30,
      missed: true,
      correctAnswer: "I",
    },
    {
      id: 31,
      passage: 3,
      questionNumber: 31,
      missed: true,
      correctAnswer: "VII",
    },
    {
      id: 32,
      passage: 3,
      questionNumber: 32,
      missed: true,
      correctAnswer: "V",
    },
    {
      id: 33,
      passage: 3,
      questionNumber: 33,
      missed: true,
      correctAnswer: "C",
    },
    {
      id: 34,
      passage: 3,
      questionNumber: 34,
      missed: true,
      correctAnswer: "B",
    },
    {
      id: 35,
      passage: 3,
      questionNumber: 35,
      missed: true,
      correctAnswer: "A",
    },
    {
      id: 36,
      passage: 3,
      questionNumber: 36,
      missed: true,
      correctAnswer: "No",
    },
    {
      id: 37,
      passage: 3,
      questionNumber: 37,
      missed: true,
      correctAnswer: "Not Given",
    },
    {
      id: 38,
      passage: 3,
      questionNumber: 38,
      missed: true,
      correctAnswer: "Yes",
    },
    {
      id: 39,
      passage: 3,
      questionNumber: 39,
      missed: true,
      correctAnswer: "No",
    },
    {
      id: 40,
      passage: 3,
      questionNumber: 40,
      missed: true,
      correctAnswer: "Yes",
    },
  ]);

  const passageAnswers = (passageNum: number, startQ: number, endQ: number) => {
    return answers
      .filter(
        (a) =>
          a.passage === passageNum &&
          a.questionNumber >= startQ &&
          a.questionNumber <= endQ
      )
      .sort((a, b) => a.questionNumber - b.questionNumber);
  };

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <header className="fixed top-0 left-0 right-0 bg-white shadow p-2 flex justify-between items-center z-20">
        <div className="flex items-center">
          <div>
            <Image
              src={IMAGES.LOGO}
              alt="Dinh Luc Logo"
              width={1000}
              height={1000}
              className="mr-2 w-full h-10"
            />
          </div>
        </div>
        <div className="text-center font-medium mr-24">
          Answer key
          <div className="text-xs text-gray-500">CAM16 - Reading Test 4</div>
        </div>
        <button className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
      </header>

      <main
        className="container w-[55%] mx-auto py-6 px-4 overflow-y-auto scroll-bar-style"
        style={{
          height: "calc(100vh - 10px)",
          paddingTop: "100px",
        }}
      >
        {/* Score Card */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6">
            <div className="font-medium text-lg mb-4">
              Oops! Bạn chưa làm đúng câu nào, cố gắng lần sau nhé.
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-16">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Background circle (orange-300) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#fed7aa" // orange-300
                      strokeWidth="10"
                    />
                    {/* Progress circle (orange-600) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#f97316" // orange-600
                      strokeWidth="10"
                      strokeDasharray={`${scorePercentage * 2.83} 283`}
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)" // Start from top
                    />
                    {/* Inner circle for score background */}
                    <circle cx="50" cy="50" r="35" fill="#fff7ed" />{" "}
                    {/* orange-50 */}
                    {/* Score text */}
                    <text
                      x="50"
                      y="61"
                      textAnchor="middle"
                      fill="#f97316" // orange-600
                      fontSize="30"
                      fontWeight="bold"
                    >
                      {resultStats.score.toFixed(1)}
                    </text>
                  </svg>
                  <div className="absolute -top-[11%] right-[31%] bg-[#FF991F] rounded-full w-8 h-8 flex items-center justify-center">
                    <Check color="white" size={17} strokeWidth={6} />
                  </div>
                </div>

                <div className="flex flex-col justify-between items-start">
                  <div className="mb-2 flex flex-row justify-between items-center w-28">
                    <span className="text-sm text-black mr-2 font-semibold">
                      Đúng:
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded w-10 text-center">
                      {resultStats.correct}
                    </span>
                  </div>
                  <div className="mb-2 flex flex-row justify-between items-center w-28">
                    <span className="text-sm text-black mr-2 font-semibold">
                      Sai:
                    </span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded w-10 text-center">
                      {resultStats.incorrect}
                    </span>
                  </div>
                  <div className="mb-2 flex flex-row justify-between items-center w-28">
                    <span className="text-sm text-black mr-2 font-semibold">
                      Bỏ qua:
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded w-10 text-center">
                      {resultStats.unanswered}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <Image
                  src={IMAGES.RESULT}
                  alt="Student reading"
                  width={1000}
                  height={1000}
                  className="w-3/4 h-full"
                />
              </div>
            </div>

            <Link
              href="/test-result-reading"
              className="bg-red-600 text-white rounded-md px-4 py-2 text-sm mt-4"
            >
              Xem giải thích
            </Link>
          </div>
        </div>

        {/* Results Table */}
        {/* <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6">
            <h2 className="font-medium text-lg mb-4">Bảng thống kê</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left">LOẠI</th>
                    <th className="py-3 px-4 text-center">SỐ CÂU</th>
                    <th className="py-3 px-4 text-center">ĐÚNG</th>
                    <th className="py-3 px-4 text-center">SAI</th>
                    <th className="py-3 px-4 text-center">BỎ QUA</th>
                  </tr>
                </thead>
                <tbody>
                  {resultRows.map((row, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 px-4">{row.type}</td>
                      <td className="py-3 px-4 text-center">{row.total}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 rounded-full">
                          {row.correct}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 text-red-800 rounded-full">
                          {row.incorrect}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 text-gray-800 rounded-full">
                          {row.unanswered}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div> */}

        {/* Answer Key */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="font-medium text-lg mb-4">Answer key</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Passage 1 */}
              <div>
                <h3 className="font-medium mb-2">
                  PASSAGE 1 (QUESTION 1 - 13)
                </h3>
                <div className="space-y-2">
                  {passageAnswers(1, 1, 13).map((answer) => (
                    <div key={answer.id} className="flex items-center text-sm">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-800 mr-2">
                        {answer.questionNumber}
                      </div>
                      <span className="text-gray-500 mr-2">Missed</span>
                      <span className="text-green-600 font-medium">
                        {answer.correctAnswer}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Passage 3 */}
              <div>
                <h3 className="font-medium mb-2">
                  PASSAGE 3 (QUESTION 27 - 40)
                </h3>
                <div className="space-y-2">
                  {passageAnswers(3, 27, 40).map((answer) => (
                    <div key={answer.id} className="flex items-center text-sm">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-800 mr-2">
                        {answer.questionNumber}
                      </div>
                      <span className="text-gray-500 mr-2">Missed</span>
                      <span className="text-green-600 font-medium">
                        {answer.correctAnswer}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Passage 2 */}
              <div className="md:col-span-2">
                <h3 className="font-medium my-2">
                  PASSAGE 2 (QUESTION 14 - 26)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    {passageAnswers(2, 14, 20).map((answer) => (
                      <div
                        key={answer.id}
                        className="flex items-center text-sm"
                      >
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-800 mr-2">
                          {answer.questionNumber}
                        </div>
                        <span className="text-gray-500 mr-2">Missed</span>
                        <span className="text-green-600 font-medium">
                          {answer.correctAnswer}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {passageAnswers(2, 21, 26).map((answer) => (
                      <div
                        key={answer.id}
                        className="flex items-center text-sm"
                      >
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-800 mr-2">
                          {answer.questionNumber}
                        </div>
                        <span className="text-gray-500 mr-2">Missed</span>
                        <span className="text-green-600 font-medium">
                          {answer.correctAnswer}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResultStatistic;
