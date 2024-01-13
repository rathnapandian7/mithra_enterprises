// import React, { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Nav from "./Nav";
// import "../style/Lt.css";
// import "../style/Animate.css";
// import Fade from "react-reveal/Fade";
// import Flip from "react-reveal/Flip";
// import Footer from "./Footer";
// function Thermal() {
//   useEffect(() => {
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   }, []);
//   const navigate = useNavigate();

//   const handleClick = (e) => {
//     navigate("/request", { state: { src: e } });
//   };
//   return (
//     <div>
//       <Header />
//       <Nav />
//       <div className="lt-contianer1">
//         <div className="lt1">Thermal Gas & Turbin</div>
//         <div className="lt-inner1 ">
//           <div className="thermal1 lt-animate-left opacs">
//               <img
//                 src="../LT/thermal.avif"
//                 alt="termal"
//                 onClick={() => handleClick("../LT/thermal.avif")}
//               />
//             <div className="lt-animate-right">
//               <Fade left> Thermal gas & Power Turbin</Fade>
//             </div>
//           </div>
//           <div className="refinery1 lt-animate-top">
//             <Link to="/ltContent">
//               <img
//                 src="../LT/refinery.jpg"
//                 alt=""
//                 onClick={() => handleClick("../LT/refinery.jpg")}
//               />
//             </Link>
//             <div className="">
//               <Flip right>Refinery</Flip>
//             </div>
//           </div>
//           <div className="steel1 lt-animate-right">
//             <Link to="/ltContent">
//               <img
//                 src="../LT/steel.avif"
//                 alt=""
//                 onClick={() => handleClick("../LT/steel.avif")}
//               />
//             </Link>
//             <div className="lt-animate-left">
//               <Fade right>Steel Plant</Fade>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Thermal;
