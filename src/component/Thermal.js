import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import "../style/Thermal.css";
import "../style/Animate.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Footer from "./Footer";
function Thermal() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/request", { state: { src: e } });
  };
  return (
    <section>
      <Header />
      <Nav />
      <div className="powercontent">Thermal Gas Turbin</div>
      <div className="powertools_cnt">
        <div className="sub-menu">
          <div className="powertools_nav">
            <div className="nav-content nav-menu">Thermal Gas Turbin</div>

            <div
              className="nav-content"
              onClick={() => handleClick("/thermal/1.png")}
            >
              Combustion Chamber <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("/thermal/2.jpg")}
            >
              Turbine <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("/thermal/3.webp")}
            >
              Exhaust Module<i class="far fa-arrow-alt-circle-right"></i>
            </div>
           

          
           
          </div>
        </div>
        <div className="sub-menu1">
          <div className="powertools_main">
            <div className="power-img lt-animate-right">
              <img
                src="/thermal/1.png"
                alt="powrtools"
                onClick={() => handleClick("/thermal/1.png")}
              />
              <div>Combustion Chamber</div>
            </div>
            <div className="power-img lt-animate-left">
              <img
                src="/thermal/2.jpg"
                alt="powrtools"
                onClick={() => handleClick("/thermal/2.jpg")}
              />
              <div>Turbine</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/thermal/3.webp"
                alt="powrtools"
                onClick={() => handleClick("/thermal/3.webp")}
              />
              <div>Exhaust Module</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Thermal;
