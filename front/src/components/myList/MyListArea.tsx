import dynamic from "next/dynamic";

const MyList = dynamic(() => import("../myList/MyList"), {
  ssr: false,
});

const MyListHeader = dynamic(() => import("../myList/MyListHeader"), {
  ssr: false,
});

const MyListArea = ({
  setAnalytics,
}: {
  setAnalytics: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <div className="border border-solid border-[#fff] rounded-[12px] p-[14px_12px] h-[259px] w-[48%] sm:w-full">
      <MyListHeader setAnalytics={setAnalytics} />
      <MyList />
    </div>
  );
};

export default MyListArea;
