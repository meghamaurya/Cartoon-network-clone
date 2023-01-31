import React from "react";
import { IoGameController } from "react-icons/io5";
import Cards from "./Games.json";

const GameCard = () => {
  return (
    <>
      {Cards.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.imgUrl} alt={item.title} />
            <div>
              <div>
                <IoGameController />
              </div>
              <div>
                <span>{item.title}</span>
                <h3>{item.heading}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GameCard;
