import React from 'react'
import NavBar from '../Component/NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Component/Footer/Footer'

const Layout = () => {
  return (
    <div >
      <div className='w-full sticky top-0 z-50 '>
        <NavBar/>

      </div>
        <div className='max-w-full mx-auto my-4'>
        <Outlet/>
        </div>
        <div className='bg-neutral'>
          <Footer/>

        </div>
    </div>
  )
}

export default Layout
