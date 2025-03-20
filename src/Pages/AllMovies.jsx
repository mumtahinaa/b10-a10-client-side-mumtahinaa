import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";



const AllMovies = () => {
  const navigate = useNavigate();
  const movies = useLoaderData();
   

  return (
   <div className=" bg-black mx-auto">
     <div className="bg-black min-h-screen w-11/12 mx-auto py-4 xl:px-6">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div key={movie._id} className="bg-[#1A1A1A] p-3 rounded-md shadow-lg border border-[#9B5DE5] flex items-center gap-4 transform transition duration-300 hover:scale-105">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-1/2 h-64 object-cover  rounded-lg"
            />
            <div className="w-1/2 ">
              <h2 className="text-[#9B5DE5] text-2xl  font-bold font-bebas">
                {movie.title}
              </h2>
              <p className="text-white text-sm font-pacifico">{movie.genre}</p>
              <p className="text-white text-sm">Duration: {movie.duration} min</p>
              <p className="text-white text-sm">Release Year: {movie.releaseYear}</p>
              <p className="text-yellow-400 text-sm font-bold">Rating: {movie.rating}</p>
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
   </div>
  );
};

export default AllMovies;
