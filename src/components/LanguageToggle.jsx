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
      className="relative inline-flex h-7 w-14 shrink-0 items-center rounded-full bg-gray-200 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <span
        className={`pointer-events-none absolute left-1.5 text-[10px] font-semibold tracking-wide transition-opacity duration-200 ${
          isEn ? "opacity-0" : "text-gray-600 opacity-100"
        }`}
      >
        JA
      </span>
      <span
        className={`pointer-events-none absolute right-1.5 text-[10px] font-semibold tracking-wide transition-opacity duration-200 ${
          isEn ? "text-gray-600 opacity-100" : "opacity-0"
        }`}
      >
        EN
      </span>
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
          isEn ? "translate-x-8" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export default LanguageToggle;
