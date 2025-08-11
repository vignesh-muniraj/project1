import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import TextField from '@mui/material/TextField';

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setSummary("");
    setTrailer("");
  };

  const navigate = useNavigate();

  const addMovie = async (event) => {
    event.preventDefault(); // no refresh
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    // POST
    // 1. method - POST
    // 2. Data - Body & JSON
    // 3. Headers - JSON
    const response = await fetch(
      "https://68959014039a1a2b288f7c48.mockapi.io/movies",
      {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    navigate("/movieList");
    resetMovieForm();
  };

  return (
    <form onSubmit={addMovie} className="add-movie-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        id="outlined-basic"
        label="Movie Title"
        variant="outlined"
        // color="secondary"
      />
      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
        variant="outlined"
      />
      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        variant="outlined"
      />
      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
        variant="outlined"
      />
      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label="Trailer"
        variant="outlined"
      />

      {/* Task 3.2 - Add the color to the list */}
      {/* Existing Colors + New Color */}
      {/* submit -> onSubmit event triggered */}

      <Button type="submit" variant="outlined">
        ➕ Add
      </Button>
    </form>
  );
}
