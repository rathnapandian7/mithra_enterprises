import React from "react";
import "../style/About.css";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";
function About() {
  return (
    <div>
      <Header />
      <Nav />
      <section className="about-container">
        <div className="about-div-container">
          <div className="abt-cpy">
            <h1>About Company</h1>
          </div>
          <div className="abt-profile">
            <h1>Company Profile</h1>
          </div>
          <div className="abt-content">
            <p>
              Mithra Engineering & Enterprises Tools Pvt Ltd was estabilished in
              the year 2018.Since its inception the factory has devoted its
              complete endeavor and delivering quality special purpose power
              tools. It has improved in its quality and customers contacts by
              generating in its profitable measures. Our components have covered
              most of the machines in its variegated application of drilling,
              tapping,boring,reaming,milling and sawing.Our machineries have
              extented its hands from local to the overseas.The company is set
              on the basic principle.
            </p>
          </div>
        </div>
        <div className="job-container">
          <div className="job-in">
            <div className="involves">
              <h1>JOB INVOLVES</h1>
            </div>
            <div className="job-content">
              <i class="far fa-arrow-alt-circle-right">
                <Slide left>
                  <h3> SITE PLANNING</h3>
                </Slide>
              </i>
              <i class="far fa-arrow-alt-circle-right">
                <Roll left>
                  <h3>
                    ERECTION AND WELDING WORK OF ELECTRO STATIC
                    PRECIPITATOR(ESP)
                  </h3>
                </Roll>
              </i>
              <i class="far fa-arrow-alt-circle-right">
                <Fade left>
                  <h3>
                    ERECTION OF EQUIPMENT AND PIPING IN COMPRESSOR AIR,FUEL
                    OIL,SERVICE SYSTEM
                  </h3>
                </Fade>
              </i>
              <i class="far fa-arrow-alt-circle-right">
                <Fade left>
                  <h3>
                    FABRICATION,ERECTION,SUPPORTING AND TESTING WORK OF LP & HP
                    PIPING
                  </h3>
                </Fade>
              </i>
              <i class="far fa-arrow-alt-circle-right">
                <Fade right>
                  <h3> FABRICATION OD CANTILEVER SUPPORTS OF CRANE BEAMS</h3>
                </Fade>
              </i>
            </div>
          </div>
        </div>
        {/* <div className="ourwrk_container">
          <div className="our_wrk_in">
            <div>OUR WORKS</div>
          </div>
          <div className="our_header">
            <div className="our_head_in">
              <div className="ref">REFINRY</div>
            </div>
            <div className="our_head_in">
              <div className="ref">THERMAL & GAS TURBIN</div>
            </div>
          </div>
          <div className="our_header_content">
            <div className="our_head_content_in">
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
            <div className="our_head_content_in">
              <div className="ref">
                <h5>
                  GSECL M/S. Larsen & Tourbo Limited., Dhuvaran ,anand
                  Gujarat(2014-2015),Value-30Lac.
                </h5>
                <h5>
                  JAPEE NIGIRIE SUPER TTEHRMAL POWER PROJECT M/S.Larsen & Turbo
                  Ltd.,Nigirie(2013-Feb 2015) value 1.5 Crore.
                </h5>
                <h5>
                  APGEN M/S.Larsen & Turbo Ltd.,MUTHUKURU ,Nellore
                  Andrha(2011-2014),Value-40Lac.
                </h5>
                <h5>
                  GMR PLlant M/S.Larsen & Turbo
                  Ltd.,Venagiri,Rajamundhry(2010-2011),Value-45Lac.
                </h5>
                <h5>
                  TATA POWER M/S.Larsen & Turbo Ltd.,Mumbai(June 2009-Feb
                  2010),Value-15Lac.
                </h5>
                <h5>
                  Vedanta Alumina Ltd (Sepco III,IPP Projects) M/S.Larsen &
                  Turbo Ltd.,JharsugudaOrissa(Feb 2008-June 2009),Value-9Crore
                </h5>
                <h5>APIL,Neyveli ,Petron,(2001-2004),Value-2 Crore.</h5>
                <h5>
                  Thermal Power Station,Neyveli,M/S.Larsen & Turbo Ltd.,
                  ECC,(1991-1993) value -5Lac{" "}
                </h5>
              </div>
            </div>
           
          </div>
        </div> */}
        <div className="space"></div>
        <div className="space"></div>
        <Footer />
      </section>
    </div>
  );
}

export default About;
