import React from "react";

const Bar: React.FC<{ animationDuration: number; progress: number }> = ({
  animationDuration,
  progress,
}) => (
  <div
    style={{
      height: 3,
      left: 0,
      marginLeft: `${(-1 + progress) * 100}%`,
      position: "fixed",
      top: 0,
      transition: `margin-left ${animationDuration}ms linear`,
      width: "100%",
      zIndex: 1031,
    }}
    className="bg-primary"
  >
    <div
      style={{
        boxShadow: "0 0 10px #04ac4d, 0 0 5px #04ac4d",
        display: "block",
        height: "100%",
        opacity: 1,
        position: "absolute",
        right: 0,
        transform: "rotate(3deg) translate(0px, -4px)",
        width: 100,
      }}
    />
  </div>
);

export default Bar;
