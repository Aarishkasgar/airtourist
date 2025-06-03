import React from "react";

const TravelPoint = (props) => {
  return (
    <div className="point-boxes">
      <div className="point-box">
        <h1>{props.boxTitle}</h1>
        <p>{props.boxdesc}</p>
      </div>
    </div>
  );
};

export default TravelPoint;
