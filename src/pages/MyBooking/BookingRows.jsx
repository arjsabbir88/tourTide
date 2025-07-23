import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingRows = ({ bookings, onStatusUpdate }) => {
  const {
    booking_date,
    departure_date,
    guide_email,
    guide_name,
    note,
    status,
    tour_name,
    departure_location,
    destination,
    _id,
  } = bookings;

  // console.log(_id)
  // console.log(bookings)
  const [myBookings, setMyBookings] = useState([]);
  // console.log('mybooking', myBookings)

  const handleStatus = () => {
    // console.log('clicked')
    axios
      .patch(`https://tour-tide-server.vercel.app/bookings/${_id}`)
      .then((result) => {
        // console.log(result)
        if (result.data.modifiedCount > 0) {
          onStatusUpdate(_id);
          toast.success("Thanks for confirming your booking");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <tr>
      <td>
        <div className="flex items-center">
          <div>
            <div className="font-bold">{guide_name}</div>
            <div className="text-sm opacity-50">{guide_email}</div>
          </div>
        </div>
      </td>
      <td>
        {tour_name}
        <br />
        <span className="badge badge-ghost badge-sm">{booking_date}</span>
      </td>
      <td>{departure_location}</td>
      <td>{destination}</td>
      <td>{departure_date}</td>
      <td>{note}</td>
      <td className="font-bold">{status}</td>
      <th>
        <button
          onClick={handleStatus}
          className="btn text-lg py-3 bg-green-600 btn-soft hover:bg-[#00224D] text-white btn-xs"
        >
          {status === "Completed" ? "Confirmed" : "Confirm"}
        </button>
      </th>
    </tr>
  );
};

export default BookingRows;
