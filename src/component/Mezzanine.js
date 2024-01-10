import React, { useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function Mezzanine() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/request", { state: { src: e } });
  };
  return (
    <div>
      <Header />
      <Nav />
      <div className="pallet-container">
        <div className="pallet-main">
          <div className="pallet-header">Mezzanine racking</div>
        </div>
        <div className="pallet-main1">
          <div className="pallet-content">
            <h5>
              Mezzanine floor racking systems let your company optimize the
              vertical space of a warehouse by doubling or tripling the usable
              surface area.
            </h5>
            <h5>
              Adding mezzanine work platforms can be the most cost-efficient way
              to increase warehouse storage space without the expense of a
              building expansion.
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
            <h2>Function of Mazzanine System</h2>
            <p>
              Warehouse mezzanine systems are a cost effective solution to add
              additional capacity to a warehouse or distribution center by
              utilizing vertical space. They are typically more affordable than
              building renovations and can adjust as your operations grow.
            </p>
          </div>
          <div className="advantages1">
            <h2>Advantages of Mazzanine System</h2>
            <ul>
              <li>Installation is quick, clean and staightforward</li>
              <li>
                Custom designs fit any pre-built warehouse layout and budget
              </li>
              <li>
                Flooring options like chipboard, metal covered chipboard,
                slotted or metal grid
              </li>
              <li>
                Compatible with a variety of shelving or industrial storage
                systems
              </li>
            </ul>
          </div>
        </div>

        <div className="paller-types">
          <div className="type-header">Types</div>
          <div className="type">
            <div className="type-div">
              <img
                src="../pallet/pushback.jpg"
                alt=""
                onClick={() => handleClick("../pallet/pushback.jpg")}
              />
              <div className="content-div1">
                <h3>Rack Mezzanine</h3>
              </div>
            </div>
            <div className="type-div">
              <img
                src="../pallet/compact.jpg"
                alt=""
                onClick={() => handleClick("../pallet/compact.jpg")}
              />
              <div className="content-div1">
                <h3>Shelving Mezzanine</h3>
              </div>
            </div>
            <div className="type-div">
              <img
                src="../pallet/mobile.jpg"
                alt=""
                onClick={() => handleClick("../pallet/mobile.jpg")}
              />
              <div className="content-div1">
                <h3>Free Standing Mezzanines</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mezzanine;
