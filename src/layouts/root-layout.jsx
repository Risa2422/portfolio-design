import { Outlet } from "react-router-dom";
import Contact from "../components/Contact";
import Header from "../components/Header.jsx";
import { useSmoothScroll } from "../hooks/useSmoothScroll.jsx";
import { useSwipeBack } from "../hooks/useSwipeBack.jsx";

export function RootLayout() {
  useSmoothScroll();
  useSwipeBack();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="font-sans flex-1 mt-14 md:mt-28">
        <Outlet />
      </main>
      <Contact />
    </div>
  );
}
