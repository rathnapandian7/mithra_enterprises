import React, { useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import "../style/SafetyTools.css";
import { useNavigate } from "react-router-dom";
function SafetyTools() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/request", { state: { src: e } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Header />
      <Nav />
      <div className="powercontent">Industrial Safety Equipments</div>
      <div className="powertools_cnt">
        <div className="sub-menu">
          <div className="powertools_nav">
            <div className="nav-content nav-menu">Industrial Safety Tools</div>

            <div
              className="nav-content"
              onClick={() => handleClick("/safety/3.jpg")}
            >
              Hearing Protection <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("/equip/6.jpg")}
            >
              Safety Gloves <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("/safety/1.jpg")}
            >
              Safety Glasses<i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("/safety/shield.png")}
            >
              Face Shield <i class="far fa-arrow-alt-circle-right"></i>
            </div>

            <div
              className="nav-content"
              onClick={() => handleClick("/equip/1.jpg")}
            >
              Safety Helmets <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("/safety/shoes.jpg")}
            >
              Safety Shoes <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("/equip/3.jpg")}
            >
              Rubber Gloves <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("/equip/5.webp")}
            >
              Leather Gloves <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("/equip/9.jpg")}
            >
              Safety Tools Kit
              <i class="far fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </div>
        <div className="sub-menu1">
          <div className="powertools_main">
            <div className="power-img lt-animate-left">
              <img
                src="/safety/3.jpg"
                alt="1"
                onClick={() => handleClick("/safety/3.jpg")}
              />
              <div>Hearing Protection</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/equip/6.jpg"
                alt="powrtools"
                onClick={() => handleClick("/equip/6.jpg")}
              />
              <div>Safety Gloves</div>
            </div>
            <div className="power-img lt-animate-left">
              <img
                src="/safety/1.jpg"
                alt="powrtools"
                onClick={() => handleClick("/safety/1.jpg")}
              />
              <div>Safety Glasses</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/safety/shield.png"
                alt="powrtools"
                onClick={() => handleClick("/safety/shield.png")}
              />
              <div>Face Shiled</div>
            </div>
            <div className="power-img lt-animate-left">
              <img
                src="/equip/1.jpg"
                alt="powrtools"
                onClick={() => handleClick("/equip/1.jpg")}
              />
              <div>Safety Helmet</div>
            </div>
            <div className="power-img lt-animate-left">
              <img
                src="/safety/shoes.jpg"
                alt="powrtools"
                onClick={() => handleClick("/safety/shoes.jpg")}
              />
              <div>Safety Shoes</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/equip/3.jpg"
                alt="powrtools"
                onClick={() => handleClick("/equip/3.jpg")}
              />
              <div>Rubber Gloves</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/equip/5.webp"
                alt="powrtools"
                onClick={() => handleClick("/equip/5.webp")}
              />
              <div>Leather Gloves</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/equip/9.jpg"
                alt="powrtools"
                onClick={() => handleClick("/equip/9.jpg")}
              />
              <div>Safety Kit</div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default SafetyTools;
