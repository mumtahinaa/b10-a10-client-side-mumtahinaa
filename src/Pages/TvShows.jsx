import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const TvShows = () => {
    const navigate = useNavigate();

    const tvShows = useLoaderData()
    return (
     <div className='bg-black'>
           <div className="bg-black mx-auto min-h-screen w-11/12 py-4 xl:px-6">
      <h1 className="text-3xl font-bold text-center text-[#9B5DE5] mb-6">
        Popular TV Shows
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-6 lg:gap-3 md:gap-6 gap-6 ">
        {tvShows.map((show) => (
          <div
            key={show.id}
            className="bg-[#1A1A1A] p-3 rounded-md shadow-lg border border-[#9B5DE5] flex items-center gap-4 transform transition duration-300 hover:scale-105"
          >
            <img
              src={show.image}
              alt={show.title}
              className="w-1/2 h-48 object-fill rounded-lg"
            />
            <div className="w-1/2">
              <h2 className="text-[#9B5DE5] xl:text-2xl lg:text-xl text-2xl font-bold font-bebas">
                {show.name}
              </h2>
              <p className="text-white xl:text-sm lg:text-xs text-sm font-pacifico">{show.genre}</p>
              <p className="text-white xl:text-sm lg:text-xs text-sm">Release Year: {show.releaseYear}</p>
              <p className="text-white xl:text-sm lg:text-xs text-sm">Season: {show.season}</p>
              <p className="text-white xl:text-sm lg:text-xs text-sm">Episodes: {show.episodes}</p>
              <p className="text-yellow-400 xl:text-sm lg:text-xs text-sm font-bold">{show.rating}</p>
              <button
                onClick={() => navigate(`/tvshow-details/${show._id}`)}
                className="mt-4 w-full py-2 xl:text-base lg:text-sm text-base bg-[#00A8E8] text-black font-bold rounded-lg shadow-md transition hover:bg-[#9B5DE5] hover:text-white"
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

export default TvShows;