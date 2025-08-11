import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function EditMovie() {
  const { id } = useParams(); // Get movie ID from URL
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  //  const [movie,setMovie]=useState([]);
  // Fetch movie details by ID
  async function getMovieByid() {
    const response = await fetch(
      `https://68959014039a1a2b288f7c48.mockapi.io/movies/${id}`
    );
    const data = await response.json();
    setName(data.name);
    setPoster(data.poster);
    setRating(data.rating);
    setSummary(data.summary);
    setTrailer(data.trailer);
    //  const newMovie = {
    //   name: data.name,
    //   poster: data.poster,
    //   rating: data.rating,
    //   summary: data.summary,
    //   trailer: data.trailer,
    // };
    // setMovie(newMovie);
  }
  useEffect(() => {
    getMovieByid();
  }, [id]);

  // Update movie
  async function upDate(event) {
    event.preventDefault();
    await fetch(`https://68959014039a1a2b288f7c48.mockapi.io/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, poster, rating, summary ,trailer}),
      // body: JSON.stringify(movie),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/movieList"); // Go back to movie list
  }

  return (
    <form onSubmit={upDate} className="edit-movie-form">
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
        id="outlined-basic"
        label="Poster"
        variant="outlined"
      />
      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        id="outlined-basic"
        label="Rating"
        variant="outlined"
      />
      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        id="outlined-basic"
        label="Summary"
        variant="outlined"
      />
      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
      />
            <Button type="submit" variant="outlined">Save</Button>

    </form>
  );
}

export { EditMovie };
