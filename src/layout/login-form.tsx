"use client";

import { toast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { IMAGES } from "@/utils/images";
import Cookies from "js-cookie";
import { UserService } from "@/services/user";
import { usePathname } from "next/navigation";

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
          <Button className="flex text-[14px] lg:text-[18px] bg-[rgb(var(--secondary-rgb))] text-white rounded-full px-6 hover:opacity-80 hover:bg-[rgb(var(--secondary-rgb))]">
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
            <div className="font-semibold text-2xl mt-2">Đăng nhập</div>
          </div>
        </DialogHeader>
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
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit} className="bg-[#FA812F]">
            Đăng nhập
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
