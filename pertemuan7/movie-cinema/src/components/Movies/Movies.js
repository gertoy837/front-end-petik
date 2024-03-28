import React, { useState } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";
import AddMovieForm from "../AddMovieForm/AddMovieForm";

const Movies = () => {
  const [nama, setNama] = useState("Ucup");

  console.log(nama);

  const [datas, setDatas] = useState([
    {
      title: "Judul film 1",
      year: 2012,
      genre: "Comedy",
      poster: "https://picsum.photos/200/300",
    },
    {
      title: "Judul film 2",
      year: 2022,
      genre: "Horror",
      poster: "https://picsum.photos/200/300",
    },
    {
      title: "Judul film 3",
      year: 2015,
      genre: "Romance",
      poster: "https://picsum.photos/200/300",
    },
    {
      title: "Judul film 4",
      year: 2010,
      genre: "Action",
      poster: "https://picsum.photos/200/300",
    },
    {
      title: "Judul film 5",
      year: 2019,
      genre: "Thriller",
      poster: "https://picsum.photos/200/300",
    },
    {
      title: "Judul film 6",
      year: 2023,
      genre: "Fantasi",
      poster: "https://picsum.photos/200/300",
    },
    {
      title: "Judul film 7",
      year: 2009,
      genre: "Manhwa",
      poster: "https://picsum.photos/200/300",
    },
    {
      title: "Judul film 8",
      year: 2009,
      genre: "Manhwa",
      poster: "https://picsum.photos/200/300",
    },
    {
      title: "Judul film 9",
      year: 2009,
      genre: "Manhwa",
      poster: "https://picsum.photos/200/300",
    },
    {
      title: "Judul film 10",
      year: 2009,
      genre: "Manhwa",
      poster: "https://picsum.photos/200/300",
    }
  ]);

  const handleClick = () => {
    const movie = {
      title: "Judul film 11",
      year: 2016,
      genre: "independent",
      poster: "https://picsum.photos/200/300",
    };
    setDatas([...datas, movie]);
    setNama("Budi");
  };

  const addMovie = (movie) => {
    setDatas([...datas, movie]);
  }

  return (
    <div>
      <h2>Latest Movies</h2>
      <div className="movie-container">
        {datas.map((data) => {
          return (
            <Movie
              title={data.title}
              year={data.year}
              genre={data.genre}
              poster={data.poster}
            />
          );
        })}
        {/* <p>{nama}</p> */}
        <button onClick={handleClick}>Add Movie</button>
      </div>
      <AddMovieForm onAddMovie={addMovie} />
    </div>
  );
};

export default Movies;
