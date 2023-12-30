import React from "react";
import "../style/About.css";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
function About() {
  return (

    
    <div>
      <Header />
      <Nav />
      <section className="about-container">
        <div className="about-div-container">
          <div className="abt-cpy">
            <h1>About Company</h1>
          </div>
          <div className="abt-profile">
            <h1>Company Profile</h1>
          </div>
          <div className="abt-content">
            <p>
              Mithra Engineering & Enterprises Tools Pvt Ltd was estabilished in
              the year 2000.Since its inception the factory has devoted its
              complete endeavor and delivering quality special purpose power
              tools. It has improved in its quality and customers contacts by
              generating in its profitable measures. Our components have covered
              most of the machines in its variegated application of drilling,
              tapping,boring,reaming,milling and sawing.Our machineries have
              extented its hands from local to the overseas.The company is set
              on the basic principle.
            </p>
          </div>
        </div>
        <div className="space"></div>
        <div className="space"></div>
        <Footer />
      </section>
    </div>
  );
}

export default About;
