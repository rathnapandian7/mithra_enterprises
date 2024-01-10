import React from "react";
import "../style/Main.css";
import { useNavigate } from "react-router-dom";
function MainSlider() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/request");
  };
  return (
    <div className="ref-container">
      <div className="ref-main">
        <div className="text-main1">
          <span></span>
        </div>
        <div className="EnquiryNow" onClick={()=>handleClick()}>Enquiry Now</div>
      </div>
    </div>
  );
}
export default MainSlider;
