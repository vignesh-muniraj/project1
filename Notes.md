- React
- createRoot
- <div> (App)
- App


## vite
- minification
- uglification
- backward compatable

## Export
- 1.Named export
- export const num = 2000;
- export sum()

- 2.Default Export


# :repeat(auto-fix,minmax(380px, 1fr))

```js
import { useState } from "react";
import { MovieLikes } from "./MovieLikes";

export function Movie({ name = "unknown", poster, summary, rating }) {
  const [show, setShow] = useState(true);  
  return (
    <div className="movie-container">
      <img src={poster} alt="" />
      <div className="title-container">
        <h1>{name}</h1>
        <h2 style={ratingStyle}>{rating}</h2>
        </div>
        <button onClick={() => setShow(show ? false : true)}>Toggle</button>
          <p style={toggleStyle}>{summary}</p>
          { <button onClick={() => setShow(!show)}>Toggle</button> }
          
          <MovieLikes />
          </div>
        );
      }
```


```js

import { useState } from "react";
import { MovieLikes } from "./MovieLikes";

export function Movie({ name = "unknown", poster, summary, rating }) {
  const [show, setShow] = useState(true);
  // conditional styleing
  const ratingStyle = {
    color: rating > 8.5 ? "green" : "red",
  }
 // Conditional Rendering
  const toggleStyle ={
      display:show  ? "block" : "none",
  }
  
  return (
    <div className="movie-container">
      <img src={poster} alt="" />
      <div className="title-container">
        <h1>{name}</h1>
        <h2 style={ratingStyle}>{rating}</h2>
        </div>
        <button onClick={() => setShow(!show)}>Toggle</button>  
       { show && <p>{summary}</p>}
        
        <MovieLikes />
        </div>
      );
    }
    
```

```js
import { useState } from "react";
import { MovieLikes } from "./MovieLikes";

export function Movie({ name = "unknown", poster, summary, rating }) {
  const [show, setShow] = useState(true);
  // conditional styleing
  const ratingStyle = {
    color: rating > 8.5 ? "green" : "red",
  }
  // Conditional styling
  const toggleStyle ={
      display:show  ? "block" : "none",
  }
  
  return (
    <div className="movie-container">
      <img src={poster} alt="" />
      <div className="title-container">
        <h1>{name}</h1>
        <h2 style={ratingStyle}>{rating}</h2>
        </div>
        <button onClick={() => setShow(show ? false : true)}>Toggle</button>
          <p style={toggleStyle}>{summary}</p>
       
       // conditional Rendering
         { show && <p>{summary}</p>}
        
        <MovieLikes />
        </div>
      );
    }
    
    // <h2 style={{color: rating > 8.5 ? "green" : "red"}}>{rating}</h2>
  {/* <button onClick={() => setShow(!show)}>Toggle</button> */}
```