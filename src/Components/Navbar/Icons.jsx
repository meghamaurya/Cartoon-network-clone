import React from "react";

const Icons = (props) => {
  return (
    <div className="iconContainer" key={props.iconId}>
      <img
        src={props.iconUrl}
        alt={`logo${props.iconId}`}
        className="icons"
        width="40px"
      />
      <div className="title">{props.title}</div>
    </div>
  );
};
export default Icons;
