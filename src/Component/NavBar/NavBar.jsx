import React from 'react'
import { Link, NavLink } from 'react-router'
// import ''

const NavBar = () => {

    const links = <>
        <NavLink to='/'>
            <li className='px-2 transition-all duration-100 transform hover:text-white hover:bg-[#FF204E] hover:rounded-[4px]'>Home</li>
        </NavLink>

        <NavLink to='/all-packages'>
            <li className='px-2 transition-all duration-100 transform hover:text-white hover:bg-[#FF204E] hover:rounded-[4px]'>All Packages</li>
        </NavLink>

        {/* it should be privet */}
        <NavLink to='/my-bookings'>
            <li className='px-2 transition-all duration-100 transform hover:text-white hover:bg-[#FF204E] hover:rounded-[4px]'>My Bookings</li> 
        </NavLink>

        <NavLink to='/about-us'>
            <li className='px-2 transition-all duration-100 transform hover:text-white hover:bg-[#FF204E] hover:rounded-[4px]'>About Us</li>
        </NavLink>
    </>

    const dropDownLinks = <>
    {/* it should be privet */}
        <NavLink to='/add-package'>
            <li className='px-2 transition-all duration-100 transform hover:text-white hover:bg-[#FF204E] hover:rounded-[4px]'>Add Packages</li> 
        </NavLink>
        {/* it should be privet */}
        <NavLink to='/managePackages'>
            <li className='px-2 transition-all duration-100 transform hover:text-white hover:bg-[#FF204E] hover:rounded-[4px]'>Manage Packages</li> 
        </NavLink>
        <button>LogOut</button>
    </>

  return (
    <div className="navbar bg-base-200 shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="space-x-3 flex">
      {
        links
      }
      {
        dropDownLinks
      }
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/auth/login' className="btn btn-soft hover:bg-[#FF204E] rounded-xl hover:text-white">Login</Link>
    <Link to='/auth/register' className="btn bg-[#FF204E] btn-soft rounded-xl ml-5 text-white hover:bg-[#A0153E]">Register</Link>
  </div>
</div>
  )
}

export default NavBar
