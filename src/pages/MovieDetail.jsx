import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Character from "../components/Character";
import Planet from "../components/Planets";
import Starship from "../components/Starships";
import Specie from "../components/Specie";
import Vehicle from "../components/Vehicle";

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();

  const baseUrl = "https://swapi.dev/api/films";

  useEffect(() => {
    axios
      .get(`${baseUrl}/${movieId}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back to Movies</button>
      <h1>{movie?.title}</h1>
      <small>{movie?.release_date}</small>
      <p>{movie?.opening_crawl}</p>
      <div>
        <h4>Characters</h4>
        <ul>
          {movie?.characters?.map((character, index) => (
            <Character url={character} key={index} />
          ))}
        </ul>
      </div>
      <div>
        <h4>Planets</h4>
        <ul>
          {movie?.planets?.map((planet, index) => (
            <Planet url={planet} key={index} />
          ))}
        </ul>
      </div>
      <div>
        <h4>Starships</h4>
        <ul>
          {movie?.starships?.map((starship, index) => (
            <Starship url={starship} key={index} />
          ))}
        </ul>
      </div>
      <div>
        <h4>Species</h4>
        <ul>
          {movie?.species?.map((specie, index) => (
            <Specie url={specie} key={index} />
          ))}
        </ul>
      </div>
      <div>
        <h4>Vehicles</h4>
        <ul>
          {movie?.vehicles?.map((vehicle, index) => (
            <Vehicle url={vehicle} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;
