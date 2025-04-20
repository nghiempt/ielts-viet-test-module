import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { IMAGES } from "@/utils/images";
import PassageProgressBar from "./components/processing-bar";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Grid2x2Check } from "lucide-react";
import PassageProgressBarMobile from "./components/processing-bar-mobile";
import { motion, AnimatePresence } from "framer-motion";
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

interface PassageQuestion {
  q_type: "MP" | "FI";
  question_data: {
    id: number | string;
    question?: string;
    choice?: { id: string; text: string }[];
    isMultiple?: boolean;
    start_passage?: string;
    end_passage?: string;
  }[];
}

const PopupMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  // Section data from your original code
  const sections = [
    {
      id: 1,
      answeredQuestions: 7,
      totalQuestions: 10,
      questionRange: Array.from({ length: 10 }, (_, i) => i + 1),
    },
    {
      id: 2,
      answeredQuestions: 4,
      totalQuestions: 10,
      questionRange: Array.from({ length: 10 }, (_, i) => i + 11),
    },
    {
      id: 3,
      answeredQuestions: 8,
      totalQuestions: 10,
      questionRange: Array.from({ length: 10 }, (_, i) => i + 21),
    },
    {
      id: 4,
      answeredQuestions: 6,
      totalQuestions: 10,
      questionRange: Array.from({ length: 10 }, (_, i) => i + 31),
    },
  ];

  const getQuestionStatus = (sectionId: any, questionNum: any) => {
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
                Bạn có 10 câu hỏi để review và sửa lại đáp án ở các sections 1,
                2, 3 và 4.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex border-b">
              <button
                className={`flex-1 py-3 text-center font-medium text-sm ${
                  selectedTab === 0
                    ? "text-[#FA812F] border-b-2 border-[#FA812F]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setSelectedTab(0)}
              >
                Sections 1-2
              </button>
              <button
                className={`flex-1 py-3 text-center font-medium text-sm ${
                  selectedTab === 1
                    ? "text-[#FA812F] border-b-2 border-[#FA812F]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setSelectedTab(1)}
              >
                Sections 3-4
              </button>
            </div>

            {/* Tab Content */}
            <div className="px-6 py-4 overflow-y-auto max-h-[60vh]">
              {selectedTab === 0 && (
                <>
                  {/* Section 1 */}
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
                  {/* Section 2 */}
                  <div>
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
                </>
              )}
              {selectedTab === 1 && (
                <>
                  {/* Section 3 */}
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
                  {/* Section 4 */}
                  <div>
                    <h3 className="text-sm font-bold mb-3">SECTION 4</h3>
                    <div className="grid grid-cols-5 gap-4">
                      {sections[3].questionRange.map((num) => (
                        <div
                          key={num}
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium ${
                            getQuestionStatus(4, num)
                              ? "bg-green-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Submit Button */}
            <div className="px-4 py-5">
              <Link href={"/listening-test/view-result"}>
                <button className="w-full py-3 bg-[#FA812F] text-white font-medium rounded-md hover:bg-orange-600 transition duration-150">
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

const ListeningTestClient: React.FC = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [timeLeft, setTimeLeft] = useState("57:25");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const sections = [
    {
      id: 1,
      answeredQuestions: 7, // Renamed from currentQuestion
      totalQuestions: 10,
      choosenPassage: true,
      matchQuestions: [5, 6, 7, 8, 9, 10],
      questionRange: Array.from({ length: 10 }, (_, i) => i + 1),
    },
    {
      id: 2,
      answeredQuestions: 4, // Renamed from currentQuestion
      totalQuestions: 10,
      choosenPassage: false,
      matchQuestions: [15, 16, 17, 18, 19, 20],
      questionRange: Array.from({ length: 10 }, (_, i) => i + 11),
    },
    {
      id: 3,
      answeredQuestions: 8, // Renamed from currentQuestion
      totalQuestions: 10,
      choosenPassage: false,
      matchQuestions: [25, 26, 27, 28, 29, 30],
      questionRange: Array.from({ length: 10 }, (_, i) => i + 21),
    },
    {
      id: 4,
      answeredQuestions: 6, // Renamed from currentQuestion
      totalQuestions: 10,
      choosenPassage: false,
      matchQuestions: [35, 36, 37, 38, 39, 40],
      questionRange: Array.from({ length: 10 }, (_, i) => i + 31),
    },
  ];

  const currentQuestions: PassageQuestion[] = (
    DATA.sectionQuestionLis[activeSection - 1] || []
  ).map((item) => ({
    ...item,
    q_type: item.q_type as "MP" | "FI",
    question_data: item.question_data.map((qd) => ({
      ...qd,
      choice:
        "choice" in qd
          ? qd.choice.map((text, index) => ({ id: `${index}`, text }))
          : undefined,
    })),
  }));

  const handleSectionSelect = (sectionId: number) => {
    setActiveSection(sectionId);
    setCurrentPage(sectionId);
  };

  const currentSection = sections.find(
    (section) => section.id === activeSection
  );

  // Add function to determine answered status
  const getAnsweredStatus = (questionNum: number) => {
    const questionIndex =
      questionNum - (currentSection?.questionRange[0] || 1) + 1;
    return questionIndex <= (currentSection?.answeredQuestions || 0);
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
    <div className="relative bg-gray-100 min-h-screen w-full">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between bg-white py-2 px-4 shadow-sm z-10">
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
          <div className="font-semibold">IELTS Online Test</div>
          <div className="text-sm text-gray-600">CAM16 - Listening Test 4</div>
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
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="fixed top-[0] bottom-[0] left-0 right-0 overflow-y-auto pt-14 pb-16">
        <div className="container mx-auto w-full lg:w-[65%] p-3 lg:p-4 pt-5 lg:pt-10 pb-3 lg:pb-16">
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
                        id={
                          typeof q.id === "number" ? q.id : parseInt(q.id, 10)
                        }
                        question={q.question || ""}
                        options={q.choice?.map((choice) => choice.text) || []}
                        isMultiple={q.isMultiple || false}
                        selectedOptions={questionState?.selectedOptions || null}
                        onSelectOption={(option) =>
                          handleSelectOption(
                            typeof q.id === "number"
                              ? q.id
                              : parseInt(q.id, 10),
                            option
                          )
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
                    id: typeof q.id === "string" ? parseInt(q.id, 10) : q.id,
                    start_passage: q.start_passage || "",
                    end_passage: q.end_passage || "",
                  }))}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white z-10">
        <div className="hidden lg:flex flex-wrap justify-center mt-2 gap-1 max-w-3xl mx-auto pb-2">
          {currentSection?.questionRange.map((questionNum) => {
            const isAnswered = getAnsweredStatus(questionNum);
            return (
              <button
                key={questionNum}
                className={`w-8 h-8 rounded-md flex items-center justify-center text-xs ${
                  isAnswered
                    ? "bg-[#FA812F] text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
                onClick={() => handleSectionSelect(currentSection?.id || 1)}
              >
                {questionNum}
              </button>
            );
          })}
        </div>
        {/* NAVIGATION DESKTOP  */}
        <div className="hidden lg:flex justify-between items-center p-2 border-t border-gray-200">
          <div
            className={`${
              activeSection === 1 ? "" : "border border-[#FA812F]"
            } w-36 flex justify-center items-center rounded-lg py-2 px-4 bg-white ml-4 cursor-pointer`}
            onClick={() =>
              handleSectionSelect(activeSection > 1 ? activeSection - 1 : 4)
            }
          >
            <div
              className={`text-[#FA812F] font-medium text-md justify-center items-center ${
                activeSection === 1 ? "hidden" : "flex"
              }`}
            >
              <ChevronLeft color="#FA812F" /> Section {activeSection - 1}
            </div>
          </div>
          <div className="flex justify-center text-sm">
            {sections.map((section) => (
              <PassageProgressBar
                key={section.id}
                passageNumber={section.id}
                currentQuestion={section.answeredQuestions} // Updated from currentQuestion
                totalQuestions={section.totalQuestions}
                choosenPassage={activeSection === section.id}
                onClick={() => handleSectionSelect(section.id)}
              />
            ))}
          </div>
          <div
            className={`w-36 flex justify-center items-center ${
              activeSection === 4 ? "hidden" : "border border-[#FA812F]"
            } rounded-lg py-2 px-4 bg-white mr-4 cursor-pointer`}
            onClick={() =>
              handleSectionSelect(activeSection < 4 ? activeSection + 1 : 1)
            }
          >
            <div
              className={`text-[#FA812F] font-medium text-md justify-center items-center ${
                activeSection === 4 ? "hidden" : "flex"
              }`}
            >
              Section {activeSection + 1} <ChevronRight color="#FA812F" />
            </div>
          </div>

          {/* SUBMIT BUTTON  */}
          <Link
            href="/listening-test/view-result"
            className={`w-36 flex justify-center items-center ${
              activeSection === 4 ? "border border-[#FA812F]" : "hidden"
            } rounded-lg my-2 py-2 px-4 mr-4 bg-[#FA812F] text-white cursor-pointer`}
          >
            <div
              className={`font-medium text-md justify-center items-center ${
                activeSection === 4 ? "flex" : "hidden"
              }`}
            >
              Nộp bài
            </div>
          </Link>
        </div>
        {/* NAVIGATION MOBILE  */}
        <div className="lg:hidden flex justify-center items-center py-2 border-t border-gray-200">
          <div className="flex justify-center text-sm">
            {sections.map((section) => (
              <PassageProgressBarMobile
                key={section.id}
                passageNumber={section.id}
                currentQuestion={section.answeredQuestions} // Updated from currentQuestion
                totalQuestions={section.totalQuestions}
                choosenPassage={activeSection === section.id}
                onClick={() => handleSectionSelect(section.id)}
              />
            ))}
          </div>

          {/* SUBMIT BUTTON  */}
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
        </div>
      </div>

      {/* POPUP MENU QUESTIONS  */}
      <div className="fixed bottom-0 left-0 right-0 z-30">
        <PopupMenu isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
      </div>
      {isPopupOpen && (
        <div className="absolute bottom-0 top-0 left-0 right-0 bg-black opacity-30 z-20"></div>
      )}
    </div>
  );
};

export default ListeningTestClient;
