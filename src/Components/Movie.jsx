import { useState } from "react";
import { MovieLikes } from "./MovieLikes";
import { useNavigate } from "react-router";

function Movie({ movie: { name, poster, rating, summary, id }, deleteBtn = <button>delete</button>,editBtn}) {
  const [show, setShow] = useState(true);

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
        <div className="like-delete">
        <div><MovieLikes /></div>
        <div>
         {editBtn}
        {deleteBtn}
        </div>
       </div>
      </div>
    </div>
  );
}
export { Movie };
