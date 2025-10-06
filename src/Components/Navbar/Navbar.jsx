import { useState } from "react";
import { NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="poppins fixed top-0 left-0 w-full bg-[#333333] text-white z-50">
        <div className="max-w-[1320px] w-11/12 mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="text-2xl font-bold">CodeC</a>
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
                  {link.icon}
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden bg-[#333333] transition-all duration-300 overflow-hidden ${
            open ? "max-h-96" : "max-h-0"
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
                        ? "text-[#fff] border-[#E1D0D0]"
                        : "text-[#E1D0D0] hover:text-[#fff]"
                    }`
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ✅ Content Padding so navbar doesn't cover top content */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
