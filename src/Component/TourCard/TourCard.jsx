import React from 'react';
import { Link } from 'react-router';

const TourCard = ({ tourCard }) => {
    // console.log(tourCard)

    const {_id,tourName,photo,guidePhoto,guideName,duration,date,price,email} = tourCard;
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src={photo}
        alt={tourName}
        className="w-full h-52 object-cover"
      />

      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-gray-800">{tourName}</h2>

        <div className="flex items-center space-x-3">
          <img
            src={guidePhoto}
            alt={guideName}
            className="w-10 h-10 rounded-full object-cover border"
          />
          <div>
            <span className="text-[#00224D] font-medium">{guideName}</span>
          <p className='text-xs mt-[-5px]'>{email}</p>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          <p><span className="font-semibold">Duration:</span> {duration}</p>
          <p><span className="font-semibold">Departure:</span> {date}</p>
          <p><span className="font-semibold">Price:</span> ${price}</p>
        </div>

        <Link to={`/package/details/${_id}`} className="w-full hover:bg-[#00224D] font-bold hover:text-white py-2 px-4 rounded-md bg-[#FF204E] transition hover:cursor-pointer">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
