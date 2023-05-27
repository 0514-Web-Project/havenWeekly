import dynamic from "next/dynamic";

const Header = dynamic(() => import("../layout/Header"), {
  ssr: false,
});
const BodyContent = dynamic(() => import("../layout/BodyContent"), {
  ssr: false,
});
const Footer = dynamic(() => import("../layout/Footer"), {
  ssr: false,
});

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
