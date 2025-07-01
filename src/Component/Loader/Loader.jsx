import Lottie from 'lottie-react';
import React from 'react';
import loader from './Loader.json';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <Lottie animationData={loader} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
