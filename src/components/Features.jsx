import React from "react";

const Features = (props) => {
  return (
    <div className="features-boxes">
      <div className="feature-box">
        <div className="iconDiv">
          <span>
            <img src={props.locationIcon} alt="" height={70} />
          </span>
        </div>
        <div className="iconRight">
          <h3>{props.serviceTitle}</h3>
          <p>{props.servicePara}</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
