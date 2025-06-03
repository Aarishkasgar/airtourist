import React from "react";
import AboutUsImage01 from "../assets/AboutUsImage01.png";

const AboutUsCards = (props) => {
  return (
    <>
      <div className="AboutusCards-container">
        <div className="AboutusCards-inner-container">
          <div className="Aboutus-left">
            <img src={AboutUsImage01} alt="" />
          </div>
          <div className="Aboutus-right">
            <h1>{props.name}</h1>
            <p className="destination">{props.destination}</p>
            <p className="destination-desc">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsCards;
