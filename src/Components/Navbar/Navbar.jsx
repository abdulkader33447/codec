import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  const links = [
    { name: "Home", path: "#hero" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Resume", path: "#resume" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Blog", path: "#blog" },
    { name: "Contact", path: "#contact" },
  ];

  // Sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);

      // detect visible section
      let current = "#hero";
      links.forEach((link) => {
        const section = document.querySelector(link.path);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            current = link.path;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section handler
  const handleScrollTo = (e, path) => {
    e.preventDefault();
    const target = document.querySelector(path);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(path);
    setOpen(false);
  };

  return (
    <nav
      className={`poppins w-full bg-[#333333] text-white z-50 
        sticky transition-all duration-700 ease-in-out
        ${isSticky ? "top-0 shadow-md shadow-[#474747]" : "top-[-80px]"}`}
    >
      <div className="max-w-[1320px] w-11/12 mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#hero" className="text-2xl font-bold">
            CodeC
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                onClick={(e) => handleScrollTo(e, link.path)}
                className={`flex items-center gap-2 transition-colors duration-200 cursor-pointer ${
                  activeSection === link.path
                    ? "text-[#FFBD39] font-semibold"
                    : "text-[#E1D0D0] hover:text-[#fff]"
                }`}
              >
                {link.name}
              </a>
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
        className={`md:hidden bg-[#333333] absolute top-full left-0 w-full transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                onClick={(e) => handleScrollTo(e, link.path)}
                className={`flex items-center gap-2 text-lg transition-colors duration-200 cursor-pointer ${
                  activeSection === link.path
                    ? "text-[#FFBD39] font-semibold"
                    : "text-[#E1D0D0] hover:text-[#fff]"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
