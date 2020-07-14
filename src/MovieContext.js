import React, { useState, createContext } from "react";
export const MovieContext = createContext();

export const MovieProvider = (props) => {
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
    <MovieContext.Provider value={[movies, Setmovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
