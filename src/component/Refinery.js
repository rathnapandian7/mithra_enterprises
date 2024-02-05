import React, { useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Slide from "react-reveal/Slide";
import "../style/Refinery.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
function Refinery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/request", { state: { src: e } });
  };
  return (
    <div>
      <Header />
      <Nav />
      <div
        className="powercontent"
        onClick={() => handleClick("../Refi/1.webp")}
      >
       <h3>Refinery</h3>
      </div>
      <div className="refini-container">
        <div className="refin-container">
          <Fade left>
            <div className="refin-inner">
              <h1>Our Works</h1>
            </div>
          </Fade>
          <div className="refin-inner-content">
            <div className="inner-con">
              <Slide left>
                <h5>
                  L&T Hydrocarbon Engineering Limited,FCHCU(EPCC02) HPCL' VRMP
                  visakhapatnam,AP(July 2019-2020)- Value -1Crore.
                </h5>
              </Slide>
              <Fade right>
                <h5>
                  L&T Hydrocarbon Engineering Limited Jamnagar,gujarat(2015-Aug
                  2018),Value-5.9 Crore.
                </h5>
              </Fade>
              <Roll right>
                <h5>
                  L&T Hydrocarbon Engineering Limited Bathinda ,Punjab(Aprl
                  2017-mar 2018),Value-1.3 Crore.
                </h5>
              </Roll>
              <Slide left>
                <h5>
                  IOCL DCU-package M/S. Larsen & Tourbo Limited., Paradip
                  Orissa(2014-2015),Value-15Lac.
                </h5>
              </Slide>
              <Fade right>
                <h5>
                  BPCL Mumbai Refinery in M/S.PetroneEngg Construction
                  Ltd.,Mumbai (Feb 2006- Dec 2006) Value-25Lac.
                </h5>
              </Fade>
              <Fade right>
                <h5>
                  BPCL Mumbai Refinery in M/S. Larsen & Tourbo Limited.,Mumbai
                  (Feb 2003- Dec 2005) Value-1.4Crore.
                </h5>
              </Fade>
              <Fade right>
                <h5>
                  HPCL Mumbai Refinery in M/S. Larsen & Tourbo Limited.,Mumbai
                  (Aprl 2007- Feb 2008) Value-9Lac.
                </h5>
              </Fade>
              <Fade right>
                <h5>
                  HPCL,Vizag in M/S. Larsen & Tourbo Limited.,ECC (1999- 2001)
                  Value-20Lac.
                </h5>
              </Fade>
              <Fade right>
                <h5>
                  Reliance(RIL),Surat,M/S. Larsen & Tourbo Limited.,(1995-1997)
                  Value-20Lac.
                </h5>
              </Fade>
              <Fade right>
                <h5>
                  MRPL,Mangalore ,M/S. Larsen & Tourbo Limited.,ECC(1993-1995)
                  Value-15Lac.
                </h5>
              </Fade>
            </div>
          </div>
        </div>
        <div className="refini-inner-left animate-left">
          <div className="div-outer ">
            <img
              src="../Refi/1.webp"
              alt="{img.alt}"
              onClick={() => handleClick("../Refi/1.webp")}
            />
          </div>
          <div className="div-outer ">
            <img
              src="../Refi/2.webp"
              alt="{img.alt}"
              onClick={() => handleClick("../Refi/2.webp")}
            />
          </div>
          <div className="div-outer ">
            <img
              src="../Refi/3.jpg"
              alt="{img.alt}"
              onClick={() => handleClick("../Refi/3.jpg")}
            />
          </div>
          <div className="div-outer">
            <img
              src="../Refi/4.avif"
              alt="{img.alt}"
              onClick={() => handleClick("../Refi/4.avif")}
            />
          </div>
          <div className="div-outer">
            <img
              src="../Refi/6.jpg"
              alt="{img.alt}"
              onClick={() => handleClick("../Refi/6.jpg")}
            />
          </div>
          <div className="div-outer">
            <img
              src="../Refi/7.jpg"
              alt="{img.alt}"
              onClick={() => handleClick("../Refi/7.jpg")}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Refinery;
