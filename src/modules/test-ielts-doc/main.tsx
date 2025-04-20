// pages/ielts-test.tsx
import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/utils/images";
import PassageProgressBar from "./components/processing-bar";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Grid2x2Check,
} from "lucide-react";
import Link from "next/link";
import PassageProgressBarMobile from "./components/processing-bar-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { Router } from "next/router";
import { DATA } from "@/utils/data";
import {
  QuizHeader,
  QuizQuestion,
} from "./components/test-type/multiple-choice/multiple-choice";
import { ShortAnswerQuiz } from "./components/test-type/fil-in-the-blank/fill-in";

interface Question {
  id: number;
  question: string;
  options: string[];
  isMultiple: boolean;
  selectedOptions: string | string[] | null;
}

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

export default function ReadingTestClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const [timeLeft, setTimeLeft] = useState("57:25");
  const [selectedPassage, setSelectedPassage] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [switchReading, setSwitchReading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>(
    DATA.passageQuestions2.flatMap((passage) =>
      passage
        .filter((q) => q.q_type === "MP")
        .flatMap((q) =>
          q.question_data.map((qd) => ({
            id: qd.id,
            question: "question" in qd ? qd.question : "",
            options: "choice" in qd ? qd.choice : [],
            isMultiple: "isMultiple" in qd ? qd.isMultiple : false,
            selectedOptions: "isMultiple" in qd && qd.isMultiple ? [] : null,
          }))
        )
    )
  );

  const passages = [
    { id: 1, startQuestion: 1, endQuestion: 13, answeredQuestions: 7 },
    { id: 2, startQuestion: 14, endQuestion: 26, answeredQuestions: 4 },
    { id: 3, startQuestion: 27, endQuestion: 40, answeredQuestions: 8 },
  ];

  const handlePassageSelect = (passageId: number) => {
    setSelectedPassage(passageId);
    setCurrentPage(passageId);
  };

  // Move to next passage
  const handleNextPassage = () => {
    const nextPassage =
      selectedPassage < passages.length ? selectedPassage + 1 : 1;
    handlePassageSelect(nextPassage);
  };

  // Move to previous passage
  const handlePreviousPassage = () => {
    const prevPassage =
      selectedPassage > 1 ? selectedPassage - 1 : passages.length;
    handlePassageSelect(prevPassage);
  };

  const currentQuestions = DATA.passageQuestions2[selectedPassage - 1];

  const currentPassage = passages[selectedPassage - 1];

  // Generate question numbers for the current passage only
  const passageQuestionNumbers = Array.from(
    { length: currentPassage.endQuestion - currentPassage.startQuestion + 1 },
    (_, i) => currentPassage.startQuestion + i
  );

  // Determine which questions are answered
  const getAnsweredStatus = (questionNum: number) => {
    const questionIndex = questionNum - currentPassage.startQuestion + 1;
    return questionIndex <= currentPassage.answeredQuestions;
  };

  const handleSelectOption = (questionId: number, option: string) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              selectedOptions: q.isMultiple
                ? Array.isArray(q.selectedOptions)
                  ? q.selectedOptions.includes(option)
                    ? q.selectedOptions.filter((opt) => opt !== option) // Deselect
                    : [...q.selectedOptions, option] // Add selection
                  : [option] // Initialize array for multiple-choice
                : option, // Set string for single-choice
            }
          : q
      )
    );
  };

  return (
    <div className="relative min-h-screen w-full bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between bg-white border-b border-gray-200 px-4 py-2 z-20">
        <div className="hidden lg:flex items-center w-[10%] py-3">
          <Image
            src={IMAGES.LOGO}
            alt="DOL DINH LUC"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
        <div className="text-center">
          <div className="font-semibold">IELTS Reading Test</div>
          <div className="text-sm text-gray-600">CAM13 - Reading Test 4</div>
        </div>
        <div className="flex items-center">
          <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{timeLeft}</span>
          </div>
          <Link href="/" className="text-gray-400 hover:text-gray-600 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
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
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="fixed top-[0px] bottom-[0px] left-0 right-0 grid grid-cols-1 lg:grid-cols-2 w-full overflow-y-auto pb-20 pt-14">
        {/* Reading passage */}
        <div
          className={`p-4 pt-8 overflow-y-auto border-r border-gray-200 ${
            switchReading ? "" : "hidden lg:block"
          }`}
        >
          {selectedPassage === 1 && (
            <div>
              <h1 className="w-full text-xl font-bold mb-4">Title 1</h1>
              <p className="mb-4 text-sm">Passage 1</p>
            </div>
          )}
          {selectedPassage === 2 && (
            <div>
              <h1 className="w-full text-xl font-bold mb-4">Title 2</h1>
              <p className="mb-4 text-sm">Passage 2</p>
            </div>
          )}
          {selectedPassage === 3 && (
            <div>
              <h1 className="w-full text-xl font-bold mb-4">Title 3</h1>
              <p className="mb-4 text-sm">Passage 3</p>
            </div>
          )}
        </div>

        {/* Questions */}
        <div
          className={`bg-white p-4 pt-8 pb-10 overflow-y-auto h-full ${
            switchReading ? "hidden lg:block" : ""
          }`}
        >
          {currentQuestions.map((questionSet, index) => (
            <div key={index} className="mb-6">
              {questionSet.q_type === "MP" && (
                <>
                  <QuizHeader
                    title={`Questions ${questionSet.question_data[0].id} - ${
                      questionSet.question_data[
                        questionSet.question_data.length - 1
                      ].id
                    }`}
                    subtitle="Choose the correct answer"
                  />
                  {questionSet.question_data.map((q) => {
                    const questionState = questions.find(
                      (qs) => qs.id === q.id
                    );
                    return (
                      <QuizQuestion
                        key={q.id}
                        id={q.id}
                        question={"question" in q ? q.question : ""}
                        options={"choice" in q ? q.choice : []}
                        isMultiple={"isMultiple" in q ? q.isMultiple : false}
                        selectedOptions={questionState?.selectedOptions || null}
                        onSelectOption={(option) =>
                          handleSelectOption(q.id, option)
                        }
                      />
                    );
                  })}
                </>
              )}
              {questionSet.q_type === "FI" && (
                <ShortAnswerQuiz
                  title={`Questions ${questionSet.question_data[0].id} - ${
                    questionSet.question_data[
                      questionSet.question_data.length - 1
                    ].id
                  }`}
                  subtitle="Complete the sentences below"
                  instructions="Write your answers in the boxes provided."
                  questions={questionSet.question_data.map((q) => ({
                    id: q.id,
                    start_passage: "start_passage" in q ? q.start_passage : "",
                    end_passage: "end_passage" in q ? q.end_passage : "",
                  }))}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="fixed bottom-0 left-0 right-0 bg-white pt-0 pb-2 lg:pt-2 lg:pb-2 z-10">
        <div className="hidden lg:flex flex-wrap justify-center mt-0 gap-1 max-w-3xl mx-auto">
          {passageQuestionNumbers.map((questionNum) => {
            const isAnswered = getAnsweredStatus(questionNum);
            return (
              <button
                key={questionNum}
                className={`w-8 h-8 rounded-md flex items-center justify-center text-xs ${
                  isAnswered
                    ? "bg-[#FA812F] text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {questionNum}
              </button>
            );
          })}
        </div>

        {/* NAVIGATE DESKTOP */}
        <div className="hidden lg:flex justify-between mt-2 text-sm border-t border-gray-200 pt-2">
          <div
            className={`${
              selectedPassage === 1 ? "" : "border border-[#FA812F]"
            } w-36 flex justify-center items-center rounded-lg my-2 py-2 px-4 bg-white ml-4 cursor-pointer`}
            onClick={handlePreviousPassage}
          >
            <div
              className={`text-[#FA812F] font-medium text-md justify-center items-center ${
                selectedPassage === 1 ? "hidden" : "flex"
              }`}
            >
              <ChevronLeft color="#FA812F" /> Passage {selectedPassage - 1}
            </div>
          </div>

          <div className="flex justify-center items-center">
            {passages.map((passage) => (
              <PassageProgressBar
                key={passage.id}
                passageNumber={passage.id}
                currentQuestion={passage.answeredQuestions}
                totalQuestions={passage.endQuestion - passage.startQuestion + 1}
                choosenPassage={selectedPassage === passage.id}
                onClick={() => handlePassageSelect(passage.id)}
              />
            ))}
          </div>
          <div
            className={`w-36 flex justify-center items-center ${
              selectedPassage === 3 ? "hidden" : "border border-[#FA812F]"
            } rounded-lg my-2 py-2 px-4 bg-white mr-4 cursor-pointer`}
            onClick={handleNextPassage}
          >
            <div
              className={`text-[#FA812F] font-medium text-md justify-center items-center ${
                selectedPassage === 3 ? "hidden" : "flex"
              }`}
            >
              Passage {selectedPassage + 1} <ChevronRight color="#FA812F" />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <Link
            href="/reading-test/view-result"
            className={`w-36 flex justify-center items-center ${
              selectedPassage === 3 ? "border border-[#FA812F]" : "hidden"
            } rounded-lg my-2 py-2 px-4 mr-4 bg-[#FA812F] text-white cursor-pointer`}
          >
            <div
              className={`font-medium text-md justify-center items-center ${
                selectedPassage === 3 ? "flex" : "hidden"
              }`}
            >
              Nộp bài
            </div>
          </Link>
        </div>

        {/* NAVIGATE MOBILE */}
        <div className="lg:hidden flex relative justify-center items-center py-0 pt-2 border-t border-gray-200">
          <div className="flex justify-center text-sm">
            {passages.map((passage) => (
              <PassageProgressBarMobile
                key={passage.id}
                passageNumber={passage.id}
                currentQuestion={passage.answeredQuestions}
                totalQuestions={passage.endQuestion - passage.startQuestion + 1}
                choosenPassage={passage.id === selectedPassage}
                onClick={() => handlePassageSelect(passage.id)}
              />
            ))}
          </div>

          {/* SUBMIT BUTTON */}
          <div className="flex flex-col justify-center -translate-y-[2px]">
            <div className="w-full flex justify-center">
              <div
                className={`w-11 h-11 border-2 border-gray-300 rounded-full bg-white cursor-pointer flex items-center justify-center`}
                onClick={() => setIsPopupOpen(true)}
              >
                <Grid2x2Check color="#6B7280" size={17} />
              </div>
            </div>
            <div
              className={`text-gray-500 text-center font-bold text-[9px] mt-0.5`}
            >
              Reviews & Submit
            </div>
          </div>

          {/* Toggle Button (Mobile) */}
          <div className="lg:hidden absolute bg-[#FA812F] rounded-full bottom-[0%] right-[5%] -translate-y-24 z-30">
            <div
              className="p-3.5"
              onClick={() => setSwitchReading(!switchReading)}
            >
              {switchReading ? (
                <Grid2x2Check color="white" />
              ) : (
                <FileText color="white" />
              )}
            </div>
          </div>
        </div>

        {/* POPUP MENU QUESTIONS */}
        <AnimatePresence>
          {isPopupOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-0 top-0 left-0 right-0 bg-black z-20"
              />
              <PopupMenu isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
