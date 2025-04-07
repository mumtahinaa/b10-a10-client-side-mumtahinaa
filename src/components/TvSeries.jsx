import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TvSeries = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://b10-a10-server-side-mumtahinaa.vercel.app/tv-shows")
      .then((res) => res.json())
      .then((data) => setShows(data.slice(0, 6)));
  }, []);
  return (
    <div className="bg-black py-10 px-6">
      {/* Title and See More Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#9B5DE5]">Tv Shows</h2>
        <button
          onClick={() => navigate("/tv-shows")}
          className="text-[#00A8E8] font-semibold hover:underline"
        >
          See All TvShows →
        </button>
      </div>

      {/* Movie List - Responsive Grid */}
      <div className="flex xl:gap-6 lg:gap-3 md:gap-4  gap-2 overflow-x-auto scrollbar-hide">
        {shows.map((show) => (
          <div
            key={show._id}
            className="relative min-w-[350px] bg-[#1E1E1E] rounded-md shadow-lg transform transition duration-300 hover:scale-105 group"
          >
            {/* show Poster */}
            <img
              src={show.image}
              alt={show.title}
              className="w-full h-56 object-fit rounded-lg"
            />

            {/* show Info (Hidden Initially, Visible on Hover) */}
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center  text-start p-4 rounded-lg">
              <h3 className="text-[#9B5DE5] text-lg font-bold">{show.name}</h3>
              <p className="text-gray-400 text-sm">{show.genre}</p>
              <p className="text-gray-400 text-sm">
                Season:{show.season} | Episodes:{show.episodes}
              </p>

              <p className="text-gray-400 text-sm">
                🎬 {show.releaseYear} | {show.rating}
              </p>

              <button
                onClick={() => navigate(`/tvshow-details/${show._id}`)}
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

export default TvSeries;
