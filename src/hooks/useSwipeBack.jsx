import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 横方向の移動量がこの値を超えたら「戻る」とみなす
const SWIPE_THRESHOLD = 150;
// 横の移動量が縦の何倍以上なら横スワイプとみなすか
const HORIZONTAL_RATIO = 2;
// この時間ホイールイベントが途切れたら1回のジェスチャー終了とみなす
const GESTURE_END_MS = 200;

// 横スクロールできる要素の中での操作は対象外にする
const isInHorizontalScroller = (el) => {
  while (el && el !== document.body) {
    const { overflowX } = getComputedStyle(el);
    if (
      (overflowX === "auto" || overflowX === "scroll") &&
      el.scrollWidth > el.clientWidth
    ) {
      return true;
    }
    el = el.parentElement;
  }
  return false;
};

// ブラウザ標準のスワイプバックは CSS (overscroll-behavior-x) で無効にしているため、
// 明確な横スワイプのときだけ前のページへ戻る
export function useSwipeBack() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") return;

    let dx = 0;
    let dy = 0;
    let triggered = false;
    let ignore = false;
    let timerId;

    const handleWheel = (e) => {
      // ピンチズーム
      if (e.ctrlKey) return;

      // ジェスチャー開始時
      if (dx === 0 && dy === 0 && !triggered) {
        ignore = isInHorizontalScroller(e.target);
      }

      clearTimeout(timerId);
      timerId = setTimeout(() => {
        dx = 0;
        dy = 0;
        triggered = false;
        ignore = false;
      }, GESTURE_END_MS);

      if (triggered || ignore) return;

      dx += e.deltaX;
      dy += e.deltaY;

      if (
        -dx > SWIPE_THRESHOLD &&
        Math.abs(dx) > Math.abs(dy) * HORIZONTAL_RATIO
      ) {
        triggered = true;
        // サイト内の履歴があれば戻る、直接開いた場合はHomeへ
        if (window.history.state?.idx > 0) {
          navigate(-1);
        } else {
          navigate("/");
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(timerId);
    };
  }, [pathname, navigate]);
}
