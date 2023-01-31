import React from "react";
import { IoGameController } from "react-icons/io5";
import Carousal from "../Carousal/Carousal";
import HeadingComp from "../HeadingComp/HeadingComp";
import GameCard from "./GameCards";
import CardDetail from "./Games.json";

const FeaturedGame = () => {
  return (
    <section className="featureContainer">
      <HeadingComp Icon={IoGameController} title={"Featured games"} />
      <Carousal>
        <GameCard CardDetail={CardDetail} />
      </Carousal>
    </section>
  );
};

export default FeaturedGame;
