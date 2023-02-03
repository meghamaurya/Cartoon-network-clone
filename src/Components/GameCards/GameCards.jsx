import React from "react";
import "./Styles.css";
const GameCard = ({ CardDetail, Icon }) => {
  return (
    <>
      {CardDetail.map((item) => {
        return (
          <div key={item.id} className="gameCard">
            <img src={item.imgUrl} alt={item.title} className="gameImg" />
            <div className="gameIcon">
              <Icon />
            </div>
            <div className="cardheadings">
              <span className="title1">{item.title}</span>
              <h3 className="title2">{item.heading}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GameCard;
