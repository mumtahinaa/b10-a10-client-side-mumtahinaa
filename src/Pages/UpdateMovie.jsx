import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { AuthContext } from "../Utility/AuthProvider";
import Swal from "sweetalert2";

const UpdateMovie = () => {
  const { user } = useContext(AuthContext);
  const movie = useLoaderData();
  const { _id } = movie;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    setValue("rating", rate);
  };

  const onSubmit = (data) => {
    if (!rating) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a rating!",
      });
      return;
    }

    const updatedMovie = { ...data, rating, userEmail: user?.email };

    fetch(`https://b10-a10-server-side-mumtahinaa.vercel.app/movies/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((res) => res.json())
      .then((data) => {
       
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Movie updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          reset();
          setRating(0);
          setValue("rating", 0); // Explicitly reset rating in form
        }
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#000000] p-6">
      <div className="w-full max-w-lg p-8 bg-opacity-90 bg-[#1E1E1E] rounded-lg shadow-xl backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center text-[#9B5DE5] mb-2">
          Update Movie
        </h2>
        <p className="text-center text-gray-400 mb-6">
          🎥 Modify movie details below.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Movie Poster URL */}
          <div>
            <label className="text-white block mb-1">Movie Poster URL</label>
            <input
              type="text"
              className="input input-bordered w-full bg-transparent text-white border-[#9B5DE5] focus:border-[#00A8E8] placeholder-gray-400"
              {...register("poster", {
                required: "Movie poster URL is required",
              })}
            />
            {errors.poster && (
              <p className="text-red-500 text-sm">{errors.poster.message}</p>
            )}
          </div>

          {/* Movie Title */}
          <div>
            <label className="text-white block mb-1">Movie Title</label>
            <input
              type="text"
              className="input input-bordered w-full bg-transparent text-white border-[#9B5DE5] focus:border-[#00A8E8] placeholder-gray-400"
              {...register("title", { required: "Movie title is required" })}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Genre */}
          <div>
            <label className="text-white block mb-1">Genre</label>
            <select
              className="select select-bordered w-full text-white border-[#9B5DE5] focus:border-[#00A8E8]"
              {...register("genre", { required: "Select a genre" })}
            >
              <option className="text-black" value="">
                Select Genre
              </option>
              <option className="text-black" value="Comedy">
                Comedy
              </option>
              <option className="text-black" value="Sci-fi">
                Sci-fi
              </option>
              <option className="text-black" value="Drama">
                Drama
              </option>
              <option className="text-black" value="Horror">
                Horror
              </option>
              <option className="text-black" value="Action">
                Action
              </option>
              <option className="text-black" value="Animation">
                Animation
              </option>
              <option className="text-black" value="Romance">
                Romance
              </option>
            </select>
            {errors.genre && (
              <p className="text-red-500 text-sm">{errors.genre.message}</p>
            )}
          </div>

          {/* Duration */}
          <div>
            <label className="text-white block mb-1">Duration (Minutes)</label>
            <input
              type="number"
              className="input input-bordered w-full bg-transparent text-white border-[#9B5DE5] focus:border-[#00A8E8] placeholder-gray-400"
              {...register("duration", { required: "Duration is required" })}
            />
            {errors.duration && (
              <p className="text-red-500 text-sm">{errors.duration.message}</p>
            )}
          </div>

          {/* Release Year */}
          <div>
            <label className="text-white block mb-1">Release Year</label>
            <select
              className="select select-bordered w-full bg-transparent text-white border-[#9B5DE5] focus:border-[#00A8E8]"
              {...register("releaseYear", {
                required: "Select a release year",
              })}
            >
              <option className="text-black" value="">
                Select Year
              </option>
              <option className="text-black" value="2025">
                2025
              </option>
              <option className="text-black" value="2024">
                2024
              </option>
              <option className="text-black" value="2023">
                2023
              </option>
              <option className="text-black" value="2022">
                2022
              </option>
              <option className="text-black" value="2021">
                2021
              </option>
              <option className="text-black" value="2020">
                2020
              </option>
            </select>
            {errors.releaseYear && (
              <p className="text-red-500 text-sm">
                {errors.releaseYear.message}
              </p>
            )}
          </div>

          {/* Rating */}
          <div>
            <label className="text-white">Your Rating:</label>
            <div className="flex items-center space-x-2 rating-container">
              <Rating
                allowFraction
                onClick={handleRating}
                initialValue={rating}
                ratingValue={rating}
                showTooltip
              />
            </div>
          </div>

          {/* Summary */}
          <div>
            <label className="text-white block mb-1">Summary</label>
            <textarea
              className="textarea textarea-bordered w-full bg-transparent text-white border-[#9B5DE5] focus:border-[#00A8E8] placeholder-gray-400"
              {...register("summary", { required: "Summary is required" })}
            ></textarea>
            {errors.summary && (
              <p className="text-red-500 text-sm">{errors.summary.message}</p>
            )}
          </div>

          {/* Update Button */}
          <button className="w-full py-2 rounded-lg bg-[#9B5DE5] text-white font-semibold text-lg hover:bg-[#00A8E8] transition duration-300 transform hover:scale-105">
            Update Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
