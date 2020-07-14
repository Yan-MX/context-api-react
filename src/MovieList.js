import React, { useState } from "react";
import Movie from "./Movie";
const MovieList = () => {
  const [movies, Setmovies] = useState([
    {
      name: "Harry Pottor",
      price: "$10",
      id: 0,
    },
    {
      name: "The outpost",
      price: "12 nok",
      id: 1,
    },
    {
      name: "90 day fiance",
      price: "$0",
      id: 2,
    },
  ]);

  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};
export default MovieList;
