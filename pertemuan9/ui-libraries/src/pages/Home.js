import React from "react";
import Hero from "../components/Hero";
import Movies from "../components/Movies";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <Hero />
      <Movies />
      <Footer />
    </div>
  );
};

export default Home;
