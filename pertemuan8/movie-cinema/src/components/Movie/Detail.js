import React from "react";
import "./Detail.css";

const Movie = (props) => {
  const { title, overview, poster } = props;
  return (
    <div className="movie1">
      <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt="title" />
      <div className="">
        <h3 className="title">{title}</h3>
        <p className="year">{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
