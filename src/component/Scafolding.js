import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import "../style/Scafolding.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function Scafolding() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/request", { state: { src: e } });
  };
  return (
    <section>
      <Header />
      <Nav />
      <div className="powercontent">Scaffolding Types</div>
      <div className="powertools_cnt">
        <div className="sub-menu">
          <div className="powertools_nav">
            <div className="nav-content nav-menu">Scaffolding Types</div>
            <div
              className="nav-content"
              onClick={() => handleClick("/Scaf/1.jpg")}
            >
              Single Scaffolding<i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("/Scaf/2.png")}
            >
              Double scaffolding <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("/Scaf/3.jpeg")}
            >
              Cantilever Scaffolding
              <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("/Scaf/4.png")}
            >
              Suspended Scaffolding
              <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("/Scaf/5.jpg")}
            >
              Ladder or Trestle Scaffolding
              <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("/Scaf/6.webp")}
            >
              Mobile Scaffolding <i class="far fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </div>

        <div className="sub-menu1">
          <div className="powertools_main">
            <div className="power-img lt-animate-left">
              <img
                src="/Scaf/1.jpg"
                alt="powrtools"
                onClick={() => handleClick("/Scaf/1.jpg")}
              />
              <div className="drills-div">Single Scaffolding</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/Scaf/2.png"
                alt="powrtools"
                onClick={() => handleClick("/Scaf/2.png")}
              />
              <div className="drills-div">Double Scaffolding</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/Scaf/3.jpeg"
                alt="powrtools"
                onClick={() => handleClick("/Scaf/3.jpeg")}
              />
              <div className="drills-div"> Cantilever Scaffolding</div>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="/Scaf/4.png"
                alt="powrtools"
                onClick={() => handleClick("/Scaf/4.png")}
              />
              <div className="drills-div">Suspended Scaffolding</div>
            </div>
            <div className="power-img lt-animate-left">
              <img
                src="/Scaf/5.jpg"
                alt="powrtools"
                onClick={() => handleClick("/Scaf/5.jpg")}
              />
              <div className="drills-div">Ladder or Trestle Scaffolding</div>
            </div>

            <div className="power-img lt-animate-left">
              <img
                src="/Scaf/6.webp"
                alt="powrtools"
                onClick={() => handleClick("/Scaf/6.webp")}
              />
              <div className="drills-div">Mobile Scaffolding</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Scafolding;
