import React from "react";
import Icons from "./Icons";
import "./Styles.css";

const Navbar = () => {
  const icons = [
    {
      id: 1,
      iconUrl: "https://cn.i.cdn.ti-platform.com/menu/item/games/za/games.svg",
      title: "GAMES",
    },
    {
      id: 2,
      iconUrl:
        "https://cn.i.cdn.ti-platform.com/menu/item/videos/za/f860e925aa13488c8d6fca66674f0cd1.svg",
      title: "VIDEOS",
    },
    {
      id: 3,
      iconUrl: "https://cn.i.cdn.ti-platform.com/menu/item/apps/za/apps.svg",
      title: "APPS",
    },
    {
      id: 4,
      iconUrl:
        "https://cn.i.cdn.ti-platform.com/menu/item/toon-cup-africa/za/menu_item_copa-toon_ve_soccer-ball-variant62.svg",
      title: "TOON CUP",
    },
    {
      id: 5,
      iconUrl:
        "https://cn.i.cdn.ti-platform.com/menu/item/climate-champions/za/climate-champs-mainnav.92be4ce8.svg",
      title: "CLIMATE CHAMPIONS",
    },
  ];
  return (
    <div className="navContainer">
      <img
        src="https://cncdn.dmti.cloud/200e4a4b5c610e7faf2ade024293655cdbae5a40/static/media/cn-logo.3f4d7cfb.svg"
        alt="logo"
        width="100rem"
      />
      <div className="iconContent">
        {icons.map((icon) => {
          return (
            <Icons key={icon.id} iconUrl={icon.iconUrl} title={icon.title} />
          );
        })}
      </div>
    </div>
  );
};
export default Navbar;
