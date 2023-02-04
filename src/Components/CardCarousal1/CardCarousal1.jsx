import React from "react";
import Cards from "./Cards";
import Carousal from "../Carousal/Carousal";
import { IoGameController } from "react-icons/io5";
import "./Styles.css";

const CardCarousal1 = ({ CardDetail }) => {
  return (
    <Carousal>
      <Cards CardDetail={CardDetail} Icon={IoGameController} />
    </Carousal>
  );
};
export default CardCarousal1;
