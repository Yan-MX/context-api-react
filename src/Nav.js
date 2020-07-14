import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
const Nav = () => {
  const [movies, setmovies] = useContext(MovieContext);
  return (
    <div className="nav">
      <h3>DEV Yan</h3>
      <p>List of Movies:{movies.length}</p>
    </div>
  );
};
export default Nav;
