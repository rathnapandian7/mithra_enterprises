import React from "react";
import "../style/Header.css";
function Header() {
  return (
    <header>
      <div className="head-cont">
        <div className="inner-head">
          <div className="mail-div"></div>
          <div className="phone-div">
            <i class="fa fa-phone">8122652043/7904757806</i>
            <i class="fa fa-envelope-square"> meenquiry74@gmail.com</i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
