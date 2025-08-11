import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfoIcon from "@mui/icons-material/Info";
import Rating from "@mui/material/Rating";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";
import { useNavigate } from "react-router";
import { MovieLikes } from "./MovieLikes";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import { IconButton } from "@mui/material";

function Movie({
  movie: { name, poster, rating, summary, id },
  deleteBtn,
  editBtn,
}) {
  const [show, setShow] = useState(true);

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
              sx={{
                verticalAlign: "middle",
                fontSize: 30,
                "&:hover": {
                  color: "#002fffad",
                },
              }}
            >
              <InfoIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </div>
        </div>
        <div className="rating">
          <Rating name="read-only" value={rating/2} readOnly />
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
