import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "profile", label: "Profile" },
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
      <div className="flex justify-between items-center py-5 md:py-3 px-8 sm:px-[10vw]">
        <Link to="/" className="text-xl font-bold">
          <img src="logo.svg" alt="logo" className="w-7 h-7 object-contain" />
        </Link>
        <button
          onClick={toggleMenu}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

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
          <ul className="flex flex-col sm:flex-row sm:space-x-10 sm:space-y-0 sm:py-0 justify-end">
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
                        transition-all duration-600 decoration-[1.4px] hover:text-primary space-y-4 text-sm sm:text-base block py-3 tracking-wide w-12
                        ${
                          active && !isOpen
                            ? "underline decoration-primary underline-offset-4"
                            : "sm:decoration-transparent text-gray-600 text-sm font-light"
                        }
                        ${
                          active && isOpen
                            ? "text-primary text-start"
                            : "text-start"
                        }
                      `;
                    }}
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
