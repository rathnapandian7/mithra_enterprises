import React,{useEffect} from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Fade from "react-reveal/Fade";
import "../style/Pushback.css";
function PushBack() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Header />
      <Nav />
      <div className="pallet-container">
        <div className="pallet-main">
          <div className="pallet-header">Push pack racking</div>
        </div>
        <div className="pallet-main1">
          <div className="pallet-content">
            <h5>
              Push-back racking is a storage method that allows pallets to be
              stored from 2 to 6 deep on either side of an aisle, giving you
              higher storage density than conventional forms of racking
            </h5>
            <h5>
              Wheeled carts sit stacked at the pick aisle of each lane. A pallet
              is placed on the top cart, then to load the next pallet, the
              forklift pushes it back, exposing a cart underneath.
            </h5>
            <h5>
              The process continues until all carts are used, with the last
              pallet resting on the rails. As pallets are extracted, the rear
              pallets automatically flow forward, producing a highly effective
              process.
            </h5>
          </div>
        </div>
        <div className="pallet-advantage">
          <div className="advantages">
            <h2>Function of PUSH PACK RACKING System</h2>
            <p>
              The pushback rack system contains a series of carts that ride on
              inclined rails. Forklifts can load pallets onto the top cart, and
              as additional pallets are brought in, the first pallet is pushed
              back and the new pallet is set on top. This continues until the
              last pallet is loaded.
            </p>
          </div>
          <div className="advantages1">
            <h2>Advantages of PUSH PACK RACKING System</h2>
            <ul>
              <li>
                The ability to provide both selective storage and high-density
                storage
              </li>
              <li>
                Can offer up to 2x to 3x more storage space compared to standard
                selective rack.Push-back rack requires little to no maintenance
              </li>
              <li></li>
              <li>
                Excellent space optimization enables you to keep costs down
              </li>
            </ul>
          </div>
        </div>
        <Fade left>
          <div className="push-types">
            <div className="push-header">Types</div>
            <div className="push">
              <div className="push-div">
                <img src="../pallet/push-shuttle.jpg" alt="" />
                <div className="push-div1">
                  <h3>Push-back with shuttles</h3>
                </div>
              </div>
              <div className="push-div">
                <img src="../pallet/roller-shuttle.jpg" alt="" />{" "}
                <div className="push-div1">
                  <h3>Push-back with rollers</h3>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
}

export default PushBack;
