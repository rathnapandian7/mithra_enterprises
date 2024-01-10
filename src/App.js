import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Product from "./component/Product";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Lt from "./component/Lt";
import Storage from "./component/Storage";
import LtContent from "./component/LtContent";
import Pallet from "./component/Pallet";
import PushBack from "./component/PushBack";
import Mezzanine from "./component/Mezzanine";
import SafetyTools from "./component/SafetyTools";
import Thermal from "./component/Thermal";
import PowerTools from "./component/PowerTools";
import Refinery from "./component/Refinery";
import Steels from "./component/Steels";
import Request from "./component/Request";
import RentSales from "./component/RentSales";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lt" element={<Lt />} />
        <Route path="/ltContent" element={<LtContent />} />
        <Route path="/pallet" element={<Pallet />} />
        <Route path="/mezzanine" element={<Mezzanine />} />
        <Route path="/pushback" element={<PushBack />} />
        <Route path="/powertools" element={<PowerTools />} />
        <Route path="/safetytools" element={<SafetyTools />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/refinery" element={<Refinery />} />
        <Route path="/thermal" element={<Thermal />} />
        <Route path="/steels" element={<Steels />} />
        <Route path="/rent" element={<RentSales />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
