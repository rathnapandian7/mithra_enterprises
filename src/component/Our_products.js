import React from "react";
import "../style/Our_products.css";
import LightSpeed from "react-reveal/LightSpeed";
import Jello from "react-reveal/Jello";
import { Link } from "react-router-dom";
function Our_products() {
  return (
    <div className="our_prod_container">
      <div className="prod-header">Products</div>
      <div className="main-cont">
        <LightSpeed right>
          <div className="prod-div">
            <img src="../Longspan/longspan1.jpg" alt="{img.alt}" />
            <div className="prod-text">
              <h3>
                <Link to="pushback">PUSH PACK RACKING</Link>
              </h3>
              <h5>
                Push-back racking is also designed for first-in, first-out
                (FIFO) inventory management, which means that you can keep your
                inventory fresh and reduce the risk of stockouts.
              </h5>
            </div>
          </div>
        </LightSpeed>
        <Jello>
          <div className="prod-div lt-animate-left">
            <img src="../Pallet_racking/pallet1.jpg" alt="{img.alt}" />
            <div className="prod-text">
              <h3>
                <Link to="/pallet">Pallet Racking</Link>
              </h3>
              <h5>
                Pallet racking is the system of grouping goods on pallets or
                other auxiliary elements to create a unit load that facilitates
                their storage and transport in the different phases of the
                supply chain.
              </h5>
            </div>
          </div>
        </Jello>
        <LightSpeed left>
          <div className="prod-div lt-animate-right">
            <img src="../Mezzanine/mezz2.webp" alt="{img.alt}" />
            <div className="prod-text">
              <h3>
                <Link to="mezzanine">Mezzanine Racking</Link>
              </h3>
              <h5>
                Mezzanine floor racking systems let your company optimize the
                vertical space of a warehouse by doubling or tripling the usable
                surface area.
              </h5>
            </div>
          </div>
        </LightSpeed>
      </div>
    </div>
  );
}

export default Our_products;
