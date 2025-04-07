import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const AllMovies = () => {
  const navigate = useNavigate();
  const movies = useLoaderData();
  const [search, setSearch] = useState("");
  
  const [allMovies, setAllMovies] = useState(movies);
  useEffect(() => {
    fetch(
      `https://b10-a10-server-side-mumtahinaa.vercel.app/movies?searchParams=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        
        setAllMovies(data);
      });
  }, [search]);

  return (
    <div className=" bg-black mx-auto">
      <div className="bg-black min-h-screen w-11/12 mx-auto py-4 xl:px-6  ">
        <div className="form-control mb-6 ">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            placeholder="Search by title"
            className="input input-bordered w-full lg:w-1/3 md:w-1/2 mx-auto   bg-[#2A2A2A] text-white border-[#9B5DE5] focus:border-[#00A8E8]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allMovies.length > 0 ? (
            allMovies.map((movie) => (
              <div
                key={movie._id}
                className="bg-[#1A1A1A] p-3 rounded-md shadow-lg border border-[#9B5DE5] flex items-center gap-4 transform transition duration-300 hover:scale-105"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-1/2 xl:h-64 lg:h-56 h-64 object-cover  rounded-lg"
                />
                <div className="w-1/2  ">
                  <h2 className="text-[#9B5DE5]  xl:text-2xl lg:text-xl text-2xl font-bold font-bebas">
                    {movie.title}
                  </h2>
                  <p className="text-white  xl:text-sm lg:text-xs text-sm font-pacifico">
                    {movie.genre}
                  </p>
                  <p className="text-white xl:text-sm lg:text-xs text-sm">
                    Duration: {movie.duration} min
                  </p>
                  <p className="text-white xl:text-sm lg:text-xs text-sm">
                    Release Year: {movie.releaseYear}
                  </p>
                  <p className="text-yellow-400 xl:text-sm lg:text-xs text-sm font-bold">
                    Rating: {movie.rating}
                  </p>
                  <button
                    onClick={() => navigate(`/movie-details/${movie._id}`)}
                    className="mt-4 w-full py-2 xl:text-base lg:text-sm text-base bg-[#00A8E8] text-black font-bold rounded-lg shadow-md transition hover:bg-[#9B5DE5] hover:text-white"
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-lg col-span-full text-center mt-10">
              No movies found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
