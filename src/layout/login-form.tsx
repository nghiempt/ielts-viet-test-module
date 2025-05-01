"use client";

import React from "react";
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

const LoginForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-3">
          <Button className="hidden lg:flex text-[18px] bg-[rgb(var(--secondary-rgb))] text-white rounded-full px-6 hover:opacity-80 hover:bg-[rgb(var(--secondary-rgb))]">
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
              className="w-[40%] h-full"
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
              value=""
              className="col-span-4"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="password" className="text-left">
              Mật khẩu
            </Label>
            <Input
              id="password"
              placeholder="Nhập mật khẩu"
              value=""
              className="col-span-4"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Đăng nhập</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
