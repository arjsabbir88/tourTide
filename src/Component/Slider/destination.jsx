import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const destinations = [
  {
    name: 'Kathmandu',
    hotels: '1,152',
    img: 'https://i.ibb.co/N6hYR13P/pexels-sampreety-ali-213915-695794.jpg',
  },
  {
    name: 'Bangkok',
    hotels: '4,351',
    img: 'https://i.ibb.co/S75BtxKs/pexels-rezwan-nobi-741721-1633318.jpg',
  },
  {
    name: 'Singapore',
    hotels: '813',
    img: 'https://i.ibb.co/wNfCJmB0/pexels-rony-storyteller-499458095-30923523.jpg',
  },
  {
    name: 'Kuala Lumpur',
    hotels: '2,464',
    img: 'https://i.ibb.co/Z6zFTcP9/pexels-maksudur-rahman-138931853-13584828.jpg',
  },
  {
    name: 'Kuala Lumpur',
    hotels: '2,464',
    img: 'https://i.ibb.co/SD1FMq28/pexels-rushow-122107.jpg',
  },
];

const DestinationSlider = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-2">Most Popular Destinations</h2>
      <p className="text-center text-gray-500 mb-8">
        Expand your travel horizons with new facets! Explore the world by choosing your ideal travel
        destinations in Asia, Europe, America, Australia and more with ShareTrip.
      </p>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {destinations.map((place, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-xl overflow-hidden shadow-lg ">
              <img src={place.img} alt={place.name} className="h-80 w-full object-cover hover:scale-105 duration-75" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white p-4">
                <h3 className="text-lg font-semibold">{place.name}</h3>
                <p>{place.hotels} Hotels Available</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DestinationSlider;
