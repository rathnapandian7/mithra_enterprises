import React, { useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
function Steels() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <Nav />
      <div className="powercontent">Steels</div>
      <div className="product-container">
        <div></div>
        <div className="product-inner-left animate-left">
          <div className="div-outer ">
            <img src="../steels/8.jpg" alt="{img.alt}" />
          </div>
          <div className="div-outer ">
            <img src="../steels/9.avif" alt="{img.alt}" />
          </div>
          <div className="div-outer ">
            <img src="../steels/10.jpg" alt="{img.alt}" />
          </div>
        </div>
        <div className="product-inner-right animate-right">
          <div className="div-outer">
            <img src="../steels/4.jpg" alt="{img.alt}" />
          </div>
          <div className="div-outer">
            <img src="../steels/5.jpg" alt="{img.alt}" />
          </div>
          <div className="div-outer">
            <img src="../steels/7.jpg" alt="{img.alt}" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Steels;
