import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TypingText = ({
  lines,
  speed = 55,
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

  const renderLines = (text) =>
    text.split("\n").map((line, i, arr) => (
      <span key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </span>
    ));

  return (
    <p className={`grid ${className}`} aria-label={lines.join(" ")}>
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {renderLines(fullText)}
      </span>
      <span className="col-start-1 row-start-1" aria-hidden="true">
        {renderLines(fullText.slice(0, count))}
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-current align-[-0.15em] ml-0.5"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            times: [0, 0.3, 0.3, 1],
          }}
        />
      </span>
    </p>
  );
};

export default TypingText;
