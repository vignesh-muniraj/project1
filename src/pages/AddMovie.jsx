import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { object, number, string, date, ObjectSchema } from "yup";
import { useFormik } from "formik";

const MovieSchema = object({
  name: string().required("Please Enter Title"),
  poster: string().required("Give Poster Link").url().min(4),
  rating: number().required("Rating 0 - 10").min(0).max(10),
  summary: string().required("Smmary About Movie").min(5),
  trailer: string().required("Give Trailer Link").url().min(4),
});

export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: MovieSchema,
      onSubmit: (newMovie) => {
        // console.log("Cool", newMovie);
        // API
        addMovie(newMovie)
      },
    });

  const navigate = useNavigate();
  const addMovie = async (newMovie) => {
    // event.preventDefault(); // no refresh
    // const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer,
    // };
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
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
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
        label="Poster"
        variant="outlined"
        name="poster"
        helperText={touched.poster && errors.poster}
        error={touched.poster && errors.poster}
      />
      

      <TextField
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Rating"
        variant="outlined"
        name="rating"
        helperText={touched.rating && errors.rating }
        error={touched.rating && errors.rating }
      />

      <TextField
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
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
        label="Trailer"
        variant="outlined"
        name="trailer"
        helperText={touched.trailer && errors.trailer }
        error={touched.trailer && errors.trailer}
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
