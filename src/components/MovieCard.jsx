import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, date, desc, id }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <small>{date}</small>
      <p>{desc}</p>
      <hr />
      <Link to={`/${id}`}>See Details</Link>
    </div>
  );
};

export default MovieCard;
