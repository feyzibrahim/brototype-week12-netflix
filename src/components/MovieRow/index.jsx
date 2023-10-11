import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";

const MovieRow = ({ genre }) => {
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
    <div className="overflow-y-visible">
      <p className="text-2xl font-semibold my-5">{genre.name}</p>
      <div className="flex overflow-y-visible  no-scrollbar gap-2 w-full">
        {data &&
          data.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
      </div>
    </div>
  );
};

export default MovieRow;
