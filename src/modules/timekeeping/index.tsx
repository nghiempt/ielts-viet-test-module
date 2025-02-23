/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Image from "next/image";
import { LoginModal } from "./login";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { HELPER } from "@/utils/helper";

export default function TimeKeepingClient() {
  const currentTime = new Date().toLocaleTimeString();
  const { toast } = useToast();

  const [teachers, setTeachers] = useState([] as any);
  const [currentTeacher, setCurrentTeacher] = useState(null as any);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isCheckIn, setIsCheckIn] = useState(false);

  const handleCheckIn = () => {
    const raw = "";
    const requestOptions: any = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };
    fetch(
      `https://api.farmcode.io.vn/v1/ielts-viet/account/check/${currentTeacher?._id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result?.data) {
          setIsLoading(false);
          setIsCheckIn(true);
          toast({
            title: "Bạn đã check-in thành công!",
            description: "Chúc bạn một ngày làm việc hiệu quả!",
          });
        } else {
          toast({
            title: "Có lỗi xảy ra",
            variant: "destructive",
            description: "Vui lòng thử lại",
          });
          setIsLoading(false);
        }
      })
      .catch((error) => console.error(error));
  };

  const handleCheckOut = () => {
    const raw = "";
    const requestOptions: any = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };
    fetch(
      `https://api.farmcode.io.vn/v1/ielts-viet/account/check/${currentTeacher?._id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result?.data) {
          setIsLoading(false);
          setIsCheckIn(true);
          setIsLogin(false);
          toast({
            title: "Bạn đã check-out thành công!",
            description: "Chúc bạn một ngày làm việc hiệu quả!",
          });
        } else {
          toast({
            title: "Có lỗi xảy ra",
            variant: "destructive",
            description: "Vui lòng thử lại",
          });
          setIsLoading(false);
        }
      })
      .catch((error) => console.error(error));
  };

  const getAllAccount = async () => {
    const requestOptions: any = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://api.farmcode.io.vn/v1/ielts-viet/account/", requestOptions)
      .then((response) => response.json())
      .then((result) => setTeachers(result?.data))
      .catch((error) => console.error(error));
  };

  const handleLogin = async (code: string) => {
    console.log(currentTeacher);
    setIsLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      login_code: code,
    });
    const requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      `https://api.farmcode.io.vn/v1/ielts-viet/account/${currentTeacher?._id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result?.data) {
          setIsLogin(true);
          setIsLoading(false);
          toast({
            title: "Đăng nhập thành công!",
            description: "Chúc bạn một ngày làm việc hiệu quả!",
          });
        } else {
          toast({
            title: "Mã code không hợp lệ!",
            variant: "destructive",
            description: "Vui lòng kiểm tra lại mã code của bạn!",
          });
          setIsLoading(false);
        }
      })
      .catch((error) => console.error(error));
  };

  const init = () => {
    getAllAccount();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full flex flex-col justify-center items-center pt-10 pb-20">
        {!isLogin && (
          <div className="w-3/4">
            <h1 className="text-2xl text-center">
              Hãy chọn bản thân để Check-in nhé!
            </h1>
            <div
              className={`grid grid-cols-1 ${
                teachers?.length === 0 ? "lg:grid-cols-1" : "lg:grid-cols-3"
              } gap-10 mt-10`}
            >
              {teachers?.length === 0 ? (
                <div className="w-full h-96 flex justify-center items-center">
                  <Loader className="w-6 h-6 ml-2 animate-spin" />
                </div>
              ) : (
                teachers?.map((teacher: any, index: any) => {
                  return (
                    <LoginModal
                      key={index}
                      teacher={teacher}
                      handleLogin={handleLogin}
                      isLoading={isLoading}
                      setCurrentTeacher={setCurrentTeacher}
                    />
                  );
                })
              )}
            </div>
          </div>
        )}
        {isLogin && !isCheckIn && (
          <div className="w-3/4 flex flex-col lg:flex-row justify-center items-center gap-10 lg:mt-10">
            <div className="border border-green-500 p-10 rounded-lg flex flex-col justify-center items-center cursor-pointer">
              <Image
                src={currentTeacher?.teacher_avatar}
                alt="alt"
                className="w-20 h-20 object-cover rounded-full border"
                width={1000}
                height={0}
              />
              <div className="text-center space-y-1 mt-4">
                <h3 className="text-xl font-bold">
                  {currentTeacher?.teacher_name}
                </h3>
                <p className="text-[rgb(var(--secondary-rgb))] font-medium">
                  {HELPER.renderStatusTimeKeeping(currentTeacher.latest_status)}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center gap-4">
              <h1 className="text-xl text-center">
                Click vào nút bên dưới để Check-in
              </h1>
              <div className="flex justify-center items-center">
                <div
                  onClick={handleCheckIn}
                  className="w-28 h-28 rounded-full border border-dashed border-green-500 text-green-500 hover:border-2 hover:font-extrabold flex justify-center items-center cursor-pointer"
                >
                  {isLoading ? (
                    <Loader className="w-6 h-6 ml-2 animate-spin" />
                  ) : (
                    "Check-in"
                  )}
                </div>
              </div>
              <h1 className="text-xl text-center">
                Thời gian bạn Check-in là: {currentTime}
              </h1>
            </div>
          </div>
        )}
        {isLogin && isCheckIn && (
          <div className="w-3/4 flex flex-col lg:flex-row justify-center items-center gap-10 lg:mt-10">
            <div className="border border-red-500 p-10 rounded-lg flex flex-col justify-center items-center cursor-pointer">
              <Image
                src={currentTeacher?.avatar}
                alt="alt"
                className="w-20 h-20 object-cover rounded-full border"
                width={1000}
                height={0}
              />
              <div className="text-center space-y-1 mt-4">
                <h3 className="text-xl font-bold">
                  {currentTeacher?.teacher_name}
                </h3>
                <p className="text-[rgb(var(--secondary-rgb))] font-medium">
                  {HELPER.renderStatusTimeKeeping(currentTeacher.latest_status)}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center gap-4">
              <h1 className="text-xl text-center">
                Bạn đã Check-in lúc 5:20:16 PM
              </h1>
              <div className="flex justify-center items-center">
                <div
                  onClick={handleCheckOut}
                  className="w-28 h-28 rounded-full border border-dashed border-red-500 text-red-500 hover:border-2 hover:font-extrabold flex justify-center items-center cursor-pointer"
                >
                  {isLoading ? (
                    <Loader className="w-6 h-6 ml-2 animate-spin" />
                  ) : (
                    "Check-out"
                  )}
                </div>
              </div>
              <h1 className="text-xl text-center">
                Thời gian bạn đang làm việc là: 118 phút.
              </h1>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
