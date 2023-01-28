import React, { useState } from "react";
import Icons from "./Icons";
import "./Styles.css";
import icons from "./NavItems.json";
import { IoMdMenu } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
import { List } from "./List";
const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleClick = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  return (
    <nav className="navbar">
      <img
        src="https://cncdn.dmti.cloud/200e4a4b5c610e7faf2ade024293655cdbae5a40/static/media/cn-logo.3f4d7cfb.svg"
        alt="logo"
        // width="120rem"
        className="logo"
      />
      {!isNavExpanded ? (
        <IoMdMenu onClick={handleClick} className="hamburger-icon" />
      ) : null}
      <div className={`smallScreen ${isNavExpanded && "open"}`}>
        {isNavExpanded ? (
          <div className="smallItem">
            <RiCloseLine onClick={handleClick} className="hamburger-cross" />
            <List />
          </div>
        ) : null}
      </div>
      <div className="largeScreen iconContent">
        {icons.map((icon) => {
          return (
            <div key={icon.id}>
              <Icons
                iconId={icon.id}
                iconUrl={icon.iconUrl}
                title={icon.title}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
};
export default Navbar;
