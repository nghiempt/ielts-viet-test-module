import Footer from "@/layout/footer";
import Header from "@/layout/header";
import TipsContentDetail from "./main";
import { BlogProvider } from "../components/blog-context";

export default function TipsDetailPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full mb-20">
        <BlogProvider>
          <TipsContentDetail />
        </BlogProvider>
      </div>
      <Footer />
    </div>
  );
}
