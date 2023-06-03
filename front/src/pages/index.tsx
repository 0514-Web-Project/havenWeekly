import { BodyContent, Footer, Header } from "@/layout";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between bg-[#fff">
      <div className={`w-full max-w-[906px]`}>
        <Header />
        <BodyContent />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
