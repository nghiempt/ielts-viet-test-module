import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { BlogProvider } from "@/modules/test-toan-bo/components/blog-context";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IELTS VIỆT",
  description:
    "Học IELTS cùng chuyên gia đầu ngành. Hỗ trợ toàn diện từ giáo viên bản ngữ, cựu giám khảo và chuyên gia IELTS Việt Nam.",
  openGraph: {
    title: "IELTS VIỆT",
    description:
      "Học IELTS cùng chuyên gia đầu ngành. Hỗ trợ toàn diện từ giáo viên bản ngữ, cựu giám khảo và chuyên gia IELTS Việt Nam.",
    url: "https://ieltsviet.edu.vn",
    images: [
      {
        url: "https://res.cloudinary.com/farmcode/image/upload/v1736620702/ielts-viet/website-thumbnail_uqdu6b.png",
        width: 1200,
        height: 630,
        alt: "IELTS VIỆT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IELTS VIỆT",
    description:
      "Học IELTS cùng chuyên gia đầu ngành. Hỗ trợ toàn diện từ giáo viên bản ngữ, cựu giám khảo và chuyên gia IELTS Việt Nam.",
    images: [
      "https://res.cloudinary.com/farmcode/image/upload/v1736620702/ielts-viet/website-thumbnail_uqdu6b.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning={true}>
        <BlogProvider>
          {children}
          <Toaster />
        </BlogProvider>
      </body>
    </html>
  );
}
