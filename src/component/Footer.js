import React from "react";
import "../style/Footer.css";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import LightSpeed from "react-reveal/LightSpeed";
import Roll from "react-reveal/Roll";
function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="rowmain">
          <div className="rowheader">
            <Fade top>
              <div>ABOUT OUR COMPANY</div>
              <div>PRODUCTS</div>
              <div>CONTACT US</div>
              <div>SOCIAL LINKS</div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="rowcontent">
          <div>
            <Bounce top>
              <img src="/logo.png" alt="logo" className="image" />
            </Bounce>
          </div>
          <Bounce bottom>
            <div className="product">
              <i class="far fa-arrow-alt-circle-right"> Cantilever Racking</i>
              <i class="far fa-arrow-alt-circle-right"> Pallet Racking</i>
              <i class="far fa-arrow-alt-circle-right"> Mezzanine</i>
              <i class="far fa-arrow-alt-circle-right"> Automated Warehouse</i>
              <i class="far fa-arrow-alt-circle-right"> Other Systems</i>
            </div>
          </Bounce>
          <LightSpeed bottom>
            <div className="contact">
              <i class="fa fa-envelope-square"> meenquiry74@gmail.com</i>
              <i class="fa fa-phone"> 8122652043/7904757806</i>
              <i class="fas fa-map-marker-alt">
                No:1/119 GANDHI STREET,PERIYAKOTTTUMULAI,VIRUDHACHALAM
                TALUK,CUDDALORE DIST,TAMIL NADU -606103
              </i>
            </div>
          </LightSpeed>
          <Roll bottom>
            <div className="social">
              <i class="fa fa-facebook"> </i>
              <i class="fa fa-twitter"> </i>
              <i class="fa fa-youtube"> </i>
              <i class="fa fa-instagram"> </i>
            </div>
          </Roll>
        </div>
      </div>
    </div>
  );
}

export default Footer;
