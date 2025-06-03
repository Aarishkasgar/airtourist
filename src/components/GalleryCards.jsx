import React from "react";
import GalleryCard from "./GalleryCard";
import "../components/Gallery.css";

const GalleryCards = (props) => {
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-cards">
          {props.galleryData.map((tour) => {
            return <GalleryCard {...tour} key={tour.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default GalleryCards;
