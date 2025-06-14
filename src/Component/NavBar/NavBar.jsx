import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
// import ''

const NavBar = () => {
  const { user,logOut,loading } = useContext(AuthContext);
  console.log(user);
  const [isDropDownOpen, setDropDownOpen] = useState();

  const toggleDropdown =()=>{
    setDropDownOpen(!isDropDownOpen)
  }


  const handleLogout =()=>{
    console.log('clicked')
    logOut()
    .then((result)=>{
      toast.success('User LoggedOut successfully');
    }).catch((error)=>{
      toast.error('Something was wrong!! try again');
    })

  }

  if(loading){
    return <Loader></Loader>
  }

  const authBtns = <>
  {user ? (
          <Link
            onClick={handleLogout}
            to="/"
            className="btn btn-soft  hover:bg-[#FF204E] rounded-xl hover:text-white"
          >
            LogOut
          </Link>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-soft hover:bg-[#FF204E] rounded-xl hover:text-white"
          >
            Login
          </Link>
        )}
        {user ? (
          <Link
            to="/auth/register"
            className="hidden btn bg-[#FF204E] btn-soft rounded-xl ml-5 text-white hover:bg-[#A0153E]"
          >
            Register
          </Link>
        ) : (
          <Link
            to="/auth/register"
            className="btn bg-[#FF204E] btn-soft rounded-xl ml-5 text-white hover:bg-[#A0153E]"
          >
            Register
          </Link>
        )}
  </>


  const links = (
    <>
      <NavLink to="/">
        <li className="px-2 hover:text-white hover:bg-[#FF204E] hover:rounded-[4px]">
          Home
        </li>
      </NavLink>

      <NavLink to="/all-packages">
        <li className="px-2 hover:text-white hover:bg-[#FF204E] hover:rounded-[4px]">
          All Packages
        </li>
      </NavLink>

      {/* it should be privet */}
      <NavLink to="/my-bookings">
        <li className="px-2 hover:text-white hover:bg-[#FF204E] hover:rounded-[4px]">
          My Bookings
        </li>
      </NavLink>

      <NavLink to="/about-us">
        <li className="px-2 hover:text-white hover:bg-[#FF204E] hover:rounded-[4px]">
          About Us
        </li>
      </NavLink>
    </>
  );

  const dropDownLinks = (
    <>
      {/* it should be privet */}
      <NavLink to="/add-package">
        <li className="px-2 text-black hover:text-white hover:bg-[#FF204E] hover:rounded-[4px]">
          Add Packages
        </li>
      </NavLink>
      {/* it should be privet */}
      <NavLink to="/managePackages">
        <li className="px-2 text-black hover:text-white hover:bg-[#FF204E] hover:rounded-[4px]">
          Manage Packages
        </li>
      </NavLink>
      <button onClick={handleLogout} className="w-full px-2 hover:text-white hover:bg-[#FF204E] hover:rounded-[4px] text-start">LogOut</button>
    </>
  );

  return (
    <div className="navbar bg-base-200 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-3 flex">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
           <ul className="flex items-center relative">
      {user && (
        <div className="mx-3 relative">
          <div
            className="avatar avatar-online w-10 rounded-full hover:cursor-pointer"
            onClick={toggleDropdown}
          >
            <img className="rounded-full"
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://cdn-icons-png.flaticon.com/128/1177/1177568.png"
              }
              alt="Profile"
            />
          </div>

          {/* Dropdown */}
          {isDropDownOpen && (
            <div className="absolute top-12 right-0 bg-white shadow-xl rounded-lg w-40 z-50">
              <ul className="text-lg text-gray-700">
                <div className="px-2 mb-4 text-center">
                  <p>{user.displayName}</p>
                  <p className="text-xs mt-[-8px]">{user.email}</p>
                </div>
                {
                  dropDownLinks
                }
              </ul>
            </div>
          )}
        </div>
      )}
    </ul>

        {
          user? '': (
          authBtns
        )
        }
      </div>
    </div>
  );
};

export default NavBar;
