import { FaChevronUp } from "react-icons/fa";

const FloatingBtn = () => {
  return (
    <div>
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#top")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="fixed bottom-8 right-8 bg-[#71444B] p-4 shadow-lg hover:bg-[#71444B]/70 transition-colors duration-300 z-50"
      >
        <FaChevronUp className="text-white" />
      </a>
    </div>
  );
};

export default FloatingBtn;
