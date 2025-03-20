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

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                 path:'/',
                 element:<Home></Home>
            },
            {
                path:"/movies",
                element:<AllMovies></AllMovies>,
                loader: ()=> fetch("http://localhost:4000/movies")
            },
            {
                path:"/add-movie",
                element:<AddMovie></AddMovie>,
            },
            {
                path:"/favorites",
                element:<Favorites></Favorites>,
            },
            {
                path:"/movie-details/:id",
                element:<MovieDetails></MovieDetails>,
                loader:({params})=> fetch(`http://localhost:4000/movies/${params.id}`)
            },
            {
                path:"/update-movie",
                element:<UpdateMovie></UpdateMovie>,

            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
]);

export default router;