import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Movie } from "../Components/Movie";
import CircularProgress from "@mui/material/CircularProgress";
import { API } from "./Global";

function MovieList() {
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  // Data fetcing from API
  
  async function getMovies(searchTerm = "") {
    setIsLoading(true);
    const url = new URL(`${API}/movies`);

    if (searchTerm) {
      url.searchParams.append("search", searchTerm);
    }

    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      console.log("response "+response.status);
      if (response.status == 404) {
        throw new Error("Not found"); // manually
      }
      setMovieList(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Oops:", error);
      // setMovies([]);
      setErrorMsg(`"${searchTerm}" Movie not found ⛔`);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <CircularProgress  size="3rem"/>
      </div>
    );
  }
  

  // Delete Movie
  const deleteBtn = async (id) => {
    console.log("Delted " + id);
    const response = await fetch(
      `${API}/movies/${id}`,
      // "https://68959014039a1a2b288f7c48.mockapi.io/movies/" + id,
      { method: "DELETE" }
    );
    const data = await response.json();
    console.log(data);
    getMovies(searchTerm);   // case 2: Delete load
  };

  // Search Movie
  const searchMovies = (event) => {
    event.preventDefault();
    console.log("Searchinggg...", searchTerm);
    getMovies(searchTerm); // Case 3: Search load - ✅
  };

  return (
    <div>
      <form onSubmit={searchMovies} className="add-movie-form">
        <TextField
          label="Search"
          slotProps={{
            input: {
              startAdornment: <SearchIcon />,
            },
          }}
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
          helperText={errorMsg} // if error is passed then => true
          error={errorMsg}
        />
      </form>

      <div className="movie-smart">
        {movieList.map((movie, index) => (
          <Movie
            key={movie.id}
            movie={movie}
            editBtn={
              <IconButton
                onClick={() => navigate(`/movies/edit/${movie.id}`)}
                color="secondary"
              >
                <EditIcon />
              </IconButton>
            }
            deleteBtn={
              <IconButton onClick={() => deleteBtn(movie.id)} color="error">
                <DeleteIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
export { MovieList };
