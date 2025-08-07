import { useState } from "react";
import { MovieLikes } from "./MovieLikes"; // If you have a like component

export function AddMovie({ name, poster, rating, summary }) {
  const [show, setShow] = useState(false);

  const ratingStyle = {
    color: rating >= 8 ? "green" : "crimson",
  };

  return (
    <div className="movie-container">
      <div>
        <img src={poster} alt={name} />
        <div className="title-container">
          <h1>{name}</h1>
          <h2 style={ratingStyle}>{rating}</h2>
        </div>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <p>{summary}</p>}
        <MovieLikes />
      </div>
    </div>
  );
}
