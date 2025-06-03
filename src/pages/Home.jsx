import React from "react";
import "../pages/Home.css";
import heroImage from "../assets/heroImage.png";
import booking from "../assets/booking.png";
import destination from "../assets/destination.png";
import cloud from "../assets/cloud.png";
import TopCards from "../components/TopCards";
import data from "../topData";
import TravelFrame from "../assets/TravelFrame.png";
import TravelPoint from "../components/TravelPoint";
import featureImage from "../assets/featureImage.png";
import Features from "../components/Features";
import Testimonals from "../components/Testimonals";

const Home = () => {
  const tours = data;
  return (
    <>
      <div className="main-container">
        <div className="inner-container">
          <div className="left-box">
            <span className="first-span">Explore the world!</span>
            <h1 className="first-heading">
              Travel <span className="gold-span">top</span> <br />
              <span className="gold-span">
                destination <br />
              </span>
              of the world
            </h1>
            <p className="heading-desc">
              We always make our customer happy by providing as many choices as
              possible
            </p>
          </div>
          <div className="right-box">
            <img src={heroImage} alt="heroimage" />
          </div>
        </div>
      </div>

      {/* second section */}

      <div className="services-section">
        <div className="services-inner-section">
          <div className="services-heading">
            <h2 className="services-title">Our Services</h2>
            <p className="services-desc">
              Our top value <br /> categories for you
            </p>
          </div>
          <div className="services-cards">
            <div className="service-card">
              <img src={booking} alt="service1" height={70} />
              <h3 className="service-title">Best Tour Guide</h3>
              <p className="service-desc">
                What looked like a small patch of purple grass, above five feet.
              </p>
            </div>
            <div className="service-card">
              <img src={destination} alt="service2" height={70} />
              <h3 className="service-title">Easy Booking</h3>
              <p className="service-desc">
                Square, was moving across the sand in their direction.
              </p>
            </div>
            <div className="service-card">
              <img src={cloud} alt="service3" height={70} />
              <h3 className="service-title">Weather Forcast</h3>
              <p className="service-desc">
                What looked like a small patch of purple grass, above five feet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* top destination section */}

      <div className="destination-container">
        <div className="destination-inner-container">
          <div className="destination-heading">
            <h2 className="services-title">Top Destination</h2>
            <p className="services-desc">Explore top destination</p>
          </div>
          <div>
            <TopCards
              id={tours.id}
              image={tours.image}
              info={tours.info}
              price={tours.price}
              name={tours.name}
            />
          </div>
        </div>
      </div>

      {/* travel point section */}

      <div className="travel-container">
        <div className="travel-inner-container">
          <div className="travel-left">
            <img src={TravelFrame} alt="" />
          </div>
          <div className="travel-right">
            <h2 className="services-title">TRAVEL POINT</h2>
            <h1 className="services-desc">
              We helping you find <br /> your dream location
            </h1>
            <p className="right-box-desc">
              Contrary to popular belief, Lorem Ipsum is not <br /> simply
              random text. It has roots in a piece of <br /> classical Latin
              literature from 45 BC.
            </p>
            <div className="travel-point-box">
              <TravelPoint boxTitle="500+" boxdesc="Holiday Package" />
              <TravelPoint boxTitle="100" boxdesc="Luxury Hotel" />
              <TravelPoint boxTitle="7" boxdesc="Premium Airlines" />
              <TravelPoint boxTitle="2k+" boxdesc="Happy Customer" />
            </div>
          </div>
        </div>
      </div>

      {/* Key Features section */}
      <div className="key-features-container">
        <div className="key-features-inner-container">
          <div className="feature-left">
            <h2 className="services-title">TRAVEL POINT</h2>
            <h1 className="services-desc">We offer best services</h1>
            <p className="right-box-desc">
              Contrary to popular belief, Lorem Ipsum is not simply random
              <br /> text. It has roots in a piece of classical Latin literature
              <br /> from 45 BC.
            </p>
            <div className="key-features-box">
              <Features
                locationIcon={destination}
                serviceTitle="We offer best services"
                servicePara="Lorem ipsum is not simply random text"
              />
              <Features
                locationIcon={destination}
                serviceTitle="Schedule your trip"
                servicePara="It has roots in a piece of classical"
              />
              <Features
                locationIcon={destination}
                serviceTitle="Get discounted coupons"
                servicePara="Lorem ipsum is not simply random text"
              />
            </div>
          </div>
          <div className="feature-right">
            <img src={featureImage} alt="featureImage" />
          </div>
        </div>
      </div>

      {/* testimonial section start */}

      <div className="testimonials-container">
        <div className="testimonial-inner-container">
          <div className="testimonial-box">
            <h2 className="services-title">TRAVEL POINT</h2>
            <h1 className="services-desc">We offer best services</h1>
          </div>
          <Testimonals />
        </div>
      </div>
    </>
  );
};

export default Home;
