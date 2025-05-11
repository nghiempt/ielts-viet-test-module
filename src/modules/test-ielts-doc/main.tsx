// pages/ielts-test.tsx
import { useEffect, useState } from "react";
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
import {
  QuizHeader,
  QuizQuestion,
} from "./components/test-type/multiple-choice/multiple-choice";
import { ShortAnswerQuiz } from "./components/test-type/fil-in-the-blank/fill-in";
import PopupMenu from "./components/pop-up";
import { usePathname, useRouter } from "next/navigation";
import { ReadingService } from "@/services/reading";
import { QuestionsService } from "@/services/questions";
import { SubmitService } from "@/services/submit";
import { ROUTES } from "@/utils/routes";
import "@/styles/hide-scroll.css";

interface Question {
  id: number;
  question: string;
  options: string[];
  isMultiple: boolean;
  selectedOptions: string | string[] | null;
  q_type: string;
  start_passage?: string;
  end_passage?: string;
  question_id: string;
}

interface PassageSection {
  _id: string;
  stest_id: string;
  type: string;
  image: string;
  content: string;
  part_num: number;
  question: Array<{
    question: any;
    _id: string;
    q_type: string;
    part_id: string;
    choices?: string[];
    isMultiple?: boolean;
    answer: string[];
    created_at: string;
    start_passage?: string;
    end_passage?: string;
  }>;
  created_at: string;
}

interface ReadingDetail {
  _id: string;
  type: string;
  parts: string[];
  name: string;
  thumbnail: string;
  time: number;
  created_at: string;
}

interface UserAnswer {
  question_id: string;
  answer: string[];
}

interface PartAnswer {
  part_id: string;
  user_answers: UserAnswer[];
  isComplete: boolean;
}

interface AnswerState {
  parts: PartAnswer[];
}

interface PassageInfo {
  id: number;
  startQuestion: number;
  endQuestion: number;
  answeredQuestions: number;
}

export default function ReadingTestClient() {
  const pathname = usePathname();
  const [data, setData] = useState<ReadingDetail | null>(null);
  const [passage1, setPassage1] = useState<PassageSection | null>(null);
  const [passage2, setPassage2] = useState<PassageSection | null>(null);
  const [passage3, setPassage3] = useState<PassageSection | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]); // Current passage questions
  const [allQuestions, setAllQuestions] = useState<Question[]>([]); // All questions across passages
  const [selectedPassage, setSelectedPassage] = useState(1);
  const [answers, setAnswers] = useState<AnswerState>({ parts: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [timeLeft, setTimeLeft] = useState("60:00");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [switchReading, setSwitchReading] = useState(true);
  const router = useRouter();
  const [showConfirmDialog, setShowConfirmDialog] = useState(true);
  const [showConfirmSubmitDialog, setShowConfirmSubmitDialog] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // COUNTING DOWN TIMER
  useEffect(() => {
    if (!timeLeft || !isTimerRunning) return;

    const [minutes, seconds] = timeLeft.split(":").map(Number);
    let totalSeconds = minutes * 60 + seconds;

    if (totalSeconds <= 0) {
      setTimeLeft("00:00");
      return;
    }

    const timer = setInterval(() => {
      totalSeconds -= 1;

      const newMinutes = Math.floor(totalSeconds / 60);
      const newSeconds = totalSeconds % 60;
      const formattedTime = `${newMinutes
        .toString()
        .padStart(2, "0")}:${newSeconds.toString().padStart(2, "0")}`;
      setTimeLeft(formattedTime);

      if (totalSeconds <= 0) {
        clearInterval(timer);
        setTimeLeft("00:00");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isTimerRunning]);

  // ALERT ON PAGE RELOAD OR CLOSE
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = ""; // Standard way to trigger the browser's confirmation dialog
      return "Are you sure you want to leave? Your answers will not be saved.";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // HANDLE EXIT LINK CLICK
  const handleExitClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const confirmExit = window.confirm(
      "Are you sure you want to leave? Your answers will not be saved."
    );

    if (confirmExit) {
      router.push(ROUTES.HOME);
    }
  };

  const calculatePassages = (): PassageInfo[] => {
    const passagesInfo: PassageInfo[] = [];
    const passageData = [passage1, passage2, passage3].filter(
      (p): p is PassageSection => p !== null
    );

    let questionCounter = 1;

    passageData.forEach((passage, index) => {
      const questionCount = passage.question.length;
      const partId = passage._id;

      const answeredQuestions = answers.parts
        .filter((part) => part.part_id === partId)
        .reduce((count, part) => {
          return (
            count +
            part.user_answers.filter(
              (ua) => ua.answer.length > 0 && ua.answer[0] !== ""
            ).length
          );
        }, 0);

      passagesInfo.push({
        id: index + 1,
        startQuestion: questionCounter,
        endQuestion: questionCounter + questionCount - 1,
        answeredQuestions,
      });

      questionCounter += questionCount;
    });

    return passagesInfo;
  };

  const passages = calculatePassages();

  const mapAndArrangeQuestions = (passage: PassageSection, startId: number) => {
    const mappedQuestions = passage.question.map((q, index) => {
      const partAnswer = answers.parts.find(
        (part) => part.part_id === q.part_id
      );
      const userAnswer = partAnswer?.user_answers.find(
        (ua) => ua.question_id === q._id
      );

      const selectedOptions = userAnswer?.answer?.length
        ? q.q_type === "MP" && q.isMultiple
          ? userAnswer.answer
          : q.q_type === "MP"
          ? userAnswer.answer[0]
          : userAnswer.answer[0] || ""
        : q.q_type === "MP"
        ? q.isMultiple
          ? []
          : null
        : "";

      return {
        id: startId + index,
        question: q.q_type === "MP" ? q.question : "",
        options: q.q_type === "MP" && q.choices ? q.choices : [],
        isMultiple: q.q_type === "MP" ? q.isMultiple || false : false,
        selectedOptions,
        q_type: q.q_type,
        start_passage: q.q_type === "FB" ? q.start_passage : undefined,
        end_passage: q.q_type === "FB" ? q.end_passage : undefined,
        question_id: q._id,
      };
    });

    const firstQuestionType = passage.question[0]?.q_type;
    const arrangedQuestions =
      firstQuestionType === "MP"
        ? [
            ...mappedQuestions.filter((q) => q.q_type === "MP"),
            ...mappedQuestions.filter((q) => q.q_type === "FB"),
          ]
        : [
            ...mappedQuestions.filter((q) => q.q_type === "FB"),
            ...mappedQuestions.filter((q) => q.q_type === "MP"),
          ];

    return arrangedQuestions.map((q, index) => ({
      ...q,
      id: startId + index,
    }));
  };

  const init = async () => {
    const segments = pathname.split("/").filter(Boolean);
    const id = segments[segments.length - 1];

    try {
      const res = await ReadingService.getReadingById(id);
      if (!res) throw new Error("Reading data not found");

      const [resP1, resP2, resP3] = await Promise.all([
        QuestionsService.getQuestionsById(res.parts[0]),
        QuestionsService.getQuestionsById(res.parts[1]),
        QuestionsService.getQuestionsById(res.parts[2]),
      ]);

      if (!resP1 || !resP2 || !resP3) {
        throw new Error("One or more passages not found");
      }
      if (res && resP1 && resP2 && resP3) {
        setPassage1(resP1);
        setPassage2(resP2);
        setPassage3(resP3);
        setData(res);

        setAnswers((prev) => {
          if (prev.parts.length > 0) return prev;

          const allQuestions = [
            ...resP1.question.map((q: any) => ({
              part_id: q.part_id,
              question_id: q._id,
            })),
            ...resP2.question.map((q: any) => ({
              part_id: q.part_id,
              question_id: q._id,
            })),
            ...resP3.question.map((q: any) => ({
              part_id: q.part_id,
              question_id: q._id,
            })),
          ];

          const groupedByPartId = allQuestions.reduce(
            (acc, { part_id, question_id }) => {
              if (!acc[part_id]) {
                acc[part_id] = {
                  part_id,
                  user_answers: [],
                  isComplete: false,
                };
              }
              acc[part_id].user_answers.push({ question_id, answer: [] });
              return acc;
            },
            {} as Record<string, PartAnswer>
          );

          const initialParts: PartAnswer[] = Object.values(groupedByPartId);
          return { parts: initialParts };
        });

        // Map all questions for all passages
        const passage1Questions = mapAndArrangeQuestions(resP1, 1);
        const passage2Questions = mapAndArrangeQuestions(
          resP2,
          passage1Questions.length + 1
        );
        const passage3Questions = mapAndArrangeQuestions(
          resP3,
          passage1Questions.length + passage2Questions.length + 1
        );

        // Store all questions in allQuestions state
        setAllQuestions([
          ...passage1Questions,
          ...passage2Questions,
          ...passage3Questions,
        ]);

        // Set initial questions for Passage 1
        setQuestions(passage1Questions);
      } else {
        setData(null);
      }
    } catch (error) {
      console.error("Error initializing reading test:", error);
      setData(null);
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    const startIds = passages.reduce(
      (acc, passage) => ({
        ...acc,
        [passage.id]: passage.startQuestion,
      }),
      {} as { [key: number]: number }
    );

    const passageData = { 1: passage1, 2: passage2, 3: passage3 };
    const selectedPassageData = passageData[selectedPassage as 1 | 2 | 3];
    if (selectedPassageData) {
      const updatedQuestions = mapAndArrangeQuestions(
        selectedPassageData,
        startIds[selectedPassage]
      );
      setQuestions(updatedQuestions);
    }
  }, [selectedPassage, passage1, passage2, passage3, answers]);

  const handlePassageSelect = (passageId: number) => {
    setSelectedPassage(passageId);
    setCurrentPage(passageId);
  };

  const handleQuestionSelect = (questionNum: number) => {
    const passage = passages.find(
      (p) => questionNum >= p.startQuestion && questionNum <= p.endQuestion
    );
    if (passage) {
      setSelectedPassage(passage.id);
      setCurrentPage(passage.id);
    }
  };

  const handleNextPassage = () => {
    const nextPassage =
      selectedPassage < passages.length ? selectedPassage + 1 : 1;
    handlePassageSelect(nextPassage);
  };

  const handlePreviousPassage = () => {
    const prevPassage =
      selectedPassage > 1 ? selectedPassage - 1 : passages.length;
    handlePassageSelect(prevPassage);
  };

  const currentPassage = passages[selectedPassage - 1] || {
    startQuestion: 1,
    endQuestion: 1,
    answeredQuestions: 0,
  };

  const passageQuestionNumbers = Array.from(
    {
      length: currentPassage.endQuestion - currentPassage.startQuestion + 1,
    },
    (_, i) => currentPassage.startQuestion + i
  );

  const getAnsweredStatus = (questionNum: number) => {
    // Use allQuestions instead of questions to check status across all passages
    const question = allQuestions.find((q) => q.id === questionNum);
    if (!question) return false;

    const questionData =
      passage1?.question.find((q) => q._id === question.question_id) ||
      passage2?.question.find((q) => q._id === question.question_id) ||
      passage3?.question.find((q) => q._id === question.question_id);

    if (!questionData) return false;

    const partAnswer = answers.parts.find(
      (part) => part.part_id === questionData.part_id
    );
    if (!partAnswer) return false;

    const userAnswer = partAnswer.user_answers.find(
      (ua) => ua.question_id === question.question_id
    );
    if (!userAnswer) return false;

    const hasAnswer = userAnswer.answer?.length > 0;
    if (!hasAnswer) return false;

    if (question.q_type === "FB") {
      return userAnswer.answer[0] !== "";
    }

    return true;
  };

  const updatePartCompletion = (partId: string) => {
    setAnswers((prev) => {
      const updatedParts = prev.parts.map((part) => {
        if (part.part_id === partId) {
          const allAnswered = part.user_answers.every(
            (ua) => ua.answer.length > 0 && ua.answer[0] !== ""
          );
          return { ...part, isComplete: allAnswered };
        }
        return part;
      });
      return { parts: updatedParts };
    });
  };

  const handleSelectOption = (questionId: number, option: string) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) {
      console.error("Question not found:", questionId);
      return;
    }

    const questionData =
      passage1?.question.find((q) => q._id === question.question_id) ||
      passage2?.question.find((q) => q._id === question.question_id) ||
      passage3?.question.find((q) => q._id === question.question_id);

    if (!questionData) {
      console.error("Question data not found for ID:", question.question_id);
      return;
    }

    setAnswers((prev) => {
      const updatedParts = prev.parts.map((part) => {
        if (part.part_id === questionData.part_id) {
          let updatedUserAnswers = part.user_answers;
          if (
            !updatedUserAnswers.some(
              (ua) => ua.question_id === question.question_id
            )
          ) {
            updatedUserAnswers = [
              ...updatedUserAnswers,
              { question_id: question.question_id, answer: [] },
            ];
          }

          updatedUserAnswers = updatedUserAnswers.map((ua) => {
            if (ua.question_id === question.question_id) {
              const currentAnswer = ua.answer || [];
              let newAnswer: string[];

              if (question.isMultiple) {
                newAnswer = currentAnswer.includes(option)
                  ? currentAnswer.filter((opt) => opt !== option)
                  : [...currentAnswer, option];
              } else {
                newAnswer = [option];
              }

              return {
                ...ua,
                answer: newAnswer,
              };
            }
            return ua;
          });

          return { ...part, user_answers: updatedUserAnswers };
        }
        return part;
      });

      return { parts: updatedParts };
    });

    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              selectedOptions: question.isMultiple
                ? Array.isArray(q.selectedOptions)
                  ? q.selectedOptions.includes(option)
                    ? q.selectedOptions.filter((opt) => opt !== option)
                    : [...q.selectedOptions, option]
                  : [option]
                : option,
            }
          : q
      )
    );

    // Update allQuestions to reflect the selected option across all passages
    setAllQuestions((prevAllQuestions) =>
      prevAllQuestions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              selectedOptions: question.isMultiple
                ? Array.isArray(q.selectedOptions)
                  ? q.selectedOptions.includes(option)
                    ? q.selectedOptions.filter((opt) => opt !== option)
                    : [...q.selectedOptions, option]
                  : [option]
                : option,
            }
          : q
      )
    );

    updatePartCompletion(questionData.part_id);
  };

  const handleFillInAnswer = (questionId: number, answer: string) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const questionData =
      passage1?.question.find((q) => q._id === question.question_id) ||
      passage2?.question.find((q) => q._id === question.question_id) ||
      passage3?.question.find((q) => q._id === question.question_id);

    if (!questionData) return;

    setAnswers((prev) => {
      const updatedParts = prev.parts.map((part) => {
        if (part.part_id === questionData.part_id) {
          const updatedUserAnswers = part.user_answers.map((ua) =>
            ua.question_id === question.question_id
              ? { ...ua, answer: [answer] }
              : ua
          );
          return { ...part, user_answers: updatedUserAnswers };
        }
        return part;
      });
      return { parts: updatedParts };
    });

    // Update allQuestions to reflect the fill-in answer
    setAllQuestions((prevAllQuestions) =>
      prevAllQuestions.map((q) =>
        q.id === questionId ? { ...q, selectedOptions: answer } : q
      )
    );

    updatePartCompletion(questionData.part_id);
  };

  const handleSubmit = async () => {
    const body = {
      user_id: "",
      parts: answers.parts,
    };

    try {
      const response = await SubmitService.submitTest(body);

      const jsonData = JSON.stringify(response, null, 2);

      localStorage.setItem("readingTestAnswers", jsonData);

      const segments = pathname.split("/").filter(Boolean);
      const testId = segments[segments.length - 1];

      router.push(`${ROUTES.READING_STATISTIC}/${testId}`);
    } catch (error) {
      console.error("Error submitting test:", error);
    }
  };

  const handleStartTest = () => {
    setShowConfirmDialog(false);
    setIsTimerRunning(true); // Start the timer
  };

  const handleCancelTest = () => {
    setShowConfirmDialog(false);
    router.push("/");
  };

  const handleSubmitTest = () => {
    handleSubmit();
  };

  const handleCancelSubmitTest = () => {
    setShowConfirmSubmitDialog(false);
  };

  return (
    <div className="relative min-h-screen w-full bg-gray-50">
      {/* Confirmation Dialog */}
      <AnimatePresence>
        {showConfirmDialog && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-50"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-[37%] left-[4%] lg:left-[37%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 z-50 w-11/12 max-w-md"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Bắt đầu bài kiểm tra Đọc
              </h2>
              <p className="text-gray-600 mb-6">
                Hãy bấm Bắt đầu khi bạn đã sẵn sàng làm bài kiểm tra. Bạn sẽ có
                60 phút để hoàn thành bài kiểm tra này.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleCancelTest}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                >
                  Hủy
                </button>
                <button
                  onClick={handleStartTest}
                  className="px-4 py-2 bg-[#FA812F] text-white rounded-md hover:bg-[#e06b1f] transition"
                >
                  Bắt đầu
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Confirmation Submit Dialog */}
      <AnimatePresence>
        {showConfirmSubmitDialog && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-50"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-[37%] left-[4%] lg:left-[37%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 z-50 w-11/12 max-w-md"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Xác nhận nộp bài
              </h2>
              <p className="text-gray-600 mb-6">
                Bạn có chắc chắn muốn nộp bài kiểm tra này không? Sau khi nộp,
                bạn sẽ không thể chỉnh sửa bài làm của mình.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleCancelSubmitTest}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                >
                  Hủy
                </button>
                <button
                  onClick={handleSubmitTest}
                  className="px-4 py-2 bg-[#FA812F] text-white rounded-md hover:bg-[#e06b1f] transition"
                >
                  Nộp bài
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between bg-white border-b border-gray-200 px-4 py-2 z-20">
        <Link
          href={ROUTES.HOME}
          className="hidden lg:flex items-center w-[10%] py-3"
        >
          <Image
            src={IMAGES.LOGO}
            alt="DOL DINH LUC"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </Link>
        <div className="text-center">
          <div className="font-semibold">{data?.name}</div>
          <div className="text-sm text-gray-600">Reading Test</div>
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
            <span className="text-[#FA812F] font-semibold">{timeLeft}</span>
          </div>
          <Link
            href={ROUTES.HOME}
            className="text-gray-400 hover:text-gray-600 ml-4"
            onClick={handleExitClick}
          >
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
      <div className="fixed top-[0px] bottom-[0px] left-0 right-0 grid grid-cols-1 lg:grid-cols-2 w-full overflow-y-auto pb-16 lg:pb-28 pt-14">
        {/* Reading passage */}
        <div
          className={`p-4 pt-8 overflow-y-auto scroll-bar-style border-r border-gray-200 bg-white ${
            switchReading ? "" : "hidden lg:block"
          }`}
        >
          {selectedPassage === 1 && (
            <div className="">
              <h1 className="w-full text-xl lg:text-2xl font-bold mb-4">
                Reading Part 1
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: (passage1?.content || "").replace(/\\/g, ""),
                }}
              />
              {/* <p className="mb-4 text-base lg:text-lg">{passage1?.content}</p> */}
            </div>
          )}
          {selectedPassage === 2 && (
            <div>
              <h1 className="w-full text-xl lg:text-2xl font-bold mb-4">
                Reading Part 2
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: (passage2?.content || "").replace(/\\/g, ""),
                }}
              />
              {/* <p className="mb-4 text-base lg:text-lg">{passage2?.content}</p> */}
            </div>
          )}
          {selectedPassage === 3 && (
            <div>
              <h1 className="w-full text-xl lg:text-2xl font-bold mb-4">
                Reading Part 3
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: (passage3?.content || "").replace(/\\/g, ""),
                }}
              />
              {/* <p className="mb-4 text-base lg:text-lg">{passage3?.content}</p> */}
            </div>
          )}
        </div>

        {/* Questions */}
        <div
          className={`bg-white p-4 pt-8 pb-0 overflow-y-auto scroll-bar-style h-full ${
            switchReading ? "hidden lg:block" : ""
          }`}
        >
          {questions.reduce((acc: JSX.Element[], question, index) => {
            if (question.q_type === "MP") {
              const mpQuestions = questions
                .filter((q) => q.q_type === "MP")
                .map((q) => ({
                  id: q.id,
                  question: q.question,
                  options: q.options,
                  isMultiple: q.isMultiple,
                  selectedOptions: q.selectedOptions,
                }));
              if (index === questions.findIndex((q) => q.q_type === "MP")) {
                acc.push(
                  <div key={`mp-${index}`} className="mb-6">
                    <QuizHeader
                      title={`Questions ${mpQuestions[0].id} - ${
                        mpQuestions[mpQuestions.length - 1].id
                      }`}
                      subtitle="Choose the correct answer"
                    />
                    {mpQuestions.map((q) => (
                      <QuizQuestion
                        key={q.id}
                        id={q.id}
                        question={q.question}
                        options={q.options}
                        isMultiple={q.isMultiple}
                        selectedOptions={q.selectedOptions}
                        onSelectOption={(option) =>
                          handleSelectOption(q.id, option)
                        }
                      />
                    ))}
                  </div>
                );
              }
            } else if (question.q_type === "FB") {
              const fbQuestions = questions
                .filter((q) => q.q_type === "FB")
                .map((q) => ({
                  id: q.id,
                  start_passage: q.start_passage || "",
                  end_passage: q.end_passage || "",
                  selectedAnswer: q.selectedOptions || "",
                }));
              if (index === questions.findIndex((q) => q.q_type === "FB")) {
                acc.push(
                  <div key={`fb-${index}`} className="mb-6">
                    <ShortAnswerQuiz
                      title={`Questions ${fbQuestions[0].id} - ${
                        fbQuestions[fbQuestions.length - 1].id
                      }`}
                      subtitle=""
                      instructions="Write your answers in the boxes provided."
                      questions={fbQuestions.map((q) => ({
                        ...q,
                        selectedAnswer: Array.isArray(q.selectedAnswer)
                          ? q.selectedAnswer.join(", ")
                          : q.selectedAnswer,
                      }))}
                      onAnswerChange={handleFillInAnswer}
                    />
                  </div>
                );
              }
            }
            return acc;
          }, [])}
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
          <div
            className={`w-36 flex justify-center items-center ${
              selectedPassage === 3 ? "border border-[#FA812F]" : "hidden"
            } rounded-lg my-2 py-2 px-4 mr-4 bg-[#FA812F] text-white cursor-pointer`}
            onClick={() => setShowConfirmSubmitDialog(true)}
          >
            <div
              className={`font-medium text-md justify-center items-center ${
                selectedPassage === 3 ? "flex" : "hidden"
              }`}
            >
              Nộp bài
            </div>
          </div>
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
          {isPopupOpen && passages && passages.length > 0 && (
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
                passages={passages}
                getAnsweredStatus={getAnsweredStatus}
                onSubmit={() => setShowConfirmSubmitDialog(true)}
                onQuestionSelect={handleQuestionSelect}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
