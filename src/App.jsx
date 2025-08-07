import { Route, Routes, Link, Navigate, useParams } from "react-router";
import { ColorGame } from "./ColorGame";
import Counter from "./Counter";
import { MovieList } from "./MovieList";
import { AddMovieList } from "./AddMovieList";
import { Home } from "./Home";
import "./styles.css";
import UserList from "./UserList";
import { AddMovie } from "./AddMovie";

export default function App() {
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
        <Route path="AddMovieList" element={<AddMovieList />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="films" element={< Navigate to="/AddMovieList" replace />} />
        <Route path="ColorGame" element={<ColorGame />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
function MovieDetails(){
  
  const {id} = useParams();
  return(
    <h1>{id}</h1>
  )
}
