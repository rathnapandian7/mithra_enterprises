import React, { useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import "../style/SafetyTools.css";
function SafetyTools() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Header />
      <Nav />
      <div className="powercontent">Industrial Safety Equipments</div>
      <div className="powertools_cnt">
        <div className="sub-menu1">
          <div className="powertools_main">
            <div className="power-img lt-animate-left">
              <img src="/equip/9.jpg" alt="1" />
            </div>
            <div className="power-img lt-animate-right">
              <img src="/equip/13.png" alt="powrtools" />
            </div>
            <div className="power-img lt-animate-left">
              <img src="/equip/1.jpg" alt="powrtools" />
            </div>
            <div className="power-img lt-animate-right">
              <img src="/equip/2.jpg" alt="powrtools" />
            </div>
            <div className="power-img lt-animate-left">
              <img src="/equip/11.jpg" alt="powrtools" />
            </div>
            <div className="power-img lt-animate-left">
              <img src="/equip/6.jpg" alt="powrtools" />
            </div>
            <div className="power-img lt-animate-right">
              <img src="/equip/7.jpg" alt="powrtools" />
            </div>
            <div className="power-img lt-animate-right">
              <img src="/equip/12.webp" alt="powrtools" />
            </div>
            <div className="power-img lt-animate-right">
              <img src="/equip/3.jpg" alt="powrtools" />
            </div>{" "}
            <div className="power-img lt-animate-right">
              <img src="/equip/ruber.jpg" alt="powrtools" />
            </div>
            <div className="power-img lt-animate-left">
              <img src="/equip/5.webp" alt="powrtools" />
            </div>
            <div className="power-img lt-animate-left">
              <img src="/equip/14.jpg" alt="powrtools" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default SafetyTools;
