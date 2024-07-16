import React from "react";
import './Home.css';
import Navbar from "../Common/Navbar";
import Slider from "./Slider";
import BestSellers from "../Common/BestSellers";
import BSellers from '../JSON/BestSellers.json';
import NewArrivals from '../JSON/NewArrivals.json';
import HomeImage from "./HomeImage";
import Footer from "../Common/Footer";

const Home = () => {
  const BestSellerCartStyle = {
    width: '20vw',
    height: '60vh'
  };

  const NewArrivalsCartStyle = {
    width: '28vw',
    height: '70vh'
  };

  return (
    <div className="Home">
      <Navbar />
      <Slider />
      <BestSellers imgs={NewArrivals} perPage={3} head="NEW ARRIVALS" className="new-arrivals-cart" style={NewArrivalsCartStyle} />
      <HomeImage />
      <BestSellers imgs={BSellers} perPage={4} head="EXPLORE BEST SELLERS" className="best-sellers-cart" style={BestSellerCartStyle} />
      <Footer />
    </div>
  );
};

export default Home;
