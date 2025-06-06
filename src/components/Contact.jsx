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
    <section className="mt-0">
      <SectionTitle title="Contact" />
      <div className="space-y-10 md:space-y-20 mt-4 md:mt-8 mb-10 px-4">
        <ul className="flex flex-col md:flex-row gap-4 md:gap-20 md:h-16">
          <li className="w-56 space-y-1">
            <div
              className="flex items-center gap-2 cursor-pointer select-text hover:opacity-70 transition"
              onClick={handleCopy}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCopy();
                }
              }}
              aria-label="メールアドレスをクリップボードにコピー"
            >
              <VscMail size={26} />
              <p className="text-sm leading-none">yama422@gmail.com</p>
            </div>
            {copied ? (
              <p className="text-xs text-[#7e611e] font-semibold">
                メールアドレスをコピーしました！
              </p>
            ) : (
              <p className="text-xs text-text-sub">
                ※クリックするとコピーができます
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
                className="w-7 h-6 mt-0.5 object-cover "
              />
              <p className="leading-none">risa-yamamoto-profile</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
