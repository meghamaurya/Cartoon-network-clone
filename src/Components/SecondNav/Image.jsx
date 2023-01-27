import React from "react";
import Images from "./Images.json";

const ImageCard = () => {
  return (
    <>
      {Images.map((img) => {
        <div key={img.id} className="secondNavImg">
          <img src={img.iconUrl} alt={img.title} width="45px" />
        </div>;
      })}
    </>
  );
};
export default ImageCard;
