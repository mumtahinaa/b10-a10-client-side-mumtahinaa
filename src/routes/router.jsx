import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllMovies from "../Pages/AllMovies";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AddMovie from "../Pages/AddMovie";
import Favorites from "../Pages/Favorites";
import MovieDetails from "../Pages/MovieDetails";
import UpdateMovie from "../Pages/UpdateMovie";
import TvShows from "../Pages/TvShows";
import TvDetail from "../Pages/TvDetail";
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/movies",
        element: <AllMovies></AllMovies>,
        loader: () =>
          fetch("https://b10-a10-server-side-mumtahinaa.vercel.app/movies"),
      },
      {
        path: "/add-movie",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/favorites",
        element: (
          <PrivateRoute>
            <Favorites></Favorites>
          </PrivateRoute>
        ),
      },
      {
        path: "/tv-shows",
        element: <TvShows></TvShows>,
        loader: () =>
          fetch("https://b10-a10-server-side-mumtahinaa.vercel.app/tv-shows"),
      },
      {
        path: "/movie-details/:id",
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b10-a10-server-side-mumtahinaa.vercel.app/movies/${params.id}`
          ),
      },
      {
        path: "/update-movie/:id",
        element: <UpdateMovie></UpdateMovie>,
        loader: ({ params }) =>
          fetch(
            `https://b10-a10-server-side-mumtahinaa.vercel.app/movies/${params.id}`
          ),
      },
      {
        path: "/tvshow-details/:id",
        element: (
          <PrivateRoute>
            <TvDetail></TvDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b10-a10-server-side-mumtahinaa.vercel.app/tv-shows/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
