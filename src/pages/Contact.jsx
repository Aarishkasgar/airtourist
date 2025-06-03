import React from "react";
import "./Contact.css";
import contact from "../assets/Contact.png";

const Contact = () => {
  return (
    <div className="contact-main-container">
      <div className="contact-container">
        <div className="contact-inner-container">
          <h1>
            Contact us <br /> for any Queries
          </h1>
        </div>
      </div>
      <div className="details-container">
        <div className="contact-details">
          <div className="contact-left">
            <h3>Address</h3>
            <p>
              16/1 Gangaram Pura, Sarwat Gate, Muzaffarnagar, Uttar Pradesh
              251002
            </p>
            <h3>Phone</h3>
            <p>123-456-7890</p>
            <p>123-456-7890</p>
            <p>123-456-7890</p>
            <h3>Email</h3>
            <p>airtourist22@gmail.com</p>
          </div>
          <div className="contact-right">
            <img src={contact} alt="contact us image" height={400} />
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.3337876725736!2d77.69529557532213!3d29.477458375214002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1bbc9aa33dd5%3A0x987a41160f0894af!2sAirTourist!5e0!3m2!1sen!2sin!4v1726641364270!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
