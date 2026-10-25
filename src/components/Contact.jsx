import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const LINKEDIN_URL = "https://www.linkedin.com/in/risa-yamamoto-profile/";
const EMAIL = "yamari2422@gmail.com";
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const Contact = () => {
  // ページ最下部に到達したら半円が沈み、バネで持ち上がる
  const { scrollY } = useScroll();
  const scaleY = useMotionValue(1);
  const isAtBottom = useRef(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const reached =
      y + window.innerHeight >= document.documentElement.scrollHeight - 2;
    if (reached && !isAtBottom.current) {
      animate(scaleY, 1.2, { duration: 0.25, ease: "easeOut" }).then(() =>
        animate(scaleY, 1, { type: "spring", stiffness: 200, damping: 27 }),
      );
    }
    isAtBottom.current = reached;
  });

  // ホバーしようとするとカーソルと反対側へ逃げ、少し経つと中央へ戻る
  const offsetX = useMotionValue(0);
  const returnTimer = useRef(null);
  const ESCAPE_DISTANCE = 64;
  const MAX_OFFSET = 128;

  useEffect(() => () => clearTimeout(returnTimer.current), []);

  const handleEscape = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dir = e.clientX < rect.left + rect.width / 2 ? 1 : -1;
    let target = offsetX.get() + dir * ESCAPE_DISTANCE;
    // 端まで逃げたら反対側へ回り込む
    if (Math.abs(target) > MAX_OFFSET) target = -dir * ESCAPE_DISTANCE;
    animate(offsetX, target, { type: "spring", stiffness: 400, damping: 30 });

    clearTimeout(returnTimer.current);
    returnTimer.current = setTimeout(() => {
      animate(offsetX, 0, { type: "spring", stiffness: 120, damping: 20 });
    }, 1200);
  };

  return (
    <footer className="relative isolate bg-primary text-white px-[5vw] mt-32 py-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <span
        aria-hidden="true"
        style={{ backgroundImage: NOISE_SVG }}
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.3] mix-blend-overlay"
      />
      <motion.span
        aria-hidden="true"
        style={{ scaleY, x: offsetX }}
        onMouseEnter={handleEscape}
        className="absolute top-0 left-[calc(50%-1.5rem)] w-12 h-6 origin-top rounded-b-full bg-background overflow-hidden"
      >
        <span
          style={{ backgroundImage: NOISE_SVG }}
          className="pointer-events-none absolute inset-0 opacity-[0.3] mix-blend-overlay"
        />
      </motion.span>
      <ul className="flex flex-col gap-[6px]">
        <li>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src="/icons/linkedin-logo.svg" alt="" width="24" height="24" />
            <span className="underline">linkedIn</span>
          </a>
        </li>
        <li>
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/icons/envelope-simple.svg"
              alt=""
              width="24"
              height="24"
            />
            <span className="underline">{EMAIL}</span>
          </a>
        </li>
      </ul>
      <p className="text-xs">All Rights Reserved 2026 ©︎ Risa Yamamoto</p>
    </footer>
  );
};

export default Contact;
