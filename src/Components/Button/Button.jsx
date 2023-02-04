import React from "react";
import { ImArrowRight2 } from "react-icons/im";

import "./Styles.css";

const Button = ({ Icon, title, bgColor, width }) => {
  //   console.log(props.bgClr, "btn");
  return (
    <div
      className="btnContainer"
      style={{ backgroundColor: `${bgColor}`, width: `${width}` }}
    >
      {Icon ? <Icon className="gameremote" /> : ""}
      <h1 className="gameTitle">{title}</h1>
      <ImArrowRight2 className="arrow" />
    </div>
  );
};

export default Button;
