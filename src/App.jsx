import { Route, Routes, Link, Navigate, useParams, useNavigate } from "react-router";
import { ColorGame } from "./ColorGame";
import Counter from "./Counter";
import { MovieList } from "./MovieList";
import { AddMovieList } from "./AddMovieList";
import { Home } from "./Home";
import "./styles.css";
import UserList from "./UserList";
import { AddMovie } from "./AddMovie";
import { useEffect, useState } from "react";
import { INITIAL_MOVIES } from "./INITIAL_MOVIES";
import { MovieLikes } from "./MovieLikes";

export default function App() {
  // const [movieList, setMovieList] = useState(INITIAL_MOVIES);
  
  return (
    <div className="App">
      <nav className="nav-bar">
        <Link to="/home">Home</Link>
        <Link to="/userList">UserList</Link>
        <Link to="/movieList">MovieList</Link>
        <Link to="/colorgame">ColorGame</Link>
      </nav>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="userList" element={<UserList />} />
        <Route
          path="movieList"
          element={
            // <AddMovieList movieList={movieList} setMovieList={setMovieList} />
            <AddMovieList  />
          }
        />
        <Route
          path="movies/:id"
          element={
            // <MovieDetails movieList={movieList} />
            <MovieDetails />
          }
        />
        {/*<Route path="movies" element={<MovieDetails />} />}   {/*id*/}
        <Route path="films" element={<Navigate to="/movieList" replace />} />
        <Route path="colorgame" element={<ColorGame />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
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
      <button onClick={()=> navigate("/movielist")}>Back</button>
    </div>
  );
}
