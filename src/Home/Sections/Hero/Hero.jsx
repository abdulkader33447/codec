import { motion } from "framer-motion";
import image from "../../../assets/hero 1.png";
import DirectionHoverButton from "../../../Components/DirectionHoverBtn/DirectionHoverBtn";
import Swal from "sweetalert2";

const Hero = () => {
  const hireMe = () => {
    Swal.fire({
      title: "This is just a demo website!",
      icon: "success",
      timer: 3500,
    });
  };

  const cv = () => {
    Swal.fire({
      title: "This is just a demo website!",
      icon: "success",
      timer: 3500,
    });
  };
  return (
    <div className="bg-[#333333] pt-10">
      <div className="max-w-[1320px] w-11/12 mx-auto min-h-screen text-white">
        <div className="grid md:grid-cols-2 items-center gap-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-[#FFBD39] text-2xl font-semibold">Hello !</h3>
            <h1 className="text-4xl font-bold my-4">
              I'm Professional Web Designer & <br />{" "}
              <span className="text-[#FFBD39]">Wordpress Developer</span>
            </h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <div className="flex gap-4 mt-6">
              <DirectionHoverButton bgColor="#7B68EE" onClick={hireMe}>
                <span className="text">Hire me</span>
              </DirectionHoverButton>

              <DirectionHoverButton bgColor="#FFBD39" onClick={cv}>
                <span className="text">Download CV</span>
              </DirectionHoverButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <img src={image} alt="hero image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
