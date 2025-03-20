import React from 'react';
import image1 from '../assets/gladiator-ii.jpg'
import image2 from '../assets/orion.jpg'
import image3 from '../assets/paradise.jpg'

const Banner = () => {

   
  return (
    <div className="relative w-full h-[500px] bg-black">
      {/* Carousel Container */}
      <div className="carousel w-full h-full ">
        
        {/* Gladiator 2 */}
        <div id="slide1" className="carousel-item relative w-full h-full ">
          <img
            src={image1}
            className="w-full h-full object-fill opacity-70"
            alt="Gladiator 2 Banner"
          />
          <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/80 to-transparent lg:pl-10">
            <div className="ml-10 text-white max-w-md">
              <h1 className="text-4xl font-[Bebas_Neue] text-[#9B5DE5]">
                GLADIATOR <span className="text-[#00A8E8]">2</span>
              </h1>
              <p className="text-sm text-gray-300 mt-2">
                <strong>Release Year:</strong> 2024 <br />
                <strong>IMDb Rating:</strong> ⭐ 8.2/10 <br />
                <strong>Genre:</strong> Action, Drama, History
              </p>
              <p className="mt-3 text-gray-400">
                The long-awaited sequel to Gladiator follows the story of Lucius as he steps into the arena once more.
              </p>
              {/* <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 text-white bg-[#9B5DE5] hover:bg-[#00A8E8] rounded-lg shadow-lg transition-all">
                  Add to Favorites
                </button>
                <button className="px-4 py-2 text-white bg-[#00A8E8] hover:bg-[#9B5DE5] rounded-lg shadow-lg transition-all">
                  See Details
                </button>
              </div> */}
            </div>
          </div>
          <a href="#slide3" className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-3xl">❮</a>
          <a href="#slide2" className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-3xl">❯</a>
        </div>

        {/* Paradise 2025 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={image3}
            className="w-full h-full object-cover opacity-70"
            alt="Paradise 2025 Banner"
          />
          <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/80 to-transparent lg:pl-10">
            <div className="ml-10 text-white max-w-md">
              <h1 className="text-4xl font-[Bebas_Neue] text-[#9B5DE5]">
                PARADISE <span className="text-[#00A8E8]">2025</span>
              </h1>
              <p className="text-sm text-gray-300 mt-2">
                <strong>Release Year:</strong> 2025 <br />
                <strong>IMDb Rating:</strong> ⭐ 7.9/10 <br />
                <strong>Genre:</strong> Sci-Fi, Thriller
              </p>
              <p className="mt-3 text-gray-400">
                In a dystopian future, a scientist discovers a hidden utopia—but at what cost?
              </p>
              {/* <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 text-white bg-[#9B5DE5] hover:bg-[#00A8E8] rounded-lg shadow-lg transition-all">
                  Add to Favorites
                </button>
                <button className="px-4 py-2 text-white bg-[#00A8E8] hover:bg-[#9B5DE5] rounded-lg shadow-lg transition-all">
                  See Details
                </button>
              </div> */}
            </div>
          </div>
          <a href="#slide1" className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-3xl">❮</a>
          <a href="#slide3" className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-3xl">❯</a>
        </div>

        {/* Orion and the Dark */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={image2}
            className="w-full h-full object-fill opacity-70"
            alt="Orion and the Dark Banner"
          />
          <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/80 to-transparent lg:pl-10">
            <div className="ml-10 text-white max-w-md">
              <h1 className="text-4xl font-[Bebas_Neue] text-[#9B5DE5]">
                ORION AND THE <span className="text-[#00A8E8]">DARK</span>
              </h1>
              <p className="text-sm text-gray-300 mt-2">
                <strong>Release Year:</strong> 2024 <br />
                <strong>IMDb Rating:</strong> ⭐ 7.5/10 <br />
                <strong>Genre:</strong> Animation, Fantasy
              </p>
              <p className="mt-3 text-gray-400">
                A young boy named Orion faces his fears in a thrilling animated journey through the unknown.
              </p>
              {/* <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 text-white bg-[#9B5DE5] hover:bg-[#00A8E8] rounded-lg shadow-lg transition-all">
                  Add to Favorites
                </button>
                <button className="px-4 py-2 text-white bg-[#00A8E8] hover:bg-[#9B5DE5] rounded-lg shadow-lg transition-all">
                  See Details
                </button>
              </div> */}
            </div>
          </div>
          <a href="#slide2" className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-3xl">❮</a>
          <a href="#slide1" className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-3xl">❯</a>
        </div>

      </div>

      {/* Dots for Navigation */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        <a href="#slide1" className="w-4 h-4 bg-white rounded-full hover:bg-[#9B5DE5]"></a>
        <a href="#slide2" className="w-4 h-4 bg-white rounded-full hover:bg-[#9B5DE5]"></a>
        <a href="#slide3" className="w-4 h-4 bg-white rounded-full hover:bg-[#9B5DE5]"></a>
      </div>
    </div>
  );
};

export default Banner;


