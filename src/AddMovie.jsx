import { useState } from "react";
import { MovieLikes } from "./MovieLikes"; // If you have a like component
import { useNavigate } from "react-router";

export function AddMovie({ movie: { name, poster, rating, summary }, id }) {
  const [show, setShow] = useState(false);

  const ratingStyle = {
    color: rating >= 8 ? "green" : "crimson",
  };
  const navigate = useNavigate();
  return (
    <div className="movie-container">
      <div>
        <img src={poster} alt={name} />
        <div className="title-container">
          <h1>{name}</h1>
          <h2 style={ratingStyle}>{rating}</h2>
        </div>
        <button onClick={() => setShow(!show)}>Toggle</button>
        <button onClick={() => navigate("/movies/" + id)}>Trailer</button>

        {show && <p>{summary}</p>}
        <MovieLikes />
      </div>
    </div>
  );
}
