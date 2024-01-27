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
      <div className="thermal-cont">
        <div className="thermal-inn">
          <div className="therm-head">
            <h1>OUR WORKS</h1>
          </div>
          <div className="therm-content">
            <h3>
              GSECL M/S. Larsen & Tourbo Limited., Dhuvaran ,anand
              Gujarat(2014-2015),Value-30Lac.
            </h3>
            <h3>
              JAPEE NIGIRIE SUPER TTEHRMAL POWER PROJECT M/S.Larsen & Turbo
              Ltd.,Nigirie(2013-Feb 2015) value 1.5 Crore.
            </h3>
            <h3>
              APGEN M/S.Larsen & Turbo Ltd.,MUTHUKURU ,Nellore
              Andrha(2011-2014),Value-40Lac.
            </h3>
            <h3>
              GMR PLlant M/S.Larsen & Turbo
              Ltd.,Venagiri,Rajamundhry(2010-2011),Value-45Lac.
            </h3>
            <h3>
              TATA POWER M/S.Larsen & Turbo Ltd.,Mumbai(June 2009-Feb
              2010),Value-15Lac.
            </h3>
            <h3>
              Vedanta Alumina Ltd (Sepco III,IPP Projects) M/S.Larsen & Turbo
              Ltd.,JharsugudaOrissa(Feb 2008-June 2009),Value-9Crore
            </h3>
            <h3>APIL,Neyveli ,Petron,(2001-2004),Value-2 Crore.</h3>
            <h3>Thermal Power Station,Neyveli,M/S.Larsen & Turbo Ltd., ECC,(1991-1993) value -5Lac </h3>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Thermal;
