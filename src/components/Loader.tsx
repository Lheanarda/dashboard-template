import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loader;
