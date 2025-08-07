import { useState } from "react";
import { AddMovie } from "./AddMovie";
import { useParams } from "react-router";

export function AddMovieList({movieList,setMovieList}) {
 

  // const [movieList, setMovieList] = useState(INITIAL_MOVIES);
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
   
    // setMovieList([...movieList, newMovie]);
    setMovieList(movieList.concat(newMovie));
    
    setName("");
    setUrl("");
    setRating("");
    setSummary("");
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
