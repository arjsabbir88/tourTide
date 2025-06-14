import Lottie from 'lottie-react'
import React from 'react'
import loader from './Loader.json'


const Loader = () => {
  return (
    <div className='max-h-screen w-3xl mx-auto'>
      <Lottie animationData={loader}></Lottie>
    </div>
  )
}

export default Loader
