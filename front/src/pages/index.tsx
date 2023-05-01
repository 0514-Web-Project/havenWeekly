import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import BodyContent from "@/layout/BodyContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <BodyContent />
      <Footer />
    </main>
  );
}
