"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  House,
  ChevronDown,
  BookOpenText,
  Headphones,
  SquarePen,
  BookCheck,
} from "lucide-react";
import { IMAGES } from "@/utils/images";
import { usePathname } from "next/navigation";
import LoginForm from "./login-form";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [skillOpen, setSkillOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { label: "IELTS ONLINE TEST", href: "/" },
    {
      label: "SKILL TEST",
      href: "#",
      subItems: [
        { label: "READING TEST", href: "/reading" },
        { label: "LISTENING TEST", href: "/listening" },
        { label: "WRITING TEST", href: "/writing" },
      ],
    },
    { label: "FULL IELTS TEST", href: "/full-ielts-test" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSkillOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full flex justify-center items-center border-b">
      <div className="w-full lg:w-3/4 px-4 lg:px-0">
        <div className="flex items-center justify-between h-24">
          <div className="flex lg:hidden flex-col justify-center">
            <button
              className="text-gray-500 w-10 h-10 relative focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                    open ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                    open ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={IMAGES.LOGO}
              alt="alt"
              className="w-full h-12 object-contain"
              width={1000}
              height={0}
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                ref={item.subItems ? dropdownRef : null}
              >
                {item.subItems ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => setSkillOpen(!skillOpen)}
                  >
                    <span
                      className={`text-[14px] font-medium transition-colors hover:text-[rgb(var(--secondary-rgb))] ${
                        item.subItems.some((sub) => sub.href === pathname)
                          ? "text-[rgb(var(--secondary-rgb))]"
                          : "text-gray-500"
                      }`}
                    >
                      {item.label}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-gray-500 transform transition duration-300 ${
                        skillOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-[14px] font-medium transition-colors hover:text-[rgb(var(--secondary-rgb))] ${
                      item.href === pathname
                        ? "text-[rgb(var(--secondary-rgb))]"
                        : "text-gray-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
                {item.subItems && skillOpen && (
                  <div className="absolute top-full -left-10 mt-2 bg-white shadow-md rounded-md py-2 z-10 w-36">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className={`block px-4 py-2 text-[14px] text-gray-500 hover:text-[rgb(var(--secondary-rgb))] hover:bg-gray-100 ${
                          subItem.href === pathname
                            ? "text-[rgb(var(--secondary-rgb))]"
                            : ""
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <LoginForm />
          </div>
        </div>
      </div>
      {open && (
        <div className="absolute top-24 left-0 h-[830px] w-full bg-white shadow-md border-t border-gray-200 z-20">
          <ul className="flex flex-col space-y-10 py-10 px-5">
            <li className="font-bold flex flex-row items-center gap-3">
              <House size={20} />
              <a href={`/`} className="text-gray-700 hover:text-black">
                Trang chủ
              </a>
            </li>
            <li className="font-bold flex flex-row items-center gap-3">
              <BookOpenText size={20} />
              <a href={`/reading`} className="text-gray-700 hover:text-black">
                Reading Test
              </a>
            </li>
            <li className="font-bold flex flex-row items-center gap-3">
              <SquarePen size={20} />
              <a href={`/writing`} className="text-gray-700 hover:text-black">
                Writing Test
              </a>
            </li>
            <li className="font-bold flex flex-row items-center gap-3">
              <Headphones size={20} />
              <a href={`/listening`} className="text-gray-700 hover:text-black">
                Listening Test
              </a>
            </li>
            <li className="font-bold flex flex-row items-center gap-3">
              <BookCheck size={20} />
              <a
                href={`/full-ielts-test`}
                className="text-gray-700 hover:text-black"
              >
                Full IELTS Test
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
