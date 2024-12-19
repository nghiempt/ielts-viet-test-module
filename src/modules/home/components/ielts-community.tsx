'use client'

import { DATA } from "@/utils/data"
import { IMAGES } from "@/utils/images"
import Image from "next/image"

interface IeltsCommunity {
  id: number,
  image: string,
  name: string,
  score: string,
  school: string,
}

const ieltscm = DATA.IELTSCOMMUNITY as IeltsCommunity[]

export default function IeltsCommunity() {
  return (
    <div className="w-full pb-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Cộng đồng IELTS Việt</h2>
        <p className="text-gray-500 mt-4">
          Ielt Việt tin rằng với mỗi hành trình đã đi qua, học viên đều có những câu chuyện truyền cảm hứng của riêng mình.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {ieltscm?.slice(0, 6)?.map((icm, index) => (
          <div key={index} className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.15)_0px_0px_10px] w-80 group overflow-hidden">
            <div className="w-full flex justify-center items-center relative overflow-hidden">
              <Image
                src={icm.image}
                alt="alt"
                className="w-32 h-32 mt-10 rounded-t-lg transform transition-transform duration-500 group-hover:scale-105 "
                width={1000}
                height={1000}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-orange-100 text-[rgb(var(--secondary-rgb))] font-bold text-2xl rounded-full px-2 py-2">{icm.score}</span>
                <h3 className="ml-4 font-bold text-gray-800">{icm.name}</h3>
              </div>
              <p className="text-gray-600">{icm.school}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}