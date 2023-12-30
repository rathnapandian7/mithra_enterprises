import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import "../style/Product.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Product() {
  const Images = [
    {
      src: "/Longspan/longspan1.jpg",
      alt: "longspanlogo",
    },
    {
      src: "/Mezzanine/mezz1.webp",
      alt: "Mezzaninelogo",
    },
    {
      src: "/Pallet_racking/pallet1.jpg",
      alt: "palletlogo",
    },
    {
      src: "/Pushback/pushback1.jpg",
      alt: "longspanlogo",
    },
    {
      src: "/Mezzanine/mezz2.webp",
      alt: "Mezzaninelogo",
    },
    {
      src: "/Pallet_racking/pallet2.jpg",
      alt: "palletlogo",
    },
  ];
  return (
    <div>
      <Header />
      <Nav />
      <div className="product-container">
        <div className="product-inner-left animate-left">
          <div className="div-outer ">
            <img src="../Longspan/longspan1.jpg" alt="{img.alt}" />
            <div className="div-text">
              <h3>
                <Link to="/pallet">Long Span Racking</Link>
              </h3>
            </div>
          </div>
          <div className="div-outer ">
            <img src="../Pallet_racking/pallet1.jpg" alt="{img.alt}" />
            <div className="div-text">
              <h3>
                <Link to="/pallet">Pallet Racking</Link>
              </h3>
            </div>
          </div>
          <div className="div-outer ">
            <img src="../Mezzanine/mezz2.webp" alt="{img.alt}" />
            <div className="div-text">
              <h3>
                <Link to="/mezzanine">Mezzanine Racking</Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="product-inner-right animate-right">
          <div className="div-outer">
            <img src="../Pushback/pushback1.jpg" alt="{img.alt}" />
            <div className="div-text">
              <h3>
                <Link to=".pushback">Push Back Racking</Link>
              </h3>
            </div>
          </div>
          <div className="div-outer">
            <img src="../Pallet_racking/pallet2.jpg" alt="{img.alt}" />
            <div className="div-text">
              <h3>
                <Link to="/pallet">Long Span Racking</Link>
              </h3>
            </div>
          </div>
          <div className="div-outer">
            <img src="../Mezzanine/mezz2.webp" alt="{img.alt}" />
            <div className="div-text">
              <h3>
                <Link to="/pallet">Long Span Racking</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
