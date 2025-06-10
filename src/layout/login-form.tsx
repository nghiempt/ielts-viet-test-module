"use client";

import { toast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import Image from "next/image";
import { IMAGES } from "@/utils/images";
import Cookies from "js-cookie";
import { UserService } from "@/services/user";
import { usePathname } from "next/navigation";
import { Loader } from "lucide-react";
import "@/styles/login-form.css";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [logined, setLogined] = useState(false);
  const pathname = usePathname();
  const [selectedOption, setSelectedOption] = useState(1);

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
        <DialogHeader>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={IMAGES.LOGO}
              alt=""
              width={1000}
              height={1000}
              className="w-[50%] h-full"
            />
            <div className="radio-inputs mt-2">
              <label className="radio" onClick={() => setSelectedOption(1)}>
                <input
                  checked={selectedOption === 1}
                  name="radio"
                  type="radio"
                />
                <span className="name">Khách</span>
              </label>
              <label className="radio" onClick={() => setSelectedOption(2)}>
                <input
                  checked={selectedOption === 2}
                  name="radio"
                  type="radio"
                />
                <span className="name">Học viên</span>
              </label>
            </div>
            <div className="font-semibold text-2xl mt-2">Đăng nhập</div>
          </div>
        </DialogHeader>
        <div className="content-wrapper">
          <div
            className={`option-content ${
              selectedOption === 1 ? "visible" : "hidden"
            }`}
          >
            <div className="flex justify-between items-center gap-4">
              <button
                // onClick={(e: any) => handleSubmitWithGoogle(e)}
                className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Image
                  className="w-5 h-5"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  alt="google logo"
                />
                <span className="text-gray-700">Tiếp tục với Google</span>
              </button>
            </div>
          </div>
          <div
            className={`option-content ${
              selectedOption === 2 ? "visible" : "hidden"
            }`}
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-2">
                <Label htmlFor="username" className="text-left">
                  Email
                </Label>
                <Input
                  id="username"
                  placeholder="Nhập Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-span-4"
                  style={{ fontSize: "16px" }}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-2">
                <Label htmlFor="password" className="text-left">
                  Mật khẩu
                </Label>
                <Input
                  id="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="col-span-4"
                  style={{ fontSize: "16px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          {selectedOption === 2 && (
            <Button
              type="submit"
              onClick={handleSubmit}
              className="bg-[#FA812F]"
            >
              Đăng nhập
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
