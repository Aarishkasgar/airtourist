import React from "react";
import logo from "../assets/logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <img src={logo} alt="logo" height={100} />
        <span>All India Hajj & Umrah</span>
        <p className="main-heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          officiis iste! Delectus voluptas mollitia quos asperiores cumque ipsam
          modi sunt provident deserunt consequatur
        </p>
        <div className="social-media-container">
          <div>
            <h2>Follow on</h2>
            <ul className="sm-icon">
              <li>
                <a href="https://www.facebook.com/">
                  <FacebookOutlinedIcon />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="ftr-contact">
            <h2>Contact</h2>
            <p>
              <b>Address:</b> Gangaram pura sarwat gate muzaffarnagar, Uttar
              Pradesh 251002
            </p>
            <p>
              <b>Phone: </b>
              +91 9898987878
            </p>
            <p>
              <b>Email: </b>airtourist22@gmail.com
            </p>
          </div>
        </div>
        <div className="copyright-section">
          <p>
            <CopyrightIcon />
            2024 airtourist.com All Rights Reserved.
          </p>
          <p>Design & Developed by Aarish</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
