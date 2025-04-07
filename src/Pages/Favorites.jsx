import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Utility/AuthProvider";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://b10-a10-server-side-mumtahinaa.vercel.app/favorite/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFavoriteMovies(data);
      });
  }, [user]);

  const handleDeleteFavorite = (_id) => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "This movie will be removed from your favorites!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9B5DE5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b10-a10-server-side-mumtahinaa.vercel.app/favorite/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Movie removed from favorites!", "success");

              const remaining = favoriteMovies.filter(
                (movie) => movie._id !== _id
              );
              setFavoriteMovies(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="w-full max-w-7xl">
        <h2 className="text-4xl font-bold text-[#9B5DE5] mb-6 text-center">
          Your Favorite Movies
        </h2>

        {favoriteMovies.length === 0 ? (
          <p className="text-center text-gray-400 text-2xl">
            No favorite movies added yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteMovies.map((movie) => (
              <div
                key={movie._id}
                className="bg-[#252525] p-4 rounded-lg shadow-lg"
              >
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-64 object-fill rounded-md mb-4"
                />
                <h3 className="text-xl font-bold text-[#9B5DE5]">
                  {movie.Title}
                </h3>
                <p className="text-gray-400">
                  {movie.Genre} | {movie.Duration} mins | {movie.ReleaseYear}
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <Rating
                    initialValue={movie.Rating}
                    readonly
                    size={20}
                    className="rating-container"
                  />
                  <span className="text-sm">{movie.Rating} / 5</span>
                </div>

                <button
                  onClick={() => handleDeleteFavorite(movie._id)}
                  className="mt-4 bg-red-600 hover:bg-red-800 text-white font-bold py-2 w-full rounded-lg transition-transform transform hover:scale-105"
                >
                  Delete Favorite
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
