import React from "react";
const BLANK_IMG =
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573727950031&di=c97830fe066f63778b76cf35e195f6bd&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw650h911%2F20180310%2F8fd4-fxpwyhw7772419.jpg";

function Movie({ movie }) {
    console.log(movie)
  const poster = movie.Poster ? movie.Poster : BLANK_IMG;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
}

export default Movie;
