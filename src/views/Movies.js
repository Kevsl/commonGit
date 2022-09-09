import { React, useState } from "react";
import MovieCards from "../components/MovieCards";
import { getMovies } from "../services/movieService";
import "./Movies.css";

const Movies = () => {
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [resultsNumber, setResultsNumber] = useState(0);

  return (
    <div>
        <h1>Movies View</h1>

      <h2>Search for a movie</h2>

      <div className="search-form">
        <input
          type="text"
          onChange={(e) => setMovieSearch(e.target.value)}
          className=""
          placeholder="looking for a movie ?"
        />
        <button
          onClick={() => {
            getMovies(movieSearch).then((res) => {
              setMovies(res.Search);
              setResultsNumber(res.totalResults);
              console.log(movies);
            });
          }}
        >
          Rechercher
        </button>
      </div>

      {resultsNumber > 0 && <h3>{resultsNumber} results found</h3>}

      <div className="all-search-result">
        {movies.map((data) => {
          return (
            <MovieCards title={data.Title} year={data.Year} url={data.Poster} />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
