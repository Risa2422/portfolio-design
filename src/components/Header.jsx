import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "profile", label: "Profile" },
  ];

  return (
    <header className="flex justify-between items-center py-6 px-[5vw] sm:px-[10vw] mb-[1vw]">
      <Link to="/" className="text-xl font-bold">
        LOGO
      </Link>
      <nav>
        <ul className="flex sm:space-x-10 space-x-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => {
                const isWorkPath = location.pathname.startsWith("/works");
                const active = isActive || (to === "/" && isWorkPath);

                return `transition-all duration-600 font-light underline-offset-8 decoration-[1.4px] underline hover:text-primary ${
                  active ? "decoration-primary" : "decoration-transparent"
                }`;
              }}
            >
              {label}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
