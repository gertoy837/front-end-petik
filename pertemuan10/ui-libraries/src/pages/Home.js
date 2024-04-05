import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
