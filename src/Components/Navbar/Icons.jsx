import React from "react";

const Icons = (props) => {
  return (
    <div className="iconContainer">
      <img
        src={props.iconUrl}
        alt={`logo${props.key}`}
        className="icons"
        width="40px"
      />
      <div className="title">{props.title}</div>
    </div>
  );
};
export default Icons;
