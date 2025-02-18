import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Loader } from "lucide-react"
import Image from "next/image"

export function LoginModal({ teacher, handleLogin, isLoading }: any) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="hover:bg-gray-100 py-10 rounded-lg flex flex-col justify-center items-center cursor-pointer">
                    <Image
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-20 h-20 object-cover rounded-full border"
                        width={1000}
                        height={0}
                    />
                    <div className="text-center space-y-1 mt-4">
                        <h3 className="text-xl font-bold">{teacher.name}</h3>
                        <p className="text-[rgb(var(--secondary-rgb))] font-medium">
                            {teacher.role}
                        </p>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Nhập mật mã của bạn</DialogTitle>
                    <DialogDescription>
                        Mật mã được cung cấp bởi admin hệ thống.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input id="name" value="9999" className="col-span-4" />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        onClick={handleLogin}
                        className="bg-[rgb(var(--secondary-rgb))] hover:bg-[rgb(var(--secondary-rgb))] hover:opacity-80"
                    >
                        {isLoading ? "Vui lòng đợi" : "Đăng nhập"}
                        {
                            isLoading && (
                                <Loader className="w-6 h-6 ml-2 animate-spin" />
                            )
                        }
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
