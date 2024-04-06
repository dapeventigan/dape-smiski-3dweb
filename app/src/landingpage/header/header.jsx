import React, {useEffect} from "react";
import Spline from "@splinetool/react-spline";
import "./header.css";

const Header = () => {

  return (
    <div className="main-spline">
      <Spline scene="https://prod.spline.design/J1UFE40j86DSbISP/scene.splinecode" />
      <div className="spline-content">
        <h1>スミスキー</h1>
        <h2>SMISKI</h2>
      </div>

    </div>
  );
};

export default Header;
