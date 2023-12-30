import React from "react";
import "../style/Who.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
function Who() {
  return (
    <div className="who-container">
      <div className="space"></div>
      <div className="who-outer">
        <div className="who-inner">
          <div className="who-div1 who-animate-left">
            <Fade left>
              <img src="/logo.png" alt="logo" />
            </Fade>
            <div class="overlay-text">
              <Flip right>Mithra Engineering & Enterprises</Flip>
            </div>
          </div>
          <div className="who-div2 who-animate-right">
            <Fade right>
              <h3>
                Established in 1997, Mithra Engineering & Enterprises POWER
                TOOLS has since gained a vast consumer base in TamilNadu(India).
                This is a testament for the durability, high-quality, and
                affordability of our products which are maintained in
                collaboration with our suppliers and various quality management
                practices. Our goal is to provide top of the line equipment and
                build strong relationships with our customers by providing
                reliable and trustworthy service
              </h3>
            </Fade>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
}

export default Who;
