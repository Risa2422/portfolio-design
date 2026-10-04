import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const navLabels = {
  ja: { home: "ホーム", profile: "プロフィール" },
  en: { home: "Home", profile: "Profile" },
};

function Header() {
  const location = useLocation();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { to: "/", label: navLabels[language].home },
    { to: "profile", label: navLabels[language].profile },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "backdrop-blur shadow-sm" : ""}
      `}
    >
      <div className="flex justify-between items-center h-[92px] sm:h-20 px-[5vw]">
        <Link to="/" className="text-xl font-bold">
          <img src="logo.svg" alt="logo" className="w-6 h-6 object-contain" />
        </Link>
        <div className="flex items-center gap-4 sm:hidden">
          <LanguageToggle />
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`
            absolute top-16 w-1/4 right-6 px-[3vw] rounded border border-gray-300
            sm:static sm:block sm:bg-transparent sm:px-0 sm:py-0 sm:border-none sm:rounded-none
            transition-all duration-200
            ${
              isOpen
                ? "opacity-100 scale-100 visible bg-white shadow-sm"
                : "opacity-0 scale-95 invisible"
            }
            sm:opacity-100 sm:scale-100 sm:visible
          `}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-10 sm:space-y-0 sm:py-0 align-center sm:items-center justify-end">
            {navLinks.map(({ to, label }, index) => {
              const isWorkPath = location.pathname.startsWith("/works");
              return (
                <li
                  key={to}
                  className={`${
                    index === 1 ? "border-t border-gray-300 sm:border-none" : ""
                  }`}
                >
                  <NavLink
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => {
                      const active = isActive || (to === "/" && isWorkPath);
                      return `
                      group relative transition-all duration-600 space-y-4 text-md leading-6 block py-3 tracking-wide
                        ${active ? "font-medium" : ""}
                        ${
                          active && !isOpen
                            ? "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0.5 after:w-2 after:h-2 after:rounded-full"
                            : " "
                        }
                        ${
                          active && isOpen
                            ? "text-text text-start font-bold"
                            : "text-start"
                        }
                      `;
                    }}
                  >
                    <span className="relative block overflow-hidden">
                      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full motion-reduce:transition-none">
                        {label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full motion-reduce:transition-none"
                      >
                        {label}
                      </span>
                    </span>
                  </NavLink>
                </li>
              );
            })}
            <li className="hidden sm:block">
              <LanguageToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
