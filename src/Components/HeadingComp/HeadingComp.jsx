import React from "react";
import "./Styles.css";

const HeadingComp = (props) => {
  return (
    <>
      <div className="h1">
        <props.Icon className="remoteIcon" />
        <strong className="title">{props.title}</strong>
      </div>
    </>
  );
};

export default HeadingComp;
