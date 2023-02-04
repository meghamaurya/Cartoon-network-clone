import React from "react";

import Carousal from "../Carousal/Carousal";
import HeadingComp from "../HeadingComp/HeadingComp";
import GameCards from "../GameCards/GameCards";
import "./Styles.css";
import Button from "../Button/Button";

const FeaturedGame = ({
  SecBgColor,
  CardDetail,
  Icon,
  btnTitle,
  bgcolor,
  HeadTitle,
  titleIcon,
}) => {
  return (
    <section
      className="featureContainer"
      style={{ background: `${SecBgColor}`, backgroundPosition: "center" }}
    >
      <HeadingComp Icon={Icon} HeadTitle={HeadTitle} bgColor={bgcolor} />
      <Carousal>
        <GameCards CardDetail={CardDetail} Icon={Icon} />
      </Carousal>
      <Button title={btnTitle} Icon={Icon} bgColor={bgcolor} width="55%" />
    </section>
  );
};

export default FeaturedGame;
