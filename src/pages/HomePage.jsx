import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseUrl = "https://swapi.dev/api/films";

  useEffect(() => {
    setLoading(true);
    axios
      .get(baseUrl)
      .then((result) => {
        setLoading(false);
        setMovies(result.data.results);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return loading ? (
    <h2>Getting all movies...</h2>
  ) : (
    <div className="movie-container">
      {movies.length ? (
        movies.map(({ title, release_date, opening_crawl, episode_id }) => (
          <MovieCard
            key={episode_id}
            id={episode_id}
            title={title}
            date={release_date}
            desc={opening_crawl}
          />
        ))
      ) : (
        <h2>No Movies in the Database</h2>
      )}
    </div>
  );
};

export default HomePage;
