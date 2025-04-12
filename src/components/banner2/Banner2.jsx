import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./banner2.css";

// import required modules
import { Autoplay, Pagination, Navigation,EffectFade } from 'swiper/modules';
import { useEffect, useState } from 'react';


const Banner2 = () => {
    const[movies,setMovies]= useState([]);

   useEffect(()=>{
    fetch('https://b10-a10-server-side-mumtahinaa.vercel.app/banner')
    .then(res=>res.json())
    .then(data=>
       {
        
        setMovies(data) 
       })
   },[]);

    return (
        <div className='w-full h-[500px] bg-black'>
           <Swiper
spaceBetween={30}
centeredSlides={true}
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}
pagination={{
  clickable: true,
}}
navigation={true}
loop={movies.length > 1}
slidesPerView={1} 
  slidesPerGroup={1}
effect='fade'
modules={[Autoplay, Pagination, Navigation]}
className="mySwiper"
>
{movies.map((movie) => (
          <SwiperSlide key={movie.id} className="relative w-full h-full">
            <img
              src={movie.image}
              className="w-full h-full object-cover opacity-70"
              alt={`${movie.title} Banner`}
            />
            <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/80 to-transparent lg:pl-10 ">
              <div className="ml-10 text-white max-w-md mr-10 ">
                <h1 className="lg:text-4xl md:text-4xl text-3xl font-[Bebas_Neue] text-[#9B5DE5]">
                  {movie.title} <span className="text-[#00A8E8]">{movie.highlight}</span>
                </h1>
                <p className="text-sm text-gray-300 mt-2 ">
                  <strong>Release Year:</strong> {movie.year} <br />
                  <strong>IMDb Rating:</strong> {movie.rating} <br />
                  <strong>Genre:</strong> {movie.genre}
                </p>
                <p className="mt-3 text-gray-400 ">{movie.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
</Swiper> 
        </div>
    );
};

export default Banner2;