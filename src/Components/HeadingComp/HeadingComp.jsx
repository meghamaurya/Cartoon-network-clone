import React from "react";

const HeadingComp = (props) => {
  return (
    <>
      <h1>
        <props.Icon className="remoteIcon" />
        <strong className="title">{props.title}</strong>
      </h1>
    </>
  );
};

export default HeadingComp;
