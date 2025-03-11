import React from "react";
import { FaUserTie, FaUser } from "react-icons/fa"; // Importing icons
import "./about.css";
import TeemImg from "../assets/TEEM.jpg";
import TeemImg1 from "../assets/TEEM1.jpg";
import ImgPromise from "../assets/PROMISE.jpg";


const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="banner">
        <h2>EVOLVING AS INDIA’S PREMIER GLOBAL ADVISORY FIRM</h2>
      </section>

      <div className="about-content">
        <div className="section">
          <h3 className="values-header">Our Values</h3>
          <p>
            Our vision is to provide our clients with wide-ranging, secured, and finest financial solutions to achieve sustained growth. 
            We aim to do this by being responsive towards our clients and striving relentlessly to improve. 
            We at All India Traders Financials - Investment Adviser want to be worthy of our customer’s trust and provide them with the finest Stock and Commodity market tips.
          </p>
        </div>

        <div className="section">
          <h3 className="culture-header">Our Culture</h3>
          <p>
            Energy, speed, growth, discipline, reward, and party are some of the common words you get to hear. 
            A vibrant working culture driven by a young and energetic crowd. All India Traders Financials - Investment Adviser places a high emphasis on performance-driven reward programs where consistent performers are rewarded with unbelievable incentives, 
            numerous international & domestic paid trips. 
            We provide a conducive learning atmosphere with opportunities for regular skill enhancement, with a large importance given to grooming high-potential individuals into stars.
          </p>
          <p className="highlight">WORK HARD…EARN BIG!!!</p>
        </div>

        <div className="section">
          <h3 className="leadership-header">Our Leadership</h3>
          <div className="leader">
            <FaUserTie className="icon" />
            <p className="founder">Founder & MD: Siva Naik</p>
          </div>
          <div className="leader">
            <FaUser className="icon" />
            <p className="cofounder">Co-Founder: Sudhalakshmi</p>
          </div>
        </div>
        <div className="images-container">
          <img src={TeemImg} alt="Our Culture" className="about-image" />
          <img src={ImgPromise} alt="Our Values" className="about-image" />
          <img src={TeemImg1} alt="Team" className="about-image" />
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
