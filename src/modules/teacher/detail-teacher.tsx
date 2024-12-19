'use client'

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import YouTube from "react-youtube";
import '../../styles/button.slider.css'

const DetailTeacher = ({ teacher, onClose }: { teacher: any, onClose: any }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  const opts = {
    height: "300",
    width: "500",
    playerVars: {
      autoplay: 0,
    },
  };

  const _onReady = (event: any) => {
    event.target.pauseVideo();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!teacher) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={popupRef} className="bg-white rounded-lg py-12 w-3/4 max-w-6xl relative h-5/6 overflow-hidden">
        <button
          className="absolute top-6 right-8 text-black px-2 py-2 rounded-md"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className='h-full overflow-y-auto scroll-bar-style'>
          <div className="grid grid-cols-12">
            <div className="col-span-5 flex justify-center">
              <div className='w-[370px] h-[370px]'>
                <Image
                  src={teacher?.image}
                  alt=""
                  className='rounded-xl'
                  width={1000}
                  height={1000} />
              </div>
            </div>
            <div className="col-span-6">
              <h3 className='text-xl font-medium mb-4'>Giảng viên</h3>
              <h1 className='text-4xl font-bold mb-7'>{teacher?.name}</h1>
              <p className='mb-4'><strong>Quốc tịch:</strong> {teacher?.nationality}</p>
              <p className='mb-2'><strong>Bằng cấp:</strong></p>
              {teacher?.diploma?.map((dip: any, index: any) => (
                <p className='mb-2' key={index}>
                  - {dip}<br></br>
                </p>
              ))}
              {teacher?.experience &&
                <p className='mb-4 mt-4'><strong>Kinh nghiệm:</strong> {teacher?.experience}</p>
              }
              {teacher?.videoId &&
                <YouTube
                  videoId={`${teacher?.videoId}`}
                  opts={opts}
                  onReady={_onReady}
                  className='mb-10' />
              }
              <p className='mt-4 mb-2'><strong>Giới thiệu:</strong></p>
              <article>
                {teacher?.introduction}
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailTeacher;