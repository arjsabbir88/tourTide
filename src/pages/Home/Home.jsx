import React from 'react'
import HomePageBanner from './HomeBanner'
import { Link, useLoaderData } from 'react-router'
import TourCard from '../../Component/TourCard/TourCard';

const Home = () => {

  const tourCardData = useLoaderData();
  // console.log(tourCardData);

  return (
    <div className='my-5'>
      <div>
        <HomePageBanner/>
      </div>
      <div className='my-10'>
        <div className='text-center my-6'>
          <h1 className='text-3xl text-[#00224D] font-bold'>Welcome to TourTide</h1>
          <p className='text-xs'>Your journey begins here – unforgettable adventures, handpicked for every traveler.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {
            tourCardData.map(tourCard => <TourCard key={tourCard._id} tourCard={tourCard}></TourCard>)
          }
        </div>
        <div className='w-full my-10 flex justify-center'>
          <Link to='/all-packages' className='btn btn-soft bg-[#FF204E] hover:bg-[#00224D] hover:text-white'>Show All</Link>

        </div>
      </div>
    </div>
  )
}

export default Home
