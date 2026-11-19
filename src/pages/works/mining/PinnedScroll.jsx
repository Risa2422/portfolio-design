import { useEffect, useRef, useState } from "react";

// Pins its children below the fixed header while the page scrolls, and turns
// that page scroll into scrolling the tall image inside the child marked
// `data-pin-frame` (the image itself is marked `data-pin-content`). Once the
// image has been scrolled to its end, the pin releases and the page carries on.
function PinnedScroll({ children }) {
  const outerRef = useRef(null);
  const stickyRef = useRef(null);
  // Extra page-scroll distance needed to scroll the image from top to bottom
  const [distance, setDistance] = useState(0);

  // Measure how much of the image is hidden below the frame
  useEffect(() => {
    const sticky = stickyRef.current;
    const frame = sticky?.querySelector("[data-pin-frame]");
    const content = sticky?.querySelector("[data-pin-content]");
    if (!frame || !content) return;

    const measure = () =>
      setDistance(Math.max(0, content.offsetHeight - frame.clientHeight));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    observer.observe(content);
    content.addEventListener("load", measure);
    return () => {
      observer.disconnect();
      content.removeEventListener("load", measure);
    };
  }, []);

  // Map the page scroll inside the pinned range onto the image offset
  useEffect(() => {
    const outer = outerRef.current;
    const sticky = stickyRef.current;
    const content = sticky?.querySelector("[data-pin-content]");
    if (!outer || !content) return;

    let frameId = null;
    const update = () => {
      frameId = null;
      const top = parseFloat(getComputedStyle(sticky).top) || 0;
      const scrolled = top - outer.getBoundingClientRect().top;
      const offset = Math.min(Math.max(scrolled, 0), distance);
      content.style.transform = `translateY(${-offset}px)`;
    };
    const onScroll = () => {
      if (frameId === null) frameId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [distance]);

  return (
    <div ref={outerRef}>
      <div ref={stickyRef} className="sticky top-[92px] sm:top-20">
        {children}
      </div>
      {/* A sticky element only stays pinned within its parent's content box
          (padding doesn't count), so the pin range is a real spacer element */}
      <div aria-hidden="true" style={{ height: distance }} />
    </div>
  );
}

export default PinnedScroll;
