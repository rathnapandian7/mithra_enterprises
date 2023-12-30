import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import "../style/Refinery.css";
function Refinery() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="ref-container">
        <div className="ref-main">
          <ul>
            <li>
              <img src="/front-img/1.jpg" alt="" />
            </li>
            <li>
              <img src="/front-img/2.jpg" alt="" />
            </li>
            <li>
              <img src="/front-img/3.jpg" alt="" />
            </li>
            <li>
              <img src="/front-img/4.jpg" alt="" />
            </li>
            <li>
              <img src="/front-img/6.jpg" alt="" />
            </li>
            <li>
              <img src="/front-img/7.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Refinery;
