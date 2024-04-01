import React, { useState, useEffect } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import { getMovieList } from "../../api";

const Movies = () => {
  const [datas, setDatas] = useState([]);

  const handleClick = () => {
    const movie = {
      title: "Judul film 11",
      year: 2016,
      genre: "independent",
      poster: "https://picsum.photos/200/300",
    };
    setDatas([...datas, movie]);
  };

  const addMovie = (movie) => {
    setDatas([...datas, movie]);
  }

  useEffect(() => {
    getMovieList().then((result) => {
      setDatas(result);
    });
  }, []);

  console.log(datas);

  return (
    <div>
      <h2>Latest Movies</h2>
      <div className="movie-container">
        {datas.map((data) => {
          return (
            <Movie
              id={data.id}
              title={data.title}
              year={data.release_date}
              poster={data.poster_path}
            />
          );
        })}
        <button onClick={handleClick}>Add Movie</button>
      </div>
      <AddMovieForm onAddMovie={addMovie} />
    </div>
  );
};

export default Movies;
