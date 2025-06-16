import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ManageRow from './ManageRow';
import Loader from '../../Component/Loader/Loader';

const ManagePackages = () => {

  const {user} = useContext(AuthContext)
  const [manageData, setManageData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch(`http://localhost:3000/all-packages/manage-package?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setManageData(data)
      setLoading(false)
    })
    .catch(error=> console.log(error.message));
  },[user?.email])


  const handleDeleteStatus = (id)=>{
    const updated = manageData.filter((item) => item._id !== id);
    setManageData(updated);
  }

  if(loading){
    return <Loader></Loader>
  }


  return (
    <>
      {
        manageData.length === 0 ? (
          <div className="text-center font-semibold my-10">
          <h1 className="text-3xl text-[#00224D] font-bold">
              You can manage package
            </h1>
            <p className="text-xs">
              Your journey begins here – unforgettable adventures, handpicked
              for every traveler.
            </p>
            <div className="my-30 text-red-500">
              <h3>You have no tour packages yet!</h3>
              <Link to='/add-package' className="btn btn-soft bg-[#FF204E] hover:bg-[#00224D] hover:text-white my-5">Go For Create Package</Link>
            </div>
        </div>
        ): (
          <div>
            <div className="text-center my-6">
            <h1 className="text-3xl text-[#00224D] font-bold">
              You can manage packages
            </h1>
            <p className="text-xs">
              Your journey begins here – unforgettable adventures, handpicked
              for every traveler.
            </p>
          </div>
          <div className="overflow-x-auto my-10 text-black">
            <table className="table bg-amber-100">
              {/* head */}
              <thead>
                <tr>
                  <th>Tour Name</th>
                  <th>Details</th>
                  <th>Departure location</th>
                  <th>Destination</th>
                  <th>Departure Date</th>
                  <th>Contract</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  manageData.map(data=> <ManageRow key={data._id} data={data} onDeleteStatus={handleDeleteStatus}></ManageRow>)
                }
              </tbody>
            </table>
          </div>
          </div>
        )
      }
    </>
  )
}

export default ManagePackages
