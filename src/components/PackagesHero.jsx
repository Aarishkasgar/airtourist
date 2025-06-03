import React from "react";
import "../components/PackagesHero.css";

const PackagesHero = (props) => {
  return (
    <div>
      <div className="PkgHero-container">
        <div className="PkgHero-content">
          <h1 className="PkgHero-title">{props.title}</h1>
          <p className="PkgHero-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default PackagesHero;
