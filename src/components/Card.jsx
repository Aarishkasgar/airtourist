import React, { useState } from "react";
import "../components/Card.css";

const Card = ({ id, image, info, price, name }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} className="image" alt="img" />
      </div>
      <div className="tourInfo">
        <div className="tourDetails">
          <h4 className="tourPrice">{price}</h4>
          <h4 className="tourName">{name}</h4>
        </div>
        <div className="description">{info}</div>
      </div>
    </div>
  );
};

export default Card;
