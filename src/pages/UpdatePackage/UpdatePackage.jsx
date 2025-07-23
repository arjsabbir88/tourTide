import axios from "axios";
import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdatePackage = () => {
  const manageData = useLoaderData();
  const navigate = useNavigate();
  const {
    bookingCount: { default: bookingDefault },
    contact,
    created_at,
    date,
    departureLocation,
    destination,
    details,
    duration,
    photo,
    price,
    tourName,
    _id,
  } = manageData;

  const handleUpdatePackage = (e) => {
    e.preventDefault();
    // console.log('clicked')

    const form = e.target;
    const formData = new FormData(form);
    const convertedData = Object.fromEntries(formData.entries());
    // console.log(convertedData);
    axios
      .patch(`http://localhost:3000/package/${_id}`, convertedData)
      .then((result) => {
        // console.log(result)
        toast.success("Your Package is updated");
        navigate("/managePackages");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#00224D]">
        Update Tour Package
      </h2>
      <form onSubmit={handleUpdatePackage} className="space-y-6">
        <fieldset className="border border-gray-300 p-4 rounded-xl">
          <legend className="text-lg font-semibold text-gray-700 px-2">
            Tour Information
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* input for tourName */}
            <div>
              <label className="block font-medium text-gray-600">
                Tour Name
              </label>
              <input
                type="text"
                name="tourName"
                className="w-full input input-bordered mt-1 rounded-lg"
                defaultValue={tourName}
              />
            </div>

            {/* input for photo */}
            <div>
              <label className="block font-medium text-gray-600">
                Image URL
              </label>
              <input
                type="text"
                name="photo"
                className="w-full input input-bordered mt-1 rounded-lg"
                defaultValue={photo}
              />
            </div>

            {/* duration */}
            <div>
              <label className="block font-medium text-gray-600">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                placeholder="e.g. 3 Days 2 Nights"
                className="w-full input input-bordered mt-1 rounded-lg"
                defaultValue={duration}
              />
            </div>

            {/* location */}
            <div>
              <label className="block font-medium text-gray-600">
                Departure Location
              </label>
              <input
                type="text"
                name="departureLocation"
                className="w-full input input-bordered mt-1 rounded-lg"
                defaultValue={departureLocation}
              />
            </div>

            {/* destination */}
            <div>
              <label className="block font-medium text-gray-600">
                Destination
              </label>
              <input
                type="text"
                name="destination"
                className="w-full input input-bordered mt-1 rounded-lg"
                defaultValue={destination}
              />
            </div>

            {/* price */}
            <div>
              <label className="block font-medium text-gray-600">Price</label>
              <input
                type="text"
                name="price"
                className="w-full input input-bordered mt-1 rounded-lg"
                defaultValue={price}
              />
            </div>

            {/* date */}
            <div>
              <label className="block font-medium text-gray-600">
                Departure Date
              </label>
              <input
                type="date"
                name="date"
                className="w-full input input-bordered mt-1 rounded-lg"
                defaultValue={date}
              />
            </div>

            {/* contact */}
            <div>
              <label className="block font-medium text-gray-600">
                Contact No.
              </label>
              <input
                type="tel"
                name="contact"
                className="w-full input input-bordered mt-1 rounded-lg"
                defaultValue={contact}
              />
            </div>
          </div>

          {/* package details */}
          <div className="mt-4">
            <label className="block font-medium text-gray-600">
              Package Details
            </label>
            <textarea
              rows="4"
              name="details"
              className="w-full textarea textarea-bordered mt-1 rounded-lg"
              defaultValue={details}
            ></textarea>
          </div>
        </fieldset>
        <div className="text-center pt-4">
          <button
            type="submit"
            className="btn btn-soft bg-[#FF204E] hover:bg-[#00224D] px-6 py-2 text-white rounded-lg"
          >
            Submit Package
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePackage;
