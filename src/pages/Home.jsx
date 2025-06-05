import React from "react";

const Home = () => {
  return (
    <div className=" h-[560px]">
      <div className="relative z-20 space-y-2 sm:space-y-2 mt-20 md:mt-[100px]">
        {/* <img
          src="/circle-yellow.png"
          alt="Yellow Circle"
          className="absolute -top-10 -left-10 md:-top-40 md:-left-20 w-[200px] h-[200px] md:w-[600px] md:h-[600px]"
        />
        <img
          src="/circle-green.png"
          alt="Green Circle"
          className="hidden md:block absolute md:-top-40 md:left-[720px] md:w-[420px] md:h-[420px]"
        />
        <img
          src="/circle-red.png"
          alt="Red Circle"
          className="hidden md:block absolute md:top-36 md:left-[1000px] md:w-[240px] md:h-[240px]"
        /> */}
        <div className="font-lustria gap-2 flex flex-col px-8">
          <h1 className="text-5xl gap-2 sm:text-[88px] md:text-[100px] lg:text-[110px] flex flex-col z-10">
            <span className="uppercase">Risa</span>
            <span className="uppercase">Yamamoto</span>
          </h1>
          <p className="text-xs md:text-sm z-30 px-2 md:px-4 ">
            デザイナー目指しています。一生懸命頑張りますデザイナー目指しています。一生懸命頑張ります
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
