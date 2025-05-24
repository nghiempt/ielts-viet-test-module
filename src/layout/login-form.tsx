"use client";

import { toast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { IMAGES } from "@/utils/images";
import Cookies from "js-cookie";
import { UserService } from "@/services/user";
import { usePathname } from "next/navigation";
import { Loader } from "lucide-react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [logined, setLogined] = useState(false);
  const pathname = usePathname();

  const validateForm = () => {
    if (email === "" || password === "") {
      toast({
        variant: "destructive",
        title: "Vui lòng điền đầy đủ thông tin",
      });
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const data = await UserService.loginUserEmail(email, password);

      if (data?.message === "SUCCESS") {
        Cookies.set("isLogin", data?.data._id, { expires: 7 });
        Cookies.set("userLogin", data?.data._id, { expires: 7 });
        setLogined(true);
        window.location.href = pathname;
      } else {
        throw new Error("Email hoặc mật khẩu chưa chính xác");
      }
    } catch (error) {
      console.error("========= Error Login:", error);
      toast({
        variant: "destructive",
        title: "Email hoặc mật khẩu chưa chính xác",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-3">
          <Button className="flex text-[14px] lg:text-[16px] bg-[rgb(var(--secondary-rgb))] text-white rounded-full px-6 hover:opacity-80 hover:bg-[rgb(var(--secondary-rgb))]">
            Đăng nhập
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="flex w-full">
            <div className="w-full flex flex-col">
              <div className="mb-4">
                <div className="flex justify-start items-center gap-4">
                  <h1 className="text-2xl font-bold">Đăng nhập</h1>
                </div>
              </div>
              <div className="mt-4">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium flex items-center"
                    >
                      Email <span className="text-[#FA812F] ml-1">*</span>
                    </label>
                    <input
                      id="email"
                      type="text"
                      placeholder="Nhập email"
                      className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#FA812F] focus:border-transparent"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium flex items-center"
                    >
                      Mật khẩu <span className="text-[#FA812F] ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type="password"
                        placeholder="Nhập mật khẩu"
                        className="w-full p-3 rounded-md border pr-10 focus:outline-none focus:ring-2 focus:ring-[#FA812F] focus:border-transparent"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center gap-2">
                    <Button
                      onClick={() => handleSubmit()}
                      className="w-full text-[16px] py-6 bg-[#FA812F] hover:bg-[#ff6912] text-white rounded-md"
                    >
                      {isLoading ? "Vui lòng đợi" : "Đăng nhập"}{" "}
                      {isLoading && (
                        <Loader className="animate-spin" size={48} />
                      )}
                    </Button>
                    <Button
                      onClick={() => {
                        toast({
                          variant: "default",
                          title: "Thông báo",
                          description: "Chức năng này đang được phát triển",
                          className:
                            "bg-yellow-500 text-white border-yellow-500",
                        });
                      }}
                      className="w-16 text-[14px] py-6 bg-gray-100 hover:bg-gray-200 text-white rounded-md"
                    >
                      <Image
                        src={IMAGES.GG_LOGO}
                        alt="loading"
                        className="w-full h-auto rounded-full"
                        width={1000}
                        height={0}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
