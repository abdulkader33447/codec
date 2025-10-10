import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion"; // Added
import { useInView } from "react-intersection-observer"; // Added
import client1 from "../../../assets/avatar1.webp";
import client2 from "../../../assets/avatar2.webp";
import client3 from "../../../assets/avatar3.webp";

const testimonials = [
  {
    id: 1,
    name: "hasin hayder",
    source: "Fiverr",
    review: "Lorem ipsum...",
    image: client1,
    rating: 5,
  },
  {
    id: 2,
    name: "Johnny Depp",
    source: "Themeforest",
    review: "Lorem ipsum...",
    image: client2,
    rating: 4,
  },
  {
    id: 3,
    name: "Jane Doe",
    source: "Upwork",
    review: "Lorem ipsum...",
    image: client3,
    rating: 5,
  },
  {
    id: 4,
    name: "Alex Smith",
    source: "Freelancer",
    review: "Lorem ipsum...",
    image: client2,
    rating: 4,
  },
];

const TestimonialCard = ({ testimonial }) => {
  const cardBgColor = "bg-[#1C7A70]";
  const renderStars = (rating) =>
    Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-[#FFBD39]" : "text-[#ffffff4d]"
          }`}
        />
      ));

  return (
    <div className="relative pt-10 pb-20 px-4">
      <div
        className={`relative p-6 rounded-lg ${cardBgColor} text-[#cccccc] mb-8`}
      >
        <h3 className="text-xl font-bold capitalize text-white">
          {testimonial.name}
        </h3>
        <p className="text-sm font-light mb-4">{testimonial.source}</p>
        <p className="mb-4">{testimonial.review}</p>
        <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
      </div>
      <div className="flex justify-start items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full object-cover absolute bottom-0 left-10"
        />
      </div>
    </div>
  );
};

const Feedback = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="bg-[#312F2F] py-20" ref={ref}>
      <div className="max-w-[1320px] w-11/12 mx-auto text-[#cccccc] relative">
        {/* Animated Header */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl text-center font-semibold"
        >
          Our Client Feedback
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

        {/* Swiper Slider */}
        <div className="relative mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 2, spaceBetween: 50 },
            }}
            className="mySwiper pt-8"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-10 pointer-events-none">
            <button className="swiper-button-prev-custom pointer-events-auto bg-[#FFBD39] p-3 rounded-full hover:bg-[#d49e30] transition duration-200">
              <FaArrowLeft className="text-[#312F2F]" />
            </button>
            <button className="swiper-button-next-custom pointer-events-auto bg-[#FFBD39] p-3 rounded-full hover:bg-[#d49e30] transition duration-200">
              <FaArrowRight className="text-[#312F2F]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
