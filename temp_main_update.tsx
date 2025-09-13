// pages/ielts-test.tsx
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/utils/images";
import PassageProgressBar from "./components/processing-bar";
import { FileText, Grid2x2Check, BookOpen, HelpCircle } from "lucide-react";
import Link from "next/link";
import PassageProgressBarMobile from "./components/processing-bar-mobile";
import { motion, AnimatePresence } from "framer-motion";
import {
  QuizHeader,
  QuizQuestion,
} from "./components/test-type/multiple-choice/multiple-choice";
import { ShortAnswerQuiz } from "./components/test-type/fil-in-the-blank/fill-in";
import PopupMenu from "./components/pop-up";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReadingService } from "@/services/reading";
import { QuestionsService } from "@/services/questions";
import { SubmitService } from "@/services/submit";
import { ROUTES } from "@/utils/routes";
import "@/styles/hide-scroll.css";
import Cookies from "js-cookie";
import { UserService } from "@/services/user";
import MatchingHeadings from "./components/test-type/matching-headings/matching-headings";
import MatchingFeatures from "./components/test-type/matching-features/matching-features";
import TrueFalseNotGiven from "./components/test-type/true-false-notgiven/true-false-notgiven";
import { ViewModeToggle, MobileToggleButton, FloatingToggle } from "./components/toggle-switch";

// ... existing interfaces and component code ...
