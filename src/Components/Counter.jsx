import { useState } from "react";

export default function Counter() {
  const [like, setLike] = useState(0);
  const [dissLike, setdishLike] = useState(0);
 
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>❤️ {like}</button>
      <button onClick={() => setdishLike(dissLike + 1)}>👎 {dissLike} </button>
      <progress id="loading" max={dissLike + like} value={like}></progress>
      {/* <h1> liked Ratio: {Math.abs((like / (like + dissLike))*100).toFixed(2)}</h1>  */}
      {/* <h3>response: {like + dissLike}</h3> */}
      {like - dissLike >= 10 ? <h2>you are awesome 🪄</h2> : ""}
    </div>
  );
}
