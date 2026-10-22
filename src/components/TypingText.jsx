import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TypingText = ({
  lines,
  speed = 80,
  startDelay = 400,
  className = "",
  onComplete,
}) => {
  const fullText = lines.join("\n");
  const [count, setCount] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (count === fullText.length) onCompleteRef.current?.();
  }, [count, fullText.length]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setCount(fullText.length);
      return;
    }

    setCount(0);
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= fullText.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [fullText, speed, startDelay]);

  const cursor = (
    <motion.span
      className="inline-block w-[2px] h-[1em] bg-current align-[-0.15em] ml-0.5"
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        times: [0, 0.3, 0.3, 1],
      }}
    />
  );

  // 各行をブロックにして、行間の余白を gap で取る
  const renderLines = (text, withCursor = false) =>
    text.split("\n").map((line, i, arr) => (
      <span key={i} className="block">
        {line}
        {withCursor && i === arr.length - 1 && cursor}
      </span>
    ));

  return (
    <p className={`grid ${className}`} aria-label={lines.join(" ")}>
      <span
        className="invisible col-start-1 row-start-1 flex flex-col gap-3 md:gap-4"
        aria-hidden="true"
      >
        {renderLines(fullText)}
      </span>
      <span
        className="col-start-1 row-start-1 flex flex-col gap-3 md:gap-4"
        aria-hidden="true"
      >
        {renderLines(fullText.slice(0, count), true)}
      </span>
    </p>
  );
};

export default TypingText;
