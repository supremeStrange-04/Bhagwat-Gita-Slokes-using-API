import "../styles/Button.css";
import React from "react";

const Button = ({ onClick, cursor }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // This makes the scrolling smooth
    });
  };
  return (
    <button className={`button ${cursor}`} onClick={() => { onClick(); scrollToTop(); }}>
      <span> Generate New </span>
    </button>
  );
};

export default Button;
