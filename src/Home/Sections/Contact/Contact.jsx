import { useState } from "react";
import DirectionHoverButton from "../../../Components/DirectionHoverBtn/DirectionHoverBtn";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    <div className="bg-[#312F2F] py-12">
      <div className="max-w-[1320px] w-11/12 mx-auto text-[#cccccc] relative">
        {/* Header */}
        <h1 className="text-2xl text-center font-semibold">Contact Me</h1>

        <div className="relative border-b-2 border-[#FFBD39] w-26 mx-auto my-3 origin-center">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-[3px] border-[#FFBD39] p-1 rounded-full"></span>
        </div>

        <p className="text-center mb-8">
          Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet.
          Vivamus sodales elementum pharetra. Cras dignissim justo <br /> eu
          accumsan vulputate.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-[1000px] mx-auto mt-12">
          <div className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
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

              {/* Email Input */}
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

            {/* Subject Input */}
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

            {/* Message Textarea */}
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

            {/* Submit Button */}
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
