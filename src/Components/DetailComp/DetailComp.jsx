import React from "react";
import DCImg from "../DetailCard/DCImg";
import DCText from "../DetailCard/DCText";
import "./Styles.css";

const DetailCard = () => {
  let img =
    "https://cn.i.cdn.ti-platform.com/content/2187/submit-your-creation/link/za/ryw_bannercms_gallery.77ae4f1b.jpg?imwidth=420";
  let title1 = "REDRAW YOUR WORLD GALLERY";
  let para1 =
    "You showed us how you Redraw Your World in so many amazing different ways. Check out the gallery below to get inspired by great entries from around Africa!";

  return (
    <div className="dcContainer">
      <div className="dcCard">
        <DCImg Img={img} />
        <DCText title1={title1} para={para1} />
      </div>
    </div>
  );
};

export default DetailCard;
