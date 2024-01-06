import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav id="Headernav">
        <ul className="headermenu">
          <li>
            <i class="fa fa-phone">8122652043/7904757806</i>
          </li>
          <li>
            <i class="fa fa-envelope-square"> meenquiry74@gmail.com</i>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
