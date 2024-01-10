import React, { useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import "../style/Refinery.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function Refinery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/request", {state:{src:e}});
  };
  return (
    <div>
      <Header />
      <Nav />
      <div className="powercontent">Refinery</div>
      <div className="product-container">
        <div></div>
        <div className="product-inner-left animate-left">
          <div className="div-outer ">
            <img src="../Refi/1.webp" alt="{img.alt}"  onClick={() => handleClick("../Refi/1.webp")}/>
          </div>
          <div className="div-outer ">
            <img src="../Refi/2.webp" alt="{img.alt}"  onClick={() => handleClick("../Refi/2.webp")}/>
          </div>
          <div className="div-outer ">
            <img src="../Refi/3.jpg" alt="{img.alt}"  onClick={() => handleClick("../Refi/3.jpg")}/>
          </div>
        </div>
        <div className="product-inner-right animate-right">
          <div className="div-outer">
            <img src="../Refi/4.avif" alt="{img.alt}"  onClick={() => handleClick("../Refi/4.avif")}/>
          </div>
          <div className="div-outer">
            <img src="../Refi/6.jpg" alt="{img.alt}"  onClick={() => handleClick("../Refi/6.jpg")}/>
          </div>
          <div className="div-outer">
            <img src="../Refi/7.jpg" alt="{img.alt}"  onClick={() => handleClick("../Refi/7.jpg" )}/>
          </div>
        </div>
        <div className="product-inner-left animate-left">
          <div className="div-outer ">
            <img src="../Refi/8.jpg" alt="{img.alt}"  onClick={() => handleClick("../Refi/8.jpg")}/>
          </div>
          <div className="div-outer ">
            <img src="../Refi/9.jpg" alt="{img.alt}"  onClick={() => handleClick("../Refi/9.jpg")}/>
          </div>
          <div className="div-outer ">
            <img src="../Refi/1.webp" alt="{img.alt}"  onClick={() => handleClick("../Refi/1.webp")}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Refinery;
