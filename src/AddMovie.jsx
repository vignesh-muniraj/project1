import { useState } from "react";
import { MovieLikes } from "./MovieLikes";

export function AddMovie({ name = "unknown", poster, summary, rating }) {
  const [show, setShow] = useState(true);
  // conditional styleing
  const ratingStyle = {
    color: rating > 8.5 ? "green" : "red",
  };
  // style Rendering
  const toggleStyle = {
    display: show ? "block" : "none",
  };

  return (
    <div className="movie-container">
      <div>
        <img src={poster} alt="" />
        <div className="title-container">
          <h1>{name}</h1>
          <h2 style={ratingStyle}>{rating}</h2>
        </div>
        <button onClick={() => setShow(show ? false : true)}>Toggle</button>
        {show && <p>{summary}</p>}
        <MovieLikes />
      </div>
    </div>
  );
}

// <p style={toggleStyle}>{summary}</p>
// <h2 style={{color: rating > 8.5 ? "green" : "red"}}>{rating}</h2>
{
  /* <button onClick={() => setShow(!show)}>Toggle</button> */
}
