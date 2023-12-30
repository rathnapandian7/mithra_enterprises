import React, { useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import "../style/Pallet.css";

import Footer from "./Footer";
import { Flip } from "react-reveal";
function Pallet() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Header />
      <Nav />
      <div className="pallet-container">
        <div className="pallet-main">
          <div className="pallet-header">Pallet racking</div>
        </div>
        <div className="pallet-main1">
          <div className="pallet-content">
            <h5>
              Pallet racking is the system of grouping goods on pallets or other
              auxiliary elements to create a unit load that facilitates their
              storage and transport in the different phases of the supply chain.
            </h5>
            <h5>
              Pallet loads play a key role in almost all the logistic stages of
              the company, in both their handling inside the warehouse and in
              the transport stages.
            </h5>
            <h5>
              There is a wide variety of types of pallets according to their
              dimensions or manufacturing material; however, the vast majority
              comply with standard measurements for which both industrial
              racking and forklifts and the rest of the tools and machinery
              involved in their handling are designed.
            </h5>
          </div>
        </div>
        <div className="pallet-advantage">
          <div className="advantages">
            <h2>Function of pallet System</h2>
            <p>
              Industrial racking systems are metal structures designed to
              support the goods in a warehouse or industrial facility. The
              different types of industrial racking are a key element in the
              smooth functioning of a warehouse and play a central role in the
              logistics and supply chain operations of companies.
            </p>
          </div>
          <div className="advantages1">
            <h2>Advantages of pallet System</h2>
            <ul>
              <li>Optimisation of loading and unloading times</li>
              <li>Compacting of goods and better use of available space</li>
              <li>Greater safety in transport of products</li>
              <li>Greater flexibility for their transport and handling</li>
              <li>Simplicity for stock and inventory control</li>
            </ul>
          </div>
        </div>
        <Flip right>
          <div className="paller-types">
            <div className="type-header">Types</div>
            <div className="type">
              <div className="type-div">
                <img src="../pallet/pushback.jpg" alt="" />
                <div className="content-div1">
                  <h3>Push back Pallet</h3>
                </div>
              </div>
              <div className="type-div">
                <img src="../pallet/compact.jpg" alt="" />{" "}
                <div className="content-div1">
                  <h3>Compact Pallet</h3>
                </div>
              </div>
              <div className="type-div">
                <img src="../pallet/mobile.jpg" alt="" />
                <div className="content-div1">
                  <h3>Mobile racking pallet</h3>
                </div>
              </div>
            </div>
          </div>
        </Flip>
      </div>
      <Footer />
    </div>
  );
}

export default Pallet;
