import React from "react";
import Button from "../Button/Button";
import "./Styles.css";

const DCText = ({ title1, para }) => {
  return (
    <>
      <div className="dcText">
        <div className="textContent">
          <h2 className="dcTitle">{title1}</h2>
          <p className="dcPara">{para}</p>
        </div>
        <div className="btn">
          <Button
            Icon={""}
            title={"FIND OUT MORE"}
            bgColor={"black"}
            width="80%"
          />
        </div>
      </div>
    </>
  );
};

export default DCText;
