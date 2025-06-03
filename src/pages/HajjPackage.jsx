import React from "react";
import data from "../data";
import Tours from "../components/Tours";
import PackagesHero from "../components/PackagesHero";

const HajjPackage = () => {
  const tours = data;
  return (
    <div>
      <PackagesHero
        title="Hajj Packages"
        text="Our packages are designed to meet the needs of different types of
            travelers. Whether you're looking for a relaxing getaway or an
            action-packed adventure, we have a package that's right for you."
      />
      <div className="app">
        <Tours tours={tours} />
      </div>
    </div>
  );
};

export default HajjPackage;
