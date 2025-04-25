import { useEffect, useState, useMemo } from "react";
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
import PopupMenu from "./components/pop-up";
import {
  QuizHeader,
  QuizQuestion,
} from "./components/test-type/multiple-choice/multiple-choice";
import { ShortAnswerQuiz } from "./components/test-type/fil-in-the-blank/fill-in";
import { usePathname } from "next/navigation";
import { ReadingService } from "@/services/reading";
import { QuestionsService } from "@/services/questions";

// Interfaces remain the same as provided
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

export default function AnswerKeyReadingPage() {
  const pathname = usePathname();
  const [data, setData] = useState<ReadingDetail | null>(null);
  const [passage1, setPassage1] = useState<PassageSection | null>(null);
  const [passage2, setPassage2] = useState<PassageSection | null>(null);
  const [passage3, setPassage3] = useState<PassageSection | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedPassage, setSelectedPassage] = useState(1);
  const [answers, setAnswers] = useState<AnswerState>({ parts: [] });
  const [currentPage, setCurrentPage] = useState(1);
  // const [timeLeft, setTimeLeft] = useState("57:25");
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [switchReading, setSwitchReading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const calculatePassages = useMemo(() => {
    return (): PassageInfo[] => {
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
  }, [passage1, passage2, passage3, answers]);

  const passages = calculatePassages();

  const render = (data: ReadingDetail) => {
    setData(data);
  };

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
        question: q.q_type === "MP" ? `Question ${startId + index}` : "",
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
    setIsLoading(true);
    setError(null);
    const segments = pathname.split("/").filter(Boolean);
    const id = segments[segments.length - 1];

    try {
      const res = await ReadingService.getReadingById(id);
      const [resP1, resP2, resP3] = await Promise.all([
        QuestionsService.getQuestionsById(res.parts[0]),
        QuestionsService.getQuestionsById(res.parts[1]),
        QuestionsService.getQuestionsById(res.parts[2]),
      ]);

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
          if (process.env.NODE_ENV !== "production") {
            console.log("Initialized answers:", initialParts);
          }
          return { parts: initialParts };
        });

        const passage1Questions = mapAndArrangeQuestions(resP1, 1);
        setQuestions(passage1Questions);
      } else {
        setError("Failed to load reading test data.");
      }
    } catch (error) {
      console.error("Error initializing reading test:", error);
      setError("An error occurred while loading the test.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, [pathname]);

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
  }, [selectedPassage, passages, passage1, passage2, passage3]);

  // useEffect(() => {
  //   if (!data?.time) return;

  //   let time = data.time * 60; // Convert minutes to seconds
  //   const timer = setInterval(() => {
  //     const minutes = Math.floor(time / 60);
  //     const seconds = time % 60;
  //     setTimeLeft(`${minutes}:${seconds.toString().padStart(2, "0")}`);
  //     time -= 1;
  //     if (time < 0) {
  //       clearInterval(timer);
  //       // Handle time up (e.g., auto-submit)
  //     }
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [data]);

  const handlePassageSelect = (passageId: number) => {
    setSelectedPassage(passageId);
    setCurrentPage(passageId);
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

  const handleQuestionSelect = (questionId: number) => {
    setSelectedQuestion(questionId);
  };

  const handleNextQuestion = () => {
    if (
      selectedQuestion === null ||
      selectedQuestion === passages[passages.length - 1].endQuestion
    )
      return;
    setSelectedQuestion(selectedQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    if (
      selectedQuestion === null ||
      selectedQuestion === passages[0].startQuestion
    )
      return;
    setSelectedQuestion(selectedQuestion - 1);
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
    const question = questions.find((q) => q.id === questionNum);
    if (!question) return false;

    const questionData =
      passage1?.question.find((q) => q._id === question.question_id) ||
      passage2?.question.find((q) => q._id === question.question_id) ||
      passage3?.question.find((q) => q._id === question.question_id);

    if (!questionData) return false;

    const partAnswer = answers.parts.find(
      (part) => part.part_id === questionData.part_id
    );
    const userAnswer = partAnswer?.user_answers.find(
      (ua) => ua.question_id === question.question_id
    );

    return (
      (userAnswer?.answer?.length ?? 0) > 0 &&
      (question.q_type === "FB" ? userAnswer?.answer[0] !== "" : true)
    );
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
          let updatedUserAnswers = [...part.user_answers];
          const answerIndex = updatedUserAnswers.findIndex(
            (ua) => ua.question_id === question.question_id
          );

          if (answerIndex === -1) {
            updatedUserAnswers.push({
              question_id: question.question_id,
              answer: question.isMultiple ? [option] : [option],
            });
          } else {
            updatedUserAnswers = updatedUserAnswers.map((ua, index) => {
              if (index === answerIndex) {
                const currentAnswer = ua.answer || [];
                let newAnswer: string[];

                if (question.isMultiple) {
                  newAnswer = currentAnswer.includes(option)
                    ? currentAnswer.filter((opt) => opt !== option)
                    : [...currentAnswer, option];
                } else {
                  newAnswer = [option];
                }

                return { ...ua, answer: newAnswer };
              }
              return ua;
            });
          }

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

    updatePartCompletion(questionData.part_id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="relative min-h-screen w-full bg-gray-50">
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
        <div className="text-center mr-28">
          <div className="font-semibold">{data?.name}</div>
          <div className="text-sm text-gray-600">Reading Test Result</div>
        </div>
        <div className="flex items-center">
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

      <div className="fixed top-0 bottom-0 left-0 right-0 grid grid-cols-1 lg:grid-cols-2 w-full">
        <div
          className={`p-4 py-24 overflow-y-auto border-r border-gray-200 ${
            switchReading ? "" : "hidden lg:block"
          }`}
          style={{ scrollbarWidth: "thin" }}
        >
          {selectedPassage === 1 && (
            <div className="">
              <h1 className="w-full text-xl lg:text-2xl font-bold mb-4">
                Reading Part 1
              </h1>
              <p className="mb-4 text-base lg:text-lg">{passage1?.content}</p>
            </div>
          )}
          {selectedPassage === 2 && (
            <div>
              <h1 className="w-full text-xl lg:text-2xl font-bold mb-4">
                Reading Part 2
              </h1>
              <p className="mb-4 text-base lg:text-lg">{passage2?.content}</p>
            </div>
          )}
          {selectedPassage === 3 && (
            <div>
              <h1 className="w-full text-xl lg:text-2xl font-bold mb-4">
                Reading Part 3
              </h1>
              <p className="mb-4 text-base lg:text-lg">{passage3?.content}</p>
            </div>
          )}
        </div>

        <div
          className={`bg-white p-4 pt-24 pb-32 overflow-y-auto ${
            switchReading ? "hidden lg:block" : ""
          }`}
          style={{ scrollbarWidth: "thin" }}
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
                      subtitle="Complete the sentences below"
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

      <div className="fixed bottom-0 left-0 right-0 bg-white pt-0 pb-2 lg:pt-0 lg:pb-2 z-10">
        <div className="hidden lg:flex justify-between mt-0 text-sm border-t border-gray-100 pt-0">
          <div className="flex justify-center items-center">
            {passages.map((passage) => (
              <PassageProgressBar
                key={passage.id}
                passageNumber={passage.id}
                currentQuestion={selectedQuestion ?? 0}
                totalQuestions={passage.endQuestion - passage.startQuestion + 1}
                startQuestion={passage.startQuestion}
                endQuestion={passage.endQuestion}
                choosenPassage={selectedPassage === passage.id}
                onClick={() => handlePassageSelect(passage.id)}
                onQuestionClick={handleQuestionSelect}
              />
            ))}
          </div>
          <div className="flex flex-row">
            <div
              className={`w-full flex justify-center items-center rounded-lg my-2 py-2 px-4 bg-white ml-4 cursor-pointer ${
                selectedQuestion === passages[0].startQuestion
                  ? "opacity-50"
                  : ""
              }`}
              onClick={handlePreviousQuestion}
              role="button"
              aria-label="Previous Question"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handlePreviousQuestion()}
            >
              <div
                className={`text-[#FA812F] font-medium text-md justify-center items-center px-5 py-1 rounded-md flex border border-[#FA812F]`}
              >
                <ChevronLeft color="#FA812F" />
              </div>
            </div>
            <div
              className={`w-full flex justify-center items-center rounded-lg my-2 bg-white mr-4 cursor-pointer ${
                selectedQuestion === passages[passages.length - 1].endQuestion
                  ? "opacity-50"
                  : ""
              }`}
              onClick={handleNextQuestion}
              role="button"
              aria-label="Next Question"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleNextQuestion()}
            >
              <div
                className={`text-[#FA812F] font-medium text-md justify-center items-center px-5 py-1 rounded-md flex border border-[#FA812F]`}
              >
                <ChevronRight color="#FA812F" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden relative flex justify-center items-center py-0 pt-2 border-t border-gray-200">
          <div className="flex justify-center text-sm">
            {passages.map((passage) => (
              <PassageProgressBarMobile
                key={passage.id}
                passageNumber={passage.id}
                currentQuestion={selectedQuestion ?? 0}
                totalQuestions={passage.endQuestion - passage.startQuestion + 1}
                startQuestion={passage.startQuestion}
                endQuestion={passage.endQuestion}
                choosenPassage={passage.id === selectedPassage}
                onClick={() => handlePassageSelect(passage.id)}
                onQuestionClick={handleQuestionSelect}
              />
            ))}
          </div>

          <div className="flex flex-col justify-center -translate-y-[2px]">
            <div className="w-full flex justify-center">
              <div
                className={`w-11 h-11 border-2 border-gray-300 rounded-full bg-white cursor-pointer flex items-center justify-center`}
                onClick={() => setIsPopupOpen(true)}
                role="button"
                aria-label="Reviews and Submit"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setIsPopupOpen(true)}
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

          <div className="lg:hidden absolute bg-[#FA812F] rounded-full bottom-[0%] -translate-y-24 right-[5%] z-30">
            <div
              className="p-3.5"
              onClick={() => setSwitchReading(!switchReading)}
              role="button"
              aria-label={
                switchReading ? "Switch to Questions" : "Switch to Reading"
              }
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && setSwitchReading(!switchReading)
              }
            >
              {switchReading ? (
                <Grid2x2Check color="white" />
              ) : (
                <FileText color="white" />
              )}
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
              <PopupMenu isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
