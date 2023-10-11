import React, { useState } from "react";

const MovieCard = ({ movie }) => {
  let [isHover, setIsHover] = useState(true);

  return (
    <div
      className="w-2/12 h-32 flex-shrink-0 cursor-pointer hover:scale-150 transition-transform duration-300 ease-in-out"
      onMouseEnter={() => setIsHover(!isHover)}
      onMouseLeave={() => setIsHover(!isHover)}
      key={movie.id}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={`${movie.title}`}
        className="-z-10"
      />
      {!isHover && (
        <div className=" pl-3 bg-black z-10">
          <p className="text-sm">{movie.title}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
