import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "profile", label: "Profile" },
  ];

  return (
    <header className="flex justify-between items-center py-6 px-[5vw] sm:px-[10vw] mb-[5vw]">
      <Link to="/" className="text-xl font-bold">
        LOGO
      </Link>
      <nav>
        <ul className="flex sm:space-x-10 space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-all duration-600 font-light underline-offset-8 decoration-[1.4px] underline hover:text-primary
                  ${isActive ? "decoration-primary" : "decoration-transparent"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
