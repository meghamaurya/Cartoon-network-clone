import React from "react";
import "./Styles.css";
const Cards = ({ CardDetail, Icon }) => {
  return (
    <>
      {CardDetail.map((item) => {
        return (
          <div key={item.id} className="cards">
            <img src={item.iconUrl} alt={item.title} className="cardImg" />
            <div className="textPara">
              <div className="paragraphs">
                <span className="p1">{item.title}</span>
                <span className="p2">{item.heading}</span>
              </div>
              <div>
                <i>
                  <Icon className="gameIcon" />
                </i>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Cards;
