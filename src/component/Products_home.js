import React from "react";

import "../style/Products_home.css";

import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Rotate from "react-reveal/Rotate";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
function Products_home() {
  return (
    <div className="product_home_container">
      <div className="power_tools">
        <Fade left>
          <div className="power_content">
            <h1>Power Tools</h1>
            <p>
              Power tools are mechanical or electrical devices powered by a
              motor or battery. They are typically faster and more powerful than
              hand tools, making them ideal for larger projects. However, power
              tools can be more difficult to control than hand tools and can
              also be more expensive.
            </p>
            <div className="button-container">
              <div className="Power-btn animate-power">
                <Link to="/powertools">Read More</Link>
              </div>
            </div>
          </div>
        </Fade>
        <Flip right>
          <div className="power">
            <img src="/bkg_img/bkg4.png" alt="power tools" />
          </div>
        </Flip>
      </div>
      {/* safety */}
      <div className="saftey_tools">
        <Rotate top left>
          <div className="saftey_img">
            <img src="/safety/safety1.png" alt="saftey tools" />
          </div>
        </Rotate>
        <Roll right>
          <div className="saftey_content">
            <h1>Industrial Safety Equipments</h1>
            <p>
              Power tools are mechanical or electrical devices powered by a
              motor or battery. They are typically faster and more powerful than
              hand tools, making them ideal for larger projects. However, power
              tools can be more difficult to control than hand tools and can
              also be more expensive.
            </p>
            <div className="button-container">
              <div className="Power-btn animate-power">
                <Link to="/safetytools">Read More</Link>
              </div>
            </div>
          </div>
        </Roll>
      </div>
      {/* storage */}
      <div className="thermal_container">
        <Slide right>
          <div className="thermal_content">
            <h1>Thermal Gas & Power Turbin </h1>
            <p>
              Power tools are mechanical or electrical devices powered by a
              motor or battery. They are typically faster and more powerful than
              hand tools, making them ideal for larger projects. However, power
              tools can be more difficult to control than hand tools and can
              also be more expensive.
            </p>
            <div className="button-container">
              <div className="Power-btn animate-power">
                <Link to="/thermal">Read More</Link>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className="thermal">
            <img src="/safety/thermal1.jpg" alt="thermal gas" />
          </div>
        </Slide>
      </div>
      <div className="saftey_tools">
        <Rotate top left>
          <div className="saftey_img">
            <img src="/safety/storage.png" alt="saftey tools" />
          </div>
        </Rotate>
        <Roll right>
          <div className="saftey_content">
            <h1>Storage Solutions</h1>
            <p>
              Power tools are mechanical or electrical devices powered by a
              motor or battery. They are typically faster and more powerful than
              hand tools, making them ideal for larger projects. However, power
              tools can be more difficult to control than hand tools and can
              also be more expensive.
            </p>
            <div className="button-container">
              <div className="Power-btn animate-power">
                <Link to="/storage">Read More</Link>
              </div>
            </div>
          </div>
        </Roll>
      </div>
      <div className="thermal_container">
        <Slide right>
          <div className="thermal_content">
            <h1>Refinery</h1>
            <p>
              Power tools are mechanical or electrical devices powered by a
              motor or battery. They are typically faster and more powerful than
              hand tools, making them ideal for larger projects. However, power
              tools can be more difficult to control than hand tools and can
              also be more expensive.
            </p>
            <div className="button-container">
              <div className="Power-btn animate-power">
                <Link to="/refinery">Read More</Link>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className="thermal">
            <img src="../LT/refinery.jpg" alt="Refinery" />
          </div>
        </Slide>
      </div>
      <div className="saftey_tools">
        <Rotate top left>
          <div className="saftey_img">
            <img src="../LT/steel.avif" alt="Steels" />
          </div>
        </Rotate>
        <Roll right>
          <div className="saftey_content">
            <h1>Steels</h1>
            <p>
              Power tools are mechanical or electrical devices powered by a
              motor or battery. They are typically faster and more powerful than
              hand tools, making them ideal for larger projects. However, power
              tools can be more difficult to control than hand tools and can
              also be more expensive.
            </p>
            <div className="button-container">
              <div className="Power-btn animate-power">
                <Link to="/steels">Read More</Link>
              </div>
            </div>
          </div>
        </Roll>
      </div>
    </div>
  );
}

export default Products_home;
