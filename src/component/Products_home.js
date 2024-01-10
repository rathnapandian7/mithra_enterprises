import React from "react";
import "../style/Products_home.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Rotate from "react-reveal/Rotate";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";
import { Link, useNavigate } from "react-router-dom";
function Products_home() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/request", {state:{src:e}});
  };
  return (
    <div className="product_home_container">
      <div className="power_tools">
        <Fade left>
          <div className="power_content">
            <h1>Power Tools</h1>
            <p>
              Power tools are mechanical or electrical devices powered by a
              motor or battery. They are typically faster and more powerful than
              hand tools, making them ideal for larger projects. However, power
              tools can be more difficult to control than hand tools and can
              also be more expensive.
            </p>
            <div className="button-container">
              <div className="Power-btn animate-power">
                <Link to="/powertools">Read More</Link>
              </div>
            </div>
          </div>
        </Fade>
        <Flip right>
          <div className="power">
            <img
              src="/bkg_img/bkg4.png"
              alt="power tools"
              onClick={() => handleClick("/bkg_img/bkg4.png")}
            />
          </div>
        </Flip>
      </div>

      {/* safety */}
      <div className="saftey_tools">
        <Rotate top left>
          <div className="saftey_img">
            <img src="/safety/safety1.png" alt="saftey tools" onClick={() => handleClick("/safety/safety1.png")}/>
          </div>
        </Rotate>
        <Roll right>
          <div className="saftey_content">
            <h1>Industrial Safety Equipments</h1>
            <p>
              Industrial Safety is a multi-disciplinary approach to developing
              and ensuring compliance with regulatory agencies, safe working
              practices, and maintaining the health and well-being of those
              employed in a particular occupation or workplace.
            </p>
            <div className="button-container">
              <div className="Power-btn animate-power">
                <Link to="/safetytools">Read More</Link>
              </div>
            </div>
          </div>
        </Roll>
      </div>
      <div className="thermal_container">
        <Slide right>
          <div className="thermal_content">
            <h1>Thermal Gas & Power Turbin </h1>
            <p>
              A turbine is a machine that transforms rotational energy from a
              fluid that is picked up by a rotor system into usable work or
              energy. Turbines achieve this either through mechanical gearing or
              electromagnetic induction to produce electricity.
            </p>
            <div className="button-container">
              <div className="Power-btn animate-power">
                <Link to="/thermal">Read More</Link>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className="thermal">
            <img src="/safety/thermal1.jpg" alt="thermal gas" onClick={() => handleClick("/safety/thermal1.jpg")}/>
          </div>
        </Slide>
      </div>
      <div className="saftey_tools">
        <Rotate top left>
          <div className="saftey_img">
            <img src="/safety/storage.png" alt="saftey tools" onClick={() => handleClick("/safety/storage.png")}/>
          </div>
        </Rotate>
        <Roll right>
          <div className="saftey_content">
            <h1>Storage Solutions</h1>
            <p>
              In short, the industrial storage solutions you choose have a
              direct impact on order-picking productivity. Your warehouse
              shelving must fit into the facility's space itself, creating
              aisles and traffic lanes that allow order pickers to access
              contents without congestion.
            </p>
            <div className="button-container">
              <div className="Power-btn animate-power">
                <Link to="/storage">Read More</Link>
              </div>
            </div>
          </div>
        </Roll>
      </div>
      <div className="thermal_container">
        <Slide right>
          <div className="thermal_content">
            <h1>Refinery</h1>
            <p>
              An oil refinery is a facility that takes crude oil and distills it
              into various useful petroleum products such as gasoline, kerosene,
              or jet fuel. Refining is classified as a downstream operation of
              the oil and gas industry, although many integrated oil companies
              will operate both extraction and refining services.
            </p>
            <div className="button-container">
              <div className="Power-btn animate-power">
                <Link to="/refinery">Read More</Link>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className="thermal">
            <img src="../LT/refinery.jpg" alt="Refinery" onClick={() => handleClick("../LT/refinery.jpg")}/>
          </div>
        </Slide>
      </div>
      <div className="saftey_tools">
        <Rotate top left>
          <div className="saftey_img">
            <img src="../LT/steel.avif" alt="Steels" onClick={() => handleClick("../LT/steel.avif")}/>
          </div>
        </Rotate>
        <Roll right>
          <div className="saftey_content">
            <h1>Steels</h1>
            <p>
              Steel is an alloy of iron and carbon with improved strength and
              fracture resistance compared to other forms of iron. Many other
              elements may be present or added.
            </p>
            <div className="button-container">
              <div className="Power-btn animate-power">
                <Link to="/steels">Read More</Link>
              </div>
            </div>
          </div>
        </Roll>
      </div>
    </div>
  );
}

export default Products_home;
