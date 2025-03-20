import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Rating } from "react-simple-star-rating";



const MovieDetails = () => {
  

   const movie = useLoaderData();

   console.log(movie);
   const [suggestedMovies, setSuggestedMovies] = useState([]);

   useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then((data) => {
        const filteredMovies = data.filter((m) => m._id !== movie._id);
        setSuggestedMovies(filteredMovies.slice(0, 4)); 
      });
  }, [movie]);

   


    return (
        <div className="min-h-screen flex items-start justify-center bg-black text-white lg:p-6 md:p-6  p-2">
        <div className=" p-8   w-full max-w-6xl backdrop-blur-md flex md:flex-col flex-col lg:flex-row gap-6">
          {/* Left Side - Movie Details */}
          <div className="lg:w-2/3 md:w-full w-full  ">
            <img src={movie.poster} alt={movie.title} className="lg:w-1/2 md:w-full w-full h-[400px] object-fit rounded-lg shadow-lg" />
  
            <h2 className="text-4xl font-bold text-[#9B5DE5] mt-4">{movie.title}</h2>
            <p className="text-gray-400 text-lg mt-1">
              {movie.genre} | {movie.duration} mins | {movie.releaseYear}
            </p>
  
            {/* Rating Stars */}
            <div className="mt-4 flex items-center gap-2">
              <Rating initialValue={movie.rating} readonly size={25} fillColor="#9B5DE5" className='rating-container' />
              <span className="text-lg">{movie.rating} / 5</span>
            </div>
  
            {/* Movie Summary */}
            <p className="mt-4 text-gray-300 text-lg">{movie.summary}</p>
  
            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                // onClick={handleDelete}
                className="w-full bg-red-600 hover:bg-red-800 text-white font-bold py-2 rounded-lg transition-transform transform hover:scale-105"
              >
                Delete Movie
              </button>
              <button
                // onClick={handleAddToFavorites}
                className="w-full bg-[#9B5DE5] hover:bg-[#00A8E8] text-white font-bold py-2 rounded-lg transition-transform transform hover:scale-105"
              >
                Add to Favorite
              </button>
            </div>
          </div>
  
          {/* Right Side - Suggested Movies */}
          <div className="lg:w-1/3 md:w-full w-full  bg-[#252525] lg:p-6 md:p-6 p-3 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#9B5DE5] mb-4">You May Also Like</h3>
            <div className="space-y-4">
              {suggestedMovies.map((suggested) => (
                <div
                  key={suggested._id}
                  className="flex items-center gap-4 cursor-pointer hover:bg-[#333] p-2 rounded-lg transition"
                  onClick={() => navigate(`/movies/${suggested._id}`)}
                >
                  <img src={suggested.poster} alt={suggested.title} className="w-16 h-24 rounded-md shadow" />
                  <div>
                    <h4 className="text-white font-bold">{suggested.title}</h4>
                    <p className="text-gray-400 text-sm">{suggested.genre}</p>
                    <div className="flex items-center gap-1">
                      <Rating initialValue={suggested.rating}  readonly size={15} fillColor="#9B5DE5"className='rating-container' />
                      <span className="text-sm">{suggested.rating} / 5</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default MovieDetails;