import React from "react";
import NavbarAfterLogin from "../../components/NavbarAfterLogin";
import { useData } from "../../context/DataContext";
import MovieCard from "../../components/MovieCard";
import Footer from "../../components/Footer";
import { BsPlayFill, BsInfoCircle } from "react-icons/bs";
const User = () => {
  const { data } = useData(); // Fetching genres using context

  return (
    <div className="bg-zinc-900 text-white relative">
      <NavbarAfterLogin />
      <div className="relative">
        <div className="absolute top-32 px-20 mb-5 w-full h-screen z-20">
          <h1 className="font-bold text-2xl lg:text-9xl">Loki</h1>
          <h2 className="font-bold text-4xl my-3">Trending in movies</h2>
          <h3 className="font-semibold text-3xl my-3">
            Released - 2023 Sep 23
          </h3>
          <p className="w-1/2 text-xl my-3">
            Loki, the God of Mischief, steps out of his brother's shadow to
            embark on an adventure that takes place after the events of
            "Avengers: Endgame."
          </p>
          <div className="flex gap-3 mt-12">
            <button className="py-2 p-5 bg-gray-300 rounded-lg font-bold text-black flex items-center gap-2">
              <BsPlayFill />
              Play
            </button>
            <button className="py-2 p-5 bg-zinc-700 rounded-lg font-bold text-white flex items-center gap-2">
              <BsInfoCircle />
              More Info
            </button>
          </div>
        </div>
        <div className="h-screen w-full bg-[url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg')]"></div>
        <div className="bg-gradient-to-t from-zinc-900 to-transparent h-screen absolute top-0 left-0 right-0 bottom-0 z-10"></div>
      </div>
      <div className="px-12 relative z-20 pb-20">
        {data &&
          data.map((genre) => <MovieCard genre={genre} key={genre.id} />)}
      </div>
      <Footer />
    </div>
  );
};

export default User;
