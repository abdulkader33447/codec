import { motion } from "framer-motion";

const Resume = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#312F2F] py-12">
      <div className="max-w-[1320px] w-11/12 mx-auto text-[#cccccc]">
        <motion.h1
          className="text-2xl text-center font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Resume
        </motion.h1>
        <div className="relative border-b-2 border-[#FFBD39] w-26 mx-auto my-3 origin-center">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-[3px] border-[#FFBD39] p-1 rounded-full"></span>
        </div>
        <motion.p
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
