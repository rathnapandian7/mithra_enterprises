import React from "react";
import "../style/Feature.css";
function Feature() {
  const Images = [
    {
      src: "/feature/carton.png",
      alt: "banner1",
      order: "0",
    },
    {
      src: "/feature/long-sheling.jpg",
      alt: "banner2",
      order: "5",
    },
    {
      src: "/feature/Mobile_rack.jpg",
      alt: "banner3",
      order: "3",
    },
    {
      src: "/feature/pallet.jpg",
      alt: "banner5",
      order: "4",
    },
    {
      src: "/feature/push-back.jpg",
      alt: "banner6",
      order: "1",
    },
    {
      src: "/feature/Mobile_rack.jpg",
      alt: "banner3",
      order: "3",
    },
    {
      src: "/feature/pallet.jpg",
      alt: "banner5",
      order: "4",
    },
    {
      src: "/feature/push-back.jpg",
      alt: "banner6",
      order: "1",
    },
    {
      src: "/feature/Mobile_rack.jpg",
      alt: "banner3",
      order: "3",
    },
    {
      src: "/feature/pallet.jpg",
      alt: "banner5",
      order: "4",
    },
    {
      src: "/feature/push-back.jpg",
      alt: "banner6",
      order: "1",
    },
    {
      src: "/feature/Mobile_rack.jpg",
      alt: "banner3",
      order: "3",
    },
    {
      src: "/feature/pallet.jpg",
      alt: "banner5",
      order: "4",
    },
    {
      src: "/feature/push-back.jpg",
      alt: "banner6",
      order: "1",
    },
    {
      src: "/feature/Mobile_rack.jpg",
      alt: "banner3",
      order: "3",
    },
    {
      src: "/feature/pallet.jpg",
      alt: "banner5",
      order: "4",
    },
    {
      src: "/feature/push-back.jpg",
      alt: "banner6",
      order: "1",
    },
    {
      src: "/feature/Mobile_rack.jpg",
      alt: "banner3",
      order: "3",
    },
  ];

  return (
    // <div className="container">
      <div className="slider">
        <div className="slider-track">
          {Images.map((img, ind) => (
            <div className="slide" key={ind}>
              <img src={img.src} alt="{img.alt}" />
            </div>
          ))}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Feature;
