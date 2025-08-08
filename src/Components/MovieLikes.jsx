import { useState } from "react";

function MovieLikes() {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  return (
    <div className="Movie-like-btn">
      <button onClick={() => setLike(like + 1)}>❤️ {like}</button>
      <button onClick={() => setdisLike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}
export { MovieLikes };
