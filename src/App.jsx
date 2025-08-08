import {
  Link,
  Navigate,
  Route,
  Routes
} from "react-router";
import { ColorGame } from "./pages/ColorGame";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";
import { MovieList } from "./pages/MovieList";
import UserList from "./pages/UserList";
import "./styles.css";

export default function App() {
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
        <Route path="movieList" element={<MovieList />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="films" element={<Navigate to="/movieList" replace />} />
        <Route path="colorgame" element={<ColorGame />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
