'use client'

import Section03 from "./components/section-03";
import Section04 from "./components/section-04";
import Section05 from "./components/section-05";
import Section01 from "./components/section-01";
import Section02 from "./components/section-02";
import SectionFooter from "./components/section-footer";
import Link from "next/link";

export default function AboutContent() {
  return (
    <main className="w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full relative bg-[#FDF8F5] min-h-[240px] flex items-center overflow-hidden">
        <div className="absolute left-12 bottom-12 grid grid-cols-4 gap-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-yellow-400 opacity-60" />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 w-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4">
            Về Chúng Tôi
          </h1>
          <nav className="flex justify-center items-center space-x-2 text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Trang Chủ
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-gray-900">Về Chúng Tôi</span>
          </nav>
        </div>
        <div className="absolute -right-16 top-1/2 -translate-y-1/2">
          <div className="w-32 h-32 border-4 border-yellow-400 rounded-full opacity-20" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-3/4 py-12">
          <Section01 />
        </div>
        <div className="w-3/4 py-8">
          <Section02 />
        </div>
        <div className="w-3/4 py-12">
          <Section03 />
        </div>
        <div className="w-full py-12">
          <Section04 />
        </div>
        <div className="w-3/4 py-4">
          <Section05 />
        </div>
        <div className="w-3/4 pt-8">
          <SectionFooter />
        </div>
      </div>
    </main>
  );
}