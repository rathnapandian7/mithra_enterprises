import React, { useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import "../style/Refinery.css";
import Footer from "./Footer";
function Refinery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <Nav />
      <div className="powercontent">Refinery</div>
      <div className="product-container">
        <div></div>
        <div className="product-inner-left animate-left">
          <div className="div-outer ">
            <img src="../Refi/1.webp" alt="{img.alt}" />
          </div>
          <div className="div-outer ">
            <img src="../Refi/2.webp" alt="{img.alt}" />
          </div>
          <div className="div-outer ">
            <img src="../Refi/3.jpg" alt="{img.alt}" />
          </div>
        </div>
        <div className="product-inner-right animate-right">
          <div className="div-outer">
            <img src="../Refi/4.avif" alt="{img.alt}" />
          </div>
          <div className="div-outer">
            <img src="../Refi/6.jpg" alt="{img.alt}" />
          </div>
          <div className="div-outer">
            <img src="../Refi/7.jpg" alt="{img.alt}" />
          </div>
        </div>
        <div className="product-inner-left animate-left">
          <div className="div-outer ">
            <img src="../Refi/8.jpg" alt="{img.alt}" />
          </div>
          <div className="div-outer ">
            <img src="../Refi/9.jpg" alt="{img.alt}" />
          </div>
          <div className="div-outer ">
            <img src="../Refi/1.webp" alt="{img.alt}" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Refinery;
