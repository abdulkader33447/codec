import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Resume = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // scroll detection
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="bg-[#312F2F] py-20" ref={ref}>
      <div className="max-w-[1320px] w-11/12 mx-auto text-[#cccccc]">
        {/* animated header */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl text-center font-semibold"
        >
          Our Resume
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

        {/* education section */}
        <div>
          <h2 className="text-center text-2xl font-semibold my-9 text-white">
            My Education
          </h2>

          <motion.div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* one */}
            <motion.div
              className="shadow-[0_4px_8px_#474747] p-8 mb-8 rounded space-y-3"
              variants={itemVariants}
            >
              <p className="text-white bg-[#FFBD39] p-1 rounded-full w-32 text-center">
                2001-2005
              </p>
              <div>
                <h1 className="text-xl font-bold">Computer Science</h1>
                <h3>International University</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                consectetur ut lorem vitae ultricies. Integer porta, libero sit
                amet pretium lobortis
              </p>
            </motion.div>

            {/* two */}
            <motion.div
              className="shadow-[0_4px_8px_#474747] p-8 mb-8 rounded space-y-3"
              variants={itemVariants}
            >
              <p className="text-white bg-[#FFBD39] p-1 rounded-full w-32 text-center">
                2006-2010
              </p>
              <div>
                <h1 className="text-xl font-bold">Bachelor Degree</h1>
                <h3>International University</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                consectetur ut lorem vitae ultricies. Integer porta, libero sit
                amet pretium lobortis
              </p>
            </motion.div>

            {/* three */}
            <motion.div
              className="shadow-[0_4px_8px_#474747] p-8 mb-8 rounded space-y-3"
              variants={itemVariants}
            >
              <p className="text-white bg-[#FFBD39] p-1 rounded-full w-32 text-center">
                2011-2015
              </p>
              <div>
                <h1 className="text-xl font-bold">Master Degree</h1>
                <h3>International University</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                consectetur ut lorem vitae ultricies. Integer porta, libero sit
                amet pretium lobortis
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* experience section */}
        <div>
          <h1 className="text-center text-2xl font-semibold my-9 text-white">
            My Experience
          </h1>

          <motion.div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* one */}
            <motion.div
              className="shadow-[0_4px_8px_#474747] p-8 mb-8 rounded space-y-3"
              variants={itemVariants}
            >
              <p className="text-white bg-[#FFBD39] p-1 rounded-full w-32 text-center">
                2016-2017
              </p>
              <div>
                <h1 className="text-xl font-bold">Jr. UI UX Designer</h1>
                <h3>Themeforest</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                consectetur ut lorem vitae ultricies. Integer porta, libero sit
                amet pretium lobortis
              </p>
            </motion.div>

            {/* two */}
            <motion.div
              className="shadow-[0_4px_8px_#474747] p-8 mb-8 rounded space-y-3"
              variants={itemVariants}
            >
              <p className="text-white bg-[#FFBD39] p-1 rounded-full w-32 text-center">
                2018-2019
              </p>
              <div>
                <h1 className="text-xl font-bold">Web Designer</h1>
                <h3>Themeforest</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                consectetur ut lorem vitae ultricies. Integer porta, libero sit
                amet pretium lobortis
              </p>
            </motion.div>

            {/* three */}
            <motion.div
              className="shadow-[0_4px_8px_#474747] p-8 mb-8 rounded space-y-3"
              variants={itemVariants}
            >
              <p className="text-white bg-[#FFBD39] p-1 rounded-full w-32 text-center">
                2020-Present
              </p>
              <div>
                <h1 className="text-xl font-bold">Web Developer</h1>
                <h3>Themeforest</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                consectetur ut lorem vitae ultricies. Integer porta, libero sit
                amet pretium lobortis
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
