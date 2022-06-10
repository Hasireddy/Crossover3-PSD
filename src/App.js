
import React from "react";
import "./App.css";
import { Discounts } from "./components/Discounts";
import Navbar from './components/Navbar.js';
import Fusion from './components/Fusion.js';
import Destination from './components/Destination.js';
import LatestNews from './components/LatestNews.js';
import Discount from './components/Discount.js';
import Footer from './components/Footer.js';
import Clients from './components/Clients';




function App() {
  return (
    <div className="App">

      <Discounts />


      <Navbar />
      <Fusion />
      <Destination />
      <LatestNews />
      <Discount />

      <Clients />
     <Footer />


    </div>
  );
}

export default App;
