import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { IoLogoInstagram } from "react-icons/io";
import DirectionHoverButton from "../../../Components/DirectionHoverBtn/DirectionHoverBtn";
import { motion } from "framer-motion";

const About = () => {
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="bg-[#312F2F] py-12">
      <div className="max-w-[1320px] w-11/12 mx-auto text-white">
        <div className="grid md:grid-cols-2 items-center gap-8">

          {/* Text Section */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 50 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-[#FFBD39] text-2xl font-bold">About Me</h3>
            <h2 className="text-4xl font-bold my-4 text-[#cccccc]">
              Hello! I'm <span className="text-[#FFBD39]">David Andrew.</span>{" "}
              I'm Professional Web Designer & Wordpress Developer &{" "}
              <span className="text-[#FFBD39]">Freelancer.</span>
            </h2>
            <p className="text-[#cccccc]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              consectetur ut lorem vitae ultricies. Integer porta, libero sit
              amet pretium lobortis, tortor mauris eleifend urna, ut laoreet
              velit nisi scelerisque ex. Fusce vel pulvinar ligula. Etiam eget
              dolor leo. Phasellus eu dolor cursus, sodales nunc at, tempor
              turpis
              <br />
              <br />
              Morbi ac ante neque. In porttitor imperdiet blandit. Aliquam
              laoreet rutrum mattis. Pellentesque id ligula et purus tincidunt
              tempus a nec purus
            </p>

            {/* Social Icons */}
            <h1 className="flex items-center gap-3 my-3">
              <span className="font-semibold">Follow Me :</span>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF className="p-[10px] size-10 text-white bg-[#163D4D] rounded-full cursor-pointer hover:bg-[#1B7599] transition-all duration-300" />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="p-[10px] size-10 text-white bg-[#163D4D] rounded-full cursor-pointer hover:bg-[#1B7599] transition-all duration-300" />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <IoLogoInstagram className="p-[10px] size-10 text-white bg-[#163D4D] rounded-full cursor-pointer hover:bg-[#1B7599] transition-all duration-300" />
              </a>

              <a
                href="https://davidandrew.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
              >
                <GoGlobe className="p-[10px] size-10 text-white bg-[#163D4D] rounded-full cursor-pointer hover:bg-[#1B7599] transition-all duration-300" />
              </a>
            </h1>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <DirectionHoverButton bgColor="#7B68EE">
                <span className="text">My Work</span>
              </DirectionHoverButton>
              <DirectionHoverButton bgColor="#FFBD39">
                <span className="text">Download CV</span>
              </DirectionHoverButton>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 sm:gap-8 gap-4 text-center"
          >
            {/* Happy Clients */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#3E3C3C] sm:py-10 py-6 rounded"
            >
              <h1 className="sm:text-4xl text-3xl font-bold">
                {statsInView && <CountUp end={599} duration={5} />}
              </h1>
              <p className="text-[#cccccc]">Happy Clients</p>
            </motion.div>

            {/* Sales */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#3E3C3C] sm:py-10 py-6 rounded"
            >
              <h1 className="sm:text-4xl text-3xl font-bold">
                {statsInView && <CountUp end={2001} duration={5} />}
              </h1>
              <p className="text-[#cccccc]">Sales</p>
            </motion.div>

            {/* Projects Complete */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#3E3C3C] sm:py-10 py-6 rounded"
            >
              <h1 className="sm:text-4xl text-3xl font-bold">
                {statsInView && <CountUp end={5000} duration={5} />}
              </h1>
              <p className="text-[#cccccc]">Projects Complete</p>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-[#3E3C3C] sm:py-10 py-6 rounded"
            >
              <h1 className="sm:text-4xl text-3xl font-bold">
                {statsInView && <CountUp end={6} duration={5} />}
              </h1>
              <p className="text-[#cccccc]">Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
