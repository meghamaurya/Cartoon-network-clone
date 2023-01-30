import React, { useRef, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "./Styles.css";

const Carousal = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);
  const mainWrap = useRef();
  const containerRef = useRef();
  let CardDetail = children.props.CardDetail;
  let Children = children.type;

  const scrollSlides = (direction) => {
    const width = mainWrap.current?.clientWidth;
    let scrollTo;
    const diff = direction === "next" ? 1 : -1;
    let newValue = (clickCount + diff) % (CardDetail.length / 3);
    console.log(newValue, "newValue");
    if (newValue < 0) newValue = CardDetail.length - 1;
    if (newValue >= CardDetail.length) newValue = 0;
    setClickCount(newValue);
    scrollTo = width * newValue;
    console.log(scrollTo, "scrollto");
    containerRef.current?.scrollTo({
      behavior: "smooth",
      left: scrollTo,
    });
  };
  return (
    <section ref={mainWrap} className="carousal">
      <button onClick={() => scrollSlides("prev")} className="slideBtn1 btn">
        <MdArrowBackIos />
      </button>
      <div ref={containerRef} className="cardContainer">
        <Children CardDetail={CardDetail} />
      </div>
      <button onClick={() => scrollSlides("next")} className="slideBtn2 btn">
        <MdArrowForwardIos />
      </button>
    </section>
  );
};
export default Carousal;
