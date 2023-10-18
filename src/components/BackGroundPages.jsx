import React from "react";

const BackGroundPages = ({ title, image }) => {
  return (
    <div
      className="Aboutus"
      style={{ backgroundImage: `url("/assets/${image}.jpg")` }}
    >
        <div className="overlay"></div>
      <h1 className="texte">{title}</h1>
    </div>
  );
};

export default BackGroundPages;
