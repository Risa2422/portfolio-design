import { useState } from "react";
import { VscMail } from "react-icons/vsc";
import SectionTitle from "./SectionTitle";

const Contact = () => {
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
      <SectionTitle title="Contact" jp="お問い合わせ" />
      <div className="space-y-10 md:space-y-20 mt-4 mb-14 px-4">
        <ul className="flex flex-col md:flex-row gap-4 md:gap-20 md:h-16">
          <li className="flex items-center md:flex-col md:w-56 gap-4 md:gap-1 md:items-start">
            <div
              className="flex items-center gap-2 cursor-pointer select-text hover:opacity-70 transition text-sm"
              onClick={handleCopy}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCopy();
                }
              }}
              // aria-label="メールアドレスをクリップボードにコピー"
              aria-label="Click to Copy"
            >
              <VscMail size={24} />
              <p className="text-base leading-none">yamari2422@gmail.com</p>
            </div>
            {copied ? (
              <p className="text-sm w-full">Copied!✅</p>
            ) : (
              // <p className="text-xs w-full">コピーしました！✅</p>
              <p className="text-sm text-neutral-700 w-full ">
                {/* ※クリックでコピーできます */}⭐️ Click to Copy ⭐️
              </p>
            )}
          </li>
          <li className="hover:opacity-70 transition">
            <a
              href="https://www.linkedin.com/in/risa-yamamoto-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 "
            >
              <img
                src="/linkedin-icon.png"
                alt="LinkedIn"
                className="w-6 h-5 mt-0.5 object-cover"
              />
              <p className="leading-none text-base">risa-yamamoto-profile</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
