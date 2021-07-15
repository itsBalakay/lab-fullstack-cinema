import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Movies(props) {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getAllTheMoviesFromTheServer`)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      });
  }, []);

  const ShowMovies = () => {
    return movies.map((movie) => {
      return (
        <div className="movieList">
          <ul>
            <li>
              <img src={movie.image} alt={movie.title} />
            </li>
            <li>{movie.title}</li>
            <li>
              <Link to={`/movie/${movie._id}`}>See More</Link>
            </li>
          </ul>
        </div>
      );
    });
  };

  return (
    <div>
      <ShowMovies />
    </div>
  );
}

export default Movies;
