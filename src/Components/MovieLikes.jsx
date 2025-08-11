import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { IconButton } from "@mui/material";
import { useState } from "react";
function MovieLikes() {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  return (
    <div className="Movie-like-btn">
      <IconButton color="primary" onClick={() => setLike(like + 1)}>
        <ThumbUpIcon />
        {like}
      </IconButton>
      <IconButton color="error" onClick={() => setdisLike(dislike + 1)}>
        <ThumbDownIcon />
        {dislike}
      </IconButton>
    </div>
  );
}
export { MovieLikes };
