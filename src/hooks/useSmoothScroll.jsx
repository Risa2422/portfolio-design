import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

let lenisInstance = null;

export function scrollToElement(element) {
  if (!element) return;
  if (lenisInstance) {
    // Lenis デフォルトの easeOutExpo は序盤で一気に進み瞬間移動に見えるため、ease-in-out にする
    lenisInstance.scrollTo(element, {
      duration: 1.4,
      easing: (t) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2),
    });
  } else {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function useSmoothScroll() {
  const lenisRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.8,
    });
    lenisRef.current = lenis;
    lenisInstance = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      lenisInstance = null;
    };
  }, []);

  // ページ遷移時にLenisの内部スクロール位置もトップへリセットする
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
}
