import { FaArrowRightLong } from "react-icons/fa6";
import blogOne from "../../../assets/blog1 1.png";
import blogTwo from "../../../assets/blog2 1.png";
import blogThree from "../../../assets/blog3 1.png";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";

const Blogs = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

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
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
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
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
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
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    }
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
        rootMargin: "0px 0px -50px 0px"
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
    <div className="bg-[#333333] py-12">
      <div className="max-w-[1320px] w-11/12 mx-auto text-[#cccccc]">
        {/* Animated Title */}
        <h1 className="text-2xl text-center font-semibold animate-fade-in-down">
          Our Latest Blog
        </h1>
        
        {/* Animated Divider */}
        <div className="relative border-b-2 border-[#FFBD39] w-26 mx-auto my-3 origin-center animate-scale-in">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-[3px] border-[#FFBD39] p-1 rounded-full animate-pulse-slow"></span>
        </div>
        
        <p className="text-center mb-8 animate-fade-in">
          Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet.
          Vivamus sodales elementum pharetra. Cras dignissim justo <br /> eu
          accumsan vulputate.
        </p>

        {/* Blog Cards Container */}
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
              {/* Image Container with Overflow Hidden */}
              <div className="relative overflow-hidden">
                <span className={`absolute bg-[#FFBD39] text-white px-4 py-1 top-4 left-4 text-center z-10 transition-all duration-500 ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}>
                  {blog.date} <br /> {blog.month}
                </span>
                
                {/* Image */}
                <img 
                  src={blog.image} 
                  alt={blog.alt}
                  className="w-full transition-transform duration-500 ease-out group-hover:scale-110"
                />
                
                {/* Black Overlay on Hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              
              {/* Content Card */}
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

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out 0.3s both;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out 0.2s both;
        }

        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Blogs;