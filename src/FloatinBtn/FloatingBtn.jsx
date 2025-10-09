import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const FloatingBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("#hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        // যদি স্ক্রল Hero এর নিচে নেমে যায় তাহলে দেখাবে
        setVisible(window.scrollY > heroBottom - 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null; // visible না হলে কিছুই render হবে না

  return (
    <a
      href="#top"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="fixed bottom-8 right-8 bg-[#71444B] p-4 shadow-lg hover:bg-[#71444B]/70 transition-colors duration-300 z-50"
    >
      <FaChevronUp className="text-white text-lg" />
    </a>
  );
};

export default FloatingBtn;
