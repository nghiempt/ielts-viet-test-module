import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { IMAGES } from "@/utils/images";
import PassageProgressBar from "./components/processing-bar";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Grid2x2Check } from "lucide-react";
import PassageProgressBarMobile from "./components/processing-bar-mobile";
import { motion, AnimatePresence } from "framer-motion";

interface QuestionOption {
  id: string;
  text: string;
}

interface MatchingQuestion {
  id: number;
  city: string;
  options: { id: string; text: string }[];
  selectedAnswer?: string;
}

interface MultipleChoiceQuestion {
  id: string;
  text: string;
  options: QuestionOption[];
  selectedAnswers: string[];
}

interface PopupMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onQuestionSelect: (questionNum: number) => void;
}

const PopupMenu: React.FC<PopupMenuProps> = ({
  isOpen,
  setIsOpen,
  onQuestionSelect,
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
            <div className="px-6 py-3">
              <p className="text-gray-700 text-xs">
                Bạn có 10 câu hỏi để review và sửa lại đáp án ở các sections 1,
                2, 3 và 4.
              </p>
            </div>
            <div className="flex border-b">
              <button
                className={`flex-1 py-3 text-center font-medium text-sm ${
                  selectedTab === 0
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setSelectedTab(0)}
              >
                Sections 1-2
              </button>
              <button
                className={`flex-1 py-3 text-center font-medium text-sm ${
                  selectedTab === 1
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setSelectedTab(1)}
              >
                Sections 3-4
              </button>
            </div>
            <div className="px-6 py-4 overflow-y-auto max-h-[60vh]">
              {selectedTab === 0 && (
                <>
                  <div className="mb-5">
                    <h3 className="text-sm font-bold mb-3">SECTION 1</h3>
                    <div className="grid grid-cols-5 gap-4">
                      {sections[0].questionRange.map((num) => (
                        <div
                          key={num}
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer ${
                            getQuestionStatus(1, num)
                              ? "bg-green-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() => {
                            onQuestionSelect(num);
                            setIsOpen(false);
                          }}
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-3">SECTION 2</h3>
                    <div className="grid grid-cols-5 gap-4">
                      {sections[1].questionRange.map((num) => (
                        <div
                          key={num}
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer ${
                            getQuestionStatus(2, num)
                              ? "bg-green-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() => {
                            onQuestionSelect(num);
                            setIsOpen(false);
                          }}
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
                  <div className="mb-5">
                    <h3 className="text-sm font-bold mb-3">SECTION 3</h3>
                    <div className="grid grid-cols-5 gap-4">
                      {sections[2].questionRange.map((num) => (
                        <div
                          key={num}
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer ${
                            getQuestionStatus(3, num)
                              ? "bg-green-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() => {
                            onQuestionSelect(num);
                            setIsOpen(false);
                          }}
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-3">SECTION 4</h3>
                    <div className="grid grid-cols-5 gap-4">
                      {sections[3].questionRange.map((num) => (
                        <div
                          key={num}
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer ${
                            getQuestionStatus(4, num)
                              ? "bg-green-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() => {
                            onQuestionSelect(num);
                            setIsOpen(false);
                          }}
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="px-4 py-5">
              <button
                onClick={() => alert("Answers submitted!")}
                className="w-full py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition duration-150"
              >
                Submit
              </button>
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
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const [timeLeft, setTimeLeft] = useState("57:25");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
    // Section 1
    {
      id: "1-2",
      text: "Which TWO benefits of city bike-sharing schemes do the students agree are the most important?",
      options: [
        { id: "A", text: "reducing noise pollution" },
        { id: "B", text: "reducing traffic congestion" },
        { id: "C", text: "improving air quality" },
        { id: "D", text: "encouraging health and fitness" },
        { id: "E", text: "making cycling affordable" },
      ],
      selectedAnswers: [],
    },
    {
      id: "3-4",
      text: "Which TWO things do the students think are necessary for successful bike-sharing schemes?",
      options: [
        { id: "A", text: "Bikes should have a GPS system." },
        { id: "B", text: "The app should be easy to use." },
        { id: "C", text: "Public awareness should be raised." },
        { id: "D", text: "Only one scheme should be available." },
        { id: "E", text: "There should be a large network of cycle lanes." },
      ],
      selectedAnswers: [],
    },
    // Section 2
    {
      id: "11-12",
      text: "Which TWO benefits of city bike-sharing schemes do the students agree are the most important?",
      options: [
        { id: "A", text: "reducing noise pollution" },
        { id: "B", text: "reducing traffic congestion" },
        { id: "C", text: "improving air quality" },
        { id: "D", text: "encouraging health and fitness" },
        { id: "E", text: "making cycling affordable" },
      ],
      selectedAnswers: [],
    },
    {
      id: "13-14",
      text: "Which TWO things do the students think are necessary for successful bike-sharing schemes?",
      options: [
        { id: "A", text: "Bikes should have a GPS system." },
        { id: "B", text: "The app should be easy to use." },
        { id: "C", text: "Public awareness should be raised." },
        { id: "D", text: "Only one scheme should be available." },
        { id: "E", text: "There should be a large network of cycle lanes." },
      ],
      selectedAnswers: [],
    },
    // Section 3
    {
      id: "21-22",
      text: "Which TWO benefits of city bike-sharing schemes do the students agree are the most important?",
      options: [
        { id: "A", text: "reducing noise pollution" },
        { id: "B", text: "reducing traffic congestion" },
        { id: "C", text: "improving air quality" },
        { id: "D", text: "encouraging health and fitness" },
        { id: "E", text: "making cycling affordable" },
      ],
      selectedAnswers: [],
    },
    {
      id: "23-24",
      text: "Which TWO things do the students think are necessary for successful bike-sharing schemes?",
      options: [
        { id: "A", text: "Bikes should have a GPS system." },
        { id: "B", text: "The app should be easy to use." },
        { id: "C", text: "Public awareness should be raised." },
        { id: "D", text: "Only one scheme should be available." },
        { id: "E", text: "There should be a large network of cycle lanes." },
      ],
      selectedAnswers: [],
    },
    // Section 4
    {
      id: "31-32",
      text: "Which TWO benefits of city bike-sharing schemes do the students agree are the most important?",
      options: [
        { id: "A", text: "reducing noise pollution" },
        { id: "B", text: "reducing traffic congestion" },
        { id: "C", text: "improving air quality" },
        { id: "D", text: "encouraging health and fitness" },
        { id: "E", text: "making cycling affordable" },
      ],
      selectedAnswers: [],
    },
    {
      id: "33-34",
      text: "Which TWO things do the students think are necessary for successful bike-sharing schemes?",
      options: [
        { id: "A", text: "Bikes should have a GPS system." },
        { id: "B", text: "The app should be easy to use." },
        { id: "C", text: "Public awareness should be raised." },
        { id: "D", text: "Only one scheme should be available." },
        { id: "E", text: "There should be a large network of cycle lanes." },
      ],
      selectedAnswers: [],
    },
  ];

  const matchingQuestions: MatchingQuestion[] = [
    // Section 1
    {
      id: 5,
      city: "Amsterdam",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 6,
      city: "Dublin",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 7,
      city: "London",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 8,
      city: "Buenos Aires",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 9,
      city: "New York",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 10,
      city: "Sydney",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    // Section 2
    {
      id: 15,
      city: "Amsterdam",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 16,
      city: "Dublin",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 17,
      city: "London",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 18,
      city: "Buenos Aires",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 19,
      city: "New York",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 20,
      city: "Sydney",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    // Section 3
    {
      id: 25,
      city: "Amsterdam",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 26,
      city: "Dublin",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 27,
      city: "London",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 28,
      city: "Buenos Aires",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 29,
      city: "New York",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 30,
      city: "Sydney",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    // Section 4
    {
      id: 35,
      city: "Amsterdam",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 36,
      city: "Dublin",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 37,
      city: "London",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 38,
      city: "Buenos Aires",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 39,
      city: "New York",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
    {
      id: 40,
      city: "Sydney",
      options: [
        { id: "A", text: "They agree it has been disappointing." },
        { id: "B", text: "They think it should be cheaper." },
        { id: "C", text: "They are surprised it has been so successful." },
        { id: "D", text: "They agree that more investment is required." },
        { id: "E", text: "They think the system has been well designed." },
      ],
      selectedAnswer: "",
    },
  ];

  const sections = [
    {
      id: 1,
      answeredQuestions: 7, // Renamed from currentQuestion
      totalQuestions: 10,
      choosenPassage: true,
      mcQuestions: ["1-2", "3-4"],
      matchQuestions: [5, 6, 7, 8, 9, 10],
      questionRange: Array.from({ length: 10 }, (_, i) => i + 1),
    },
    {
      id: 2,
      answeredQuestions: 4, // Renamed from currentQuestion
      totalQuestions: 10,
      choosenPassage: false,
      mcQuestions: ["11-12", "13-14"],
      matchQuestions: [15, 16, 17, 18, 19, 20],
      questionRange: Array.from({ length: 10 }, (_, i) => i + 11),
    },
    {
      id: 3,
      answeredQuestions: 8, // Renamed from currentQuestion
      totalQuestions: 10,
      choosenPassage: false,
      mcQuestions: ["21-22", "23-24"],
      matchQuestions: [25, 26, 27, 28, 29, 30],
      questionRange: Array.from({ length: 10 }, (_, i) => i + 21),
    },
    {
      id: 4,
      answeredQuestions: 6, // Renamed from currentQuestion
      totalQuestions: 10,
      choosenPassage: false,
      mcQuestions: ["31-32", "33-34"],
      matchQuestions: [35, 36, 37, 38, 39, 40],
      questionRange: Array.from({ length: 10 }, (_, i) => i + 31),
    },
  ];

  const handleSectionSelect = (sectionId: number) => {
    setActiveSection(sectionId);
    setCurrentPage(sectionId);
    const section = sections.find((s) => s.id === sectionId);
    if (
      section &&
      (selectedQuestion < section.questionRange[0] ||
        selectedQuestion >
          section.questionRange[section.questionRange.length - 1])
    ) {
      setSelectedQuestion(section.questionRange[0]);
    }
  };

  const handleQuestionSelect = (questionNum: number) => {
    const section = sections.find(
      (s) =>
        questionNum >= s.questionRange[0] &&
        questionNum <= s.questionRange[s.questionRange.length - 1]
    );
    if (section) {
      setActiveSection(section.id);
      setCurrentPage(section.id);
      setSelectedQuestion(questionNum);
    }
  };

  const handleNextQuestion = () => {
    if (selectedQuestion < sections[sections.length - 1].questionRange[9]) {
      const nextQuestion = selectedQuestion + 1;
      const nextSection = sections.find(
        (s) =>
          nextQuestion >= s.questionRange[0] &&
          nextQuestion <= s.questionRange[s.questionRange.length - 1]
      );
      if (nextSection) {
        setActiveSection(nextSection.id);
        setCurrentPage(nextSection.id);
        setSelectedQuestion(nextQuestion);
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (selectedQuestion > sections[0].questionRange[0]) {
      const prevQuestion = selectedQuestion - 1;
      const prevSection = sections.find(
        (s) =>
          prevQuestion >= s.questionRange[0] &&
          prevQuestion <= s.questionRange[s.questionRange.length - 1]
      );
      if (prevSection) {
        setActiveSection(prevSection.id);
        setCurrentPage(prevSection.id);
        setSelectedQuestion(prevQuestion);
      }
    }
  };

  const currentSection = sections.find(
    (section) => section.id === activeSection
  );
  const currentMCQuestions = multipleChoiceQuestions.filter((q) =>
    currentSection?.mcQuestions.includes(q.id)
  );
  const currentMatchQuestions = matchingQuestions.filter((q) =>
    currentSection?.matchQuestions.includes(q.id)
  );

  const getAnsweredStatus = (questionNum: number) => {
    const questionIndex =
      questionNum - (currentSection?.questionRange[0] || 1) + 1;
    return questionIndex <= (currentSection?.answeredQuestions || 0);
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
        <div className="text-center mr-28">
          <div className="font-semibold">IELTS Reading Test</div>
          <div className="text-sm text-gray-600">CAM13 - Reading Test 4</div>
        </div>
        <div className="flex items-center">
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

      <div className="fixed top-[0] bottom-[0] left-0 right-0 overflow-y-auto pt-20 pb-28">
        <div className="container mx-auto w-full lg:w-[65%] p-3 lg:p-4 pt-5 pb-3">
          <div className="mb-4">
            <div className="bg-[#FA812F] text-white py-4 px-4 rounded-md flex justify-between items-center mb-2">
              <h2 className="font-medium">
                Questions {currentSection?.mcQuestions[0].charAt(0)} -{" "}
                {currentSection?.mcQuestions[1].charAt(2)}
              </h2>
              <span className="text-sm ml-5">Choose TWO letters, A-E.</span>
            </div>
            <div className="bg-white p-6 rounded-md shadow-sm">
              {currentMCQuestions.map((question) => (
                <div key={question.id} className="mb-8">
                  <div className="flex items-start mb-4">
                    <div className="w-24 text-blue-600 font-medium mr-4">
                      {question.id}
                    </div>
                    <div>{question.text}</div>
                  </div>
                  <div className="ml-0 lg:ml-10 space-y-3">
                    {question.options.map((option) => (
                      <div key={option.id} className="flex items-center">
                        <div className="w-6 h-6 flex items-center justify-center text-gray-500 mr-3">
                          {option.id}
                        </div>
                        <div>{option.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <div className="bg-[#FA812F] text-white py-4 px-4 rounded-md flex justify-between items-center mb-2">
              <h2 className="font-medium">
                Questions {currentSection?.matchQuestions[0]} -{" "}
                {
                  currentSection?.matchQuestions[
                    currentSection.matchQuestions.length - 1
                  ]
                }
              </h2>
              <span className="text-sm ml-5">
                Choose SIX answers from the box and write the correct letter,
                A-E.
              </span>
            </div>
            <div className="bg-white p-6 rounded-md shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {currentMatchQuestions.map((question) => (
                    <div key={question.id} className="flex items-start">
                      <div className="text-blue-600 font-medium mr-4">
                        {question.id}
                      </div>
                      <div className="flex-1">
                        <div className="mb-2">{question.city}</div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center mr-2">
                            <span className="text-gray-400 text-sm">?</span>
                          </div>
                          <div className="flex-1 h-10 px-3 py-2 bg-gray-100 text-gray-400 rounded">
                            Drop your answer here
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-center mb-4 font-medium text-gray-700">
                    Kéo option vào câu hỏi
                  </h3>
                  <div className="space-y-4">
                    {currentMatchQuestions[0].options.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center bg-white p-3 rounded shadow-sm"
                      >
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3">
                          {option.id}
                        </div>
                        <div>{option.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white pt-0 pb-2 lg:pt-0 lg:pb-2 z-10">
        <div className="hidden lg:flex justify-between mt-0 text-sm border-t border-gray-100 pt-0">
          <div className="flex justify-center items-center">
            {sections.map((section) => (
              <PassageProgressBar
                key={section.id}
                passageNumber={section.id}
                currentQuestion={selectedQuestion}
                totalQuestions={section.totalQuestions}
                startQuestion={section.questionRange[0]}
                endQuestion={
                  section.questionRange[section.questionRange.length - 1]
                }
                choosenPassage={section.id === activeSection}
                onClick={() => handleSectionSelect(section.id)}
                onQuestionClick={handleQuestionSelect}
              />
            ))}
          </div>
          <div className="flex flex-row">
            <div
              className={`w-full flex justify-center items-center rounded-lg my-2 py-2 px-4 bg-white ml-4 cursor-pointer ${
                selectedQuestion === sections[0].questionRange[0]
                  ? "opacity-50"
                  : ""
              }`}
              onClick={handlePreviousQuestion}
            >
              <div
                className={`text-[#FA812F] font-medium text-md justify-center items-center px-5 py-1 rounded-md flex border border-[#FA812F]`}
              >
                <ChevronLeft color="#FA812F" />
              </div>
            </div>
            <div
              className={`w-full flex justify-center items-center rounded-lg my-2 bg-white mr-4 cursor-pointer ${
                selectedQuestion ===
                sections[sections.length - 1].questionRange[9]
                  ? "opacity-50"
                  : ""
              }`}
              onClick={handleNextQuestion}
            >
              <div
                className={`text-[#FA812F] font-medium text-md justify-center items-center px-5 py-1 rounded-md flex border border-[#FA812F]`}
              >
                <ChevronRight color="#FA812F" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex justify-center items-center py-0 pt-2 border-t border-gray-200">
          <div className="flex justify-center text-sm">
            {sections.map((section) => (
              <PassageProgressBarMobile
                key={section.id}
                passageNumber={section.id}
                currentQuestion={selectedQuestion}
                totalQuestions={section.totalQuestions}
                startQuestion={section.questionRange[0]}
                endQuestion={
                  section.questionRange[section.questionRange.length - 1]
                }
                choosenPassage={section.id === activeSection}
                onClick={() => handleSectionSelect(section.id)}
                onQuestionClick={handleQuestionSelect}
              />
            ))}
          </div>

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
              <PopupMenu
                isOpen={isPopupOpen}
                setIsOpen={setIsPopupOpen}
                onQuestionSelect={handleQuestionSelect}
              />
            </>
          )}
        </AnimatePresence>
      </div>

      {/* POPUP MENU QUESTIONS  */}
      <div className="fixed bottom-0 left-0 right-0 z-30">
        <PopupMenu
          isOpen={isPopupOpen}
          setIsOpen={setIsPopupOpen}
          onQuestionSelect={handleQuestionSelect}
        />
      </div>
      {isPopupOpen && (
        <div className="absolute bottom-0 top-0 left-0 right-0 bg-black opacity-30 z-20"></div>
      )}
    </div>
  );
};

export default ListeningTestClient;
