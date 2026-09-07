import { useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Arrow from "../../components/Arrow";
import FadeInPageWrapper from "../../components/FadeInPageWrapper";
import InfoList from "../../components/InfoList";

const WebDesign = () => {
  const infoItems = [
    { title: "Service Type", value: "" },
    { title: "Project Format", value: "" },
    { title: "Duration", value: "" },
    { title: "My Role", value: "" },
    { title: "Tools Used", value: "" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeInPageWrapper>
      <section className="space-y-10 md:space-y-4">
        <Arrow />
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-16 lg:px-32 xl:px-56 md:pt-12">
          <div className="md:w-1/2 flex-1 mb-4 md:mb-20 h-[300px]">
            <img
              src="/web-design/thumbnail.png"
              alt="Web Design Thumbnail"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4 flex-1">
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold">Web Design</h1>
              <div className="h-[0.8px] bg-border mt-4" />
            </div>
            <InfoList items={infoItems} />
          </div>
        </div>
        {/* Overview Section */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background-secondary">
          <h2 className="text-lg md:text-2xl text-accent font-medium">
            Overview
          </h2>
          <p className="text-base leading-relaxed text-gray-700"></p>
        </div>
        {/* Learnings Section */}
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 xl:px-56 py-20 bg-background">
          <h2 className="text-2xl text-center text-accent font-medium">
            Learnings
          </h2>
          <p className="text-base leading-relaxed text-gray-700"></p>
          <Link to="/" className="hover:opacity-80 pt-10">
            <div className="flex items-center gap-1">
              <MdOutlineArrowBackIosNew className="w-5 h-3" />
              <p className="text-sm underline">Home</p>
            </div>
          </Link>
        </div>
      </section>
    </FadeInPageWrapper>
  );
};

export default WebDesign;
