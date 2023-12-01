import React from "react";
import ScrollToTop from "react-scroll-to-top";
const TopButton = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        className="top-button"
        top="500"
        color="white"
        style={{ marginBottom: "5rem" }}
      />
    </div>
  );
};

export default TopButton;
