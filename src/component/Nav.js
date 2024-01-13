import React from "react";
import "../style/Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navmenu">
      <div className="logo-cont">
        <div className="logo">
          <img src="/logo2.jpg" alt="logo" />
          <div className="companyName">
            <div className="div1">mithra</div>
            <div className="div2">Engineering & Enterprises</div>
          </div>
        </div>
      </div>
      <div className="menu-container">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" className="about">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
            <ul className="submenu">
              {/* <li> */}
              <li>
                <Link to="/powertools">power Tools</Link>
              </li>
              <li>
                <Link to="/lt">Thermal gas & Power turbin</Link>
              </li>
              <li>
                <Link to="/safetytools">Industrial Safety Equipments</Link>
              </li>
              <li>
                <Link to="/storage">Storage Solutions</Link>
              </li>
              <li>
                <Link to="/refinery">Refinery</Link>
              </li>
              <li>
                <Link to="/steels">Steel</Link>
              </li>
              <li>
                <Link to="/refinery">Scaffolding</Link>
                <ul className="submenu1">
                  <li>
                    <Link to="/rent">Rental&Sales</Link>
                  </li>
                </ul>
              </li>
              
            </ul>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
}

export default Nav;
