import { useEffect, useState } from "react";
import { AddMovie } from "./AddMovie";
import { useParams } from "react-router";

// export function AddMovieList({movieList,setMovieList}) {
export function AddMovieList() {
 
  const [movieList, setMovieList] = useState([]);

   async function getMovies() {
    const response = await fetch(
      "https://68959014039a1a2b288f7c48.mockapi.io/movies"
    );
    const data = await response.json();
    setMovieList(data);
  }
  useEffect(() => {
    getMovies();
  }, []);

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, settrailer] = useState("");

  function addNewMovies() {
    const newMovie = {
      name: name,
      poster: url,
      rating: rating,
      summary: summary,
      trailer:trailer,
    };
   
    // setMovieList([...movieList, newMovie]);
    setMovieList(movieList.concat(newMovie));
    
    setName("");
    setUrl("");
    setRating("");
    setSummary("");
    settrailer("");
  }
  return (
    <div>
      <div className="add-movie-form">
      
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
        <input
          value={trailer}
          onChange={(event) => settrailer(event.target.value)}
          type="text"
          placeholder="Enter trailer"
        />
        <button onClick={addNewMovies}>ADD </button>
      </div>

      <div className="movie-smart">
        {movieList.map((movie,index) => (
          <AddMovie
            key={movie.id}
            // id={index}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}
