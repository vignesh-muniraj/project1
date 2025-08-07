import { useState } from "react";
import { AddMovie } from "./AddMovie";
import { useParams } from "react-router";

export function AddMovieList() {
  const defaultMovies = [
    {
      name: "Vikram",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      summary: "Black ops team hunts down masked murderers.",
    },
    {
      name: "PS2",
      poster:
        "https://static.moviecrow.com/gallery/20230317/213385-Ponniyin%20Selvan%202%20Karthi%20Trisha.jpg",
      rating: 8,
      summary: "Epic Tamil action film directed by Mani Ratnam.",
    },
  ];

  const [movieList, setMovieList] = useState(defaultMovies);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  function addNewMovies() {
    const newMovie = {
      name: name,
      poster: url,
      rating: rating,
      summary: summary,
    };
   
    setName("");
    setUrl("");
    setRating("");
    setSummary("");
    
    // setMovieList([...movieList, newMovie]);
    setMovieList(movieList.concat(newMovie));
  }
  return (
    <div>
      <div className="movie-form">
      
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Enter Movie Name"
        />
        <input
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          type="text"
          placeholder="Enter Poster URL"
        />
        <input
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          type="number"
          placeholder="Enter Rating"
        />
        <textarea
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          placeholder="Enter Summary"
        />
        <button onClick={addNewMovies}>ADD </button>
      </div>

      <div className="movie-smart">
        {movieList.map((movie) => (
          <AddMovie
            // name={movie.name}
            // poster={movie.poster}
            // rating={movie.rating}
            // summary={movie.summary}
            {...movie}
          />
        ))}
      </div>
    </div>
  );
}
