import { FaLaptopCode } from "react-icons/fa";
import {
  MdOutlineCampaign,
  MdOutlineColorLens,
  MdOutlineDesignServices,
} from "react-icons/md";
import { RiVipDiamondFill } from "react-icons/ri";
import { SiDatabricks } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  // scroll detection
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const services = [
    { icon: <FaLaptopCode />, title: "Web Design" },
    { icon: <SiDatabricks />, title: "Web Development" },
    { icon: <MdOutlineDesignServices />, title: "UI/UX Design" },
    { icon: <RiVipDiamondFill />, title: "App Design & Develop" },
    { icon: <MdOutlineColorLens />, title: "Graphic Design" },
    { icon: <MdOutlineCampaign />, title: "SEO Marketing" },
  ];

  return (
    <div className="bg-[#333333] py-12" ref={ref}>
      <div className="max-w-[1320px] w-11/12 mx-auto text-white">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#cccccc] text-2xl text-center font-semibold"
        >
          Our Services
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
          className="text-center text-[#cccccc]"
        >
          Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet.
          Vivamus sodales elementum pharetra. Cras dignissim justo <br /> eu
          accumsan vulputate.
        </motion.p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group flex flex-col items-center bg-[#262020] sm:px-8 px-6 sm:py-8 py-6 rounded-lg gap-4 mt-8 transform transition-all duration-300 hover:-translate-y-3 hover:shadow-lg"
            >
              <div className="p-4 bg-[#FFBD39] text-3xl text-white rounded-[40%_60%_70%_30%/30%_40%_60%_70%] transition-all duration-300">
                {service.icon}
              </div>

              <h2 className="text-xl font-bold text-white group-hover:text-[#FFBD39] transition-colors duration-300">
                {service.title}
              </h2>
              <p className="text-center text-[#cccccc] max-w-md">
                In nisi tortor, consequat eu semper ut, consequat in massa.
                Maecenas at odio a felis commodo pulvinar quis eu neque.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
