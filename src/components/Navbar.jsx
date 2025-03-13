import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import Logo from "./Logo";

const Navbar = ({ user, logOut }) => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//   };

  return (
    <div className="mx-auto w-full bg-black">
    <div className="navbar shadow-lg px-4 md:px-6 xl:w-11/12 lg:w-full md:w-full sm:w-full mx-auto">
      {/* Navbar Start */}
      <div className="navbar-start w-auto md:w-1/6 flex items-center">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-[#1E1E1E] rounded-box mt-3 w-52 p-2 shadow-lg">
            <NavLink to="/" className="text-[#9B5DE5] hover:text-[#00A8E8]">Home</NavLink>
            <NavLink to="/movies" className="text-[#9B5DE5] hover:text-[#00A8E8]">All Movies</NavLink>
            <NavLink to="/add-movie" className="text-[#9B5DE5] hover:text-[#00A8E8]">Add Movie</NavLink>
            <NavLink to="/favorites" className="text-[#9B5DE5] hover:text-[#00A8E8]">My Favorites</NavLink>
            <NavLink to="/contact" className="text-[#9B5DE5] hover:text-[#00A8E8]">Contact Us</NavLink>
          </ul>
        </div>
        {/* Logo */}
        <NavLink to="/" className="text-2xl md:text-3xl font-bold flex items-center">
          <span className="text-[#9B5DE5] font-[Bebas_Neue] tracking-wider">Cine</span>
          <span className="text-[#00A8E8] font-[Pacifico]">Nest</span>
        </NavLink>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex lg:ml-10 xl:ml-11">
        <ul className="menu menu-horizontal px-1 flex gap-4 md:gap-6">
          <NavLink to="/" className="text-sm md:text-base font-medium text-[#9B5DE5] hover:text-[#00A8E8]">Home</NavLink>
          <NavLink to="/movies" className="text-sm md:text-base font-medium text-[#9B5DE5] hover:text-[#00A8E8]">All Movies</NavLink>
          <NavLink to="/add-movie" className="text-sm md:text-base font-medium text-[#9B5DE5] hover:text-[#00A8E8]">Add Movie</NavLink>
          <NavLink to="/favorites" className="text-sm md:text-base font-medium text-[#9B5DE5] hover:text-[#00A8E8]">My Favorites</NavLink>
          <NavLink to="/contact" className="text-sm md:text-base font-medium text-[#9B5DE5] hover:text-[#00A8E8]">Contact Us</NavLink>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end w-5/6 md:w-5/6 flex items-center gap-3 md:gap-4">
        {/* User Profile */}
        {user && user?.email ? (
          <div className="tooltip" data-tip={user.email}>
            <img className="w-8 md:w-10 h-8 md:h-10 rounded-full hidden sm:block" src={user.photoURL} alt="User" />
          </div>
        ) : (
          <FaRegUserCircle className="text-[#00A8E8] w-8 md:w-10 h-8 md:h-10 hidden sm:block" />
        )}

        {/* Auth Buttons */}
        {user ? (
          <button onClick={logOut} className="btn btn-xs md:btn-md bg-[#9B5DE5] text-white hover:bg-[#00A8E8]">Log Out</button>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-xs md:btn-md bg-[#00A8E8] text-white hover:bg-[#9B5DE5]">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-xs md:btn-md bg-[#9B5DE5] text-white hover:bg-[#00A8E8]">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  </div>
  );
};

export default Navbar;
