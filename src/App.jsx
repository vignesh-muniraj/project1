import { Link, Navigate, Route, Routes, useNavigate } from "react-router";
import { ColorGame } from "./pages/ColorGame";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";
import { MovieList } from "./pages/MovieList";
import UserList from "./pages/UserList";
import "./styles.css";
import { AddMovie } from "./pages/AddMovie";
import { EditMovie } from "./pages/EditMovie";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { LoginUser } from "./pages/LoginUser";

export default function App() {
   const navigate = useNavigate();
  return (
    // <div>
    //   <nav>
    //     <ul>
          // <li><Link to="/home">Home</Link></li>
          // <li><Link to="/userList">Users</Link></li>
          // <li><Link to="/movieList">Movies</Link></li>
          // <li><Link to="/addMovie">AddMovie</Link></li>
          // <li><Link to="/colorgame">ColorGame</Link></li>
    //     </ul>
    //   </nav>
    
  <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/userList")}>
            Users
          </Button>
          <Button color="inherit" onClick={() => navigate("/movieList")}>
            Movies
          </Button>
          <Button color="inherit" onClick={() => navigate("/addMovie")}>
            Add Movie
          </Button>
          <Button color="inherit" onClick={() => navigate("/colorgame")}>
            ColorGame
          </Button>
           <Button color="inherit" onClick={() => navigate("/loginUser")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="userList" element={<UserList />} />
          <Route path="movieList" element={<MovieList />} />
          <Route path="addMovie" element={<AddMovie />} />
          <Route path="/movies/edit/:id" element={<EditMovie />} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="films" element={<Navigate to="/movieList" replace />} />
          <Route path="colorgame" element={<ColorGame />} />
          <Route path="login" element={<LoginUser />} />
          <Route path="/" element={<Home />} />
        </Routes>
      
    </div>
  );
}
