import React ,{useEffect}from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import "../style/Lt.css";
import "../style/Animate.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Footer from "./Footer";
function Thermal() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Header />
      <Nav />
      <div className="lt-contianer">
        <div className="lt">L&T</div>
        <div className="lt-inner ">
          <div className="thermal lt-animate-left opacs">
            <Link to="/ltContent">
              <img src="../LT/thermal.avif" alt="" />
            </Link>
            <div className="lt-animate-right">
              <Fade left> Thermal gas & Power Turbin</Fade>
            </div>
          </div>
          <div className="refinery lt-animate-top">
            <Link to="/ltContent">
              <img src="../LT/refinery.jpg" alt="" />
            </Link>
            <div className="">
              <Flip right>Refinery</Flip>
            </div>
          </div>
          <div className="steel lt-animate-right">
            <Link to="/ltContent">
              <img src="../LT/steel.avif" alt="" />
            </Link>
            <div className="lt-animate-left">
              <Fade right>Steel Plant</Fade>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Thermal;
