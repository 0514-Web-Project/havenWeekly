import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import BodyContent from "@/layout/BodyContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <div className={`px-24 pt-24 justify-between ${inter.className}`}>
        <Header />
        <BodyContent />
      </div>
      <Footer />
    </main>
  );
}
