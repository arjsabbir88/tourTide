import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const destinations = [
  {
    name: "Kathmandu",
    hotels: "1,152",
    img: "https://i.ibb.co/vC109kbW/jorg-angeli-1tyu-Lf-DOn-G0-unsplash.jpg",
  },
  {
    name: "Bangkok",
    hotels: "4,351",
    img: "https://i.ibb.co/PzfVX3sF/sasha-kaunas-TAg-GZWz6-Qg8-unsplash.jpg",
  },
  {
    name: "Singapore",
    hotels: "813",
    img: "https://i.ibb.co/hJwDtZWp/visualsofdana-T5p-L6ci-En-I-unsplash.jpg",
  },
  {
    name: "Kuala Lumpur",
    hotels: "2,464",
    img: "https://i.ibb.co/prQYKF4j/christian-lambert-vm-IWr0-Nnp-CQ-unsplash.jpg",
  },
  {
    name: "Kuala Lumpur",
    hotels: "2,464",
    img: "https://i.ibb.co/zWv5gJ9t/valeriia-bugaiova-p-PHge-Hz1uk-unsplash.jpg",
  },
  {
    name: "Kuala Lumpur",
    hotels: "2,464",
    img: "https://i.ibb.co/VbCpZRJ/vojtech-bruzek-Yrxr3bs-Pd-S0-unsplash.jpg",
  },
];

const DestinationSlider = () => {
  return (
    <div className="max-w-7xl mx-auto py-14 px-4">
      <h2 className="text-4xl font-bold text-center mb-3 text-gray-800">
        Best Hotels for Your Next Trip
      </h2>
      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        Luxurious or budget-friendly hotels, villas or resorts, browse
        accommodations at ShareTrip that meet the need. Book Long-term or
        short-term accommodation from our hotel deals
      </p>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {destinations.map((place, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-3xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-96 object-cover scale-100 hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-semibold drop-shadow-md">
                  {place.name}
                </h3>
                <p className="text-sm drop-shadow">
                  {place.hotels} Hotels Available
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DestinationSlider;
