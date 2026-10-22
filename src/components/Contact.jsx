import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import DotMark from "./DotMark";

const Contact = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const textToCopy = "yamari2422@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("コピーに失敗しました:", err);
    }
  };
  return (
    <section>
      <div className="mt-56 mb-10 w-full flex flex-col items-center justify-center gap-2">
        <div className="w-full max-w-md flex items-center justify-center gap-1">
          {copied ? (
            <span aria-hidden="true" className="text-sm leading-none"></span>
          ) : (
            <DotMark />
          )}
          <p
            className={`font-medium text-sm ${copied ? "text-primary font-semibold" : ""}`}
            aria-live="polite"
          >
            {copied
              ? language === "ja"
                ? "\\ コピーしました！ /"
                : "Copied!"
              : language === "ja"
                ? "お気軽にご連絡ください。"
                : "Feel free to get in touch"}
          </p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="group w-full max-w-md cursor-pointer"
          aria-label={
            language === "ja"
              ? "メールアドレスをクリップボードにコピー"
              : "Copy email address to clipboard"
          }
        >
          <div className="relative transition duration-300 ease-out hover:scale-x-[1.01] active:scale-x-[1.02]">
            <img src="/contact.svg" alt="contact info" className="w-full" />
            <img
              src="/contact-hover.svg"
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] group-focus-visible:[clip-path:inset(0_0_0_0)] ${
                copied
                  ? "transition-none"
                  : "transition-[clip-path] duration-500 ease-out"
              }`}
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Contact;
