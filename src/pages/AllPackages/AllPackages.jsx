import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router";
import Banner from "../../Component/Banner/Banner";
import Packages from "./Packages";
import Loader from "../../Component/Loader/Loader";

const AllPackages = () => {
  const allPackages = useLoaderData();
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [searchPackages, setSearchPackages] = useState([]);
  // console.log(searchPackages);

  if (!allPackages || allPackages.length === 0) {
    return <Loader />;
  }

  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }

  const handleSearch = () => {
    console.log(searchText);
    fetch(`http://localhost:3000/all-packages/search?text=${searchText}`)
      .then((res) => res.json())
      .then((data) => setSearchPackages(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <Banner></Banner>
      </div>
      <div className="bg-amber-200 max-w-full md:max-w-1/2 lg:max-w-2/4 rounded-2xl relative top-[-30px] z-10 h-40 mx-auto flex flex-col justify-center items-center">
        <h1 className="text-xs md:text-lg inline lg:text-3xl font-bold text-[#00224D] my-4">
          TourTide made for you
        </h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Search tour or destination..."
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
        </div>
      </div>

      <div className="my-10">
        <div className="text-center my-10">
          <h1 className="text-3xl font-bold text-[#00224D]">
            Choices your package
          </h1>
          <p className="text-xs text-gray-500">
            Every great adventure becomes unforgettable when shared with the
            right people. That’s why we believe the best journeys are the ones
            taken together <br /> filled with laughter, new friendships, and
            lasting memories.
          </p>
        </div>
        {searchPackages.length!==0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
            {searchPackages.map((packageData) => (
              <Packages
                key={packageData._id}
                packageData={packageData}
              ></Packages>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
            {allPackages.map((packageData) => (
              <Packages
                key={packageData._id}
                packageData={packageData}
              ></Packages>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllPackages;
