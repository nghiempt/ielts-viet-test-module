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
import PopupMenu from "./components/pop-up";
import { usePathname, useRouter } from "next/navigation";
import { WritingService } from "@/services/writing";
import { QuestionsService } from "@/services/questions";
import { ROUTES } from "@/utils/routes";

interface PassageSection {
  _id: string;
  stest_id: string;
  type: string;
  part_num: number;
  question: Array<{
    question: any;
    _id: string;
    q_type: string;
    part_id: string;
    image?: string;
    content: string;
    created_at: string;
  }>;
  created_at: string;
}

interface WritingDetail {
  _id: string;
  type: string;
  parts: string[];
  name: string;
  thumbnail: string;
  time: number;
  created_at: string;
}

export default function WritingTestClient() {
  const pathname = usePathname();
  const router = useRouter();
  const [data, setData] = useState<WritingDetail | null>(null);
  const [timeLeft, setTimeLeft] = useState("60:00");
  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({
    1: "",
    2: "",
  });
  const [selectedPassage, setSelectedPassage] = useState(1);
  const [passage1, setPassage1] = useState<PassageSection | null>(null);
  const [passage2, setPassage2] = useState<PassageSection | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [switchWriting, setSwitchWriting] = useState(true);

  // COUNTING DOWN TIMER
  useEffect(() => {
    // Parse initial time "60:00" into seconds
    const [minutes, seconds] = timeLeft.split(":").map(Number);
    let totalSeconds = minutes * 60 + seconds;

    // Only start the timer if there's time remaining
    if (totalSeconds <= 0) return;

    // Set up the interval to decrease time every second
    const timer = setInterval(() => {
      totalSeconds -= 1;

      // Calculate new minutes and seconds
      const newMinutes = Math.floor(totalSeconds / 60);
      const newSeconds = totalSeconds % 60;

      // Format the time as MM:SS
      const formattedTime = `${newMinutes
        .toString()
        .padStart(2, "0")}:${newSeconds.toString().padStart(2, "0")}`;
      setTimeLeft(formattedTime);

      // Stop the timer when it reaches 0
      if (totalSeconds <= 0) {
        clearInterval(timer);
        setTimeLeft("00:00");
      }
    }, 1000);

    // Cleanup: Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

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

  const init = async () => {
    const segments = pathname.split("/").filter(Boolean);
    const id = segments[segments.length - 1];

    try {
      const res = await WritingService.getWritingById(id);
      if (!res) throw new Error("Writing data not found");

      const [resP1, resP2] = await Promise.all([
        QuestionsService.getQuestionsById(res.parts[0]),
        QuestionsService.getQuestionsById(res.parts[1]),
      ]);

      if (!resP1 || !resP2) {
        throw new Error("One or more passages not found");
      }
      if (res && resP1 && resP2) {
        setPassage1(resP1);
        setPassage2(resP2);
        setData(res);
      } else {
        setData(null);
      }
    } catch (error) {
      console.error("Error initializing writing test:", error);
      setData(null);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const passages = [
    {
      id: 1,
      startQuestion: 1,
      endQuestion: 1,
      answeredQuestions: answers[1].trim() ? 1 : 0,
    },
    {
      id: 2,
      startQuestion: 1,
      endQuestion: 1,
      answeredQuestions: answers[2].trim() ? 1 : 0,
    },
  ];

  const handlePassageSelect = (passageId: number) => {
    setSelectedPassage(passageId);
    setCurrentPage(passageId);
    setWordCount(countWords(answers[passageId]));
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

  const countWords = (input: string) => {
    const trimmedText = input.trim();
    if (!trimmedText) return 0;
    const words = trimmedText.split(/\s+/).filter((word) => word.length > 0);
    return words.length;
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setAnswers((prev) => ({ ...prev, [selectedPassage]: newText }));
    setWordCount(countWords(newText));
  };

  // const handleSubmit = () => {
  //   const confirmSubmit = window.confirm(
  //     "Are you sure you want to submit your answers?"
  //   );
  //   if (confirmSubmit) {
  //     alert("Answers submitted!");
  //     router.push(ROUTES.HOME); // Redirect after submission
  //   }
  // };

  return (
    <div className="relative min-h-screen w-full bg-gray-50">
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
          <div className="font-semibold">IELTS Writing Test</div>
          <div className="text-sm text-gray-600">{data?.name}</div>
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
          <Link href={ROUTES.HOME} className="ml-4" onClick={handleExitClick}>
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
      <div className="fixed top-[8%] bottom-[0%] left-0 right-0 grid grid-cols-1 lg:grid-cols-2 w-full overflow-y-auto">
        {/* Reading passage */}
        <div
          className={`p-4 overflow-y-auto border-r border-gray-200 pt-8 ${
            switchWriting ? "" : "hidden lg:block"
          }`}
        >
          {selectedPassage === 1 && (
            <div>
              <h1 className="text-2xl font-bold mb-4">Writing Task 1</h1>
              {passage1 && (
                <h1 className="text-xl font-bold mb-4">
                  {passage1.question[0].question}
                </h1>
              )}
              {passage1 && passage1.question[0] && (
                <p className="mb-4 text-sm">{passage1.question[0].content}</p>
              )}
              <div>
                <Image
                  src="https://edmicro.edu.vn/wp-content/uploads/2023/11/ielts-writing-task-1-bar-chart-vi-du.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                />
              </div>
            </div>
          )}
          {selectedPassage === 2 && (
            <div>
              <h1 className="text-2xl font-bold mb-4">Writing Task 2</h1>
              {passage2 && (
                <h1 className="text-xl font-bold mb-4">
                  {passage2.question[0].question}
                </h1>
              )}
              {passage2 && passage2.question[0] && (
                <p className="mb-4 text-sm">{passage2.question[0].content}</p>
              )}
              <div>
                <Image
                  src="https://edmicro.edu.vn/wp-content/uploads/2023/11/ielts-writing-task-1-bar-chart-vi-du.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                />
              </div>
            </div>
          )}
        </div>

        {/* Writing Area */}
        <div
          className={`bg-white px-4 pt-8 overflow-y-auto ${
            switchWriting ? "hidden lg:block" : ""
          }`}
        >
          <div className="text-xl font-bold mb-4">Bài làm</div>
          <div className="w-full h-full">
            <textarea
              id="title"
              value={answers[selectedPassage]}
              onChange={handleTextChange}
              placeholder="Nhập bài viết của bạn"
              className="w-full h-2/3 lg:h-3/4 p-2 border rounded"
            ></textarea>
            <div className="text-right">{wordCount}/1000</div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="fixed bottom-0 left-0 right-0 bg-white pt-0 pb-2 z-10">
        {/* NAVIGATION DESKTOP */}
        <div className="hidden lg:flex justify-between mt-2 lg:mt-0 text-sm border-t border-gray-200 pt-2">
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
              <ChevronLeft color="#FA812F" /> Task {selectedPassage - 1}
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
              selectedPassage === 2 ? "hidden" : "border border-[#FA812F]"
            } rounded-lg my-2 py-2 px-4 bg-white mr-4 cursor-pointer`}
            onClick={handleNextPassage}
          >
            <div
              className={`text-[#FA812F] font-medium text-md justify-center items-center ${
                selectedPassage === 2 ? "hidden" : "flex"
              }`}
            >
              Task {selectedPassage + 1} <ChevronRight color="#FA812F" />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div
            className={`w-36 flex justify-center items-center ${
              selectedPassage === 2 ? "border border-[#FA812F]" : "hidden"
            } rounded-lg my-2 py-2 px-4 mr-4 bg-[#FA812F] text-white cursor-pointer`}
          >
            <div
              className={`font-medium text-md justify-center items-center ${
                selectedPassage === 2 ? "flex" : "hidden"
              }`}
            >
              Nộp bài
            </div>
          </div>
        </div>

        {/* NAVIGATE MOBILE */}
        <div className="lg:hidden relative flex justify-center items-center py-0 pt-2 border-t border-gray-200">
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

          {/* Toggle Button (Mobile Only) */}
          <div className="lg:hidden absolute bg-[#FA812F] rounded-full bottom-[0%] right-[5%] z-20 -translate-y-24">
            <div
              className="p-3.5"
              onClick={() => setSwitchWriting(!switchWriting)}
            >
              {switchWriting ? (
                <Grid2x2Check color="white" />
              ) : (
                <FileText color="white" />
              )}
            </div>
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
            <PopupMenu
              isOpen={isPopupOpen}
              setIsOpen={setIsPopupOpen}
              answers={answers}
              onSelectTask={handlePassageSelect}
              onSubmit={() => {}}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
