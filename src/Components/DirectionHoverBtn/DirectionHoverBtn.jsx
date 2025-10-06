import { useState } from "react";
import PropTypes from "prop-types";
import "./DirectionHoverButton.css";

const DirectionHoverButton = ({
  children,
  onClick,
  bgColor = "#333",
  hoverColor = "#555",
  textColor = "#fff", //
}) => {
  const [hoverDirection, setHoverDirection] = useState("");

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;

    // 🔹 changed — detect entry direction (top/right/bottom/left)
    const top = y;
    const bottom = h - y;
    const left = x;
    const right = w - x;

    const min = Math.min(top, bottom, left, right);
    if (min === top) setHoverDirection("top");
    else if (min === bottom) setHoverDirection("bottom");
    else if (min === left) setHoverDirection("left");
    else setHoverDirection("right");
  };

  const handleMouseLeave = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;

    // 🔹 changed — detect exit direction as well
    const top = y;
    const bottom = h - y;
    const left = x;
    const right = w - x;

    const min = Math.min(top, bottom, left, right);
    if (min === top) setHoverDirection("leave-top");
    else if (min === bottom) setHoverDirection("leave-bottom");
    else if (min === left) setHoverDirection("leave-left");
    else setHoverDirection("leave-right");

    // reset after animation
    setTimeout(() => setHoverDirection(""), 400);
  };

  return (
    <button
      className={`direction-btn ${hoverDirection}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
      <span className="hover-bg" style={{ backgroundColor: hoverColor }}></span>
    </button>
  );
};

DirectionHoverButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  hoverColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default DirectionHoverButton;
