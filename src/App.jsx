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
        <Link to="/Home">Home</Link> |<Link to="/UserList">UserList</Link> |
        <Link to="/AddMovieList">AddMovieList</Link> |
        <Link to="/ColorGame">ColorGame</Link> |
      </nav>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="UserList" element={<UserList />} />
        <Route
          path="movies/:id"
          element={
            <MovieDetails movieList1 ={movieList} setMovieList={setMovieList} />
          }
        />
        {/*<Route path="movies" element={<MovieDetails />} />}   {/*id*/}
        <Route path="films" element={<Navigate to="/AddMovieList" replace />} />
        <Route path="ColorGame" element={<ColorGame />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
function MovieDetails({ movieList1 }) {
  const { id } = useParams();
  console.log(movieList1.name);
  return (
   
    <div className="movie-container">
      <div>
        <img src={movieList1[id].poster} alt={movieList1[id].name} />
        <div className="title-container">
          <h1>{movieList1[id].name}</h1>
          <h2>{movieList1[id].rating}</h2>
        </div>
        <p>{movieList1[id].summary}</p>
        <MovieLikes />
      </div>
    </div>
  );
}
