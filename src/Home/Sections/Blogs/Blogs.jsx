import { FaArrowRightLong } from "react-icons/fa6";
import blogOne from "../../../assets/blog1 1.png";
import blogTwo from "../../../assets/blog2 1.png";
import blogThree from "../../../assets/blog3 1.png";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Blogs = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  // scroll detection for header animation
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const blogs = [
    {
      image: blogOne,
      alt: "red sweater woman",
      date: "8",
      month: "Feb",
      title: "Sapien in Purus",
      author: "Admin",
      comments: "2 Comments",
      category: "Design",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      image: blogTwo,
      alt: "laptop on desk",
      date: "8",
      month: "Feb",
      title: "Data Science and Software",
      author: "Admin",
      comments: "2 Comments",
      category: "Design",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      image: blogThree,
      alt: "workspace setup",
      date: "8",
      month: "Feb",
      title: "Social Science & Humanities",
      author: "Admin",
      comments: "2 Comments",
      category: "Design",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [visibleCards]);

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
          Our Latest Blog
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

        {/* Blog Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`group transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative overflow-hidden">
                <span
                  className={`absolute bg-[#FFBD39] text-white px-4 py-1 top-4 left-4 text-center z-10 transition-all duration-500 ${
                    visibleCards.includes(index)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  {blog.date} <br /> {blog.month}
                </span>
                <img
                  src={blog.image}
                  alt={blog.alt}
                  className="w-full transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>

              <div className="shadow-[0_4px_8px_#474747] p-6 transition-shadow duration-300 group-hover:shadow-[0_8px_16px_#474747]">
                <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[#FFBD39]">
                  {blog.title}
                </h3>
                <p className="my-3">
                  by {blog.author} / {blog.comments} / {blog.category}
                </p>
                <p>{blog.description}</p>
                <Link className="flex items-center mt-2 gap-2 font-semibold transition-all duration-300 group-hover:gap-4 group-hover:text-[#FFBD39]">
                  <span>Read More</span>
                  <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
