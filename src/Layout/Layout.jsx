import React from 'react'
import NavBar from '../Component/NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Component/Footer/Footer'

const Layout = () => {
  return (
    <div className='max-w-11/12 mx-auto my-4'>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
