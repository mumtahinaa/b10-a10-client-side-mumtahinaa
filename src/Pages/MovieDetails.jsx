import React from 'react';

const MovieDetails = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
        <div className="bg-[#1E1E1E] p-8 rounded-2xl shadow-xl w-full max-w-4xl flex flex-col md:flex-row gap-6 backdrop-blur-md">
          {/* Movie Poster */}
          <div className="w-full md:w-1/2">
            <img src={movie.poster} alt={movie.title} className="w-full rounded-lg shadow-lg" />
          </div>
  
          {/* Movie Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold text-[#9B5DE5]">{movie.title}</h2>
              <p className="text-gray-400 text-lg">{movie.genre} | {movie.duration} mins | {movie.releaseYear}</p>
              <p className="mt-3 text-gray-300">{movie.summary}</p>
  
              {/* Rating */}
              <div className="mt-4 flex items-center gap-2">
                <span className="text-yellow-400 text-2xl">⭐</span>
                <span className="text-lg">{movie.rating} / 5</span>
              </div>
            </div>
  
            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={handleDelete}
                className="w-full bg-red-600 hover:bg-red-800 text-white font-bold py-2 rounded-lg transition-transform transform hover:scale-105"
              >
                Delete Movie
              </button>
              <button
                onClick={handleAddToFavorites}
                className="w-full bg-[#9B5DE5] hover:bg-[#00A8E8] text-white font-bold py-2 rounded-lg transition-transform transform hover:scale-105"
              >
                Add to Favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MovieDetails;