import React from "react";
import footerlogo from "../../assets/top_logo.png";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <img src={footerlogo} alt="" />
        <p>© 2024 Dreams INC. Website by Dape.</p>
      </div>

      <div className="footer__contents">
        <p>SOCIALS</p>
        <div className="footer__socials">
          <a
            className="footer__links"
            href="https://www.facebook.com/Smiski.Official.Philippines"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareFacebook size={30} className="footer__icons" />
          </a>
          <a
            className="footer__links"
            href="https://twitter.com/smiski_usa_"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareXTwitter size={30} className="footer__icons" />
          </a>
          <a
            className="footer__links"
            href="https://www.youtube.com/channel/UCkKGZJ-oZ6PhxFVI_Ppm26g"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube size={30} className="footer__icons" />
          </a>
          <a
            className="footer__links"
            href="https://www.instagram.com/smiski_usa/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={30} className="footer__icons" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
