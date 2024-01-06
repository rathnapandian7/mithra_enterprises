import React, { useEffect } from "react";
import Nav from "./Nav";
import Header from "./Header";
import "../style/Storage.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Storage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <Nav />
      <div className="powercontent">Storage Solutions</div>
      <div className="product-container">
        <div className="product-inner-left animate-left">
          <div className="div-outer ">
            <img src="../store/11.jpg" alt="{img.alt}" />
          </div>
          <div className="div-outer ">
            <img src="../store/3.jpg" alt="{img.alt}" />
          </div>
          <div className="div-outer ">
            <img src="../store/2.jpeg" alt="{img.alt}" />
          </div>
        </div>
        <div className="product-inner-right animate-right">
          <div className="div-outer">
            <img src="../store/4.jpg" alt="{img.alt}" />
          </div>
          <div className="div-outer">
            <img src="../store/5.jpg" alt="{img.alt}" />
          </div>
          <div className="div-outer">
            <img src="../store/6.jpg" alt="{img.alt}" />
          </div>
        </div>
        <div className="product-inner-left animate-left">
          <div className="div-outer ">
            <img src="../store/7.jpg" alt="{img.alt}" />
          </div>
          <div className="div-outer ">
            <img src="../store/8.png" alt="{img.alt}" />
          </div>
          <div className="div-outer ">
            <img src="../store/9.jpg" alt="{img.alt}" />
          </div>
        </div>
        <div className="product-inner-right animate-right">
          <div className="div-outer">
            <img src="../store/10.jpg" alt="{img.alt}" />
          </div>
          <div className="div-outer">
            <img src="../store/11.jpg" alt="{img.alt}" />
          </div>
          <div className="div-outer">
            <img src="../store/12.jpg" alt="{img.alt}" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Storage;
