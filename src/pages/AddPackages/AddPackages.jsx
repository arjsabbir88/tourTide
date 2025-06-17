import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import Loader from '../../Component/Loader/Loader';
import { toast } from 'react-toastify';

const AddPackages = () => {

  const {user,loading} = useContext(AuthContext);
   if(loading){
    return <Loader></Loader>
  }
  if(!user){
    return <Loader></Loader>
  }

  // const {displayName,email,photoURL} = user

    const displayName = user?.displayName;
    const email = user?.email;
    const photoURL = user?.photoURL

  // console.log(displayName,email,photoURL)


  // function for handleFrom data
  const handleAddPackagesData = (e)=>{
    e.preventDefault();
    // console.log('clicked')

    // collected data form from
    const from = e.target;
    const fromData = new FormData(from);
    const convertedData = Object.fromEntries(fromData.entries());

    const currentDate = new Date();
    
    const updateData = {...convertedData, created_at: currentDate, bookingCount: 0 }
    // console.log(updateData);

    // console.log(convertedData);

    axios.post('http://localhost:3000/add-tour-packages',updateData)
    .then((result)=>{
      // console.log(result.data)

      if(result.data.insertedId){
        toast.success("Your tour packages added successfully");
        from.reset();
      }
    })
    .catch((error)=>{
      toast.error("Something was wrong!! Try again letter");
    })


    // fetch('http://localhost:3000/add-tour-packages',{
    //   method: 'POST',
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(convertedData)
    // })
    // .then(res =>res.json())
    // .then(data=>console.log(data))
    // .catch(error => console.log(error))
  }

 

  return (
       <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#00224D]">
        Create Tour Package
      </h2>
      <form onSubmit={handleAddPackagesData} className="space-y-6">
        <fieldset className="border border-gray-300 p-4 rounded-xl">
          <legend className="text-lg font-semibold text-gray-700 px-2">Tour Information</legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* input for tourName */}
            <div>
              <label className="block font-medium text-gray-600">Tour Name</label>
              <input type="text" name='tourName' className="w-full input input-bordered mt-1 rounded-lg" />
            </div>

            {/* input for photo */}
            <div>
              <label className="block font-medium text-gray-600">Image URL</label>
              <input type="text" name='photo' className="w-full input input-bordered mt-1 rounded-lg" />
            </div>

            {/* duration */}
            <div>
              <label className="block font-medium text-gray-600">Duration</label>
              <input type="text" name='duration' placeholder="e.g. 3 Days 2 Nights" className="w-full input input-bordered mt-1 rounded-lg" />
            </div>

            {/* location */}
            <div>
              <label className="block font-medium text-gray-600">Departure Location</label>
              <input type="text" name='departureLocation' className="w-full input input-bordered mt-1 rounded-lg" />
            </div>

            {/* destination */}
            <div>
              <label className="block font-medium text-gray-600">Destination</label>
              <input type="text" name='destination' className="w-full input input-bordered mt-1 rounded-lg" />
            </div>

            {/* price */}
            <div>
              <label className="block font-medium text-gray-600">Price</label>
              <input type="text" name='price' className="w-full input input-bordered mt-1 rounded-lg" />
            </div>

            {/* date */}
            <div>
              <label className="block font-medium text-gray-600">Departure Date</label>
              <input type="date" name='date' className="w-full input input-bordered mt-1 rounded-lg" />
            </div>

            {/* contact */}
            <div>
              <label className="block font-medium text-gray-600">Contact No.</label>
              <input type="tel" name='contact' className="w-full input input-bordered mt-1 rounded-lg" />
            </div>
          </div>

            {/* package details */}
          <div className="mt-4">
            <label className="block font-medium text-gray-600">Package Details</label>
            <textarea rows="4" name='details' className="w-full textarea textarea-bordered mt-1 rounded-lg"></textarea>
          </div>
        </fieldset>


        {/* data form firebase  */}
        <fieldset className="border border-gray-300 p-4 rounded-xl">
          <legend className="text-lg font-semibold text-gray-700 px-2">Guide Information</legend>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {/* guide name */}
            <div>
              <label className="block font-medium text-gray-600">Guide Name</label>
              <input type="text" name='guideName' className="w-full input input-bordered mt-1 rounded-lg" defaultValue={displayName} readOnly/>
            </div>

            {/* guide Email form firebase */}
            <div>
              <label className="block font-medium text-gray-600">Guide Email</label>
              <input type="email" name='email' className="w-full input input-bordered mt-1 rounded-lg" defaultValue={email} readOnly/>
            </div>

            {/* guidePhoto */}
            <div>
              <label className="block font-medium text-gray-600">Guide Photo URL</label>
              <input type="text" name='guidePhoto' className="w-full input input-bordered mt-1 rounded-lg" defaultValue={photoURL} readOnly/>
            </div>
          </div>
        </fieldset>

        <div className="text-center pt-4">
          <button type="submit" className="btn bg-[#FF204E] px-6 py-2 text-white rounded-lg">
            Submit Package
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddPackages
