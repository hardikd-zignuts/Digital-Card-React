import React from "react";
import Instagram from "./../../assets/Instagram Icon.svg";
import Github from "./../../assets/GitHub Icon.svg";
import Twitter from "./../../assets/Twitter Icon.svg";
import Facebook from "./../../assets/Facebook Icon.svg";
import Linkedin from "./../../assets/Linkedin Icon.svg";

const Footer = () => {
  return (
    <footer>
      <img src={Instagram} alt="social" />
      <img src={Github} alt="social" />
      <img src={Facebook} alt="social" />
      <img src={Twitter} alt="social" />
      <img src={Linkedin} alt="social" />
    </footer>
  );
};

export default Footer;
