import React, { useEffect } from "react";
import Nav from "./Nav";
import Header from "./Header";
import "../style/Storage.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
function Storage() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/request", { state: { src: e } });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    // <div>
    //   <Header />
    //   <Nav />
    //   <div className="powercontent">Storage Solutions</div>

    //   <div className="product-container">

    //     <div className="menu33">
    //       <div className="product-inner-left animate-left">
    //         <div className="div-outer ">
    //           <img
    //             src="../store/11.jpg"
    //             alt="{img.alt}"
    //             onClick={() => handleClick("../store/11.jpg")}
    //           />
    //           <div>pallet Racking</div>
    //         </div>

    //         <div className="div-outer ">
    //           <img
    //             src="../store/3.jpg"
    //             alt="{img.alt}"
    //             onClick={() => handleClick("../store/3.jpg")}
    //           />
    //           <div>Heavy Duct WareHouse Racking</div>
    //         </div>
    //         <div className="div-outer ">
    //           <img
    //             src="../store/2.jpeg"
    //             alt="{img.alt}"
    //             onClick={() => handleClick("../store/2.jpeg")}
    //           />
    //           <div>Shelving Racking</div>
    //         </div>
    //       </div>
    //       <div className="product-inner-right animate-right">
    //         <div className="div-outer">

    //           <img
    //             src="../store/4.jpg"
    //             alt="{img.alt}"
    //             onClick={() => handleClick("../store/4.jpg")}
    //           />
    //           <div>PushPack Racking</div>
    //         </div>
    //         <div className="div-outer">
    //           <img
    //             src="../store/5.jpg"
    //             alt="{img.alt}"
    //             onClick={() => handleClick("../store/5.jpg")}
    //           />
    //           <div>Mazzinine Racking</div>
    //         </div>
    //         <div className="div-outer">
    //           <img
    //             src="../store/6.jpg"
    //             alt="{img.alt}"
    //             onClick={() => handleClick("../store/6.jpg")}
    //           />
    //           <div>Mobile Pallet Racking</div>
    //         </div>
    //       </div>
    //       <div className="product-inner-left animate-left">
    //         <div className="div-outer ">
    //           <img
    //             src="../store/7.jpg"
    //             alt="{img.alt}"
    //             onClick={() => handleClick("../store/7.jpg")}
    //           />
    //           <div>Warehouse Storage System</div>
    //         </div>
    //         <div className="div-outer ">
    //           <img
    //             src="../store/8.png"
    //             alt="{img.alt}"
    //             onClick={() => handleClick("../store/8.png")}
    //           />
    //           <div>PUSH-BACK WITH ROLLERS</div>
    //         </div>
    //         <div className="div-outer ">

    //           <img
    //             src="../store/9.jpg"
    //             alt="{img.alt}"
    //             onClick={() => handleClick("../store/9.jpg")}
    //           />
    //           <div>Shuttle Racking System</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="space"></div>
    //   <Footer />
    // </div>
    <section>
      <Header />
      <Nav />
      <div className="powercontent">Storage Solutions</div>
      <div className="powertools_cnt">
        <div className="sub-menu">
          <div className="powertools_nav">
            <div className="nav-content nav-menu">Industrial Safety Tools</div>

            <div
              className="nav-content"
              onClick={() => handleClick("../store/11.jpg")}
            >
              Pallet Racking <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("../store/3.jpg")}
            >
              Heavy Duct Racking <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("../store/2.jpeg")}
            >
              Shelving Racking<i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("../store/4.jpg")}
            >
              PushPack Racking<i class="far fa-arrow-alt-circle-right"></i>
            </div>

            <div
              className="nav-content"
              onClick={() => handleClick("../store/5.jpg")}
            >
              Mazzinine Racking <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("../store/6.jpg")}
            >
              Mobile Pallet Racking<i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("../store/7.jpg")}
            >
             WareHouse Storage System <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("../store/8.png")}
            >
              Push Pack With Rollers <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div
              className="nav-content"
              onClick={() => handleClick("../store/9.jpg")}
            >
              Shuttle Racking System
              <i class="far fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </div>

        <div className="sub-menu1">
          <div className="powertools_main">
            <div className="power-img lt-animate-left">
              <img
                src="../store/11.jpg"
                alt="{img.alt}"
                onClick={() => handleClick("../store/11.jpg")}
              />
              <h3>pallet Racking</h3>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="../store/3.jpg"
                alt="{img.alt}"
                onClick={() => handleClick("../store/3.jpg")}
              />
              <h3>Heavy Duct WareHouse Racking</h3>
            </div>
            <div className="power-img lt-animate-left">
              <img
                src="../store/2.jpeg"
                alt="{img.alt}"
                onClick={() => handleClick("../store/2.jpeg")}
              />
              <h3>Shelving Racking</h3>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="../store/4.jpg"
                alt="{img.alt}"
                onClick={() => handleClick("../store/4.jpg")}
              />
              <h3>PushPack Racking</h3>
            </div>
            <div className="power-img lt-animate-left">
              <img
                src="../store/5.jpg"
                alt="{img.alt}"
                onClick={() => handleClick("../store/5.jpg")}
              />
              <h3>Mazzinine Racking</h3>
            </div>
            <div className="power-img lt-animate-left">
              <img
                src="../store/6.jpg"
                alt="{img.alt}"
                onClick={() => handleClick("../store/6.jpg")}
              />
              <h3>Mobile Pallet Racking</h3>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="../store/7.jpg"
                alt="{img.alt}"
                onClick={() => handleClick("../store/7.jpg")}
              />
              <h3>Warehouse Storage System</h3>
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="../store/8.png"
                alt="{img.alt}"
                onClick={() => handleClick("../store/8.png")}
              />
              <h3>PUSH-BACK WITH ROLLERS</h3>
              
            </div>
            <div className="power-img lt-animate-right">
              <img
                src="../store/9.jpg"
                alt="{img.alt}"
                onClick={() => handleClick("../store/9.jpg")}
              />
              <h3>Shuttle Racking System</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Storage;
