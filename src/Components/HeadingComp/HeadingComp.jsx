import React from "react";
import "./Styles.css";

const HeadingComp = ({ bgColor, Icon, HeadTitle }) => {
  // console.log(Icon, "headingcomp");
  return (
    <>
      <div className="h1">
        <Icon
          className="remoteIcon"
          style={{ backgroundColor: `${bgColor}` }}
        />
        <strong className="title">{HeadTitle}</strong>
      </div>
    </>
  );
};

export default HeadingComp;
