const SectionTitle = ({ title, jp, sub = false }) => {
  return (
    <div>
      <p className="text-xs pl-5 text-gray-600">{jp}</p>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <h2
            className={`relative z-10 font-raleway whitespace-nowrap pl-4 ${
              sub
                ? "text-xl md:text-2xl pt-0 md:pt-1"
                : "text-2xl md:text-3xl pt-0 md:pt-[0.8px]"
            }`}
          >
            {title}
          </h2>
          <div
            className={`absolute top-0 left-0 md:-left-1 w-7 h-7 md:w-9 md:h-9 rounded-full z-0 ${
              sub ? "bg-secondary-light" : "bg-primary-light"
            }`}
          ></div>
        </div>
        <div className="flex-1 h-[0.8px] bg-border" />
      </div>
    </div>
  );
};

export default SectionTitle;
