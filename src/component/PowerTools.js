import React, { useEffect } from "react";
import "../style/PowerTools.css";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function PowerTools() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/request", { state: { src: e } });
  };

  return (
    <section>
      <Header />
      <Nav />
      <div className="powercontent">Power Tools</div>
      <div className="powertools_cnt">
        <div className="sub-menu">
          <div className="powertools_nav">
            <div className="nav-content nav-menu">Power Tools</div>
            <div className="nav-content"  onClick={() => handleClick("/power-tools/1.jpg")}>
             Link Drills<i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content" onClick={() => handleClick("/power-tools/2.jpg")}>
              Impact Wrench <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content"  onClick={() => handleClick("/power-tools/5.jpg")}>
              Grinders <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content"  onClick={() => handleClick("/power-tools/11.jpg")}>
              Planners <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content" onClick={() => handleClick("/power-tools/4.jpg")}>
              Saws <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content" onClick={() => handleClick("/power-tools/6.jpg")}>
              Impact Wrench <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content" onClick={() => handleClick("/power-tools/7.jpg")}>
              Sanders <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content" onClick={() => handleClick("/power-tools/9.jpg")}>
              Polishers <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content"  onClick={() => handleClick("/power-tools/12.jpg")}>
              Routers <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content" onClick={() => handleClick("/power-tools/combo2.webp")}>
              Combo Kit <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content"  onClick={() => handleClick("/power-tools/chargers.jpg")}>
              Power Tools & Chargers
              <i class="far fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </div>

        <div className="sub-menu1">
          <div className="powertools_main">
            <div className="power-img lt-animate-left">
              <img
                src="/power-tools/1.jpg"
                alt="powrtools"
                onClick={() => handleClick("/power-tools/1.jpg")}
              />
              <div className="drills-div">Drills</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/power-tools/2.jpg"
                alt="powrtools"
                onClick={() => handleClick("/power-tools/2.jpg")}
              />
              <div className="drills-div">Impact Wrench</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/power-tools/5.jpg"
                alt="powrtools"
                onClick={() => handleClick("/power-tools/5.jpg")}
              />
              <div className="drills-div">Grinders</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/power-tools/11.jpg"
                alt="powrtools"
                onClick={() => handleClick("/power-tools/11.jpg")}
              />
              <div className="drills-div">Planners</div>
            </div>
            <div className="power-img lt-animate-left">
              <img
                src="/power-tools/4.jpg"
                alt="powrtools"
                onClick={() => handleClick("/power-tools/4.jpg")}
              />
              <div className="drills-div">Saws</div>
            </div>

            <div className="power-img lt-animate-left">
              <img
                src="/power-tools/6.jpg"
                alt="powrtools"
                onClick={() => handleClick("/power-tools/6.jpg")}
              />
              <div className="drills-div">Impact Wrench</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/power-tools/7.jpg"
                alt="powrtools"
                onClick={() => handleClick("/power-tools/7.jpg")}
              />
              <div className="drills-div">Sanders</div>
            </div>

            <div className="power-img lt-animate-left">
              <img
                src="/power-tools/9.jpg"
                alt="powrtools"
                onClick={() => handleClick("/power-tools/9.jpg")}
              />
              <div className="drills-div">Polishers</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/power-tools/12.jpg"
                alt="powrtools"
                onClick={() => handleClick("/power-tools/12.jpg")}
              />
              <div className="drills-div">Routers</div>
            </div>
            <div className="power-img lt-animate-left">
              <img
                src="/power-tools/10.jpg"
                alt="powrtools"
                onClick={() => handleClick("/power-tools/10.jpg")}
              />
              <div className="drills-div">Grinders</div>
            </div>

            <div className="power-img lt-animate-right">
              <img
                src="/power-tools/combo2.webp"
                alt="powrtools"
                onClick={() => handleClick("/power-tools/combo2.webp")}
              />
              <div className="drills-div"> Combo Kit</div>
            </div>
            <div className="power-img lt-animate-left">
              <img
                src="/power-tools/chargers.jpg"
                alt="powrtools"
                onClick={() => handleClick("/power-tools/chargers.jpg")}
              />
              <div className="drills-div">Power Tools & Chargers</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default PowerTools;
