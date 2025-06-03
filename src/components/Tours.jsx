import React from "react";
import Card from "./Card";
import "../components/Tours.css";

const Tours = (props) => {
  return (
    <div className="container">
      <div className="cards">
        {props.tours.map((tour) => {
          return <Card {...tour} key={tour.id} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
