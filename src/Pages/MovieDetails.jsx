import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../Utility/AuthProvider";

const MovieDetails = () => {
  const { user } = useContext(AuthContext);

  const movie = useLoaderData();

  
  const [suggestedMovies, setSuggestedMovies] = useState([]);
  //    const [afterDelete,setAfterDelete]= useState()
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://b10-a10-server-side-mumtahinaa.vercel.app/movies")
      .then((res) => res.json())
      .then((data) => {
        const filteredMovies = data.filter((m) => m._id !== movie._id);
        setSuggestedMovies(filteredMovies.slice(0, 5));
      });
  }, [movie]);

  const handleDelete = (_id) => {
   
    Swal.fire({
      title: "Are you sure?",
      text: "This movie will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9B5DE5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b10-a10-server-side-mumtahinaa.vercel.app/movies/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your movie has been deleted.",
                icon: "success",
              });
              navigate("/movies");
            }
          });
      }
    });
  };

  const handleFavorite = () => {
    const favoriteData = {
      Poster: movie.poster,
      Title: movie.title,
      Genre: movie.genre,
      Duration: movie.duration,
      ReleaseYear: movie.releaseYear,
      Rating: movie.rating,
      User: user.email,
    };

 

    fetch("https://b10-a10-server-side-mumtahinaa.vercel.app/favorite", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favoriteData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Added!", "Movie added to favorites!", "success");
          
        }
      });
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-black text-white lg:p-6 md:p-6  p-2">
      <div className=" p-8   w-full max-w-6xl backdrop-blur-md flex md:flex-col flex-col lg:flex-row gap-6">
        {/* Left Side - Movie Details */}
        <div className="lg:w-2/3 md:w-full w-full  ">
          <img
            src={movie.poster}
            alt={movie.title}
            className="lg:w-1/2 md:w-full w-full h-[400px] object-fit rounded-lg shadow-lg"
          />

          <h2 className="text-4xl font-bold text-[#9B5DE5] mt-4">
            {movie.title}
          </h2>
          <p className="text-gray-400 text-lg mt-1">
            {movie.genre} | {movie.duration} mins | {movie.releaseYear}
          </p>

          {/* Rating Stars */}
          <div className="mt-4 flex items-center gap-2">
            <Rating
              initialValue={movie.rating}
              readonly
              size={25}
              className="rating-container"
            />
            <span className="text-lg">{movie.rating} / 5</span>
          </div>

          {/* Movie Summary */}
          <p className="mt-4 text-gray-300 text-lg">{movie.summary}</p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
            <button
              onClick={() => handleDelete(movie._id)}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 bg-red-600 hover:bg-red-800 text-white font-bold py-2 rounded-lg transition-transform transform hover:scale-105"
            >
              Delete Movie
            </button>
            <button
              onClick={handleFavorite}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 bg-[#9B5DE5] hover:bg-[#00A8E8] text-white font-bold py-2 rounded-lg transition-transform transform hover:scale-105"
            >
              Add to Favorite
            </button>
            <button
              onClick={() => navigate(`/update-movie/${movie._id}`)}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 bg-[#00A8E8] hover:bg-[#9B5DE5] text-white font-bold py-2 rounded-lg transition-transform transform hover:scale-105"
            >
              Update Movie
            </button>
          </div>
        </div>

        {/* Right Side - Suggested Movies */}
        <div className="lg:w-1/3 md:w-full w-full  bg-[#252525] lg:p-6 md:p-6 p-3 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#9B5DE5] mb-4">
            You May Also Like
          </h3>
          <div className="space-y-4">
            {suggestedMovies.map((suggested) => (
              <div
                key={suggested._id}
                className="flex items-center gap-4 cursor-pointer hover:bg-[#333] p-2 rounded-lg transition"
                onClick={() => navigate(`/movie-details/${suggested._id}`)}
              >
                <img
                  src={suggested.poster}
                  alt={suggested.title}
                  className="w-16 h-24 rounded-md shadow"
                />
                <div>
                  <h4 className="text-white font-bold">{suggested.title}</h4>
                  <p className="text-gray-400 text-sm">{suggested.genre}</p>
                  <div className="flex items-center gap-1">
                    <Rating
                      initialValue={suggested.rating}
                      readonly
                      size={15}
                      fillColor="#9B5DE5"
                      className="rating-container"
                    />
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
