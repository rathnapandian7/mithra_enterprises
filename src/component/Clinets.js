import React from "react";
import "../style/Clients.css";
function Clients() {
  const Images = [
    {
      src: "/clients/craftsman-logo.webp",
      alt: "banner1",
      order: "0",
    },
    {
      src: "/clients/Godrej_Logo.svg.png",
      alt: "banner2",
      order: "5",
    },
  ];

  return (
    <div className="client-container">
      <div className="client-header">OUR CLIENTS</div>
      <div className="client-main">
        <div className="client-submenu">
          <img src="/clients/craft.webp" alt="" />
        </div>
        <div className="client-submenu">
          <img src="/clients/godrej.png" alt="" />
        </div>
        <div className="client-submenu">
          <img src="/clients/craft.webp" alt="" />
        </div>
        <div className="client-submenu">
          <img src="/clients/godrej.png" alt="" />
        </div>
        
      </div>
    </div>
  );
}

export default Clients;
