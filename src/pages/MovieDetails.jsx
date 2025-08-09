import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  
  async function getMovie() {
    const response = await fetch(
      "https://68959014039a1a2b288f7c48.mockapi.io/movies/" + id
    );
    const data = await response.json();
    setMovie(data);
  }
  useEffect(() => {
    getMovie();
  }, []);
  const navigate = useNavigate();

  return (
    <div className="movie-detail-container">
      <iframe
        width="100%"
        height="750"
        src={movie.trailer}
        title="AVENGERS: DOOMSDAY (2026) – FIRST TRAILER | Robert Downey Jr as Doctor Doom | Marvel Comics"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p className="movie-rating">⭐ {movie.rating}</p>
        </div>

        <p className="movie-summary">{movie.summary}</p>
      </div>
      <button onClick={() => navigate("/movielist")}>Back</button>
    </div>
  );
}
export { MovieDetails };
