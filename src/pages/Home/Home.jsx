import React, { useEffect } from "react";
import HomePageBanner from "./HomeBanner";
import { Link, useLoaderData } from "react-router";
import TourCard from "../../Component/TourCard/TourCard";
import Slider from "../../Component/Slider/Slider";
import DestinationSlider from "../../Component/Slider/destination";
import FlightRoutes from "../../Component/FlightDate/FlightRutes";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import TopAirlines from "../../Component/TopAirlines/TopAirlines";

const Home = () => {

  useEffect(()=>{
    document.title = "Home | TourTide"
  },[])

  const tourCardData = useLoaderData();
  // console.log(tourCardData);

  return (
    <div className="my-5">
      <div>
        <HomePageBanner />
      </div>
      <div className="my-10">
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[40px] font-bold capitalize"
        > */}
          <div className="text-center my-6">
            <Fade direction="left">
              <h1 className="text-3xl text-[#00224D] font-bold">
              Welcome to TourTide
            </h1>
            </Fade>
            <Fade cascade damping={0.2} delay={200} duration={1000}>
              <p className="text-xs">
                Your journey begins here – unforgettable adventures, handpicked
                for every traveler.
              </p>
            </Fade>
          </div>
        {/* </motion.p> */}
        {/* <Slide > */}
          <Fade delay={100} duration={1000} triggerOnce>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {tourCardData.map((tourCard) => (
            <TourCard key={tourCard._id} tourCard={tourCard}></TourCard>
          ))}

        </div>
          </Fade>
        {/* </Slide> */}
        <div className="w-full my-10 flex justify-center">
          <Link
            to="/all-packages"
            className="btn btn-soft bg-[#FF204E] hover:bg-[#00224D] hover:text-white"
          >
            Show All
          </Link>
        </div>
      </div>

      <div>
        <TopAirlines></TopAirlines>
      </div>

      <div>
        <Slide direction="up" cascade triggerOnce>

        <DestinationSlider></DestinationSlider>
        </Slide>
        <Slide direction="left" cascade triggerOnce>

        
        <Slider></Slider>
        </Slide>
      </div>
      <div>
        <Fade delay={200} duration={1000} fraction={0.5} triggerOnce >
          <FlightRoutes></FlightRoutes>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
