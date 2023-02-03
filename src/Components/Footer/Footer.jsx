import React from "react";
import Detail from "../JsonFiles/Detail";
import "./Styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="p1">
          <p className="FPara">{Detail.CNPara}</p>
        </div>
        <div className="imgCN">
          <img src={Detail.CNlogo} alt="" width="100rem" />
          <img src={Detail.CNDiscovery} alt="" width="170rem" />
          <img src={Detail.CNFullForm} alt="" width="170rem" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
