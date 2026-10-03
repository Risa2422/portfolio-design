import { useLanguage } from "../context/LanguageContext";

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const isEn = language === "en";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEn}
      aria-label="Switch language / 言語を切り替える"
      onClick={toggleLanguage}
      className="relative inline-flex h-7 w-[52px] shrink-0 items-center rounded-full bg-[#E6DFD2] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-2 text-[14px] font-semibold leading-none text-gray-700"
      >
        あ
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-2 text-[14px] font-semibold leading-none text-gray-700"
      >
        A
      </span>
      <span
        className={`relative inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
          isEn ? "translate-x-7" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export default LanguageToggle;
