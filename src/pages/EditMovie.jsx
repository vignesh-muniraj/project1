import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import { object, number, string, date, ObjectSchema } from "yup";
import { useFormik } from "formik";

const EditMovieSchema = object({
  name: string().required("Please Enter Title"),
  poster: string().required("Give Poster Link").url().min(4),
  rating: number().required("Rating 0 - 10").min(0).max(10),
  summary: string().required("Smmary About Movie").min(5),
  trailer: string().required("Give Trailer Link").url().min(4),
});

function EditMovie() {
  const { id } = useParams(); // Get movie ID from URL
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { handleSubmit, values, handleChange, handleBlur, errors, touched,setValues} =
    useFormik({
      initialValues: {
        name:"",
        poster:"",
        rating:"",
        summary:"",
        trailer: "",
      },
      validationSchema: EditMovieSchema,
      onSubmit: (updatedMovie) => {
        // console.log("Cool", newMovie);
        // API
        upDate(updatedMovie)
      },
    });

  useEffect(() => {
  async function getMovieByid() {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(
        `https://68959014039a1a2b288f7c48.mockapi.io/movies/${id}`
      );
      const data = await response.json();
      setValues({
     name:data.name,
     poster:data.poster,
      rating:data.rating,
     summary:data.summary,
      trailer:data.trailer,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log("Oops" + error);
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
        <div className="loading">
          <CircularProgress  size="3rem"/>
        </div>
      );
    }

  // Update movie
  async function upDate(updatedMovie) {
    
    await fetch(`https://68959014039a1a2b288f7c48.mockapi.io/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/movieList"); // Go back to movie list
  }

  return (
    <form onSubmit={handleSubmit} className="edit-movie-form">
      <TextField
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        id="outlined-basic"
        label="Movie Title"
        variant="outlined"
        name="name"
        helperText={touched.name && errors.name}
        error={touched.name && errors.name }
      />

      <TextField
        value={values.poster}
         onChange={handleChange}
        onBlur={handleBlur}
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        name="poster"
        helperText={touched.poster && errors.poster}
        error={touched.poster && errors.poster }
      />
      <TextField
        value={values.rating}
         onChange={handleChange}
        onBlur={handleBlur}
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        name="rating"
        helperText={touched.rating && errors.rating}
        error={touched.rating && errors.rating }
      />
      <TextField
        value={values.summary}
       onChange={handleChange}
        onBlur={handleBlur}
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        name="summary"
        helperText={touched.summary && errors.summary}
        error={touched.summary && errors.summary }
      />
      <TextField
        value={values.trailer}
         onChange={handleChange}
        onBlur={handleBlur}
        id="outlined-basic"
        label="Trailer"trailer
        variant="outlined"
        name="trailer"
        helperText={touched.trailer && errors.trailer}
        error={touched.trailer && errors.trailer }
      />
      <Button type="submit" variant="outlined">
        Save
      </Button>
    </form>
  );
}

export { EditMovie };
