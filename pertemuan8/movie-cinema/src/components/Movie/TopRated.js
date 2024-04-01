import React from "react";
import "./Movie.css";
import { NavLink } from "react-router-dom";

const Movie = (props) => {
  const { title, genre, year, poster, id, average, count } = props;
  return (
    <div className="movie">
      <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt="title" />
      <h3 className="title">
        <NavLink to={`/detail/${id}`}>{title}</NavLink>
      </h3>
      <p className="year">{year}</p>
      <p className="genre">{genre}</p>
      <p className="genre">Reated : {average}</p>
      <p className="genre">Ranting : {count}</p>
    </div>
  );
};

export default Movie;
