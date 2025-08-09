import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function EditMovie() {
  const { id } = useParams(); // Get movie ID from URL
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  

  // Fetch movie details by ID
  async function getMovieByid() {
      const response = await fetch(`https://68959014039a1a2b288f7c48.mockapi.io/movies/${id}`);
      const data = await response.json();
      setName(data.name);
      setPoster(data.poster);
      setRating(data.rating);
      setSummary(data.summary);
    }
    useEffect(() => {
    getMovieByid();
  }, [id]);

  // Update movie
  async function upDate(event) {
    //  event.preventDefault();
    await fetch(`https://68959014039a1a2b288f7c48.mockapi.io/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, poster, rating, summary }),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/movieList"); // Go back to movie list
  }

  return (
    <form onSubmit={upDate} className="edit-movie-form">
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Movie Name"
      />
      <input
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Poster URL"
      />
      <input
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        placeholder="Rating"
      />
      <textarea
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        placeholder="Summary"
      />
      <button type="submit">Save</button>
      </form>
  );
}

export { EditMovie };
