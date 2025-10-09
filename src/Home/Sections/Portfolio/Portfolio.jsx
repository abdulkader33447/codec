import { useState, useEffect } from "react";
import { Link } from "react-router";
import { FaLink, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import imagOne from "../../../assets/item1 1.png";
import imagTwo from "../../../assets/item2 1.png";
import imagThree from "../../../assets/item3 1.png";
import imagFour from "../../../assets/item4 1.png";
import imagFive from "../../../assets/item5 1.png";
import imagSix from "../../../assets/item6 1.png";
// ----------------------------------------------------------------

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [displayedImages, setDisplayedImages] = useState([]);
  const [fade, setFade] = useState(false);

  // scroll detection
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const links = [
    { name: "All", path: "/" },
    { name: "Web", path: "/web" },
    { name: "App", path: "/app" },
    { name: "Card", path: "/card" },
  ];

  const portfolioImages = [
    { src: imagOne, alt: "desktop table imag", category: "App" },
    { src: imagTwo, alt: "laptop woman imag", category: "App" },
    { src: imagThree, alt: "laptop niger woman imag", category: "Web" },
    { src: imagFour, alt: "laptop table man imag", category: "Web" },
    { src: imagFive, alt: "laptop table imag", category: "Card" },
    {
      src: imagSix,
      alt: "laptop-table mouse note book imag",
      category: "Card",
    },
  ];

  // Smooth transition logic
  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => {
      const filtered =
        activeCategory === "All"
          ? portfolioImages
          : portfolioImages.filter((item) => item.category === activeCategory);
      setDisplayedImages(filtered);
      setFade(false);
    }, 300); // fade duration

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <div className="bg-[#333333] py-20" ref={ref}>
      <div className="max-w-[1320px] w-11/12 mx-auto text-[#cccccc]">
        {/* header animation same as Services */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl text-center font-semibold"
        >
          Our Portfolio
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative border-b-2 border-[#FFBD39] w-26 mx-auto my-3 origin-center"
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-[3px] border-[#FFBD39] p-1 rounded-full"></span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-8"
        >
          Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet.
          Vivamus sodales elementum pharetra. Cras dignissim justo <br /> eu
          accumsan vulputate.
        </motion.p>

        {/* links */}
        <div className="flex justify-center gap-6 mb-8 text-[#FFBD39]">
          {links.map((link) => (
            <Link
              key={link.name}
              onClick={() => setActiveCategory(link.name)}
              className={`flex items-center gap-2 transition-colors duration-200 ${
                activeCategory === link.name
                  ? "text-[#FFBD39]"
                  : "text-[#cccccc]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* cards grid */}
        <div
          className={`grid lg:grid-cols-3 md:grid-cols-2 gap-11 transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {displayedImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden transition-opacity duration-700 opacity-100"
            >
              {/* image */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto block"
              />

              {/* (Top Overlay) */}
              <div className="absolute top-0 left-1/2 w-full h-0 bg-[#4EAD5D] transition-all duration-500 group-hover:h-2/2 opacity-90"></div>

              {/* (Bottom Overlay) */}
              <div className="absolute bottom-0 right-1/2 w-full h-0 bg-[#4EAD5D] transition-all duration-500 group-hover:h-2/2 opacity-90"></div>

              {/* icons on hover */}
              <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div>
                  <FaSearch className="bg-white size-8 text-[#4EAD5D] px-2 py-1 rounded-full cursor-pointer" />
                </div>
                <div>
                  <FaLink className="bg-white size-8 text-[#4EAD5D] px-2 py-1 rounded-full cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
