import { Link, Navigate, Route, Routes } from "react-router";
import { ColorGame } from "./pages/ColorGame";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";
import { MovieList } from "./pages/MovieList";
import UserList from "./pages/UserList";
import "./styles.css";
import { AddMovie } from "./pages/AddMovie";
import { EditMovie } from "./pages/EditMovie";

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/userList">Users</Link></li>
          <li><Link to="/movieList">Movies</Link></li>
          <li><Link to="/addMovie">AddMovie</Link></li>
          <li><Link to="/colorgame">ColorGame</Link></li>
        </ul>
      </nav>

      <div className="page-content">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="userList" element={<UserList />} />
          <Route path="movieList" element={<MovieList />} />
          <Route path="addMovie" element={<AddMovie />} />
          <Route path="/movies/edit/:id" element={<EditMovie />} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="films" element={<Navigate to="/movieList" replace />} />
          <Route path="colorgame" element={<ColorGame />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
