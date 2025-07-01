import React from "react";
import { MdDelete } from "react-icons/md";
import { BsDatabaseFillGear } from "react-icons/bs";
import { Link } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

const ManageRow = ({ data, onDeleteStatus }) => {
  // console.log(data)

  const {
    bookingCount: { default: bookingDefault },
    contact,
    created_at,
    date,
    departureLocation,
    destination,
    details,
    duration,
    email,
    guideName,
    guidePhoto,
    photo,
    price,
    tourName,
    _id,
  } = data;

  const handleDeletePackage = (id) => {
    // console.log('clicked');

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://tour-tide-server.vercel.app/package/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Package has been deleted.", "success");
              onDeleteStatus(id);
            }
          })
          .catch((err) => {
            //   console.error(err);
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  return (
    <tr className="bg-amber-200">
      <td>
        <div className="flex items-center">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div className="ml-5">
            <div className="font-bold">{tourName}</div>
            <div className="text-sm badge badge-ghost badge-sm opacity-50">
              {price} tk
            </div>
          </div>
        </div>
      </td>
      <td>
        {details}
        <br />
        <span className="badge badge-ghost badge-sm">{duration}</span>
      </td>
      <td>{departureLocation}</td>
      <td>{destination}</td>
      <td>{date}</td>
      <td>{contact}</td>
      <th>
        <Link
          to={`/update-package/${_id}`}
          className="btn text-lg py-3 bg-green-600 btn-soft hover:bg-[#00224D] text-white btn-xs"
        >
          {<BsDatabaseFillGear />}
        </Link>
        <button
          onClick={() => handleDeletePackage(_id)}
          className="btn text-lg py-3 bg-green-600 btn-soft hover:bg-[#00224D] text-white btn-xs"
        >
          {<MdDelete />}
        </button>
      </th>
    </tr>
  );
};

export default ManageRow;
