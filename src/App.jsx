import { Route, Routes, Link, Navigate, useParams } from "react-router";
import { ColorGame } from "./ColorGame";
import Counter from "./Counter";
import { MovieList } from "./MovieList";
import { AddMovieList } from "./AddMovieList";
import { Home } from "./Home";
import "./styles.css";
import UserList from "./UserList";
import { AddMovie } from "./AddMovie";
import { useState } from "react";
import { INITIAL_MOVIES } from "./INITIAL_MOVIES";
import { MovieLikes } from "./MovieLikes";

export default function App() {
  const [movieList, setMovieList] = useState(INITIAL_MOVIES);

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
          path="movielist"
          element={
            <AddMovieList movieList={movieList} setMovieList={setMovieList} />
          }
        />
        <Route
          path="movies/:id"
          element={
            <MovieDetails movieList={movieList} />
          }
        />
        {/*<Route path="movies" element={<MovieDetails />} />}   {/*id*/}
        <Route path="films" element={<Navigate to="/AddMovieList" replace />} />
        <Route path="colorgame" element={<ColorGame />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
function MovieDetails({ movieList }) {
  const { id } = useParams();
  console.log(movieList);
  const movie = movieList[id];
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
    </div>
  );
}
