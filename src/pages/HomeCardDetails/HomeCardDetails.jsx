import React, { useState, useEffect, useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { useParams } from "react-router-dom";

const HomeCardDetails = () => {

    const detailsData = useLoaderData();
    // console.log(detailsData);
    const {bookingCount,contact,created_at,date,departureLocation,destination,details,duration,email,guideName,guidePhoto,photo,price,tourName,_id} = detailsData;

    const {user} = useContext(AuthContext);

    // console.log(user)

  const displayName = user?.displayName;
  const firebaseEmail = user?.email;
  console.log(displayName,firebaseEmail)
  const [showModal, setShowModal] = useState(false);



  return (

    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Tour Image */}
      <img
        src={photo}
        alt={tourName}
        className="w-full h-80 object-cover rounded-xl shadow-lg"
      />

      {/* Title & Basic Info */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">{tourName}</h1>
        <p className="text-lg text-blue-700 font-semibold">{duration}</p>
        <p className="text-2xl text-green-600 font-bold">${price}</p>
      </div>

      {/* Guide Info */}
      <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow">
        <img
          src={guidePhoto}
          alt={guideName}
          className="w-16 h-16 rounded-full border-2 border-blue-500"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{guideName}</h3>
          <p className="text-gray-600 text-sm">📞 {contact}</p>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Package Details</h2>
        <p className="text-gray-700 leading-relaxed">{details}</p>
      </div>

      {/* Departure & Destination */}
      <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg border">
        <div>
          <p className="text-sm text-gray-500">Departure From</p>
          <p className="font-medium text-gray-800">{departureLocation}</p>
          <p className="text-sm text-gray-500">On {date}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Destination</p>
          <p className="font-medium text-gray-800">{destination}</p>
        </div>
      </div>

      {/* Booking Count */}
      <div className="text-sm text-gray-600">
        ✅ Already Booked: {bookingCount.default || 0} people
      </div>

    
      <button className="btn btn-soft bg-[#FF204E] hover:bg-[#00224D] hover:text-white px-4" onClick={()=>document.getElementById('my_modal_5').showModal()}>Book Now</button>

  
    <>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
      <form method="dialog" className="flex justify-end">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-soft bg-[#FF204E] hover:bg-[#00224D] hover:text-white">X</button>
      </form>
    <div className="mb-5">
        <h1 className="text-2xl font-bold">{displayName}</h1>
        <p className="text-xs mt-[-5px]">{firebaseEmail}</p>
      </div>
       <h2 className="text-xl font-bold">Book: {tourName}</h2>

      <p className="mb-4">Price: ${price}</p>
      <textarea
        placeholder="Special note (optional)"
        className="w-full p-2 border rounded mb-4"
      ></textarea>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Confirm Booking
      </button>
    <div className="modal-action">
    </div>
  </div>
</dialog>
    </>
{/* {
  showModal &&(
  )
} */}

    </div>
  );
};

export default HomeCardDetails;
