import { ArrowRight } from "lucide-react";
import { Fragment } from "react";
import { useLanguage } from "../context/LanguageContext";

function InfoList({ items, visible = true }) {
  const { language } = useLanguage();
  const scrollToFinalUI = (e) => {
    e.preventDefault();
    const element = document.getElementById("final-ui");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex flex-col justify-start gap-6">
      <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 ">
        {items.map(({ title, value }, index) => (
          <Fragment key={index}>
            <dt className="font-semibold">{title}</dt>
            <dd>{value}</dd>
          </Fragment>
        ))}
      </dl>
      {visible && (
        <div className="flex justify-center items-center self-end ">
          <a
            href="#final-ui"
            onClick={scrollToFinalUI}
            className="group flex items-center gap-1 px-4 py-1.5 text-white  rounded-full text-sm transition  bg-accent"
          >
            {language === "ja" ? "完成UIを見る" : "Check the Final UI"}
            <ArrowRight className="w-5 h-4 transform duration-200 group-hover:translate-x-0.5 text-white" />
          </a>
        </div>
      )}
    </div>
  );
}

export default InfoList;
