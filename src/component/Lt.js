import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import "../style/Lt.css";
import "../style/Animate.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Footer from "./Footer";

function Lt() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(e);
  };
  return (
    <div>
      <Header />
      <Nav />
      <div className="lt-contianer1">
        <div className="lt1">Thermal Gas & Turbin</div>
        <div className="lt-inner1 ">
          <div className="thermal1 lt-animate-left opacs">
            <img
              src="../LT/thermal.avif"
              alt="termal"
              onClick={() => handleClick("../LT/thermal.avif")}
            />
            <div className="lt-animate-right">
              <Fade left> Thermal gas & Power Turbin</Fade>
            </div>
          </div>
          <div className="refinery1 lt-animate-top">
            <Link to="/refinery">
              <img src="../LT/refinery.jpg" alt=""  onClick={() => handleClick("/refinery")}/>
            </Link>
            <div className="">
              <Flip right>Refinery</Flip>
            </div>
          </div>
          <div className="steel1 lt-animate-right">
            <Link to="/steels">
              <img src="../LT/steel.avif" alt="" onClick={() => handleClick("/steels")} />
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

export default Lt;
