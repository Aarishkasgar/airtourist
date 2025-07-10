import React from "react";
import aboutHero from "../assets/aboutHero.png";
import "../pages/About.css";
import AboutUsCards from "../components/AboutUsCards";

const About = () => {
  return (
    <>
      <div className="AboutUs-container">
        <div className="AboutUs-inner-container">
          <div className="AboutUs-left">
            <h1>About Us</h1>
            <p>
              Our company was founded in 2010 by a group of passionate
              individuals who wanted to make a difference in the world. We
              started with a small team and a big dream, and over the years,
              we've grown into a global organization with a presence in multiple
              countries.
            </p>
            <p>
              We're proud of what we've accomplished, but we're not satisfied
              yet. We continue to innovate and push the boundaries of what's
              possible, always striving to make a positive impact on the world.
            </p>
          </div>
          <div className="AboutUs-right">
            <img src={aboutHero} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="Cards01">
          <h1>Meet Our Team</h1>
          <AboutUsCards
            name="Shakir Ayyub Qasmi"
            destination="Founder &amp; CEO"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,
            vestibulum magna sed, convallis ex."
          />
        </div>
        <div className="Cards02">
          <AboutUsCards
            name="M. Ibrahim"
            destination="Founder &amp; CEO"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,
            vestibulum magna sed, convallis ex."
          />
        </div>
        <div className="Cards01">
          <AboutUsCards
            name="Aarish Developer"
            destination="Graphic Designer &amp; Web Developer"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,
            vestibulum magna sed, convallis ex."
          />
        </div>
      </div>
    </>
  );
};

export default About;
