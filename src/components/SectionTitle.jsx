import { useLanguage } from "../context/LanguageContext";
import DotMark from "./DotMark";

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
    <div className="md:pb-4 space-y-2">
      <div className="flex items-center gap-1.5">
        <DotMark colorClass={sub ? "bg-[#245377]" : "bg-primary"} />
        <p className="text-xs font-semibold tracking-widest text-text-sub">
          {displaySubtitle}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <h2
          className={`whitespace-nowrap font-bold  uppercase ${
            sub ? "text-3xl md:text-4xl" : "text-3xl md:text-4xl"
          }`}
        >
          {displayText}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;
