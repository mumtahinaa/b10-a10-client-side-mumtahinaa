import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://b10-a10-server-side-mumtahinaa.vercel.app/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.slice(0, 6));
      });
  }, []);

  return (
    <div className="bg-black py-10 px-6">
      {/* Title and See More Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#9B5DE5]">Featured Movies</h2>
        <button
          onClick={() => navigate("/movies")}
          className="text-[#00A8E8] font-semibold hover:underline"
        >
          See All Movies →
        </button>
      </div>

      {/* Movie List - Responsive Grid */}
      <div className="flex xl:gap-6 lg:gap-3 md:gap-4  gap-2 overflow-x-auto scrollbar-hide">
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="relative min-w-[185px] bg-[#1E1E1E] rounded-md shadow-lg transform transition duration-300 hover:scale-105 group"
          >
            {/* Movie Poster */}
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-80 object-cover rounded-lg"
            />

            {/* Movie Info (Hidden Initially, Visible on Hover) */}
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center  text-start p-4 rounded-lg">
              <h3 className="text-[#9B5DE5] text-lg font-bold">
                {movie.title}
              </h3>
              <p className="text-gray-400 text-sm">{movie.genre}</p>
              <p className="text-gray-400 text-sm">
                🎬 {movie.releaseYear} | ⭐ {movie.rating}
              </p>
              <p className="text-gray-400 text-sm">{movie.duration} min</p>
              <button
                onClick={() => navigate(`/movie-details/${movie._id}`)}
                className="mt-4 w-full py-2 bg-[#00A8E8] text-black font-bold rounded-lg shadow-md transition hover:bg-[#9B5DE5] hover:text-white"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
