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
  const handleClick1 = () => {
    console("check");
    navigate("/request");
  };
  const handleClick = () => {
    console("check");
    navigate("/request");
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
            <div className="nav-content">
              Drills <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content">
              Impact Wrench <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content">
              Grinders <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content">
              Planners <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content">
              Saws <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content">
              Impact Wrench <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content">
              Sanders <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content">
              Polishers <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content">
              Routers <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content">
              Combo Kit <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className="nav-content">
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
                onClick={() => handleClick1()}
              />
              <div className="drills-div">Drills</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/power-tools/2.jpg"
                alt="powrtools"
                onClick={() => handleClick()}
              />
              <div className="drills-div">Impact Wrench</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/power-tools/5.jpg"
                alt="powrtools"
                onClick={() => handleClick()}
              />
              <div className="drills-div">Grinders</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/power-tools/11.jpg"
                alt="powrtools"
                onClick={() => handleClick()}
              />
              <div className="drills-div">Planners</div>
            </div>
            <div className="power-img lt-animate-left">
              <img
                src="/power-tools/4.jpg"
                alt="powrtools"
                onClick={() => handleClick()}
              />
              <div className="drills-div">Saws</div>
            </div>

            <div className="power-img lt-animate-left">
              <img
                src="/power-tools/6.jpg"
                alt="powrtools"
                onClick={() => handleClick()}
              />
              <div className="drills-div">Impact Wrench</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/power-tools/7.jpg"
                alt="powrtools"
                onClick={() => handleClick()}
              />
              <div className="drills-div">Sanders</div>
            </div>

            <div className="power-img lt-animate-left">
              <img
                src="/power-tools/9.jpg"
                alt="powrtools"
                onClick={() => handleClick()}
              />
              <div className="drills-div">Polishers</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/power-tools/12.jpg"
                alt="powrtools"
                onClick={() => handleClick()}
              />
              <div className="drills-div">Routers</div>
            </div>
            <div className="power-img lt-animate-left">
              <img
                src="/power-tools/10.jpg"
                alt="powrtools"
                onClick={() => handleClick()}
              />
              <div className="drills-div">Grinders</div>
            </div>

            <div className="power-img lt-animate-right">
              <img
                src="/power-tools/combo2.webp"
                alt="powrtools"
                onClick={() => handleClick()}
              />
              <div className="drills-div"> Combo Kit</div>
            </div>
            <div className="power-img lt-animate-left">
              <img
                src="/power-tools/chargers.jpg"
                alt="powrtools"
                onClick={() => handleClick()}
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
