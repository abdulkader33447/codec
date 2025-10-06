import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`poppins w-full bg-[#333333] text-white z-50 
        sticky transition-all duration-700 ease-in-out
        ${isSticky ? "top-0 shadow-md shadow-[#474747]" : "top-[-80px]"}`}
    >
      <div className="max-w-[1320px] w-11/12 mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl font-bold">
            CodeC
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 transition-colors duration-200 ${
                    isActive
                      ? "text-[#fff] border-[#E1D0D0]"
                      : "text-[#E1D0D0] hover:text-[#fff]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="navbar-hamburger-btn md:hidden text-4xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`mobile-menu md:hidden bg-[#333333] absolute top-full left-0 w-full transition-max-height duration-300 ease-in-out overflow-hidden ${
          open ? "open" : "closed"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-lg ${
                    isActive
                      ? "text-[#ffffff] border-[#E1D0D0]"
                      : "text-[#E1D0D0] hover:text-[#ffffff]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
