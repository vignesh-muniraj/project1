import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";

function EditMovie() {
  const { id } = useParams(); // Get movie ID from URL
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


  //  const [movie,setMovie]=useState([]);
  // Fetch movie details by ID


  useEffect(() => {
  async function getMovieByid() {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(
        `https://68959014039a1a2b288f7c48.mockapi.io/movies/${id}`
      );
      const data = await response.json();
      setName(data.name);
      setPoster(data.poster);
      setRating(data.rating);
      setSummary(data.summary);
      setTrailer(data.trailer);

      setIsLoading(false);
    } catch (error) {
      console.log("Oops" + error);
      setIsLoading(false);
      setIsError(true);
    }
  }
    getMovieByid();
  }, [id]);
  
 if(isError){
  return(
    <div>
     <h1>Try Again Some Time! ⌚</h1>
    </div>
  )
 }

  if (isLoading) {
    return (
      <div className="loader-container">
        <CircularProgress />
      </div>
    );
  }

  // Update movie
  async function upDate(event) {
    event.preventDefault();
    await fetch(`https://68959014039a1a2b288f7c48.mockapi.io/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, poster, rating, summary, trailer }),
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
      <Button type="submit" variant="outlined">
        Save
      </Button>
    </form>
  );
}

export { EditMovie };
