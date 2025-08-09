import { useEffect, useState } from "react";
import { Movie } from "../Components/Movie";
import { useNavigate } from "react-router";
function MovieList() {
  const [movieList, setMovieList] = useState([]);

  // Data fetcing from API
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

  // Delete Movie
  const deleteBtn =async (id) => {
    console.log("Delted " + id);
    const response = await fetch(
      "https://68959014039a1a2b288f7c48.mockapi.io/movies/"+id,
      { method: "DELETE" }
    );
  const data = await response.json();
  console.log(data);
    getMovies();
  };
   // Edit Movie
    const navigate = useNavigate();

  const editBtn = (id) => {
    console.log("edited " + id);
    navigate(`/movies/edit/${id}`); 
    // getMovies();

  };

  return (
    <div>
      <div className="movie-smart">
        {movieList.map((movie, index) => (
          <Movie
            key={movie.id}
            movie={movie}
            // editBtn={<button >Edit</button>}
               editBtn={<button onClick={() => editBtn(movie.id)}>Edit</button>} 
            deleteBtn={<button onClick={()=>deleteBtn(movie.id)}>Delete</button>}
          />
        ))}
      </div>
    </div>
  );
}
export { MovieList };
