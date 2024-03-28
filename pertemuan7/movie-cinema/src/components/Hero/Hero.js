import React from "react";
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="container">
        <section className="hero">
          <div className="hero-left">
            <h2 className="hero-title">Title</h2>
            <h3 className="hero-genre">Genre : </h3>
            <p className="her0-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic
              iure porro cumque, assumenda nobis sequi quam modi quae corrupti
              provident optio, culpa consequatur nostrum repellat at, eum
              facere. Voluptas.
            </p>
            <p className="hero-button">Watch</p>
          </div>
          <div class="hero-right">
            <img className="hero-image" src="https://picsum.photos/200" alt="hero-img" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;