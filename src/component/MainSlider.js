import React from "react";
import "../style/Main.css";
function MainSlider() {
  const Images = [
    {
      src: "/Photo_shop/New folder/1.jpg",
      alt: "animate-slider1",
      order: "0",
    },
    {
      src: "/Photo_shop/New folder/2.jpg",
      alt: "animate-slider2",
      order: "0",
    },
    {
      src: "/Photo_shop/New folder/3.jpg",
      alt: "animate-slider3",
      order: "0",
    },
    {
      src: "/Photo_shop/New folder/4.jpg",
      alt: "animate-slider4",
      order: "0",
    },
    {
      src: "/Photo_shop/New folder/6.jpg",
      alt: "animate-slider5",
      order: "0",
    },
  ];
  return (
    <div className="ref-container">
      <div className="ref-main">
        <ul>
          <li>
            <img src="/front-img/3.jpg" alt="" />
          </li>
          <li>
            <img src="/front-img/1.jpg" alt="" />
          </li>
          <li>
            <img src="/front-img/3.jpg" alt="" />
          </li>
          <li>
            <img src="/front-img/4.jpg" alt="" />
          </li>
          <li>
            <img src="/front-img/6.jpg" alt="" />
          </li>
          <li>
            <img src="/front-img/7.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default MainSlider;
