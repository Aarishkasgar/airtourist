import React, { useRef, useState } from "react";
import "../components/TopCards.css";
// import data from "./utils/data";
import data from "../topData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ITEM_WIDTH = 800;

function TopCards({ id, image, info, price, name }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  // Function to handle scrolling when the button is clicked
  const handleScroll = (scrollAmount) => {
    // Calculate the new scroll position
    const newScrollPosition = scrollPosition + scrollAmount;

    // Update the state with the new scroll position
    setScrollPosition(newScrollPosition);

    // Access the container element and set its scrollLeft property
    containerRef.current.scrollLeft = newScrollPosition;
  };

  // const [readmore, setReadMore] = useState(false);
  // const description = readmore ? info : `${info.substring(0, 200)}....`;

  // function readmoreHandler() {
  //   setReadMore(!readmore);
  // }

  return (
    <div className="top-container">
      <div
        ref={containerRef}
        style={{
          width: "900px",
          overflowX: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        <div className="content-box">
          {data.map((item) => (
            <div className="top-card">
              <img src={item.image} className="top-image" alt="img" />
              <div className="tourInfo">
                <div className="tourDetails">
                  <h4 className="tourPrice">{item.price}</h4>
                  <h4 className="tourName">{item.name}</h4>
                </div>
                <div className="description">
                  {item.info}
                  {/* <span className="readMore" onClick={readmoreHandler}>
                    {readmore ? `show less` : `read more`}
                  </span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="action-btns">
        <button onClick={() => handleScroll(-ITEM_WIDTH)}>
          <ArrowBackIcon />
        </button>
        <button onClick={() => handleScroll(ITEM_WIDTH)}>
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}

export default TopCards;
