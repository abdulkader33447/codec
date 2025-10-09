import { useState } from "react";
import DirectionHoverButton from "../../../Components/DirectionHoverBtn/DirectionHoverBtn";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // scroll detection
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "So far this is a dummy form.",
      showConfirmButton: false,
      timer: 3500,
    });
  };

  return (
    <div className="bg-[#312F2F] py-20" ref={ref}>
      <div className="max-w-[1320px] w-11/12 mx-auto text-[#cccccc] relative">
        {/* Header with Animation (same as Services) */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl text-center font-semibold"
        >
          Contact Me
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

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-[1000px] mx-auto mt-12">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border border-gray-600 text-gray-400 px-6 py-4 focus:outline-none focus:border-[#FFBD39] transition-colors duration-300 placeholder:text-gray-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-transparent border border-gray-600 text-gray-400 px-6 py-4 focus:outline-none focus:border-[#FFBD39] transition-colors duration-300 placeholder:text-gray-500"
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Your Subject"
                required
                className="w-full bg-transparent border border-gray-600 text-gray-400 px-6 py-4 focus:outline-none focus:border-[#FFBD39] transition-colors duration-300 placeholder:text-gray-500"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                required
                className="w-full bg-transparent border border-gray-600 text-gray-400 px-6 py-4 focus:outline-none focus:border-[#FFBD39] transition-colors duration-300 placeholder:text-gray-500 resize-none"
              ></textarea>
            </div>

            <div>
              <DirectionHoverButton bgColor="#7B68EE" type="submit">
                <span className="text">SUBMIT</span>
              </DirectionHoverButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
