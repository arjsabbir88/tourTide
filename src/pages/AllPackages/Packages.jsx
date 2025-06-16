import React from 'react'
import { Link } from 'react-router';

const Packages = ({packageData}) => {
    // console.log(packageData)

    const {tourName,price,photo,guidePhoto,guideName,email,duration,details,destination,departureLocation,date,contact,_id} = packageData;


  return (
    <div className="card bg-base-100 shadow-2xl/30">
  <figure>
    <img className='h-70 w-full'
      src={photo}
      alt="photo" />
  </figure>
  <div className="card-body">
    <div>
        <h2 className="card-title">
      {tourName}
    </h2>
      <div className="badge badge-secondary inline px-2 text-xs md:text-lg">Date: {date}</div>
    </div>
    <p>{details}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Form: {departureLocation}</div>
      <div className="badge badge-outline">To: {destination}</div>
    </div>
    <div className='my-5'>
        <Link to={`/all-packages/details/${_id}`} className='w-full btn btn-soft btn-circle bg-[#FF204E] hover:text-white hover:bg-[#00224D] text-black'>See Details</Link>
    </div>
  </div>
</div>
  )
}

export default Packages
