import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    const handleAPICall = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWQ5NjM1Y2M2NTAzZTdhYTU2NGYzZTg2NTBiNDk3MyIsInN1YiI6IjY1MTQ0NGQwYzUwYWQyMDBlYWJjNTJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m7HcGla-ov2_oY_USNAeVQkBP6CY_V5_BzWER3ILsoM",
        },
      });
      const data = await res.json();
      setData(data.genres);
    };
    handleAPICall();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
