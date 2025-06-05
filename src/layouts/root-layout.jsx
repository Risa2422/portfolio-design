import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header.jsx";

export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-[5vw] sm:px-[10vw]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
