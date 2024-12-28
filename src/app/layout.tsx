import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IELTS VIỆT",
  description: "Học IELTS cùng chuyên gia đầu ngành. Hỗ trợ toàn diện từ giáo viên bản ngữ, cựu giám khảo và chuyên gia IELTS Việt Nam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning={true}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
