import React, { ReactNode } from "react";

const Container: React.FC<{
  animationDuration: number;
  isFinished: boolean;
  children: ReactNode;
}> = ({ animationDuration, children, isFinished }) => (
  <div
    style={{
      opacity: isFinished ? 0 : 1,
      pointerEvents: "none",
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
);

export default Container;
