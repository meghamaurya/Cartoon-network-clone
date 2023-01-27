import React from "react";

export const List = () => {
  const listItem = ["Games", "VIDEOS", "APPS", "TOON CUP", "CLIMATE CHAMPIONS"];
  return (
    <ul className="list">
      {listItem.map((item, i) => {
        return (
          <div key={i}>
            <li className="list">{item}</li>
          </div>
        );
      })}
    </ul>
  );
};
