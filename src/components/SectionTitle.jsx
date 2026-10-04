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
    <div className="md:pb-6">
      <div className="flex items-center gap-2">
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            sub ? "bg-[#4F7A4A]" : "bg-[#C4633F]"
          }`}
        />
        <p className="text-ms md:text-sm font-medium text-text-sub tracking-wider">
          {displaySubtitle}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <h2
          className={`whitespace-nowrap font-bold tracking-wide  ${
            sub ? "text-4xl md:text-5xl" : "text-4xl md:text-5xl"
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
