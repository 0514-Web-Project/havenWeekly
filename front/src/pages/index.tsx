import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import BodyContent from "@/layout/BodyContent";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between">
      <div className={`w-full max-w-[906px]`}>
        <Header />
        <BodyContent />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
