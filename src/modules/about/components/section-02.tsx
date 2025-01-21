'use client'

import Image from "next/image";

const Section02 = () => {
    return (
        <>
            <div className="text-center mx-5">
                <div className="relative inline-block mb-14">
                    <h2 className="text-2xl lg:text-3xl font-bold leading-snug">
                        Các đối tác chiến lược toàn diện của IELTS Việt
                    </h2>
                </div>
            </div>
            <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 px-1 lg:px-[130px]">
                <div className="max-w-md p-1">
                    <div className="relative">
                        <div className="flex items-center gap-4">
                            <Image
                                src="https://cdn.freelogovectors.net/wp-content/uploads/2021/06/idp-logo-freelogovectors.net_.png"
                                alt="alt"
                                className="w-5/6 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                                width={400}
                                height={200} />
                        </div>
                    </div>
                </div>
                <div className="max-w-md p-1">
                    <div className="relative">
                        <div className="flex items-center gap-4">
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TZYC_3i2Fn6418_donv0jLuuPtrXNTUQTQ&s"
                                alt="alt"
                                className="w-1/5 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                                width={400}
                                height={0} />
                            <div className="font-semibold">Công Ty TNHH IMEKO</div>
                        </div>
                    </div>
                </div>
                <div className="max-w-md p-1">
                    <div className="relative">
                        <div className="flex items-center gap-4">
                            <Image
                                src="https://htogroup.com.vn/images/logo.png"
                                alt="alt"
                                className="w-1/4 transform transition-transform duration-500 group-hover:scale-105  object-cover"
                                width={400}
                                height={200} />
                            <div className="font-semibold">Công Ty Du Học HTO</div>
                        </div>
                    </div>
                </div>
                {/* <div className="max-w-md p-1">
                    <div className="bg-emerald-500 rounded-lg p-6 relative">
                        <div className="flex items-center gap-4">
                            <div className="bg-white rounded-full p-3">
                                <svg
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2">
                                    <path
                                        d="M5 8h14l-1.5 8h-11L5 8z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path
                                        d="M6 8l-1-4h14l-1 4"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path
                                        d="M9 16v1a2 2 0 002 2h2a2 2 0 002-2v-1"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="text-white">
                                <div className="text-xl font-bold">25+</div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    );
};

export default Section02;