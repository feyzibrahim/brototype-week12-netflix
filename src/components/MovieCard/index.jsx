import React, { useEffect, useState } from "react";

const MovieCard = ({ genre }) => {
  let [data, setData] = useState([]);

  console.log(genre.id);

  useEffect(() => {
    const handleAPICall = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWQ5NjM1Y2M2NTAzZTdhYTU2NGYzZTg2NTBiNDk3MyIsInN1YiI6IjY1MTQ0NGQwYzUwYWQyMDBlYWJjNTJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m7HcGla-ov2_oY_USNAeVQkBP6CY_V5_BzWER3ILsoM",
          },
        }
      );
      const data = await res.json();
      setData(data.results);
      console.log(data.results);
    };
    handleAPICall();
  }, []);

  return (
    <div>
      <p className="text-2xl font-semibold my-5">{genre.name}</p>
      <div className="flex overflow-x-auto no-scrollbar gap-2">
        {data &&
          data.map((movie) => {
            return (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={`${movie.title}`}
                className="w-2/12 h-32 cursor-pointer"
              />
            );
          })}
      </div>
    </div>
  );
};

export default MovieCard;
