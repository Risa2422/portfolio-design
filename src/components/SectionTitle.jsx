import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <h2 className="relative z-10 text-3xl font-raleway whitespace-nowrap pl-4 pt-[0.8px]">
          {title}
        </h2>
        <div className="absolute top-0 left-0 w-9 h-9 bg-primary-light rounded-full z-0"></div>
      </div>
      <div className="flex-1 h-[0.8px] bg-border" />
    </div>
  );
};

export default SectionTitle;
