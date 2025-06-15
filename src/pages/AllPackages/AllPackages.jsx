import React from "react";
import { useLoaderData, useNavigation } from "react-router";
import Banner from "../../Component/Banner/Banner";
import Packages from "./Packages";
import Loader from "../../Component/Loader/Loader";

const AllPackages = () => {
  const allPackages = useLoaderData();

  if (!allPackages || allPackages.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <Banner></Banner>
      </div>

      <div className="my-10">
        <div className="text-center my-10">
          <h1 className="text-3xl font-bold text-[#00224D]">Choices your package</h1>
          <p className="text-xs text-gray-500">Every great adventure becomes unforgettable when shared with the right people. That’s why we believe the best  journeys are the ones taken together <br /> filled with laughter, new friendships, and lasting memories.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
          {allPackages.map((packageData) => (
            <Packages key={packageData._id} packageData={packageData}></Packages>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllPackages;
