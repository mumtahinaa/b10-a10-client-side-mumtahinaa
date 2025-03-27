import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TvDetail = () => {

    const show = useLoaderData();
    return (
        <div className="bg-black min-h-screen flex justify-center items-center px-6 py-10">
        <div className=" shadow-lg rounded-lg max-w-5xl w-full flex flex-col lg:flex-row p-6 gap-6">
          
          {/* Left - Show Image */}
          <div className="w-full lg:w-2/5">
            <img
              src={show.image}
              alt={show.name}
              className="w-full h-[500px] object-fit rounded-lg shadow-lg"
            />
          </div>
  
          {/* Right - Show Details */}
          <div className="w-full lg:w-3/5 text-white flex flex-col justify-center">
            <h2 className="text-4xl text-[#9B5DE5] font-bold">{show.name}</h2>
            <p className="text-gray-300 text-lg mt-2">{show.genre}</p>
            <p className="text-gray-400 mt-2"> Release Date: {show.releaseDate}</p>
            <p className="text-gray-400"> Rating: {show.rating}</p>
            <p className="text-gray-400"> Season {show.season} | {show.episodes} Episodes</p>
  
            <div className="mt-4">
              <p className="text-white font-semibold"> Actors:</p>
              <p className="text-gray-300">{show.actors.join(", ")}</p>
            </div>
  
            <div className="mt-4">
              <p className="text-white font-semibold">Directors:</p>
              <p className="text-gray-300">{show.directors.join(", ")}</p>
            </div>
  
            <p className="text-gray-300 mt-4">{show.description}</p>
  
           
          </div>
        </div>
      </div>
    );
};

export default TvDetail;