import React from "react";
import "./Styles.css";
import CardDetail from "./CardDetail.json";
import { IoGameController } from "react-icons/io5";
const Cards = () => {
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
                  <IoGameController className="gameIcon" />
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
