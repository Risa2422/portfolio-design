import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Arrow = () => {
  const { language } = useLanguage();

  return (
    <Link to="/" className="hover:opacity-80">
      <div className="px-6 md:px-16 lg:px-32 xl:px-[218px] flex items-center gap-1">
        <span className="flex items-center justify-center rounded-full w-6 h-6 bg-primary">
          <MdOutlineArrowBackIosNew width={10} className="w-5 h-3 text-white" />
        </span>
        <p className="pb-0.5 text-sm">
          {language === "ja" ? "ホーム" : "Home"}
        </p>
      </div>
    </Link>
  );
};

export default Arrow;
