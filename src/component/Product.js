import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import "../style/Product.css";
import Footer from "./Footer";
import {useNavigate } from "react-router-dom";
function Product() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/request", { state: { src: e } });
  };
 
  return (
    <div>
      <Header />
      <Nav />
      <div className="product-container">
        <div className="product-inner-left animate-left">
          <div className="div-outer ">
            <img src="../Longspan/longspan1.jpg" alt="{img.alt}" onClick={() => handleClick("../Longspan/longspan1.jpg")} />
            <div className="div-text">
              <h3 onClick={() => handleClick("../Longspan/longspan1.jpg")} >Long Span Racking</h3>
            </div>
          </div>
          <div className="div-outer ">
            <img src="../Pallet_racking/pallet1.jpg" alt="{img.alt}" onClick={() => handleClick("../Pallet_racking/pallet1.jpg")}/>
            <div className="div-text">
              <h3 onClick={() => handleClick("../Pallet_racking/pallet1.jpg")} >Pallet Racking</h3>
            </div>
          </div>
          <div className="div-outer ">
            <img src="../Mezzanine/mezz2.webp" alt="{img.alt}" onClick={() => handleClick("../Mezzanine/mezz2.webp")}/>
            <div className="div-text">
              <h3 onClick={() => handleClick("../Mezzanine/mezz2.webp")}>Mezzanine Racking</h3>
            </div>
          </div>
        </div>
        <div className="product-inner-right animate-right">
          <div className="div-outer">
            <img src="../Pushback/pushback1.jpg" alt="{img.alt}" onClick={() => handleClick("../Pushback/pushback1.jpg")}/>
            <div className="div-text">
              <h3 onClick={() => handleClick("../Pushback/pushback1.jpg")}>Push Back Racking</h3>
            </div>
          </div>
          <div className="div-outer">
            <img src="../Pallet_racking/pallet2.jpg" alt="{img.alt}" onClick={() => handleClick("../Pallet_racking/pallet2.jpg")}/>
            <div className="div-text">
              <h3 onClick={() => handleClick("../Pallet_racking/pallet2.jpg")}>Long Span Racking</h3>
            </div>
          </div>
          <div className="div-outer">
            <img src="../Mezzanine/mezz2.webp" alt="{img.alt}" onClick={() => handleClick("../Mezzanine/mezz2.webp")} />
            <div className="div-text">
              <h3 onClick={() => handleClick("../Mezzanine/mezz2.webp")}>Long Span Racking</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <Footer />
    </div>
  );
}

export default Product;
