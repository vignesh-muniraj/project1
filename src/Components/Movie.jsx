import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import InfoIcon from "@mui/icons-material/Info";
import { IconButton } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { useNavigate } from "react-router";
import { MovieLikes } from "./MovieLikes";

function Movie({
  movie: { name, poster, rating, summary, id },
  deleteBtn,
  editBtn,
}) {
  const [show, setShow] = useState(true);
   console.log("re-rendring: Movie");
  const ratingStyle = {
    color: rating >= 8 ? "green" : "crimson",
  };
  const navigate = useNavigate();
  return (
    <div className="movie-container">
      <img src={poster} alt={name} />
      <div className="content-container">
        <div className="title-container">
          <div>
            <h1>{name}</h1>
          </div>
          <div className="buttons">
            <IconButton color="primary" onClick={() => setShow(!show)}>
              {show ? <ExpandLessSharpIcon /> : <ExpandMoreSharpIcon />}
            </IconButton>

            <IconButton
              color="primary"
              onClick={() => navigate("/movies/" + id)}
            >
              <InfoIcon />
            </IconButton>
          </div>
        </div>
        <div className="rating">
          <Rating
            name="half-rating-read"
            defaultValue={rating/2}
            precision={0.1}
            readOnly
          />
        </div>

        {show && <p>{summary}</p>}

        <div className="like-delete">
          <div>
            <MovieLikes />
          </div>
          <div className="edit-delete">
            {editBtn}
            {deleteBtn}
          </div>
        </div>
      </div>
    </div>
  );
}
export { Movie };

