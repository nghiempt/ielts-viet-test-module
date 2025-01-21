import Footer from "@/layout/footer";
import Header from "@/layout/header";
import TipsContentDetail from "./main";

export default function TipsDetailPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full mb-20">
        <TipsContentDetail />
      </div>
      <Footer />
    </div>
  );
}

