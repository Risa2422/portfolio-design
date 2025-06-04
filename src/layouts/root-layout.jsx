import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header.jsx";

export function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
