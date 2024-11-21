"use client"

import DemoSlider from "./slider"

export default function CoursePage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-3/4 h-[500px] mb-10 mt-4 rounded-xl text-black text-2xl font-bold flex flex-col justify-center items-center">
        <DemoSlider />
      </div>
    </div>
  )
}