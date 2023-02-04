import React from "react";
import DCImg from "../DetailCard/DCImg";
import DCText from "../DetailCard/DCText";
import "./Styles.css";

const DetailCard = ({ img, title1, para1, bgColor }) => {
  return (
    <div className="dcContainer" style={{ backgroundColor: `${bgColor}` }}>
      <div className="dcCard">
        <div className="dc1">
          <DCImg Img={img} />
        </div>
        <div className="dc2">
          <DCText title1={title1} para={para1} />
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
