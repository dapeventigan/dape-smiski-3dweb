import React, {useEffect} from "react";
import smol from "../../assets/icon01-1.png";
import { BsCart4 } from "react-icons/bs";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__contents">
        <img src={smol} alt="" />
        <a className="nav__links" href="https://smiski.com/e/smiski/" target="_blank" rel="noreferrer">
          SMISKI
        </a>
        <a className="nav__links" href="https://smiski.com/e/update/" target="_blank" rel="noreferrer">
          NEWS
        </a>
        <a className="nav__links" href="https://smiski.com/e/products/" target="_blank" rel="noreferrer">
          PRODUCTS
        </a>
        <a className="nav__links" href="https://smiski.com/e/wheretobuy/" target="_blank" rel="noreferrer">
          <button className="btn-buy">
            <BsCart4 /> Buy Smiski
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
