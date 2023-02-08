import './App.css';

import Layout from "../src/Components/Layout";
import HomePage from './Pages/HomePage';
import AboutProduct from "../src/Pages/AboutProduct";
import Footer from "../src/Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Venom from "../src/Pages/Venom";
import ContactUs from './Pages/ContactUs';
import Terminator from "../src/Pages/Terminator";





function App() {
  return (
  <div className="bg-white p-0 m-0 box-border ">
  

  <Routes>
  <Route element={<Layout />}>
  <Route path="/" element={<HomePage />} />
  <Route path="/Gravity" element={<AboutProduct/>} />
  <Route path="/Venom" element={<Venom/>} />
  <Route path="/Terminator" element={<Terminator/>} />
  <Route path="/Contact" element={<ContactUs/>} />
  </Route>
  </Routes>
  <Footer/>





  </div>
  
  );
}

export default App;
