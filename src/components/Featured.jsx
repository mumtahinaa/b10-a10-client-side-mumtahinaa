import React, { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Featured = () => {
    const[movies,setMovies]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then((data) => {
        
       
        setMovies(data.slice(0, 6)); 
      });
       
    },[])
    
    return (
        <div className="bg-black py-10 px-6">
        {/* Title and See More Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#9B5DE5]">Featured Movies</h2>
          <button
            onClick={() => navigate("/movies")}
            className="text-[#00A8E8] font-semibold hover:underline"
          >
            See All Movies →
          </button>
        </div>
  
        {/* Movie List - Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {movies.map((movie) => (
            <div key={movie._id} className="min-w-[250px] bg-[#1E1E1E] rounded-lg p-4 shadow-lg">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-72 object-cover rounded-lg"
              />
              <h3 className="text-[#9B5DE5] font-bold mt-2">{movie.title}</h3>
              <p className="text-gray-400 text-sm">{movie.genre} | {movie.duration} min</p>
              <p className="text-gray-400 text-sm">🎬 {movie.releaseYear} | ⭐ {movie.rating}</p>
              <button
                onClick={() => navigate(`/movie-details/${movie._id}`)}
                className="mt-4 w-full py-2 bg-[#00A8E8] text-black font-bold rounded-lg shadow-md transition hover:bg-[#9B5DE5] hover:text-white"
              >
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Featured;