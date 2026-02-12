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
  ResultHeader,
  ResultShortAnswerQuestion,
} from "./components/test-type/fil-in-the-blank/fill-in";
import { usePathname } from "next/navigation";
import { ReadingService } from "@/services/reading";
import { QuestionsService } from "@/services/questions";
import "@/styles/hide-scroll.css";
import { ResultQuestion } from "./components/test-type/multiple-choice/multiple-choice";
import { ROUTES } from "@/utils/routes";
import { ResultMatchingHeadings } from "./components/test-type/matching-headings/matching-headings";
import { ResultMatchingFeatures } from "./components/test-type/matching-features/matching-features";
import { ResultTrueFalseNotGiven } from "./components/test-type/true-false-notgiven/true-false-notgiven";

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
  correct_answer?: string | string[];
  is_correct?: boolean;
  // Additional fields for new question types
  paragraphId?: string; // For MH
  feature?: string; // For MF
  sentence?: string; // For TFNG
}

interface QuestionStatus {
  questionId: number;
  isAnswered: boolean;
  isCorrect: boolean | null;
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
    question: string;
    choices?: string[];
    options?: string[];
    isMultiple?: boolean;
    answer: string[];
    created_at: string;
    start_passage?: string;
    end_passage?: string;
    paragraph_id?: string; // For MH
    feature?: string; // For MF
    sentence?: string; // For TFNG
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

interface QuestionAnswer {
  question_id: string;
  q_type: string;
  answer: string[];
  correct_answer: string | string[];
  is_correct: boolean;
  is_pass: boolean;
}

interface PartResult {
  type: string;
  part_id: string;
  user_answers: QuestionAnswer[];
  correct_count: number;
  incorrect_count: number;
  pass_count: number;
}

interface ResultData {
  submit_id: string;
  result: PartResult[];
}

export default function AnswerKeyReadingPage() {
  const pathname = usePathname();
  const [data, setData] = useState<ReadingDetail | null>(null);
  const [passagesData, setPassagesData] = useState<PassageSection[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [selectedPassage, setSelectedPassage] = useState(1);
  const [answers, setAnswers] = useState<AnswerState>({ parts: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [switchReading, setSwitchReading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<ResultData | null>(null);
  const [isSinglePartMode, setIsSinglePartMode] = useState(false);
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const passages = useMemo((): PassageInfo[] => {
    const passagesInfo: PassageInfo[] = [];
    const passageData = passagesData;

    let questionCounter = 1;

    passageData.forEach((passage: PassageSection, index) => {
      const questionCount = passage.question.length;
      const partId = passage._id;

      const answeredQuestions = answers.parts
        .filter((part) => part.part_id === partId)
        .reduce((count, part) => {
          return (
            count +
            part.user_answers.filter(
              (ua) => ua.answer.length > 0 && ua.answer[0] !== "",
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
  }, [passagesData, answers]);

  const mapAndArrangeQuestions = (passage: PassageSection, startId: number) => {
    // Extract options for MH and MF questions
    // For MH (Matching Headings) questions, we need to get the options from the first MH question
    const mhQuestion = passage.question.find((q) => q.q_type === "MH");
    const mhOptions = mhQuestion?.options || [];

    // For MF (Matching Features) questions, we need to get the options from the first MF question
    const mfQuestion = passage.question.find((q) => q.q_type === "MF");
    const mfOptions = mfQuestion?.options || [];

    // console.log("MH Options:", mhOptions);
    // console.log("MF Options:", mfOptions);

    const mappedQuestions = passage.question.map((q, index) => {
      const partAnswer = answers.parts.find(
        (part) => part.part_id === q.part_id,
      );
      const userAnswer = partAnswer?.user_answers.find(
        (ua) => ua.question_id === q._id,
      );

      // Get result data for this question
      const partResult = response?.result.find(
        (part) => part.part_id === q.part_id,
      );
      const questionResult = partResult?.user_answers.find(
        (ua) => ua.question_id === q._id,
      );

      const selectedOptions = questionResult?.answer?.length
        ? q.q_type === "MP" && q.isMultiple
          ? questionResult.answer
          : q.q_type === "MP" ||
              q.q_type === "MH" ||
              q.q_type === "MF" ||
              q.q_type === "TFNG"
            ? questionResult.answer[0]
            : questionResult.answer[0] || ""
        : q.q_type === "MP"
          ? q.isMultiple
            ? []
            : null
          : "";

      // Use the appropriate options list based on question type
      let questionOptions: string[] = [];
      if (q.q_type === "MP") {
        questionOptions = q.choices || [];
      } else if (q.q_type === "MH") {
        questionOptions = mhOptions;
      } else if (q.q_type === "MF") {
        questionOptions = mfOptions;
      }

      return {
        id: startId + index,
        question:
          q.q_type === "MP" ? q.question || `Question ${startId + index}` : "",
        options: questionOptions,
        isMultiple: q.q_type === "MP" ? q.isMultiple || false : false,
        selectedOptions,
        q_type: q.q_type,
        start_passage: q.q_type === "FB" ? q.start_passage : undefined,
        end_passage: q.q_type === "FB" ? q.end_passage : undefined,
        question_id: q._id,
        correct_answer: questionResult?.correct_answer || [],
        is_correct: questionResult?.is_correct || false,
        // Additional fields for new question types
        paragraphId: q.q_type === "MH" ? q.paragraph_id : undefined,
        feature: q.q_type === "MF" ? q.feature : undefined,
        sentence: q.q_type === "TFNG" ? q.sentence : undefined,
      };
    });

    // Return questions in their original order (matching test-ielts-doc/main.tsx)
    return mappedQuestions.map((q, index) => ({
      ...q,
      id: startId + index,
    }));
  };

  const init = async () => {
    const storedAnswers = localStorage.getItem("readingTestAnswers");
    const parsedAnswers = storedAnswers ? JSON.parse(storedAnswers) : null;
    setResponse(parsedAnswers?.data || null);
    setIsLoading(true);
    setError(null);
    const segments = pathname.split("/").filter(Boolean);
    const id = segments[segments.length - 1];

    try {
      const res = await ReadingService.getReadingById(id);
      const partIds = res.parts || [];
      const questionResults = await Promise.all(
        partIds.map((partId: string) =>
          QuestionsService.getQuestionsById(partId),
        ),
      );

      const validPassages = questionResults.filter(
        (p): p is PassageSection => !!p,
      );

      if (res && validPassages.length > 0) {
        setPassagesData(validPassages);
        setData(res);

        // Calculate all questions across all passages
        let currentQuestionStartId = 1;
        const allQs = validPassages.flatMap((passage) => {
          const mapped = mapAndArrangeQuestions(
            passage,
            currentQuestionStartId,
          );
          currentQuestionStartId += mapped.length;
          return mapped;
        });

        const passagesWithQuestions = validPassages.filter(
          (p) => p.question.length > 0,
        ).length;

        if (passagesWithQuestions <= 2) {
          setIsSinglePartMode(true);
          setQuestions(allQs);
          setAllQuestions(allQs);
        } else {
          setIsSinglePartMode(false);
          setAllQuestions(allQs);
          const firstPassageQs = mapAndArrangeQuestions(validPassages[0], 1);
          setQuestions(firstPassageQs);
        }
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
      {} as { [key: number]: number },
    );
    const selectedPassageData = passagesData[selectedPassage - 1];
    if (selectedPassageData) {
      const updatedQuestions = mapAndArrangeQuestions(
        selectedPassageData,
        startIds[selectedPassage] || 1,
      );
      setQuestions(updatedQuestions);
    }
  }, [selectedPassage, passages, passagesData, response, isSinglePartMode]);

  useEffect(() => {
    if (!isSinglePartMode) return;
    // Re-map allQuestions when response or passages change
    if (passagesData.length > 0) {
      // Logic for single part mode (small number of passages)
      // Just re-calculate all questions
      let currentQuestionStartId = 1;
      const allQs = passagesData.flatMap((passage) => {
        const mapped = mapAndArrangeQuestions(passage, currentQuestionStartId);
        currentQuestionStartId += mapped.length;
        return mapped;
      });
      setAllQuestions(allQs);
    }
  }, [isSinglePartMode, passagesData, response]);

  const handlePassageSelect = (passageId: number) => {
    setSelectedPassage(passageId);
    setCurrentPage(passageId);
    // Optionally reset selectedQuestion to the first question of the passage
    const passage = passages.find((p) => p.id === passageId);
    if (passage) {
      setSelectedQuestion(passage.startQuestion);
      scrollToSection(`reading-question-${passage.startQuestion}`);
    }
  };

  const handleQuestionSelect = (questionId: number) => {
    // Find the passage containing the question
    const passage = passages.find(
      (p) => questionId >= p.startQuestion && questionId <= p.endQuestion,
    );
    if (passage && passage.id !== selectedPassage) {
      setSelectedPassage(passage.id);
      setCurrentPage(passage.id);
    }
    setSelectedQuestion(questionId);
    // Scroll to the question group containing the selected question
    scrollToSection(`reading-question-${questionId}`);
  };
  const handleNextQuestion = () => {
    if (selectedQuestion === null) {
      // If no question is selected, select the first question of the current passage
      setSelectedQuestion(passages[selectedPassage - 1].startQuestion);
      return;
    }

    // Find the passage of the next question
    const nextQuestionId = selectedQuestion + 1;
    const nextPassage = passages.find(
      (p) =>
        nextQuestionId >= p.startQuestion && nextQuestionId <= p.endQuestion,
    );

    if (!nextPassage) {
      // No next question available (end of all questions)
      return;
    }

    // If the next question is in a different passage, switch to that passage
    if (nextPassage.id !== selectedPassage) {
      setSelectedPassage(nextPassage.id);
      setCurrentPage(nextPassage.id);
    }

    setSelectedQuestion(nextQuestionId);
  };

  const handlePreviousQuestion = () => {
    if (selectedQuestion === null) {
      // If no question is selected, select the last question of the current passage
      setSelectedQuestion(passages[selectedPassage - 1].endQuestion);
      return;
    }

    // Find the passage of the previous question
    const prevQuestionId = selectedQuestion - 1;
    const prevPassage = passages.find(
      (p) =>
        prevQuestionId >= p.startQuestion && prevQuestionId <= p.endQuestion,
    );

    if (!prevPassage) {
      // No previous question available (start of all questions)
      return;
    }

    // If the previous question is in a different passage, switch to that passage
    if (prevPassage.id !== selectedPassage) {
      setSelectedPassage(prevPassage.id);
      setCurrentPage(prevPassage.id);
    }

    setSelectedQuestion(prevQuestionId);
  };

  const handleNextPassage = () => {
    const nextPassageId = selectedPassage + 1;
    const nextPassage = passages.find((p) => p.id === nextPassageId);

    if (!nextPassage) {
      // No next passage available
      return;
    }

    setSelectedPassage(nextPassageId);
    setCurrentPage(nextPassageId);
    setSelectedQuestion(nextPassage.startQuestion);
  };

  const handlePreviousPassage = () => {
    const prevPassageId = selectedPassage - 1;
    const prevPassage = passages.find((p) => p.id === prevPassageId);

    if (!prevPassage) {
      // No previous passage available
      return;
    }

    setSelectedPassage(prevPassageId);
    setCurrentPage(prevPassageId);
    setSelectedQuestion(prevPassage.startQuestion);
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="relative min-h-screen w-full bg-gray-50">
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
        <div className="text-center mr-28">
          <div className="font-semibold">{data?.name}</div>
          <div className="text-sm text-gray-600">Reading Test</div>
        </div>
        <Link href={ROUTES.HOME} target="_blank" className="flex items-center">
          <div className="text-gray-400 hover:text-gray-600 ml-4">
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
          </div>
        </Link>
      </header>
      <div className="fixed top-0 bottom-0 left-0 right-0 grid grid-cols-1 lg:grid-cols-12 w-full pt-14">
        <div
          className={`lg:col-span-7 p-4 pt-8 pb-32 overflow-y-auto scroll-bar-style border-r border-gray-200 bg-white ${
            switchReading ? "" : "hidden lg:block"
          }`}
        >
          {passagesData.map((passage, index) => (
            <div
              key={passage._id}
              className={selectedPassage === index + 1 ? "block" : "hidden"}
            >
              <h1 className="w-full text-xl lg:text-2xl font-bold mb-4">
                Reading Part {index + 1}
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: (passage?.content || "").replace(/\\/g, ""),
                }}
              />
            </div>
          ))}
        </div>
        <div
          className={`lg:col-span-5 bg-white p-4 pt-8 pb-28 overflow-y-auto scroll-bar-style ${
            switchReading ? "hidden lg:block" : ""
          }`}
        >
          {(() => {
            // Group contiguous questions by type
            const questionGroups: { type: string; questions: Question[] }[] =
              [];
            let currentGroup: { type: string; questions: Question[] } | null =
              null;

            questions.forEach((question) => {
              if (!currentGroup || currentGroup.type !== question.q_type) {
                currentGroup = { type: question.q_type, questions: [question] };
                questionGroups.push(currentGroup);
              } else {
                currentGroup.questions.push(question);
              }
            });

            return questionGroups.map((group, groupIndex) => {
              if (group.type === "MP") {
                const mpQuestions = group.questions.map((q) => ({
                  id: q?.id,
                  question: q?.question,
                  options: q?.options,
                  isMultiple: q?.isMultiple,
                  selectedOptions: q?.selectedOptions,
                  correct_answer: q?.correct_answer,
                  is_correct: q?.is_correct,
                }));
                return (
                  <div key={`mp-${groupIndex}`} className="mb-4">
                    <ResultHeader
                      title={`Questions ${mpQuestions[0].id} - ${
                        mpQuestions[mpQuestions.length - 1].id
                      }`}
                      subtitle="Review your answers"
                    />
                    <div className="border border-gray-200 rounded-lg pt-6 pb-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        {mpQuestions
                          .slice(0, Math.ceil(mpQuestions.length / 2))
                          .map((q) => (
                            <ResultQuestion
                              key={q?.id}
                              id={q?.id}
                              question={q?.question}
                              options={q?.options}
                              selectedOptions={q?.selectedOptions}
                              correctAnswer={q?.correct_answer || []}
                              isCorrect={q?.is_correct ?? false}
                            />
                          ))}
                      </div>
                      <div className="space-y-4">
                        {mpQuestions
                          .slice(Math.ceil(mpQuestions.length / 2))
                          .map((q) => (
                            <ResultQuestion
                              key={q?.id}
                              id={q?.id}
                              question={q?.question}
                              options={q?.options}
                              selectedOptions={q?.selectedOptions}
                              correctAnswer={q?.correct_answer || []}
                              isCorrect={q?.is_correct ?? false}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                );
              } else if (group.type === "FB") {
                const fbQuestions = group.questions.map((q) => ({
                  id: q?.id,
                  start_passage: q?.start_passage || "",
                  end_passage: q?.end_passage || "",
                  selectedAnswer: q?.selectedOptions || "",
                  correct_answer: q?.correct_answer,
                  is_correct: q?.is_correct,
                }));
                return (
                  <div key={`fb-${groupIndex}`} className="mb-6">
                    <ResultHeader
                      title={`Questions ${fbQuestions[0].id} - ${
                        fbQuestions[fbQuestions.length - 1].id
                      }`}
                      subtitle="Review your answers"
                    />
                    <div className="">
                      {fbQuestions.map((q) => (
                        <ResultShortAnswerQuestion
                          key={q?.id}
                          id={q?.id}
                          start_passage={q?.start_passage}
                          end_passage={q?.end_passage}
                          selectedAnswer={
                            Array.isArray(q?.selectedAnswer)
                              ? q?.selectedAnswer.join(", ")
                              : q?.selectedAnswer || "No answer provided"
                          }
                          correctAnswer={
                            Array.isArray(q?.correct_answer)
                              ? q?.correct_answer.join(", ")
                              : q?.correct_answer || ""
                          }
                          isCorrect={q?.is_correct ?? false}
                        />
                      ))}
                    </div>
                  </div>
                );
              } else if (group.type === "MH") {
                const mhQuestions = group.questions.map((q) => ({
                  id: q?.id,
                  paragraphId: q?.paragraphId || "",
                  selectedOption:
                    typeof q?.selectedOptions === "string"
                      ? q?.selectedOptions
                      : "",
                  correctOption:
                    typeof q?.correct_answer === "string"
                      ? q?.correct_answer
                      : "",
                  isCorrect: q?.is_correct ?? false,
                }));
                const headings = group.questions[0]?.options || [];
                const headingIds = [
                  "i",
                  "ii",
                  "iii",
                  "iv",
                  "v",
                  "vi",
                  "vii",
                  "viii",
                  "ix",
                  "x",
                  "xi",
                  "xii",
                  "xiii",
                  "xiv",
                  "xv",
                  "xvi",
                  "xvii",
                  "xviii",
                  "xix",
                  "xx",
                ].slice(0, headings.length);

                return (
                  <div key={`mh-${groupIndex}`} className="mb-6">
                    <ResultMatchingHeadings
                      questions={mhQuestions}
                      headings={headings}
                      headingIds={headingIds}
                      startQuestion={mhQuestions[0].id}
                      endQuestion={mhQuestions[mhQuestions.length - 1].id}
                      passageNumber={selectedPassage}
                    />
                  </div>
                );
              } else if (group.type === "MF") {
                const mfQuestions = group.questions.map((q) => ({
                  id: q?.id,
                  text: q?.feature || "",
                  selectedOption:
                    typeof q?.selectedOptions === "string"
                      ? q?.selectedOptions
                      : "",
                  correctOption:
                    typeof q?.correct_answer === "string"
                      ? q?.correct_answer
                      : "",
                  isCorrect: q?.is_correct ?? false,
                }));
                const countries = group.questions[0]?.options || [];
                const countryIds = [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "I",
                  "J",
                ].slice(0, countries.length);

                return (
                  <div key={`mf-${groupIndex}`} className="mb-6">
                    <ResultMatchingFeatures
                      questions={mfQuestions}
                      countries={countries}
                      countryIds={countryIds}
                      startQuestion={mfQuestions[0].id}
                      endQuestion={mfQuestions[mfQuestions.length - 1].id}
                    />
                  </div>
                );
              } else if (group.type === "TFNG") {
                const tfngQuestions = group.questions.map((q) => ({
                  id: q?.id,
                  text: q?.sentence || "",
                  selectedAnswer:
                    typeof q?.selectedOptions === "string"
                      ? (q?.selectedOptions as
                          | "TRUE"
                          | "FALSE"
                          | "NOT GIVEN"
                          | null)
                      : null,
                  correctAnswer:
                    typeof q?.correct_answer === "string"
                      ? (q?.correct_answer as "TRUE" | "FALSE" | "NOT GIVEN")
                      : "NOT GIVEN",
                  isCorrect: q?.is_correct ?? false,
                }));

                return (
                  <div key={`tfng-${groupIndex}`} className="mb-6">
                    <ResultTrueFalseNotGiven
                      questions={tfngQuestions}
                      startQuestion={tfngQuestions[0].id}
                      endQuestion={tfngQuestions[tfngQuestions.length - 1].id}
                      passageNumber={selectedPassage}
                    />
                  </div>
                );
              }
              return null;
            });
          })()}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white pt-0 pb-2 lg:pt-0 lg:pb-2 z-10">
        <div className="hidden lg:flex justify-between mt-0 text-sm border-t border-gray-100 pt-0">
          <div className="flex justify-center items-center">
            {passages?.map((passage: PassageInfo) => {
              // Get the questions for this passage directly
              const passageData = passagesData[passage.id - 1];
              const passageQuestions = mapAndArrangeQuestions(
                passageData,
                passage.startQuestion,
              );

              // Calculate question statuses
              const questionStatuses = passageQuestions.map(
                (question: Question) => {
                  const isAnswered =
                    (Array.isArray(question.selectedOptions) &&
                      question.selectedOptions.length > 0) ||
                    (typeof question.selectedOptions === "string" &&
                      question.selectedOptions !== "");

                  return {
                    questionId: question.id,
                    isAnswered,
                    isCorrect: isAnswered
                      ? (question.is_correct ?? false)
                      : null,
                  };
                },
              );
              return (
                <PassageProgressBar
                  key={passage?.id}
                  passageNumber={passage?.id}
                  currentQuestion={selectedQuestion ?? 0}
                  totalQuestions={
                    passage?.endQuestion - passage?.startQuestion + 1
                  }
                  startQuestion={passage?.startQuestion}
                  endQuestion={passage?.endQuestion}
                  choosenPassage={selectedPassage === passage?.id}
                  onClick={() => handlePassageSelect(passage?.id)}
                  onQuestionClick={handleQuestionSelect}
                  questionStatuses={questionStatuses}
                />
              );
            })}
          </div>
          <div className="flex flex-row">
            <div
              className={`w-full flex justify-center items-center rounded-lg my-2 py-2 px-4 bg-white ml-4 cursor-pointer ${
                selectedQuestion === passages[0]?.startQuestion
                  ? "opacity-50"
                  : ""
              }`}
              onClick={() => {
                if (selectedQuestion !== passages[0]?.startQuestion) {
                  handlePreviousPassage();
                }
              }}
              role="button"
              aria-label="Previous Question"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handlePreviousPassage()}
            >
              <div
                className={`text-[#FA812F] font-medium text-md justify-center items-center px-5 py-1 rounded-md flex border border-[#FA812F]`}
              >
                <ChevronLeft color="#FA812F" />
              </div>
            </div>
            <div
              className={`w-full flex justify-center items-center rounded-lg my-2 bg-white mr-4 cursor-pointer ${
                selectedQuestion === passages[passages.length - 1]?.endQuestion
                  ? "opacity-50"
                  : ""
              }`}
              onClick={handleNextPassage}
              role="button"
              aria-label="Next Question"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleNextPassage()}
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
            {passages?.map((passage: PassageInfo) => {
              const passageData = passagesData[passage.id - 1];
              const passageQuestions = mapAndArrangeQuestions(
                passageData,
                passage.startQuestion,
              );
              const questionStatuses = passageQuestions.map(
                (question: Question) => {
                  const isAnswered =
                    (Array.isArray(question.selectedOptions) &&
                      question.selectedOptions.length > 0) ||
                    (typeof question.selectedOptions === "string" &&
                      question.selectedOptions !== "");

                  return {
                    questionId: question.id,
                    isAnswered,
                    isCorrect: isAnswered
                      ? (question.is_correct ?? false)
                      : null,
                  };
                },
              );

              return (
                <PassageProgressBarMobile
                  key={passage?.id}
                  passageNumber={passage?.id}
                  currentQuestion={selectedQuestion ?? 0}
                  totalQuestions={
                    passage?.endQuestion - passage?.startQuestion + 1
                  }
                  startQuestion={passage?.startQuestion}
                  endQuestion={passage?.endQuestion}
                  choosenPassage={selectedPassage === passage?.id}
                  onClick={() => handlePassageSelect(passage?.id)}
                  onQuestionClick={handleQuestionSelect}
                  questionStatuses={questionStatuses}
                />
              );
            })}
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
              <PopupMenu
                isOpen={isPopupOpen}
                setIsOpen={setIsPopupOpen}
                passages={passages}
                questionStatuses={(() => {
                  const statuses: { [passageId: number]: QuestionStatus[] } =
                    {};
                  passages.forEach((passage: PassageInfo) => {
                    const passageData = passagesData[passage.id - 1];
                    const passageQuestions = mapAndArrangeQuestions(
                      passageData,
                      passage.startQuestion,
                    );
                    statuses[passage.id] = passageQuestions.map((question) => {
                      const isAnswered =
                        (Array.isArray(question.selectedOptions) &&
                          question.selectedOptions.length > 0) ||
                        (typeof question.selectedOptions === "string" &&
                          question.selectedOptions !== "");
                      return {
                        questionId: question.id,
                        isAnswered,
                        isCorrect: isAnswered
                          ? (question.is_correct ?? false)
                          : null,
                      };
                    });
                  });
                  return statuses;
                })()}
                onQuestionClick={handleQuestionSelect}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
