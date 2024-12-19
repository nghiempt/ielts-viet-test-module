"use client"

import { useEffect, useState } from "react"
import Header from "@/layout/header"
import Footer from "@/layout/footer"
import { DecorBar } from "@/components/using-ui/decor-bar"
import Image from "next/image"
import SignWithIELTS from "@/layout/sign-with-ielts"
import { DATA } from "@/utils/data"
import IeltsCourse2 from "./components/ielts-course-2"
import IeltsCourse4 from "./components/ielts-course-4"

export default function CoursePage() {
    const slogans = DATA.SLOGANS
    const [currentPath, setCurrentPath] = useState('');
    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    const customCard246 = 'border-[rgb(var(--secondary-rgb))] hover:shadow-[rgba(17,_17,_26,_0.2)_0px_0px_20px] transition duration-300'

    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className="w-3/4 pb-6"></div>
            <div className="w-3/4 flex pb-10">
                <div className="w-1/2 flex flex-col justify-center items-start">
                    <h2 className="text-4xl font-bold text-gray-800">
                        CHƯƠNG TRÌNH IELTS
                    </h2>
                    <DecorBar />
                    <ul className="text-gray-700">
                        <li>✔️ Phương pháp độc quyền, tiết kiệm 40% thời gian</li>
                        <li>✔️ 80% giảng viên là cựu giám khảo IELTS</li>
                        <li>✔️ Hệ thống AI độc quyền 4 kỹ năng</li>
                        <li>✔️ Hỗ trợ toàn diện từ giáo viên bản ngữ</li>
                        <li>✔️ Cam kết đầu ra – 15 năm uy tín</li>
                    </ul>

                </div>
                <div className="w-1/2 flex justify-end items-start relative">
                    <Image
                        src="https://ktdcgroup.vn/wp-content/uploads/2024/07/Lo-trinh-560x4101-3.png"
                        alt="alt"
                        className="w-7/8 rounded-lg absolute"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
            <div className="w-full bg-[rgb(var(--quaternary-rgb))] py-8 my-14 overflow-hidden">
                <div className="flex justify-center items-center gap-4 animate-marquee whitespace-nowrap">
                    {slogans.map((item: any, index: any) => (
                        <div key={`item-${index}`} className="bg-white px-10 py-2 rounded-lg shadow-md text-center">
                            <h3 className="text-[rgb(var(--secondary-rgb))] font-bold text-lg">{item.title}</h3>
                            <p className="text-gray-600">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            <IeltsCourse4 />

            <IeltsCourse2 />


            <div className="bg-cover bg-center h-full w-full flex justify-center items-center py-8"
                style={{ backgroundImage: `url('https://res.cloudinary.com/farmcode/image/upload/v1733374676/ielts-viet/chuong-trinh-hoc-ielts-ktdc-ielts-6-Copy-min_eettnm.jpg')` }}>
                <div className="w-3/4 flex justify-center items-center">
                    <div className="w-full justify-self-center">
                        <div className="text-3xl text-[rgb(var(--secondary-rgb))] font-bold py-4">TƯ VẤN LỘ TRÌNH HỌC CÁ NHÂN HÓA</div>
                        <div className="text-base text-white py-4 w-[700px]">Mỗi học viên đều có xuất phát điểm và mục tiêu khác nhau. Để thiết kế lộ trình học cá nhân hóa cho riêng bạn, hãy để lại thông tin ở đây ngay bạn nhé!</div>
                        <div className="py-4">
                            <div className="text-base text-[rgb(var(--secondary-rgb))] font-bold">Hoặc gọi hotline</div>
                            <div className="text-xl text-white font-bold">093 921 77 18</div>
                        </div>
                    </div>
                    <div className="justify-self-center">
                        <div className="">
                            <input type="text" id="first_name" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Họ và tên" required />
                        </div>
                        <div className="py-4">
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Số điện thoại" required />
                        </div>
                        <div className="">
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                        </div>
                        <button className="w-full mt-8 px-4 py-2 bg-[rgb(var(--secondary-rgb))] text-white font-semibold rounded-full">Đăng ký tư vấn</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-8 w-3/4 pt-10 pb-20 border-b-2">
                <div className="w-full flex flex-col items-center">
                    <div className=" p-24 relative flex items-center justify-center">
                        <div className="absolute w-60 h-60 border border-gray-100 rounded-full"></div>
                        <div className="absolute w-48 h-48 border border-gray-300 rounded-full"></div>
                        <div className="absolute w-32 h-32 border border-gray-400 rounded-full"></div>
                        <Image
                            className="align-middle rounded-full bg-[rgb(var(--quaternary-rgb))] p-4"
                            src="https://ktdcgroup.vn/wp-content/uploads/2024/07/nativespeakers.png"
                            alt={""}
                            width={78.400} height={80}
                        />
                    </div>
                    <div className="font-bold text-lg">100% chuyên gia IELTS bản ngữ </div>
                    <div className="text-center text-sm font-medium text-gray-500">Đội ngũ chuyên gia hàng đầu tại TP HCM với kinh nghiệm lâu năm trong giảng dạy IELTS. Trong đó, hơn 70% là cựu giám khảo do British Council và IDP đào tạo nghiệp vụ chấm thi IELTS chuyên nghiệp.</div>
                </div>
                <div className="w-full flex flex-col items-center">
                    <div className=" p-24 relative flex items-center justify-center">
                        <div className="absolute w-60 h-60 border border-gray-100 rounded-full"></div>
                        <div className="absolute w-48 h-48 border border-gray-300 rounded-full"></div>
                        <div className="absolute w-32 h-32 border border-gray-400 rounded-full"></div>
                        <Image
                            className="align-middle rounded-full bg-[rgb(var(--quaternary-rgb))] p-4"
                            src="https://ktdcgroup.vn/wp-content/uploads/2024/07/learning-group-2.png"
                            alt={""}
                            width={78.400} height={80}
                        />
                    </div>
                    <div className="font-bold text-lg">Educational Session</div>
                    <div className="text-center text-sm font-medium text-gray-500">Học viên được tham gia các cộng đồng học tập tự chủ, quy tụ các bạn có chung mục tiêu IELTS để cùng nhau trao đổi kiến thức, luyện tập kỹ năng và thúc đẩy tinh thần trong quá trình học.</div>
                </div>
                <div className="w-full flex flex-col items-center">
                    <div className=" p-24 relative flex items-center justify-center">
                        <div className="absolute w-60 h-60 border border-gray-100 rounded-full"></div>
                        <div className="absolute w-48 h-48 border border-gray-300 rounded-full"></div>
                        <div className="absolute w-32 h-32 border border-gray-400 rounded-full"></div>
                        <Image
                            className="align-middle rounded-full bg-[rgb(var(--quaternary-rgb))] p-4"
                            src="https://ktdcgroup.vn/wp-content/uploads/2024/07/mock-test.png"
                            alt={""}
                            width={78.400} height={80}
                        />
                    </div>
                    <div className="font-bold text-lg">IELTS Mock Test</div>
                    <div className="text-center text-sm font-medium text-gray-500">Trải nghiệm áp lực phòng thi với độ khó tương đương bài thi thật và nghe chuyên gia tư vấn lộ trình học phù hợp để tăng band điểm.</div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full">
                <div className="text-3xl font-bold py-10 mt-8">Ưu điểm vượt trội của khóa học</div>
                <div className="w-3/4 flex justify-center items-center gap-8">
                    {/* CARD 1 */}
                    <div className="w-full border rounded-lg p-8 h-[420px] hover:shadow-[rgba(17,_17,_26,_0.2)_0px_0px_20px] transition duration-300">
                        <div className="py-2 ">
                            <Image
                                className="w-[50px] h-[50px]"
                                src="https://ktdcgroup.vn/wp-content/uploads/2020/07/Mask-Group-461.png"
                                alt={""}
                                width={50} height={50}
                            />
                        </div>
                        <div className="text-lg font-bold py-2">80% CỰU GIÁM KHẢO IELTS</div>
                        <div className="  font-medium text-gray-500 ">80% đội ngũ chuyên gia là cựu giám khảo IELTS được British Council đào tạo nghiệp vụ chấm thi chuyên nghiệp. Do đó các chuyên gia hiểu rất rõ bản chất IELTS bao gồm các tiêu chí chấm điểm, yêu cầu về mặt kiến thức, kỹ năng và những lỗi sai phổ biến ứng với mỗi band điểm để hướng dẫn học viên cải thiện nhanh chóng.</div>
                    </div>
                    {/* CARD 2 */}
                    <div className={`w-full border rounded-lg p-8 h-[420px] ${customCard246}`}>
                        <div className="py-2 ">
                            <Image
                                className="w-[50px] h-[50px]"
                                src="https://ktdcgroup.vn/wp-content/uploads/2020/07/Mask-Group-456.png"
                                alt={""}
                                width={50} height={50}
                            />
                        </div>
                        <div className="text-lg font-bold py-2">TẬP TRUNG VÀO IELTS</div>
                        <div className="  font-medium text-gray-500">Nhờ hiểu biết sâu sắc về IELTS, đội ngũ chuyên gia tuyệt đối không dạy kiến thức tiếng Anh đại trà. Thay vào đó chỉ tập trung vào những kiến thức trọng tâm dành riêng cho kỳ thi IELTS. Với đội ngũ chuyên gia hàng đầu, KTDC tự tin là một trong những đơn vị uy tín nhất trên thị trường cung cấp kiến thức IELTS chuẩn Cambridge.</div>
                    </div>
                    {/* CARD 3 */}
                    <div className="w-full border rounded-lg p-8 h-[420px] hover:shadow-[rgba(17,_17,_26,_0.2)_0px_0px_20px] transition duration-300">
                        <div className="py-2 ">
                            <Image
                                className="w-[50px] h-[50px]"
                                src="https://ktdcgroup.vn/wp-content/uploads/2020/07/Mask-Group-458.png"
                                alt={""}
                                width={50} height={50}
                            />
                        </div>
                        <div className="text-lg font-bold py-2">PHƯƠNG PHÁP DẠY 3-0</div>
                        <div className=" font-medium text-gray-500">Không học lý thuyết đơn thuần, học viên được hướng dẫn chủ động suy nghĩ ý tưởng và tự đưa ra câu trả lời. Không học từ vựng một cách cứng nhắc, học viên được hướng dẫn bối cảnh dùng từ để sử dụng từ được tự nhiên nhất. Không học tủ, học vẹt. Học viên được hướng dẫn xây dựng tư duy nhạy bén để ứng phó với mọi dạng đề.</div>
                    </div>
                </div>
                {/* CARD 4 */}
                <div className="w-3/4 flex justify-center items-start py-8 h-1/2 gap-8">
                    <div className={`w-full border rounded-lg p-8 h-[520px] ${customCard246}`}>
                        <div className="py-2 ">
                            <Image
                                className="w-[50px] h-[50px]"
                                src="https://ktdcgroup.vn/wp-content/uploads/2020/07/Mask-Group-460.png"
                                alt={""}
                                width={50} height={50}
                            />
                        </div>
                        <div className="text-lg font-bold py-2">HỌC TƯ DUY PHẢN BIỆN</div>
                        <div className=" font-medium text-gray-500">Kỹ năng tư duy phản biện (Critical Thinking) được chú trọng lồng ghép trong chương trình học, nhất là trong quá trình luyện tập các dạng bài của Speaking Part 3 và Writing Task 2. Qua đó giúp học viên phát triển khả năng lập luận để ứng phó với mọi dạng đề bằng cách hình thành thói quen đánh giá vấn đề nhạy bén, trình bày quan điểm cá nhân và bảo vệ quan điểm bằng những dẫn chứng, lời giải thích và ví dụ có tính thuyết phục.</div>
                    </div>
                    {/* CARD 5 */}
                    <div className="w-full border rounded-lg p-8 h-[520px] hover:shadow-[rgba(17,_17,_26,_0.2)_0px_0px_20px] transition duration-300">
                        <div className="py-2 ">
                            <Image
                                className="w-[50px] h-[50px]"
                                src="https://ktdcgroup.vn/wp-content/uploads/2020/07/Mask-Group-457.png"
                                alt={""}
                                width={50} height={50}
                            />
                        </div>
                        <div className="text-lg font-bold py-2">LỘ TRÌNH CÁ NHÂN HÓA</div>
                        <div className=" font-medium text-gray-500">Sau giờ học cùng chuyên gia, học viên còn được hỗ trợ phát triển kỹ năng toàn diện bởi cộng đồng Alumni năng động (bao gồm các cựu học viên có điểm số cao từ 8.0 đến 8.5+). Riêng học viên khóa Foundation & Pre IELTS sẽ được bố trí cố vấn cá nhân riêng, giúp xây dựng lộ trình học phù hợp với bản thân, giải đáp các vấn đề học thuật, kèm 1:1, lắng nghe, chia sẻ các áp lực tâm lý trong suốt quá trình học để đảm bảo theo đúng lộ trình đề ra.</div>
                    </div>
                    {/* CARD 6 */}
                    <div className={`w-full border rounded-lg p-8 h-[520px] ${customCard246}`}>
                        <div className="py-2">
                            <Image
                                className="w-[50px] h-[50px]"
                                src="https://ktdcgroup.vn/wp-content/uploads/2020/07/Mask-Group-459.png"
                                alt={""}
                                width={50} height={50}
                            />
                        </div>
                        <div className="text-lg font-bold py-2">NHÓM HỌC TẬP TỰ CHỦ</div>
                        <div className=" font-medium text-gray-500">Học viên được tham gia các cộng đồng học tập tự chủ, bao gồm những cá nhân có chung mục tiêu IELTS để cùng nhau trao đổi kiến thức, luyện tập kỹ năng và thúc đẩy tinh thần trong suốt quá trình học. Một số cộng đồng điển hình tại KTDC có thể kể đến như nhóm học viên thi IELTS vào cùng thời điểm, cộng đồng luyện tập thói quen sử dụng tiếng Anh hàng ngày,...</div>
                    </div>
                </div>
            </div>
            <SignWithIELTS />
            <Footer />
        </div>
    )
}
