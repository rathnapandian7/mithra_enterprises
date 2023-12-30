import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainSlider from "./MainSlider";
import Who from "./Who";
import Clients from "./Clinets";
import Nav from "./Nav";
import Products_home from "./Products_home";
import Our_products from "./Our_products";
function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <MainSlider />
      <Our_products />
      {/* <Who /> */}
      <Products_home />
      <Clients />
      <Footer />
    </div>
  );
}

export default Home;
