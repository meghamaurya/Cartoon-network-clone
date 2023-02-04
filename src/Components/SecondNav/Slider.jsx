import React, { useState, useRef } from "react";
import Images from "../JsonFiles/Images.json";
import "./Styles.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
const Slider = () => {
  const [clickCount, setClickCount] = useState(0);
  const mainWrap = useRef();
  const containerRef = useRef();

  const scrollSlides = (direction) => {
    const width = mainWrap.current?.clientWidth;
    let scrollTo;

    const diff = direction === "next" ? 1 : -1;
    const newValue = (clickCount + diff) % (Images.length / 4);
    setClickCount(newValue);
    scrollTo = width * newValue;
    console.log(scrollTo, "scrollto");

    containerRef.current?.scrollTo({
      behavior: "smooth",
      left: scrollTo,
    });
  };
  return (
    <div ref={mainWrap} className="secondNavContainer">
      <button
        onClick={() => scrollSlides("prev")}
        className="slideBtn"
        style={{ boxShadow: "3px 0px 6px rgba(0, 0, 0, 0.2)" }}
      >
        <MdArrowBackIos />
      </button>
      <div className="slider" ref={containerRef}>
        {Images.map((img) => {
          return (
            <div
              key={img.id}
              className="secondNavImg"
              style={{ backgroundColor: `${img.bgColor}` }}
            >
              <img
                src={img.iconUrl}
                alt={img.title}
                // width="45px"
                className="imgComponent"
              />
            </div>
          );
        })}
      </div>
      <button
        onClick={() => scrollSlides("next")}
        className="slideBtn"
        style={{ boxShadow: "-3px 0px 6px rgba(0, 0, 0, 0.2)" }}
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};
export default Slider;
