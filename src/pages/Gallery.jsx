import React from "react";
import data from "../galleryData";
import GalleryCards from "../components/GalleryCards";
import PackagesHero from "../components/PackagesHero";

const Gallery = () => {
  const galleryData = data;
  return (
    <div>
      <PackagesHero
        title="AirTourist Gallery"
        text="Our packages are designed to meet the needs of different types of
            travelers. Whether you're looking for a relaxing getaway or an
            action-packed adventure, we have a package that's right for you."
      />
      <div className="app">
        <GalleryCards galleryData={galleryData} />
      </div>
    </div>
  );
};

export default Gallery;
