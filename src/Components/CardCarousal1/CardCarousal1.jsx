import React from "react";
import Cards from "./Cards";
import CardDetail from "./CardDetail.json";
import Carousal from "../Carousal/Carousal";
import "./Styles.css";

const CardCarousal1 = () => {
  return (
    <Carousal>
      <Cards CardDetail={CardDetail} />
    </Carousal>
  );
};
export default CardCarousal1;
