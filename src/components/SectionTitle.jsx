import { useLanguage } from "../context/LanguageContext";

const SectionTitle = ({
  title,
  jp,
  subtitle = "Subtitle",
  jpSubtitle,
  sub = false,
}) => {
  const { language } = useLanguage();
  const isJa = language === "ja";
  const displayText = isJa && jp ? jp : title;
  const displaySubtitle = isJa && jpSubtitle ? jpSubtitle : subtitle;

  return (
    <div className="pb-5">
      <div className="flex items-center gap-3">
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            sub ? "bg-[#4F7A4A]" : "bg-[#C4633F]"
          }`}
        />
        <p className="text-xs md:text-sm text-gray-600 tracking-wider">
          {displaySubtitle}
        </p>
      </div>
      <div className="flex items-center space-x-4 mt-2">
        <h2
          className={`whitespace-nowrap font-bold uppercase leading-4  ${
            sub ? "text-xl md:text-4xl" : "text-2xl md:text-4xl"
          }`}
        >
          {displayText}
        </h2>
        {/* <div className="flex-1 h-[1px] bg-[#A89E8D]" /> */}
      </div>
    </div>
  );
};

export default SectionTitle;
