import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loader from "../../Component/Loader/Loader";
import { toast } from "react-toastify";
import BookingRows from "./BookingRows";
import { Link } from "react-router";
import ErrorPage from "../404-pages/ErrorPage";
import { Fade } from "react-awesome-reveal";
import Login from "../Authentication/Login/Login";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    document.title = "My-bookings | TourTide";
  }, []);

  if (!token) {
    return <Login></Login>;
  }
  // console.log(myBookings)

  useEffect(() => {
    if (!user?.email) return <Loader></Loader>;

    fetch(`http://localhost:3000/my-bookings?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch bookings");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setMyBookings(data);
        setLoading(false);
      })
      .catch((error) => {
        // console.error("Error fetching bookings:", error);
        return { error: error.message };
      });
  }, [user?.email]);

  const handleStatusUpdate = (id) => {
    const updated = myBookings.map((booking) =>
      booking._id === id ? { ...booking, status: "Completed" } : booking
    );
    setMyBookings(updated);
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <div className="min-h-screen">
        {myBookings.length === 0 ? (
          <Fade delay={150} duration={1200} triggerOnce cascade>
            <div className="text-center font-semibold my-10 ">
              <h1 className="text-3xl text-[#00224D] font-bold">
                Welcome to TourTide
              </h1>
              <p className="text-xs">
                Your journey begins here – unforgettable adventures, handpicked
                for every traveler.
              </p>
              <div className="my-30 text-red-500">
                <h3>You have no tour bookings yet!</h3>
                <Link
                  to="/all-packages"
                  className="btn btn-soft bg-[#FF204E] hover:bg-[#00224D] hover:text-white my-5"
                >
                  Go For Booking
                </Link>
              </div>
            </div>
          </Fade>
        ) : (
          <>
            <div className="text-center my-6">
              <Fade direction="right" delay={100} duration={1000}>
                <h1 className="text-3xl text-[#00224D] font-bold">
                  Welcome to TourTide
                </h1>
              </Fade>
              <p className="text-xs">
                Your journey begins here – unforgettable adventures, handpicked
                for every traveler.
              </p>
            </div>
            <Fade delay={200} duration={2000} triggerOnce cascade>
              <div className="overflow-x-auto my-10">
                <table className="table">
                  {/* head */}
                  {/* <Fade delay={120} duration={1400} triggerOnce cascade> */}
                  <thead>
                    <tr>
                      <th>Guide Name</th>
                      <th>Tour Name</th>
                      <th>Departure location</th>
                      <th>Destination</th>
                      <th>Departure Date</th>
                      <th>Special Note</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  {/* </Fade> */}
                  {/* <Fade direction="left" delay={200} duration={2000} triggerOnce cascade> */}
                  <tbody>
                    {myBookings.map((bookings) => (
                      <BookingRows
                        key={bookings._id}
                        bookings={bookings}
                        onStatusUpdate={handleStatusUpdate}
                      ></BookingRows>
                    ))}
                  </tbody>
                  {/* </Fade> */}
                </table>
              </div>
            </Fade>
          </>
        )}
      </div>
    </>
  );
};

export default MyBooking;
