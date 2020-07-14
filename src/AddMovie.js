import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
const AddMovie = () => {
  const [movies, setmovies] = useContext(MovieContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  let key = 3;
  function add(e) {
    e.preventDefault();
    setmovies((prev) => [...prev, { name: name, price: price, id: key }]);
    key++;
  }
  return (
    <form onSubmit={add}>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
export default AddMovie;
