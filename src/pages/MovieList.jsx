import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Movie } from "../Components/Movie";
import CircularProgress from "@mui/material/CircularProgress";

function MovieList() {
  const navigate = useNavigate();
  const navigate1 = useNavigate();
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Data fetcing from API
  async function getMovies(searchTerm = "") {
    setIsLoading(true);
    const url = new URL("https://68959014039a1a2b288f7c48.mockapi.io/movies");

    if (searchTerm) {
      const response = url.searchParams.append("search", searchTerm);
    }

    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();

      setMovieList(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setNotFound(true);
      console.log("OOPs", error);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  if (notFound) {
    return <h1>Not Found!</h1>;
  }

  // Delete Movie
  const deleteBtn = async (id) => {
    console.log("Delted " + id);
    const response = await fetch(
      "https://68959014039a1a2b288f7c48.mockapi.io/movies/" + id,
      { method: "DELETE" }
    );
    const data = await response.json();
    console.log(data);
    getMovies(searchTerm);
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
        />
        <p>{notFound && "Not found!"}</p>
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
