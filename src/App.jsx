import { Route, Routes, Link } from "react-router";
import { ColorGame } from "./ColorGame";
import Counter from "./Counter";
import { MovieList } from "./MovieList";
import { Home } from "./Home";
import "./styles.css";
import UserList from "./UserList";

export default function App() {
  return (

    <div className="App">
      <nav className="nav-bar">
        <Link to="/Home">Home</Link> |
        <Link to="/UserList">UserList</Link> |
        <Link to="/MovieList">MovieList</Link> |
        <Link to="/ColorGame">ColorGame</Link> |
      </nav>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="UserList" element={<UserList />} />
        <Route path="MovieList" element={<MovieList />} />
        <Route path="ColorGame" element={<ColorGame />} />
      </Routes>
    </div>
  );
}
