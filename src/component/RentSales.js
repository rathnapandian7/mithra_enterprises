import React, { useEffect } from "react";
import "../style/RentSales.css";
import Footer from "./Footer";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
function RentSales() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    alert("check");
    navigate("/request");
  };
  return (
    <section>
      <Header />
      <Nav />
      <div className="powercontent">Rental & Sales</div>
      <div className="powertools_cnt">
        <div className="sub-menu1">
          <div className="powertools_main">
            <div className="power-img lt-animate-left">
              <img
                src="/power-tools/1.jpg"
                alt="powrtools"
                onClick={() => handleClick()}
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

export default RentSales;
