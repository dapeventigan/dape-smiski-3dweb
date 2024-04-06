import React, {useEffect} from "react";
import smol from "../../assets/icon01-1.png";
import { BsCart4 } from "react-icons/bs";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__contents">
        <img src={smol} alt="" />
        <a className="nav__links" href="">
          SMISKI
        </a>
        <a className="nav__links" href="">
          NEWS
        </a>
        <a className="nav__links" href="">
          PRODUCTS
        </a>
        <a className="nav__links" href="">
          <button className="btn-buy">
            <BsCart4 /> Buy Smiski
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
